import React from 'react';

import * as Styles from './styles';

const CenteredLoading: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.LoadingPulse />
    </Styles.Container>
  );
};

export default CenteredLoading; 