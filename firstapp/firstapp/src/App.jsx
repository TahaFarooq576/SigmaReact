import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className='flex'>
        <Card title="Props Concept"  description="Props description is here ..." />
        <Card title="Hello world"  description=" i am the discription of hello world" />
        <Card title="Cricket king is Baber Azam"  description="Props description is here ..." />
        <Card title="Props Concept"  description="Props description is here ..." />
        
      </div>


      <Footer />
    </>
  )
}

export default App
