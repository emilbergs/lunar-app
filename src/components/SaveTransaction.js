import React from 'react';

//Mit forsøg på at kunne slette transaktioner

const SaveTransaction = ({ data, flagged }) => {
    const saveTrans = flagged.map(id => {
        const { localizableTitle } = data[id]
        return (
            <div key={id} className="deleteItem">{localizableTitle}</div>
        )
    })
    return (
        <div className="flagged">
            <h4>Remove</h4>
            <div>
                {saveTrans}
            </div>
        </div>
    )
}

export default SaveTransaction