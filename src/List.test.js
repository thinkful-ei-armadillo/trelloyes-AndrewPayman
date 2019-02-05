import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <List
        header="test list"
        key={2}
        cards={[
          { id: 'g', title: 'First card', content: 'lorem ipsum' },
          { id: 'f', title: 'Second card', content: 'lorem ipsum' }
        ]}
      />,
      div
    );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <List
          header="test list"
          key={1}
          cards={[
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' }
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
