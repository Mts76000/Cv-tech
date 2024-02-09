self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/addcv.js":
/*!*******************************!*\
  !*** ./src/asset/js/addcv.js ***!
  \*******************************/
/***/ (() => {

// Tableaux d'options

console.log('addcv');
const tabPermis = ["A1", "A2", "A", "B", "BE", "C1", "C1E", "C", "CE", "D1", "D1E", "D", "DE", "PPL", "CPL", "ATPL", "ULM"];
const tabSoftskills = ["Communication", "Collaboration", "Esprit d'équipe", "Adaptabilité", "Résolution de problèmes", "Créativité", "Gestion du temps", "Leadership", "Empathie", "Pensée critique", "Résilience", "Gestion du stress", "Proactif"];
const tabHardSkills = ["HTML/CSS", "C", "C#", "C++", "Cobol", "Go", "Java", "JavaScript", "Kotlin", "MATLAB", "Objective-C", "Perl", "PHP", "Python", "R", "Ruby", "Rust", "Scala", "Shell scripting", "SQL", "Swift", "TypeScript", "VB.NET"];
const tabReseauxSociaux = ["LinkedIn", "Facebook", "Twitter", "Instagram", "YouTube", "Pinterest", "Snapchat", "TikTok", "WhatsApp", "Telegram", "Reddit", "Tumblr", "Flickr", "Vimeo", "Quora", "Medium", "Behance", "Dribbble", "GitHub"];
const tabLangues = ["Anglais", "Français", "Espagnol", "Allemand", "Chinois", "Arabe", "Russe", "Portugais", "Japonais", "Italien", "Hindi", "Néerlandais", "Coréen", "Turc", "Suédois", "Polonais", "Danois", "Norvégien", "Finnois"];
const btn_add_formation = document.querySelector('#btn_add_formation');
const response_formation = document.querySelector('#response_formation');
const btn_add_experience = document.querySelector('#btn_add_experience');
const response_experience = document.querySelector('#response_experience');
const btn_add_permis = document.querySelector('#btn_add_permis');
const response_permis = document.querySelector('#response_permis');
const select_permis = document.querySelector('#permis');
const btn_add_softskills = document.querySelector('#btn_add_softskills');
const response_softskills = document.querySelector('#response_softskills');
const select_softskills = document.querySelector('#softskills');
const btn_add_hardskills = document.querySelector('#btn_add_hardskills');
const response_hardskills = document.querySelector('#response_hardskills');
const select_hardskills = document.querySelector('#hardskills');
const btn_add_reseaux = document.querySelector('#btn_add_reseaux');
const response_reseaux = document.querySelector('#response_reseaux');
const select_reseaux = document.querySelector('#reseaux');
const btn_add_language = document.querySelector('#btn_add_language');
const response_language = document.querySelector('#response_language');
const select_language = document.querySelector('#language');
const btn_add_hobbies = document.querySelector('#btn_add_hobbies');
const response_hobbies = document.querySelector('#response_hobbies');
btn_add_formation.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.name = 'school[]';
  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.name = 'dip_location[]';
  const input3 = document.createElement('input');
  input3.type = 'text';
  input3.name = 'diplome[]';
  const input4 = document.createElement('input');
  input4.type = 'text';
  input4.name = 'status[]';
  const input5 = document.createElement('input');
  input5.type = 'date';
  input5.name = 'dip_start[]';
  const input6 = document.createElement('input');
  input6.type = 'date';
  input6.name = 'dip_end[]';
  div.appendChild(input1);
  div.appendChild(input2);
  div.appendChild(input3);
  div.appendChild(input4);
  div.appendChild(input5);
  div.appendChild(input6);
  response_formation.append(div);
});
btn_add_experience.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.name = 'experience[]';
  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.name = 'exp_location[]';
  const input3 = document.createElement('input');
  input3.type = 'text';
  input3.name = 'poste[]';
  const input4 = document.createElement('input');
  input4.type = 'date';
  input4.name = 'exp_start[]';
  const input5 = document.createElement('input');
  input5.type = 'date';
  input5.name = 'exp_end[]';
  div.appendChild(input1);
  div.appendChild(input2);
  div.appendChild(input3);
  div.appendChild(input4);
  div.appendChild(input5);
  response_experience.append(div);
});
btn_add_permis.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const select = document.createElement('select');
  select.name = 'permis[]';
  tabPermis.forEach(permis => {
    const option = document.createElement('option');
    option.textContent = permis;
    select.appendChild(option);
  });
  div.appendChild(select);
  response_permis.append(div);
});
btn_add_softskills.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const select = document.createElement('select');
  select.name = 'softskills[]';
  tabSoftskills.forEach(sskills => {
    const option = document.createElement('option');
    option.textContent = sskills;
    select.appendChild(option);
  });
  div.appendChild(select);
  response_softskills.append(div);
});
btn_add_hardskills.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const select = document.createElement('select');
  select.name = 'hardskills[]';
  tabHardSkills.forEach(hskills => {
    const option = document.createElement('option');
    option.textContent = hskills;
    select.appendChild(option);
  });
  div.appendChild(select);
  response_hardskills.append(div);
});
btn_add_reseaux.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const select = document.createElement('select');
  select.name = 'reseaux[]';
  tabReseauxSociaux.forEach(reseau => {
    const option = document.createElement('option');
    option.textContent = reseau;
    select.appendChild(option);
  });
  div.appendChild(select);
  response_reseaux.append(div);
});
btn_add_language.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const select = document.createElement('select');
  select.name = 'language[]';
  tabLangues.forEach(langue => {
    const option = document.createElement('option');
    option.textContent = langue;
    select.appendChild(option);
  });
  div.appendChild(select);
  response_language.append(div);
});
btn_add_hobbies.addEventListener('click', function (e) {
  e.preventDefault();
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'hobbies[]';
  div.appendChild(input);
  response_hobbies.append(div);
});

