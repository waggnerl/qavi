//import {GetServerSideProps} from 'next';
import { useEffect, useState } from "react";
import axios, { AxiosResponse }  from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
const Home = () => {

  const [isPangram, setIsPangram] = useState('');
  let [horario, setHorario] = useState('');
  let [apiMin, setApiMin] = useState<{time: string; MinView: string}[]>([]);
  let [apiHour, setApiHour] = useState<{time: string; HourView: string}[]>([]);
  let [showHour, setShowHour] = useState('');
  let [showMin, setShowMin] = useState('');

  useEffect(() => {
    getMinutes(),
    getHours()
  },[]);
  
  type Pangram = {
    s: string;
  };
  type Time = {
    hourAndMinute: string;
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

  const getMinutes = async()=>{
    try {
      const { data } = await axios.get('http://localhost:3000/api/min');
      setApiMin(data)    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
   }
   
   const getHours = async()=>{
    try {
      const { data } = await axios.get('http://localhost:3000/api/hour');
      setApiHour(data)    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
   }

  function analizeHour(time: Time) {
    setHorario(time.hourAndMinute);
    
    let min:string = time.hourAndMinute.split(':')[1];
    let hour:string = time.hourAndMinute.split(':')[0];
    
    
    apiMin.map(el=>{
      if (el.time ===min){
        setShowMin(el.MinView);
        console.log(el.MinView);
      }
    })
    apiHour.map(el=>{
      if (el.time ===hour){
        setShowHour(el.HourView);
      }
    })

  }
  function showTime(showHour:string,showMin:string){    
    return showHour+showMin;
  }
  
  return (
    <>
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
      <form>
        <input type="time"  className="form-control" placeholder="Digite e avalie os caracteres" onChange={(e)=>analizeHour({ hourAndMinute: e.target.value })}></input>
        <div className="alert alert-secondary" role="alert">{horario!=''?showTime(showHour,showMin):'Digite a hora e minutos'}
        </div>
      </form>
    </>
  )
}

export default Home
