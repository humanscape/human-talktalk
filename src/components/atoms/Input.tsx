import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ className, ...props }) => (
  <input className={`appearance-none bg-gray-200 text-gray-700 border box-border rounded py-2 px-4 text-base focus:outline-none focus:bg-white${className && ` ${className}`}`} {...props} />
);

export default Input;
