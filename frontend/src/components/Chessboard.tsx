import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";


export const Chessboard = ({chess, setBoard, board, socket }:{
    chess: any;
    setBoard: any;
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) =>{
    const [from, setFrom] = useState<null | Square>(null);
    const [to, SetTo] = useState<null | Square>(null);

    return <div className="text-white">
        {board.map((row, i) =>{
            return <div key={i} className="flex">
                {row.map((square, j)=>{
                    const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
                    return <div onClick={()=>{
                        if(!from){
                            setFrom(squareRepresentation);
                        } else {
                            console.log(squareRepresentation);
                            // SetTo(square?.square ? square.square: null);
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    move: {
                                        from,
                                        to: squareRepresentation
                                    }
                                }
                            }));
                            
                            setFrom(null);
                            chess.move({
                                from,
                                to: squareRepresentation
                            });
                            
                            setBoard(chess.board());
                            console.log({
                                from,
                                to : squareRepresentation
                            });
                            
                        }
                    }} key={j} className={`w-16 h-16 hover:bg-red-400 ${(i+j)%2 ===0 ? "bg-green-500": "bg-white"}`}>
                        <div className="w-full h-full text-black flex flex-col justify-center">
                            <div className="flex justify-center">
                                {/* {square? square.type : ""} */}
                                {square? <img className="w-full" src={`/${square.color}${square.type.toLowerCase()}.png`} /> : null}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}