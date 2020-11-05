import React, { Component } from 'react';

class Search extends Component {

    filterUpdate() {
        const val = this.myValue.value
        console.log(val)
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <header>
                <form>
                    <input
                        type="text"
                        ref={(value) => { this.myValue = value }}
                        placeholder="Filtrer transaktioner ..."
                        onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </header>
        )
    }
}

export default Search