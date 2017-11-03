const { config, start } = require("mk-server")
const serverConfig = require("./config")

const search = require("./search/index.js")

const services = { 
    search,
}

config(serverConfig({ services }))

start()