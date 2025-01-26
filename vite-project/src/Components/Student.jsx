import PropType from 'prop-types'

export const Student = (props) => {
  return (
    <div className="student">
<table>
    <tbody>
    <tr>
        <th>Name</th>
        <td>{props.name}</td>
    </tr>
    <tr>
        <th>Age</th>
        <td>{props.age}</td>
    </tr>
    <tr>
        <th>isMarried</th>
        <td>{props.isMarried ? "Yes" : "No"}</td>
    </tr>
    </tbody>
</table>

    </div>
  );
};

Student.propTypes = {
    name: PropType.string,
    age: PropType.number,
    isMarried: PropType.bool
}

// default props
Student.defaultProps = {
    name : "Unknown",
    age : 0,
    isMarried : false
}