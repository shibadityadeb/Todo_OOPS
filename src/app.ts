import express from "express";
const TodoRoute=require('./routes/todo.route')
class App{
    app: express.Application;
    port: number | string = 8080;
    constructor(){
        this.app = express();
    }
    startServer(){
       this.app.listen(this.port, () => {
         console.log("Server started ");
       }); 
    }
    initializeRoute(){
        this.app.get('/',(req,res)=>{
            res.send('hello')
        })
    }
}

export default App;