const httpProxy = require("express-http-proxy");
const { ClientError } = require("../utils/errors");

const proxyUsers = (urlProxy) => {
    if(!urlProxy && urlProxy.trim() === ""){
        throw new ClientError('No URL proxy provided!',401);
    }
    return httpProxy(urlProxy);
}
module.exports = { proxyUsers };