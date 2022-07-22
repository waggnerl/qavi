import { useEffect, useState } from "react";
export default function Chronometer(){
  const [isPangram, setIsPangram] = useState('');
  
  {/*Analisar se trata-se de um pangrama */}

  function pangrams(s:string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return setIsPangram('false')
     }
    }
    setIsPangram('true')
 }
 let limit:number = 10**3
  return(
    <form>
      <input type="text" maxLength={limit} className="form-control" placeholder="Digite e avalie se é um pangrama" onChange={(e)=>pangrams(e.target.value)}>
      </input>
      {(isPangram==='true')?(<div className="alert alert-primary" role="alert">
      pangram
      </div>):''}
      {(isPangram==='false')?(
      <div className="alert alert-danger" role="alert">
      Not pangram
      </div>):''}    
    </form>
  )
}