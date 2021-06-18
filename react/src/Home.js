
import React, { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID} from "./graphql/Queries";
import { ADD_PRODUCT} from "./graphql/Mutations";
import "./Home.css"

function Home() {
  const [id, setId] = useState("");
  const [sku, setSku] = useState("");
  const [skus, setSkus] = useState("");
  const [productName, setProductName] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [getProducts, products] = useLazyQuery(GET_PRODUCTS);
  const [getProductById, product] = useLazyQuery(GET_PRODUCT_BY_ID, {
    variables: { id: id},
  });
  const [addProduct, addedProduct] = useMutation(ADD_PRODUCT, {
    variables: { name: productName},
  });


  if (products) {
      const {data, error} = products 
      if (data) {
         console.log(data);
         if (!skus) {
            setSkus(data.skus)
         }
      }
      
      if (error) {
         console.log(error)
      }
  }

  if (product) {
    const {data, error} = product
    if (data) {
        if (!sku) {
           setSku(data.sku)
        }
        console.log(data);
     }
     
     if (error) {
        console.log(error)
     }
  }

  if (addedProduct) {
      if (addedProduct.data) { 
          //console.log(addedProduct.data)
          const {createSku:{sku}} = addedProduct.data
          console.log (sku)
          if (!newProduct) { 
             setNewProduct(sku)
          }
      }
  }

  return (
    <div className="home">
        <div>
            <h2> Query: Click Green Button to Fetch Product List</h2>
            <div>
                <button className="button" onClick={() => {getProducts()}}> Products </button>
            </div>
            <div className="products">
                    {skus && (skus.map(p=>{
                        return <h4 key={p.id}>{`id: ${p.id} name: ${p.name}`} </h4>
                    })    
            )}     
            </div>
        </div>

        <div style = {{marginTop: "50px"}}>
            <h2>Query: Get Product by Id</h2>
            <input
                type="text"
                placeholder="product id = "
                onChange={(event) => {
                    setId(event.target.value);
                }}
            />
            <div style = {{marginTop: "5px"}}>
                <button className="button" 
                     onClick={() => {
                         if (id) {
                           getProductById()
                         }
                     }}> 
                     Product 
                </button>
            </div>
        

            <div className="product">
                {sku && <h4>{`id: ${sku.id} name: ${sku.name}`} </h4>}      
            </div>
        </div>

        <div style = {{marginTop: "50px"}}>
            <h2>Mutation: Add a New Product </h2>
            <div>
                <input
                    type="text"
                    placeholder="new product name = "
                    onChange={(event) => {
                        setProductName (event.target.value);
                    }}
                />
                <div style = {{marginTop: "5px"}}>
                <button className="button" 
                     onClick={() => {
                          if (productName) {
                              addProduct()
                          }
                       }}> 
                     Add 
                </button>
                </div>
                {newProduct && <h4>{`id: ${newProduct.id} name: ${newProduct.name}`} </h4>}    
            </div>
        </div>

    </div>
  );
}

export default Home;