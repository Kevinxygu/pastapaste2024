import Head from "next/head"
import styles from "../styles/Home.module.css"
import 'react'
import Template from "../components/global/Template.jsx"
import Header from "../components/global/Header"
import ItemsList from "../components/home/ItemsList.jsx"

export default function Home() {
  return (
    <div>
      <Header />
      <ItemsList />
    </div>
  )
}
