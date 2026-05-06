import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsCWG from './components/WhatIsCWG'
import Examples from './components/Examples'
import CoreConcepts from './components/CoreConcepts'
import Workflow from './components/Workflow'
import CheatSheet from './components/CheatSheet'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsCWG />
        <Examples />
        <CoreConcepts />
        <Workflow />
        <CheatSheet />
      </main>
      <Footer />
    </>
  )
}
