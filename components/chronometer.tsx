
import React, { useState, useEffect } from 'react'

export default function Chronometer(props:any){
  
  const {initialMinute = 5,initialSeconds = 0} = props;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  const [stop, setStop ] =  useState(false);
  

  useEffect(()=>{
    {/*Executa cronometro */}
  let myInterval = setInterval(() => {
          if(stop === true){
            {/*Para cronometro */}
            return window.clearInterval()
          }
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }          
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);          
        };
  });
  

  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <div className={'watch'}>
                <h1 > {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
              </div>
            </div>
        </div>
      </div>      
      <button className={'restart-button base'} onClick={()=>
        /* Setar a valor inicial do cronometro */
        {setMinutes(initialMinute), setSeconds(initialSeconds)}}>Reiniciar</button>
      <button className={'stop-button base'} onClick={()=>{setStop(true)}}>Pausar</button>
      <button className={'start-button base'} onClick={()=>{setStop(false)}}>Iniciar</button>
    </>
  )
}
