[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yZWC7OmO)


## Cara Install

#### 1. Install dependencies
```
npm install
```

#### 2. Copy .env.example or rename the .env.example file to .env
```
cp .env.example .env
```
Edit the configuration inside .env, for example:
- MYSQLHOST=127.0.0.1
- MYSQLDATABASE=learn4u
- MYSQLUSER=(your database username)
- MYSQLPASSWORD=(your database password)
- MYSQLPORT=3306

In the example above we create database named learn4u which runs on Localhost (127.0.0.1) on port 3306

#### 3. Import database if you dont have the database (optional)
If you don't have the database on local uncomment this code on config/db_config.js
(You can comment it again after you run the seeder)
```js
// // create database if not exists on localhost
// const mysql = require('mysql2/promise');
// mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
// }).then((connection) => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQLDATABASE};`);
// }); 
```

#### 4. Import tables and dummy data with seeder
Run this command on your terminal first time only to import tables and dummy data or if you want to reset the database
```
npm run seed
```

#### 5. Run the server
```
npm run dev
```