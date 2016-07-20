import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils' //I like using the Test Utils, but you can just use the DOM API instead.
import expect from 'expect'
import Root from '../src/components/Root'

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });
});