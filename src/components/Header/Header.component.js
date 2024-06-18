import React from 'react'
import { StyledHeader } from './Header.styled';
import jijiLogo from  "../../assets/images/jiji logo.png";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
         <StyledHeader>
             <div className='logo-container'>
               <Link to="/"><img src={jijiLogo} alt=""/></Link> 
             </div>
             <span className="moto">SELL FASTER, BUY SMARTER</span>
             <div className="right-container">
                    <div>
                        <span className='account-btn'>Sign in</span>
                        <span> | </span>
                        <span className='account-btn'>Registration</span>
                     </div>   
             <Link to="/sale"><button className="sell-btn">SELL</button></Link>
             </div>
         </StyledHeader>
    )
}
