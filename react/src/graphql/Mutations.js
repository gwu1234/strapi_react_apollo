import { gql} from '@apollo/client';

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!) {
    createSku (input: {data: {name: $name} }){
        sku {
           id
           name
        }
    }
  }
`;