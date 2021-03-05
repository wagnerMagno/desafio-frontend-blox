import axios from 'axios'

const TOKEN = "njklçsdnkljklsdf";

export const getBloxes = async (page:number) => {
    const url = `https://api-dev.plataformablox.com.br/api/bloxes?per=1&page=1`
    const headers = { headers: { Authorization: `njklçsdnkljklsdf` } , params: {} }

    return axios.get(url, headers);
} 