export default function Sample(props){

  
  function add(){
    let a = 5
    var b = 3
    const c = 3
    return ("X+A is "+(props.x + a) +", Y+B is "+ (props.y + b) +", Z+C is "+ (props.z + c))
  }

  return (
    <h2>
    {add()}
    </h2>
  )
}