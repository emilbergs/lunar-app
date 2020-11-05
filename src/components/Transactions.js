import React, { Component } from "react";

class Transactions extends Component {

    render() {

        const { data, filterText, addFlagged } = this.props;

        const transAction = data
            .filter(action => {
                return action.status.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
                    action.type.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
                    action.localizableTitle.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
            })
            .map(action => {
                return (
                    <div className="post">
                        <img key={action.iconURL} src={action.iconURL} className="iconURL" alt="icon" />
                        <div key={action.type} className="type" >{action.type}</div>
                        <div key={action.localizableTitle} className="textData">{action.localizableTitle}</div>
                        <div key={action.billingAmount} className="textData">{action.billingAmount.amount + ' ' + action.billingAmount.currency}</div>
                        <div key={action.time} className="textData">{action.time}</div>
                        <div key={action.status} className={action.status}>{action.status}</div>
                        <img key={action.categoryIconUrl} src={action.categoryIconUrl} className="categoryIconUrl" alt="category" />
                        <img key={action.delete} onClick={() => addFlagged(action.id)} src={action.binIcon} className="binIcon" alt="bin" />
                    </div>
                )
            })


        return (
            <div className="posts">
                {transAction}
            </div>
        );
    }
}

export default Transactions