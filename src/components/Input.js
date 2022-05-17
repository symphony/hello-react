const Input = ({ placeholder, reset }) => (
  <input type="text" onChange={reset} placeholder={placeholder}>

  </input>
);

export default Input;