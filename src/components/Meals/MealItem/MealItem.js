import './MealItem.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  
    return (
    <li className='meal'>
      <div>
        <he>{props.name}</he>
        <div className='description'>{props.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <p>Here will be the item form to add the quantity and to add to cart.</p>
      </div>
    </li>
  );
};

export default MealItem;
