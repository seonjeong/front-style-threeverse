import './Button.scss';

const Button = ({ title, type = 'default', variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${type} ${variant}-style`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
