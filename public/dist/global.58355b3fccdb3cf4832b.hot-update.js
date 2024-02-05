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

// const btn_add_experience = document.querySelector('#btn_add_experience');
// const response_experience = document.querySelector('#response_experience');
//
// const btn_add_permis = document.querySelector('#btn_add_permis');
// const response_permis = document.querySelector('#response_permis');
// const select_permis = document.querySelector('#permis');
//
// const btn_add_softskills = document.querySelector('#btn_add_softskills');
// const response_softskills = document.querySelector('#response_softskills');
// const select_softskills = document.querySelector('#softskills');
//
// const btn_add_hardskills = document.querySelector('#btn_add_hardskills');
// const response_hardskills = document.querySelector('#response_hardskills');
// const select_hardskills = document.querySelector('#hardskills');
//
// const btn_add_reseaux = document.querySelector('#btn_add_reseaux');
// const response_reseaux = document.querySelector('#response_reseaux');
// const select_reseaux = document.querySelector('#reseaux');
//
// const btn_add_language = document.querySelector('#btn_add_language');
// const response_language = document.querySelector('#response_language');
// const select_language = document.querySelector('#language');
//
// const btn_add_hobbies = document.querySelector('#btn_add_hobbies');
// const response_hobbies = document.querySelector('#response_hobbies');
//
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

