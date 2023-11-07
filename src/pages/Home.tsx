import { Select } from '../components/common/select/Select.tsx';
import BaseView from '../components/common/base-view/BaseView.tsx';
import { default as items } from '../../src/predefined-data/items.json';
import { useMemo } from 'react';

export const Home = () => {
  const _items = useMemo(
    () =>
      items.data.map((item, index) => ({
        id: index.toString(),
        label: item,
        value: false,
      })),
    [],
  );

  return (
    <BaseView className={'h-screen p-8'}>
      <Select items={_items} onChange={({ items, selectItem }) => console.log(items, selectItem)} />
    </BaseView>
  );
};
