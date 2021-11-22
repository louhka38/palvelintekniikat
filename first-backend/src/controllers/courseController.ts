import { Request, Response } from "express"
import fetch from 'cross-fetch'
import { Course } from "../entities/course.entity"

export class CourseController {

    public async addCourse(req: Request, res: Response): Promise<any> {
        const newCourse: Course = req.body
        
        const response = await fetch(process.env.SERVER!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const body = await response.json()
        res.json(body)
        return body
    }

    public async getCourses(req: Request, res: Response): Promise<Course []> {
        const response = await fetch(process.env.SERVER!, {
            method: 'GET'
        })
        const body = await response.json()
        res.json(body)
        return body
    }
}