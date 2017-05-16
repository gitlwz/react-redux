
var React = require('react');
import {connect} from 'react-redux';
// require("./style1.css");

var page2 = React.createClass({
    
    render() { 
        return (
          <div className="content">
				<h1>我是页面二  我一样 拿到header 的值{this.props.value}</h1>
				
				<br/>
          </div>
        );
    }
});
function mapStateToProps(state) {
    console.log('~~~我是页面二~~~~',state)
    return {value: state.add.value};
}
export default connect(mapStateToProps)(page2);