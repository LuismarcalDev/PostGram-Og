import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import "../src/index.css"
import Cadastro from "./pages/homePage/cadastro"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}
