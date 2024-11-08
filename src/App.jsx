
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/nav/Nav"
import Sidebar from "./components/sidebar/Sidebar";


export default function App() {
  const [page, setPage] = useState('dashboard')
  return (
    <div style={{ display: 'flex' }} className="App">
      <Sidebar page={page} setPage={setPage}/>
      <Header />
      <Main page={page} />
    </div>
  )
}