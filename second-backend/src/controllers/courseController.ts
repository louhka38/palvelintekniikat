import { Request, Response } from "express";
import { ICourse } from "../models/course";

export class CourseController {

    public async addCourse(req: Request, res: Response): Promise<any> {
        const newCourse: ICourse = req.body;
        console.log(newCourse);
        
        const result = newCourse
        res.send(result);
        return result;
    }
}