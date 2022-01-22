export default function M1(props){
  function printUpperCase(){
    return props.data.toUpperCase()
  }
  return(
    <h2>
    {printUpperCase()}
    </h2>
  )
}