sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/BindingMode"
], (UIComponent) => {
	"use strict";

	return UIComponent.extend("ui5.databinding.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});
});