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
  params.append('school', document.querySelector('#school').value);
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("febd292a491ead1137dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmZmNDQ0YzUyMzI4ZjI1OThjNTcyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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d2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFibGVhdXggZCdvcHRpb25zXG5cblxuXG5jb25zdCB0YWJQZXJtaXM9IFtcbiAgICBcIkExXCIsXG4gICAgXCJBMlwiLFxuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQkVcIixcbiAgICBcIkMxXCIsXG4gICAgXCJDMUVcIixcbiAgICBcIkNcIixcbiAgICBcIkNFXCIsXG4gICAgXCJEMVwiLFxuICAgIFwiRDFFXCIsXG4gICAgXCJEXCIsXG4gICAgXCJERVwiLFxuICAgIFwiUFBMXCIsXG4gICAgXCJDUExcIixcbiAgICBcIkFUUExcIixcbiAgICBcIlVMTVwiXG5dO1xuXG5jb25zdCB0YWJTb2Z0c2tpbGxzPSBbXG4gICAgXCJDb21tdW5pY2F0aW9uXCIsXG4gICAgXCJDb2xsYWJvcmF0aW9uXCIsXG4gICAgXCJFc3ByaXQgZCfDqXF1aXBlXCIsXG4gICAgXCJBZGFwdGFiaWxpdMOpXCIsXG4gICAgXCJSw6lzb2x1dGlvbiBkZSBwcm9ibMOobWVzXCIsXG4gICAgXCJDcsOpYXRpdml0w6lcIixcbiAgICBcIkdlc3Rpb24gZHUgdGVtcHNcIixcbiAgICBcIkxlYWRlcnNoaXBcIixcbiAgICBcIkVtcGF0aGllXCIsXG4gICAgXCJQZW5zw6llIGNyaXRpcXVlXCIsXG4gICAgXCJSw6lzaWxpZW5jZVwiLFxuICAgIFwiR2VzdGlvbiBkdSBzdHJlc3NcIixcbiAgICBcIlByb2FjdGlmXCJcbl07XG5cbmNvbnN0IHRhYkhhcmRTa2lsbHM9IFtcbiAgICBcIkhUTUwvQ1NTXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDI1wiLFxuICAgIFwiQysrXCIsXG4gICAgXCJDb2JvbFwiLFxuICAgIFwiR29cIixcbiAgICBcIkphdmFcIixcbiAgICBcIkphdmFTY3JpcHRcIixcbiAgICBcIktvdGxpblwiLFxuICAgIFwiTUFUTEFCXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiLFxuICAgIFwiUGVybFwiLFxuICAgIFwiUEhQXCIsXG4gICAgXCJQeXRob25cIixcbiAgICBcIlJcIixcbiAgICBcIlJ1YnlcIixcbiAgICBcIlJ1c3RcIixcbiAgICBcIlNjYWxhXCIsXG4gICAgXCJTaGVsbCBzY3JpcHRpbmdcIixcbiAgICBcIlNRTFwiLFxuICAgIFwiU3dpZnRcIixcbiAgICBcIlR5cGVTY3JpcHRcIixcbiAgICBcIlZCLk5FVFwiXG5dO1xuXG5jb25zdCB0YWJSZXNlYXV4U29jaWF1eCA9IFtcbiAgICBcIkxpbmtlZEluXCIsXG4gICAgXCJGYWNlYm9va1wiLFxuICAgIFwiVHdpdHRlclwiLFxuICAgIFwiSW5zdGFncmFtXCIsXG4gICAgXCJZb3VUdWJlXCIsXG4gICAgXCJQaW50ZXJlc3RcIixcbiAgICBcIlNuYXBjaGF0XCIsXG4gICAgXCJUaWtUb2tcIixcbiAgICBcIldoYXRzQXBwXCIsXG4gICAgXCJUZWxlZ3JhbVwiLFxuICAgIFwiUmVkZGl0XCIsXG4gICAgXCJUdW1ibHJcIixcbiAgICBcIkZsaWNrclwiLFxuICAgIFwiVmltZW9cIixcbiAgICBcIlF1b3JhXCIsXG4gICAgXCJNZWRpdW1cIixcbiAgICBcIkJlaGFuY2VcIixcbiAgICBcIkRyaWJiYmxlXCIsXG4gICAgXCJHaXRIdWJcIlxuXTtcblxuY29uc3QgdGFiTGFuZ3VlcyA9IFtcbiAgICBcIkFuZ2xhaXNcIixcbiAgICBcIkZyYW7Dp2Fpc1wiLFxuICAgIFwiRXNwYWdub2xcIixcbiAgICBcIkFsbGVtYW5kXCIsXG4gICAgXCJDaGlub2lzXCIsXG4gICAgXCJBcmFiZVwiLFxuICAgIFwiUnVzc2VcIixcbiAgICBcIlBvcnR1Z2Fpc1wiLFxuICAgIFwiSmFwb25haXNcIixcbiAgICBcIkl0YWxpZW5cIixcbiAgICBcIkhpbmRpXCIsXG4gICAgXCJOw6llcmxhbmRhaXNcIixcbiAgICBcIkNvcsOpZW5cIixcbiAgICBcIlR1cmNcIixcbiAgICBcIlN1w6lkb2lzXCIsXG4gICAgXCJQb2xvbmFpc1wiLFxuICAgIFwiRGFub2lzXCIsXG4gICAgXCJOb3J2w6lnaWVuXCIsXG4gICAgXCJGaW5ub2lzXCJcbl07XG5cblxuY29uc3QgYnRuX2FkZF9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9mb3JtYXRpb24nKTtcbmNvbnN0IHJlc3BvbnNlX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9mb3JtYXRpb24nKTtcblxuLy8gY29uc3QgYnRuX2FkZF9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZXhwZXJpZW5jZScpO1xuLy8gY29uc3QgcmVzcG9uc2VfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9leHBlcmllbmNlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbi8vIGNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfc29mdHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2Vfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3Rfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0c2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaGFyZHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3RfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYXJkc2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuLy8gY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG4vLyBjb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2xhbmd1YWdlJyk7XG4vLyBjb25zdCByZXNwb25zZV9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9sYW5ndWFnZScpO1xuLy8gY29uc3Qgc2VsZWN0X2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmd1YWdlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaG9iYmllcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9ob2JiaWVzJyk7XG4vL1xuYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdzY2hvb2xbXSdcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5uYW1lPSAnZGlwX2xvY2F0aW9uW10nXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDMudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDMubmFtZT0gJ2RpcGxvbWVbXSdcbiAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0NC5uYW1lPSAnc3RhdHVzW10nXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydFtdJ1xuICAgIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ2LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ2Lm5hbWU9ICdkaXBfZW5kW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcbiAgICByZXNwb25zZV9mb3JtYXRpb24uYXBwZW5kKGRpdik7XG59KTtcblxuLy8gYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcGVybWlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdwZXJtaXNbXSc7XG4vL1xuLy8gICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfc29mdHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnc29mdHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaGFyZHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnaGFyZHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcmVzZWF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncmVzZWF1eFtdJztcbi8vXG4vLyAgICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9sYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnbGFuZ3VhZ2VbXSc7XG4vL1xuLy8gICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaG9iYmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQubmFtZT0gJ2hvYmJpZXNbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbi8vICAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG5cbi8vIG9rIGZpblxuXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAncmVjb3JkX2N2JylcbmFzeW5jIGZ1bmN0aW9uICBhZGRDdkdsb2JhbCgpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG59XG5cblxuY29uc3QgdGhlZm9ybXVsYWlyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVmb3JtdWxhaXJlJyk7XG50aGVmb3JtdWxhaXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ25vbScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub20nKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncHJlbm9tJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZW5vbScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhZHJlc3NlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkcmVzc2UnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbC1pbnB1dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsLWlucHV0JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3RlbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYmlydGhkYXknLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXknKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnc2Nob29sJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaG9vbCcpLnZhbHVlKTtcblxuICAgIGFkZEN2R2xvYmFsKCk7XG59KTtcblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZWJkMjkyYTQ5MWVhZDExMzdkZFwiKSJdLCJuYW1lcyI6WyJ0YWJQZXJtaXMiLCJ0YWJTb2Z0c2tpbGxzIiwidGFiSGFyZFNraWxscyIsInRhYlJlc2VhdXhTb2NpYXV4IiwidGFiTGFuZ3VlcyIsImJ0bl9hZGRfZm9ybWF0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVzcG9uc2VfZm9ybWF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsImlucHV0MiIsImlucHV0MyIsImlucHV0NCIsImlucHV0NSIsImlucHV0NiIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhZGRDdkdsb2JhbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aGVmb3JtdWxhaXJlIiwiZXZ0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9