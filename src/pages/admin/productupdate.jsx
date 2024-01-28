import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsByid } from "../../api/product";

const ProductEditPage = ({ onUpdate }) => {
   const { id }  = useParams();
  //  console.log(dataParams);
  const { register, handleSubmit, reset  } = useForm();
  const navigate = useNavigate();

  useEffect(()=>{
    (async() =>{
      const data = await getProductsByid(id);
      reset(data);
    })();
  },[id]);
  const onSubmit = (data) => {
    // console.log("data",data);
    onUpdate(data);
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">cap nhat sản phẩm</h1>
      </div>
      <div>
        <div className="mb-3 ">
          <label htmlFor="productName " className="form-label">
            Tên sản phẩm
          </label>
          <input
            type="text"
            {...register("name")}
            id="productName"
            className="form-control"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="productImage " className="form-label">
            Ảnh sản phẩm
          </label>
          <input
            type="text"
            {...register("image")}
            id="productImage"
            className="form-control"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="productPrice " className="form-label">
            giá sản phẩm
          </label>
          <input
            type="number"
            {...register("price")}
            id="productPrice"
            className="form-control"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="productDescription" className="form-label">
            Mô tả sản phẩm
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            id="productDescription"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </div>
    </form>
  );
};

export default ProductEditPage;
