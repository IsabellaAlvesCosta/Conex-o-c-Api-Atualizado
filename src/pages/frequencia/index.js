

export default function Index() {

        const [texto, setTexto] =  useState('');
     
        const [caractere, setCaractere] =  useState('');
     
        const [resposta, setResposta] =  useState('');
     
     function verificarFreq() {
     
     }
     
                return (
     
                      <main>
     
                              <h1> Frequência </h1>
     
                               <div>
     
                                         Texto: <input type='text' value={texto} onChange={e=> setTexto(e.target.value)} />
     
                               </div>
     
                                 <div>
     
                                         Caractere: <input type='text' value={caracterre} onChange={e=>   setCaractere(e.target.value)} />
     
                               </div>
     
                                 <div>
     
                                      <button>Verificar frequência </button>
     
                               </div>
     
                                <div>
     
                                      Frequência: {resposta}
     
                               </div>
     
                      </main>
     
              )
     
     }