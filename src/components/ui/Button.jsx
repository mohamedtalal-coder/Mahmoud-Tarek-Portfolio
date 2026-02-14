import './Button.css';

function Button({ children, variant = 'primary', href, onClick, type = 'button' }) {
  const className = `btn btn-${variant}`;

  if (href) {
    const isInternalLink = href.startsWith('#');
    
    const handleClick = (e) => {
      if (isInternalLink) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    return (
      <a 
        href={href} 
        className={className} 
        onClick={handleClick}
        {...(!isInternalLink && { target: '_blank', rel: 'noopener noreferrer' })}
      >
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
