
var React = require('react');
import {connect} from 'react-redux';
import { Link, hashHistory } from 'react-router'
import reqwest from 'reqwest';
// require("./style1.css");

var page1 = React.createClass({
    btnClick(){
    	reqwest({
	      url: 'https://randomuser.me/api',
	      method: 'get',
	      contentType: 'application/json', 
	      headers: {
		      'X-My-Custom-Header': 'SomethingImportant'
		    },
	      data: {
	        results: 10,
	        page:1,
	        sortField:'name',
			sortOrder:'ascend'
	      },
	      type: 'json',
	      success:function(){
	      	console.log('我成功了~~~~~')
	      },
	      error:function(){
	      	console.log('我失败了~~~~~')
	      },
	      complete:function(){
	      	console.log('我完成了~~~~~')
	      }
	    })
    	.then(function(data){
	    	console.log('then我成功了%%%%%%%%%%%%%%%%',data)
	    })
    	.fail(function (err, msg) {
		    console.log('then我失败了~~~~~~')
		})
		.always(function (resp) {
		    console.log('then我完成了~~~~~~~')
		})		
//  	console.log('this.content',this.context)
//      // hashHistory.push('/Page2')
//		this.props.history.push('/Page2')
        // this.props.history.pushState('aa', '/Page2')
    },
    render() { 
    console.log('%%%%%%%%%%%%%我是首页',sessionStorage.getItem("key")) 

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
    console.log('~~~我是首页~~~~',state)
    return {value: state.add.value};
}
export default connect(mapStateToProps)(page1);