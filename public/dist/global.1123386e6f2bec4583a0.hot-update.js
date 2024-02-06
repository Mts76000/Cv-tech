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
  input1.name = 'school';
  input1.placeholder = 'school';
  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.name = 'dip_location';
  input2.placeholder = 'dip_location';
  const input3 = document.createElement('input');
  input3.type = 'text';
  input3.name = 'diplome';
  input3.placeholder = 'diplome';
  const input4 = document.createElement('input');
  input4.type = 'text';
  input4.name = 'status';
  input4.placeholder = 'status';
  const input5 = document.createElement('input');
  input5.type = 'date';
  input5.name = 'dip_start';
  input5.placeholder = 'dip_start';
  const input6 = document.createElement('input');
  input6.type = 'date';
  input6.name = 'dip_end';
  input6.placeholder = 'dip_end';
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
  params = new FormData(theformulaire);
  params.append('action', 'record_cv');
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b85e5dea2250488b05a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjExMjMzODZlNmYyYmVjNDU4M2EwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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Q0FBQyxPQUFPSSxLQUFLLEVBQUU7SUFDWkYsT0FBTyxDQUFDRSxLQUFLLENBQUMsbURBQW1ELEVBQUVBLEtBQUssQ0FBQztFQUM3RTtBQUNKO0FBR0EsTUFBTUMsYUFBYSxHQUFHOUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQ2RCxhQUFhLENBQUN4QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU3lDLEdBQUcsRUFBRTtFQUNuREEsR0FBRyxDQUFDdkMsY0FBYyxDQUFDLENBQUM7RUFFcEJ3QixNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDYSxhQUFhLENBQUM7RUFDcENkLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7RUFFcENhLFdBQVcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1VUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuXG5cbmNvbnN0IHRhYlBlcm1pcz0gW1xuICAgIFwiQTFcIixcbiAgICBcIkEyXCIsXG4gICAgXCJBXCIsXG4gICAgXCJCXCIsXG4gICAgXCJCRVwiLFxuICAgIFwiQzFcIixcbiAgICBcIkMxRVwiLFxuICAgIFwiQ1wiLFxuICAgIFwiQ0VcIixcbiAgICBcIkQxXCIsXG4gICAgXCJEMUVcIixcbiAgICBcIkRcIixcbiAgICBcIkRFXCIsXG4gICAgXCJQUExcIixcbiAgICBcIkNQTFwiLFxuICAgIFwiQVRQTFwiLFxuICAgIFwiVUxNXCJcbl07XG5cbmNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbiAgICBcIkNvbW11bmljYXRpb25cIixcbiAgICBcIkNvbGxhYm9yYXRpb25cIixcbiAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbiAgICBcIkFkYXB0YWJpbGl0w6lcIixcbiAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbiAgICBcIkNyw6lhdGl2aXTDqVwiLFxuICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuICAgIFwiTGVhZGVyc2hpcFwiLFxuICAgIFwiRW1wYXRoaWVcIixcbiAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbiAgICBcIlLDqXNpbGllbmNlXCIsXG4gICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuICAgIFwiUHJvYWN0aWZcIlxuXTtcblxuY29uc3QgdGFiSGFyZFNraWxscz0gW1xuICAgIFwiSFRNTC9DU1NcIixcbiAgICBcIkNcIixcbiAgICBcIkMjXCIsXG4gICAgXCJDKytcIixcbiAgICBcIkNvYm9sXCIsXG4gICAgXCJHb1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgIFwiS290bGluXCIsXG4gICAgXCJNQVRMQUJcIixcbiAgICBcIk9iamVjdGl2ZS1DXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUlwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiUnVzdFwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuICAgIFwiU1FMXCIsXG4gICAgXCJTd2lmdFwiLFxuICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgIFwiVkIuTkVUXCJcbl07XG5cbmNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuICAgIFwiTGlua2VkSW5cIixcbiAgICBcIkZhY2Vib29rXCIsXG4gICAgXCJUd2l0dGVyXCIsXG4gICAgXCJJbnN0YWdyYW1cIixcbiAgICBcIllvdVR1YmVcIixcbiAgICBcIlBpbnRlcmVzdFwiLFxuICAgIFwiU25hcGNoYXRcIixcbiAgICBcIlRpa1Rva1wiLFxuICAgIFwiV2hhdHNBcHBcIixcbiAgICBcIlRlbGVncmFtXCIsXG4gICAgXCJSZWRkaXRcIixcbiAgICBcIlR1bWJsclwiLFxuICAgIFwiRmxpY2tyXCIsXG4gICAgXCJWaW1lb1wiLFxuICAgIFwiUXVvcmFcIixcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiQmVoYW5jZVwiLFxuICAgIFwiRHJpYmJibGVcIixcbiAgICBcIkdpdEh1YlwiXG5dO1xuXG5jb25zdCB0YWJMYW5ndWVzID0gW1xuICAgIFwiQW5nbGFpc1wiLFxuICAgIFwiRnJhbsOnYWlzXCIsXG4gICAgXCJFc3BhZ25vbFwiLFxuICAgIFwiQWxsZW1hbmRcIixcbiAgICBcIkNoaW5vaXNcIixcbiAgICBcIkFyYWJlXCIsXG4gICAgXCJSdXNzZVwiLFxuICAgIFwiUG9ydHVnYWlzXCIsXG4gICAgXCJKYXBvbmFpc1wiLFxuICAgIFwiSXRhbGllblwiLFxuICAgIFwiSGluZGlcIixcbiAgICBcIk7DqWVybGFuZGFpc1wiLFxuICAgIFwiQ29yw6llblwiLFxuICAgIFwiVHVyY1wiLFxuICAgIFwiU3XDqWRvaXNcIixcbiAgICBcIlBvbG9uYWlzXCIsXG4gICAgXCJEYW5vaXNcIixcbiAgICBcIk5vcnbDqWdpZW5cIixcbiAgICBcIkZpbm5vaXNcIlxuXTtcblxuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG5jb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG5jb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcblxuY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbmNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbmNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG5cbmNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbmNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuXG5jb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG5jb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbmNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcblxuY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG5jb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG5cbmNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbmNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuXG5jb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG5jb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcblxuYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdzY2hvb2wnXG4gICAgaW5wdXQxLnBsYWNlaG9sZGVyPSAnc2Nob29sJ1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb24nXG4gICAgaW5wdXQyLnBsYWNlaG9sZGVyPSAnZGlwX2xvY2F0aW9uJ1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQzLm5hbWU9ICdkaXBsb21lJ1xuICAgIGlucHV0My5wbGFjZWhvbGRlcj0gJ2RpcGxvbWUnXG4gICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDQubmFtZT0gJ3N0YXR1cydcbiAgICBpbnB1dDQucGxhY2Vob2xkZXI9ICdzdGF0dXMnXG4gICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydCdcbiAgICBpbnB1dDUucGxhY2Vob2xkZXI9ICdkaXBfc3RhcnQnXG4gICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmQnXG4gICAgaW5wdXQ2LnBsYWNlaG9sZGVyPSAnZGlwX2VuZCdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDYpO1xuICAgIHJlc3BvbnNlX2Zvcm1hdGlvbi5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2V4cGVyaWVuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQxLm5hbWU9ICdleHBlcmllbmNlW10nXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDIubmFtZT0gJ2V4cF9sb2NhdGlvbltdJ1xuICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQzLm5hbWU9ICdwb3N0ZVtdJ1xuICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ0LnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQ0Lm5hbWU9ICdleHBfc3RhcnRbXSdcbiAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NS5uYW1lPSAnZXhwX2VuZFtdJ1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4gICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3Blcm1pcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Lm5hbWUgPSAncGVybWlzW10nO1xuXG4gICAgdGFiUGVybWlzLmZvckVhY2goKHBlcm1pcykgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGVybWlzO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3NvZnRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3NvZnRza2lsbHNbXSc7XG5cbiAgICB0YWJTb2Z0c2tpbGxzLmZvckVhY2goKHNza2lsbHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNza2lsbHM7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2hhcmRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ2hhcmRza2lsbHNbXSc7XG5cbiAgICB0YWJIYXJkU2tpbGxzLmZvckVhY2goKGhza2lsbHMpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGhza2lsbHM7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX3Jlc2VhdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ3Jlc2VhdXhbXSc7XG5cbiAgICB0YWJSZXNlYXV4U29jaWF1eC5mb3JFYWNoKChyZXNlYXUpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHJlc2VhdTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xufSk7XG5cbmJ0bl9hZGRfbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5uYW1lID0gJ2xhbmd1YWdlW10nO1xuXG4gICAgdGFiTGFuZ3Vlcy5mb3JFYWNoKChsYW5ndWUpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhbmd1ZTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbn0pO1xuXG5idG5fYWRkX2hvYmJpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Lm5hbWU9ICdob2JiaWVzW10nXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJlc3BvbnNlX2hvYmJpZXMuYXBwZW5kKGRpdik7XG59KTtcblxuLy8gb2sgZmluXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFkZEN2R2xvYmFsKCkge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGJvZHk6IHBhcmFtc1xuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXG4vLyB9XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdyZWNvcmRfY3YnKVxuYXN5bmMgZnVuY3Rpb24gIGFkZEN2R2xvYmFsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cblxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcbnRoZWZvcm11bGFpcmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwYXJhbXMgPSBuZXcgRm9ybURhdGEodGhlZm9ybXVsYWlyZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG5cbiAgICBhZGRDdkdsb2JhbCgpO1xufSk7XG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjg1ZTVkZWEyMjUwNDg4YjA1YTJcIikiXSwibmFtZXMiOlsidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsImJ0bl9hZGRfZXhwZXJpZW5jZSIsInJlc3BvbnNlX2V4cGVyaWVuY2UiLCJidG5fYWRkX3Blcm1pcyIsInJlc3BvbnNlX3Blcm1pcyIsInNlbGVjdF9wZXJtaXMiLCJidG5fYWRkX3NvZnRza2lsbHMiLCJyZXNwb25zZV9zb2Z0c2tpbGxzIiwic2VsZWN0X3NvZnRza2lsbHMiLCJidG5fYWRkX2hhcmRza2lsbHMiLCJyZXNwb25zZV9oYXJkc2tpbGxzIiwic2VsZWN0X2hhcmRza2lsbHMiLCJidG5fYWRkX3Jlc2VhdXgiLCJyZXNwb25zZV9yZXNlYXV4Iiwic2VsZWN0X3Jlc2VhdXgiLCJidG5fYWRkX2xhbmd1YWdlIiwicmVzcG9uc2VfbGFuZ3VhZ2UiLCJzZWxlY3RfbGFuZ3VhZ2UiLCJidG5fYWRkX2hvYmJpZXMiLCJyZXNwb25zZV9ob2JiaWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbnB1dDEiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiaW5wdXQyIiwiaW5wdXQzIiwiaW5wdXQ0IiwiaW5wdXQ1IiwiaW5wdXQ2IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJzZWxlY3QiLCJmb3JFYWNoIiwicGVybWlzIiwib3B0aW9uIiwidGV4dENvbnRlbnQiLCJzc2tpbGxzIiwiaHNraWxscyIsInJlc2VhdSIsImxhbmd1ZSIsImlucHV0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhZGRDdkdsb2JhbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aGVmb3JtdWxhaXJlIiwiZXZ0Il0sInNvdXJjZVJvb3QiOiIifQ==