import { Request, Response } from "express";
import { ICourse } from "../models/course";
import fetch from 'cross-fetch'

export class CourseController {

    public async addCourse(req: Request, res: Response): Promise<any> {
        const newCourse: ICourse = req.body;
        console.log(newCourse);
        
        const response = await fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        if(typeof(response) !== typeof(newCourse)) {
            res.sendStatus(404);
        } else {
            res.json(response);
        }
        return response.json();
    }
}