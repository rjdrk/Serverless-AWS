const moment = require('moment-timezone');
moment.locale('es');

module.exports.GetMoment = async (event) => {
    try {
        const tiempoSec = new Date().getTime();
        const tiempoTZ = moment.tz(tiempoSec, 'America/Mexico_City');
        const formato1 = moment(tiempoTZ).format('LT');   // 5:46 PM
        const formato2 = moment(tiempoTZ).format('LTS');  // 5:46:32 PM
        const formato3 = moment(tiempoTZ).format('L');    // 02/10/2021
        const formato4 = moment(tiempoTZ).format('l');    // 2/10/2021
        const formato5 = moment(tiempoTZ).format('LL');   // February 10, 2021
        const formato6 = moment(tiempoTZ).format('ll');   // Feb 10, 2021
        const formato7 = moment(tiempoTZ).format('LLL');  // February 10, 2021 5:46 PM
        const formato8 = moment(tiempoTZ).format('lll');  // Feb 10, 2021 5:46 PM
        const formato9 = moment(tiempoTZ).format('LLLL'); // Wednesday, February 10, 2021 5:46 PM
        const formato10 = moment(tiempoTZ).format('llll');

        return({
            statusCode:200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Exito!',
                data: {
                    "tiempoSec": tiempoSec,
                    "tiempoTZ": tiempoTZ,
                    "formato1": formato1 ,
                    "formato2": formato2 ,
                    "formato3": formato3 ,
                    "formato4": formato4 ,
                    "formato5": formato5 ,
                    "formato6": formato6 ,
                    "formato7": formato7 ,
                    "formato8": formato8 ,
                    "formato9": formato9 ,
                    "formato10": formato10 
                }
            })
        })

    } catch(e) {
        return({
            statusCode:400,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Hay un error',
                error: e.message
            })
        })
    }
}