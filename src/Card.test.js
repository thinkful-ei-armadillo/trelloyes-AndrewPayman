import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component testing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
  
      //render the component, this is the actual test, if something is wrong it will fail here
      ReactDOM.render(
        <Card
        title="test-title" key="b" content="test content"
        />,
        div
      );
  
      //clean up code
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
            <Card
            title="test-title" key="b" content="test content"
            />
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})