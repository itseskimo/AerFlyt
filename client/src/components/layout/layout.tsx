import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-4 sm:mx-8'>
      {children}
    </div>
  );
}

export default Layout;
