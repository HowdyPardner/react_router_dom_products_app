import React, { useEffect, useState } from "react";
import './index.css'

const Products = () => {
  const [products, setProducts] = useState([{}]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState();


  const handleProductNameChange = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    e.preventDefault();
    setProductDescription(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    if (!isNaN(userInput)){
      setProductPrice(e.target.value);
    }else{
      alert("Put in a number")
    }
   
  };

  const addProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { name: productName, description: productDescription, price: productPrice }])
    setProductName("")
    setProductDescription("")
    setProductPrice("")
  }

  useEffect(() => {
    console.log("A new product has been added")
  }, [products])

  return (
    <div className="form-container">
      <form className="form-items" onSubmit={addProduct}>

        <label htmlFor="productName">Product Name</label>
        <input type="text" value={productName} onChange={handleProductNameChange} />

        <label htmlFor="productName">Product Description</label>
        <input type="text" value={productDescription} onChange={handleProductDescriptionChange} />

        <label htmlFor="productName">Product Price</label>
        <input type="text" value={productPrice} onChange={handleProductPriceChange} />

        <button>Add Product</button>
      </form>

      {
        products.map((product)=>(
          <ul>
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
          </ul>
          
        )
          
        )
      }
    </div>
  );
};

export default Products;
