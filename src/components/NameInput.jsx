import Input from './Input';

function NameInput({ handleOnInput }) {
  return <Input placeholder="Enter your name." onInput={handleOnInput} />;
}

export default NameInput;
