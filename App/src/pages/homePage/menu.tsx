import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

export default function Menu(){
    return(
       <div className="w-[20%] h-screen border-r border-[#47474769] text-white p-5  pt-10 flex flex-col  gap-10">
                          <h1 className="font-semibold text-[25px]">
                              PostGram
                          </h1>
                          <div className="w-full flex flex-col gap-10 text-[#ffffffee]  text-[20px]">
      
                        <a className="flex flex-row items-center gap-3 cursor-pointer hover:text-[#ffffff] transition-500ms">
                          <FontAwesomeIcon icon={faHouse} /> Tela Inicial
                          </a>
      
                          <a className="flex flex-row items-center gap-3 cursor-pointer hover:text-[#ffffff] transition-500ms">
                          <FontAwesomeIcon icon={faHeart} /> Curtidas
                          </a>
      
                          <a className="flex flex-row items-center gap-3 cursor-pointer hover:text-[#ffffff] transition-500ms">
                          <FontAwesomeIcon icon={faUser} />  Sua Conta
                          </a>
      
                          </div>
                      </div>
    )
}