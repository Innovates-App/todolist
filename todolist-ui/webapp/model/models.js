sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            createHomePageModel: function () {
                return new JSONModel({
                    "editMode": false,
                    "displayMode": true
                })
            },

            createFragmentCreateActivityModel: function () {
                return new JSONModel({
                    "NAME": null,
                    "DONE": false,
                    "START_TS": null,
                    "END_TS": null,
                    "OWNER": null
                })
            },

            createFragmentModel: function () {
                return new JSONModel({
                    fragments: {
                        create_activity: {
                            path: "todolistui.view.fragments.create_activity",
                            opened: false,
                            loaded: false,
                            control: null,
                            model_name: "create_activity"
                        }
                    }
                })
            }
        };
    });