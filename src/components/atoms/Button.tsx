import { useMemo, useCallback } from 'react';

interface Props {
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  variant?: Variant;
  color?: TailwindColor;
  size?: Size;
}

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'small' | 'medium' | 'big';

type ClassNamesFactoryMap<T extends string, F extends Function> = {
  [P in T]: F;
};

const variantClassNamesFactoryMap: ClassNamesFactoryMap<
  Variant, (color: TailwindColor) => string
> = {
  primary: (c: TailwindColor) => `bg-${c}-500 hover:bg-${c}-700 text-white font-bold rounded`,
  secondary: () => 'bg-gray-400 hover:bg-gray-300 text-gray-800 font-bold rounded',
  tertiary: (c: TailwindColor) => `text-${c}-500 hover:text-${c}-700 font-bold`,
};

const sizeClassNamesFactoryMap: ClassNamesFactoryMap<
  Size, () => string
> = {
  small: () => 'text-sm py-1 px-2',
  medium: () => 'text-base py-1 px-2 lg:px-3',
  big: () => 'text-lg py-2 px-4',
};

const Button: React.FC<Props> = ({
  onClick,
  children,
  disabled = false,
  variant = 'primary',
  color = 'blue',
  size = 'medium',
}) => {
  const containerClassName = useMemo(() => {
    const base = `${variantClassNamesFactoryMap[variant](color)} ${sizeClassNamesFactoryMap[size]()}`;
    if (disabled) {
      return `${base} opacity-50 cursor-not-allowed`;
    }
    return `${base} cursor-pointer`;
  }, [variant, color, disabled, size]);

  const handleClick = useCallback((e) => {
    if (disabled || !onClick) {
      return;
    }
    onClick(e);
  }, [disabled, onClick]);

  return (
    <div className={containerClassName} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Button;
