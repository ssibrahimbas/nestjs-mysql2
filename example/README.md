<p align="center"><br><img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px;" /></p>
<h3 align="center">@ssibrahimbas/nestjs-mysql2 example</h3>
<p align="center">
  mysql2 module and service for nest | example
</p>

Under this folder, there are usage examples of @ssibrahimbas/nestjs-mysql2 and @ssibrahimbas/query packages.

### Installation

Install all dependencies:

```
npm install
```

### Usage

Create a mysql database, its name should be `mydb`. Or change the database name in the `src/app.module.ts` file. Enter your database password in the password field

Then create the `users` table. It will have auto-increment id property and fullName, email varchar fields will be included.

### Start Application

```
npm start:dev
```

Then try following requests:

### Create User

```http request
POST http://localhost:3000/users/create
Content-Type: application/json

{
    "fullName": "Ssami",
    "email": "info@ssibrahimbas.com",
    "password": "12345"
}
```

### Get User By Id

```http request
GET http://localhost:3000/users/1
```

### Get All Users

```http request
GET http://localhost:3000/users
```