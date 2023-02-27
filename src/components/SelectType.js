import React from "react";

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