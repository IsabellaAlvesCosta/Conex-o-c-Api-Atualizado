

import axios from 'axios'

export default function Index() {

         const [cor, setCor] = useState('');

         const [resposta, setResposta] = useState('');

         async function verificarcorprimaria() {

              const resp = await axios.get('htpp://localhost:5000/corprimaria/' +cor);

               if (resp.data.primaria === true) {

                       setResposta('SIM');

               } else {

                      setResposta('NÃO');

               }

         }

           return (

                 <main>

                         <h1> Cor Primária </h1>

                          <div>

                                Cor: <input type='text' value ={cor} onChange={e => setCor(e.target.value)} />

                          </div>

                          <div>

                                <button onClick={verificarcorprimaria}>Verificar</button>

                          </div>

                          <div>

                                  É cor primária? {resposta}

                          </div> 

                 </main>

         )

}