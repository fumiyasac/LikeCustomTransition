// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import Intro from '../../../../src/components/common/Intro';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Intro />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
