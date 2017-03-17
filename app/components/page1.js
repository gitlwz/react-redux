
var React = require('react');
import {connect} from 'react-redux';
// require("./style1.css");

var page1 = React.createClass({
    btnClick(){
    	// console.log('this.content',this.context)
		this.props.history.push('/Page2')
    },
    render() {    
    
        return (
          <div className="content">
				<h1>我是首页,我是别的组件我拿到了 header 的值{this.props.value}</h1>
				
				<br/>
				<button onClick={this.btnClick}>点我跳的页面二</button>
          </div>
        );
    }
});
function mapStateToProps(state) {
    return {value: state.add.value};
}
export default connect(mapStateToProps)(page1);