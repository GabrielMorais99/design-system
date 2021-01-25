import React from 'react'
import PropTypes from 'prop-types'
import { Label, Content } from '../styles'
import { Option, SelectStyle } from './styles'

function Select({ name, label, options, register }) {
  return (
    <Label>
      <Content>{label}</Content>
      <SelectStyle name={name} ref={register}>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </SelectStyle>
    </Label>
  )
}

Select.defaultProps = {
  label: '',
  name: '',
  options: [''],
  register: () => {}
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  register: PropTypes.func
}

export default Select