const finishRecipe = (final, recipe) => {
  if (final === true) {
    const urlFilter = window.location.pathname.split('/');
    if (urlFilter[1] === 'foods') {
      const objDone = {
        id: recipe.idMeal,
        type: urlFilter[1].split('s')[0],
        nationality: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: 'Not',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
        doneDate: recipe.dateModified,
        tags:
          recipe.strTags !== null && recipe.strTags.includes(',')
            ? recipe.strTags.split(',')
            : '',
      };
      localStorage.setItem('doneRecipes', JSON.stringify([objDone]));
    }
    if (urlFilter[1] === 'drinks') {
      const objDone = {
        id: recipe.idDrink,
        type: urlFilter[1].split('s')[0],
        nationality: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
        doneDate: '',
        tags:
          recipe.strTags !== null && recipe.strTags.includes(',')
            ? recipe.strTags.split(',')
            : '',
      };
      localStorage.setItem('doneRecipes', JSON.stringify([objDone]));
    }
  }
};
export default finishRecipe;
