import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b6b6b', marginTop: '20px' }}>
      &copy; {currentYear} Sarah's Ice Cream. All rights reserved.
    </footer>
  );
};

export default Footer;
