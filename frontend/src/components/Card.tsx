import React from "react";

export const Card = ({ children }:{
    // heading: string;
    children: React.ReactNode
})=>{
    return <div className="h-full flex flex-col justify-center p-4">
        <div className="flex justify-center">
            <div  className="w-full max-w-96 rounded-xl border-white border-2">
                <div className="m-5">
                    {children}
                </div>
            </div>
        </div>
    </div>
}
