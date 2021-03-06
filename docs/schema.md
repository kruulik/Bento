# Database Schema

## Users

column name     | data type | details
--------------- | --------- | -------------------------
id              | integer   | not null, primary key
f_name          | string    | not null
l_name          | string    | not null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_url      | string    |
bio             | string    |

## Projects

column name   | data type | details
------------- | --------- | ------------------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key, indexed
title         | string    | not null
thumbnail_url | string    | not null

## Items

column name | data type | details
----------- | --------- | ------------------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key, indexed
body        | text      |

## Images

column name | data type | details
----------- | --------- | ------------------------------
id          | integer   | not null, primary key
caption     | string    |
project_id  | integer   | not null, foreign key, indexed

## Likes

column name | data type | details
----------- | --------- | ---------------------
user_id     | integer   | not null, foreign key
project_id  | integer   | not null, foreign key

## Comments

column name | data type | details
----------- | --------- | ---------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
project_id  | integer   | not null
body        | text      | not null
