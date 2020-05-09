interface Props {
  children: string;
}

const Title: React.FC<Props> = ({ children }) => (
  <div className="text-3xl md:text-4xl font-bold tracking-wide">{children}</div>
);

export default Title;
