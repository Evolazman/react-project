import React from 'react'
import Img from './pic/Terakan.jpg'
import '../App.css';
import { useState } from 'react';
import styled from 'styled-components';
const Spinner = () => {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      margin: '20px 0',
    },
    number: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
  };
  const numbers = [
    { i: 1, clr: '#db7093', data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqZU8x57jrRjOvM7Ho1qCBRi1o2nc9h2ggmrek1C59A&s" },
    { i: 2, clr: '#20b2aa', data: "https://i5.walmartimages.com/seo/Blox-Fruits-4in-Collectible-Plush_e5d4dd00-dee0-4a6e-a1b5-6e0ff539f030.6f1831d7867c9652ea5945a8dc6fd041.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { i: 3, clr: '#d63e92', data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeE2hj3WlR-Jk72nSu1BDaJjxYUp9HmReyTPJvxRfaGg&s" },
    { i: 4, clr: '#daa520', data: "https://i.ebayimg.com/images/g/L4EAAOSwnlVlqDdC/s-l1200.webp" },
    { i: 5, clr: '#ff340f', data: "https://i.pinimg.com/236x/ee/c2/13/eec2131c1b853397ebfac6cc21641c3e.jpg" },
    { i: 6, clr: '#ff7f50', data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYH7yCQTDqW1cpKN8ennH9aIWlsjJ0O3083gqO52I0Zvo4M9m_PZWhICDGyjvQ9pG0Lew&usqp=CAU" },
    { i: 7, clr: '#3cb371', data: "https://www.picclickimg.com/taEAAOSwps9lq~j1/Blox-Fruits-Fruit-Du-Mammouth-Livraison.webp" },
    { i: 8, clr: '#240750', data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-S7MiWFdF9582klm74xlyeHQIJ0-RECOoryCIDy1oXg&s" }
  ];
  const [isSpinning, setIsSpinning] = useState(false);
  const red = document.querySelector('.spin')

  const [newValue, setNewValue] = useState(1)

  const [state, newState] = useState("wheel")
   
  const handelBtn = () => {
    const roblox = []
    
    for (let i = 1; i <= 8; i += 1) {
      if (i === 1) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(1);
        }
      }
      else if (i === 2) {
        for (let i = 1 ; i <= 4 ; i+=1) {
          roblox.push(2);
        }
      }
      else if (i === 3) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(3);
        }
      }
      else if (i === 4) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(4);
        }
      }
      else if (i === 5) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(5);
        }
      }
      else if (i === 6) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(6);
        }
      }
      else if (i === 7) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(7);
        }
      }
      else if (i === 8) {
        for (let i = 1 ; i <= 1 ; i+=1) {
          roblox.push(8);
        }
      }
    }

    // สุ่มเลือกเลขจาก array
    const randomIndex = Math.floor(Math.random() * roblox.length);
    console.log(roblox[randomIndex])
    if (roblox[randomIndex] === 1) {
      newState("spin"+360)
      console.log(roblox[randomIndex])
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "Bome")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 2) {
      newState("spin"+390)
      console.log(roblox[randomIndex] + "390")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "โจรสลัดไฟ")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 3) {
      newState("spin"+450)
      console.log(roblox[randomIndex] + "450")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "ช้างสาร")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 4) {
      newState("spin"+500)
      console.log(roblox[randomIndex] + "500")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "ปีศาจหมึก")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 5) {
      newState("spin"+550)
      console.log(roblox[randomIndex] + "550")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "พิษ")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 6) {
      newState("spin"+580)
      console.log(roblox[randomIndex] + "580")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "น้ำแข็ง")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 7) {
      newState("spin"+640)
      console.log(roblox[randomIndex] + "640")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "โมจิ")
        newState("wheel")
      }, 1000);
    }
    else if (roblox[randomIndex] === 8) {
      newState("spin"+670)
      console.log(roblox[randomIndex] + "670")
      setTimeout(() => {
        alert ('คุณได้รับไอเทม ' + "กล่องพิเศษ")
        newState("wheel")
      }, 1000);
    }
  }



  return (
    <div class="container">
      <div class="spinbtn" onClick={handelBtn}>spin</div>
      <div className={state}  >
        {numbers.map((item, index) => (
          <div
            key={index}
            className="number"
            style={{ '--i': item.i, '--clr': item.clr, color: 'var(--clr)' }}
          >
            <span><img src={item.data} /></span>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Spinner