import { AiFillAliwangwang } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import Magazine from './Magazine';

import axios from 'axios';


const MainPage = () => {
   const [products, setProducts]= useState([]);
    useEffect(() => {
       let url="http://localhost:8080/products";
        axios.get(url)
        .then((result) =>{
            const products=result.data.product;
            setProducts(products)
        }).catch((error)=>{
            console.log(error)
        })
    }, []);
    console.log(products) 

    return (
        <div>
           <Mainslide/> 
           <Mdpick/> 
           <div className="banner">
                <p>
                    Lorem ipsum dolor sit amet consectetur
                </p>
           </div>
           <div className="products">
               <h2>Products</h2>
               <div id="product-list" className="p-list">
                    {products.map((product, idx) => {
                        return (
                           <Link className="product-link" to={`/ProductPage/${idx}`}>
                                <div className="product-card" key={idx}>
                                    <div>
                                        <img src={product.imageUrl} alt="" className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <div className="product-seller">
                                            <AiFillAliwangwang  className="product-avatar" />
                                            <span className="seller">{product.seller}</span>
                                        </div>
                                    </div>
                                </div>
                           </Link>
                        )
                    }) } 
               </div>
           </div>
           <Magazine/> 
          
        </div>
    );
};

export default MainPage;