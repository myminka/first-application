import React from 'react';

class HeaderChild extends React.Component {
    componentWillUnmount(){
        alert("The component named Header is about to be unounted");
    }

    render(){
        return (
            <h1>Hi, i am child of </h1>
        )
    }
}

export default HeaderChild;