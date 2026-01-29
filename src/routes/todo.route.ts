// import App from "../app";
// import { Request, Response } from 'express';
// const appInstance = new App();
// appInstance.app.get('/', (req: Request, res: Response) => {
//     res.send('Hello');
// }
import express from 'express';
import {Router} from 'express';
class TodoRoutes{
path: string = '/todos';
route:Router=express.Router();
initializeRoutes(){
    this.route.get(this.path,(req,res)=>{
        res.send('Hello world')
    })
}
}

export default TodoRoutes;