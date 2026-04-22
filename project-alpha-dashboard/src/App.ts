import React from 'react';

export default function App() {
  return React.createElement(
    'div',
    { style: { padding: 24, fontFamily: 'Arial, sans-serif' } },
    React.createElement('h1', null, 'Project Alpha Dashboard'),
    React.createElement('p', null, 'Starter app is now seeded in GitHub.'),
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Personal and business finances'),
      React.createElement('li', null, 'Credit cards and utilization'),
      React.createElement('li', null, 'Bills and due dates'),
      React.createElement('li', null, 'Prompt-driven updates later')
    )
  );
}
