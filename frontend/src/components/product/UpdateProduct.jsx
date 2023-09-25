import React from 'react'

const UpdateProduct = () => {
  return (
    <div className="wrapper my-5">
    <form className="shadow-lg" enctype="multipart/form-data">
      <h1 className="mb-4">Update Product</h1>
      <div className="form-group">
        <label htmlFor="name_field">Name</label>
        <input
          type="text"
          id="name_field"
          className="form-control"
          defaultValue
        />
      </div>
      <div className="form-group">
        <label htmlFor="price_field">Price</label>
        <input
          type="text"
          id="price_field"
          className="form-control"
          defaultValue
        />
      </div>
      <div className="form-group">
        <label htmlFor="description_field">Description</label>
        <textarea className="form-control" id="description_field" rows={8}
        defaultValue={""} />
      </div>
      <div className="form-group">
        <label htmlFor="category_field">Category</label>
        <select className="form-control" id="category_field">
          <option>Electronics</option>
          <option>Home</option>
          <option>Others</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="stock_field">Stock</label>
        <input
          type="number"
          id="stock_field"
          className="form-control"
          defaultValue
        />
      </div>
      <div className="form-group">
        <label htmlFor="seller_field">Seller Name</label>
        <input
          type="text"
          id="seller_field"
          className="form-control"
          defaultValue
        />
      </div>
      <div className="form-group">
        <label>Images</label>
        <div className="custom-file">
          <input
            type="file"
            name="product_images"
            className="custom-file-input"
            id="customFile"
            multiple
          />
          <label className="custom-file-label" htmlFor="customFile">
            Choose Images
          </label>
        </div>
      </div>
      <button id="login_button" type="submit" className="btn btn-block py-3">
        UPDATE
      </button>
    </form>
  </div>
  )
}

export default UpdateProduct
