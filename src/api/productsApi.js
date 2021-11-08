import axios from 'axios'

const API = 'http://localhost:4000';

export const getProducts = async () => {
    return await axios.get(`${API}/products`);
}

const axios2 = axios.create({
    baseURL: `${API}`,
});

axios2.interceptors.request.use(
    function(config) {
        config.headers.Authorization = `${localStorage.getItem("token")}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)


export const saveProduct = async (newProduct) => {
    return await axios2.post(`${API}/products`, newProduct, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}

export const removeProduct = async (id) => {
    return await axios2.delete(`${API}/products/${id}`);
};

export const updateProduct = async (id, product) => {
    return await axios2.put(`${API}/products/${id}`, product);
}

export const getProduct = async (id) => {
    return await axios.get(`${API}/products/${id}`);
}