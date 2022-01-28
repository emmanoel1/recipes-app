import { getByIngredients, getByName, getByLetter } from '../../services';

const handleBtn = async (radio, input) => {
  if (radio === 'ingredient') {
    const byIngredients = await getByIngredients(input);
    return byIngredients;
  }

  if (radio === 'name') {
    const byName = await getByName(input);
    return byName;
  }

  if (radio === 'letter' && input.length === 1) {
    const byLetter = await getByLetter(input);
    return byLetter;
  }

  if (radio === 'letter' && input.length > 1) {
    alert('Your search must have only 1 (one) character');
  }

  /* customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
    var alert = myCustomLib.customAlert;
    alert();
}
  */
};

export default handleBtn;
