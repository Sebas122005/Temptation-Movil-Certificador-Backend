import Output from "../entities/Output";
import { IOutput } from "../Interfaces/IOutput";

class OutputService {

    /*Metodo para Agregar una Metodo de Pago */
    public async addServiceOutput(reqBody: IOutput) {
        const output = new Output();
        output.idout = reqBody.idout;
        output.idproduc = reqBody.idproduc;
        output.quantity = reqBody.quantity;
        output.dateout = reqBody.dateout;
        output.destino = reqBody.destino;
        output.state = reqBody.state;

        return await output.save();
    }

    public async getServiceOutput() {
        let respuesta: IOutput[] = ([] = []);
        const prov = await Output.find();
        prov.map((b) => {
            let obj: IOutput = { idout: b.idout, idproduc: b.idproduc, quantity: b.quantity, dateout: b.dateout, destino: b.destino, state: b.state };
            respuesta.push(obj);
        })
        return respuesta;
    }

    /*Metodo para Obtener un provevedor */
    public async getServiceOneOutput(idout: number) {
        const output = await Output.findOneBy({ idout: idout });
        let respuesta: IOutput = {
            idout: output?.idout,
            idproduc: output?.idproduc,
            quantity: output?.quantity,
            dateout: output?.dateout, 
            destino: output?.destino, 
            state: output?.state
        }
        return respuesta;
    }

    /* Metodo para actualizar un provevedor */
    public async updateServiceOutput(idout: number, reqBody: IOutput) {
        const out = await Output.findOneBy({ idout: idout });

        if (!out) return Promise.reject("No hay Salidas de Productos");

        out.idout = reqBody.idout;
        out.idproduc = reqBody.idproduc;
        out.quantity = reqBody.quantity;
        out.dateout = reqBody.dateout;
        out.destino = reqBody.destino;
        out.state = reqBody.state;
            out.save();
        return out;
    }

    /*Metodo para Eliminar un provevedor 
    public async deleteServicePaymentMethod(idout: number){
       const out = await Output.findOneBy({idout: idout});
       if(!out){
           return Promise.reject("No existe Salidas de Productos")
       }else{
        out.state = 0;
        out.save();
           return out;
       }
    }*/

}

export default OutputService;
