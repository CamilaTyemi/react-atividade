import './App.css';
import Box from './components/Box';

function Exibir() {
const usuarios = [{nome: 'Camila Tyemi', quantidade: 380}, {nome: 'Willy Wonka', quantidade: 1500}, 
                  {nome: 'Garfield Ru', quantidade: 1000000}, {nome: 'Alice Wonder', quantidade: 32000}]

  return (
    <div className='body'>
      {usuarios.map(function(usuario, indice) {
        return (<Box
          key={indice}
          nome={usuario.nome}
          quantidade={usuario.quantidade}
          />)
        })}
    </div>
    )
}

export default Exibir;
