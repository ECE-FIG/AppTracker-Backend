import { Request, Response } from "express";
import { ApplicationController } from "../controllers/crmController";

export class Routes {
  public applicationController: ApplicationController = new ApplicationController();

  public routes(app): void {
    app.route('/applications').get(this.applicationController.getApplications);
    app.route('/applications').post(this.applicationController.addNewApplication);
    app.route('/applications/:appId').get(this.applicationController.getApplicationWithID);
    app.route('/applications/:appId').put(this.applicationController.updateApplication);
    app.route('/applications/:appId').delete(this.applicationController.removeApplication);
  }
}
