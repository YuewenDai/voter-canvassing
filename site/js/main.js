import { initMap, searchNeighbor } from "./map.js";
import { showVoterInList } from "./voter-list.js";

const map = initMap();
let neighborInput = document.querySelector('#neighbor-name-input');
let searchOnClicked = document.querySelector('#neighbor-name-search');
searchNeighbor(map, searchOnClicked, neighborInput);

//show selected voters'list
let voter_list = document.querySelector("#voter-list");
showVoterInList(searchOnClicked, neighborInput)

  stopNameInput.addEventListener('input', () => {
    const filteredStops = getFilteredVoters();
    showStopsInList(searchOnClicked, neighborInput);
  });

window.voterFileInput = neighborInput;
window.voterFileLoadButton = searchOnClicked;
window.voterMap = map;