import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
}

export default function Layout({ children, noHeader, noFooter }: LayoutProps) {
  return (
    <>
      {!noHeader && <Header />}
      <main>{children}</main>
      {!noFooter && <Footer />}
    </>
  );
}
