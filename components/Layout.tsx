import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
}

export default function Layout({ children, noHeader, noFooter }: LayoutProps) {
  return (
    <>
      <Provider store={store}>
        {!noHeader && <Header />}
        <main>{children}</main>
        {!noFooter && <Footer />}
      </Provider>
    </>
  );
}
