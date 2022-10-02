import { Query } from '../../types/types';
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
   dairy: `AND ingredients NOT ILIKE '%cheese%'
   AND ingredients NOT ILIKE '%butter%'
   AND ingredients NOT ILIKE '%casein%'
   AND ingredients NOT ILIKE '%cream%'
   AND ingredients NOT ILIKE '%milk%'
   AND ingredients NOT ILIKE '%lactose%'
   AND ingredients NOT ILIKE '%yogurt%'
   AND ingredients NOT ILIKE '%whey%'
   AND ingredients NOT ILIKE '%dairy%'
   `,
   eggs: `AND ingredients NOT ILIKE '%albumin%'
   AND ingredients NOT ILIKE '%egg%'
   AND ingredients NOT ILIKE '%meringue%'
   AND ingredients NOT ILIKE '%ovo%'
   AND ingredients NOT ILIKE '%surimi%'
   AND ingredients NOT ILIKE '%vitellin%'
   AND ingredients NOT ILIKE '%globulin%'
   AND ingredients NOT ILIKE '%mayonnaise%'
   `,
   soy: `AND ingredients NOT ILIKE '%soy%'
   AND ingredients NOT ILIKE '%edamame%'
   AND ingredients NOT ILIKE '%natto%'
   AND ingredients NOT ILIKE '%tofu%'
   AND ingredients NOT ILIKE '%tamari%'
   AND ingredients NOT ILIKE '%tempeh%'
   `,
   tree_nuts: `AND ingredients NOT ILIKE '%almond%'
   AND ingredients NOT ILIKE '%nut%'
   AND ingredients NOT ILIKE '%cashew%'
   AND ingredients NOT ILIKE '%pecan%'
   AND ingredients NOT ILIKE '%pistachio%'
   `,
   peanuts: `AND ingredients NOT ILIKE '%nut%'
   AND ingredients NOT ILIKE '%lupin%'
   `,
   shellfish: `AND ingredients NOT ILIKE '%barnacle%'
   AND ingredients NOT ILIKE '%crab%'
   AND ingredients NOT ILIKE '%crawfish%'
   AND ingredients NOT ILIKE '%krill%'
   AND ingredients NOT ILIKE '%lobster%'
   AND ingredients NOT ILIKE '%prawns%'
   AND ingredients NOT ILIKE '%shrimp%'
   AND ingredients NOT ILIKE '%mollusk%'
   AND ingredients NOT ILIKE '%shellfish%'
   `,
   fish: `AND ingredients NOT ILIKE '%fish%'
   AND ingredients NOT ILIKE '%anchovies%'
   AND ingredients NOT ILIKE '%pike%'
   AND ingredients NOT ILIKE '%pollock%'
   AND ingredients NOT ILIKE '%salmon%'
   AND ingredients NOT ILIKE '%sole%'
   AND ingredients NOT ILIKE '%snapper%'
   AND ingredients NOT ILIKE '%bass%'
   AND ingredients NOT ILIKE '%flounder%'
   AND ingredients NOT ILIKE '%mahi%'
   AND ingredients NOT ILIKE '%tilapia%'
   AND ingredients NOT ILIKE '%tuna%'
   AND ingredients NOT ILIKE '%trout%'
   AND ingredients NOT ILIKE '%salmon%'
   AND ingredients NOT ILIKE '%haddock%'
   AND ingredients NOT ILIKE '%herring%'
   AND ingredients NOT ILIKE '%cod%'
   `,
   wheat: `AND ingredients NOT ILIKE '%bran%'
   AND ingredients NOT ILIKE '%pasta%'
   AND ingredients NOT ILIKE '%bread%'
   AND ingredients NOT ILIKE '%cereal%'
   AND ingredients NOT ILIKE '%cracker%'
   AND ingredients NOT ILIKE '%wheat%'
   AND ingredients NOT ILIKE '%bulgur%'
   AND ingredients NOT ILIKE '%couscous%'
   AND ingredients NOT ILIKE '%flour%'
   AND ingredients NOT ILIKE '%gluten%'
   AND ingredients NOT ILIKE '%matzo%'
   `,
};

//# created view called food_nutrition_info which gets all essential data
// TODO find a way to avoid getting results with 0 calories without slowing down queries
const get = (query: Query) => {
   const selectQuery = `SELECT * FROM food_nutrition_info
      WHERE (description ILIKE '%${query.query}%' 
      OR brand_name ILIKE '%${query.query}%') AND calories IS NOT null
      LIMIT ${query.number} OFFSET ${query.offset}
      `;
   const matchingItems = db.query(selectQuery);
   return matchingItems;
};

const getAdvanced = (query: Query) => {
   const selectContentsQuery = `SELECT * FROM food_nutrition_info
   WHERE (description ILIKE '%${query.query}%' 
   OR brand_name ILIKE '%${query.query}%')
   AND calories BETWEEN ${query.minCalories} AND ${query.maxCalories}
   AND total_fat BETWEEN ${query.minFat} AND ${query.maxFat}
   AND protein BETWEEN ${query.minProtein} AND ${query.maxProtein} 
   AND total_carbohydrates BETWEEN ${query.minCarbs} AND ${query.maxCarbs}
   `;
   const allergyQuery =
      query.allergy === '' ? '' : allergyMap[query.allergy as keyof AllergyMap];
   const limitQuery = `LIMIT ${query.number} OFFSET ${query.offset}`;
   const currentQuery = selectContentsQuery + allergyQuery + limitQuery;
   const matchingItems = db.query(
      selectContentsQuery + allergyQuery + limitQuery
   );
   return matchingItems;
};

export { get, getAdvanced };
