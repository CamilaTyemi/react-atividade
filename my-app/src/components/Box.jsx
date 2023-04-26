import '../App.css';
import NomeUsuario from '../components/Nomeusuario';
import NumeroSeguidor from '../components/Numeroseguidor';
import { useState } from 'react'

function Box(props) {
    let [contador, setContador] = useState(props.quantidade)
    function clicou() {
        setContador(contador + 1)
    }

    return (
        <div className='box'>
            <NomeUsuario nome={props.nome}/>
            <NumeroSeguidor quantidade={contador}/>
            <button onClick={clicou} className='button'>Follow</button>
        </div>)
    }

export default Box