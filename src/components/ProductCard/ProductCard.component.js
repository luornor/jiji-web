import React from 'react';
import { StyledProductCard } from './ProductCard.styled';
import {BookmarkBorder } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

const CustomLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

export default function ProductCard({id, price, name, image }) {

  return (
    <StyledProductCard>
      <CustomLink to={`/product/${id}`}>
      <div className='ad-container'>
        <div style={{ backgroundImage: `url('${image}')` }}>
        </div>
        
        <div>
          <BookmarkBorder />
          <p>{name}</p>
          <span>GHC {price}</span>
        </div>
      </div>
        </CustomLink>
    </StyledProductCard>
  );
}
