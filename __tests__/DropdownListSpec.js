
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import DropdownList from '../src/components/DropdownList';
import expect from  'expect'

describe('DropdownList', () => {
  it('Should render a list', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <DropdownList title="title"
        options={[
          {
            value: '1',
            name: 'a'
          }
        ]}
      />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'li')).toBe('object');
  });
})