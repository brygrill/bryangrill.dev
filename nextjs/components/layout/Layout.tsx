import Header from './Header';
import Container from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

/** Render default layout across all pages */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
