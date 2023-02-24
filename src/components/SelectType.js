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

const valorSelectItem = () => {
    var valueText = document.getElementById("selectType").value;
    var spanText = document.getElementById('spanType')
    spanText.innerHTML = valueText
}
function SelectType() {
    return (
        <React.Fragment>
            <label className="pInfo">Tema de interes</label>
            <select id="selectType" onChange={valorSelectItem} className='selectForm' >
                {Types.map(valorItem => (
                    <option value={valorItem.value}>{valorItem.value}</option>
                ))}
            </select>
            <p className="pInfoGreen"><b>Seleccionaste:</b> <span id="spanText"></span></p>

        </React.Fragment>
    )
}


export {SelectType}