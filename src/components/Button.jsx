import React from 'react';
import './Button.css'

const Button = ({children, onClick}) => {
  return ( 
    <button onClick={onClick} className="submit-button">{children}</button>

   );
}
 
export default Button;