import React, { Component } from 'react'
import Features from './Features'
import Header from './Components/Header'
import Summary from './Components/Summary'
import SelectionForm from './Components/SelectionForm'
import './App.css'

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
      },
      OperatingSystem: {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
      },
      VideoCard: {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  }

  updateFeature = (feature, newValue) => {
    console.log('inside-update-feature', feature, newValue)
    const selected = Object.assign({}, this.state.selected)
    console.log('new-object-selected', selected)
    selected[feature] = newValue
    this.setState({
      selected,
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <SelectionForm
            features={Features}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <Summary selected={this.state.selected} />
        </main>
      </div>
    )
  }
}

export default App
