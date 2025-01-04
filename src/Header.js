import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobile} from 'react-icons/fa';
import useWindowSize from './CustomHooks/useWindowSize';

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className='Header'>
        <span>{width} px</span>
        <h1>{title}</h1>
        <span style={{color: "white"}}>
            {width < 768 ? <FaMobile /> 
          : width < 992 ? <FaTabletAlt />
          : <FaLaptop /> 
          }
        </span>
    </header>
  )
}

export default Header