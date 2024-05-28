import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { TextInput } from "./TextInput";
import axios from "axios";
import { Card } from "./Card";
import { Button2 } from "./Button2";

export const Auth = ({type}: {type: string})=>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`https://localhost:3000/${type === "signin"? "signin": "signup"}`, postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            if(!response) navigate("/signup");
            navigate("/");
        } catch(e){
            console.log("be call failed");
            alert(`${type === "signin"? "Login Failed": "Signup Failed"}`)
        }
    };

    return <Card>
        <div>
            <div className="px-10">
                <div className="text-white font-bold text-3xl text-center">
                    {type === "signin"? "Login": "Create an account"}
                </div>
                <div className="text-slate-400 text-center font-semibold mb-3">
                    {type === "signin"? "Don't have an account?": "Already have an accoount?"}
                    <Link to={type === "signin"? "/signup": "/login"} className="underline  pl-2">
                        {type === "signin"? "Sign up": "Login"}
                    </Link>
                </div>
            </div>
            <TextInput type="email" label="Username" placeholder="Enter your email" onChange={(e: any)=> 
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                })
            }/>
            {type === "signup" ? <TextInput type="text" label="Name" placeholder="Enter your name" onChange={(e: any)=> 
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }/> : null}
            <TextInput label="Password" type="password" placeholder="password" onChange={(e: any)=> 
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }/>
            <Button2 onClick={sendRequest}>{type === "signup"? "Sign up" : "Sign in"}</Button2>
        </div>
    </Card>
}