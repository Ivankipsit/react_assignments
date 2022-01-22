export default function A1(props){
  function greatest(){
    let a = Number(props.a)
    let b = Number(props.b)
    let c = Number(props.c)
    if (a > b){
      if (a > c){
        return (a.toString()+" is the Greatest Number")
      }else{
        return (c.toString()+" is the Greatest Number")
      }
    }else{
      if(b > c){
        return (b.toString()+" is the Greatest Number")
      }else{
        return (c.toString()+" is the Greatest Number")
      }
    }
  } 
  return(
    <h2>
      {greatest()}
    </h2>
  )
}