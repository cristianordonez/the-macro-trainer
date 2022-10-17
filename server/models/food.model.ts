import { FoodNutrition, Query } from '../../types/types';
import { db } from '../database/db';

interface AllergyMap {
   dairy: string;
   eggs: string;
   soy: string;
   tree_nuts: string;
   peanuts: string;
   shellfish: string;
   fish: string;
   wheat: string;
}

const allergyMap = {
   dairy: `AND ingredients !~* 'cheese'
   AND ingredients !~* 'butter'
   AND ingredients !~* 'casein'
   AND ingredients !~* 'cream'
   AND ingredients !~* 'milk'
   AND ingredients !~* 'lactose'
   AND ingredients !~* 'yogurt'
   AND ingredients !~* 'whey'
   AND ingredients !~* 'dairy'
   `,
   eggs: `AND ingredients !~* 'albumin'
   AND ingredients !~* 'egg'
   AND ingredients !~* 'meringue'
   AND ingredients !~* 'ovo'
   AND ingredients !~* 'surimi'
   AND ingredients !~* 'vitellin'
   AND ingredients !~* 'globulin'
   AND ingredients !~* 'mayonnaise'
   `,
   soy: `AND ingredients !~* 'soy'
   AND ingredients !~* 'edamame'
   AND ingredients !~* 'natto'
   AND ingredients !~* 'tofu'
   AND ingredients !~* 'tamari'
   AND ingredients !~* 'tempeh'
   `,
   tree_nuts: `AND ingredients !~* 'almond'
   AND ingredients !~* 'nut'
   AND ingredients !~* 'cashew'
   AND ingredients !~* 'pecan'
   AND ingredients !~* 'pistachio'
   `,
   peanuts: `AND ingredients !~* 'nut'
   AND ingredients !~* 'lupin'
   `,
   shellfish: `AND ingredients !~* 'barnacle'
   AND ingredients !~* 'crab'
   AND ingredients !~* 'crawfish'
   AND ingredients !~* 'krill'
   AND ingredients !~* 'lobster'
   AND ingredients !~* 'prawns'
   AND ingredients !~* 'shrimp'
   AND ingredients !~* 'mollusk'
   AND ingredients !~* 'shellfish'
   `,
   fish: `AND ingredients !~* 'fish'
   AND ingredients !~* 'anchovies'
   AND ingredients !~* 'pike'
   AND ingredients !~* 'pollock'
   AND ingredients !~* 'salmon'
   AND ingredients !~* 'sole'
   AND ingredients !~* 'snapper'
   AND ingredients !~* 'bass'
   AND ingredients !~* 'flounder'
   AND ingredients !~* 'mahi'
   AND ingredients !~* 'tilapia'
   AND ingredients !~* 'tuna'
   AND ingredients !~* 'trout'
   AND ingredients !~* 'salmon'
   AND ingredients !~* 'haddock'
   AND ingredients !~* 'herring'
   AND ingredients !~* 'cod'
   `,
   wheat: `AND ingredients !~* 'bran'
   AND ingredients !~* 'pasta'
   AND ingredients !~* 'bread'
   AND ingredients !~* 'cereal'
   AND ingredients !~* 'cracker'
   AND ingredients !~* 'wheat'
   AND ingredients !~* 'bulgur'
   AND ingredients !~* 'couscous'
   AND ingredients !~* 'flour'
   AND ingredients !~* 'gluten'
   AND ingredients !~* 'matzo'
   `,
};

const get = (query: Query) => {
   const selectQuery = `SELECT 
 	food.fdc_id, 
 	food.description, 
 	branded_food.brand_owner,
   modifier,
   gram_weight,
	custom_food.brand_owner as custom_food_brand_owner,
   custom_food.serving_size AS custom_food_serving_size,
   custom_food.serving_size_unit AS custom_food_serving_size_unit,
 	branded_food.serving_size,
   branded_food.serving_size_unit,
   food.data_type,
   row_to_json(food_nutrition.*) AS nutrition
   FROM food
 	INNER JOIN food_nutrition ON food.fdc_id = food_nutrition.fdc_id
   LEFT JOIN branded_food ON food.fdc_id = branded_food.fdc_id
   LEFT JOIN custom_food on custom_food.fdc_id = food.fdc_id
   LEFT JOIN food_portion on food.fdc_id = food_portion.fdc_id
   WHERE description ~* $<query.query>
   AND calories IS NOT null
 	LIMIT $<query.number> OFFSET $<query.offset>
      `;
   const matchingItems = db.any(selectQuery, {
      query: query,
   });
   return matchingItems;
};

