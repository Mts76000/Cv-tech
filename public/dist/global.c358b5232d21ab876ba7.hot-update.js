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
  params.append('dip_location', document.querySelector('#dip_location').value);
  params.append('diplome', document.querySelector('#diplome').value);
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
/******/ 	__webpack_require__.h = () => ("b25e8e42b7177a68d020")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmMzNThiNTIzMmQyMWFiODc2YmE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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Q0FBQzs7Ozs7Ozs7VUMvVUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuXG5cbmNvbnN0IHRhYlBlcm1pcz0gW1xuICAgIFwiQTFcIixcbiAgICBcIkEyXCIsXG4gICAgXCJBXCIsXG4gICAgXCJCXCIsXG4gICAgXCJCRVwiLFxuICAgIFwiQzFcIixcbiAgICBcIkMxRVwiLFxuICAgIFwiQ1wiLFxuICAgIFwiQ0VcIixcbiAgICBcIkQxXCIsXG4gICAgXCJEMUVcIixcbiAgICBcIkRcIixcbiAgICBcIkRFXCIsXG4gICAgXCJQUExcIixcbiAgICBcIkNQTFwiLFxuICAgIFwiQVRQTFwiLFxuICAgIFwiVUxNXCJcbl07XG5cbmNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbiAgICBcIkNvbW11bmljYXRpb25cIixcbiAgICBcIkNvbGxhYm9yYXRpb25cIixcbiAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbiAgICBcIkFkYXB0YWJpbGl0w6lcIixcbiAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbiAgICBcIkNyw6lhdGl2aXTDqVwiLFxuICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuICAgIFwiTGVhZGVyc2hpcFwiLFxuICAgIFwiRW1wYXRoaWVcIixcbiAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbiAgICBcIlLDqXNpbGllbmNlXCIsXG4gICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuICAgIFwiUHJvYWN0aWZcIlxuXTtcblxuY29uc3QgdGFiSGFyZFNraWxscz0gW1xuICAgIFwiSFRNTC9DU1NcIixcbiAgICBcIkNcIixcbiAgICBcIkMjXCIsXG4gICAgXCJDKytcIixcbiAgICBcIkNvYm9sXCIsXG4gICAgXCJHb1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgIFwiS290bGluXCIsXG4gICAgXCJNQVRMQUJcIixcbiAgICBcIk9iamVjdGl2ZS1DXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUlwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiUnVzdFwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuICAgIFwiU1FMXCIsXG4gICAgXCJTd2lmdFwiLFxuICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgIFwiVkIuTkVUXCJcbl07XG5cbmNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuICAgIFwiTGlua2VkSW5cIixcbiAgICBcIkZhY2Vib29rXCIsXG4gICAgXCJUd2l0dGVyXCIsXG4gICAgXCJJbnN0YWdyYW1cIixcbiAgICBcIllvdVR1YmVcIixcbiAgICBcIlBpbnRlcmVzdFwiLFxuICAgIFwiU25hcGNoYXRcIixcbiAgICBcIlRpa1Rva1wiLFxuICAgIFwiV2hhdHNBcHBcIixcbiAgICBcIlRlbGVncmFtXCIsXG4gICAgXCJSZWRkaXRcIixcbiAgICBcIlR1bWJsclwiLFxuICAgIFwiRmxpY2tyXCIsXG4gICAgXCJWaW1lb1wiLFxuICAgIFwiUXVvcmFcIixcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiQmVoYW5jZVwiLFxuICAgIFwiRHJpYmJibGVcIixcbiAgICBcIkdpdEh1YlwiXG5dO1xuXG5jb25zdCB0YWJMYW5ndWVzID0gW1xuICAgIFwiQW5nbGFpc1wiLFxuICAgIFwiRnJhbsOnYWlzXCIsXG4gICAgXCJFc3BhZ25vbFwiLFxuICAgIFwiQWxsZW1hbmRcIixcbiAgICBcIkNoaW5vaXNcIixcbiAgICBcIkFyYWJlXCIsXG4gICAgXCJSdXNzZVwiLFxuICAgIFwiUG9ydHVnYWlzXCIsXG4gICAgXCJKYXBvbmFpc1wiLFxuICAgIFwiSXRhbGllblwiLFxuICAgIFwiSGluZGlcIixcbiAgICBcIk7DqWVybGFuZGFpc1wiLFxuICAgIFwiQ29yw6llblwiLFxuICAgIFwiVHVyY1wiLFxuICAgIFwiU3XDqWRvaXNcIixcbiAgICBcIlBvbG9uYWlzXCIsXG4gICAgXCJEYW5vaXNcIixcbiAgICBcIk5vcnbDqWdpZW5cIixcbiAgICBcIkZpbm5vaXNcIlxuXTtcblxuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG4vLyBjb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG4vLyBjb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Blcm1pcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Blcm1pcycpO1xuLy8gY29uc3Qgc2VsZWN0X3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJtaXMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9yZXNlYXV4Jyk7XG4vLyBjb25zdCByZXNwb25zZV9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHNlbGVjdF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VhdXgnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2xhbmd1YWdlJyk7XG4vLyBjb25zdCBzZWxlY3RfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG4vLyBjb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcbi8vXG4vLyBidG5fYWRkX2Zvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ3NjaG9vbFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAnZGlwbG9tZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQ0Lm5hbWU9ICdzdGF0dXNbXSdcbi8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NS5uYW1lPSAnZGlwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Nik7XG4vLyAgICAgcmVzcG9uc2VfZm9ybWF0aW9uLmFwcGVuZChkaXYpO1xuLy8gfSk7XG5cbi8vIGJ0bl9hZGRfZXhwZXJpZW5jZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ2V4cGVyaWVuY2VbXSdcbi8vICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Mi5uYW1lPSAnZXhwX2xvY2F0aW9uW10nXG4vLyAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDMudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDMubmFtZT0gJ3Bvc3RlW10nXG4vLyAgICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDQudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDQubmFtZT0gJ2V4cF9zdGFydFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ1Lm5hbWU9ICdleHBfZW5kW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuLy8gICAgIHJlc3BvbnNlX2V4cGVyaWVuY2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Blcm1pcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncGVybWlzW10nO1xuLy9cbi8vICAgICB0YWJQZXJtaXMuZm9yRWFjaCgocGVybWlzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwZXJtaXM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9wZXJtaXMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3NvZnRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3NvZnRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYlNvZnRza2lsbHMuZm9yRWFjaCgoc3NraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3NraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3NvZnRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hhcmRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2hhcmRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYkhhcmRTa2lsbHMuZm9yRWFjaCgoaHNraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaHNraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX2hhcmRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Jlc2VhdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Jlc2VhdXhbXSc7XG4vL1xuLy8gICAgIHRhYlJlc2VhdXhTb2NpYXV4LmZvckVhY2goKHJlc2VhdSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVzZWF1O1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfcmVzZWF1eC5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2xhbmd1YWdlW10nO1xuLy9cbi8vICAgICB0YWJMYW5ndWVzLmZvckVhY2goKGxhbmd1ZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFuZ3VlO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfbGFuZ3VhZ2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hvYmJpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Lm5hbWU9ICdob2JiaWVzW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4vLyAgICAgcmVzcG9uc2VfaG9iYmllcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuXG4vLyBvayBmaW5cblxuLy8gYXN5bmMgZnVuY3Rpb24gYWRkQ3ZHbG9iYWwoKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSlcbi8vIH1cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG5hc3luYyBmdW5jdGlvbiAgYWRkQ3ZHbG9iYWwoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxuXG5cbmNvbnN0IHRoZWZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlZm9ybXVsYWlyZScpO1xudGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdub20nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9tJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3ByZW5vbScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVub20nKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWRyZXNzZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZHJlc3NlJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ21haWwtaW5wdXQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbC1pbnB1dCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCd0ZWwnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2JpcnRoZGF5JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3NjaG9vbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hvb2wnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnZGlwX2xvY2F0aW9uJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcF9sb2NhdGlvbicpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdkaXBsb21lJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcGxvbWUnKS52YWx1ZSk7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgnc3RhdHVzJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXR1cycpLnZhbHVlKTtcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdkaXBfc3RhcnQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlwX3N0YXJ0JykudmFsdWUpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ2RpcF9lbmQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlwX2VuZCcpLnZhbHVlKTtcblxuICAgIGFkZEN2R2xvYmFsKCk7XG59KTtcblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMjVlOGU0MmI3MTc3YTY4ZDAyMFwiKSJdLCJuYW1lcyI6WyJ0YWJQZXJtaXMiLCJ0YWJTb2Z0c2tpbGxzIiwidGFiSGFyZFNraWxscyIsInRhYlJlc2VhdXhTb2NpYXV4IiwidGFiTGFuZ3VlcyIsImJ0bl9hZGRfZm9ybWF0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVzcG9uc2VfZm9ybWF0aW9uIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhZGRDdkdsb2JhbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aGVmb3JtdWxhaXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9