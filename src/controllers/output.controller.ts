import{Request, Response} from "express";
import { IOutput } from "../Interfaces/IOutput";
import OutputService from "../services/output.service";

class OutputController{

    public async addOutput(req: Request, res:Response){
        try {
            const reqBody: IOutput =req.body;
            const service = new OutputService();
            const result = await service.addServiceOutput(reqBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
            
        }
        
    }

    public async getOutput(req: Request, res:Response){

        try {

            const service = new OutputService();
            const result = await service.getServiceOutput();
            return res.json(result);

        } catch (error) {

            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getOneOutput(req:Request, res:Response){
        try{
            const idinput: number = parseInt(req.params.idinput);
            const service = new OutputService();
            const result = await service.getServiceOneOutput(idinput);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    }

    public async updateOutput(req: Request, res:Response){
        try {
            const idinput: number = parseInt(req.params.idinput);
            const reqBody: IOutput = req.body;
            const service = new OutputService();
            const result = await service.updateServiceOutput(idinput,reqBody);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

}
export default OutputController;