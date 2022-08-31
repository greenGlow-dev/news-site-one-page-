import React from 'react'
import './yangiliklar.css'
import prezident from '../../imgs/basic.png'
import jurnalistlar from '../../imgs/jurnalist.png'
import city from '../../imgs/city.png'
import jadidlar from '../../imgs/jadidlar.png'
import internet from '../../imgs/internet.png'
import masjid from '../../imgs/masjid.jpg'
import akmal from '../../imgs/akmal.jpg'
import sherzod from '../../imgs/sherzod.jpg'
import bola from '../../imgs/bola.jpeg'
import gender from '../../imgs/gender.jpg'



export const Yangiliklar = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='Container-news-basic'>
      <div className='Container-news'>
        <div className='Container-news-left'>
          <img className='firstimg' src={prezident} />
          {/* <div className='Container-news-left-button'>Jarayon</div>
          <div className='Container-news-left-title'>Yangi O'zbekiston strategiyasi- erkinlik, haqiqat va adolat yo'li</div> */}
        </div>

        <div className='Container-news-right'>
         
          <div className='Container-news-right-1'>
            <div className='news-right-img1'>
            <img src={jurnalistlar} />

            </div>
            <div className='news-right-img1'>
            <img src={jadidlar} />
            </div>

          </div>
          <div className='Container-news-right-2'>
          <div className='news-right-img2'>
            <img src={city} />
            </div>
            <div className='news-right-img2'>
            <img src={internet} />
            </div>

          </div>
          

        </div>


      </div>

      <div className='Container-section-two'>

        <div className='Container-section-box-one'>

          <div className='Section-box-one-top'>
            <div className='Box-one-top-left'>
              <button>Ijod gulshani</button>
              <img src={masjid} />
              <span>Kitob uchun qurilgan masjid</span>
              <a>Franc Holler</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui maiores vero aspernatur voluptates beatae? Praesentium optio eligendi ipsam maxime voluptas ipsum quaerat. Quaerat natus voluptates delectus dolore ab, debitis animi ullam veniam vitae? Recusandae deleniti totam reprehenderit nesciunt corrupti.</p>
            </div>
            <div className='Box-one-top-right'>


              <select id="cars" name="cars" className='Select'>
                <option value="Hammasi">Hammasi</option>
                <option value="Oxirgi">Oxirgi</option>
                <option value="Qiziqarli">Qiziqarli</option>
              </select>

                <div className='Box' >
                  <img src={gender}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur   <br/> <span>19-fevral, 2022</span> </p>
                </div>
                <div className='Box' >
                  <img src={bola}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur  <br/> <span>19-fevral, 2022</span></p>
                </div>
                <div className='Box' >
                  <img src={prezident}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur   <br/> <span>19-fevral, 2022</span></p>
                </div>
                <div className='Box' >
                  <img src={city}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur  <br/> <span>19-fevral, 2022</span> </p>
                </div>


            </div>
          </div>
          <div className='Section-box-one-bottom'>
              <div className='One-bottom-left'>
                <div className='img-box'>
                  <img src={akmal} />
                </div>
                <div className='Box' >
                  <img src={city}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur   <br/> <span>19-fevral, 2022</span> </p>
                </div>
                <div className='Box' >
                  <img src={city}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur  <br/> <span>19-fevral, 2022</span></p>
                </div>
              </div>
              <div className='One-bottom-right'>
              <div className='img-box'>
              <img src={sherzod} />
              </div>
                <div className='Box' >
                  <img src={city}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur   <br/> <span>19-fevral, 2022</span> </p>
                </div>
                <div className='Box' >
                  <img src={city}/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur  <br/> <span>19-fevral, 2022</span></p>
                </div>
              </div>
          </div>

        </div>
        <div className='Container-section-box-two'>

          <div className='Section-box-two1'>
            <div className='two1-text'>
              <span>Matbuot</span> <br />
              <div className='yangiliklari'>yangiliklari</div> <p>Mahalliy va xorijiy ommaviy axborot vositalari</p>

              <div className='two1-text-block'>
                <div className='two1-text-block-button'>
                  sinab ko'rish
                </div>
                <div className='two1-text-block-text'>
                  Vidiolavhalar
                </div>
              </div>
            </div>
          </div>
          <div className='Section-box-two1'>
            <div className='Box-two1-part1'>


              <div className='two1-text-block-button2'>
                Qiziqarli vidiolar
              </div>
              <div className='two1-text-block-section'>

              <select id="cars" name="cars" className='Select-2'>
                <option value="Hammasi">Hammasi</option>
                <option value="Oxirgi">Oxirgi</option>
                <option value="Qiziqarli">Qiziqarli</option>
              </select>


              </div>
            </div>
            <div className='Box-two1-part2'>
              <p>Gender tengligini ta'minlash va barqaror rivojlanish [Vido]</p>
              <span>
                Xalqaro davra suxbati.
              </span>
            </div>
            <div className='Box-two1-part3'>
              <iframe width="100%" height="63%" src="https://www.youtube.com/embed/3NbjVTnychc" title="Yangi O'zbekistonning Milliy Barqaror rivojlanish maqsadlari: yutuqlar va istiqbollar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='Box-two1-part4'>
              Yangi O'zbekiston taraqqiyot strategiyasida inson huquqlarini taminlashning ustuvor yo'nalishlardan biri gender tenglik-samarali va ijtimoiy-
            </div>


          </div>
          <div className='Section-box-two1'>
            <div className='Another-vidios-button'>
              Boshqa vidiolar
            </div>
            <div className='Another-vidios'>
              <span>Bolalarni <br /> zararli ma'lumotlardan himoya qilish</span>
              <img src={city} />
            </div>
            <div className='Another-vidios'>
              <span>Ommaviy axborot vositalari va madaniyat</span>
              <img src={city} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Yangiliklar;
