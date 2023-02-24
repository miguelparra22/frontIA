import React from "react";

function ResponseText({dataresponse = []}){
    return(
          <p>
            {
                dataresponse.map((choise, index)=>(
                    <p key={index}>
                        {choise.text}
                    </p>
                ))
            }
          </p>
    )
}


export {ResponseText}