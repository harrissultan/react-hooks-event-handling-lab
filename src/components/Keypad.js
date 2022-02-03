// Code Keypad Component Here
import React from 'react';


function handler(){
    console.log('Entering password...')
}
function Keypad(){
    return(
        <input type="password" onChange={handler}/>
    )  
}



export default Keypad;