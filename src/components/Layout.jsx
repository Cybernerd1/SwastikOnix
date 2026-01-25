import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-web-purple selection:text-white overflow-x-hidden">
      {children}
    </div>
  );
};

export default Layout;
