const http = require('http');
const fs = require('fs');
const PORT = 3005;
const REDIRECT_STATUS_CODE = 302;

const ROUTES = {
    home:           '/',
    message:        '/message',
    redirectPage:   '/redirect-page',
}

const server = http.createServer((req, res) => {
    const method = req.method;

    const url = req.url;

    if (url === ROUTES.home) {
        res.write('<html>')
        res.write('<body>');
        res.write('<h1>Hello World!</h1>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"></input>')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
    
        return res.end()
    }

    if (url === ROUTES.message && method === 'POST') {
        fs.writeFileSync('message.txt', 'Landed on /message page.')

        res.statusCode = REDIRECT_STATUS_CODE;

        res.setHeader('Location', ROUTES.redirectPage);

        return res.end();
    }

    if (url === ROUTES.redirectPage) {
        res.write('<html>')
        res.write('<body>');
        res.write('<h2>This is a Redirect Page.</h2>')
        res.write('<a href="/">Go Home</a>')
        res.write('</body>')
        res.write('</html>')

        return res.end()
    }

    res.setHeader('Content-Type', 'text/html');
    
    res.end();
})

server.listen(PORT, () => { 
    console.log(`Server is running on PORT ${PORT}`)
})