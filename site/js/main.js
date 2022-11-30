import { initMap, searchNeighbor, loadData } from "./map.js";
import { showVoterInList } from "./voter-list.js";

const map = initMap();
let neighborInput = document.querySelector('#neighbor-name-input');
let searchOnClicked = document.querySelector('#neighbor-name-search');
searchNeighbor(map, searchOnClicked, neighborInput);

window.voterFileInput = neighborInput;
window.voterFileLoadButton = searchOnClicked;
window.voterMap = map; 