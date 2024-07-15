// Define a type for the Button props
export type ButtonProps = {
  label: string;
  backgroundColor?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick: () => {};
};

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = '#0F8ADE',
  color = '#FFFFFF',
  size = 'md',
  onClick,
}) => {
  let scale = 1;
  if (size === 'sm') {
    scale = 0.7;
  } else if (size === 'lg') {
    scale = 1.5;
  }

  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.8}rem ${scale * 1.2}rem`,
    fontSize: `${scale * 1}rem`,
    border: 'none',
    borderRadius: '12px',
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
