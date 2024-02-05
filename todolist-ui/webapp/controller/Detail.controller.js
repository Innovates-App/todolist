sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("todolistui.controller.Detail", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched(oEvent) {
            this.getView().bindElement({
                path: window.decodeURIComponent(oEvent.getParameter("arguments").ID),
                parameters: { 'expand': 'DETAILS' }
            });
        },

        onNavBack: function () {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteHome")
        }

    });
});