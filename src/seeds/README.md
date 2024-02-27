# Seeds

Only the files under src/seeds will be loaded into the database. The files are loaded in alphabetical order.
Seeds that are in the subfolder disabled will not be loaded into the database.

Before running the seeds, make sure to run the migrations first.

```bash
npx knex migrate:latest
```

To run the seeds, use the following command:

```bash
npx knex seed:run
```


