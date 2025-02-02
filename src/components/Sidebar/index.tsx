import { store } from '@henrique1204/cms-utility';

import visibleGroupStore from '@Store/visibleGroup';

import * as Styles from './styles';

const Sidebar: Component = () => {
  const groups = store.CMSSchemaStore.useStore((store) => store.groups);
  const { setVisibleGroup, visibleGroup } = visibleGroupStore.useStore();

  return (
    <Styles.Container>
      <Styles.GroupNav>
        {groups.map((group) => {
          return (
            <Styles.GroupButton key={group.id} onClick={() => setVisibleGroup(group.id)} isActive={visibleGroup === group.id}>{group.title}</Styles.GroupButton>
          );
        })}
      </Styles.GroupNav>
    </Styles.Container>
  );
};

export default Sidebar;
