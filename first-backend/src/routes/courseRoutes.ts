import { Router } from "express";
import { CourseController } from "../controllers/courseController";

export class CourseRoutes {
    public router: Router;
    public courseController: CourseController = new CourseController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/", this.courseController.getCourses)
        this.router.post("/", this.courseController.addCourse);
    }
}