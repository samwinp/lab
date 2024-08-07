const http = require('http')
const express = require('express')


http.createServer((req, res) => {
    res.writeHead(
        200, 
        {'Content-Type' : 'text/plain'}
    )
    res.end('hello world')
}).listen(1337)


