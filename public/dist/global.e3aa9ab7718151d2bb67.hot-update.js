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
/******/ 	__webpack_require__.h = () => ("c358b5232d21ab876ba7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmUzYWE5YWI3NzE4MTUxZDJiYjY3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUUsQ0FDYixJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxDQUNSO0FBRUQsTUFBTUMsYUFBYSxHQUFFLENBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osbUJBQW1CLEVBQ25CLFVBQVUsQ0FDYjtBQUVELE1BQU1DLGFBQWEsR0FBRSxDQUNqQixVQUFVLEVBQ1YsR0FBRyxFQUNILElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixRQUFRLEVBQ1IsYUFBYSxFQUNiLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsRUFDSCxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxpQkFBaUIsRUFDakIsS0FBSyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxDQUNYO0FBRUQsTUFBTUMsaUJBQWlCLEdBQUcsQ0FDdEIsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxDQUNYO0FBRUQsTUFBTUMsVUFBVSxHQUFHLENBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFdBQVcsRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsU0FBUyxDQUNaO0FBR0QsTUFBTUMsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ3RFLE1BQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJRSxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7QUFDcEMsZUFBZ0JDLFdBQVdBLENBQUEsRUFBRztFQUMxQixJQUFJO0lBQ0EsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7TUFDekNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElBQUksRUFBRVQ7SUFDVixDQUFDLENBQUM7SUFDRixJQUFJVSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztJQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztFQUdyQixDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLG1EQUFtRCxFQUFFQSxLQUFLLENBQUM7RUFDN0U7QUFDSjtBQUdBLE1BQU1DLGFBQWEsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzlEaUIsYUFBYSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0VBQ25EQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3BCbEIsTUFBTSxDQUFDRSxNQUFNLENBQUMsS0FBSyxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUMxRG5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDaEVuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxTQUFTLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQ2xFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUN4RW5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDMURuQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDcUIsS0FBSyxDQUFDO0VBQ3BFbkIsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQztFQUNoRW5CLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsRUFBRUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNxQixLQUFLLENBQUM7RUFDNUU7RUFDQTtFQUNBO0VBQ0E7O0VBRUFoQixXQUFXLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7Ozs7Ozs7O1VDL1VGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL2FkZGN2LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFibGVhdXggZCdvcHRpb25zXG5cblxuXG5jb25zdCB0YWJQZXJtaXM9IFtcbiAgICBcIkExXCIsXG4gICAgXCJBMlwiLFxuICAgIFwiQVwiLFxuICAgIFwiQlwiLFxuICAgIFwiQkVcIixcbiAgICBcIkMxXCIsXG4gICAgXCJDMUVcIixcbiAgICBcIkNcIixcbiAgICBcIkNFXCIsXG4gICAgXCJEMVwiLFxuICAgIFwiRDFFXCIsXG4gICAgXCJEXCIsXG4gICAgXCJERVwiLFxuICAgIFwiUFBMXCIsXG4gICAgXCJDUExcIixcbiAgICBcIkFUUExcIixcbiAgICBcIlVMTVwiXG5dO1xuXG5jb25zdCB0YWJTb2Z0c2tpbGxzPSBbXG4gICAgXCJDb21tdW5pY2F0aW9uXCIsXG4gICAgXCJDb2xsYWJvcmF0aW9uXCIsXG4gICAgXCJFc3ByaXQgZCfDqXF1aXBlXCIsXG4gICAgXCJBZGFwdGFiaWxpdMOpXCIsXG4gICAgXCJSw6lzb2x1dGlvbiBkZSBwcm9ibMOobWVzXCIsXG4gICAgXCJDcsOpYXRpdml0w6lcIixcbiAgICBcIkdlc3Rpb24gZHUgdGVtcHNcIixcbiAgICBcIkxlYWRlcnNoaXBcIixcbiAgICBcIkVtcGF0aGllXCIsXG4gICAgXCJQZW5zw6llIGNyaXRpcXVlXCIsXG4gICAgXCJSw6lzaWxpZW5jZVwiLFxuICAgIFwiR2VzdGlvbiBkdSBzdHJlc3NcIixcbiAgICBcIlByb2FjdGlmXCJcbl07XG5cbmNvbnN0IHRhYkhhcmRTa2lsbHM9IFtcbiAgICBcIkhUTUwvQ1NTXCIsXG4gICAgXCJDXCIsXG4gICAgXCJDI1wiLFxuICAgIFwiQysrXCIsXG4gICAgXCJDb2JvbFwiLFxuICAgIFwiR29cIixcbiAgICBcIkphdmFcIixcbiAgICBcIkphdmFTY3JpcHRcIixcbiAgICBcIktvdGxpblwiLFxuICAgIFwiTUFUTEFCXCIsXG4gICAgXCJPYmplY3RpdmUtQ1wiLFxuICAgIFwiUGVybFwiLFxuICAgIFwiUEhQXCIsXG4gICAgXCJQeXRob25cIixcbiAgICBcIlJcIixcbiAgICBcIlJ1YnlcIixcbiAgICBcIlJ1c3RcIixcbiAgICBcIlNjYWxhXCIsXG4gICAgXCJTaGVsbCBzY3JpcHRpbmdcIixcbiAgICBcIlNRTFwiLFxuICAgIFwiU3dpZnRcIixcbiAgICBcIlR5cGVTY3JpcHRcIixcbiAgICBcIlZCLk5FVFwiXG5dO1xuXG5jb25zdCB0YWJSZXNlYXV4U29jaWF1eCA9IFtcbiAgICBcIkxpbmtlZEluXCIsXG4gICAgXCJGYWNlYm9va1wiLFxuICAgIFwiVHdpdHRlclwiLFxuICAgIFwiSW5zdGFncmFtXCIsXG4gICAgXCJZb3VUdWJlXCIsXG4gICAgXCJQaW50ZXJlc3RcIixcbiAgICBcIlNuYXBjaGF0XCIsXG4gICAgXCJUaWtUb2tcIixcbiAgICBcIldoYXRzQXBwXCIsXG4gICAgXCJUZWxlZ3JhbVwiLFxuICAgIFwiUmVkZGl0XCIsXG4gICAgXCJUdW1ibHJcIixcbiAgICBcIkZsaWNrclwiLFxuICAgIFwiVmltZW9cIixcbiAgICBcIlF1b3JhXCIsXG4gICAgXCJNZWRpdW1cIixcbiAgICBcIkJlaGFuY2VcIixcbiAgICBcIkRyaWJiYmxlXCIsXG4gICAgXCJHaXRIdWJcIlxuXTtcblxuY29uc3QgdGFiTGFuZ3VlcyA9IFtcbiAgICBcIkFuZ2xhaXNcIixcbiAgICBcIkZyYW7Dp2Fpc1wiLFxuICAgIFwiRXNwYWdub2xcIixcbiAgICBcIkFsbGVtYW5kXCIsXG4gICAgXCJDaGlub2lzXCIsXG4gICAgXCJBcmFiZVwiLFxuICAgIFwiUnVzc2VcIixcbiAgICBcIlBvcnR1Z2Fpc1wiLFxuICAgIFwiSmFwb25haXNcIixcbiAgICBcIkl0YWxpZW5cIixcbiAgICBcIkhpbmRpXCIsXG4gICAgXCJOw6llcmxhbmRhaXNcIixcbiAgICBcIkNvcsOpZW5cIixcbiAgICBcIlR1cmNcIixcbiAgICBcIlN1w6lkb2lzXCIsXG4gICAgXCJQb2xvbmFpc1wiLFxuICAgIFwiRGFub2lzXCIsXG4gICAgXCJOb3J2w6lnaWVuXCIsXG4gICAgXCJGaW5ub2lzXCJcbl07XG5cblxuY29uc3QgYnRuX2FkZF9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9mb3JtYXRpb24nKTtcbmNvbnN0IHJlc3BvbnNlX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9mb3JtYXRpb24nKTtcblxuLy8gY29uc3QgYnRuX2FkZF9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZXhwZXJpZW5jZScpO1xuLy8gY29uc3QgcmVzcG9uc2VfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9leHBlcmllbmNlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbi8vIGNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfc29mdHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2Vfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3Rfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0c2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaGFyZHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3RfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYXJkc2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuLy8gY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG4vLyBjb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2xhbmd1YWdlJyk7XG4vLyBjb25zdCByZXNwb25zZV9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9sYW5ndWFnZScpO1xuLy8gY29uc3Qgc2VsZWN0X2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmd1YWdlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaG9iYmllcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9ob2JiaWVzJyk7XG4vL1xuLy8gYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQxLm5hbWU9ICdzY2hvb2xbXSdcbi8vICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Mi5uYW1lPSAnZGlwX2xvY2F0aW9uW10nXG4vLyAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDMudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDMubmFtZT0gJ2RpcGxvbWVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnc3RhdHVzW10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ2LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ2Lm5hbWU9ICdkaXBfZW5kW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDYpO1xuLy8gICAgIHJlc3BvbnNlX2Zvcm1hdGlvbi5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuXG4vLyBidG5fYWRkX2V4cGVyaWVuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQxLm5hbWU9ICdleHBlcmllbmNlW10nXG4vLyAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDIudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDIubmFtZT0gJ2V4cF9sb2NhdGlvbltdJ1xuLy8gICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQzLm5hbWU9ICdwb3N0ZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ0LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ0Lm5hbWU9ICdleHBfc3RhcnRbXSdcbi8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NS5uYW1lPSAnZXhwX2VuZFtdJ1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbi8vICAgICByZXNwb25zZV9leHBlcmllbmNlLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9wZXJtaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Blcm1pc1tdJztcbi8vXG4vLyAgICAgdGFiUGVybWlzLmZvckVhY2goKHBlcm1pcykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGVybWlzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfcGVybWlzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9zb2Z0c2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdzb2Z0c2tpbGxzW10nO1xuLy9cbi8vICAgICB0YWJTb2Z0c2tpbGxzLmZvckVhY2goKHNza2lsbHMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNza2lsbHM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9zb2Z0c2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9oYXJkc2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdoYXJkc2tpbGxzW10nO1xuLy9cbi8vICAgICB0YWJIYXJkU2tpbGxzLmZvckVhY2goKGhza2lsbHMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGhza2lsbHM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9oYXJkc2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9yZXNlYXV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdyZXNlYXV4W10nO1xuLy9cbi8vICAgICB0YWJSZXNlYXV4U29jaWF1eC5mb3JFYWNoKChyZXNlYXUpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHJlc2VhdTtcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Jlc2VhdXguYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2xhbmd1YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdsYW5ndWFnZVtdJztcbi8vXG4vLyAgICAgdGFiTGFuZ3Vlcy5mb3JFYWNoKChsYW5ndWUpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhbmd1ZTtcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX2xhbmd1YWdlLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9ob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dC5uYW1lPSAnaG9iYmllc1tdJ1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuLy8gICAgIHJlc3BvbnNlX2hvYmJpZXMuYXBwZW5kKGRpdik7XG4vLyB9KTtcblxuLy8gb2sgZmluXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFkZEN2R2xvYmFsKCkge1xuLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBNWVNDUklQVC5hamF4VXJsLHtcbi8vICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgICAgIGJvZHk6IHBhcmFtc1xuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXG4vLyB9XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdyZWNvcmRfY3YnKVxuYXN5bmMgZnVuY3Rpb24gIGFkZEN2R2xvYmFsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cblxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcbnRoZWZvcm11bGFpcmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFyYW1zLmFwcGVuZCgnbm9tJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vbScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdwcmVub20nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbm9tJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2FkcmVzc2UnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRyZXNzZScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsLWlucHV0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwtaW5wdXQnKS52YWx1ZSk7XG4gICAgcGFyYW1zLmFwcGVuZCgndGVsJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbCcpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdiaXJ0aGRheScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheScpLnZhbHVlKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdzY2hvb2wnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nob29sJykudmFsdWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ2RpcF9sb2NhdGlvbicsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXBfbG9jYXRpb24nKS52YWx1ZSk7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgnZGlwbG9tZScsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXBsb21lJykudmFsdWUpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ3N0YXR1cycsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0dXMnKS52YWx1ZSk7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgnZGlwX3N0YXJ0JywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcF9zdGFydCcpLnZhbHVlKTtcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdkaXBfZW5kJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpcF9lbmQnKS52YWx1ZSk7XG5cbiAgICBhZGRDdkdsb2JhbCgpO1xufSk7XG5cblxuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzM1OGI1MjMyZDIxYWI4NzZiYTdcIikiXSwibmFtZXMiOlsidGFiUGVybWlzIiwidGFiU29mdHNraWxscyIsInRhYkhhcmRTa2lsbHMiLCJ0YWJSZXNlYXV4U29jaWF1eCIsInRhYkxhbmd1ZXMiLCJidG5fYWRkX2Zvcm1hdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc3BvbnNlX2Zvcm1hdGlvbiIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWRkQ3ZHbG9iYWwiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlZm9ybXVsYWlyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==