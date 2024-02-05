sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("todolistui.controller.Home", {
            onInit: function () {
                //autenticazione
            },

            onEdit: function () {
                this.getView().getModel("home").setProperty("/editMode", true)
                this.getView().getModel("home").setProperty("/displayMode", false)
            },

            onCancel: async function () {
                await this.getView().getModel().resetChanges()
                this.getView().getModel("home").setProperty("/editMode", false)
                this.getView().getModel("home").setProperty("/displayMode", true)
            },

            onSave: async function () {
                try {
                    await this.getView().getModel().submitChanges()
                    this.getView().getModel("home").setProperty("/editMode", false)
                    this.getView().getModel("home").setProperty("/displayMode", true)
                } catch (error) {
                    MessageBox.error(e.message)
                }
            },

            onCreate: async function (sFragmentName) {
                const fragmentModel = this.getView().getModel("fragments")
                const fragment = fragmentModel.getProperty(`/fragments/${sFragmentName}`)
                const model_name = fragment.model_name
                const oModel = this.getView().getModel(model_name)
                oModel.setData({})

                if (!fragment.loaded) {
                    try {
                        const loadedControl = await this.loadFragment({ name: fragment.path })
                        loadedControl.open()
                        fragment.loaded = true
                        fragment.control = loadedControl
                        fragment.opened = true
                    } catch (e) {
                        MessageBox.error(e.message)
                    }
                } else {
                    fragment.control.open()
                    fragment.opened = true
                }
                fragmentModel.setProperty(`/fragments/${sFragmentName}/`, fragment)
            },


            handleCreateActivity: function (sFragmentName) {
                const oModel = this.getView().getModel()
                const oEntry = this.getView().getModel("create_activity").getData()
                try {
                    oModel.create("/Activity", oEntry)
                    oModel.refresh()
                    this.closeFragment(sFragmentName)
                } catch (error) {
                    MessageBox.alert(error.message, { icon: MessageBox.Icon.ERROR, title: "Error" })
                }
            },


            closeFragment: function (sFragmentName) {
                const fragmentModel = this.getView().getModel("fragments")
                const fragment = fragmentModel.getProperty(`/fragments/${sFragmentName}`)
                if (fragment.opened) {
                    try {
                        fragment.control.close()
                        fragment.opened = false
                        fragmentModel.setProperty(`/fragments/${sFragmentName}/`, fragment)
                    } catch (e) {
                        MessageBox.error(e.message)
                    }
                }
            },

            onDelete: function (oEvent) {
                console.log("Cancellazione Attività")
                const oTable = this.getView().byId("activityTable")
                const aSelectedItems = oTable.getSelectedItems()
                const oModel = this.getView().getModel()

                if (aSelectedItems.length === 0) {
                    MessageBox.alert("Selezionare almeno un record")
                    return
                }

                try {
                    for (let index = 0; index < aSelectedItems.length; index++) {
                        const selectedItemPath = aSelectedItems[index].getBindingContext().sPath
                        oModel.remove(selectedItemPath);
                    }
                } catch (error) {
                    MessageBox.error(error.message)
                }
            }

        });
    });
