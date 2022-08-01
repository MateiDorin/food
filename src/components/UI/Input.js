import './Input.css';


const Input = props => {
    return <div className='input'>
        <label htnmFor={props.input.id}>{props.label}</label>
        <input {... props.input}/>
    </div>
};

export default Input;