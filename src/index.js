const express = require("express")
const { makeRouter } = require("./router1");


function main() {
    const server = express()
    const PORT = 5000
    server.use(makeRouter())

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

main();
