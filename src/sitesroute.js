import { BrowserRouter, Router, Routes } from 'react-router-dom'

import Home from './pages/home'

import corprimaria from './pages/corprimaria'

import frequencia from './pages/frequencia'

import ingresso from  './pages/ingresso'

import maiornumero from './pages/maiornumero'

export default function SiteRoutes() {

       return (

      <BrowserRouter>
         <Routes>
            <Router path='/'element= {<Home/>} />

           <Router path='/corrimaria' element= {<corprimaria/>} />    

            <Router path='/frequencia' element= {<frequencia/>} />

            <Router path='/ingresso'element= {<ingresso/>} />

            <Router path='/maiornumero'element= {<maiornumero/>} />

            </Routes>
      </BrowserRouter>

            

                

      

)

}