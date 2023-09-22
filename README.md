# JSONServer + JWT Auth

## Para rodar o back:

## $ npm install
## $ npm run start-auth

## Para receber o token:

POST http://localhost:8081/oauth/token

{
  "email": "jackson@gmail.com",
  "password":"jackson"
}


## Após receber o token:


GET http://localhost:8081/restaurantes
POST http://localhost:8081/restaurantes
DELETE http://localhost:8081/restaurantes
PACTH  http://localhost:8081/restaurantes

## pedidos:

GET http://localhost:8081/pedidos
POST http://localhost:8081/pedidos
DELETE http://localhost:8081/pedidos
PACTH http://localhost:8081/pedidos

## produtos: 

GET http://localhost:8081/produtos
POST http://localhost:8081/produtos
DELETE http://localhost:8081/produtos
PACTH http://localhost:8081/produtos


