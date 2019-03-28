sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ta2.TestApp2.controller.Homepage", {
		onInit: function () {
			jQuery("#testname").value = "Harnasyrin";
			var name = jQuery("#testname").value;
			var test = "test";
		}
	});
});