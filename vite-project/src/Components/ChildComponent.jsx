
import PropType from 'prop-types'
export const ChildComponent = (props) => {
  return (
  <>
  <h3>This is child component</h3>

<div>{props.children}</div>
  
  </>
  )
};

ChildComponent.propTypes = {
    children: PropType.array
}
