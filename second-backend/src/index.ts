import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'

import { CourseRoutes } from './routes/courseRoutes'
import { createConnection, Repository } from 'typeorm'
import { Course } from './entities/course.entity'

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
        const corsOptions = { origin: 'http://localhost:3000' }

        this.app.set('PORT', process.env.PORT2 || 4001)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('tiny'))
        this.app.use(cors(corsOptions))
    }

    private database() {}

    public start(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log(`Server is running on port ${this.app.get('PORT')}`)
        })
    }
}

createConnection().then(async connection => {
    const courseRepository: Repository<Course> = connection.getRepository(Course)
    const server = new Server()
    server.start()
}).catch(error => console.log("TypeORM connection error: ", error))
