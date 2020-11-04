import React from "react";

export default ({ data, flagged }) => {
    const flaggedItem = flagged.map(id => {
        const { type } = data[id]
        return (
            <li key={id} className="{}">{type}</li>
        )
    })
    return (
        <div className="flagged">
            <p>Tryk på en transaktion for at gemme den ...</p>
            <ul>
                {flaggedItem}
            </ul>
        </div>
    )
}