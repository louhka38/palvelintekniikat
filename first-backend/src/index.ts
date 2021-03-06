import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'

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
        this.app.use('/favicon.ico', (req, res) => res.status(204))
    }

    public config(): void {
        this.app.set('PORT', process.env.PORT1 || 4000)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('tiny'))
        this.app.use(cors())
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