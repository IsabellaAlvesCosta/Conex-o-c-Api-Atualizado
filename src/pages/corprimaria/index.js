import axios from “axios”


export default function Index() {
    const [cor, setCor] = useState("");
        return (

          <main>

                  <h1> Cor Primária </h1>

                   <div>

                         Cor: <input type='text’ />

                   </div>

                   <div>

                         <button>Verificar</button>

                   </div>

                   <div>

                           É cor primária?

                   </div> 

          </main>

  )

}