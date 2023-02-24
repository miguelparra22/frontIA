import React from "react";

const valoresItems = [
    {
        value: "Informal"
    },
    {
        value: "Serious"
    },
    {
        value: "Friendly"
    },
    {
        value: "Humorous"
    },
    {
        value: "authoritative"
    }
]


;

const valorSelectItem = () => {
    var valueText = document.getElementById("selectTono").value;
    var spanText = document.getElementById('spanTono')
    spanText.innerHTML = valueText
}

function SelectTono() {

    return (
        <React.Fragment>
            <label className="pInfo">Tema de interes</label>
            <select id="selectTono" onChange={valorSelectItem} className='selectForm' >
                {valoresItems.map(valorItem => (
                    <option value={valorItem.value}>{valorItem.value}</option>
                ))}
            </select>
            <p className="pInfoGreen"><b>Seleccionaste:</b> <span id="spanTono"></span></p>

        </React.Fragment>

    );
}


export { SelectTono }