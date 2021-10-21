import { Request, response, Response } from "express"
import { GetLast3MessagesService } from "../services/GetLast3MessagesService"


class Get3astMessagesControllerController {
    async handle(reques: Request, response: Response){
        const service = new GetLast3MessagesService();

        const result = await service.execute();
  
        return response.json(result)
    }
}

export { Get3astMessagesControllerController }
