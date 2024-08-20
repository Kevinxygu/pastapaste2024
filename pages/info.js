import 'react'
import 'next/link'
import HeaderPage from '../components/global/HeaderPage'
import Footer from '../components/global/Footer'
import InfoScreen from '../components/info/Info'


// side page with instructions for the app
export default function Info() {
    return (
      <div>
        <HeaderPage />
        <InfoScreen />
        <Footer />
      </div>
    )
  }