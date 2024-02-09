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
// btn_add_formation.addEventListener('click', function(e) {
//     e.preventDefault();
//     const div = document.createElement('div');
//     const input1 = document.createElement('input');
//     input1.type = 'text';
//     input1.name= 'school[]'
//     const input2 = document.createElement('input');
//     input2.type = 'text';
//     input2.name= 'dip_location[]'
//     const input3 = document.createElement('input');
//     input3.type = 'text';
//     input3.name= 'diplome[]'
//     const input4 = document.createElement('input');
//     input4.type = 'text';
//     input4.name= 'status[]'
//     const input5 = document.createElement('input');
//     input5.type = 'date';
//     input5.name= 'dip_start[]'
//     const input6 = document.createElement('input');
//     input6.type = 'date';
//     input6.name= 'dip_end[]'
//
//     div.appendChild(input1);
//     div.appendChild(input2);
//     div.appendChild(input3);
//     div.appendChild(input4);
//     div.appendChild(input5);
//     div.appendChild(input6);
//     response_formation.append(div);
// });

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
  params.append('school', document.querySelector('#school').value);
  // params.append('dip_location', document.querySelector('#dip_location').value);
  // params.append('diplome', document.querySelector('#diplome').value);
  // params.append('status', document.querySelector('#status').value);
  // params.append('dip_start', document.querySelector('#dip_start').value);
  // params.append('dip_end', document.querySelector('#dip_end').value);

  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3aa9ab7718151d2bb67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmIzNWVmY2JhYTM4MjI2MTQ3NGRjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QUFRLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0VBQ25EQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCbEIsTUFBTSxDQUFDRSxNQUFNLENBQUMsS0FBSyxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUMxRG5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDaEVuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQ2xFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUN4RW5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDMURuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQ3BFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUNoRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBaEIsV0FBVyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDOzs7Ozs7OztVQy9VRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9hZGRjdi5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYmxlYXV4IGQnb3B0aW9uc1xuXG5cblxuY29uc3QgdGFiUGVybWlzPSBbXG4gICAgXCJBMVwiLFxuICAgIFwiQTJcIixcbiAgICBcIkFcIixcbiAgICBcIkJcIixcbiAgICBcIkJFXCIsXG4gICAgXCJDMVwiLFxuICAgIFwiQzFFXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDRVwiLFxuICAgIFwiRDFcIixcbiAgICBcIkQxRVwiLFxuICAgIFwiRFwiLFxuICAgIFwiREVcIixcbiAgICBcIlBQTFwiLFxuICAgIFwiQ1BMXCIsXG4gICAgXCJBVFBMXCIsXG4gICAgXCJVTE1cIlxuXTtcblxuY29uc3QgdGFiU29mdHNraWxscz0gW1xuICAgIFwiQ29tbXVuaWNhdGlvblwiLFxuICAgIFwiQ29sbGFib3JhdGlvblwiLFxuICAgIFwiRXNwcml0IGQnw6lxdWlwZVwiLFxuICAgIFwiQWRhcHRhYmlsaXTDqVwiLFxuICAgIFwiUsOpc29sdXRpb24gZGUgcHJvYmzDqG1lc1wiLFxuICAgIFwiQ3LDqWF0aXZpdMOpXCIsXG4gICAgXCJHZXN0aW9uIGR1IHRlbXBzXCIsXG4gICAgXCJMZWFkZXJzaGlwXCIsXG4gICAgXCJFbXBhdGhpZVwiLFxuICAgIFwiUGVuc8OpZSBjcml0aXF1ZVwiLFxuICAgIFwiUsOpc2lsaWVuY2VcIixcbiAgICBcIkdlc3Rpb24gZHUgc3RyZXNzXCIsXG4gICAgXCJQcm9hY3RpZlwiXG5dO1xuXG5jb25zdCB0YWJIYXJkU2tpbGxzPSBbXG4gICAgXCJIVE1ML0NTU1wiLFxuICAgIFwiQ1wiLFxuICAgIFwiQyNcIixcbiAgICBcIkMrK1wiLFxuICAgIFwiQ29ib2xcIixcbiAgICBcIkdvXCIsXG4gICAgXCJKYXZhXCIsXG4gICAgXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJLb3RsaW5cIixcbiAgICBcIk1BVExBQlwiLFxuICAgIFwiT2JqZWN0aXZlLUNcIixcbiAgICBcIlBlcmxcIixcbiAgICBcIlBIUFwiLFxuICAgIFwiUHl0aG9uXCIsXG4gICAgXCJSXCIsXG4gICAgXCJSdWJ5XCIsXG4gICAgXCJSdXN0XCIsXG4gICAgXCJTY2FsYVwiLFxuICAgIFwiU2hlbGwgc2NyaXB0aW5nXCIsXG4gICAgXCJTUUxcIixcbiAgICBcIlN3aWZ0XCIsXG4gICAgXCJUeXBlU2NyaXB0XCIsXG4gICAgXCJWQi5ORVRcIlxuXTtcblxuY29uc3QgdGFiUmVzZWF1eFNvY2lhdXggPSBbXG4gICAgXCJMaW5rZWRJblwiLFxuICAgIFwiRmFjZWJvb2tcIixcbiAgICBcIlR3aXR0ZXJcIixcbiAgICBcIkluc3RhZ3JhbVwiLFxuICAgIFwiWW91VHViZVwiLFxuICAgIFwiUGludGVyZXN0XCIsXG4gICAgXCJTbmFwY2hhdFwiLFxuICAgIFwiVGlrVG9rXCIsXG4gICAgXCJXaGF0c0FwcFwiLFxuICAgIFwiVGVsZWdyYW1cIixcbiAgICBcIlJlZGRpdFwiLFxuICAgIFwiVHVtYmxyXCIsXG4gICAgXCJGbGlja3JcIixcbiAgICBcIlZpbWVvXCIsXG4gICAgXCJRdW9yYVwiLFxuICAgIFwiTWVkaXVtXCIsXG4gICAgXCJCZWhhbmNlXCIsXG4gICAgXCJEcmliYmJsZVwiLFxuICAgIFwiR2l0SHViXCJcbl07XG5cbmNvbnN0IHRhYkxhbmd1ZXMgPSBbXG4gICAgXCJBbmdsYWlzXCIsXG4gICAgXCJGcmFuw6dhaXNcIixcbiAgICBcIkVzcGFnbm9sXCIsXG4gICAgXCJBbGxlbWFuZFwiLFxuICAgIFwiQ2hpbm9pc1wiLFxuICAgIFwiQXJhYmVcIixcbiAgICBcIlJ1c3NlXCIsXG4gICAgXCJQb3J0dWdhaXNcIixcbiAgICBcIkphcG9uYWlzXCIsXG4gICAgXCJJdGFsaWVuXCIsXG4gICAgXCJIaW5kaVwiLFxuICAgIFwiTsOpZXJsYW5kYWlzXCIsXG4gICAgXCJDb3LDqWVuXCIsXG4gICAgXCJUdXJjXCIsXG4gICAgXCJTdcOpZG9pc1wiLFxuICAgIFwiUG9sb25haXNcIixcbiAgICBcIkRhbm9pc1wiLFxuICAgIFwiTm9ydsOpZ2llblwiLFxuICAgIFwiRmlubm9pc1wiXG5dO1xuXG5cbmNvbnN0IGJ0bl9hZGRfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZm9ybWF0aW9uJyk7XG5jb25zdCByZXNwb25zZV9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZm9ybWF0aW9uJyk7XG5cbi8vIGNvbnN0IGJ0bl9hZGRfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2V4cGVyaWVuY2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZXhwZXJpZW5jZScpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcGVybWlzJyk7XG4vLyBjb25zdCByZXNwb25zZV9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcGVybWlzJyk7XG4vLyBjb25zdCBzZWxlY3RfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blcm1pcycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuLy8gY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaGFyZHNraWxscycpO1xuLy8gY29uc3Qgc2VsZWN0X2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZHNraWxscycpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcmVzZWF1eCcpO1xuLy8gY29uc3Qgc2VsZWN0X3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZWF1eCcpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuLy8gY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hvYmJpZXMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaG9iYmllcycpO1xuLy9cbi8vIGJ0bl9hZGRfZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0MS5uYW1lPSAnc2Nob29sW10nXG4vLyAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDIudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDIubmFtZT0gJ2RpcF9sb2NhdGlvbltdJ1xuLy8gICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQzLm5hbWU9ICdkaXBsb21lW10nXG4vLyAgICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDQudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDQubmFtZT0gJ3N0YXR1c1tdJ1xuLy8gICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ1Lm5hbWU9ICdkaXBfc3RhcnRbXSdcbi8vICAgICBjb25zdCBpbnB1dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Ni50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0Ni5uYW1lPSAnZGlwX2VuZFtdJ1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcbi8vICAgICByZXNwb25zZV9mb3JtYXRpb24uYXBwZW5kKGRpdik7XG4vLyB9KTtcblxuLy8gYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcGVybWlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdwZXJtaXNbXSc7XG4vL1xuLy8gICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfc29mdHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnc29mdHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaGFyZHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnaGFyZHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcmVzZWF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncmVzZWF1eFtdJztcbi8vXG4vLyAgICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9sYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnbGFuZ3VhZ2VbXSc7XG4vL1xuLy8gICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaG9iYmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQubmFtZT0gJ2hvYmJpZXNbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbi8vICAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG5cbi8vIG9rIGZpblxuXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAncmVjb3JkX2N2JylcbmFzeW5jIGZ1bmN0aW9uICBhZGRDdkdsb2JhbCgpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG59XG5cblxuY29uc3QgdGhlZm9ybXVsYWlyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVmb3JtdWxhaXJlJyk7XG50aGVmb3JtdWxhaXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ25vbScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub20nKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncHJlbm9tJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZW5vbScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhZHJlc3NlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkcmVzc2UnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbC1pbnB1dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsLWlucHV0JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3RlbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYmlydGhkYXknLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXknKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnc2Nob29sJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaG9vbCcpLnZhbHVlKTtcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdkaXBfbG9jYXRpb24nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlwX2xvY2F0aW9uJykudmFsdWUpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ2RpcGxvbWUnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlwbG9tZScpLnZhbHVlKTtcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdzdGF0dXMnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHVzJykudmFsdWUpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ2RpcF9zdGFydCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXBfc3RhcnQnKS52YWx1ZSk7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgnZGlwX2VuZCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXBfZW5kJykudmFsdWUpO1xuXG4gICAgYWRkQ3ZHbG9iYWwoKTtcbn0pO1xuXG5cblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUzYWE5YWI3NzE4MTUxZDJiYjY3XCIpIl0sIm5hbWVzIjpbInRhYlBlcm1pcyIsInRhYlNvZnRza2lsbHMiLCJ0YWJIYXJkU2tpbGxzIiwidGFiUmVzZWF1eFNvY2lhdXgiLCJ0YWJMYW5ndWVzIiwiYnRuX2FkZF9mb3JtYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZV9mb3JtYXRpb24iLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFkZEN2R2xvYmFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRoZWZvcm11bGFpcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=