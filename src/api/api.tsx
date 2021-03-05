import axios from 'axios'

const TOKEN = "njklçsdnkljklsdf";

export const getBloxes = async (page:number) => {
    const url = `https://api-dev.plataformablox.com.br/api/bloxes?per=9&page=${page}`
    const headers = { headers: { Authorization: `njklçsdnkljklsdf` } }

    return axios.get(url, headers);
} 