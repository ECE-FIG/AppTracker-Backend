import * as mongoose from "mongoose";
import { ApplicationSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Application = mongoose.model("Application", ApplicationSchema);

export class ApplicationController {
    public addNewApplication(req: Request, res: Response) {
        Application.create(req.body, (err, application) => {
            if (err) {
                res.send(err)
            }
            res.json(application)
        })
    }

    public getApplications(req: Request, res: Response) {
        Application.find({}, (err, application) => {
            if (err) {
                res.send(err)
            }
            res.json(application)
        })
    }

    public getApplicationWithID(req: Request, res: Response) {
        Application.findById(req.params.appId, (err, application) => {
            if (err) {
                res.send(err);
            }
            res.json(application);
        });
    }

    public updateApplication(req: Request, res: Response) {
        Application.findOneAndUpdate({ _id: req.params.appId }, req.body, { new: true }, (err, application) => {
            if (err) {
                res.send(err);
            }
            res.json(application);
        });
    }

    public removeApplication(req: Request, res: Response) {
        Application.remove({ _id: req.params.appId }, (err, application) => {
            if (err) {
                res.send(err);
            }
            res.json(application);
        })
    }
}
