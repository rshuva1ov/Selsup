import './App.css';
import ParamEditor from './components/ParamEditor';

function App() {

  const params = [
    { id: 1, name: 'Назначение' },
    { id: 2, name: 'Длина' },
  ];


  const model =
  {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное"
      },
      {
        paramId: 2,
        value: "макси"
      }
    ]
  }


  return (
    <div className="App">
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
