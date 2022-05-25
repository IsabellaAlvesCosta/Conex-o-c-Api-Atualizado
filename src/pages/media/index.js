import { useState } from 'react'
import axios from 'axios'

export default function Index() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const[resposta, setResposta]= useState(0);

    async function calcularmedia() {

        const resp = await axios.get('htpp://localhost:5000/media/' +nota1 +nota2 +nota3);
        
            
    }
    



    return (

          <main>

                <h1> Calcular Média </h1>
                <div>

                        Nota 1: <input type='text' value ={nota1} onChange={e => setNota1(e.target.value)} />

                </div>
                <div>

                        Nota 2: <input type='text' value ={nota2} onChange={e => setNota2(e.target.value)} />

                </div>
                <div>

                        Nota 3: <input type='text' value ={nota3} onChange={e => setNota3(e.target.value)} />

                </div>
                <div>

                                <button onClick={calcularmedia}>Calcular Média</button>

                </div>
                <div>

                        Média: {resposta}

                </div>
          </main>

  )

}