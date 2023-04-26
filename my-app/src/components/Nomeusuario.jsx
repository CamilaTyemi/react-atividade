import '../App.css';

function NomeUsuario(props) {
    return (<div className='nome'>
    <h1>{props.nome}</h1>
    </div>)
    }

export default NomeUsuario