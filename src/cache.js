const redis = require("redis")

function cache(req, res, next) {
    const client = redis.createClient();
    client.on("error", function(error) {
        console.error(error);    
    });

    client.get(req.url, (err, cached) => {
        if (cached) {
            res.send(cached)
            console.log("usando cache")
            return
        }

        req.cache = (data) => {
            client.set(req.url, JSON.stringify(data))
        }
        next()
    })
}

module.exports = {
    cache
}