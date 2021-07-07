function Input({ placeholder, onInput, className, styles, type = 'text' }) {
  const onKeyPress = e => {
    if (e.key !== 'Enter') return;
    onInput(e.target.value);
    e.target.value = '';
  };

  return (
    <input
      className={className}
      styles={styles}
      type={type}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
    />
  );
}

export default Input;
