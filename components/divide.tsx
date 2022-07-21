import Chronometer from '../components/chronometer'
import Pangram from '../components/pangram'
import Hours from '../components/hours'
import {useState} from 'react'

export default function Divide(){
  let [challenge,setChallenge] = useState('')
  return(
    <div className="containerDivide">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <h1>Qual desafio deseja ver?</h1>
            <button className={'btn btn-primary'} onClick={()=>setChallenge('pangrama')}>Pangrama</button>
            <button className={'btn btn-primary'} onClick={()=>setChallenge('hours')}>Hora por escrito</button>
            <button className={'btn btn-primary'} onClick={()=>setChallenge('chronometer')}>Desafio design</button>
            {challenge==='pangrama'?(<Pangram/>):'' }
            {challenge==='hours'?(<Hours/>):'' }
            {challenge==='chronometer'?(  
            <Chronometer/>
            ):'' }
            </div>  
        </div>
      </div>
            
    </div>
  )
}