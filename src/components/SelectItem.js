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
    //spanText.Write = valueText
}

function SelectItem() {

    return (
        <React.Fragment>
                        {valoresItems.map(valorItem => (
                    <option key={valorItem.value} value={valorItem.value}>{valorItem.value}</option>
                ))}
           
        </React.Fragment>

    );
}


export { SelectItem }