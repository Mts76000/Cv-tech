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
  params.append('action', 'record_cv');
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8ad7bd5604c1abebacd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjYxYmRmOGMxYTIzNDcxYjViNmM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QUssQ0FBQztFQUM3RTtBQUNKO0FBR0EsTUFBTUMsYUFBYSxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQrQixhQUFhLENBQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBUzhCLEdBQUcsRUFBRTtFQUNuREEsR0FBRyxDQUFDNUIsY0FBYyxDQUFDLENBQUM7RUFDcEJhLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLEtBQUssRUFBRWpCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDaUMsS0FBSyxDQUFDO0VBQzFEaEIsTUFBTSxDQUFDRCxNQUFNLENBQUMsUUFBUSxFQUFFakIsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNpQyxLQUFLLENBQUM7RUFDaEVoQixNQUFNLENBQUNELE1BQU0sQ0FBQyxTQUFTLEVBQUVqQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQztFQUNsRWhCLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLFlBQVksRUFBRWpCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDaUMsS0FBSyxDQUFDO0VBQ3hFaEIsTUFBTSxDQUFDRCxNQUFNLENBQUMsS0FBSyxFQUFFakIsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNpQyxLQUFLLENBQUM7RUFDMURoQixNQUFNLENBQUNELE1BQU0sQ0FBQyxVQUFVLEVBQUVqQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQztFQUNwRWhCLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7RUFDcENHLFdBQVcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUN6VUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuXG5cbmNvbnN0IHRhYlBlcm1pcz0gW1xuICAgIFwiQTFcIixcbiAgICBcIkEyXCIsXG4gICAgXCJBXCIsXG4gICAgXCJCXCIsXG4gICAgXCJCRVwiLFxuICAgIFwiQzFcIixcbiAgICBcIkMxRVwiLFxuICAgIFwiQ1wiLFxuICAgIFwiQ0VcIixcbiAgICBcIkQxXCIsXG4gICAgXCJEMUVcIixcbiAgICBcIkRcIixcbiAgICBcIkRFXCIsXG4gICAgXCJQUExcIixcbiAgICBcIkNQTFwiLFxuICAgIFwiQVRQTFwiLFxuICAgIFwiVUxNXCJcbl07XG5cbmNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbiAgICBcIkNvbW11bmljYXRpb25cIixcbiAgICBcIkNvbGxhYm9yYXRpb25cIixcbiAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbiAgICBcIkFkYXB0YWJpbGl0w6lcIixcbiAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbiAgICBcIkNyw6lhdGl2aXTDqVwiLFxuICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuICAgIFwiTGVhZGVyc2hpcFwiLFxuICAgIFwiRW1wYXRoaWVcIixcbiAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbiAgICBcIlLDqXNpbGllbmNlXCIsXG4gICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuICAgIFwiUHJvYWN0aWZcIlxuXTtcblxuY29uc3QgdGFiSGFyZFNraWxscz0gW1xuICAgIFwiSFRNTC9DU1NcIixcbiAgICBcIkNcIixcbiAgICBcIkMjXCIsXG4gICAgXCJDKytcIixcbiAgICBcIkNvYm9sXCIsXG4gICAgXCJHb1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgIFwiS290bGluXCIsXG4gICAgXCJNQVRMQUJcIixcbiAgICBcIk9iamVjdGl2ZS1DXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUlwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiUnVzdFwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuICAgIFwiU1FMXCIsXG4gICAgXCJTd2lmdFwiLFxuICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgIFwiVkIuTkVUXCJcbl07XG5cbmNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuICAgIFwiTGlua2VkSW5cIixcbiAgICBcIkZhY2Vib29rXCIsXG4gICAgXCJUd2l0dGVyXCIsXG4gICAgXCJJbnN0YWdyYW1cIixcbiAgICBcIllvdVR1YmVcIixcbiAgICBcIlBpbnRlcmVzdFwiLFxuICAgIFwiU25hcGNoYXRcIixcbiAgICBcIlRpa1Rva1wiLFxuICAgIFwiV2hhdHNBcHBcIixcbiAgICBcIlRlbGVncmFtXCIsXG4gICAgXCJSZWRkaXRcIixcbiAgICBcIlR1bWJsclwiLFxuICAgIFwiRmxpY2tyXCIsXG4gICAgXCJWaW1lb1wiLFxuICAgIFwiUXVvcmFcIixcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiQmVoYW5jZVwiLFxuICAgIFwiRHJpYmJibGVcIixcbiAgICBcIkdpdEh1YlwiXG5dO1xuXG5jb25zdCB0YWJMYW5ndWVzID0gW1xuICAgIFwiQW5nbGFpc1wiLFxuICAgIFwiRnJhbsOnYWlzXCIsXG4gICAgXCJFc3BhZ25vbFwiLFxuICAgIFwiQWxsZW1hbmRcIixcbiAgICBcIkNoaW5vaXNcIixcbiAgICBcIkFyYWJlXCIsXG4gICAgXCJSdXNzZVwiLFxuICAgIFwiUG9ydHVnYWlzXCIsXG4gICAgXCJKYXBvbmFpc1wiLFxuICAgIFwiSXRhbGllblwiLFxuICAgIFwiSGluZGlcIixcbiAgICBcIk7DqWVybGFuZGFpc1wiLFxuICAgIFwiQ29yw6llblwiLFxuICAgIFwiVHVyY1wiLFxuICAgIFwiU3XDqWRvaXNcIixcbiAgICBcIlBvbG9uYWlzXCIsXG4gICAgXCJEYW5vaXNcIixcbiAgICBcIk5vcnbDqWdpZW5cIixcbiAgICBcIkZpbm5vaXNcIlxuXTtcblxuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG4vLyBjb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG4vLyBjb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Blcm1pcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Blcm1pcycpO1xuLy8gY29uc3Qgc2VsZWN0X3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJtaXMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9yZXNlYXV4Jyk7XG4vLyBjb25zdCByZXNwb25zZV9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHNlbGVjdF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VhdXgnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2xhbmd1YWdlJyk7XG4vLyBjb25zdCBzZWxlY3RfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG4vLyBjb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcbi8vXG5idG5fYWRkX2Zvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dDEubmFtZT0gJ3NjaG9vbFtdJ1xuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb25bXSdcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0My5uYW1lPSAnZGlwbG9tZVtdJ1xuICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQ0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQ0Lm5hbWU9ICdzdGF0dXNbXSdcbiAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0NS5uYW1lPSAnZGlwX3N0YXJ0W10nXG4gICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmRbXSdcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDYpO1xuICAgIHJlc3BvbnNlX2Zvcm1hdGlvbi5hcHBlbmQoZGl2KTtcbn0pO1xuXG4vLyBidG5fYWRkX2V4cGVyaWVuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQxLm5hbWU9ICdleHBlcmllbmNlW10nXG4vLyAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDIudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDIubmFtZT0gJ2V4cF9sb2NhdGlvbltdJ1xuLy8gICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQzLm5hbWU9ICdwb3N0ZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ0LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ0Lm5hbWU9ICdleHBfc3RhcnRbXSdcbi8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NS5uYW1lPSAnZXhwX2VuZFtdJ1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbi8vICAgICByZXNwb25zZV9leHBlcmllbmNlLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9wZXJtaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Blcm1pc1tdJztcbi8vXG4vLyAgICAgdGFiUGVybWlzLmZvckVhY2goKHBlcm1pcykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGVybWlzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfcGVybWlzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9zb2Z0c2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdzb2Z0c2tpbGxzW10nO1xuLy9cbi8vICAgICB0YWJTb2Z0c2tpbGxzLmZvckVhY2goKHNza2lsbHMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNza2lsbHM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9zb2Z0c2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9oYXJkc2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdoYXJkc2tpbGxzW10nO1xuLy9cbi8vICAgICB0YWJIYXJkU2tpbGxzLmZvckVhY2goKGhza2lsbHMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGhza2lsbHM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9oYXJkc2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9yZXNlYXV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdyZXNlYXV4W10nO1xuLy9cbi8vICAgICB0YWJSZXNlYXV4U29jaWF1eC5mb3JFYWNoKChyZXNlYXUpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHJlc2VhdTtcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Jlc2VhdXguYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2xhbmd1YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdsYW5ndWFnZVtdJztcbi8vXG4vLyAgICAgdGFiTGFuZ3Vlcy5mb3JFYWNoKChsYW5ndWUpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhbmd1ZTtcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX2xhbmd1YWdlLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9ob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dC5uYW1lPSAnaG9iYmllc1tdJ1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuLy8gICAgIHJlc3BvbnNlX2hvYmJpZXMuYXBwZW5kKGRpdik7XG4vLyB9KTtcblxuLy8gb2sgZmluXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFkZEN2R2xvYmFsKCkge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGJvZHk6IHBhcmFtc1xuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXG4vLyB9XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdyZWNvcmRfY3YnKVxuYXN5bmMgZnVuY3Rpb24gIGFkZEN2R2xvYmFsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cblxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcbnRoZWZvcm11bGFpcmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbm9tJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vbScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwcmVub20nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbm9tJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FkcmVzc2UnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRyZXNzZScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsLWlucHV0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwtaW5wdXQnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgndGVsJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdiaXJ0aGRheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAncmVjb3JkX2N2JylcbiAgICBhZGRDdkdsb2JhbCgpO1xufSk7XG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjhhZDdiZDU2MDRjMWFiZWJhY2RcIikiXSwibmFtZXMiOlsidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQxIiwidHlwZSIsIm5hbWUiLCJpbnB1dDIiLCJpbnB1dDMiLCJpbnB1dDQiLCJpbnB1dDUiLCJpbnB1dDYiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYWRkQ3ZHbG9iYWwiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlZm9ybXVsYWlyZSIsImV2dCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==