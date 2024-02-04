# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`todolist-ui/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- git clone this repo
- _**Terminal** > install dependencies > run `npm i` on root and on ui folder
- _**Terminal** > login to CF > `cf login`
- _**Terminal** > build and deploy app to CF > `mbt build` and `cf deploy mta_archives/todolist_1.0.0.mtar` on root folder
- _**Terminal** > create service keys > `cf create-service-key SERVICE_INSTANCE SERVICE_KEY`
- _**Terminal** > bindind to service instances > `cds bind -2 SERVICE_INSTANCE:SERVICE_KEY`
- _**Terminal** > start services > `cds watch --profile hybrid` 
- open a new _**Terminal** > start UI >  move to UI folder and run `npm run start-local`