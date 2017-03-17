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
        console.log('props======',action)
        this.props.dispatch(action.change(value))
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <header>我是头部 <input value={this.props.value} onChange={this.changeHandle.bind(this)} type="text" ref="input"/> </header>
                {this.props.children}
                <footer>我是底部</footer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('state',state)
    return {value: state.add.value};
}
export default connect(mapStateToProps)(App);
