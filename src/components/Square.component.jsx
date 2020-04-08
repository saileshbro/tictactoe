import React from 'react'
import PropTypes from 'prop-types'
const style = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
}
const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Square
