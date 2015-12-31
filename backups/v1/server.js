(function () {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');


    app.use(express.static(__dirname + "/src"));
    app.use(bodyParser.json());

    var signinRouter = require("./routes/user_signin");
    var productRouter = require("./routes/product_list");

    app.use("/user", signinRouter);
    app.use("/product", productRouter);


    app.listen(8000);
    console.log("server running on 8000");
}());