import { useEffect, useState } from "react";
export default function Chronometer(){
  const [isPangram, setIsPangram] = useState('');
  type Pangram = {
    s: string;
  };
  function analizePangram(pangram: Pangram) {

    let number: number = 10**3
    
    if (pangram.s.length <= number && pangram.s.length >= 1) { 
      setIsPangram('true')
    } else if(pangram.s.length > number) {
      setIsPangram('false')
    } else{
      setIsPangram('')
    }
  }
  return(
    <form>
      <input type="text" className="form-control" placeholder="Digite e avalie se é um pangrama" onChange={(e)=>analizePangram({ s: e.target.value })}>
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