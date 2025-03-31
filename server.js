import next from 'next'
import { parse } from 'url'
import { createServer } from 'http'

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: true, hostname: 'localhost', port })
const handle = app.getRequestHandler()
app.prepare().then(() => {
    try {
        createServer(async (req, res) => {
            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        })
            .once("error", (err) => {
                console.error('Error starting server:', err)
                res.statusCode = 500
                res.end('Internal Server Error')
            })
            .listen(port, () => {
                console.log(`> Ready on http://localhost:${port}`)
            })
    } catch (err) {
        console.error('Error starting server:', err)
        process.exit(1)
    }

    console.log(
        `> Server listening at http://localhost:${port} as dev
        }`
    )
})