const home = {
    index: (req, res) => {
        res.render('../views/home.ejs')
    },
    free:(req, res) => {
        res.render('../views/free.ejs')
    },
    premium:(req, res) => {
        res.render('../views/premium.ejs')
    }
}

module.exports= home;