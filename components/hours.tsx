import { useEffect, useState } from "react";
import axios, { AxiosResponse }  from 'axios';

export default function Chronometer(){
  let [horario, setHorario] = useState('');
  let [apiMin, setApiMin] = useState<{time: string; MinView: string}[]>([]);
  let [apiHour, setApiHour] = useState<{time: string; HourView: string}[]>([]);
  let [showHour, setShowHour] = useState('');
  let [showMin, setShowMin] = useState('');
  let [isSpecificNumber, setIsSpecificNumber] = useState(false);

  useEffect(() => {
    getMinutes(),
    getHours()
  },[]);
  
  type Time = {
    hourAndMinute: string;
  };

{/* Consulta dados em api referentes a minutos */}
  const getMinutes = async()=>{
    try {
      const { data } = await axios.get('/api/min');
      setApiMin(data)    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
   }

{/* Consulta dados em api referentes a horas */}   
   const getHours = async()=>{
    try {
      const { data } = await axios.get('/api/hour');
      setApiHour(data)    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
   }

{/* Analiza dados, e faz retorno de acordo com horário */}   
  function analizeHour(time: Time) {
    setHorario(time.hourAndMinute);
    
    let min:string = time.hourAndMinute.split(':')[1];
    let hour:string = time.hourAndMinute.split(':')[0];
    
    if ( min === '45' || min === '40' ){
      setIsSpecificNumber(true)
      hour = `${parseInt(hour)+1}`
      if (hour.length === 1){
        hour = '0'+hour
      }
    } else {
      setIsSpecificNumber(false)
    }

    apiMin.map(el=>{
      if (el.time ===min){
        setShowMin(el.MinView);
      }
    })

    apiHour.map(el=>{
      if (el.time ===hour){        
        setShowHour(el.HourView);
      }
    })

  }
  {/* Apresenta horário em tela */} 
  function showTime(showHour:string,showMin:string){ 
    if(isSpecificNumber && showHour === 'uma'){
      return showMin+showHour
    }else if (isSpecificNumber){
      return showMin+ 'as ' +showHour
    } else if(!isSpecificNumber){
      return showHour+showMin;
    }
  }
  
  return(
    <form>
      <input type="time"  className="form-control" placeholder="Digite e avalie os caracteres" onChange={(e)=>analizeHour({ hourAndMinute: e.target.value })}></input>
      <div className="alert alert-secondary" role="alert">{horario!=''?showTime(showHour,showMin):'Digite a hora e minutos'}
      </div>
    </form>
  )
}