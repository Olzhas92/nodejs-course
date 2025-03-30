const http = require('http');
const PORT = 3005;

const server = http.createServer((req, res) => {
    console.log('req.url', req.url);

    console.log('req.method', req.method);

    console.log('req.headers', req.headers);
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})