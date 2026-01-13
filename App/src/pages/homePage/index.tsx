
import Feed from "./feed"
import Menu from "./menu"


export default function HomePage(){
    return(
        <div className="w-full h-screen bg-[#0c1014] flex flex-row ">
            
        <Menu/>
        <Feed/>

        </div>
    )
}