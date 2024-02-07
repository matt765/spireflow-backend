npx prisma migrate dev --name init_data

heroku pg:psql database_name -app app_name
\dt - display all tables
\d table_name - display columns and types of single table
SELECT * from table_name; - display entire content of table