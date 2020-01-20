const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion)=>{
    try{
        const lug = await lugar.getLugarLatLong(direccion);
        const clim = await clima.getClima(lug.lat, lug.lng);
        return console.log(`El clima de ${argv.direccion} es de ${clim}`);
    }catch(e){
        console.log(`El clima de ${direccion} no se encontró`);
    }
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);





