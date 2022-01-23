export default function X({a,b}){
  function add(){
    return a+b
  }
  return(
    <h2>
    {add()}
    </h2>
  )
}