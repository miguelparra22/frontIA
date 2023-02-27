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


function SelectTono() {

    return (
        <React.Fragment>
           
                {valoresItems.map(valorItem => (
                    <option key={valorItem.value} value={valorItem.value}>{valorItem.value}</option>
                ))}
        </React.Fragment>

    );
}


export { SelectTono }