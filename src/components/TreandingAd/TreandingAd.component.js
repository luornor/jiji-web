import React from 'react';
import { StyledTreandingAd } from './TreandingAd.styled';
import {BookmarkBorder } from "@mui/icons-material";

export default function TreandingAd({ price, name, image }) {

  return (
    <StyledTreandingAd>
      <div className='ad-container'>
        <div style={{ backgroundImage: `url('${image}')` }}>
        </div>
        <div>
          <BookmarkBorder />
          <p>{name}</p>
          <span>GHC {price}</span>
        </div>
      </div>
    </StyledTreandingAd>
  );
}
