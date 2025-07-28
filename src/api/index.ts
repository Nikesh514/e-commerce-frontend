import axios from "axios";

const instance = axios.create({
    baseURL: 'https://shop-cart-cmfp.onrender.com/api',
    // timeout: 1000,
  });

  export default instance;