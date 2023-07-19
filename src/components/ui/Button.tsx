interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  props?: any;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`capitalize font-bold py-1 px-4 rounded ${className ?? ''}`}
    >
      {children}
    </button>
  );
};
export default Button;
