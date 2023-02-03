import React from "react";
import "./AddProduct.css";

function AddProduct() {
  return (
    <div id="addProduct">
      <div className="addProductHeading">
        <button type="button" className="btn btn-outline-danger btn-sm">
          Go to products
        </button>
        <h2>Add Product</h2>
        <button type="button" className="btn btn-outline-success btn-sm">
          Publish now
        </button>
      </div>
      <form className="card productCard">
        <div className="mb-3">
          <label className="form-label">Product Title</label>
          <input
            className="form-control"
            id="productTitle"
            placeholder="Type Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input className="form-control" id="price" placeholder="Type Here" />
        </div>
        <div className="mb-3">
          <label className="form-label">Count In Stock</label>
          <input
            className="form-control"
            id="countInStock"
            placeholder="Type Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="7"
            placeholder="Type Here"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            className="form-control"
            id="images"
            placeholder="Enter image URL"
          />
          <input className="form-control" type="file" id="chooseFile" />
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
