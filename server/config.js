/**
 * server配置
 * 
 */

const config = ({ services }) => {
    Object.assign(server.services, services)
    configServices(server)
    return server
}

const server = {
    host: "0.0.0.0",
    port: 8000,
    website: __dirname + "/html/",
    apiRootUrl: "/v1",
    interceptors: [],
    services: {
        // referrenced service
    },
    configs: {
        // serviceName: {}
    },
}

function configServices(server) {
    var { services, configs } = server;
    Object.keys(services).filter(k => !!services[k].config).forEach(k => {
        let curCfg = Object.assign({ server, services }, configs["*"], configs[k]);
        services[k].config(curCfg);
    })
}

module.exports = config
