const homeController = {
    home: (res, req) => {
        return res.send('../views/home.ejs')
    }

}

module.exports = homeController;