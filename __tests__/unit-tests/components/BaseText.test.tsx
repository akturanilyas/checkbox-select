import { screen } from '@testing-library/react';
import { BaseText } from '../../../src/components/common/base-text/BaseText';
import { renderApp } from '../../../src/utils/testUtil';
import { Button } from '../../../src/components/common/button/Button';

describe('<BaseText />', () => {
  it('should be match snapshot', () => {
    const Component = () => <Button label={'Label'} />;

    const { container } = renderApp({ children: <Component /> });

    expect(container).toMatchSnapshot();
  });

  it('should be check label', () => {
    const Component = () => <BaseText label={'Label'} />;

    renderApp({ children: <Component /> });

    expect(screen.getByText('Label')).toBeTruthy();
  });
});
