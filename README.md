# Bread The Love - Backend App
Find the frontend app [here](https://github.com/monicaleep/Breadlove-frontend)
Routes:
[LucidChart ORM](https://lucid.app/lucidchart/invitations/accept/ae319f4e-0212-4a7a-bf06-16e8420237fa)










### explanation of backend tech used
- Node packages: Express, dotenv,  jwt,  bcrypt, pg, sequelize
- Postgres database connected via Sequelize ORM.
### general approach (a couple paragraphs)
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



### table with RESTful routes & resources available at each endpoint

### unsolved problems / major hurdles

### link to deployed api
