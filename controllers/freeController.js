const gratuito = {
    index: router.get('/', (res, req) =>{
        res.send('Probando')
    }),
    gratuito: router.get('/gratuito', (res, req) => { 
        res.send("probando")
    })

}

module.exports = gratuito;