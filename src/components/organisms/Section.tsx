import Title from '../atoms/Title';

interface Props {
  title: string;
}

const Section: React.FC<Props> = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    <div>
      {children}
    </div>
  </div>
);

export default Section;
