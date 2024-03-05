# Knex Demo Startcode

After cloning this repository, you should run `npm install` to install the required dependencies.
You should also create a `.env` file in the root of the project, and add the following environment variables:

```plaintext
PORT=3000
DATABASE_TYPE=sqlite
DATABASE_NAME=knex-demo.sqlite3
NODE_ENV=development
```

## Working with the database

You have two options for working with the database. 
- Or you rename knex-demo-example-db.sqlite3 to knex-demo.sqlite3.
- Start with new database, by running the migrations and seeds

## Option 1: Using the database provided

**rename knex-demo-example-db.sqlite3 to knex-demo.sqlite3.**  
*BEST OPTION when starting with the project.*

## Option 2: Creating a new database

### Migrations

Please run the following command to create the database and tables:

```bash
npx knex migrate:latest
```

### Seeding

At this point, no seeds have been created. 
You could add some data by editting the database with DB Browser for SQLite.

It is also possible to create a seed file and run it using the following command:

```bash
npx knex seed:make 01_seed_name
```

This will create a seed file in the `seeds` directory. 
You should then add some data to the file, and run the seed using the following command:

```bash
npx knex seed:run
```

The data will then be added to the database.
Every time you run the seed, the data will be added to the database again, so be careful not to add the same data multiple times.


## Running the server

You can then run the server using `npm run start:dev`, and access the application at `http://localhost:3000`.

