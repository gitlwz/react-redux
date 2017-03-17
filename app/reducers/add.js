export default function change(state,action){
  if(action.type=="ADD")
  	return{value:action.value};
  return {value:'default'};
}