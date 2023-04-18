import Income from "../entities/Income";
import { IIncome } from "../Interfaces/IIncome";

class IncomeService{

    public async addServiceIncome(reqBody: IIncome){
        const income =  new Income();
        income.idincome = reqBody.idincome;
        income.idprovider =  reqBody.idprovider;
        income.dateinco=reqBody.dateinco;
        income.state=reqBody.state;
        return await income.save();
    }

    public async getServiceIncome(){
        let respuesta: IIncome[] = ([] =[]);
        const income =  await Income.find();
        income.map((b) =>{
            let obj: IIncome = {idincome: b.idincome, idprovider: b.idprovider, dateinco: b.dateinco, state:b.state };
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneIncome(idicome: number){
        const income =  await Income.findOneBy({idincome: idicome});
        let respuesta: IIncome ={
            idincome: income?.idincome,
            idprovider: income?.idprovider,
            dateinco: income?.dateinco,
            state: income?.state,
        }
        return respuesta;
    }

    public async UpdateServiceIncome(idicome:number, reqBody:IIncome){
        const income = await Income.findOneBy({idincome:idicome});

        if(!income) return Promise.reject("No existe Ingreso");

        income.idincome = reqBody.idincome;
        income.idprovider=reqBody.idprovider;
        income.dateinco=reqBody.dateinco;
        income.state = reqBody.state;
        income.save();
        return income;
    }

    public async deleteServiceIncome(idicome: number){
        const income = await Income.findOneBy({idincome: idicome});
        if(!income){
            return Promise.reject("No existe Ingreso")
        }else{
            income.state = 0;
            income.save();
            return income;
        }
    }

}

export default IncomeService;