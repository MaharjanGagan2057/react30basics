import React from 'react'
import PropTypes from 'prop-types'

// This is a simple Button component that takes a prop 'name' and renders a button with that name
const Button = (props) => {
    // Destructure the name prop from props
    const { name } = props; 
    // The button will display the name passed as a prop
    return (
    <button>{name}</button>
  )
}
// Define default props for the Button component
Button.defaultprops = {
    name : "Default"
}
// Define the prop types for the Button component
Button.PropTypes = {
    name: PropTypes.string
}
export default Button