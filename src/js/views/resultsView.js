import icons from '../../img/icons.svg';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkUp() {
    return `<li class="preview">
    ${this._data.map(this._generateMarkUpView).join('')}
  </li>
    `;
  }

  _generateMarkUpView(meal) {
    const id = window.location.hash.slice(1);

    return `<a class="preview__link ${
      meal.id === id ? 'preview__link--active' : ''
    }" href="#${meal.id}">
    <figure class="preview__fig">
      <img src="${meal.image}" alt="Test" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__title">${meal.title}</h4>
      <p class="preview__publisher">${meal.publisher}</p>
    </div>
  </a>`;
  }
}

export default new ResultsView();
