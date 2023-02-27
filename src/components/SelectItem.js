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