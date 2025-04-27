import React, { useState, useEffect } from 'react';  

const AddProduct = () => {  
  const [title, setTitle] = useState('');  
  const [price, setPrice] = useState('');  
  const [products, setProducts] = useState([]);  

  useEffect(() => {  
    fetchProducts();  
  }, []);  

  const getproduct = async () => {  
    const res = await fetch('https://6794d533aad755a134ea8a4f.mockapi.io/product');  
      const data = await res.json();  
      setProducts(data);  
  };  

  const addprd = async (event) => {  
    event.preventDefault();  
    const mahsolData = { title, price: parseFloat(price) };  
    const response = await fetch('https://6794d533aad755a134ea8a4f.mockapi.io/product', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify(mahsolData),  
    });   
  };  

  return (  
    <div className="form-container">  
      <h2>اضافه کردن محصول</h2>  
      <form onSubmit={addprd}>  
        <input type="text"onChange={(e) => setTitle(e.target.value)}/>  
        <input  type="number"onChange={(e) => setPrice(e.target.value)}/>  
        <button type="submit">ok</button>  
      </form>  
      <h3>Mahsolat:</h3>  
      <ul>  
        {products.map((item) => (  
          <p>  
         {item.title}  - {item.price}
          </p>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default AddProduct;  