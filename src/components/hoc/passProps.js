import React, { Component } from 'react';

const passProps = props => BaseComponent => {
    console.log('props :', props);
    return class passProps extends Component {
        render() {
            return (
                <>
                    <BaseComponent {...this.props} {...props} />
                </>

            );
        }
    }

}

export default passProps;