import React from 'react';

import { getCatsadata } from '../../hooks/useQuery';

import { counter } from '../../hooks/useState';

function ReactQuery() {
  const [data ,isLoading, refetch] = getCatsadata("https://catfact.ninja/fact?max_length=140");
  const [countValue, incress , decrees , reset] = counter()
if(isLoading){
    return <h1> Loding...</h1>
}
  return (
    <>
    <br />
    <br />
      <p>ReactQuery: {data?.fact}</p> 
<br />
<hr/>

      <div>
        <button onClick={incress}>+ </button>
        <p>{countValue}</p>
        <button onClick={decrees}>-</button>
        <button onClick={reset}>reset </button>
      </div>
    </>
  );
}

export default ReactQuery;


