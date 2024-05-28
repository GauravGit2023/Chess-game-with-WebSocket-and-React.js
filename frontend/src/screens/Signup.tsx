import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"


export const Signup = ()=>{
    return <div className="h-screen grid grid-cols-1 md:grid-cols-2 p-8">
        <Quote />
        <Auth type="signup" />
    </div>
}