# multidatabase-connection
Multidatabase connection, dynamic database connection, tested on postgres database

.
There are two databases such as multidatabase1 and multidatabase2 in .env file and default one is multidatabase1.
You don't need to add databases in .env file but add atleast one database in the .env file which will work as default database.

If you want to use the dynamic databases then you will need to pass your database name in headers in request.

################################################

Make sure, Models and controllers are in the proper way to use the dynamic databases. 
You can follow the current existing model and controller functionality for more controllersand models.


Note: Everything has been tested with Postgres database.
