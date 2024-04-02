import Head from "next/head"
import styles from "../styles/Home.module.css"
import 'react'
import Header from "../components/global/Header.jsx"
import ItemsList from "../components/home/ItemsList.jsx"
import Footer from '../components/global/Footer.jsx'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Header />
      <ItemsList />
      <Footer />
    </div>
  )
}
