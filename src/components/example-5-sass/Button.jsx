// src/component/example-5-sass/Button.jsx
import './button.scss';

const Button = ({ buttonText }) => {
  // Using the class name from our Sass file:
  return <button className="sassy-button">{buttonText}</button>; 
};

export default Button;
