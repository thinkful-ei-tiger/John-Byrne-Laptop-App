import React from 'react'
import CustomizeItemList from './CustomizeItemList'

export default class SelectionForm extends React.Component {
  render() {
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>

        <CustomizeItemList
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </form>
    )
  }
}
