import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId)
  const {products} = useContext(ShopContext);
  const [productData,setPorductData] = useState(false)

  const fetchProductData = async ()=>{

    products.map((item)=>{
      if (item._id === productId){
        setPorductData(item)
        console.log(item)
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])


  return (
    <div>Product</div>
  )
}

export default Product











// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// // import RelatedProduct from "../components/RelatedProduct"; 
// import RelatedProduct from "../components/RelatedProduct"

// const Product = () =>{

//     const {productId} = useParams() ;
//     const {products, Currency, addTocart}  = useContext(ShopContext) ;
//     const [productData, setPorductData] = useState() ;

//     const [image, setImage] = useState('') ;
//     const [size, setSize] = useState('') ;


//     const fetchProductData = () =>{

//         products.map((item) =>{
//             if (item._id === productId) {
//                 setPorductData(item) ;
//                 setImage(item.image[0]);
//                 return null ;
                
//             }
//         })
//     }

//     useEffect(() =>{
//         fetchProductData() ;
//     },[productId,products])

//     return productData ? (
//         <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

//             <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

//                 <div className=" flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//                     <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//                         {
//                             productData.image.map((item, ind) =>(
//                                 <img onClick={()=>setImage(item)} src={item} key={ind} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
//                             ))
//                         }
//                     </div>
//                     <div className="w-full sm:w-[80%]">
//                         <img className="w-full h-auto" src={image} alt="" />
//                     </div>
//                 </div>

//                 <div className="flex-1">
//                     <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//                     <div className="flex items-center gap-1 mt-2">
//                         <img src={assets.star_icon} alt="" className="w-3 5" />
//                         <img src={assets.star_icon} alt="" className="w-3 5" />
//                         <img src={assets.star_icon} alt="" className="w-3 5" />
//                         <img src={assets.star_icon} alt="" className="w-3 5" />
//                         <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//                         <p className="pl-2">(122)</p>
//                     </div>

//                     <p className="mt-5 text-3xl font-medium">{Currency}{productData.price}</p>
//                     <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
//                     <div className="flex flex-col gap-4 my-8">
//                         <p>Select Size</p>
//                         <div className="flex gap-2">
//                             {productData.sizes.map((item, ind)=>(
//                                 <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ?' border-orange-600' : ''} `}  key={ind}>{item}</button>
//                             ))}
//                         </div>
//                     </div>

//                     <button onClick={()=>addTocart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD To Cart</button>
//                     <hr className="mt-8 sm:w-4/5"/>

//                     <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//                         <p>100% Original Product</p>
//                         <p>cash On Delivery Is Availabale On This Product</p>
//                         <p>Easy retun And Exchange Policy With In 7 Day's</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-20">
//                 <div className="flex">
//                     <b className="border px-5 py-3 text-sm">Description</b>
//                     <p className="border px-5 py-3 text-sm"> Review (122)</p>
//                 </div>

//                 <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//                     <p>An e-commerce site is an online platform or digital storefront enabling businesses to sell products, services, or digital goods to customers via the internet. Key features typically include a product catalog, shopping cart, secure payment gateways, and customer accounts for managing orders and information. These platforms facilitate transactions, offering a convenient alternative or complement to physical retail. E-commerce leverages technologies like mobile commerce and internet marketing to reach consumers through websites, mobile apps, and even social media, catering to various markets including business-to-consumer (B2C) and business-to-business (B2B) transactions. </p>
//                     <p>E-commerce, or electronic commerce, is the process of buying and selling goods and services over the internet. It involves the exchange of products or services between businesses, consumers, or both. E-commerce business is facilitated through platforms such as websites, mobile apps, or online marketplaces.</p>
//                 </div>
//             </div>

//             <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
        
//         </div>
//     ) : <div className="opacity-0"></div>
// } ;

// export default Product ;