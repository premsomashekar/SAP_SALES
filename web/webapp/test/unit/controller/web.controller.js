/*global QUnit*/

sap.ui.define([
	"web/web/controller/web.controller"
], function (Controller) {
	"use strict";

	QUnit.module("web Controller");

	QUnit.test("I should test the web controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});