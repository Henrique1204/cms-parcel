import React from 'react';

import { ThemeProvider } from 'styled-components';

import visibleGroupStore from '@Store/visibleGroup';

import theme from '@Assets/theme';

import AppGrid from '@Components/AppGrid';
import MainContent from '@Components/MainContent';
import Header from '@Components/Header';
import Sidebar from '@Components/Sidebar';
import { store } from '@henrique1204/cms-utility';

const App: Component<MFEProps> = ({ appName, onLogout }) => {
  const setVisibleGroup = visibleGroupStore.useStore((store) => store.setVisibleGroup);
  const firstGroup = store.CMSSchemaStore.useStore((store) => store.groups?.[0]);

  React.useEffect(() => {
    if (firstGroup) setVisibleGroup(firstGroup.id);
  }, [firstGroup]);

  return (
    <ThemeProvider theme={theme}>
      <AppGrid>
        <Header appName={appName} onLogout={onLogout} />

        <Sidebar />

        <MainContent />
      </AppGrid>
    </ThemeProvider>
  );
};

export default App;
