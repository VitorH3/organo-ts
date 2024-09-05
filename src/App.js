import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Funçoes from './componentes/Funções';
import Rodape from './componentes/Rodape';

function App() {

  const funçoes = [
    {
      nome: 'Comissão técnica',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Goleiro',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Defensor',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Meio-campista',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Atacante',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
  ]

  const [colaboradores, setColaboradores] = useState ([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario funçoes = {funçoes.map(funçao => funçao.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {funçoes.map(funçao => 
      
        <Funçoes
          key = {funçao.none}
          nome = {funçao.nome}
          corPrimaria = {funçao.corPrimaria}
          corSecundaria = {funçao.corSecundaria}
          colaboradores = {colaboradores.filter(colaborador => colaborador.funçao === funçao.nome)}
        />
      )}
      <Rodape/>
    </div>
  );
}

export default App;

