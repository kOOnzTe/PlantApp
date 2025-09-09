/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

// To run this test, use one of the following commands:
// For running all tests: npm test
// For running just this file: npm test -- App.test.tsx
// For running with Jest directly: npx jest App.test.tsx
// For running with watch mode: npm test -- --watch App.test.tsx

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
