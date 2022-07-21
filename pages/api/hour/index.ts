// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  time:string,
  HourView: string
}[]



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {time:'00',HourView: 'Meia Noite'},
    {time:'01',HourView: 'uma'},
    {time:'02',HourView: 'duas'},
    {time:'03',HourView: 'três'},
    {time:'04',HourView: 'quatro'},
    {time:'05',HourView: 'cinco'},
    {time:'06',HourView: 'seis'},
    {time:'07',HourView: 'sete'},
    {time:'08',HourView: 'oito'},
    {time:'09',HourView: 'nove'},
    {time:'10',HourView: 'dez'},
    {time:'11',HourView: 'onze'},
    {time:'12',HourView: 'doze'},
    {time:'13',HourView: 'treze'},
    {time:'14',HourView: 'catorze'},
    {time:'15',HourView: 'quinze'},
    {time:'16',HourView: 'dezesseis'},
    {time:'17',HourView: 'dezessete'},
    {time:'18',HourView: 'dezoito'},
    {time:'19',HourView: 'dezenove'},
    {time:'20',HourView: 'vinte'}, 
    {time:'21',HourView: 'vinte e uma'},    
    {time:'22',HourView: 'vinte e duas'},    
    {time:'23',HourView: 'vinte e três'},    
    {time:'24',HourView: 'vinte e quatro'},    
  ])
}
