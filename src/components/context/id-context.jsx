import React from 'react';

const IdContext = React.createContext();

export function IdProvider(props) {
  const [movieId, setMovieId] = React.useState(0);
  const value = React.useMemo(() => ({ movieId, setMovieId }), [movieId]);
  return <IdContext.Provider value={value} {...props} />
}

export function useId() {
  const context = React.useContext(IdContext);
  if (!context) {
    throw new Error(`useId must be used within a IdProvider`);
  }
  return context;
}
