import React from 'react';
import './Header.css';

// const HeaderTitle = () => 
//     return (
//     <h3>LambdaSchool</h3>
//         <h4>@LambdaSchool 26 jan</h4>
//         )
    

function HeaderTitle () {
    return (
        <div className ="HeaderTitle">
            <h3>LambdaSchool @LambdaSchool 26 jan</h3>
            <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    )
}
export default HeaderTitle;