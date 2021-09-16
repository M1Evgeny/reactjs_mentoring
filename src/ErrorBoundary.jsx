import React from 'react';

function ErrorBoundary(props) {
    const ErrorText = () => {
      return  (
        <h2>
            Oops, something went wrong ... We are doing our best to fix the issue
        </h2>
    )}

    let isEverythingOk = true;
    return (
        <>
            {isEverythingOk ? props.children : <ErrorText />}
        </>
    )
}

export default ErrorBoundary;