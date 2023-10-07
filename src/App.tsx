import React, { useState } from 'react';
import './App.css';

enum ParamType {
  String = 'string',
  Number = 'number',
  Select = 'select'
}

interface Param {
  id: number,
  name: string,
  type: ParamType
}

interface ParamValue {
  paramId: number,
  value: string
}

interface Model {
  paramValues: ParamValue[]
}

interface Props {
  params: Param[],
  model: Model
}

const Main: React.FunctionComponent<Props> = ({ params, model }) => {
  const [item, setItem] = useState(model)
  const getModel = () => {
    console.log(item)
  }

  const changeParam = (value: string, id: number) => {
    const paramValues = item.paramValues
    paramValues[id] = { paramId: item.paramValues.length * 1000, value: value }
    setItem(state =>
      ({ ...state, paramValues: paramValues }))
  }

  return (
    <div className='wrapper'>
      {params.map((item, index) =>
        <div className='wrapper__list'>
          <div>
            {item.name}
          </div>
          {item.type === ParamType.String && (
            <input
              className='item'
              type='text'
              value={model.paramValues[index].value}
              onChange={(event) => changeParam(event.target.value, index)} />
          )}
          {item.type === ParamType.Number && (
            <select className='item' onChange={(event) => changeParam(event.target.value, index)}>
              {['Мини', 'Миди', 'Макси'].map((item) =>
                <option value={item}>{item}</option>
              )}
            </select>
          )}
          {item.type === ParamType.Select && (
            <select className='item' onChange={(event) => changeParam(event.target.value, index)}>
              {['Отличное', 'Хорошее', 'Среднее', 'Низкое'].map((item) =>
                <option value={item}>{item}</option>
              )}
            </select>
          )}
        </div>
      )}
      <button className='button' onClick={getModel}>Показать модель</button>
    </div>
  )
}

export default function App() {
  const params = [
    { id: 1, name: 'Назначение', type: ParamType.String },
    { id: 2, name: 'Длина', type: ParamType.Number },
    { id: 3, name: 'Качество', type: ParamType.Select },
  ]

  const model = {
    paramValues: [
      { paramId: 1, value: 'Повседневное' },
      { paramId: 2, value: 'Миди' },
      { paramId: 3, value: 'Среднее' },
    ]
  }

  return (
    <div className="App">
      <Main model={model} params={params} />
    </div>
  );
}

