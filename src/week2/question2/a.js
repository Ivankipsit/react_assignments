export default function A(props){
  function add(){
    return  Number(props.x) + Number(props.y)
  }
  
  return(
    <h2>
    {add()}
    </h2>
  )
}
