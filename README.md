# The Diabetes Calculator

A meal planning application that allows users to calculate their recommended carbohydrate needs per meal to maintain stable blood glucose levels for T2DM, and then search for recipes, menu items, or grocery products that fit within these ranges.

View Miro: https://miro.com/app/board/uXjVOtvKH2s=/?share_link_id=720508772353

## Live Link

View live deployment [here](https://thediabetescalculator.com) or see the demo below.

## Features & Usage

-  create account with username, email, password or sign in using Google
-  Enter height, weight, age, gender, and activity level to calculate your total daily recommended calories, carbohydrates, protein, and fat for someone with Type 2 Diabetes Mellitus
-  Search for recipes, grocery products, or menu items from a list of over 800+ American restaurants (search results provided by [Spoonacular API](https://spoonacular.com/food-api))
-  Save your favorite food items to the day and meal of your choice to create a custom mealplan
-  Search for food items with any custom nutrient ranges
-  Edit your recommended nutrient ranges by using the Diabetes Calculator again or simply entering your preferred nutrient ranges
-  Dark and light modes are available for preferred viewing option, with preferred option being saved to local storage

## Roadmap

-  Allow other sign in methods including Apple or Facebook
-  Be able to search for specific ingredients
-  Can include food intolerances when searching for items
-  User can create a shopping list from their meal plan
-  Provide user the option to create a sample meal plan

## Demo

![homepage](./gifs/ezgif.com-gif-maker.gif)
![searchpage](./gifs/search-page.gif)
![mealplanpage](./gifs/mealplan-page.gif)

## Tech Stack

This project was built with the following technologies:

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />

## Setup/ Installation

-  Clone this repository and navigate to project directory in the terminal
-  Install necessary dependencies:

```bash
npm install
```

-  Create a client/dist directory and a index.html file for webpack to output content to.

-  Then, if environment is set for development, run the application like so:

```bash
npm run dev
```

This opens a development server in your local browser at port 3000.

-  To allow code-splitting to work when building files, must first change tsconfig.json 'module' variable to 'esnext'. Feel free to change back to 'commonjs' after building files to avoid errors with using import statements instead of require statements for modules.

-  When application is ready for production, have webpack build your bundle and minimize your files and then start the Express server:

```bash
npm run build
npm start
```

-  If application is hosted on an AWS EC2 instance, push changes to build to Github, connect to instance, then pull the updated changes (note free tier EC2 instance has issues with lower CPU power and cannot handle building full TypeScript project locally)

```bash
git push origin main
bash ec2-login.sh
git pull
```

-  Then restart PM2 process

```bash
sudo pm2 restart thediabetescalculator
```

Then navigate to port 8080 in your browser to view your application.

## Testing

-  Run unit tests with Jest/React Testing Library:

```bash
npm run jest
```

-Then run end to end tests with Cypress:

```bash
npm run cypress
```

-Or run both tests concurrently:

```bash
npm run test
```

## Database

-To connect to RDS instance hosting postgresql database:

```bash
bash rds-login.sh
```

-If having issues connecting to RDS from EC2 instance, make sure correct permissions are being sent, as the name of the user sending requests from the EC2 instance is called 'root'. Therefore give permissions to this user:

```bash
GRANT rds_superuser TO root;
```

-Data is retrieved from the USDA FoodData and includes branded foods, SR legacy foods and foundation foods.

-  Note that branded foods use the nutrient_nbr field in the nutrient table as a foreign key for nutrition, while other data types use the nutrient id

## Resources

-  [React code-splitting](https://reactjs.org/docs/code-splitting.html)
-  [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-  [Spoonacular API](https://spoonacular.com/food-api/docs)
-  [Set up tests with Jest and Supertest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest)
-  [Set up users for PostgreSQL](https://stackoverflow.com/questions/42749033/fatal-password-authentication-failed-for-user-root-postgresql)
-  [Fixing issues with setting up PostgreSQL on RDS](https://stackoverflow.com/questions/65877048/pgadmin-on-ubuntu-20-04-fatal-password-authentication-failed-for-user)
-  [Getting correct permissions to tables for requests sent from EC2 instance](https://stackoverflow.com/questions/55080121/amazon-rds-postgresql-role-cannot-access-tables)

-  https://stackoverflow.com/questions/6256610/updating-table-rows-in-postgres-using-subquery
