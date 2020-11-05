import React from 'react';

const SaveTransaction = ({ data, flagged }) => {
    const saveTrans = flagged.map(id => {
        const { binIcon } = data[id]
        return (
            <div key={id} className="deleteItem">{binIcon}</div>
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