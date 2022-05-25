

import { useState } from 'react'

import axios from 'axios';

export default function Index() {

    const [qtdInteiras, setQtdInteiras] = useState(0);

    const [qtdMeias, setQtdMeias] = useState(0);

    const [diasemana, setDiaSema] = useState('');

    const [nacionalidade, setNacionalidade] = useState('');

    const [total, setTotal] = useState(0);

   async function calcular() {

           const resp= await axios.post ('http://localhost:5000/ingresso/' +qtdInteiras + qtdMeias + diasemana +nacionalidade );

                      qtdInteiras: qtdInteiras, 

                       qtdMeias: qtdMeias,

                      diasemana: diasemana,

                      nacionalidade: nacionalidade

   }

        setTotal (resp.data.total);

}

           return (

                 <main>

                         <h1> Ingresso </h1>

                          <div>

                                Quantidade inteiras: <input type='text' value={qtdInteiras}  onChange={e =>{setQtdInteiras(e.target.value)}} />

                          </div>

                          <div>

                                Quantidade meias: <input type='text' value={qtdMeias} onChange={e =>{setQtdMeias(e.target.value)}} />

                          </div>

                          <div>

                                Dia da semana: <input type='text'   value={diaSemana} onChange= {e =>{setDiaSemana(e.target.value)}} />

                          </div>

                           <div>

                                Nacionalidade: <input type='text' value={nacionalidade} onChange= {e =>{setNacionalidade(e.target.value)}} />

                          </div>

                          <div>

                                <button onClick={calcular}>Calcular</button>

                          </div>

                          <div>

                                O total é R$ {total}

                          </div> 

                 </main>

         )

}