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
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe1b2356dbadb5e7ce78")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjQ2NmRhNzcxNDRkZmRjZDY3NjExLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QSxHQUFHLENBQUN0QyxjQUFjLENBQUMsQ0FBQztFQUNwQnlCLFdBQVcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsVUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuXG5cbmNvbnN0IHRhYlBlcm1pcz0gW1xuICAgIFwiQTFcIixcbiAgICBcIkEyXCIsXG4gICAgXCJBXCIsXG4gICAgXCJCXCIsXG4gICAgXCJCRVwiLFxuICAgIFwiQzFcIixcbiAgICBcIkMxRVwiLFxuICAgIFwiQ1wiLFxuICAgIFwiQ0VcIixcbiAgICBcIkQxXCIsXG4gICAgXCJEMUVcIixcbiAgICBcIkRcIixcbiAgICBcIkRFXCIsXG4gICAgXCJQUExcIixcbiAgICBcIkNQTFwiLFxuICAgIFwiQVRQTFwiLFxuICAgIFwiVUxNXCJcbl07XG5cbmNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbiAgICBcIkNvbW11bmljYXRpb25cIixcbiAgICBcIkNvbGxhYm9yYXRpb25cIixcbiAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbiAgICBcIkFkYXB0YWJpbGl0w6lcIixcbiAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbiAgICBcIkNyw6lhdGl2aXTDqVwiLFxuICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuICAgIFwiTGVhZGVyc2hpcFwiLFxuICAgIFwiRW1wYXRoaWVcIixcbiAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbiAgICBcIlLDqXNpbGllbmNlXCIsXG4gICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuICAgIFwiUHJvYWN0aWZcIlxuXTtcblxuY29uc3QgdGFiSGFyZFNraWxscz0gW1xuICAgIFwiSFRNTC9DU1NcIixcbiAgICBcIkNcIixcbiAgICBcIkMjXCIsXG4gICAgXCJDKytcIixcbiAgICBcIkNvYm9sXCIsXG4gICAgXCJHb1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgIFwiS290bGluXCIsXG4gICAgXCJNQVRMQUJcIixcbiAgICBcIk9iamVjdGl2ZS1DXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUlwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiUnVzdFwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuICAgIFwiU1FMXCIsXG4gICAgXCJTd2lmdFwiLFxuICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgIFwiVkIuTkVUXCJcbl07XG5cbmNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuICAgIFwiTGlua2VkSW5cIixcbiAgICBcIkZhY2Vib29rXCIsXG4gICAgXCJUd2l0dGVyXCIsXG4gICAgXCJJbnN0YWdyYW1cIixcbiAgICBcIllvdVR1YmVcIixcbiAgICBcIlBpbnRlcmVzdFwiLFxuICAgIFwiU25hcGNoYXRcIixcbiAgICBcIlRpa1Rva1wiLFxuICAgIFwiV2hhdHNBcHBcIixcbiAgICBcIlRlbGVncmFtXCIsXG4gICAgXCJSZWRkaXRcIixcbiAgICBcIlR1bWJsclwiLFxuICAgIFwiRmxpY2tyXCIsXG4gICAgXCJWaW1lb1wiLFxuICAgIFwiUXVvcmFcIixcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiQmVoYW5jZVwiLFxuICAgIFwiRHJpYmJibGVcIixcbiAgICBcIkdpdEh1YlwiXG5dO1xuXG5jb25zdCB0YWJMYW5ndWVzID0gW1xuICAgIFwiQW5nbGFpc1wiLFxuICAgIFwiRnJhbsOnYWlzXCIsXG4gICAgXCJFc3BhZ25vbFwiLFxuICAgIFwiQWxsZW1hbmRcIixcbiAgICBcIkNoaW5vaXNcIixcbiAgICBcIkFyYWJlXCIsXG4gICAgXCJSdXNzZVwiLFxuICAgIFwiUG9ydHVnYWlzXCIsXG4gICAgXCJKYXBvbmFpc1wiLFxuICAgIFwiSXRhbGllblwiLFxuICAgIFwiSGluZGlcIixcbiAgICBcIk7DqWVybGFuZGFpc1wiLFxuICAgIFwiQ29yw6llblwiLFxuICAgIFwiVHVyY1wiLFxuICAgIFwiU3XDqWRvaXNcIixcbiAgICBcIlBvbG9uYWlzXCIsXG4gICAgXCJEYW5vaXNcIixcbiAgICBcIk5vcnbDqWdpZW5cIixcbiAgICBcIkZpbm5vaXNcIlxuXTtcblxuY29uc3QgYnRuX2FkZF9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9mb3JtYXRpb24nKTtcbmNvbnN0IHJlc3BvbnNlX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9mb3JtYXRpb24nKTtcblxuY29uc3QgYnRuX2FkZF9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZXhwZXJpZW5jZScpO1xuY29uc3QgcmVzcG9uc2VfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9leHBlcmllbmNlJyk7XG5cbmNvbnN0IGJ0bl9hZGRfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcGVybWlzJyk7XG5jb25zdCByZXNwb25zZV9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcGVybWlzJyk7XG5jb25zdCBzZWxlY3RfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blcm1pcycpO1xuXG5jb25zdCBidG5fYWRkX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9zb2Z0c2tpbGxzJyk7XG5jb25zdCByZXNwb25zZV9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3NvZnRza2lsbHMnKTtcbmNvbnN0IHNlbGVjdF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRza2lsbHMnKTtcblxuY29uc3QgYnRuX2FkZF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaGFyZHNraWxscycpO1xuY29uc3QgcmVzcG9uc2VfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9oYXJkc2tpbGxzJyk7XG5jb25zdCBzZWxlY3RfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYXJkc2tpbGxzJyk7XG5cbmNvbnN0IGJ0bl9hZGRfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Jlc2VhdXgnKTtcbmNvbnN0IHJlc3BvbnNlX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcmVzZWF1eCcpO1xuY29uc3Qgc2VsZWN0X3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZWF1eCcpO1xuXG5jb25zdCBidG5fYWRkX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfbGFuZ3VhZ2UnKTtcbmNvbnN0IHJlc3BvbnNlX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2xhbmd1YWdlJyk7XG5jb25zdCBzZWxlY3RfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKTtcblxuY29uc3QgYnRuX2FkZF9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaG9iYmllcycpO1xuY29uc3QgcmVzcG9uc2VfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9ob2JiaWVzJyk7XG5cbmJ0bl9hZGRfZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0MS5uYW1lPSAnc2Nob29sW10nXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDIubmFtZT0gJ2RpcF9sb2NhdGlvbltdJ1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQzLm5hbWU9ICdkaXBsb21lW10nXG4gICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDQubmFtZT0gJ3N0YXR1c1tdJ1xuICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ1Lm5hbWU9ICdkaXBfc3RhcnRbXSdcbiAgICBjb25zdCBpbnB1dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Ni50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0Ni5uYW1lPSAnZGlwX2VuZFtdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Nik7XG4gICAgcmVzcG9uc2VfZm9ybWF0aW9uLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfZXhwZXJpZW5jZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDEubmFtZT0gJ2V4cGVyaWVuY2VbXSdcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5uYW1lPSAnZXhwX2xvY2F0aW9uW10nXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDMudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDMubmFtZT0gJ3Bvc3RlW10nXG4gICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDQudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDQubmFtZT0gJ2V4cF9zdGFydFtdJ1xuICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ1Lm5hbWU9ICdleHBfZW5kW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbiAgICByZXNwb25zZV9leHBlcmllbmNlLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfcGVybWlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QubmFtZSA9ICdwZXJtaXNbXSc7XG5cbiAgICB0YWJQZXJtaXMuZm9yRWFjaCgocGVybWlzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwZXJtaXM7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfcGVybWlzLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfc29mdHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAnc29mdHNraWxsc1tdJztcblxuICAgIHRhYlNvZnRza2lsbHMuZm9yRWFjaCgoc3NraWxscykgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3NraWxscztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9zb2Z0c2tpbGxzLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfaGFyZHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAnaGFyZHNraWxsc1tdJztcblxuICAgIHRhYkhhcmRTa2lsbHMuZm9yRWFjaCgoaHNraWxscykgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaHNraWxscztcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9oYXJkc2tpbGxzLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfcmVzZWF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAncmVzZWF1eFtdJztcblxuICAgIHRhYlJlc2VhdXhTb2NpYXV4LmZvckVhY2goKHJlc2VhdSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVzZWF1O1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX3Jlc2VhdXguYXBwZW5kKGRpdik7XG59KTtcblxuYnRuX2FkZF9sYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAnbGFuZ3VhZ2VbXSc7XG5cbiAgICB0YWJMYW5ndWVzLmZvckVhY2goKGxhbmd1ZSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFuZ3VlO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX2xhbmd1YWdlLmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfaG9iYmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQubmFtZT0gJ2hvYmJpZXNbXSdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmVzcG9uc2VfaG9iYmllcy5hcHBlbmQoZGl2KTtcbn0pO1xuXG4vLyBvayBmaW5cblxuLy8gYXN5bmMgZnVuY3Rpb24gYWRkQ3ZHbG9iYWwoKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSlcbi8vIH1cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9kZXRhaWwnKVxuYXN5bmMgZnVuY3Rpb24gIGFkZEN2R2xvYmFsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxuXG5cbmNvbnN0IHRoZWZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlZm9ybXVsYWlyZScpO1xudGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRDdkdsb2JhbCgpO1xufSk7XG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmUxYjIzNTZkYmFkYjVlN2NlNzhcIikiXSwibmFtZXMiOlsidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsImJ0bl9hZGRfZXhwZXJpZW5jZSIsInJlc3BvbnNlX2V4cGVyaWVuY2UiLCJidG5fYWRkX3Blcm1pcyIsInJlc3BvbnNlX3Blcm1pcyIsInNlbGVjdF9wZXJtaXMiLCJidG5fYWRkX3NvZnRza2lsbHMiLCJyZXNwb25zZV9zb2Z0c2tpbGxzIiwic2VsZWN0X3NvZnRza2lsbHMiLCJidG5fYWRkX2hhcmRza2lsbHMiLCJyZXNwb25zZV9oYXJkc2tpbGxzIiwic2VsZWN0X2hhcmRza2lsbHMiLCJidG5fYWRkX3Jlc2VhdXgiLCJyZXNwb25zZV9yZXNlYXV4Iiwic2VsZWN0X3Jlc2VhdXgiLCJidG5fYWRkX2xhbmd1YWdlIiwicmVzcG9uc2VfbGFuZ3VhZ2UiLCJzZWxlY3RfbGFuZ3VhZ2UiLCJidG5fYWRkX2hvYmJpZXMiLCJyZXNwb25zZV9ob2JiaWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsImlucHV0MiIsImlucHV0MyIsImlucHV0NCIsImlucHV0NSIsImlucHV0NiIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwic2VsZWN0IiwiZm9yRWFjaCIsInBlcm1pcyIsIm9wdGlvbiIsInRleHRDb250ZW50Iiwic3NraWxscyIsImhza2lsbHMiLCJyZXNlYXUiLCJsYW5ndWUiLCJpbnB1dCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYWRkQ3ZHbG9iYWwiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlZm9ybXVsYWlyZSIsImV2dCJdLCJzb3VyY2VSb290IjoiIn0=