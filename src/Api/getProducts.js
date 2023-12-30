import axios from "axios";

const fetchProducts= async()=>{
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=10');
      return response.data;

    } catch (error) {
      console.log(error)
    }  
}

export default fetchProducts;