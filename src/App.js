
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Img from './imagens/nav-logo.png'
import Banner from './banner.js'
import Img1 from './imagens/img1.jpg'
import Img2 from './imagens/img2.jpg'
import Img3 from './imagens/img3.jpg'
import Img4 from './imagens/camera.png'
import Img5 from './imagens/dinheiro.png'
import Img6 from './imagens/de-praia.png'
import Img7 from './imagens/facebook.png'
import Img8 from './imagens/twitter.png'
import Img9 from './imagens/instagram.png'
import Img10 from './imagens/youtube.png'


function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact />
          <Banner />
        </Switch>
      </Router>

      <div className="container">
        <h1 className="why-title">
          Why us?
        </h1>
        <p>
          Porque escolher a melhor empresa de fotos do mercado?
        </p>
        <div className="card-container">
          <div className="card">
            <div className="card-text">
              <img src={Img4} alt="camera" className='img-icon' />
              <h2>As melhores fotos do mercado</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="card-text">
              <img src={Img5} alt="dinheiro" className='img-icon' />
              <h2>Os melhores preços</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in .
              </p>
            </div>
            <div className="card-text">
              <img src={Img6} alt="praia" className='img-icon' />
              <h2>Tenha fotos bem editadas e ambientadas</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        </div>

      </div>
      <div className="contain">
        <h1 className="recentes-title">
          Trabalhos Recentes
        </h1>
        <div className="img-contain">
          <img src={Img1} alt="paisagem" className='img' />
          <img src={Img2} alt="paisagem" className='img' />
          <img src={Img3} alt="paisagem" className='img' />
        </div>
      </div>
      <div className="final-back">
        <div className="icon">
          <img src={Img} id='icon-img' />Picx
        </div>
        <div className="social-cont">
          <a href="https://web.facebook.com/"><button className="bttn"><img src={Img7} alt="Facebook logo" className='social-img' /></button></a>
          <a href="https://twitter.com/"><button className="bttn"><img src={Img8} alt="twitter logo" className='social-img' /></button></a>
          <a href="https://www.instagram.com/"><button className="bttn"><img src={Img9} alt="Instagram logo" className='social-img' /></button></a>
          <a href="https://www.youtube.com/"><button className="bttn"><img src={Img10} alt="YouTube logo" className='social-img' /></button></a>

        </div>
        <p className="cop">
          Lucas©. All Rights Reserved
        </p>
      </div>
    </>

  );
}

export default App;
