import React from 'react'
import CustomizeItem from './CustomizeItem'
import slugify from 'slugify'

export default class CustomizeItemList extends React.Component {
  render() {
    console.log(
      'main-form-selected',
      Object.keys(this.props.features),
      this.props.selected
    )
    const features = Object.keys(this.props.features).map((feature, idx) => {
      console.log('selected-value', feature, this.props.selected[feature])
      const featureHash = feature + '-' + idx
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item))
        return (
          <CustomizeItem
            id={itemHash}
            feature={slugify(feature)}
            checked={item.name === this.props.selected[feature].name}
            // checked={false}
            key={itemHash}
            item={item}
            updateFeature={this.props.updateFeature}
          />
        )
      })

      return (
        <fieldset className='feature' key={featureHash}>
          <legend className='feature__name'>
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
    })
    return <div className='customize-options-list'>{features}</div>
  }
}
