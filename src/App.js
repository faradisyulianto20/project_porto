import React from 'react';
import './App.css';
import background from './images/background.jpg';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <img src={background} alt='background'></img>
      </div>
      <NavBar />
      <Countdown />
      <Reminder />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='logo'>SNBT's Countdown</div>
      <div className='navbarr-content'>
        <ul>
          <li>What's this?</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <div className='credit'> <i class="fas fa-copyright"></i> Copyright 2025 - Faradis Yulianto</div>
      <div className='social-media'>
        <a href='https://www.facebook.com/faradis.yulianto.9/'><i alt='facebook' className='fab fa-facebook'></i></a>
        <a href='https://x.com/Faradisssssss'><i alt='twitter' className=' fab fa-twitter'></i></a>
        <a href='https://www.instagram.com/far.adis_/'><i alt='instagram' className='fab fa-instagram' ></i></a>
      </div>
      <div className='add-menu'>
        <ul>
          <li>Help</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  )
}

function Countdown() {

  const targetDate = new Date("2025-04-23T14:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
  
    if (timeLeft > 0) {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Display the result in the #countdown element
      document.getElementById("day").innerHTML =
        `${days} <p style='font-size: 0.3em;'>days</p>`;
      document.getElementById("hour").innerHTML =
        `${hours} <p style='font-size: 0.3em;'>hours</p>`;
      document.getElementById("minute").innerHTML =
        `${minutes} <p style='font-size: 0.3em;'>minutes</p>`;
      document.getElementById("second").innerHTML =
        `${seconds} <p style='font-size: 0.3em;'>seconds</p>`;
    } else {
      // If the countdown is over, display a message
      clearInterval(timerInterval); // Stop the timer
    }
  }
  
  // Update the countdown every second
  const timerInterval = setInterval(updateCountdown, 1000);
  return(
    <div className='Countdown'>
      <div className='title'>SNBT Start On</div>
      <div className='clock'>
        <div id='day'>00</div>:
        <div id='hour'>00</div>:
        <div id='minute'>00</div>:
        <div id='second'>00</div>
      </div>
    </div>
  )
}

function Reminder() {
  return(
    <div className='Reminder'>
        <div className='description'>
        Seleksi Nasional Berdasarkan Tes (SNBT) tahun 2025 memiliki jadwal pelaksanaan yang telah ditentukan. Pelaksanaan UTBK dijadwalkan mulai 23 April hingga 3 Mei 2025, dan hasil SNBT akan diumumkan pada 28 Mei 2025. Masa unduh sertifikat UTBK berlangsung mulai 3 Juni hingga 31 Juli 2025.
        </div>
        <div className='box-reminder'>
            <i className='fas fa-bell' alt='lonceng'></i>
            <div className='text-lonceng'>
              REMIND ME
            </div>
        </div>
    </div>
  )
}

export default App;
