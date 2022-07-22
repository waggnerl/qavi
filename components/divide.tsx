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
            <button className={'btn btn-outline-primary mr-1'} onClick={()=>setChallenge('pangrama')}>Pangrama</button>
            <button className={'btn btn-outline-primary mr-1'} onClick={()=>setChallenge('hours')}>Hora por escrito</button>
            <button className={'btn btn-outline-primary mr-1'} onClick={()=>setChallenge('chronometer')}>Desafio design</button>
            {/* Componente Referente a Pangrama */}
            {challenge==='pangrama'?(
            <Pangram/>):'' }
            {/* Componente Referente a Hora por escrito */}
            {challenge==='hours'?(<Hours/>):'' }
            {/* Componente Referente a Hora por cronometro */}
            {challenge==='chronometer'?(  
            <Chronometer/>
            ):'' }
            </div>  
        </div>
      </div>
    </div>
  )
}