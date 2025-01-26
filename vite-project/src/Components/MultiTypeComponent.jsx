
import PropType from 'prop-types'

export const MultiTypeComponent = (props) => {
  return (
    <div>The value is {props.value}</div>
  )
}

MultiTypeComponent.propTypes = {
    value: PropType.oneOfType([PropType.string,PropType.number,PropType.bool]).isRequired
}