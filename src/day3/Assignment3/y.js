export default function Y({a,b,c}){
  function add(){
    return a+b+c
  }
  return(
    <h2>
    {add()}
    </h2>
  )
}