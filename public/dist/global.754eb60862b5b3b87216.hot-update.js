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

let params = new FormData();
params.append('action', 'record_cv');
async function addCvGlobal() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);
}
const theformulaire = document.querySelector('#theformulaire');
theformulaire.addEventListener('submit', function (evt) {
  evt.preventDefault();
  params = new FormData(theformulaire);
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea7e9ae70695350c1fc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjc1NGViNjA4NjJiNWIzYjg3MjE2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL2FkZGN2LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFibGVhdXggZCdvcHRpb25zXG5cblxuXG5jb25zdCB0YWJQZXJtaXM9IFtcbiAgICBcIkExXCIsXG4gICAgXCJBMlwiLFxuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQkVcIixcbiAgICBcIkMxXCIsXG4gICAgXCJDMUVcIixcbiAgICBcIkNcIixcbiAgICBcIkNFXCIsXG4gICAgXCJEMVwiLFxuICAgIFwiRDFFXCIsXG4gICAgXCJEXCIsXG4gICAgXCJERVwiLFxuICAgIFwiUFBMXCIsXG4gICAgXCJDUExcIixcbiAgICBcIkFUUExcIixcbiAgICBcIlVMTVwiXG5dO1xuXG5jb25zdCB0YWJTb2Z0c2tpbGxzPSBbXG4gICAgXCJDb21tdW5pY2F0aW9uXCIsXG4gICAgXCJDb2xsYWJvcmF0aW9uXCIsXG4gICAgXCJFc3ByaXQgZCfDqXF1aXBlXCIsXG4gICAgXCJBZGFwdGFiaWxpdMOpXCIsXG4gICAgXCJSw6lzb2x1dGlvbiBkZSBwcm9ibMOobWVzXCIsXG4gICAgXCJDcsOpYXRpdml0w6lcIixcbiAgICBcIkdlc3Rpb24gZHUgdGVtcHNcIixcbiAgICBcIkxlYWRlcnNoaXBcIixcbiAgICBcIkVtcGF0aGllXCIsXG4gICAgXCJQZW5zw6llIGNyaXRpcXVlXCIsXG4gICAgXCJSw6lzaWxpZW5jZVwiLFxuICAgIFwiR2VzdGlvbiBkdSBzdHJlc3NcIixcbiAgICBcIlByb2FjdGlmXCJcbl07XG5cbmNvbnN0IHRhYkhhcmRTa2lsbHM9IFtcbiAgICBcIkhUTUwvQ1NTXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDI1wiLFxuICAgIFwiQysrXCIsXG4gICAgXCJDb2JvbFwiLFxuICAgIFwiR29cIixcbiAgICBcIkphdmFcIixcbiAgICBcIkphdmFTY3JpcHRcIixcbiAgICBcIktvdGxpblwiLFxuICAgIFwiTUFUTEFCXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiLFxuICAgIFwiUGVybFwiLFxuICAgIFwiUEhQXCIsXG4gICAgXCJQeXRob25cIixcbiAgICBcIlJcIixcbiAgICBcIlJ1YnlcIixcbiAgICBcIlJ1c3RcIixcbiAgICBcIlNjYWxhXCIsXG4gICAgXCJTaGVsbCBzY3JpcHRpbmdcIixcbiAgICBcIlNRTFwiLFxuICAgIFwiU3dpZnRcIixcbiAgICBcIlR5cGVTY3JpcHRcIixcbiAgICBcIlZCLk5FVFwiXG5dO1xuXG5jb25zdCB0YWJSZXNlYXV4U29jaWF1eCA9IFtcbiAgICBcIkxpbmtlZEluXCIsXG4gICAgXCJGYWNlYm9va1wiLFxuICAgIFwiVHdpdHRlclwiLFxuICAgIFwiSW5zdGFncmFtXCIsXG4gICAgXCJZb3VUdWJlXCIsXG4gICAgXCJQaW50ZXJlc3RcIixcbiAgICBcIlNuYXBjaGF0XCIsXG4gICAgXCJUaWtUb2tcIixcbiAgICBcIldoYXRzQXBwXCIsXG4gICAgXCJUZWxlZ3JhbVwiLFxuICAgIFwiUmVkZGl0XCIsXG4gICAgXCJUdW1ibHJcIixcbiAgICBcIkZsaWNrclwiLFxuICAgIFwiVmltZW9cIixcbiAgICBcIlF1b3JhXCIsXG4gICAgXCJNZWRpdW1cIixcbiAgICBcIkJlaGFuY2VcIixcbiAgICBcIkRyaWJiYmxlXCIsXG4gICAgXCJHaXRIdWJcIlxuXTtcblxuY29uc3QgdGFiTGFuZ3VlcyA9IFtcbiAgICBcIkFuZ2xhaXNcIixcbiAgICBcIkZyYW7Dp2Fpc1wiLFxuICAgIFwiRXNwYWdub2xcIixcbiAgICBcIkFsbGVtYW5kXCIsXG4gICAgXCJDaGlub2lzXCIsXG4gICAgXCJBcmFiZVwiLFxuICAgIFwiUnVzc2VcIixcbiAgICBcIlBvcnR1Z2Fpc1wiLFxuICAgIFwiSmFwb25haXNcIixcbiAgICBcIkl0YWxpZW5cIixcbiAgICBcIkhpbmRpXCIsXG4gICAgXCJOw6llcmxhbmRhaXNcIixcbiAgICBcIkNvcsOpZW5cIixcbiAgICBcIlR1cmNcIixcbiAgICBcIlN1w6lkb2lzXCIsXG4gICAgXCJQb2xvbmFpc1wiLFxuICAgIFwiRGFub2lzXCIsXG4gICAgXCJOb3J2w6lnaWVuXCIsXG4gICAgXCJGaW5ub2lzXCJcbl07XG5cbmNvbnN0IGJ0bl9hZGRfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZm9ybWF0aW9uJyk7XG5jb25zdCByZXNwb25zZV9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZm9ybWF0aW9uJyk7XG5cbmNvbnN0IGJ0bl9hZGRfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2V4cGVyaWVuY2UnKTtcbmNvbnN0IHJlc3BvbnNlX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZXhwZXJpZW5jZScpO1xuXG5jb25zdCBidG5fYWRkX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Blcm1pcycpO1xuY29uc3QgcmVzcG9uc2VfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Blcm1pcycpO1xuY29uc3Qgc2VsZWN0X3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJtaXMnKTtcblxuY29uc3QgYnRuX2FkZF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfc29mdHNraWxscycpO1xuY29uc3QgcmVzcG9uc2Vfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9zb2Z0c2tpbGxzJyk7XG5jb25zdCBzZWxlY3Rfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0c2tpbGxzJyk7XG5cbmNvbnN0IGJ0bl9hZGRfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hhcmRza2lsbHMnKTtcbmNvbnN0IHJlc3BvbnNlX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaGFyZHNraWxscycpO1xuY29uc3Qgc2VsZWN0X2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZHNraWxscycpO1xuXG5jb25zdCBidG5fYWRkX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9yZXNlYXV4Jyk7XG5jb25zdCByZXNwb25zZV9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Jlc2VhdXgnKTtcbmNvbnN0IHNlbGVjdF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VhdXgnKTtcblxuY29uc3QgYnRuX2FkZF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2xhbmd1YWdlJyk7XG5jb25zdCByZXNwb25zZV9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9sYW5ndWFnZScpO1xuY29uc3Qgc2VsZWN0X2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmd1YWdlJyk7XG5cbmNvbnN0IGJ0bl9hZGRfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hvYmJpZXMnKTtcbmNvbnN0IHJlc3BvbnNlX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaG9iYmllcycpO1xuXG5idG5fYWRkX2Zvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDEubmFtZT0gJ3NjaG9vbFtdJ1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb25bXSdcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0My5uYW1lPSAnZGlwbG9tZVtdJ1xuICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQ0Lm5hbWU9ICdzdGF0dXNbXSdcbiAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NS5uYW1lPSAnZGlwX3N0YXJ0W10nXG4gICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmRbXSdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDYpO1xuICAgIHJlc3BvbnNlX2Zvcm1hdGlvbi5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2V4cGVyaWVuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdleHBlcmllbmNlW10nXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDIubmFtZT0gJ2V4cF9sb2NhdGlvbltdJ1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQzLm5hbWU9ICdwb3N0ZVtdJ1xuICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ0LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ0Lm5hbWU9ICdleHBfc3RhcnRbXSdcbiAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NS5uYW1lPSAnZXhwX2VuZFtdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4gICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3Blcm1pcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAncGVybWlzW10nO1xuXG4gICAgdGFiUGVybWlzLmZvckVhY2goKHBlcm1pcykgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGVybWlzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3NvZnRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3NvZnRza2lsbHNbXSc7XG5cbiAgICB0YWJTb2Z0c2tpbGxzLmZvckVhY2goKHNza2lsbHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNza2lsbHM7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2hhcmRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ2hhcmRza2lsbHNbXSc7XG5cbiAgICB0YWJIYXJkU2tpbGxzLmZvckVhY2goKGhza2lsbHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGhza2lsbHM7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3Jlc2VhdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3Jlc2VhdXhbXSc7XG5cbiAgICB0YWJSZXNlYXV4U29jaWF1eC5mb3JFYWNoKChyZXNlYXUpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHJlc2VhdTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ2xhbmd1YWdlW10nO1xuXG4gICAgdGFiTGFuZ3Vlcy5mb3JFYWNoKChsYW5ndWUpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhbmd1ZTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2hvYmJpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Lm5hbWU9ICdob2JiaWVzW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJlc3BvbnNlX2hvYmJpZXMuYXBwZW5kKGRpdik7XG59KTtcblxuLy8gb2sgZmluXG5cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG5hc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXNcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxufVxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcblxudGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMgPSBuZXcgRm9ybURhdGEodGhlZm9ybXVsYWlyZSk7XG4gICAgYWRkQ3ZHbG9iYWwoKTtcbn0pO1xuXG5cblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVhN2U5YWU3MDY5NTM1MGMxZmM2XCIpIl0sIm5hbWVzIjpbInRhYlBlcm1pcyIsInRhYlNvZnRza2lsbHMiLCJ0YWJIYXJkU2tpbGxzIiwidGFiUmVzZWF1eFNvY2lhdXgiLCJ0YWJMYW5ndWVzIiwiYnRuX2FkZF9mb3JtYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZV9mb3JtYXRpb24iLCJidG5fYWRkX2V4cGVyaWVuY2UiLCJyZXNwb25zZV9leHBlcmllbmNlIiwiYnRuX2FkZF9wZXJtaXMiLCJyZXNwb25zZV9wZXJtaXMiLCJzZWxlY3RfcGVybWlzIiwiYnRuX2FkZF9zb2Z0c2tpbGxzIiwicmVzcG9uc2Vfc29mdHNraWxscyIsInNlbGVjdF9zb2Z0c2tpbGxzIiwiYnRuX2FkZF9oYXJkc2tpbGxzIiwicmVzcG9uc2VfaGFyZHNraWxscyIsInNlbGVjdF9oYXJkc2tpbGxzIiwiYnRuX2FkZF9yZXNlYXV4IiwicmVzcG9uc2VfcmVzZWF1eCIsInNlbGVjdF9yZXNlYXV4IiwiYnRuX2FkZF9sYW5ndWFnZSIsInJlc3BvbnNlX2xhbmd1YWdlIiwic2VsZWN0X2xhbmd1YWdlIiwiYnRuX2FkZF9ob2JiaWVzIiwicmVzcG9uc2VfaG9iYmllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQxIiwidHlwZSIsIm5hbWUiLCJpbnB1dDIiLCJpbnB1dDMiLCJpbnB1dDQiLCJpbnB1dDUiLCJpbnB1dDYiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsInNlbGVjdCIsImZvckVhY2giLCJwZXJtaXMiLCJvcHRpb24iLCJ0ZXh0Q29udGVudCIsInNza2lsbHMiLCJoc2tpbGxzIiwicmVzZWF1IiwibGFuZ3VlIiwiaW5wdXQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFkZEN2R2xvYmFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGVmb3JtdWxhaXJlIiwiZXZ0Il0sInNvdXJjZVJvb3QiOiIifQ==