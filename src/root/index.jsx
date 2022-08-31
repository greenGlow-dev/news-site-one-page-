import React from 'react'
import { HashRouter as Router, BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Jamiyat from '../Components/jamiyat';
import Navbar from '../Components/navbar';
import TopBar from '../Components/topPart';
import Yangiliklar from '../Components/yangiliklar';
import Maxsus from '../Components/maxsus';
import Jarayon from '../Components/jarayon';
import Munosabat from '../Components/munosabat';
import Tadqiqot from '../Components/tadqiqot';
import './style.css'
import YangiliklarTop from '../Components/yangiliklarTop';

export const Root = () => {
  return (
    <div className='root'>
      <TopBar />
     
      <BrowserRouter>




        <Routes >

          <Route key={1} path='*' element={<Navbar />} />
          <Route key={2} path='/jamiyat' element={<Navbar />} />
          <Route key={3} path='/maxsus' element={<Navbar />} />
          <Route key={4} path='/munosabat' element={<Navbar />} />
          <Route key={5} path='/jarayon' element={<Navbar />} />
          <Route key={6} path='/tadqiqot' element={<Navbar />} />

        </Routes>

        <YangiliklarTop/>


        <div id='body'>

          <Routes >

            <Route key={1} path='*' element={<Yangiliklar />} />
            <Route key={2} path='/jamiyat' element={<Jamiyat />} />
            <Route key={3} path='/maxsus' element={<Maxsus />} />
            <Route key={4} path='/munosabat' element={<Munosabat />} />
            <Route key={5} path='/jarayon' element={<Jarayon />} />
            <Route key={6} path='/tadqiqot' element={<Tadqiqot />} />




          </Routes>

        </div>


      </BrowserRouter>
     
    </div>
  )
}
export default Root;
