import adapter from "@sap/cds-odata-v2-adapter-proxy";

cds.on("bootstrap", (app)=>{
    app.use(adapter())
})

export default cds.server