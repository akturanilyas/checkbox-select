import { fireEvent, screen } from '@testing-library/react';
import { renderApp } from '../../../src/utils/testUtil';
import { CheckBox } from '../../../src/components/common/checkbox/CheckBox';

describe('<CheckBox />', () => {
  const callback = jest.fn((value) => value);

  it('should be match snapshot', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} />;

    const { container } = renderApp({ children: <Component /> });

    expect(container).toMatchSnapshot();
  });

  it('should be check label', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} />;

    renderApp({ children: <Component /> });

    expect(screen.queryByText('Label')).toBeTruthy();
  });

  it('should be input false', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} value={false} />;

    renderApp({ children: <Component /> });

    const element = screen.getByLabelText('Label') as HTMLInputElement;

    expect(element.checked).toBe(false);
  });

  it('should be input true', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} value={true} />;

    renderApp({ children: <Component /> });

    const element = screen.getByLabelText('Label') as HTMLInputElement;

    expect(element.checked).toBe(true);
  });

  it('should be input click ability', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} />;

    renderApp({ children: <Component /> });

    const element = screen.getByLabelText('Label') as HTMLInputElement;

    fireEvent.click(element);

    expect(element.checked).toBe(true);

    fireEvent.click(element);

    expect(element.checked).toBe(false);
  });

  it('should be check callback function', () => {
    const Component = () => <CheckBox name={'name'} label={'Label'} onChange={callback} />;

    renderApp({ children: <Component /> });

    const element = screen.getByLabelText('Label') as HTMLInputElement;

    fireEvent.click(element);

    expect(callback).toHaveReturnedWith(true);
  });
});
