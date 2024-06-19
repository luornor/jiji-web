import React from 'react'
import { StyledHomePage } from './Home.styled'
import { CatagorieMain, CatagorieSideBar, HomeTipsContainer, MainFooter, SearchContainer, AllProducts } from '../../components'

export default function Home() {
    return (
        <StyledHomePage>
            <SearchContainer />
            <CatagorieMain />
            <main>
                <CatagorieSideBar />
                <div>
                    <HomeTipsContainer />
                    <AllProducts />
                </div>
            </main>
            <MainFooter />
        </StyledHomePage>
    
    )
}
