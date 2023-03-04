import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  noHeaderFooter?: boolean;
}

export default function Layout({ children, noHeaderFooter }: LayoutProps) {
  return (
    <>
      {!noHeaderFooter && <Header />}
      <main>{children}</main>
      {!noHeaderFooter && <Footer />}
    </>
  );
}
