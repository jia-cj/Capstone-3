import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Sample1 = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); // Initialize with an empty object

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post('https://backend-capstone-3-ggfe.onrender.com/api/v1/products/');
                setProduct(response.data);
                console.log("product", response);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [id]);


    console.log(product)



    return (
        <div>
            <p>{id}</p>

            {/* {product.map((data) => ).filter(()) } */}

           
        </div>
    );
};

export default Sample1;
