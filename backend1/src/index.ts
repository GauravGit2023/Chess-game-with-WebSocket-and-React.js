import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8000 });
const gameManager = new GameManager();

wss.on("connection", function connection (ws){

    gameManager.addUser(ws);
    ws.on("disconnect", () => gameManager.removeUser(ws));
    // ws.on("error", console.error)

    // ws.on('message', function message (data: any){
    //     console.log('received %s', data);
    // })
    
    // ws.send("something");
})