import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import astro from '../../assets/images/astro.png';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const errorAlert = () => {
    Swal.fire({
      title: 'Error!!',
      text: 'Please try again',
      icon: 'error',
    });
  };

  console.log("product",product)

  useEffect(() => {
    const getProduct = async () => {

      try {
        const res = await axios.get(`https://backend-capstone-3-ggfe.onrender.com/api/v1/product/${id}`);
        setProduct(res.data);
        setLoading(false);
        //console.log('data',res);
      } catch (error) {
        errorAlert();
        setLoading(false);
      }
    };

    getProduct();

  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }


  

  return (
    <Fragment>
       
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img src={astro} alt="Product" height="450" width="500" />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.productName}</h3>
            <p id="product_id">{product._id}</p>

            <hr />

            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <span id="no_of_reviews">{product.numOfReviews}</span>
            <span></span>

            <hr />

            <p id="product_price">PHP {product.price}</p>
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus">-</span>

              <input type="number" className="form-control count d-inline" value="1" readOnly />

              <span className="btn btn-primary plus">+</span>
            </div>
            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">
              Add to Cart
            </button>

            <hr />

            <p>
              Status:{' '}
              <span
                id="stock_status"
                className={product.stock > 0 ? 'greenColor' : 'redColor'}
              >
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>

            <hr />

            <h5 className="mt-2">{product.description}</h5>

            <hr />

            <button
              id="review_btn"
              type="button"
              className="btn btn-primary mt-4"
              data-toggle="modal"
              data-target="#ratingModal"
            >
              Submit Your Review
            </button>

            <div className="row mt-2 mb-5">
              <div className="rating w-50">
                {/* Modal review content goes here */}
              </div>
            </div>
          </div>
        </div>
   
    </Fragment>
  );
};

export default ProductDetails;
