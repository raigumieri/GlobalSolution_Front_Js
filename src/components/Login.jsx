import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../SASS/Login.scss'

export default function Login() {

    //useParams
    let {id} = useParams();

    //useState
    const [usuario, setUsuario] = useState({
        id,
        nome:'',
        email:'',
        senha:''
    })

    //Função HandleChange
    const handleChange = async (e)=>{
        const {name, value}=e.target;
        setUsuario({...usuario,[name]:value})
    } 

    //Função HandleSubmit
    const handleSubmit =async (e)=>{
        e.preventDefault();

        let user;

        try{
            const response = await fetch("http://localhost:5000/usuarios");
            if(response.ok){
                const users = await response.json();

                for (let i=0; i < users.length;i++){
                    const use =users[i];
                    user = use;

                    if(use.usuario==usuario.email  && use.senha == usuario.senha){
                        user =use;
                        break;
                    }               
                }
            }
            if(user){
                sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                setTimeout(()=>{
                    window.location='/';
                },3000)
            }else{
                alert("Email/senha Invalidos")
                    setUsuario({
                        email:"",
                        senha:"",
                    })
                    window.location ="/login";
                }
            }
        catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <div className="estrutura_cadastro">
            <form onSubmit={handleSubmit}>

                <div className='Usuario'>
                    <label htmlFor='idEmail'> Usuário </label>
                    <input type="text" name="email" value={usuario.email} placeholder="Digite seu Email" onChange={handleChange} />
                </div>

                <div className='Senha'>
                    <label htmlFor='idSenha'> Senha: </label>
                    <input type="password" name="senha" value={usuario.senha} placeholder="Digite sua Senha" onChange={handleChange} />
                </div>
        
                <button type="submit"> Login </button>

            </form>
        </div>
        </>
    )

}