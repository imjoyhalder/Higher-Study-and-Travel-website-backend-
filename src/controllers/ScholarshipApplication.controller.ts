import { Request, Response } from "express";
import { postScholarshipApplication } from "../services/ScholarshipApplications.service";

export const submitScholarshipApplication = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const application = await postScholarshipApplication(data)
        return res.status(200).json({
            'message': 'Application submitted successfully',
            application
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message || "Failed to submit application",
        })
    }
}

