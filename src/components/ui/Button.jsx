import './Button.css';

function Button({ children, variant = 'primary', href, onClick, type = 'button' }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
