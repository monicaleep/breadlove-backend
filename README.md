# Bread The Love - Backend App
Find the frontend app [here](https://github.com/monicaleep/Breadlove-frontend)


## RESTful Routes:

[LucidChart ORM](https://lucid.app/lucidchart/invitations/accept/ae319f4e-0212-4a7a-bf06-16e8420237fa)


| Verb | Endpoint | Action |
| ----------- | ----------- | ----------- |
| GET | '/' | Home page, returns all existing baked goods and how many comments each one received |
| ------ | ----------- | ----------- |
| POST | '/auth/login' | Signin page post route |
| POST | '/auth/signup' | Signup page post route |
| ------ | ----------- | ----------- |
| GET | '/profile'  | View your own profile  - index shows your info and list of all the baked goods you've made|
| DELETE | '/profile'  | Delete your own profile |
| ------ | ----------- | ----------- |
| POST | '/bread/' | Add a baked good|
| DELETE | '/bread/:id' | Delete a baked good |
| POST | '/bread/:id/comment' | Add a comment on an existing baked good|
| GET | '/bread/:id' | Get more information on a single baked good (includes comments) |
| PUT | '/bread/:id' | Update information on a baked good |




### explanation of backend tech used
* **RUNTIME ENVIRONMENT**

  * Node.js

* **FRAMEWORK**

  * Express

* **DATABASE**

  * Postgres / Sequelize

* **Auth/Security**

  * bcryptjs
  * JSON web tokens
  * CORS

### general approach (a couple paragraphs)
Bread the Love is an app which allows you to share your baked good creations with the world. You can view baked goods without having an account, but to comment or add your own, you must sign up. Once you have an account you can add you own baked good, including a photo, name and description. Then other users can comment and you can comment on theirs. 

The app requires a direct relationship between data tables, for that reason a SQL database was chosen to hold the data over a NoSQL database. JWT were used for authorization.

### installation instructions:

#### Instructions to Install it locally
1. Fork and clone
2. Install dependencies `npm i`
3. create a `config.json` with the following code:
```
{
  "development": {
    "database": "<insert dev db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert test db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert prod db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

```
*note:* if your database requires a username and password, you'll need to include these fields in the above as well
4. create the database
```
sequelize db:create <insert db name here>
```
5. Migrate the user model to your database
```
sequelize db:migrate
```
6. Add a `PORT` environment variable in a `.env` file.

7. run `nodemon` or `node index.js` in your terminal to start the app



### unsolved problems / major hurdles
- Adding the allergen data via a join table will be my next step.  I have already seeded allergen data but I need to update the create/edit routes to join with the bread data.

### link to deployed api
