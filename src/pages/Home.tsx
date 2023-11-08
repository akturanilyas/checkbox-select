import { Select } from '../components/common/select/Select.tsx';
import BaseView from '../components/common/base-view/BaseView.tsx';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { BaseText } from '../components/common/base-text/BaseText.tsx';

export const Home = () => {
  const getItems = async (): Promise<Record<string, Array<string>>> => {
    const res = await fetch('../../src/predefined-data/items.json');

    return res.json();
  };

  const { data: items, isSuccess, isError } = useQuery({ queryFn: () => getItems() });

  const _items = useMemo(
    () =>
      items?.data.map((item, index) => ({
        id: index.toString(),
        label: item,
      })),
    [items],
  );

  const onSubmit = (items: Array<string>) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <BaseView className={'w-full p-8 bg-white'}>
      {isError && <BaseText label={'Something went wrong'} />}
      {isSuccess && _items && (
        <Select
          title={'Kategoriler'}
          items={_items}
          className={'min-w-[500px] h-[500px]'}
          onSubmit={onSubmit}
          defaultValues={JSON.parse(localStorage.getItem('items')!)}
        />
      )}
    </BaseView>
  );
};
