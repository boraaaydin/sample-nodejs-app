(function (homeController) {

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            res.render("index", { title: "Express+vash" });
        });
    };

})(module.exports);