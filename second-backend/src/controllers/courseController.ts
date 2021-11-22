import { Request, Response } from "express"
import { getConnection } from "typeorm"
import { Course } from "../entities/course.entity"

export class CourseController {

    public async addCourse(req: Request, res: Response): Promise<Course> {
        const course = new Course()
        course.name = req.body.name
        course.scope = req.body.scope
        course.description = req.body.description
        const result = await getConnection().getRepository(Course).save(course)
        res.send(result)
        return result
    }

    public async getCourses(req:Request, res: Response): Promise<Course []> {
        const result = await getConnection().getRepository(Course).find()
        res.json(result)
        return result
    }
}