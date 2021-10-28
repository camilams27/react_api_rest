import { React, useState } from 'react';
import api from '../api/apiGH';
import './Content.css'

export default function Content() {

    const [user, setUser] = useState("");
    
    const buscaDados = (e) => {
        e.preventDefault();
        if(user){
            let nameUserURL = "users/" + user //setUser atribuiu o valor para user
            api
                .get(nameUserURL)
                .then((response)=>{ //recebe o valor da requisição
                    setUser(response.data);
                })
                .catch((error)=>{
                    console.log("Ocorreu erro: "+ error);
                });
        }
    }

  return (
    <div className="containerPrincipal">
        <h2> Usuários do GitHub 
            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" 
            alt="github-icon"
            className="icon" />
        </h2>
        <div className="pegarDados">
            <input 
                type="text" placeholder="github user"
                    onChange={(e)=> //* pesquisar onChange
                        setUser(e.target.value)} 
            />
            <button onClick={buscaDados}>
                send
            </button>
        </div>
        <div className="resultados">
            <p>
                <img src={user?.avatar_url} alt="" className="imagem" />  
            </p>        
            <p className="userName">
                {user?.name}
            </p>  
        </div>
    </div>
    );
}