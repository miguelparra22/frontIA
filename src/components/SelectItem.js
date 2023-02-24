import React from "react";
const valoresItems = [
    {
        value: "Tecnologia"
    },
    {
        value: "Viaje"
    },
    {
        value: "Moda y belleza"
    },
    {
        value: "Salud y fitness"
    },
    {
        value: "Cocina y alimentación"
    },
    {
        value: "Finanzas personales"
    },
    {
        value: "Entretenimiento"
    },
    {
        value: "Negocios y emprendimiento"
    },
]


;

const valorSelectItem = () => {
    var valueText = document.getElementById("selectItem").value;
    var spanText = document.getElementById('spanItem')
    spanText.innerHTML = valueText
}

function SelectItem() {

    return (
        <React.Fragment>
            <label className="pInfo">Tema de interes</label>
            <select id="selectItem" onChange={valorSelectItem} className='selectForm' >
            <option value="" disabled>seleccione la marca</option>
                {valoresItems.map(valorItem => (
                    <option value={valorItem.value}>{valorItem.value}</option>
                ))}
            </select>
            <p className="pInfoGreen"><b>Seleccionaste:</b> <span id="spanItem"></span></p>

        </React.Fragment>

    );
}


export { SelectItem }