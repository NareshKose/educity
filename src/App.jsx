import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import PlayVideo from './components/PlayVideo/PlayVideo'



function App() {
  const[playvideo,setplay]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our pragram' title='what we offer'/>
      <Programs/>
      <About setplay = {setplay}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      <div>
        <PlayVideo playvideo={playvideo} setplay={setplay}/>
      </div>

      
      

      </div>
     
    </div>
  )
}

export default App
