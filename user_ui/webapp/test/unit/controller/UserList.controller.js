/*global QUnit*/

sap.ui.define([
	"dev/user_ui/controller/UserList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UserList Controller");

	QUnit.test("I should test the UserList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});