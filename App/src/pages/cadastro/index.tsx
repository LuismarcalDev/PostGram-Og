import { Link } from "react-router-dom"
import logo from "../../assets/login/logo.png"

export default function Cadastro() {
  return (
    <div className="w-full h-screen bg-[#0c1014] justify-center items-center flex flex-col">
      <div className="w-[950px] flex flex-row items-center gap-10 p-5">
        <img src={logo} alt="" />

        <div className="w-full flex flex-col gap-5 items-center">
          <h2 className="font-semibold text-white text-[30px]">PostGram</h2>

          <div className="flex flex-col gap-5 text-white w-full"> 
            <input
              type="text"
              placeholder="Crie um nome de usuario"
              className="w-full border p-2 rounded-[7px] outline-none border-[#ffffff34]"
            />

            <input
              type="text"
              placeholder="informe seu nome completo"
              className="w-full border p-2 rounded-[7px] outline-none border-[#ffffff34]"
            />

            <input
              type="text"
              placeholder="informe seu email"
              className="w-full border p-2 rounded-[7px] outline-none border-[#ffffff34]"
            />

            <input
              type="password"
              placeholder="informe uma senha"
              className="w-full border p-2 rounded-[7px] outline-none border-[#ffffff34]"
            />
            
            <button className="w-full p-2 bg-[#3745b5] rounded-[5px] cursor-pointer hover:bg-[#2e3b9e] transition-[500ms]">
              Fazer Cadastro
            </button>

            <p>
              Já tem uma conta?{" "}
              <Link to="/" className="text-[#4457e4]">
                Fazer Login
              </Link>
            </p>
          </div>
        </div>
      </div>
       <div className="flex flex-wrap gap-3 text-sm mt-50">
        <a href="#" className="text-[#879288]">
          Meta
        </a>
        <a href="#" className="text-[#879288]">
          Sobre
        </a>
        <a href="#" className="text-[#879288]">
          Blog
        </a>
        <a href="#" className="text-[#879288]">
          Carreiras
        </a>
        <a href="#" className="text-[#879288]">
          Ajuda
        </a>
        <a href="#" className="text-[#879288]">
          API
        </a>
        <a href="#" className="text-[#879288]">
          Privacidade
        </a>
        <a href="#" className="text-[#879288]">
          Termos
        </a>
        <a href="#" className="text-[#879288]">
          Localizações
        </a>
        <a href="#" className="text-[#879288]">
          Instagram Lite
        </a>
        <a href="#" className="text-[#879288]">
          Meta AI
        </a>
        <a href="#" className="text-[#879288]">
          Threads
        </a>
        <a href="#" className="text-[#879288]">
          Upload de contatos e não usuários
        </a>
        <a href="#" className="text-[#879288]">
          Meta Verified
        </a>
      </div>
    </div>
  )
}
