import 'react'
import HeaderPage from '../components/global/HeaderPage'
import Footer from '../components/global/Footer'
import SettingsScreen from '../components/settings/Settings'

// side page with settings for the app, but currently it's just the settings page
export default function Settings() {
    return (
      <div>
        <HeaderPage />
        <SettingsScreen />
        
        <Footer />
      </div>
    )
  }