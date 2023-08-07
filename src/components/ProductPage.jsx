import React, {useEffect, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import {Button, message} from 'antd';
import "./ProductPage.scss";
import { API_URL } from '../config/constants';
import dayjs from 'dayjs';


const ProductPage = () => {
    const {id}=useParams();
    const navigate= useNavigate();
    const [product, setProduct] =useState(null);
    const getProduct=() =>{
        axios.get(`${API_URL}/products/${id}`)
        .then((result) =>{
            setProduct(result.data.product)
        })
        .catch((error) =>{  
            console.error(error)
        })
    }

    useEffect(() =>{
        getProduct();
    }, []);

    const onClickPurchase = () =>{
        axios.post(`${API_URL }/purchase/${id}`)
        .then((result) =>{
            message.info(`결제가 완료되었습니다` )
            getProduct();
        })
        .catch((error) =>{
            message.error(`에러가 발생했습니다 ${error.message}` )
        })
    }
    const onClickDelete = () => {
        axios
          .delete(`${API_URL}/products/${id}`)
          .then((result) => {
            message.info("상품을 삭제하였습니다.");
            navigate(-1); // 삭제 후 이전 페이지로 이동
          })
          .catch((error) => {
            message.error(`에러가 발생했습니다.${error.message}`);
          });
      };

    console.log(product)
    if(product===null){
        return <h2>상품정보를 받고 있습니다....</h2>
    }
    return (
        <div className='product-wrap'>
            <button onClick={() => navigate(-1)} id="back-btn">이전화면</button>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id="profile-box">
                <img src="/img/icons/avata.png" alt={product.seller} />
                <span className="product-seller">{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createdAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
                <Button  type="primary" danger className='payment' size="large" onClick={onClickPurchase} disabled={product.soldout===1? true:false}>즉시결제하기</Button>
                <div id="description">{product.description}</div>
                <Button type="primary" danger className="delete" onClick={onClickDelete}>삭제하기</Button>
            </div>
        </div>
    );
};

export default ProductPage;