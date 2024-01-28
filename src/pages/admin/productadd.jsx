import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ProductAddPage = ({ onAdd }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm sản phẩm</h1>
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

export default ProductAddPage;
