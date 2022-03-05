import * as React from 'react';

export default function Custom({pageContext}) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <p>{JSON.stringify(pageContext,null,20)}</p>
    </div>
  );
}