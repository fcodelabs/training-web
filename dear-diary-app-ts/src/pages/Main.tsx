import React, { ReactElement } from 'react';

interface MainProps {
  name: string;
}

function Main({ name }: MainProps): ReactElement {
  // component styles
  return (
    <div>
      <h1>hi iam</h1>
    </div>
  );
}

export default Main;