// ok fin

async function addCvGlobal() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);
}
const theformulaire = document.querySelector('#theformulaire');
let params = new FormData();
theformulaire.addEventListener('submit', function (evt) {
  evt.preventDefault();
  params = new FormData(theformulaire);
  params.append('action', 'record_cv');
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d62ae47a015c591acc6a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjE1NGZiMGViMDI4ZWIwM2ZhYTVjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRXBCLE1BQU1DLFNBQVMsR0FBRSxDQUNiLElBQUksRUFDSixJQUFJLEVBQ0osR0FBRyxFQUNILEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLENBQ1I7QUFFRCxNQUFNQyxhQUFhLEdBQUUsQ0FDakIsZUFBZSxFQUNmLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLHlCQUF5QixFQUN6QixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsVUFBVSxDQUNiO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLFVBQVUsRUFDVixHQUFHLEVBQ0gsSUFBSSxFQUNKLEtBQUssRUFDTCxPQUFPLEVBQ1AsSUFBSSxFQUNKLE1BQU0sRUFDTixZQUFZLEVBQ1osUUFBUSxFQUNSLFFBQVEsRUFDUixhQUFhLEVBQ2IsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsR0FBRyxFQUNILE1BQU0sRUFDTixNQUFNLEVBQ04sT0FBTyxFQUNQLGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsT0FBTyxFQUNQLFlBQVksRUFDWixRQUFRLENBQ1g7QUFFRCxNQUFNQyxpQkFBaUIsR0FBRyxDQUN0QixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxFQUNSLFFBQVEs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Q2pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsVEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuY29uc29sZS5sb2coJ2FkZGN2JylcblxuY29uc3QgdGFiUGVybWlzPSBbXG4gICAgXCJBMVwiLFxuICAgIFwiQTJcIixcbiAgICBcIkFcIixcbiAgICBcIkJcIixcbiAgICBcIkJFXCIsXG4gICAgXCJDMVwiLFxuICAgIFwiQzFFXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDRVwiLFxuICAgIFwiRDFcIixcbiAgICBcIkQxRVwiLFxuICAgIFwiRFwiLFxuICAgIFwiREVcIixcbiAgICBcIlBQTFwiLFxuICAgIFwiQ1BMXCIsXG4gICAgXCJBVFBMXCIsXG4gICAgXCJVTE1cIlxuXTtcblxuY29uc3QgdGFiU29mdHNraWxscz0gW1xuICAgIFwiQ29tbXVuaWNhdGlvblwiLFxuICAgIFwiQ29sbGFib3JhdGlvblwiLFxuICAgIFwiRXNwcml0IGQnw6lxdWlwZVwiLFxuICAgIFwiQWRhcHRhYmlsaXTDqVwiLFxuICAgIFwiUsOpc29sdXRpb24gZGUgcHJvYmzDqG1lc1wiLFxuICAgIFwiQ3LDqWF0aXZpdMOpXCIsXG4gICAgXCJHZXN0aW9uIGR1IHRlbXBzXCIsXG4gICAgXCJMZWFkZXJzaGlwXCIsXG4gICAgXCJFbXBhdGhpZVwiLFxuICAgIFwiUGVuc8OpZSBjcml0aXF1ZVwiLFxuICAgIFwiUsOpc2lsaWVuY2VcIixcbiAgICBcIkdlc3Rpb24gZHUgc3RyZXNzXCIsXG4gICAgXCJQcm9hY3RpZlwiXG5dO1xuXG5jb25zdCB0YWJIYXJkU2tpbGxzPSBbXG4gICAgXCJIVE1ML0NTU1wiLFxuICAgIFwiQ1wiLFxuICAgIFwiQyNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ29ib2xcIixcbiAgICBcIkdvXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJLb3RsaW5cIixcbiAgICBcIk1BVExBQlwiLFxuICAgIFwiT2JqZWN0aXZlLUNcIixcbiAgICBcIlBlcmxcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUHl0aG9uXCIsXG4gICAgXCJSXCIsXG4gICAgXCJSdWJ5XCIsXG4gICAgXCJSdXN0XCIsXG4gICAgXCJTY2FsYVwiLFxuICAgIFwiU2hlbGwgc2NyaXB0aW5nXCIsXG4gICAgXCJTUUxcIixcbiAgICBcIlN3aWZ0XCIsXG4gICAgXCJUeXBlU2NyaXB0XCIsXG4gICAgXCJWQi5ORVRcIlxuXTtcblxuY29uc3QgdGFiUmVzZWF1eFNvY2lhdXggPSBbXG4gICAgXCJMaW5rZWRJblwiLFxuICAgIFwiRmFjZWJvb2tcIixcbiAgICBcIlR3aXR0ZXJcIixcbiAgICBcIkluc3RhZ3JhbVwiLFxuICAgIFwiWW91VHViZVwiLFxuICAgIFwiUGludGVyZXN0XCIsXG4gICAgXCJTbmFwY2hhdFwiLFxuICAgIFwiVGlrVG9rXCIsXG4gICAgXCJXaGF0c0FwcFwiLFxuICAgIFwiVGVsZWdyYW1cIixcbiAgICBcIlJlZGRpdFwiLFxuICAgIFwiVHVtYmxyXCIsXG4gICAgXCJGbGlja3JcIixcbiAgICBcIlZpbWVvXCIsXG4gICAgXCJRdW9yYVwiLFxuICAgIFwiTWVkaXVtXCIsXG4gICAgXCJCZWhhbmNlXCIsXG4gICAgXCJEcmliYmJsZVwiLFxuICAgIFwiR2l0SHViXCJcbl07XG5cbmNvbnN0IHRhYkxhbmd1ZXMgPSBbXG4gICAgXCJBbmdsYWlzXCIsXG4gICAgXCJGcmFuw6dhaXNcIixcbiAgICBcIkVzcGFnbm9sXCIsXG4gICAgXCJBbGxlbWFuZFwiLFxuICAgIFwiQ2hpbm9pc1wiLFxuICAgIFwiQXJhYmVcIixcbiAgICBcIlJ1c3NlXCIsXG4gICAgXCJQb3J0dWdhaXNcIixcbiAgICBcIkphcG9uYWlzXCIsXG4gICAgXCJJdGFsaWVuXCIsXG4gICAgXCJIaW5kaVwiLFxuICAgIFwiTsOpZXJsYW5kYWlzXCIsXG4gICAgXCJDb3LDqWVuXCIsXG4gICAgXCJUdXJjXCIsXG4gICAgXCJTdcOpZG9pc1wiLFxuICAgIFwiUG9sb25haXNcIixcbiAgICBcIkRhbm9pc1wiLFxuICAgIFwiTm9ydsOpZ2llblwiLFxuICAgIFwiRmlubm9pc1wiXG5dO1xuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG5jb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG5jb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcblxuY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbmNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbmNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG5cbmNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbmNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuXG5jb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG5jb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbmNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcblxuY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG5jb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG5cbmNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbmNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuXG5jb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG5jb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcblxuYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdzY2hvb2xbXSdcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5uYW1lPSAnZGlwX2xvY2F0aW9uW10nXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDMudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDMubmFtZT0gJ2RpcGxvbWVbXSdcbiAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0NC5uYW1lPSAnc3RhdHVzW10nXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydFtdJ1xuICAgIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ2LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ2Lm5hbWU9ICdkaXBfZW5kW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcbiAgICByZXNwb25zZV9mb3JtYXRpb24uYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbiAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuICAgIHJlc3BvbnNlX2V4cGVyaWVuY2UuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9wZXJtaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3Blcm1pc1tdJztcblxuICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9wZXJtaXMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9zb2Z0c2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdzb2Z0c2tpbGxzW10nO1xuXG4gICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX3NvZnRza2lsbHMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9oYXJkc2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdoYXJkc2tpbGxzW10nO1xuXG4gICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX2hhcmRza2lsbHMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9yZXNlYXV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdyZXNlYXV4W10nO1xuXG4gICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfcmVzZWF1eC5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2xhbmd1YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdsYW5ndWFnZVtdJztcblxuICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfbGFuZ3VhZ2UuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9ob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5uYW1lPSAnaG9iYmllc1tdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xufSk7XG5cbi8vIG9rIGZpblxuXG5hc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXNcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxufVxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnRoZWZvcm11bGFpcmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zID0gbmV3IEZvcm1EYXRhKHRoZWZvcm11bGFpcmUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdyZWNvcmRfY3YnKVxuICAgIGFkZEN2R2xvYmFsKCk7XG59KTtcblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNjJhZTQ3YTAxNWM1OTFhY2M2YVwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsImJ0bl9hZGRfZXhwZXJpZW5jZSIsInJlc3BvbnNlX2V4cGVyaWVuY2UiLCJidG5fYWRkX3Blcm1pcyIsInJlc3BvbnNlX3Blcm1pcyIsInNlbGVjdF9wZXJtaXMiLCJidG5fYWRkX3NvZnRza2lsbHMiLCJyZXNwb25zZV9zb2Z0c2tpbGxzIiwic2VsZWN0X3NvZnRza2lsbHMiLCJidG5fYWRkX2hhcmRza2lsbHMiLCJyZXNwb25zZV9oYXJkc2tpbGxzIiwic2VsZWN0X2hhcmRza2lsbHMiLCJidG5fYWRkX3Jlc2VhdXgiLCJyZXNwb25zZV9yZXNlYXV4Iiwic2VsZWN0X3Jlc2VhdXgiLCJidG5fYWRkX2xhbmd1YWdlIiwicmVzcG9uc2VfbGFuZ3VhZ2UiLCJzZWxlY3RfbGFuZ3VhZ2UiLCJidG5fYWRkX2hvYmJpZXMiLCJyZXNwb25zZV9ob2JiaWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsImlucHV0MiIsImlucHV0MyIsImlucHV0NCIsImlucHV0NSIsImlucHV0NiIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwic2VsZWN0IiwiZm9yRWFjaCIsInBlcm1pcyIsIm9wdGlvbiIsInRleHRDb250ZW50Iiwic3NraWxscyIsImhza2lsbHMiLCJyZXNlYXUiLCJsYW5ndWUiLCJpbnB1dCIsImFkZEN2R2xvYmFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJwYXJhbXMiLCJkYXRhIiwianNvbiIsInRoZWZvcm11bGFpcmUiLCJGb3JtRGF0YSIsImV2dCJdLCJzb3VyY2VSb290IjoiIn0=