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
//
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
/******/ 	__webpack_require__.h = () => ("58355b3fccdb3cf4832b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjg4MTI0Zjc3ZDU4YTljN2E0Nzc2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFB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QUMsUUFBUSxFQUFFLFVBQVNDLEdBQUcsRUFBRTtFQUNuREEsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNwQmxCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDMURuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQ2hFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsU0FBUyxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUNsRW5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFlBQVksRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDeEVuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxLQUFLLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQzFEbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUNwRWhCLFdBQVcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4VUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvYWRkY3YuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUYWJsZWF1eCBkJ29wdGlvbnNcblxuXG5cbmNvbnN0IHRhYlBlcm1pcz0gW1xuICAgIFwiQTFcIixcbiAgICBcIkEyXCIsXG4gICAgXCJBXCIsXG4gICAgXCJCXCIsXG4gICAgXCJCRVwiLFxuICAgIFwiQzFcIixcbiAgICBcIkMxRVwiLFxuICAgIFwiQ1wiLFxuICAgIFwiQ0VcIixcbiAgICBcIkQxXCIsXG4gICAgXCJEMUVcIixcbiAgICBcIkRcIixcbiAgICBcIkRFXCIsXG4gICAgXCJQUExcIixcbiAgICBcIkNQTFwiLFxuICAgIFwiQVRQTFwiLFxuICAgIFwiVUxNXCJcbl07XG5cbmNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbiAgICBcIkNvbW11bmljYXRpb25cIixcbiAgICBcIkNvbGxhYm9yYXRpb25cIixcbiAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbiAgICBcIkFkYXB0YWJpbGl0w6lcIixcbiAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbiAgICBcIkNyw6lhdGl2aXTDqVwiLFxuICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuICAgIFwiTGVhZGVyc2hpcFwiLFxuICAgIFwiRW1wYXRoaWVcIixcbiAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbiAgICBcIlLDqXNpbGllbmNlXCIsXG4gICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuICAgIFwiUHJvYWN0aWZcIlxuXTtcblxuY29uc3QgdGFiSGFyZFNraWxscz0gW1xuICAgIFwiSFRNTC9DU1NcIixcbiAgICBcIkNcIixcbiAgICBcIkMjXCIsXG4gICAgXCJDKytcIixcbiAgICBcIkNvYm9sXCIsXG4gICAgXCJHb1wiLFxuICAgIFwiSmF2YVwiLFxuICAgIFwiSmF2YVNjcmlwdFwiLFxuICAgIFwiS290bGluXCIsXG4gICAgXCJNQVRMQUJcIixcbiAgICBcIk9iamVjdGl2ZS1DXCIsXG4gICAgXCJQZXJsXCIsXG4gICAgXCJQSFBcIixcbiAgICBcIlB5dGhvblwiLFxuICAgIFwiUlwiLFxuICAgIFwiUnVieVwiLFxuICAgIFwiUnVzdFwiLFxuICAgIFwiU2NhbGFcIixcbiAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuICAgIFwiU1FMXCIsXG4gICAgXCJTd2lmdFwiLFxuICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgIFwiVkIuTkVUXCJcbl07XG5cbmNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuICAgIFwiTGlua2VkSW5cIixcbiAgICBcIkZhY2Vib29rXCIsXG4gICAgXCJUd2l0dGVyXCIsXG4gICAgXCJJbnN0YWdyYW1cIixcbiAgICBcIllvdVR1YmVcIixcbiAgICBcIlBpbnRlcmVzdFwiLFxuICAgIFwiU25hcGNoYXRcIixcbiAgICBcIlRpa1Rva1wiLFxuICAgIFwiV2hhdHNBcHBcIixcbiAgICBcIlRlbGVncmFtXCIsXG4gICAgXCJSZWRkaXRcIixcbiAgICBcIlR1bWJsclwiLFxuICAgIFwiRmxpY2tyXCIsXG4gICAgXCJWaW1lb1wiLFxuICAgIFwiUXVvcmFcIixcbiAgICBcIk1lZGl1bVwiLFxuICAgIFwiQmVoYW5jZVwiLFxuICAgIFwiRHJpYmJibGVcIixcbiAgICBcIkdpdEh1YlwiXG5dO1xuXG5jb25zdCB0YWJMYW5ndWVzID0gW1xuICAgIFwiQW5nbGFpc1wiLFxuICAgIFwiRnJhbsOnYWlzXCIsXG4gICAgXCJFc3BhZ25vbFwiLFxuICAgIFwiQWxsZW1hbmRcIixcbiAgICBcIkNoaW5vaXNcIixcbiAgICBcIkFyYWJlXCIsXG4gICAgXCJSdXNzZVwiLFxuICAgIFwiUG9ydHVnYWlzXCIsXG4gICAgXCJKYXBvbmFpc1wiLFxuICAgIFwiSXRhbGllblwiLFxuICAgIFwiSGluZGlcIixcbiAgICBcIk7DqWVybGFuZGFpc1wiLFxuICAgIFwiQ29yw6llblwiLFxuICAgIFwiVHVyY1wiLFxuICAgIFwiU3XDqWRvaXNcIixcbiAgICBcIlBvbG9uYWlzXCIsXG4gICAgXCJEYW5vaXNcIixcbiAgICBcIk5vcnbDqWdpZW5cIixcbiAgICBcIkZpbm5vaXNcIlxuXTtcblxuXG5jb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuXG4vLyBjb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG4vLyBjb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Blcm1pcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Blcm1pcycpO1xuLy8gY29uc3Qgc2VsZWN0X3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJtaXMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9yZXNlYXV4Jyk7XG4vLyBjb25zdCByZXNwb25zZV9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHNlbGVjdF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VhdXgnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2xhbmd1YWdlJyk7XG4vLyBjb25zdCBzZWxlY3RfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG4vLyBjb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcbi8vXG4vLyBidG5fYWRkX2Zvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ3NjaG9vbFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAnZGlwbG9tZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQ0Lm5hbWU9ICdzdGF0dXNbXSdcbi8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NS5uYW1lPSAnZGlwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Nik7XG4vLyAgICAgcmVzcG9uc2VfZm9ybWF0aW9uLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcGVybWlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdwZXJtaXNbXSc7XG4vL1xuLy8gICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfc29mdHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnc29mdHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaGFyZHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnaGFyZHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcmVzZWF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncmVzZWF1eFtdJztcbi8vXG4vLyAgICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9sYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnbGFuZ3VhZ2VbXSc7XG4vL1xuLy8gICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaG9iYmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQubmFtZT0gJ2hvYmJpZXNbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbi8vICAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG5cbi8vIG9rIGZpblxuXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAncmVjb3JkX2N2JylcbmFzeW5jIGZ1bmN0aW9uICBhZGRDdkdsb2JhbCgpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb252ZXJzaW9uIGRlIGxhIHLDqXBvbnNlIEpTT04gOicsIGVycm9yKTtcbiAgICB9XG59XG5cblxuY29uc3QgdGhlZm9ybXVsYWlyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVmb3JtdWxhaXJlJyk7XG50aGVmb3JtdWxhaXJlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ25vbScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub20nKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgncHJlbm9tJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZW5vbScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdhZHJlc3NlJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkcmVzc2UnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbC1pbnB1dCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsLWlucHV0JykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3RlbCcsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgnYmlydGhkYXknLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXknKS52YWx1ZSk7XG4gICAgYWRkQ3ZHbG9iYWwoKTtcbn0pO1xuXG5cblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU4MzU1YjNmY2NkYjNjZjQ4MzJiXCIpIl0sIm5hbWVzIjpbInRhYlBlcm1pcyIsInRhYlNvZnRza2lsbHMiLCJ0YWJIYXJkU2tpbGxzIiwidGFiUmVzZWF1eFNvY2lhdXgiLCJ0YWJMYW5ndWVzIiwiYnRuX2FkZF9mb3JtYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNwb25zZV9mb3JtYXRpb24iLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFkZEN2R2xvYmFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRoZWZvcm11bGFpcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=