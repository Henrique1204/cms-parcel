import { createStoreFactory } from '@Store/createStore';

type VisibleGroupStore = {
  setVisibleGroup: (group: string) => void;
  visibleGroup: string;
};

const visibleGroupStore = createStoreFactory<VisibleGroupStore>((set) => ({
  setVisibleGroup: (group) => set({ visibleGroup: group }),
  visibleGroup: '',
}));

export default visibleGroupStore;
