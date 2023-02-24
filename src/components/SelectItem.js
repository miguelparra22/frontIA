import React from "react";
const valoresItems = [
    {
        value: "Technology"
    },
    {
        value: "Journey"
    },
    {
        value: "fashion and beauty"
    },
    {
        value: "health and fitness"
    },
    {
        value: "kitchen and food"
    },
    {
        value: "personal finance"
    },
    {
        value: "Entertainment"
    },
    {
        value: "Business and entrepreneurship"
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
            <label className="pInfo">Topic of interest</label>
            <select id="selectItem" onChange={valorSelectItem} className='selectForm' >
            <option value="" disabled>Select an option</option>
                {valoresItems.map(valorItem => (
                    <option value={valorItem.value}>{valorItem.value}</option>
                ))}
            </select>
            <p className="pInfoGreen"><b>you selected:</b> <span id="spanItem"></span></p>

        </React.Fragment>

    );
}


export { SelectItem }