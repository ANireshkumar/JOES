import PropTypes from 'prop-types'

export const OneOfSamaple = (props) => {
    const {color} = props;
      return (
    <div style={{backgroundColor:color, padding:"10px", color:"white"}}>This component has a background color of {color}</div>
  )
}

OneOfSamaple.propTypes = {
    color: PropTypes.oneOf(["red", "green", "blue"]).isRequired
}