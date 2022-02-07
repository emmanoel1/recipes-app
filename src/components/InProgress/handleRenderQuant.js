const handleRenderQuant = (quantities, index) => {
  if (quantities[index] === undefined) {
    return '';
  }
  if (quantities[index] !== undefined) {
    return ` - ${quantities[index]}`;
  }
};

export default handleRenderQuant;
