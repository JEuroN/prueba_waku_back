import axios from 'axios';

// Hace una peticion a la api para conseguir las fotos

const getGatos = async () => {
    return await axios.get('https://api.thecatapi.com/v1/images/search?limit=60&api_key=8fab3387-2c85-41e2-9677-148f9debde90')
    .then((r)=>{
        return r.data;
    })
    .catch((r)=>{
        return false;
    })
}

const searchGatosByBreed = async (breed: string) => {
    return await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=60&api_key=8fab3387-2c85-41e2-9677-148f9debde90`)
    .then((r)=>{
        return r.data;
    })
    .catch((r)=>{
        return false;
    })
}

const searchGatosByCategory = async (category: string) => {
    return await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${category}&limit=60&api_key=8fab3387-2c85-41e2-9677-148f9debde90`)
    .then((r)=>{
        return r.data;
    })
    .catch((r)=>{
        return false;
    })
}


module.exports = {getGatos, searchGatosByBreed, searchGatosByCategory};