// btn_add_experience.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const input1 = document.createElement('input');
//     input1.type = 'text';
//     input1.name= 'experience[]'
//     const input2 = document.createElement('input');
//     input2.type = 'text';
//     input2.name= 'exp_location[]'
//     const input3 = document.createElement('input');
//     input3.type = 'text';
//     input3.name= 'poste[]'
//     const input4 = document.createElement('input');
//     input4.type = 'date';
//     input4.name= 'exp_start[]'
//     const input5 = document.createElement('input');
//     input5.type = 'date';
//     input5.name= 'exp_end[]'
//
//     div.appendChild(input1);
//     div.appendChild(input2);
//     div.appendChild(input3);
//     div.appendChild(input4);
//     div.appendChild(input5);
//     response_experience.append(div);
// });
//
// btn_add_permis.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const select = document.createElement('select');
//     select.name = 'permis[]';
//
//     tabPermis.forEach((permis) => {
//         const option = document.createElement('option');
//         option.textContent = permis;
//         select.appendChild(option);
//     });
//
//     div.appendChild(select);
//     response_permis.append(div);
// });
//
// btn_add_softskills.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const select = document.createElement('select');
//     select.name = 'softskills[]';
//
//     tabSoftskills.forEach((sskills) => {
//         const option = document.createElement('option');
//         option.textContent = sskills;
//         select.appendChild(option);
//     });
//
//     div.appendChild(select);
//     response_softskills.append(div);
// });
//
// btn_add_hardskills.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const select = document.createElement('select');
//     select.name = 'hardskills[]';
//
//     tabHardSkills.forEach((hskills) => {
//         const option = document.createElement('option');
//         option.textContent = hskills;
//         select.appendChild(option);
//     });
//
//     div.appendChild(select);
//     response_hardskills.append(div);
// });
//
// btn_add_reseaux.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const select = document.createElement('select');
//     select.name = 'reseaux[]';
//
//     tabReseauxSociaux.forEach((reseau) => {
//         const option = document.createElement('option');
//         option.textContent = reseau;
//         select.appendChild(option);
//     });
//
//     div.appendChild(select);
//     response_reseaux.append(div);
// });
//
// btn_add_language.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const select = document.createElement('select');
//     select.name = 'language[]';
//
//     tabLangues.forEach((langue) => {
//         const option = document.createElement('option');
//         option.textContent = langue;
//         select.appendChild(option);
//     });
//
//     div.appendChild(select);
//     response_language.append(div);
// });
//
// btn_add_hobbies.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.name= 'hobbies[]'
//
//     div.appendChild(input);
//     response_hobbies.append(div);
// });

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
params.append('action', 'record_cv');
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
  params.append('nom', document.querySelector('#nom').value);
  params.append('prenom', document.querySelector('#prenom').value);
  params.append('adresse', document.querySelector('#adresse').value);
  params.append('mail-input', document.querySelector('#mail-input').value);
  params.append('tel', document.querySelector('#tel').value);
  params.append('birthday', document.querySelector('#birthday').value);
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61bdf8c1a23471b5b6c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjU4MzU1YjNmY2NkYjNjZjQ4MzJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QUssQ0FBQztFQUM3RTtBQUNKO0FBR0EsTUFBTUMsYUFBYSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQrQixhQUFhLENBQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBUzhCLEdBQUcsRUFBRTtFQUNuREEsR0FBRyxDQUFDNUIsY0FBYyxDQUFDLENBQUM7RUFDcEJhLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLEtBQUssRUFBRWpCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDaUMsS0FBSyxDQUFDO0VBQzFEaEIsTUFBTSxDQUFDRCxNQUFNLENBQUMsUUFBUSxFQUFFakIsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNpQyxLQUFLLENBQUM7RUFDaEVoQixNQUFNLENBQUNELE1BQU0sQ0FBQyxTQUFTLEVBQUVqQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQztFQUNsRWhCLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLFlBQVksRUFBRWpCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDaUMsS0FBSyxDQUFDO0VBQ3hFaEIsTUFBTSxDQUFDRCxNQUFNLENBQUMsS0FBSyxFQUFFakIsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNpQyxLQUFLLENBQUM7RUFDMURoQixNQUFNLENBQUNELE1BQU0sQ0FBQyxVQUFVLEVBQUVqQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQztFQUNwRWQsV0FBVyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hVRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9hZGRjdi5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYmxlYXV4IGQnb3B0aW9uc1xuXG5cblxuY29uc3QgdGFiUGVybWlzPSBbXG4gICAgXCJBMVwiLFxuICAgIFwiQTJcIixcbiAgICBcIkFcIixcbiAgICBcIkJcIixcbiAgICBcIkJFXCIsXG4gICAgXCJDMVwiLFxuICAgIFwiQzFFXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDRVwiLFxuICAgIFwiRDFcIixcbiAgICBcIkQxRVwiLFxuICAgIFwiRFwiLFxuICAgIFwiREVcIixcbiAgICBcIlBQTFwiLFxuICAgIFwiQ1BMXCIsXG4gICAgXCJBVFBMXCIsXG4gICAgXCJVTE1cIlxuXTtcblxuY29uc3QgdGFiU29mdHNraWxscz0gW1xuICAgIFwiQ29tbXVuaWNhdGlvblwiLFxuICAgIFwiQ29sbGFib3JhdGlvblwiLFxuICAgIFwiRXNwcml0IGQnw6lxdWlwZVwiLFxuICAgIFwiQWRhcHRhYmlsaXTDqVwiLFxuICAgIFwiUsOpc29sdXRpb24gZGUgcHJvYmzDqG1lc1wiLFxuICAgIFwiQ3LDqWF0aXZpdMOpXCIsXG4gICAgXCJHZXN0aW9uIGR1IHRlbXBzXCIsXG4gICAgXCJMZWFkZXJzaGlwXCIsXG4gICAgXCJFbXBhdGhpZVwiLFxuICAgIFwiUGVuc8OpZSBjcml0aXF1ZVwiLFxuICAgIFwiUsOpc2lsaWVuY2VcIixcbiAgICBcIkdlc3Rpb24gZHUgc3RyZXNzXCIsXG4gICAgXCJQcm9hY3RpZlwiXG5dO1xuXG5jb25zdCB0YWJIYXJkU2tpbGxzPSBbXG4gICAgXCJIVE1ML0NTU1wiLFxuICAgIFwiQ1wiLFxuICAgIFwiQyNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ29ib2xcIixcbiAgICBcIkdvXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJLb3RsaW5cIixcbiAgICBcIk1BVExBQlwiLFxuICAgIFwiT2JqZWN0aXZlLUNcIixcbiAgICBcIlBlcmxcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUHl0aG9uXCIsXG4gICAgXCJSXCIsXG4gICAgXCJSdWJ5XCIsXG4gICAgXCJSdXN0XCIsXG4gICAgXCJTY2FsYVwiLFxuICAgIFwiU2hlbGwgc2NyaXB0aW5nXCIsXG4gICAgXCJTUUxcIixcbiAgICBcIlN3aWZ0XCIsXG4gICAgXCJUeXBlU2NyaXB0XCIsXG4gICAgXCJWQi5ORVRcIlxuXTtcblxuY29uc3QgdGFiUmVzZWF1eFNvY2lhdXggPSBbXG4gICAgXCJMaW5rZWRJblwiLFxuICAgIFwiRmFjZWJvb2tcIixcbiAgICBcIlR3aXR0ZXJcIixcbiAgICBcIkluc3RhZ3JhbVwiLFxuICAgIFwiWW91VHViZVwiLFxuICAgIFwiUGludGVyZXN0XCIsXG4gICAgXCJTbmFwY2hhdFwiLFxuICAgIFwiVGlrVG9rXCIsXG4gICAgXCJXaGF0c0FwcFwiLFxuICAgIFwiVGVsZWdyYW1cIixcbiAgICBcIlJlZGRpdFwiLFxuICAgIFwiVHVtYmxyXCIsXG4gICAgXCJGbGlja3JcIixcbiAgICBcIlZpbWVvXCIsXG4gICAgXCJRdW9yYVwiLFxuICAgIFwiTWVkaXVtXCIsXG4gICAgXCJCZWhhbmNlXCIsXG4gICAgXCJEcmliYmJsZVwiLFxuICAgIFwiR2l0SHViXCJcbl07XG5cbmNvbnN0IHRhYkxhbmd1ZXMgPSBbXG4gICAgXCJBbmdsYWlzXCIsXG4gICAgXCJGcmFuw6dhaXNcIixcbiAgICBcIkVzcGFnbm9sXCIsXG4gICAgXCJBbGxlbWFuZFwiLFxuICAgIFwiQ2hpbm9pc1wiLFxuICAgIFwiQXJhYmVcIixcbiAgICBcIlJ1c3NlXCIsXG4gICAgXCJQb3J0dWdhaXNcIixcbiAgICBcIkphcG9uYWlzXCIsXG4gICAgXCJJdGFsaWVuXCIsXG4gICAgXCJIaW5kaVwiLFxuICAgIFwiTsOpZXJsYW5kYWlzXCIsXG4gICAgXCJDb3LDqWVuXCIsXG4gICAgXCJUdXJjXCIsXG4gICAgXCJTdcOpZG9pc1wiLFxuICAgIFwiUG9sb25haXNcIixcbiAgICBcIkRhbm9pc1wiLFxuICAgIFwiTm9ydsOpZ2llblwiLFxuICAgIFwiRmlubm9pc1wiXG5dO1xuXG5cbmNvbnN0IGJ0bl9hZGRfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZm9ybWF0aW9uJyk7XG5jb25zdCByZXNwb25zZV9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZm9ybWF0aW9uJyk7XG5cbi8vIGNvbnN0IGJ0bl9hZGRfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2V4cGVyaWVuY2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZXhwZXJpZW5jZScpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcGVybWlzJyk7XG4vLyBjb25zdCByZXNwb25zZV9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcGVybWlzJyk7XG4vLyBjb25zdCBzZWxlY3RfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blcm1pcycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuLy8gY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaGFyZHNraWxscycpO1xuLy8gY29uc3Qgc2VsZWN0X2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZHNraWxscycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcmVzZWF1eCcpO1xuLy8gY29uc3Qgc2VsZWN0X3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZWF1eCcpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuLy8gY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hvYmJpZXMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaG9iYmllcycpO1xuLy9cbmJ0bl9hZGRfZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0MS5uYW1lPSAnc2Nob29sW10nXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDIubmFtZT0gJ2RpcF9sb2NhdGlvbltdJ1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQzLm5hbWU9ICdkaXBsb21lW10nXG4gICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDQubmFtZT0gJ3N0YXR1c1tdJ1xuICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ1Lm5hbWU9ICdkaXBfc3RhcnRbXSdcbiAgICBjb25zdCBpbnB1dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Ni50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0Ni5uYW1lPSAnZGlwX2VuZFtdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Nik7XG4gICAgcmVzcG9uc2VfZm9ybWF0aW9uLmFwcGVuZChkaXYpO1xufSk7XG5cbi8vIGJ0bl9hZGRfZXhwZXJpZW5jZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ2V4cGVyaWVuY2VbXSdcbi8vICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Mi5uYW1lPSAnZXhwX2xvY2F0aW9uW10nXG4vLyAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDMudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDMubmFtZT0gJ3Bvc3RlW10nXG4vLyAgICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDQudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDQubmFtZT0gJ2V4cF9zdGFydFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ1Lm5hbWU9ICdleHBfZW5kW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuLy8gICAgIHJlc3BvbnNlX2V4cGVyaWVuY2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Blcm1pcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncGVybWlzW10nO1xuLy9cbi8vICAgICB0YWJQZXJtaXMuZm9yRWFjaCgocGVybWlzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwZXJtaXM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9wZXJtaXMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3NvZnRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3NvZnRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYlNvZnRza2lsbHMuZm9yRWFjaCgoc3NraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3NraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3NvZnRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hhcmRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2hhcmRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYkhhcmRTa2lsbHMuZm9yRWFjaCgoaHNraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaHNraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX2hhcmRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Jlc2VhdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Jlc2VhdXhbXSc7XG4vL1xuLy8gICAgIHRhYlJlc2VhdXhTb2NpYXV4LmZvckVhY2goKHJlc2VhdSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVzZWF1O1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfcmVzZWF1eC5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2xhbmd1YWdlW10nO1xuLy9cbi8vICAgICB0YWJMYW5ndWVzLmZvckVhY2goKGxhbmd1ZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFuZ3VlO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfbGFuZ3VhZ2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hvYmJpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Lm5hbWU9ICdob2JiaWVzW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4vLyAgICAgcmVzcG9uc2VfaG9iYmllcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuXG4vLyBvayBmaW5cblxuLy8gYXN5bmMgZnVuY3Rpb24gYWRkQ3ZHbG9iYWwoKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSlcbi8vIH1cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG5hc3luYyBmdW5jdGlvbiAgYWRkQ3ZHbG9iYWwoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxuXG5cbmNvbnN0IHRoZWZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlZm9ybXVsYWlyZScpO1xudGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdub20nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9tJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3ByZW5vbScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVub20nKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWRyZXNzZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZHJlc3NlJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ21haWwtaW5wdXQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbC1pbnB1dCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCd0ZWwnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5JykudmFsdWUpO1xuICAgIGFkZEN2R2xvYmFsKCk7XG59KTtcblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MWJkZjhjMWEyMzQ3MWI1YjZjN1wiKSJdLCJuYW1lcyI6WyJ0YWJQZXJtaXMiLCJ0YWJTb2Z0c2tpbGxzIiwidGFiSGFyZFNraWxscyIsInRhYlJlc2VhdXhTb2NpYXV4IiwidGFiTGFuZ3VlcyIsImJ0bl9hZGRfZm9ybWF0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVzcG9uc2VfZm9ybWF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsImlucHV0MiIsImlucHV0MyIsImlucHV0NCIsImlucHV0NSIsImlucHV0NiIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhZGRDdkdsb2JhbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aGVmb3JtdWxhaXJlIiwiZXZ0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9