import React from 'react';

const ModalContext = React.createContext();

function ModalProvider(props) {
    const [modalObject, setModalObject] = React.useState({});
    const value = React.useMemo(() => [modalObject, setModalObject], [modalObject]);
    return <ModalContext.Provider value={value} {...props} />;
}

function useModal() {
    const context = React.useContext(ModalContext);
    if (!context) {
      throw new Error(`useModal must be used within a ModalContext`);
    }
    return context; 
}
  
export { ModalProvider, useModal }