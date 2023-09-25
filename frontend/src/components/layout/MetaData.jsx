import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => {
  const pageTitle = `${title} - E-commerce`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default MetaData;
