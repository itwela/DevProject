import menu from '../../../public/hamburger.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <ul className="container-hero
flex
items-center
justify-between
md:justify-start
md:gap-9
h-[10vh]
w-[100vw]
pr-[5%]
pl-[50px]
md:pl-[6%]
text-[#e3ddd1]
text-[10.6px]
fixed
z-[300]
        ">
        <Link 
to={'/'}
className="content-h
font-main
        ">          
           <span className=''>I & I</span>
        </Link>
        <Link 
to={'/Insights'}
className='content-h
font-main
        '>
        Insights
        </Link>
        <Link 
to={'/Strategies'}
className='content-h
font-main
        '>
        Strategies
        </Link>
        <Link 
to={'/About'}
className='content-h
font-main
        '>
        About Us
        </Link>               
        <div className="hamburger
scale-[0.5]
md:hidden
        ">
        <img 
        src={ menu }
        className=''>
        </img>
        </div>
        <span className="line
absolute
w-[80vw]
m-[0.4em]
bottom-[-10%]  
hidden
lg:w-[95vw]      

">
        </span>
        </ul>
        </>
      );
}

export default Header;