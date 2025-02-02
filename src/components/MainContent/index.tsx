import React from 'react';

import { store } from '@henrique1204/cms-utility';

import visibleGroupStore from '@Store/visibleGroup';

import Field from '@Components/Field';
import CenteredLoading from '@Components/CenteredLoading';

import * as Styles from './styles';


const MainContent: Component = () => {
  const [groupValues, setGroupValues] = React.useState<Record<string, string | string[]>>();

  const visibleGroupId = visibleGroupStore.useStore((store) => store.visibleGroup);

  const { visibleFields, visibleGroup } = store.CMSSchemaStore.useStore((store) => {
    const visibleGroup = store.groups.find((group) => group.id === visibleGroupId);
    const fieldsFilteredByVisibleGroup = store.fields.filter((field) => field.groupId === visibleGroupId);

    return {
      visibleFields: fieldsFilteredByVisibleGroup,
      visibleGroup,
    };
  });

  React.useEffect(() => {
    const fetchGroupValues = async () => {
      let values = undefined;

      try {
        values = await visibleGroup?.onReceiveValue();
        console.log('values', values, visibleGroup);
      } catch (_) {
        values = undefined;
      } finally {
        setGroupValues(values);
      }
    };

    fetchGroupValues();
  }, [visibleGroup]);

  if (!groupValues || !Object.keys(groupValues).length) return <CenteredLoading />;

  return (
    <Styles.Container>
      {visibleFields.map((field) => (<Field.Text key={field.id} {...field} value={groupValues[field.id] as string} />))}
    </Styles.Container>
  );
};

export default MainContent;
