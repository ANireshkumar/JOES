import PropType from "prop-types";

export const ArraySample = (prop) => {
    const {items} = prop;
  return (
    <div>
        <h2>Items List</h2>
        <ul>
            {items.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  )
}

ArraySample.propTypes = {
    items: PropType.arrayOf(PropType.shape({id:PropType.number.isRequired,name:PropType.string })).isrequired,
};