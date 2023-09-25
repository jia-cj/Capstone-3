import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
//import axios from 'axios'
import astro from '../../assets/images/astro.png'

const Product = () => {

    const [ product, setProduct ] = useState([])
    const [loading, setLoading] = useState(true);

    const errorAlert = () => {
        Swal.fire({  
            title: 'Error!!',  
            text: 'Please try again',
            icon: 'error'
          }); 
    }

    // useEffect(() => {
    //     const getFetch = async () => {
    //        try{
    //         const response = await axios.get('http://localhost:4000/api/v1/products');
    //         console.log('response', response)
    //         setProduct(response.data)
    //         setLoading(false);

    //        } catch (error) {
    //         console.log(error)
    //         setLoading(false);
    //        }

    //     }

    //     getFetch()
    // },[])


    useEffect(() => {

        fetch(`https://backend-capstone-3-ggfe.onrender.com/api/v1/products`)
        .then(res => res.json())
        .then(data => { 
            setProduct(data.products)
            setLoading(false);
            console.log(product);
        })

        .catch((error) => {
        errorAlert()
         setLoading(false);
      });

    }, [])

    if (loading) {
        return <p>Loading...</p>;
      }


  return (
    <Fragment>
        {product.length > 0 && 
        product.map((prod) => (
            <div key={prod._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                        <img
                        className="card-img-top mx-auto"
                        src={astro} alt='astro'
                        />

                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <Link to={`/product/${prod._id}`}>{prod.productName}</Link>
                            </h5>
                        <div className="ratings mt-auto">
                            <div className="rating-outer">
                                <div className="rating-inner"></div>
                            </div>
                            <span id="no_of_reviews">(5 Reviews)</span>
                        </div>
                            <p className="card-text">PHP {prod.price}</p>
                            <Link to={`/product/${prod._id}`} id="view_btn" className="btn btn-block">View Details</Link>
                        </div>
                    </div>
            </div>
        ))}
  </Fragment>
  )
}

export default Product
