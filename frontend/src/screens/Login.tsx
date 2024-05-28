
import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const Login = ()=>{

    return <div className="h-screen grid grid-cols-1 md:grid-cols-2 p-8">
        <Quote />
        <Auth type="signin" />
    </div>
}
