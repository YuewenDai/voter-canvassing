import { htmlToElement } from './template-tools.js';

function showVoterInList(stopsToShow, stopList) {
  stopList.innerHTML = '';

  for (const stop of stopsToShow) {
    const html = `
      <li class="stop-list-item">${stop['voter_name']}</li>
    `;
    const li = htmlToElement(html);
    stopList.append(li);
  }
}

export {
    showVoterInList,
};