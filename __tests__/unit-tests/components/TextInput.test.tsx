import { renderApp } from '../../../src/utils/testUtil';
import { fireEvent, screen } from '@testing-library/react';
import { TextInput } from '../../../src/components/common/text-input/TextInput';

describe('<TextInput />', () => {
  const callback = jest.fn((value) => value);

  it('should be match snapshot', () => {
    const Component = () => <TextInput name={'name'} label={'Label'} />;

    const { container } = renderApp({ children: <Component /> });

    expect(container).toMatchSnapshot();
  });

  it('should be check label', () => {
    const Component = () => <TextInput name={'name'} label={'Label'} />;

    renderApp({ children: <Component /> });

    expect(screen.queryByText('Label')).toBeTruthy();
  });

  it('should be check value', () => {
    const Component = () => <TextInput name={'name'} label={'Label'} />;

    renderApp({ children: <Component /> });

    const input = screen.getByLabelText('Label') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Value' } });

    expect(input.value).toBe('Value');
  });

  it('should be check onChangeCallback prop', () => {
    const Component = () => <TextInput name={'name'} label={'Label'} onChangeCallback={callback} />;

    renderApp({ children: <Component /> });

    const input = screen.getByLabelText('Label') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Value' } });

    expect(callback).toHaveReturnedWith('Value');
  });
});
