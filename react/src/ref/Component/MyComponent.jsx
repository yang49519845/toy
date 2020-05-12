import React from 'react';
import FormInput from './FormInput';

const MyComponent = (props) => {
  const forminput = React.createRef();
  const inputSelection = () => {
    const input = forminput.current;
    if (input.hasText()) {
      input.selectInputText();
    }
  };
  return (
    <div>
      <button type="button" onClick={inputSelection}>
        select button
      </button>
      <FormInput ref={forminput} />
    </div>
  );
};

export default MyComponent