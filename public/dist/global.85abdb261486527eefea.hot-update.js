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
  // params.append('nom', document.querySelector('#nom').value);
  addCvGlobal();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aef436276296d429c2ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjg1YWJkYjI2MTQ4NjUyN2VlZmVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7QUFDcEMsZUFBZ0JDLFdBQVdBLENBQUEsRUFBRztFQUMxQixJQUFJO0lBQ0EsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7TUFDekNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLElBQUksRUFBRVQ7SUFDVixDQUFDLENBQUM7SUFDRixJQUFJVSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztJQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztFQUdyQixDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLG1EQUFtRCxFQUFFQSxLQUFLLENBQUM7RUFDN0U7QUFDSjtBQUdBLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOURGLGFBQWEsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNDLEdBQUcsRUFBRTtFQUNuREEsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNwQjtFQUNBakIsV0FBVyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xVRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9hZGRjdi5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhYmxlYXV4IGQnb3B0aW9uc1xuXG4vL1xuLy9cbi8vIGNvbnN0IHRhYlBlcm1pcz0gW1xuLy8gICAgIFwiQTFcIixcbi8vICAgICBcIkEyXCIsXG4vLyAgICAgXCJBXCIsXG4vLyAgICAgXCJCXCIsXG4vLyAgICAgXCJCRVwiLFxuLy8gICAgIFwiQzFcIixcbi8vICAgICBcIkMxRVwiLFxuLy8gICAgIFwiQ1wiLFxuLy8gICAgIFwiQ0VcIixcbi8vICAgICBcIkQxXCIsXG4vLyAgICAgXCJEMUVcIixcbi8vICAgICBcIkRcIixcbi8vICAgICBcIkRFXCIsXG4vLyAgICAgXCJQUExcIixcbi8vICAgICBcIkNQTFwiLFxuLy8gICAgIFwiQVRQTFwiLFxuLy8gICAgIFwiVUxNXCJcbi8vIF07XG4vL1xuLy8gY29uc3QgdGFiU29mdHNraWxscz0gW1xuLy8gICAgIFwiQ29tbXVuaWNhdGlvblwiLFxuLy8gICAgIFwiQ29sbGFib3JhdGlvblwiLFxuLy8gICAgIFwiRXNwcml0IGQnw6lxdWlwZVwiLFxuLy8gICAgIFwiQWRhcHRhYmlsaXTDqVwiLFxuLy8gICAgIFwiUsOpc29sdXRpb24gZGUgcHJvYmzDqG1lc1wiLFxuLy8gICAgIFwiQ3LDqWF0aXZpdMOpXCIsXG4vLyAgICAgXCJHZXN0aW9uIGR1IHRlbXBzXCIsXG4vLyAgICAgXCJMZWFkZXJzaGlwXCIsXG4vLyAgICAgXCJFbXBhdGhpZVwiLFxuLy8gICAgIFwiUGVuc8OpZSBjcml0aXF1ZVwiLFxuLy8gICAgIFwiUsOpc2lsaWVuY2VcIixcbi8vICAgICBcIkdlc3Rpb24gZHUgc3RyZXNzXCIsXG4vLyAgICAgXCJQcm9hY3RpZlwiXG4vLyBdO1xuLy9cbi8vIGNvbnN0IHRhYkhhcmRTa2lsbHM9IFtcbi8vICAgICBcIkhUTUwvQ1NTXCIsXG4vLyAgICAgXCJDXCIsXG4vLyAgICAgXCJDI1wiLFxuLy8gICAgIFwiQysrXCIsXG4vLyAgICAgXCJDb2JvbFwiLFxuLy8gICAgIFwiR29cIixcbi8vICAgICBcIkphdmFcIixcbi8vICAgICBcIkphdmFTY3JpcHRcIixcbi8vICAgICBcIktvdGxpblwiLFxuLy8gICAgIFwiTUFUTEFCXCIsXG4vLyAgICAgXCJPYmplY3RpdmUtQ1wiLFxuLy8gICAgIFwiUGVybFwiLFxuLy8gICAgIFwiUEhQXCIsXG4vLyAgICAgXCJQeXRob25cIixcbi8vICAgICBcIlJcIixcbi8vICAgICBcIlJ1YnlcIixcbi8vICAgICBcIlJ1c3RcIixcbi8vICAgICBcIlNjYWxhXCIsXG4vLyAgICAgXCJTaGVsbCBzY3JpcHRpbmdcIixcbi8vICAgICBcIlNRTFwiLFxuLy8gICAgIFwiU3dpZnRcIixcbi8vICAgICBcIlR5cGVTY3JpcHRcIixcbi8vICAgICBcIlZCLk5FVFwiXG4vLyBdO1xuLy9cbi8vIGNvbnN0IHRhYlJlc2VhdXhTb2NpYXV4ID0gW1xuLy8gICAgIFwiTGlua2VkSW5cIixcbi8vICAgICBcIkZhY2Vib29rXCIsXG4vLyAgICAgXCJUd2l0dGVyXCIsXG4vLyAgICAgXCJJbnN0YWdyYW1cIixcbi8vICAgICBcIllvdVR1YmVcIixcbi8vICAgICBcIlBpbnRlcmVzdFwiLFxuLy8gICAgIFwiU25hcGNoYXRcIixcbi8vICAgICBcIlRpa1Rva1wiLFxuLy8gICAgIFwiV2hhdHNBcHBcIixcbi8vICAgICBcIlRlbGVncmFtXCIsXG4vLyAgICAgXCJSZWRkaXRcIixcbi8vICAgICBcIlR1bWJsclwiLFxuLy8gICAgIFwiRmxpY2tyXCIsXG4vLyAgICAgXCJWaW1lb1wiLFxuLy8gICAgIFwiUXVvcmFcIixcbi8vICAgICBcIk1lZGl1bVwiLFxuLy8gICAgIFwiQmVoYW5jZVwiLFxuLy8gICAgIFwiRHJpYmJibGVcIixcbi8vICAgICBcIkdpdEh1YlwiXG4vLyBdO1xuLy9cbi8vIGNvbnN0IHRhYkxhbmd1ZXMgPSBbXG4vLyAgICAgXCJBbmdsYWlzXCIsXG4vLyAgICAgXCJGcmFuw6dhaXNcIixcbi8vICAgICBcIkVzcGFnbm9sXCIsXG4vLyAgICAgXCJBbGxlbWFuZFwiLFxuLy8gICAgIFwiQ2hpbm9pc1wiLFxuLy8gICAgIFwiQXJhYmVcIixcbi8vICAgICBcIlJ1c3NlXCIsXG4vLyAgICAgXCJQb3J0dWdhaXNcIixcbi8vICAgICBcIkphcG9uYWlzXCIsXG4vLyAgICAgXCJJdGFsaWVuXCIsXG4vLyAgICAgXCJIaW5kaVwiLFxuLy8gICAgIFwiTsOpZXJsYW5kYWlzXCIsXG4vLyAgICAgXCJDb3LDqWVuXCIsXG4vLyAgICAgXCJUdXJjXCIsXG4vLyAgICAgXCJTdcOpZG9pc1wiLFxuLy8gICAgIFwiUG9sb25haXNcIixcbi8vICAgICBcIkRhbm9pc1wiLFxuLy8gICAgIFwiTm9ydsOpZ2llblwiLFxuLy8gICAgIFwiRmlubm9pc1wiXG4vLyBdO1xuLy9cbi8vIGNvbnN0IGJ0bl9hZGRfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZm9ybWF0aW9uJyk7XG4vLyBjb25zdCByZXNwb25zZV9mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZm9ybWF0aW9uJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9leHBlcmllbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfZXhwZXJpZW5jZScpO1xuLy8gY29uc3QgcmVzcG9uc2VfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9leHBlcmllbmNlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9wZXJtaXMnKTtcbi8vIGNvbnN0IHJlc3BvbnNlX3Blcm1pcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9wZXJtaXMnKTtcbi8vIGNvbnN0IHNlbGVjdF9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVybWlzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9zb2Z0c2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfc29mdHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2Vfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9zb2Z0c2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3Rfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0c2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9oYXJkc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaGFyZHNraWxscycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9oYXJkc2tpbGxzJyk7XG4vLyBjb25zdCBzZWxlY3RfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYXJkc2tpbGxzJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9yZXNlYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcmVzZWF1eCcpO1xuLy8gY29uc3QgcmVzcG9uc2VfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9yZXNlYXV4Jyk7XG4vLyBjb25zdCBzZWxlY3RfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlYXV4Jyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2xhbmd1YWdlJyk7XG4vLyBjb25zdCByZXNwb25zZV9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9sYW5ndWFnZScpO1xuLy8gY29uc3Qgc2VsZWN0X2xhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhbmd1YWdlJyk7XG4vL1xuLy8gY29uc3QgYnRuX2FkZF9ob2JiaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfaG9iYmllcycpO1xuLy8gY29uc3QgcmVzcG9uc2VfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNwb25zZV9ob2JiaWVzJyk7XG4vL1xuLy8gYnRuX2FkZF9mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4vLyAgICAgaW5wdXQxLm5hbWU9ICdzY2hvb2xbXSdcbi8vICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Mi5uYW1lPSAnZGlwX2xvY2F0aW9uW10nXG4vLyAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDMudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDMubmFtZT0gJ2RpcGxvbWVbXSdcbi8vICAgICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0NC50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0NC5uYW1lPSAnc3RhdHVzW10nXG4vLyAgICAgY29uc3QgaW5wdXQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDUudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDUubmFtZT0gJ2RpcF9zdGFydFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ2LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ2Lm5hbWU9ICdkaXBfZW5kW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDYpO1xuLy8gICAgIHJlc3BvbnNlX2Zvcm1hdGlvbi5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfZXhwZXJpZW5jZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDEudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDEubmFtZT0gJ2V4cGVyaWVuY2VbXSdcbi8vICAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Mi5uYW1lPSAnZXhwX2xvY2F0aW9uW10nXG4vLyAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDMudHlwZSA9ICd0ZXh0Jztcbi8vICAgICBpbnB1dDMubmFtZT0gJ3Bvc3RlW10nXG4vLyAgICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dDQudHlwZSA9ICdkYXRlJztcbi8vICAgICBpbnB1dDQubmFtZT0gJ2V4cF9zdGFydFtdJ1xuLy8gICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAgICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4vLyAgICAgaW5wdXQ1Lm5hbWU9ICdleHBfZW5kW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDMpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDQpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dDUpO1xuLy8gICAgIHJlc3BvbnNlX2V4cGVyaWVuY2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Blcm1pcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4vLyAgICAgc2VsZWN0Lm5hbWUgPSAncGVybWlzW10nO1xuLy9cbi8vICAgICB0YWJQZXJtaXMuZm9yRWFjaCgocGVybWlzKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwZXJtaXM7XG4vLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vICAgICByZXNwb25zZV9wZXJtaXMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3NvZnRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3NvZnRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYlNvZnRza2lsbHMuZm9yRWFjaCgoc3NraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3NraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX3NvZnRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hhcmRza2lsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2hhcmRza2lsbHNbXSc7XG4vL1xuLy8gICAgIHRhYkhhcmRTa2lsbHMuZm9yRWFjaCgoaHNraWxscykgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaHNraWxscztcbi8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gICAgIHJlc3BvbnNlX2hhcmRza2lsbHMuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX3Jlc2VhdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Jlc2VhdXhbXSc7XG4vL1xuLy8gICAgIHRhYlJlc2VhdXhTb2NpYXV4LmZvckVhY2goKHJlc2VhdSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcmVzZWF1O1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfcmVzZWF1eC5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuLy9cbi8vIGJ0bl9hZGRfbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gICAgIHNlbGVjdC5uYW1lID0gJ2xhbmd1YWdlW10nO1xuLy9cbi8vICAgICB0YWJMYW5ndWVzLmZvckVhY2goKGxhbmd1ZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGFuZ3VlO1xuLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vICAgICB9KTtcbi8vXG4vLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAgICAgcmVzcG9uc2VfbGFuZ3VhZ2UuYXBwZW5kKGRpdik7XG4vLyB9KTtcbi8vXG4vLyBidG5fYWRkX2hvYmJpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuLy8gICAgIGlucHV0Lm5hbWU9ICdob2JiaWVzW10nXG4vL1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4vLyAgICAgcmVzcG9uc2VfaG9iYmllcy5hcHBlbmQoZGl2KTtcbi8vIH0pO1xuXG4vLyBvayBmaW5cblxuLy8gYXN5bmMgZnVuY3Rpb24gYWRkQ3ZHbG9iYWwoKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIE1ZU0NSSVBULmFqYXhVcmwse1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSlcbi8vIH1cblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xucGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG5hc3luYyBmdW5jdGlvbiAgYWRkQ3ZHbG9iYWwoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxuXG5cbmNvbnN0IHRoZWZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlZm9ybXVsYWlyZScpO1xudGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwYXJhbXMuYXBwZW5kKCdub20nLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9tJykudmFsdWUpO1xuICAgIGFkZEN2R2xvYmFsKCk7XG59KTtcblxuXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZWY0MzYyNzYyOTZkNDI5YzJiYVwiKSJdLCJuYW1lcyI6WyJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFkZEN2R2xvYmFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRoZWZvcm11bGFpcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9