import Head from "next/head"
import styles from "../styles/Home.module.css"
import 'react'
import Header from "../components/global/Header.jsx"
import ItemsList from "../components/home/ItemsList.jsx"
import Footer from '../components/global/Footer.jsx'
import { useState } from "react"

// home page with list of items. this is the default page for the app
export default function Home() {
  const [reloadItems, setReloadItems] = useState(0);

  const handleReloadItems = () => {
    setReloadItems(prevVal => prevVal + 1); // update the previous value to address that a change has been made, triggering the useEffect
}
  return (
    <div>
      <Header />
      <ItemsList reloadItems={reloadItems} handleReloadItems={handleReloadItems} />
      <Footer handleReloadItems={handleReloadItems}/>
    </div>
  )
}
