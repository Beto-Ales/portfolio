
import './App.css'

import Header from "./components/Header"
import SectionA from './components/SectionA'
import SectionB from './components/SectionB'
import SectionC from './components/SectionC'
import SectionD from './components/SectionD'
import SectionE from './components/SectionE'
import SectionF from './components/SectionF'
import Footer from './components/Footer'


const App = () => (
  <div className='body'>
    <Header />
    <div className='article'>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
    </div>
    <Footer />
  </div>
)

export default App