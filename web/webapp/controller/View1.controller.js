sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("web.web.controller.View1", {
		onInit: function () {
			this.model = this.getOwnerComponent().getModel("loginmodel");
			this.mode.read("POs", {
				filters: [],
				success: function (oData, oResp) {
					debugger;
				},
				error: function (oError) {

				}
			})
		}
	});
});