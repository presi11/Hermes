import React from 'react';

import Select from 'react-select';

const diasOptions = [
    {value: "Lunes", Label: "Lunes"},
    {value: "Martes", Label: "Martes"},
    {value: "Miercoles", Label: "Miercoles"},
    {value: "Jueves", Label: "Jueves"},
    {value: "Viernes",Label: "Viernes"},
    {value: "Sabado",Label: "Sabado"},
    {value: "Dommingo",Label: "Domingo"}
]

export default () => (
    <Select
      defaultValue={[]}
      isMulti
      name="dias"
      options={diasOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );