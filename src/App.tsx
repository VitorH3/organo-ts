import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Setor from './componentes/Setor';
import Rodape from './componentes/Rodape';
import { IColaborador } from './compartilhado/interface/IColaborador';

function App() {

  const setores = [
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

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario
        setores={setores.map(setor => setor.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {setores.map(setor =>
        <Setor
          key={setor.nome}
          nome={setor.nome}
          corPrimaria={setor.corPrimaria}
          corSecundaria={setor.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.setor === setor.nome)}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;

