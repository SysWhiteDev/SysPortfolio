# JWT + DB Session Auth Backend

This is an effort to fix JWTs biggest problem, which is invalidating tokens.

## UI Preview

![Frontend Preview](https://i.imgur.com/FKB6g9A.png)

## Flowcharts

![Log In ceremony](https://i.imgur.com/DmlI1Fn.png)
![Middleware](https://i.imgur.com/GGYkq2j.png)

## Tech Stack

**Backend**: ExpressJS, bcrypt, prisma, SQLite

**Frontend**: NextJS

#### Why prisma for the db?

The database is managed with the prisma ORM, I made this choice since I plan to use this with real world projects and using an ORM it's the safest way to interact with a database on the server, plus if I want to use another db technology than sqlite I can easily switch to it (You can read more <u>[here](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)</u>).
