import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

export default function Feed(){
    return(
       <div className="w-[60%]  border-r border-[#47474769] p-10 flex flex-col items-center text-white">

            <h1 className="text-[30px] font-medium">Feed</h1>

            <div className="mt-20 w-[75%] h-screen flex flex-col gap-25">

                <div className="flex flex-col gap-5">
                    
                    <div className="flex flex-row items-center gap-3">
                        <img src="https://i.pinimg.com/736x/a9/40/71/a940712731935856ebc84b15544ca056.jpg" className="w-12.5 h-12.5 rounded-[100px] border border-[#a0a0a054]" alt="" />
                        <p className="font-medium text-[#ffffffd2]">@louisdamassa</p>
                             <FontAwesomeIcon icon={faHeart}  className="hover:text-red-600 cursor-pointer"/>
                    </div>
                         
                   
                 
                    <p className="text-[#ffffffec]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa iusto soluta, dicta totam quod autem saepe, fugit eaque aliquid itaque sit nam qui quisquam sed nulla hic mollitia nihil fuga? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, totam ut suscipit expedita ad rem dolores laudantium cupiditate sapiente laboriosam ipsa, libero, dicta autem assumenda sed minus. Beatae, autem iure.
                    </p>
                    

                    <div className="flex flex-row gap-5">
                                <img
                                    className="w-40 h-40 object-cover rounded"
                                    src="https://i.pinimg.com/736x/a9/40/71/a940712731935856ebc84b15544ca056.jpg"
                                    alt=""
                                />
                                <img
                                    className="w-40 h-40 object-cover rounded"
                                    src="https://i.pinimg.com/736x/52/71/31/527131f1fdfcd3fa7fd4d1cbb79b43c8.jpg"
                                    alt=""
                                />
                                </div>

                         <FontAwesomeIcon icon={faHeart}  className="hover:text-red-600 cursor-pointer"/>
                  
                    
                </div>

             <div className="flex flex-col gap-5">
                    
                    <div className="flex flex-row items-center gap-3">
                        <img src="https://i.pinimg.com/736x/a9/40/71/a940712731935856ebc84b15544ca056.jpg" className="w-12.5 h-12.5 rounded-[100px] border border-[#a0a0a054]" alt="" />
                        <p className="font-medium text-[#ffffffd2]">@louisdamassa</p>
                             <FontAwesomeIcon icon={faHeart}  className="hover:text-red-600 cursor-pointer"/>
                    </div>
                         
                   
                 
                    <p className="text-[#ffffffec]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa iusto soluta, dicta totam quod autem saepe, fugit eaque aliquid itaque sit nam qui quisquam sed nulla hic mollitia nihil fuga? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, totam ut suscipit expedita ad rem dolores laudantium cupiditate sapiente laboriosam ipsa, libero, dicta autem assumenda sed minus. Beatae, autem iure.
                    </p>
                    

                    <div className="flex flex-row gap-5">
                                <img
                                    className="w-40 h-40 object-cover rounded"
                                    src="https://i.pinimg.com/736x/a9/40/71/a940712731935856ebc84b15544ca056.jpg"
                                    alt=""
                                />
                                <img
                                    className="w-40 h-40 object-cover rounded"
                                    src="https://i.pinimg.com/736x/52/71/31/527131f1fdfcd3fa7fd4d1cbb79b43c8.jpg"
                                    alt=""
                                />
                                </div>

                         <FontAwesomeIcon icon={faHeart}  className="hover:text-red-600 cursor-pointer"/>
                  
                    
                </div>


                

            </div>

            

        </div>
    )
}