const getByBrand = (query: Query) => {
   const selectQuery = `SELECT 
 	food.fdc_id, 
 	food.description, 
 	branded_food.brand_owner,
	custom_food.brand_name as custom_food_brand_owner,
   custom_food.serving_size AS custom_food_serving_size,
   custom_food.serving_size_unit AS custom_food_serving_size_unit,
 	branded_food.serving_size,
   branded_food.serving_size_unit,
   food.data_type,
   row_to_json(food_nutrition.*) AS nutrition
   FROM food
 	INNER JOIN food_nutrition ON food.fdc_id = food_nutrition.fdc_id
   LEFT JOIN branded_food ON food.fdc_id = branded_food.fdc_id
   LEFT JOIN custom_food on custom_food.fdc_id = food.fdc_id
   WHERE (branded_food.brand_owner ~* $<query.query> OR custom_food.brand_owner ~* $<query.query>)
 	LIMIT $<query.number> OFFSET $<query.offset>
      `;
   const matchingItems = db.any(selectQuery, {
      query: query,
   });
   return matchingItems;
};

const getAdvanced = (query: Query) => {
   const selectContentsQuery = `SELECT 
    food.fdc_id,
    food.description,
    branded_food.brand_owner,
    custom_food.brand_owner as custom_food_brand_owner,
    custom_food.serving_size AS custom_food_serving_size,
    custom_food.serving_size_unit AS custom_food_serving_size_unit,
    branded_food.serving_size,
    branded_food.serving_size_unit,
    food.data_type,
    row_to_json(food_nutrition.*) AS nutrition
    FROM food
	 INNER JOIN food_nutrition ON food.fdc_id = food_nutrition.fdc_id
    LEFT JOIN branded_food ON food.fdc_id = branded_food.fdc_id
    LEFT JOIN custom_food on custom_food.fdc_id = food.fdc_id
    WHERE description ~* $<query.query> 
    AND calories BETWEEN $<query.minCalories> AND $<query.maxCalories>
   AND total_fat BETWEEN $<query.minFat> AND $<query.maxFat>
   AND protein BETWEEN $<query.minProtein> AND $<query.maxProtein> 
   AND total_carbohydrates BETWEEN $<query.minCarbs> AND $<query.maxCarbs>
   `;
   const allergyQuery =
      query.allergy === '' ? '' : allergyMap[query.allergy as keyof AllergyMap];
   const limitQuery = `LIMIT $<query.number> OFFSET $<query.offset>`;
   const currentQuery = selectContentsQuery + allergyQuery + limitQuery;
   const matchingItems = db.any(currentQuery, {
      query: query,
   });
   return matchingItems;
};

const getAdvancedByBrand = (query: Query) => {
   const selectContentsQuery = `SELECT 
    food.fdc_id,
    food.description,
    branded_food.brand_owner,
    custom_food.brand_owner as custom_food_brand_owner,
    custom_food.serving_size AS custom_food_serving_size,
    custom_food.serving_size_unit AS custom_food_serving_size_unit,
    branded_food.serving_size,
    branded_food.serving_size_unit,
    food.data_type,
    row_to_json(food_nutrition.*) AS nutrition
    FROM food
	 INNER JOIN food_nutrition ON food.fdc_id = food_nutrition.fdc_id
    LEFT JOIN branded_food ON food.fdc_id = branded_food.fdc_id
    LEFT JOIN custom_food on custom_food.fdc_id = food.fdc_id
    WHERE (branded_food.brand_owner ~* $<query.query> OR custom_food.brand_owner ~* $<query.query>) 
    AND calories BETWEEN $<query.minCalories> AND $<query.maxCalories>
   AND total_fat BETWEEN $<query.minFat> AND $<query.maxFat>
   AND protein BETWEEN $<query.minProtein> AND $<query.maxProtein>
   AND total_carbohydrates BETWEEN $<query.minCarbs> AND $<query.maxCarbs>
   `;
   const allergyQuery =
      query.allergy === '' ? '' : allergyMap[query.allergy as keyof AllergyMap];
   const limitQuery = `LIMIT $<query.number> OFFSET $<query.offset>`;
   const currentQuery = selectContentsQuery + allergyQuery + limitQuery;
   const matchingItems = db.any(currentQuery, {
      query: query,
   });
   return matchingItems;
};

