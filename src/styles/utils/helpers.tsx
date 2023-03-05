export const colourStyles = {
  option: (styles: {}, isFocused: {}) => ({
    ...styles,
    background: isFocused
      ? 'hsl(210, 25%, 98%)'
      : 'white',
    color: 'black',
  }),
  control: (base: {}) => ({
    ...base,
    border: '1px solid hsl(204°, 11%, 74%);',
    boxShadow: 'none',
    outline: '1px solid white',
    borderRadius: 8,
    '&:hover': {
      border: '1px solid black',
    },
  }),
};
