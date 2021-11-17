import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { CourseRoutes } from './routes/courseRoutes'

class Server {
    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
        this.routes()
        this.database()
    }

    public routes(): void {
        this.app.use('/', new CourseRoutes().router)
    }

    public config(): void {
        const allowedOrigins = ['http://localhost:3000']
        const options: cors.CorsOptions = { origin: allowedOrigins}

        this.app.set('PORT', process.env.PORT || 3001)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('tiny'))
        this.app.use(cors(options))
    }

    private database() {}

    public start(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log(`Server is running on port ${this.app.get('PORT')}`)
        })
    }
}

const server = new Server()
server.start()