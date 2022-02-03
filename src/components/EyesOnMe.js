// Code EyesOnMe Component Here
import React from 'react';


function Focus() {
    console.log("Good!");
}

function Blur() {
    console.log("Hey! Eyes on me!");
}

function EyesOnMe(){
    return(

        <button value="Eyes on me" onFocus={Focus} onBlur={Blur}>Eyes on me</button>
    )
}
export default EyesOnMe;