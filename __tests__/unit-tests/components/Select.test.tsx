import { renderApp } from '../../../src/utils/testUtil';
import { Select } from '../../../src/components/common/select/Select';
import { fireEvent, screen } from '@testing-library/react';

describe('<Select />', () => {
  const callback = jest.fn((value) => value);

  const items = [
    { id: 'label_1', label: 'Label 1' },
    { id: 'label_2', label: 'Label 2' },
    { id: 'label_3', label: 'Label 3' },
    { id: 'label_4', label: 'Label 4' },
  ];

  it('should be match snapshot', () => {
    const Component = () => <Select title={'Kategoriler'} items={items} />;

    const { container } = renderApp({ children: <Component /> });

    expect(container).toMatchSnapshot();
  });

  it('should be check labels', () => {
    const Component = () => <Select title={'Kategoriler'} items={items} />;

    renderApp({ children: <Component /> });

    expect(screen.queryByText('Label 1')).toBeTruthy();
    expect(screen.queryByText('Label 2')).toBeTruthy();
    expect(screen.queryByText('Label 5')).not.toBeTruthy();
  });

  it('should be check checked item', () => {
    const Component = () => <Select title={'Kategoriler'} items={items} />;

    renderApp({ children: <Component /> });

    const item = screen.getByLabelText('Label 1') as HTMLInputElement;

    fireEvent.click(item);

    expect(item.checked).toBeTruthy();
  });

  it('should be check defaultValue prop', () => {
    const Component = () => <Select title={'Kategoriler'} items={items} defaultValues={['label_1']} />;

    renderApp({ children: <Component /> });

    expect((screen.getByLabelText('Label 1') as HTMLInputElement).checked).toBeTruthy();
  });

  it('should be check onSubmit prop', () => {
    const Component = () => (
      <Select title={'Kategoriler'} items={items} defaultValues={['label_1']} onSubmit={callback} />
    );

    renderApp({ children: <Component /> });

    fireEvent.click(screen.getByText('Submit'));

    expect(callback).toHaveReturnedWith(['label_1']);
  });
});
