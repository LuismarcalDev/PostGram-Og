import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import "../src/index.css"
import Cadastro from "./pages/cadastro"
import HomePage from "./pages/homePage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/Inicial" element={<HomePage />} />
    </Routes>
  )
}
