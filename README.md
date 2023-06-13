# Codebridge

## Description
Test task to the Codebridge company. The essence of the building is to write a REST API using MS SQL.

## Setting
First you need to make sure that you have **docker** and **docker-compose** installed. Next you need to follow these instructions:
* Clone repo:
```
git clone https://github.com/mamamamamaa/codebridge_test.git
```
* Create `.env` file and add the following variables to it:
```
PORT=
DATABASE_USER=
DATABASE_PORT=
DATABASE_PASSWORD=
```
* Run project:
```
docker-compose up
```

## Testing

Then you have to wait until all the images are downloaded/assembled and the database is initialized. When you see the "***Connection successful***" message from the ***codebridge_test-backend*** container in the terminal, you can start testing the api on the following endpoints:
* GET: http://localhost:<***PORT***>/ping
* GET: http://localhost:<***PORT***>/dogs
* POST: http://localhost:<***PORT***>/dog
