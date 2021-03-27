import React, { Component } from 'react';

const withCodeToggle = (WrappedComponent) => {
    class WithCodeToggle extends Component {
        constructor(props) {
            super(props);

            this.state = {
                codeState: false,
            };
        }

        toggleCodeState = () =>
            this.setState((prevState) => ({ ...prevState, codeState: !prevState.codeState }));

        render() {
            return (
                <WrappedComponent
                    codeState={this.state.codeState}
                    toggleCodeState={this.toggleCodeState}
                    {...this.props}
                />
            );
        }
    }

    return <WithCodeToggle />;
};

export { withCodeToggle };
