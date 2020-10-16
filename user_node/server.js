/*eslint no-console: 0*/
"use strict";

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening on port " + port);
});

var xsenv = require("@sap/xsenv");
var services = xsenv.getServices({
	hana: {
		tag: "hana"
	}
});

var hdbext = require("@sap/hdbext");
app.use("/", hdbext.middleware(services.hana));

app.get("/", (req, res, next) => {
	req.db.exec("SELECT COUNT(\"userId\") AS COUNT FROM \"UserData.User\"", (err, rows) => {
		if(err)	{
			return next(err);
		}
		res.send("Current users: " + rows[0].COUNT);
	});
});
