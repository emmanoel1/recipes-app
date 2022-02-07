const handleProgressResult = (ingredients, result) => {
  const FINISHED_TOTAL = [];
  if (result !== null && result !== undefined) {
    for (let i = 0; i < ingredients.length; i += 1) {
      if (result[i].bool === true) {
        FINISHED_TOTAL.push(result[i].bool);
      }
    }
  }
  let resultFinal = false;
  if (FINISHED_TOTAL.length === ingredients.length) {
    resultFinal = true;
  }
  return resultFinal;
};

export default handleProgressResult;
