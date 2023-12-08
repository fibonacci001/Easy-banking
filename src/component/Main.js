import phone from '../images/image-mockups.png';
import Nav from '../component/Nav';
import {useState, useEffect} from 'react';

const Main = ({Aos}) => {
// const [overlay, setoverlay] = useState(null);
// useEffect(() => {
//     const coverbackground = document.querySelector('.overlay');
//     setoverlay(coverbackground)
// }, [])


    return ( 
        <main>
            
            <div className="text"
            data-aos="fade-right"
            data-aos-duration="1000"
    data-aos-easing="ease-in"
            >
            <h1 className=" mainheader-text" 
             
            >Next generation digital banking</h1>
            <p className="mainheadparagraph"> Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
  <div className="mainheader-buttondiv">
  <button className="mainheader-button">Request Invite</button>
  </div>
            </div>
            <div className="image">
        <img src={phone} alt="" className='phone-image' 
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
    data-aos-easing="ease-in"
        />

            </div>
            {/* {overlay && <Nav overlay={overlay} />} */}
        </main>
     );
}
 
export default Main;