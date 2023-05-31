import React from 'react';

const Section = ({ title, children }) => {
  return (
    <>
      <p>{title}</p>
      <span>{children}</span>
    </>
  );
};

export default Section;
