import Cachorro from './Cachorro';

const data = [
  { nome: 'Spyke', idade: 21, sexo: 'macho', tamanho: 'Pequeno' },
  { nome: 'Dalila', idade: 7, sexo: 'femea', tamanho: 'Medio' },
  { nome: 'Rocky', idade: 4, sexo: 'macho', tamanho: 'Medio' },
  { nome: 'Meg', idade: 2, sexo: 'femea', tamanho: 'Pequeno' },
  { nome: 'Fox', idade: 12, sexo: 'macho', tamanho: 'Grande' },
];

function App() {
  return (
    <>
      <h1>Clientes caninos da veterinária</h1>

      {data.map((item, index) => {
        return <Cachorro key={index.toString()} item={item} />;
      })}
    </>
  );
}

export default App;