const createFood = (
   description: string,
   serving_size_conversion_factor: number,
   brand_owner: string,
   serving_size: number | string,
   serving_size_unit: string,
   user_id: number | string,
   nutrition: FoodNutrition,
   standardized_conversion_factor: number
) => {
   const createFoodQuery = `With getId AS 
   (INSERT INTO food (data_type, description, serving_size_conversion_factor) 
   VALUES ('custom', $1, $2) 
   RETURNING fdc_id)
   INSERT INTO custom_food 
   (brand_owner, serving_size, serving_size_unit, fdc_id, user_id) 
   VALUES ($3, $4, $5, (SELECT fdc_id FROM getId), $6)
   RETURNING fdc_id`;

   return db.task(async (t: any) => {
      const fdc_id = await t.one(createFoodQuery, [
         description,
         serving_size_conversion_factor,
         brand_owner,
         serving_size,
         serving_size_unit,
         user_id,
      ]);
      Object.keys(nutrition).forEach((nutrient) => {
         if (
            nutrition[nutrient as keyof typeof nutrition] !== '' &&
            nutrition !== null
         ) {
            nutrition[nutrient as keyof typeof nutrition] =
               standardized_conversion_factor *
               Number(nutrition[nutrient as keyof typeof nutrition]);
         } else {
            nutrition[nutrient as keyof typeof nutrition] = null;
         }
      });
      const createFoodNutritionQuery = `INSERT INTO food_nutrition 
         (fdc_id, calories, total_fat, total_carbohydrates, protein, trans_fat,
         polyunsaturated_fat, monounsaturated_fat, cholesterol, dietary_fiber,
         sugar, vitamin_d, calcium, saturated_fat, sodium, iron, potassium, vitamin_a, vitamin_c)
         VALUES ($<fdc_id.fdc_id>, $<nutrition.calories>, 
         $<nutrition.total_fat>,
         $<nutrition.total_carbohydrates>,
         $<nutrition.protein>,
         $<nutrition.trans_fat>,
         $<nutrition.polyunsaturated_fat>,
         $<nutrition.monounsaturated_fat>,
         $<nutrition.cholesterol>,
         $<nutrition.dietary_fiber>,
         $<nutrition.sugar>,
         $<nutrition.vitamin_d>,
         $<nutrition.calcium>,
         $<nutrition.saturated_fat>,
         $<nutrition.sodium>,
         $<nutrition.iron>,
         $<nutrition.potassium>,
         $<nutrition.vitamin_a>,
         $<nutrition.vitamin_c>) RETURNING fdc_id`;
      const nutritionFdcId = await t.one(createFoodNutritionQuery, {
         nutrition,
         fdc_id,
         standardized_conversion_factor,
      });
      return nutritionFdcId;
   });
};

const getSampleItems = () => {
   const getSampleItemsQuery = `SELECT food.fdc_id, 
 	food.description, 
 	branded_food.brand_owner,
   modifier,
   gram_weight,
 	branded_food.serving_size,
   branded_food.serving_size_unit,
   food.data_type,
   row_to_json(food_nutrition.*) AS nutrition
   FROM food
 	INNER JOIN food_nutrition ON food.fdc_id = food_nutrition.fdc_id
   LEFT JOIN branded_food ON food.fdc_id = branded_food.fdc_id
   LEFT JOIN food_portion on food.fdc_id = food_portion.fdc_id
   WHERE calories IS NOT null
   AND data_type = 'branded_food'
   LIMIT 10`;

   return db.query(getSampleItemsQuery);
};

export {
   get,
   getByBrand,
   getAdvanced,
   getAdvancedByBrand,
   createFood,
   getSampleItems,
};
