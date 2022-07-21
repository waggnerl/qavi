// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  time:string,
  MinView: string
}[]



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {time:'00',MinView: ' horas em ponto'},
    {time:'01',MinView: ' e um'},
    {time:'02',MinView: ' e dois'},
    {time:'03',MinView: ' e três'},
    {time:'04',MinView: ' e quatro'},
    {time:'05',MinView: ' e cinco'},
    {time:'06',MinView: ' e seis'},
    {time:'07',MinView: ' e sete'},
    {time:'08',MinView: ' e oito'},
    {time:'09',MinView: ' e nove'},
    {time:'10',MinView: ' e dez'},
    {time:'11',MinView: ' e onze'},
    {time:'12',MinView: ' e doze'},
    {time:'13',MinView: ' e treze'},
    {time:'14',MinView: ' e catorze'},
    {time:'15',MinView: ' e quinze'},
    {time:'16',MinView: ' e dezesseis'},
    {time:'17',MinView: ' e dezessete'},
    {time:'18',MinView: ' e dezoito'},
    {time:'19',MinView: ' e dezenove'},
    {time:'20',MinView: ' e vinte'}, 
    {time:'21',MinView: ' e vinte e um'}, 
    {time:'22',MinView: ' e vinte e dois'}, 
    {time:'23',MinView: ' e vinte e três'}, 
    {time:'24',MinView: ' e vinte e quatro'}, 
    {time:'25',MinView: ' e vinte e cinco'}, 
    {time:'26',MinView: ' e vinte e seis'}, 
    {time:'27',MinView: ' e vinte e sete'}, 
    {time:'28',MinView: ' e vinte e oito'}, 
    {time:'29',MinView: ' e vinte e nove'}, 
    {time:'30',MinView: ' e meia'},    
    {time:'31',MinView: ' e trinta e um'},    
    {time:'32',MinView: ' e trinta e dois'}, 
    {time:'33',MinView: ' e trinta e três'}, 
    {time:'34',MinView: ' e trinta e quatro'}, 
    {time:'35',MinView: ' e trinta e cinco'}, 
    {time:'36',MinView: ' e trinta e seis'}, 
    {time:'37',MinView: ' e trinta e sete'}, 
    {time:'38',MinView: ' e trinta e oito'}, 
    {time:'39',MinView: ' e trinta e nove'}, 
    {time:'40',MinView: ' e quarenta'}, 
    {time:'41',MinView: ' e quarenta e um'}, 
    {time:'42',MinView: ' e quarenta e dois'}, 
    {time:'43',MinView: ' e quarenta e três'}, 
    {time:'44',MinView: ' e quarenta e quatro'}, 
    {time:'45',MinView: ' e quarenta e cinco'}, 
    {time:'46',MinView: ' e quarenta e seis'}, 
    {time:'47',MinView: ' e quarenta e sete'}, 
    {time:'48',MinView: ' e quarenta e oito'}, 
    {time:'49',MinView: ' e quarenta e nove'}, 
    {time:'50',MinView: ' e cinquenta'}, 
    {time:'51',MinView: ' e cinquenta e um'}, 
    {time:'52',MinView: ' e cinquenta e dois'}, 
    {time:'53',MinView: ' e cinquenta e três'}, 
    {time:'54',MinView: ' e cinquenta e quatro'}, 
    {time:'55',MinView: ' e cinquenta e cinco'}, 
    {time:'56',MinView: ' e cinquenta e seis'}, 
    {time:'57',MinView: ' e cinquenta e sete'}, 
    {time:'58',MinView: ' e cinquenta e oito'}, 
    {time:'59',MinView: ' e cinquenta e nove'}  
  ])
}

{/*
20	vinte	pronunciation
21	vinte e um	pronunciation
22	vinte e dois	pronunciation
23	vinte e três	pronunciation
24	vinte e quatro	pronunciation
25	vinte e cinco	pronunciation
26	vinte e seis	pronunciation
27	vinte e sete	pronunciation
28	vinte e oito	pronunciation
29	vinte e nove	pronunciation
30	trinta	pronunciation
31	trinta e um	pronunciation
32	trinta e dois	pronunciation
33	trinta e três	pronunciation
34	trinta e quatro	pronunciation
35	trinta e cinco	pronunciation
36	trinta e seis	pronunciation
37	trinta e sete	pronunciation
38	trinta e oito	pronunciation
39	trinta e nove	pronunciation
40	quarenta	pronunciation
41	quarenta e um	pronunciation
42	quarenta e dois	pronunciation
43	quarenta e três	pronunciation
44	quarenta e quatro	pronunciation
45	quarenta e cinco	pronunciation
46	quarenta e seis	pronunciation
47	quarenta e sete	pronunciation
48	quarenta e oito	pronunciation
49	quarenta e nove	pronunciation
50	cinquenta	pronunciation
51	cinquenta e um	pronunciation
52	cinquenta e dois	pronunciation
53	cinquenta e três	pronunciation
54	cinquenta e quatro	pronunciation
55	cinquenta e cinco	pronunciation
56	cinquenta e seis	pronunciation
57	cinquenta e sete	pronunciation
58	cinquenta e oito	pronunciation
59	cinquenta e nove	pronunciation
60	sessenta
*/}