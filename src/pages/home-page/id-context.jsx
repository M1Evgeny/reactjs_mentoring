import React from 'react';

const IdContext = React.createContext();

function IdProvider(props) {
  const [movieId, setMovieId] = React.useState(0);
  const value = React.useMemo(() => [movieId, setMovieId], [movieId]);
  return <IdContext.Provider value={value} {...props} />
}

function useId() {
  const context = React.useContext(IdContext);
  if (!context) {
    throw new Error(`useId must be used within a IdProvider`);
  }
  return context;
}

export { IdProvider, useId }