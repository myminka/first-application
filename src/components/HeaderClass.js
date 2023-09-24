import React from 'react'
import HeaderChild from './HeaderChildClass.js'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            model: "fresh",
            showHeader: true
        }
    }

    changeModel = () => {
        this.setState({model: "fresh again"});
    }

    deleteHeaderChild = () => {
        this.setState({showHeader: false})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({model: "out of order"});
        }, 3000);
    }

    render(){
        let myHeader;

        if (this.state.showHeader){
            myHeader = <HeaderChild/>
        }

        return (<>
        <h1>Hi, I am {this.props.color} Header!</h1>
        {myHeader}
        <p>I am {this.state.model} Header!</p>
        <button type='button' onClick={this.changeModel}>
            Change headers model
        </button>
        <button type='button' onClick={this.deleteHeaderChild}>
            Unmount element
        </button>
    </>);
    }
}

export default Header;