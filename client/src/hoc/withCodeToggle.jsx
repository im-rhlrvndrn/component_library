import React, { useState } from 'react';

const withCodeToggle = (WrappedComponent) => {
    const WithCodeToggle = (props) => {
        const [codeState, setCodeState] = useState(false);

        const toggleCodeState = (newState) => setCodeState((prevState) => newState);

        return <WrappedComponent codeState={codeState} setCodeState={toggleCodeState} {...props} />;
    };

    return WithCodeToggle;
};

export { withCodeToggle };
