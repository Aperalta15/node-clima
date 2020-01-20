const axios = require('axios');

const getClima = async (lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=227d5f116b58b45a1b94168606a3f382`)
    return respuesta.data.main.temp
}

module.exports = {
    getClima
}



