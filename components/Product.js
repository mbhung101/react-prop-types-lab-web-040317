import React from 'react'
import ReactDOM from 'react-DOM'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render (){
    return (
      <div className = "product">
        <h3>{this.props.name}
        </h3>
        <h3>{this.props.producer}
        </h3>
        <h3>{this.props.hasWatermark}
        </h3>
        <h3>{this.props.color}
        </h3>
        <h3>{this.props.weight}
        </h3>
      </div>
    )
  }
}


const productColors = ['white','eggshell-white','salmon']

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(productColors).isRequired,
  weight: function (props, propName, componentName) {
    debugger
    let weight = props[propName]
    if (weight === undefined){
      return new Error('no weight included')
    }
    else if (isNaN(weight)){
      return new Error('weight must be a number')
    }
    return weight >= 80 && weight <= 300 ? null : new Error('must be within 80 to 300')
  }
}


export default Product
