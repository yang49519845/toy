import React from 'react';

// export default class FormInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   hasText() {
//     return this.textInput.current.value;
//   }
//   selectInputText() {
//     this.textInput.current.select();
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.textInput} />
//       </div>
//     );
//   }
// }

export default function FormInput(props) {
  const textInput = React.createRef();
  const hasText = () => {
    return textInput.current.value;
  };
  const selectInputText = () => {
    textInput.current.select();
  };
  return (
    <div>
      <input type="text" ref={textInput} />
    </div>
  );
}
