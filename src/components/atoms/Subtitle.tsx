interface Props {
  children: string;
}

const Subtitle: React.FC<Props> = ({ children }) => (
  <div className="text-lg font-bold">{children}</div>
);

export default Subtitle;
