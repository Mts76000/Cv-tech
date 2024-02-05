self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/addcv.js":
/*!*******************************!*\
  !*** ./src/asset/js/addcv.js ***!
  \*******************************/
/***/ (() => {

// Tableaux d'options

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

// async function addCvGlobal() {
//     let response = await fetch( MYSCRIPT.ajaxUrl,{
//         method: 'post',
//         body: params
//     });
//     let data = await response.json();
//     console.log(data)
// }

let params = new FormData();
params.append('action', 'get_detail');
async function addCvGlobal() {
  try {
    let response = await fetch(MYSCRIPT.ajaxUrl, {
      method: 'post',
      body: params
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
}
const theformulaire = document.querySelector('#theformulaire');
theformulaire.addEventListener('submit', function (evt) {
  evt.preventDefault();
  // params = new FormData(theformulaire);
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8e2c623b9dd59f1811b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjQyZmNlZTEyYjc1NTliZTZlY2EyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QSxHQUFHLENBQUN0QyxjQUFjLENBQUMsQ0FBQztFQUNwQjtFQUNBeUIsV0FBVyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDOzs7Ozs7OztVQ25VRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9hZGRjdi5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYmxlYXV4IGQnb3B0aW9uc1xuXG5cblxuY29uc3QgdGFiUGVybWlzPSBbXG4gICAgXCJBMVwiLFxuICAgIFwiQTJcIixcbiAgICBcIkFcIixcbiAgICBcIkJcIixcbiAgICBcIkJFXCIsXG4gICAgXCJDMVwiLFxuICAgIFwiQzFFXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDRVwiLFxuICAgIFwiRDFcIixcbiAgICBcIkQxRVwiLFxuICAgIFwiRFwiLFxuICAgIFwiREVcIixcbiAgICBcIlBQTFwiLFxuICAgIFwiQ1BMXCIsXG4gICAgXCJBVFBMXCIsXG4gICAgXCJVTE1cIlxuXTtcblxuY29uc3QgdGFiU29mdHNraWxscz0gW1xuICAgIFwiQ29tbXVuaWNhdGlvblwiLFxuICAgIFwiQ29sbGFib3JhdGlvblwiLFxuICAgIFwiRXNwcml0IGQnw6lxdWlwZVwiLFxuICAgIFwiQWRhcHRhYmlsaXTDqVwiLFxuICAgIFwiUsOpc29sdXRpb24gZGUgcHJvYmzDqG1lc1wiLFxuICAgIFwiQ3LDqWF0aXZpdMOpXCIsXG4gICAgXCJHZXN0aW9uIGR1IHRlbXBzXCIsXG4gICAgXCJMZWFkZXJzaGlwXCIsXG4gICAgXCJFbXBhdGhpZVwiLFxuICAgIFwiUGVuc8OpZSBjcml0aXF1ZVwiLFxuICAgIFwiUsOpc2lsaWVuY2VcIixcbiAgICBcIkdlc3Rpb24gZHUgc3RyZXNzXCIsXG4gICAgXCJQcm9hY3RpZlwiXG5dO1xuXG5jb25zdCB0YWJIYXJkU2tpbGxzPSBbXG4gICAgXCJIVE1ML0NTU1wiLFxuICAgIFwiQ1wiLFxuICAgIFwiQyNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ29ib2xcIixcbiAgICBcIkdvXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJLb3RsaW5cIixcbiAgICBcIk1BVExBQlwiLFxuICAgIFwiT2JqZWN0aXZlLUNcIixcbiAgICBcIlBlcmxcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUHl0aG9uXCIsXG4gICAgXCJSXCIsXG4gICAgXCJSdWJ5XCIsXG4gICAgXCJSdXN0XCIsXG4gICAgXCJTY2FsYVwiLFxuICAgIFwiU2hlbGwgc2NyaXB0aW5nXCIsXG4gICAgXCJTUUxcIixcbiAgICBcIlN3aWZ0XCIsXG4gICAgXCJUeXBlU2NyaXB0XCIsXG4gICAgXCJWQi5ORVRcIlxuXTtcblxuY29uc3QgdGFiUmVzZWF1eFNvY2lhdXggPSBbXG4gICAgXCJMaW5rZWRJblwiLFxuICAgIFwiRmFjZWJvb2tcIixcbiAgICBcIlR3aXR0ZXJcIixcbiAgICBcIkluc3RhZ3JhbVwiLFxuICAgIFwiWW91VHViZVwiLFxuICAgIFwiUGludGVyZXN0XCIsXG4gICAgXCJTbmFwY2hhdFwiLFxuICAgIFwiVGlrVG9rXCIsXG4gICAgXCJXaGF0c0FwcFwiLFxuICAgIFwiVGVsZWdyYW1cIixcbiAgICBcIlJlZGRpdFwiLFxuICAgIFwiVHVtYmxyXCIsXG4gICAgXCJGbGlja3JcIixcbiAgICBcIlZpbWVvXCIsXG4gICAgXCJRdW9yYVwiLFxuICAgIFwiTWVkaXVtXCIsXG4gICAgXCJCZWhhbmNlXCIsXG4gICAgXCJEcmliYmJsZVwiLFxuICAgIFwiR2l0SHViXCJcbl07XG5cbmNvbnN0IHRhYkxhbmd1ZXMgPSBbXG4gICAgXCJBbmdsYWlzXCIsXG4gICAgXCJGcmFuw6dhaXNcIixcbiAgICBcIkVzcGFnbm9sXCIsXG4gICAgXCJBbGxlbWFuZFwiLFxuICAgIFwiQ2hpbm9pc1wiLFxuICAgIFwiQXJhYmVcIixcbiAgICBcIlJ1c3NlXCIsXG4gICAgXCJQb3J0dWdhaXNcIixcbiAgICBcIkphcG9uYWlzXCIsXG4gICAgXCJJdGFsaWVuXCIsXG4gICAgXCJIaW5kaVwiLFxuICAgIFwiTsOpZXJsYW5kYWlzXCIsXG4gICAgXCJDb3LDqWVuXCIsXG4gICAgXCJUdXJjXCIsXG4gICAgXCJTdcOpZG9pc1wiLFxuICAgIFwiUG9sb25haXNcIixcbiAgICBcIkRhbm9pc1wiLFxuICAgIFwiTm9ydsOpZ2llblwiLFxuICAgIFwiRmlubm9pc1wiXG5dO1xuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG5jb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG5jb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcblxuY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbmNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbmNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG5cbmNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbmNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuXG5jb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG5jb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbmNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcblxuY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG5jb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG5cbmNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbmNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuXG5jb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG5jb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcblxuYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdzY2hvb2xbXSdcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5uYW1lPSAnZGlwX2xvY2F0aW9uW10nXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDMudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDMubmFtZT0gJ2RpcGxvbWVbXSdcbiAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0NC5uYW1lPSAnc3RhdHVzW10nXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydFtdJ1xuICAgIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ2LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ2Lm5hbWU9ICdkaXBfZW5kW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcbiAgICByZXNwb25zZV9mb3JtYXRpb24uYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbiAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuICAgIHJlc3BvbnNlX2V4cGVyaWVuY2UuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9wZXJtaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3Blcm1pc1tdJztcblxuICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9wZXJtaXMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9zb2Z0c2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdzb2Z0c2tpbGxzW10nO1xuXG4gICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX3NvZnRza2lsbHMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9oYXJkc2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdoYXJkc2tpbGxzW10nO1xuXG4gICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX2hhcmRza2lsbHMuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9yZXNlYXV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdyZXNlYXV4W10nO1xuXG4gICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfcmVzZWF1eC5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2xhbmd1YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdsYW5ndWFnZVtdJztcblxuICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfbGFuZ3VhZ2UuYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9ob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5uYW1lPSAnaG9iYmllc1tdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xufSk7XG5cbi8vIG9rIGZpblxuXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X2RldGFpbCcpXG5hc3luYyBmdW5jdGlvbiAgYWRkQ3ZHbG9iYWwoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG59XG5cblxuY29uc3QgdGhlZm9ybXVsYWlyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVmb3JtdWxhaXJlJyk7XG50aGVmb3JtdWxhaXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHBhcmFtcyA9IG5ldyBGb3JtRGF0YSh0aGVmb3JtdWxhaXJlKTtcbiAgICBhZGRDdkdsb2JhbCgpO1xufSk7XG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzhlMmM2MjNiOWRkNTlmMTgxMWJcIikiXSwibmFtZXMiOlsidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsImJ0bl9hZGRfZXhwZXJpZW5jZSIsInJlc3BvbnNlX2V4cGVyaWVuY2UiLCJidG5fYWRkX3Blcm1pcyIsInJlc3BvbnNlX3Blcm1pcyIsInNlbGVjdF9wZXJtaXMiLCJidG5fYWRkX3NvZnRza2lsbHMiLCJyZXNwb25zZV9zb2Z0c2tpbGxzIiwic2VsZWN0X3NvZnRza2lsbHMiLCJidG5fYWRkX2hhcmRza2lsbHMiLCJyZXNwb25zZV9oYXJkc2tpbGxzIiwic2VsZWN0X2hhcmRza2lsbHMiLCJidG5fYWRkX3Jlc2VhdXgiLCJyZXNwb25zZV9yZXNlYXV4Iiwic2VsZWN0X3Jlc2VhdXgiLCJidG5fYWRkX2xhbmd1YWdlIiwicmVzcG9uc2VfbGFuZ3VhZ2UiLCJzZWxlY3RfbGFuZ3VhZ2UiLCJidG5fYWRkX2hvYmJpZXMiLCJyZXNwb25zZV9ob2JiaWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsImlucHV0MiIsImlucHV0MyIsImlucHV0NCIsImlucHV0NSIsImlucHV0NiIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwic2VsZWN0IiwiZm9yRWFjaCIsInBlcm1pcyIsIm9wdGlvbiIsInRleHRDb250ZW50Iiwic3NraWxscyIsImhza2lsbHMiLCJyZXNlYXUiLCJsYW5ndWUiLCJpbnB1dCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYWRkQ3ZHbG9iYWwiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlZm9ybXVsYWlyZSIsImV2dCJdLCJzb3VyY2VSb290IjoiIn0=