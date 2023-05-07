
## Description

I wanted to apply more consistency in the creation of records in my database, I took this [example](https://www.tomray.dev/nestjs-prisma) and I applied the operation of
 transaction.


## Installation

postgres

```bash
create database test_demo;
```

```bash
$ npm install
$ npx prisma migrate dev --name init --schema=./src/database/schema.prisma
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

`POST:localhost:3000/api/tweet`

```
{
    "updatedAt":"2023-05-07 14:53:26.783",
    "content":"This is a demo :)",
    "user": {
        "updatedAt": "2023-05-07 14:53:26.783",
        "username": "darlin"
    }
}
```

## Stay in touch

- Twitter - [@ZtvmtE](https://twitter.com/ZtvmtE)

## License

Nest is [MIT licensed](LICENSE).
