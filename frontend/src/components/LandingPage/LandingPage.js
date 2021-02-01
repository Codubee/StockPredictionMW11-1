import React from 'react'
import Features from './Features/Features'
import Tools from './Tools/Tools'
import Team from './Team/Team'
import Explanation from './Explanation/Explanation'


function LandingPage(){
    return(
        <>
            <Explanation/>
            <Features/>
            <Tools/>
            <Team/>
        </>
    )
}

export default LandingPage;