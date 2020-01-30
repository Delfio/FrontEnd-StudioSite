import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    console.log('veio');
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <div className="row">
      <div className="col s12">
        <ReactDatePicker
          name={fieldName}
          selected={selected}
          dateFormat="dd/MM/yyy"
          onChange={date => setSelected(date)}
          // showTimeSelect 'HORAS'
          ref={ref}
        />
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}
