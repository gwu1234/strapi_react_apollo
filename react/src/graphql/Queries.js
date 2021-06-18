import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
{
    skus{
       id
       name
    }
}
`;

export const GET_PRODUCT_BY_ID = gql`
   query Sku ($id: ID!) 
    {
        sku (id: $id) {
            id,
            name
        }
    }
`;