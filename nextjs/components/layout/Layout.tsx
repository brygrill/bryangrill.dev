import { Header } from './Header';
import { Container } from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

/** Render default layout across all pages */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
