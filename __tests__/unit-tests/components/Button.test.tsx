import { fireEvent, screen } from '@testing-library/react';
import { renderApp } from '../../../src/utils/testUtil';
import { Button } from '../../../src/components/common/button/Button';

describe('<Button />', () => {
  const callback = jest.fn((value) => value);

  it('should be match snapshot', () => {
    const Component = () => <Button label={'Label'} />;

    const { container } = renderApp({ children: <Component /> });

    expect(container).toMatchSnapshot();
  });

  it('should be check label', () => {
    const Component = () => <Button label={'Label'} />;

    renderApp({ children: <Component /> });

    expect(screen.queryByText('Label')).toBeTruthy();
  });

  it('should be check button functionality', () => {
    const Component = () => <Button label={'Label'} onClick={() => callback('callbackValue')} />;

    renderApp({ children: <Component /> });

    fireEvent.click(screen.getByText('Label'));

    expect(callback).toHaveReturnedWith('callbackValue');
  });

  it('should be check button functionality', () => {
    const Component = () => <Button label={'Label'} onClick={() => callback('callbackValue')} />;

    renderApp({ children: <Component /> });

    fireEvent.click(screen.getByText('Label'));

    expect(callback).toHaveReturnedWith('callbackValue');
  });
});
