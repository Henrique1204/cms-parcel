import React from 'react';

import * as Types from './types';

import * as Styles from './styles';

const TextField: Component<Types.TextFieldProps> = ({ id, label, value: initialValue }) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    console.log('initialValue', initialValue);
    setValue?.(initialValue);
  }, []);

  return (
    <Styles.LabelInputContainer>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input type="text" name={id} value={value} onChange={handleChange} />
    </Styles.LabelInputContainer>
  );
};

export default TextField;
