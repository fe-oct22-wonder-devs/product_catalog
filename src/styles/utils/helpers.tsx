export const colourStyles = {
  option: (styles: {}) => ({
    ...styles,
    color: 'black',
    background: 'white',
    '&:hover': {
      background: 'hsl(210, 25%, 98%)',
    },
  }),
  control: (base: {}) => ({
    ...base,
    width: 136,
    height: 40,
    marginRight: 16,
    marginBottom: 24,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    borderRadius: 8,
  }),
};
