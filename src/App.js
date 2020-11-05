import React, { Component } from "react";
import Transactions from "./components/Transactions";
import Search from './components/Search'
import SaveTransaction from "./components/SaveTransaction";
import Credit from "./components/Credit";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      flagged: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  addFlagged(id) {
    const flagList = this.state.flagged.concat([id])
    this.setState({
      flagged: flagList
    })
  }


  render() {

    return (
      <div>
        <Search filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <SaveTransaction
            flagged={this.state.flagged}
            data={this.props.data}
          />
          <Transactions data={this.props.data}
            filterText={this.state.filterText}
            addFlagged={this.addFlagged.bind(this)}
          />
          <Credit />
        </main>
      </div>
    )
  }
}


export default App;
