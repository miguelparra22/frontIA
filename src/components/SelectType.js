import React from "react";
import {dataSelectType} from "../functions/manejoDatosSelect"

const Types = [{
    value: 'Description copy'
},
{
    value: 'Ad persuasion'
},
{
    value: 'Sales follow-up emails'
},
{
    value: 'Web copy'
},
{
    value: 'Video/Audio Scripts.'
},
{
    value: 'Content for blogs'
}
]

const valorSelectItem = () => {
    var valueText = document.getElementById("selectType").state.value ;
    var spanText = document.getElementById('spanType')
    dataSelectType(valueText);
   // spanText.innerHTML = valueText
}




function SelectType() {
    return (
        <React.Fragment>
            
            {Types.map(valorItem => (
                    <option key={valorItem.value} value={valorItem.value}>{valorItem.value}</option>
                ))}
            
            <p className="pInfoGreen"><b>you selected:</b> <span id="spanText"></span></p>

        </React.Fragment>
    )
}


export {SelectType}