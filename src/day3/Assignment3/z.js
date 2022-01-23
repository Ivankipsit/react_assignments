export default function Z(){
  let a1 = 13
  let b1 = 14
  let c1 = 15
  let d1 = 16

  function addLocal(){
    return a1+b1+c1+d1
  }
  return(
    <h2>
      {addLocal()}
    </h2>
  )
}