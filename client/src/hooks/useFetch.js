import { useState, useEffect } from 'react';

const asyncFetch = async url => {
  let data = null,
    error = null;

  try {
    data = await (await fetch(url)).json();
  } catch (err) {
    error = err;
  } finally {
    return {
      data,
      error,
    };
  }
};

export const useAsyncFetch = url => {
  const [response, setResponse] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    asyncFetch(url).then(res => {
      setResponse({
        data: res.data,
        error: res.error,
      });
    });
  }, [url]);

  const fetchNextPage = url => {
    console.log('fetch next page', url);
  };

  return [response, fetchNextPage];
};
