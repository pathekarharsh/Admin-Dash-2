import React from "react";
import "./Orders.css";
import Modal from "../Modal";
import EditProduct from "../forms/EditProduct";
import SingleProduct from "../viewsingle/ViewSingleProduct";
import "./ProductDetails.css"

const info = [
  {
    id: "Tomato (Cherry Tomato) 200gm",
    Name: "12.50Rs",
  }, {
    id: "Vegetables & Fruits, Vegetables",
    Name: "",
  }, {
    id: "Tomato (Cherry Tomato) 400gm",
    Name: "24.00Rs",
  }, {
    id: "Vegetables & Fruits, Vegetables",
    Name: "",
  }, {
    id: "Tomato (Cherry Tomato) 500gm",
    Name: "34.50Rs"
  }, {
    id: "Vegetables & Fruits, Vegetables",
    Name: "",
  }, {
    id: "Tomato (Cherry Tomato) 600gm",
    Name: "40.00Rs"
  }, {
    id: "Vegetables & Fruits, Vegetables",
    Name: "",
  }, {
    id: "Tomato (Cherry Tomato) 800gm",
    Name: "48.00Rs"
  }, {
    id: "Vegetables & Fruits, Vegetables",
    Name: "",
  },

];



const ProductDetails = () => {
  return (
    <div className="queue-page border-2 rounded-md bg-tailtertiary m-0">

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>PRODUCT DETAILS</h2>
          <h2>PRICE</h2>
          <h2>ACTIVE</h2>
        </div>
        {info.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>Product #{e.id}</h2>
            <p>{e.Name}</p>
            <div className="btn flex m-0 p-0 btn1">
              <Modal btnname="YES" compinfo={<EditProduct />} />
              <Modal btnname="NO" compinfo={<><h2 className="text-red-600 text-xl font-bold font-poppins">Are you sure you want to delete this product??</h2></>} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
