export default function change(state = {value:'default'},action){
  if(action.type=="ADD")
  	return Object.assign({},state,{value:action.value});
  return state;
}