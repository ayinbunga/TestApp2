/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ta2/TestApp2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});