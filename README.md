# fullstack application

It is a demo how to setup a fullstack application from a headless cms and React:

technologies includes:

CMS: strapi 

database: sqlite3

relational database with 5 tables: Category, Product, Image, Variance, and SKU 

apollo/client

graphql


## Strapi 

### how to set admin password

yarn strapi admin:reset-user-password --email="your email here" --password="your password here"

### how to start strapi

cd strapi and yarn start 

supported api:

http://localhost:1337/skus

http://localhost:1337/skus/1

http://localhost:1337/products

http://localhost:1337/products/1

http://localhost:1337/variances

http://localhost:1337/variances/1


## React

### how to start React

cd react and yarn start 

### supported graphql queries:

GET_PRODUCTS 

GET_PRODUCT_BY_ID 

### supported graphql mutation:

ADD_PRODUCT







