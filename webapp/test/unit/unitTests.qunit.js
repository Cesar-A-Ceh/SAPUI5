/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlogaligroup/myfirstfoject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
