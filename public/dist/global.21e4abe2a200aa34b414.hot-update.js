self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/addcv.js":
/*!*******************************!*\
  !*** ./src/asset/js/addcv.js ***!
  \*******************************/
/***/ (() => {

// Tableaux d'options

//
//
// const tabPermis= [
//     "A1",
//     "A2",
//     "A",
//     "B",
//     "BE",
//     "C1",
//     "C1E",
//     "C",
//     "CE",
//     "D1",
//     "D1E",
//     "D",
//     "DE",
//     "PPL",
//     "CPL",
//     "ATPL",
//     "ULM"
// ];
//
// const tabSoftskills= [
//     "Communication",
//     "Collaboration",
//     "Esprit d'équipe",
//     "Adaptabilité",
//     "Résolution de problèmes",
//     "Créativité",
//     "Gestion du temps",
//     "Leadership",
//     "Empathie",
//     "Pensée critique",
//     "Résilience",
//     "Gestion du stress",
//     "Proactif"
// ];
//
// const tabHardSkills= [
//     "HTML/CSS",
//     "C",
//     "C#",
//     "C++",
//     "Cobol",
//     "Go",
//     "Java",
//     "JavaScript",
//     "Kotlin",
//     "MATLAB",
//     "Objective-C",
//     "Perl",
//     "PHP",
//     "Python",
//     "R",
//     "Ruby",
//     "Rust",
//     "Scala",
//     "Shell scripting",
//     "SQL",
//     "Swift",
//     "TypeScript",
//     "VB.NET"
// ];
//
// const tabReseauxSociaux = [
//     "LinkedIn",
//     "Facebook",
//     "Twitter",
//     "Instagram",
//     "YouTube",
//     "Pinterest",
//     "Snapchat",
//     "TikTok",
//     "WhatsApp",
//     "Telegram",
//     "Reddit",
//     "Tumblr",
//     "Flickr",
//     "Vimeo",
//     "Quora",
//     "Medium",
//     "Behance",
//     "Dribbble",
//     "GitHub"
// ];
//
// const tabLangues = [
//     "Anglais",
//     "Français",
//     "Espagnol",
//     "Allemand",
//     "Chinois",
//     "Arabe",
//     "Russe",
//     "Portugais",
//     "Japonais",
//     "Italien",
//     "Hindi",
//     "Néerlandais",
//     "Coréen",
//     "Turc",
//     "Suédois",
//     "Polonais",
//     "Danois",
//     "Norvégien",
//     "Finnois"
// ];
//
// const btn_add_formation = document.querySelector('#btn_add_formation');
// const response_formation = document.querySelector('#response_formation');
//
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
    let params = new FormData();
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
/******/ 	__webpack_require__.h = () => ("53b425fc8a4763a5e835")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjIxZTRhYmUyYTIwMGFhMzRiNDE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7QUFDcEMsZUFBZ0JDLFdBQVdBLENBQUEsRUFBRztFQUMxQixJQUFJO0lBQ0EsSUFBSUgsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLElBQUlHLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO01BQ3pDQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVUO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7SUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7RUFHckIsQ0FBQyxDQUFDLE9BQU9JLEtBQUssRUFBRTtJQUNaRixPQUFPLENBQUNFLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0FBQ0o7QUFHQSxNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzlERixhQUFhLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTQyxHQUFHLEVBQUU7RUFDbkRBLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDcEJqQixXQUFXLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUM7Ozs7Ozs7O1VDbFVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL2FkZGN2LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFibGVhdXggZCdvcHRpb25zXG5cbi8vXG4vL1xuLy8gY29uc3QgdGFiUGVybWlzPSBbXG4vLyAgICAgXCJBMVwiLFxuLy8gICAgIFwiQTJcIixcbi8vICAgICBcIkFcIixcbi8vICAgICBcIkJcIixcbi8vICAgICBcIkJFXCIsXG4vLyAgICAgXCJDMVwiLFxuLy8gICAgIFwiQzFFXCIsXG4vLyAgICAgXCJDXCIsXG4vLyAgICAgXCJDRVwiLFxuLy8gICAgIFwiRDFcIixcbi8vICAgICBcIkQxRVwiLFxuLy8gICAgIFwiRFwiLFxuLy8gICAgIFwiREVcIixcbi8vICAgICBcIlBQTFwiLFxuLy8gICAgIFwiQ1BMXCIsXG4vLyAgICAgXCJBVFBMXCIsXG4vLyAgICAgXCJVTE1cIlxuLy8gXTtcbi8vXG4vLyBjb25zdCB0YWJTb2Z0c2tpbGxzPSBbXG4vLyAgICAgXCJDb21tdW5pY2F0aW9uXCIsXG4vLyAgICAgXCJDb2xsYWJvcmF0aW9uXCIsXG4vLyAgICAgXCJFc3ByaXQgZCfDqXF1aXBlXCIsXG4vLyAgICAgXCJBZGFwdGFiaWxpdMOpXCIsXG4vLyAgICAgXCJSw6lzb2x1dGlvbiBkZSBwcm9ibMOobWVzXCIsXG4vLyAgICAgXCJDcsOpYXRpdml0w6lcIixcbi8vICAgICBcIkdlc3Rpb24gZHUgdGVtcHNcIixcbi8vICAgICBcIkxlYWRlcnNoaXBcIixcbi8vICAgICBcIkVtcGF0aGllXCIsXG4vLyAgICAgXCJQZW5zw6llIGNyaXRpcXVlXCIsXG4vLyAgICAgXCJSw6lzaWxpZW5jZVwiLFxuLy8gICAgIFwiR2VzdGlvbiBkdSBzdHJlc3NcIixcbi8vICAgICBcIlByb2FjdGlmXCJcbi8vIF07XG4vL1xuLy8gY29uc3QgdGFiSGFyZFNraWxscz0gW1xuLy8gICAgIFwiSFRNTC9DU1NcIixcbi8vICAgICBcIkNcIixcbi8vICAgICBcIkMjXCIsXG4vLyAgICAgXCJDKytcIixcbi8vICAgICBcIkNvYm9sXCIsXG4vLyAgICAgXCJHb1wiLFxuLy8gICAgIFwiSmF2YVwiLFxuLy8gICAgIFwiSmF2YVNjcmlwdFwiLFxuLy8gICAgIFwiS290bGluXCIsXG4vLyAgICAgXCJNQVRMQUJcIixcbi8vICAgICBcIk9iamVjdGl2ZS1DXCIsXG4vLyAgICAgXCJQZXJsXCIsXG4vLyAgICAgXCJQSFBcIixcbi8vICAgICBcIlB5dGhvblwiLFxuLy8gICAgIFwiUlwiLFxuLy8gICAgIFwiUnVieVwiLFxuLy8gICAgIFwiUnVzdFwiLFxuLy8gICAgIFwiU2NhbGFcIixcbi8vICAgICBcIlNoZWxsIHNjcmlwdGluZ1wiLFxuLy8gICAgIFwiU1FMXCIsXG4vLyAgICAgXCJTd2lmdFwiLFxuLy8gICAgIFwiVHlwZVNjcmlwdFwiLFxuLy8gICAgIFwiVkIuTkVUXCJcbi8vIF07XG4vL1xuLy8gY29uc3QgdGFiUmVzZWF1eFNvY2lhdXggPSBbXG4vLyAgICAgXCJMaW5rZWRJblwiLFxuLy8gICAgIFwiRmFjZWJvb2tcIixcbi8vICAgICBcIlR3aXR0ZXJcIixcbi8vICAgICBcIkluc3RhZ3JhbVwiLFxuLy8gICAgIFwiWW91VHViZVwiLFxuLy8gICAgIFwiUGludGVyZXN0XCIsXG4vLyAgICAgXCJTbmFwY2hhdFwiLFxuLy8gICAgIFwiVGlrVG9rXCIsXG4vLyAgICAgXCJXaGF0c0FwcFwiLFxuLy8gICAgIFwiVGVsZWdyYW1cIixcbi8vICAgICBcIlJlZGRpdFwiLFxuLy8gICAgIFwiVHVtYmxyXCIsXG4vLyAgICAgXCJGbGlja3JcIixcbi8vICAgICBcIlZpbWVvXCIsXG4vLyAgICAgXCJRdW9yYVwiLFxuLy8gICAgIFwiTWVkaXVtXCIsXG4vLyAgICAgXCJCZWhhbmNlXCIsXG4vLyAgICAgXCJEcmliYmJsZVwiLFxuLy8gICAgIFwiR2l0SHViXCJcbi8vIF07XG4vL1xuLy8gY29uc3QgdGFiTGFuZ3VlcyA9IFtcbi8vICAgICBcIkFuZ2xhaXNcIixcbi8vICAgICBcIkZyYW7Dp2Fpc1wiLFxuLy8gICAgIFwiRXNwYWdub2xcIixcbi8vICAgICBcIkFsbGVtYW5kXCIsXG4vLyAgICAgXCJDaGlub2lzXCIsXG4vLyAgICAgXCJBcmFiZVwiLFxuLy8gICAgIFwiUnVzc2VcIixcbi8vICAgICBcIlBvcnR1Z2Fpc1wiLFxuLy8gICAgIFwiSmFwb25haXNcIixcbi8vICAgICBcIkl0YWxpZW5cIixcbi8vICAgICBcIkhpbmRpXCIsXG4vLyAgICAgXCJOw6llcmxhbmRhaXNcIixcbi8vICAgICBcIkNvcsOpZW5cIixcbi8vICAgICBcIlR1cmNcIixcbi8vICAgICBcIlN1w6lkb2lzXCIsXG4vLyAgICAgXCJQb2xvbmFpc1wiLFxuLy8gICAgIFwiRGFub2lzXCIsXG4vLyAgICAgXCJOb3J2w6lnaWVuXCIsXG4vLyAgICAgXCJGaW5ub2lzXCJcbi8vIF07XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9mb3JtYXRpb24nKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9mb3JtYXRpb24nKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9leHBlcmllbmNlJyk7XG4vLyBjb25zdCByZXNwb25zZV9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2V4cGVyaWVuY2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Blcm1pcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Blcm1pcycpO1xuLy8gY29uc3Qgc2VsZWN0X3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJtaXMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3NvZnRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCByZXNwb25zZV9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hhcmRza2lsbHMnKTtcbi8vIGNvbnN0IHNlbGVjdF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhcmRza2lsbHMnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9yZXNlYXV4Jyk7XG4vLyBjb25zdCByZXNwb25zZV9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX3Jlc2VhdXgnKTtcbi8vIGNvbnN0IHNlbGVjdF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VhdXgnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfbGFuZ3VhZ2UnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2xhbmd1YWdlJyk7XG4vLyBjb25zdCBzZWxlY3RfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFuZ3VhZ2UnKTtcbi8vXG4vLyBjb25zdCBidG5fYWRkX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9ob2JiaWVzJyk7XG4vLyBjb25zdCByZXNwb25zZV9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2hvYmJpZXMnKTtcbi8vXG4vLyBidG5fYWRkX2Zvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ3NjaG9vbFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdkaXBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAnZGlwbG9tZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQ0Lm5hbWU9ICdzdGF0dXNbXSdcbi8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NS5uYW1lPSAnZGlwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDYudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDYubmFtZT0gJ2RpcF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Nik7XG4vLyAgICAgcmVzcG9uc2VfZm9ybWF0aW9uLmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9leHBlcmllbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0MS5uYW1lPSAnZXhwZXJpZW5jZVtdJ1xuLy8gICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQyLm5hbWU9ICdleHBfbG9jYXRpb25bXSdcbi8vICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0My50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0My5uYW1lPSAncG9zdGVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ2RhdGUnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnZXhwX3N0YXJ0W10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2V4cF9lbmRbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Mik7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0Myk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NCk7XG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0NSk7XG4vLyAgICAgcmVzcG9uc2VfZXhwZXJpZW5jZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcGVybWlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBzZWxlY3QubmFtZSA9ICdwZXJtaXNbXSc7XG4vL1xuLy8gICAgIHRhYlBlcm1pcy5mb3JFYWNoKChwZXJtaXMpID0+IHtcbi8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHBlcm1pcztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3Blcm1pcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfc29mdHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnc29mdHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiU29mdHNraWxscy5mb3JFYWNoKChzc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2Vfc29mdHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaGFyZHNraWxscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnaGFyZHNraWxsc1tdJztcbi8vXG4vLyAgICAgdGFiSGFyZFNraWxscy5mb3JFYWNoKChoc2tpbGxzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoc2tpbGxzO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfaGFyZHNraWxscy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfcmVzZWF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncmVzZWF1eFtdJztcbi8vXG4vLyAgICAgdGFiUmVzZWF1eFNvY2lhdXguZm9yRWFjaCgocmVzZWF1KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSByZXNlYXU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9yZXNlYXV4LmFwcGVuZChkaXYpO1xuLy8gfSk7XG4vL1xuLy8gYnRuX2FkZF9sYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAnbGFuZ3VhZ2VbXSc7XG4vL1xuLy8gICAgIHRhYkxhbmd1ZXMuZm9yRWFjaCgobGFuZ3VlKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYW5ndWU7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9sYW5ndWFnZS5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfaG9iYmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQubmFtZT0gJ2hvYmJpZXNbXSdcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbi8vICAgICByZXNwb25zZV9ob2JiaWVzLmFwcGVuZChkaXYpO1xuLy8gfSk7XG5cbi8vIG9rIGZpblxuXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAncmVjb3JkX2N2JylcbmFzeW5jIGZ1bmN0aW9uICBhZGRDdkdsb2JhbCgpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cblxuXG5jb25zdCB0aGVmb3JtdWxhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZWZvcm11bGFpcmUnKTtcbnRoZWZvcm11bGFpcmUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkQ3ZHbG9iYWwoKTtcbn0pO1xuXG5cblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUzYjQyNWZjOGE0NzYzYTVlODM1XCIpIl0sIm5hbWVzIjpbInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWRkQ3ZHbG9iYWwiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlZm9ybXVsYWlyZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=