import React, {Component,findDOMNode} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as action from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
    }
    changeHandle(){
        const node = ReactDOM.findDOMNode(this.refs.input);
        const value = node.value.trim();
        this.props.dispatch(action.change(value))
    }
    render() {
        console.log('%%%%%%%%%%%%%',this.props)
        sessionStorage.setItem("key", "value");
        var visiti = true;
        return (
            <div>
                <header>我是头部 <input value={this.props.value} onChange={this.changeHandle.bind(this)} type="text" ref="input"/> </header>
                  {visiti && this.props.children}
                <footer>我是底部</footer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {value: state.add.value};
}
export default connect(mapStateToProps)(App);
