import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = ()=>{
    const navigate = useNavigate();

    return<div className="flex justify-center p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-3 max-h-screen max-w-screen-lg">
        <div className="flex justify-center">
            <img src={"/chessboard.jpeg"} className="max-w-96"></img>
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
                <div>
                    <div className="text-white text-4xl font-bold m-4">
                        Play Chess online
                    </div>
                    <div className="m-4">
                        <Button onClick={()=> navigate("/game")} >
                            Play Online
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}