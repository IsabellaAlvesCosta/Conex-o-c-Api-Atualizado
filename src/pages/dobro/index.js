import { useState } from 'react'
import axios from 'axios'

export default function Index() {
  const [numero, setNumero] = useState(0);
  const[resposta, setResposta]=useState(0);

  async function calcular() {

    const resp = await axios.get('htpp://localhost:5000/dobro/' +numero);

        numero:numero

}

    return (

          <main>

                <h1> Dobro </h1>
                <div>

                                Número: <input type='text' value ={numero} onChange={e => setNumero(e.target.value)} />

                 </div>
                 <div>

                                <button onClick={calcular}>Calcular</button>

                </div>
                <div>

                                O dobro é:{resposta}

                 </div>

          </main>

  )

}