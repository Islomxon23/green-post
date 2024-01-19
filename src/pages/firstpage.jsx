import React from 'react'
import '../css/nav.css'
export default function firstpage() {
  return (
    <div className='nav'>
     <footer className='nav1'>
        <div className='div'>
        <img src="https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg" alt="" />
        <h1>Rahmonov Abduhamid <br /></h1>
        <p>ID: 007904</p>
        <p>Баланс: 0.00$</p>
        </div>
        <div className='div1'>
            <ul>
              <li><a href=""><i class="fa-solid fa-house"></i>  ГЛАВНАЯ</a></li>
              <li><a href=""><i class="fa-solid fa-cart-shopping"></i>  ТОВАРЫ</a> </li>
              <li> <a href=""><i class="fa-solid fa-box-open"></i> ПОСЫЛКА</a> </li>
              <li> <a href=""><i class="fa-solid fa-wallet"></i> РАСЧЕТЫ</a></li>
              <li><a href=""><i class="fa-solid fa-user-group"></i> ПОЛУЧАТЕЛИ</a></li>
              <li> <a href=""><i class="fa-solid fa-envelope"></i> ОБРАЩЕНИЯ</a></li>
            </ul>
        </div>
     </footer>  
     <div className='nav111'>
        <header className='nav2'>
              <div className='btn'>
              <i class="fa-solid fa-bars"></i>
              <p><i class="fa-solid fa-chart-bar"></i>  GREEN POST</p>
              </div>
              <div className='btn1'>
                <div className='org'>
                  <p>Otpravka posilok</p>
                  <p className='pp'><i class="fa-solid fa-phone"></i>  (94) 603-00-90</p>
                  <p className='pp'><i class="fa-brands fa-telegram"></i>  @greenpostuz</p>
                </div>
                <div className='org'>
                  <p>Poluchenia posilok</p>
                  <p className='pp'><i class="fa-solid fa-phone"></i>  (94) 643-00-90</p>
                  <p className='pp'><i class="fa-brands fa-telegram"></i>  @greenpostasia</p>
                </div>
                <div className='org'>
                  <p>jalobi i prilojenia</p>
                  <p className='pp'><i class="fa-solid fa-phone"></i>  (91) 190-45-90</p>
                  <p className='pp'><i class="fa-brands fa-telegram"></i>  @hadjibaev</p>
                </div>
              </div>
        </header>
        <main className='main'>
          <div className='main1'>
            <h1>Отследить заказ</h1>
            <input type="text" placeholder='введите номер отслежив' />
            <button>Отследить</button>
          </div>
          <div className='main2'>
              <h1>Ваш адрес в Китае</h1>
              <p>分享 拼音田字格分享 拼音田字格 ID:007904</p>
              <p>分享 拼: ID:007904</p>
              <p>享 拼音田: 510520</p>
              <p>享 拼音: 17728037238</p>
          </div>
        </main>
     </div>
    </div>
  )
}
