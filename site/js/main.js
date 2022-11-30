import { initMap, searchNeighbor, loadData } from "./map.js";
import { showVoterInList } from "./voter-list.js";

const map = initMap();
let neighborInput = document.querySelector('#neighbor-name-input');
let searchOnClicked = document.querySelector('#neighbor-name-search');
searchNeighbor(map, searchOnClicked, neighborInput);

//显示表的占位的内容
let voter_list = document.querySelector("#voterList");
//写一个关于所有表名字集合
let votersNames = [];
for (let i = 101; i <= 6646; i++) {
    votersNames.push(i.toString().padStart(4, '0'))
}
//从html的searchbar里面获取需要查找的表的名字
let voterNameFilter = document.querySelector('#neighbor-name-input');
//表过滤器公式
function listFilter() {
  let filteredVoters = votersNames;
  const text = voterNameFilter.value;
  filteredVoters = votersNames.filter(function (voter) {
      const hasText = voter.includes(text);
      return hasText; 
  });
  return filteredVoters;
}
// 建立一个用来装表里面内容的变量
let currentListData
// 按下按钮 从搜索框里选择表 
$("#neighbor-name-search").click(function() {
  let listName = document.querySelector('#neighbor-name-input').value;
  const url = '../site/voters_lists/' + listName + '.csv';
  currentListData = loadData(url);
  loadList(currentListData);
});

voterNameFilter.addEventListener('input', () => {
  const text = voterNameFilter.value;

    // Filter the lists according to the inputText
    const filteredVoters = listFilter();

    // Show the filtered lists
    showVoterInList(filteredVoters, voter_list);

  stopNameInput.addEventListener('input', () => {
    const filteredStops = getFilteredVoters();
    showStopsInList(searchOnClicked, neighborInput);
  });

window.voterFileInput = neighborInput;
window.voterFileLoadButton = searchOnClicked;
window.voterMap = map 