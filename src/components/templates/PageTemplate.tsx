import PageHeader from '../molecules/PageHeader';
import PageContent from '../atoms/PageContent';

const PageTemplate: React.FC = ({ children }) => (
  <>
    <PageHeader />
    <PageContent>
      {children}
    </PageContent>
  </>
);

export default PageTemplate;
