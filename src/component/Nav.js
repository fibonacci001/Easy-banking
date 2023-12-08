import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import cancel from '../images/icon-close.svg';
import {useState, useEffect} from 'react';

const Nav = ({Aos}) => {

    const [coverbackground, setCoverBackground] = useState(null);  
    const [open, setOpen] = useState(null);  
    const [close, setClose] = useState(null);
    const [navcontrol, setNavcontrol] = useState(null);


    useEffect(() => {

    
    const coverbackground = document.querySelector('.overlay');
    setCoverBackground(coverbackground);
    const close = document.querySelector('.closemenu');
    setClose(close);
    const open = document.querySelector('.openmenu');
    setOpen(open);
    const navcontrol = document.querySelector('.nav-control');
    setNavcontrol(navcontrol)
},[])

    const Handleopen = () => {
        coverbackground.classList.toggle('overshow');
        open.classList.add('closeopenmenu');
        close.classList.add('showclosemenu');
        navcontrol.classList.toggle('navshow');
    };
    const Handleclose = () => {
        coverbackground.classList.toggle('overshow');
        open.classList.remove('closeopenmenu');
        close.classList.remove('showclosemenu');
        navcontrol.classList.toggle('navshow');

    }

    return ( 
        <div>
<nav data-aos="fade-down"
data-aos-duration="700"
data-aos-easing="ease-in"
>
<div className="navmain-div">
    <img src={logo} alt="" className='navlogo' />
    <div className="nav-control">
    <ul className="nav-ul">
        <li className="navitem">Home</li>
        <li className="navitem">About</li>
        <li className="navitem">Contact</li>
        <li className="navitem">Blog</li>
        <li className="navitem">Careers</li>
        </ul>     
</div>
<button className="invite">Request Invite</button>
<div className="tooglecontrol">
<img src={hamburger} alt="" onClick={Handleopen} className="openmenu" />
<img src={cancel} alt="" onClick={Handleclose} className="closemenu" />
</div>
</div>
</nav>
<div className="overlay"></div>
</div>
     );
}
 
export default Nav;