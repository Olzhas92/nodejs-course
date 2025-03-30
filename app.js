const http = require('http');
const PORT = 3005;

const server = http.createServer((req, res) => {
    console.log(req);

    const url = req.url;

    if (url === '/') {
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form><body>');
        res.write('</html>')

        return res.end()
    }

    if (url === '/message') {
        res.write('<html>')
        res.write('<body><h2>Message Page</h2></body>')
        res.write('</html>')

        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');

    res.write("<h1>Hello World!</h1>");

    res.end();
})

server.listen(PORT, () => { 
    console.log(`Server is running on PORT ${PORT}`)
})