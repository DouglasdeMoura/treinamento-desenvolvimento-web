import { Input } from './Input';
import renderer from 'react-test-renderer';

describe('<Input />', () => {
  it('deve renderizar o Input', () => {
    const tree = renderer
      .create(<Input />)
      .toJSON();
    
      expect(tree).toMatchSnapshot();
  });
});
