self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/addcv.js":
/*!*******************************!*\
  !*** ./src/asset/js/addcv.js ***!
  \*******************************/
/***/ (() => {

// // // Tableaux d'options
// //
// //
// //
// // const tabPermis= [
// //     "A1",
// //     "A2",
// //     "A",
// //     "B",
// //     "BE",
// //     "C1",
// //     "C1E",
// //     "C",
// //     "CE",
// //     "D1",
// //     "D1E",
// //     "D",
// //     "DE",
// //     "PPL",
// //     "CPL",
// //     "ATPL",
// //     "ULM"
// // ];
// //
// // const tabSoftskills= [
// //     "Communication",
// //     "Collaboration",
// //     "Esprit d'équipe",
// //     "Adaptabilité",
// //     "Résolution de problèmes",
// //     "Créativité",
// //     "Gestion du temps",
// //     "Leadership",
// //     "Empathie",
// //     "Pensée critique",
// //     "Résilience",
// //     "Gestion du stress",
// //     "Proactif"
// // ];
// //
// // const tabHardSkills= [
// //     "HTML/CSS",
// //     "C",
// //     "C#",
// //     "C++",
// //     "Cobol",
// //     "Go",
// //     "Java",
// //     "JavaScript",
// //     "Kotlin",
// //     "MATLAB",
// //     "Objective-C",
// //     "Perl",
// //     "PHP",
// //     "Python",
// //     "R",
// //     "Ruby",
// //     "Rust",
// //     "Scala",
// //     "Shell scripting",
// //     "SQL",
// //     "Swift",
// //     "TypeScript",
// //     "VB.NET"
// // ];
// //
// // const tabReseauxSociaux = [
// //     "LinkedIn",
// //     "Facebook",
// //     "Twitter",
// //     "Instagram",
// //     "YouTube",
// //     "Pinterest",
// //     "Snapchat",
// //     "TikTok",
// //     "WhatsApp",
// //     "Telegram",
// //     "Reddit",
// //     "Tumblr",
// //     "Flickr",
// //     "Vimeo",
// //     "Quora",
// //     "Medium",
// //     "Behance",
// //     "Dribbble",
// //     "GitHub"
// // ];
// //
// // const tabLangues = [
// //     "Anglais",
// //     "Français",
// //     "Espagnol",
// //     "Allemand",
// //     "Chinois",
// //     "Arabe",
// //     "Russe",
// //     "Portugais",
// //     "Japonais",
// //     "Italien",
// //     "Hindi",
// //     "Néerlandais",
// //     "Coréen",
// //     "Turc",
// //     "Suédois",
// //     "Polonais",
// //     "Danois",
// //     "Norvégien",
// //     "Finnois"
// // ];
// //
// // const btn_add_formation = document.querySelector('#btn_add_formation');
// // const response_formation = document.querySelector('#response_formation');
// //
// // const btn_add_experience = document.querySelector('#btn_add_experience');
// // const response_experience = document.querySelector('#response_experience');
// //
// // const btn_add_permis = document.querySelector('#btn_add_permis');
// // const response_permis = document.querySelector('#response_permis');
// // const select_permis = document.querySelector('#permis');
// //
// // const btn_add_softskills = document.querySelector('#btn_add_softskills');
// // const response_softskills = document.querySelector('#response_softskills');
// // const select_softskills = document.querySelector('#softskills');
// //
// // const btn_add_hardskills = document.querySelector('#btn_add_hardskills');
// // const response_hardskills = document.querySelector('#response_hardskills');
// // const select_hardskills = document.querySelector('#hardskills');
// //
// // const btn_add_reseaux = document.querySelector('#btn_add_reseaux');
// // const response_reseaux = document.querySelector('#response_reseaux');
// // const select_reseaux = document.querySelector('#reseaux');
// //
// // const btn_add_language = document.querySelector('#btn_add_language');
// // const response_language = document.querySelector('#response_language');
// // const select_language = document.querySelector('#language');
// //
// // const btn_add_hobbies = document.querySelector('#btn_add_hobbies');
// // const response_hobbies = document.querySelector('#response_hobbies');
// //
// // btn_add_formation.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const input1 = document.createElement('input');
// //     input1.type = 'text';
// //     input1.name= 'school[]'
// //     const input2 = document.createElement('input');
// //     input2.type = 'text';
// //     input2.name= 'dip_location[]'
// //     const input3 = document.createElement('input');
// //     input3.type = 'text';
// //     input3.name= 'diplome[]'
// //     const input4 = document.createElement('input');
// //     input4.type = 'text';
// //     input4.name= 'status[]'
// //     const input5 = document.createElement('input');
// //     input5.type = 'date';
// //     input5.name= 'dip_start[]'
// //     const input6 = document.createElement('input');
// //     input6.type = 'date';
// //     input6.name= 'dip_end[]'
// //
// //     div.appendChild(input1);
// //     div.appendChild(input2);
// //     div.appendChild(input3);
// //     div.appendChild(input4);
// //     div.appendChild(input5);
// //     div.appendChild(input6);
// //     response_formation.append(div);
// // });
// //
// // btn_add_experience.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const input1 = document.createElement('input');
// //     input1.type = 'text';
// //     input1.name= 'experience[]'
// //     const input2 = document.createElement('input');
// //     input2.type = 'text';
// //     input2.name= 'exp_location[]'
// //     const input3 = document.createElement('input');
// //     input3.type = 'text';
// //     input3.name= 'poste[]'
// //     const input4 = document.createElement('input');
// //     input4.type = 'date';
// //     input4.name= 'exp_start[]'
// //     const input5 = document.createElement('input');
// //     input5.type = 'date';
// //     input5.name= 'exp_end[]'
// //
// //     div.appendChild(input1);
// //     div.appendChild(input2);
// //     div.appendChild(input3);
// //     div.appendChild(input4);
// //     div.appendChild(input5);
// //     response_experience.append(div);
// // });
// //
// // btn_add_permis.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const select = document.createElement('select');
// //     select.name = 'permis[]';
// //
// //     tabPermis.forEach((permis) => {
// //         const option = document.createElement('option');
// //         option.textContent = permis;
// //         select.appendChild(option);
// //     });
// //
// //     div.appendChild(select);
// //     response_permis.append(div);
// // });
// //
// // btn_add_softskills.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const select = document.createElement('select');
// //     select.name = 'softskills[]';
// //
// //     tabSoftskills.forEach((sskills) => {
// //         const option = document.createElement('option');
// //         option.textContent = sskills;
// //         select.appendChild(option);
// //     });
// //
// //     div.appendChild(select);
// //     response_softskills.append(div);
// // });
// //
// // btn_add_hardskills.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const select = document.createElement('select');
// //     select.name = 'hardskills[]';
// //
// //     tabHardSkills.forEach((hskills) => {
// //         const option = document.createElement('option');
// //         option.textContent = hskills;
// //         select.appendChild(option);
// //     });
// //
// //     div.appendChild(select);
// //     response_hardskills.append(div);
// // });
// //
// // btn_add_reseaux.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const select = document.createElement('select');
// //     select.name = 'reseaux[]';
// //
// //     tabReseauxSociaux.forEach((reseau) => {
// //         const option = document.createElement('option');
// //         option.textContent = reseau;
// //         select.appendChild(option);
// //     });
// //
// //     div.appendChild(select);
// //     response_reseaux.append(div);
// // });
// //
// // btn_add_language.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const select = document.createElement('select');
// //     select.name = 'language[]';
// //
// //     tabLangues.forEach((langue) => {
// //         const option = document.createElement('option');
// //         option.textContent = langue;
// //         select.appendChild(option);
// //     });
// //
// //     div.appendChild(select);
// //     response_language.append(div);
// // });
// //
// // btn_add_hobbies.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     const div = document.createElement('div');
// //     const input = document.createElement('input');
// //     input.type = 'text';
// //     input.name= 'hobbies[]'
// //
// //     div.appendChild(input);
// //     response_hobbies.append(div);
// // });
//
// // ok fin
//
// async function addCvGlobal() {
//     let response = await fetch( MYSCRIPT.ajaxUrl,{
//         method: 'post',
//         body: params
//     });
//     let data = await response.json();
//     console.log(data)
// }
//
// const theformulaire = document.querySelector('#theformulaire');
// let params = new FormData();
// theformulaire.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     params = new FormData(theformulaire);
//     params.append('action', 'record_cv')
//     addCvGlobal();
// });
//
//
//
//
//

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2238a8414d216eb3549e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmFjZDFmNDQ5NDYyOWU3YjM0Njc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdlRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL2FkZGN2LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gLy8gVGFibGVhdXggZCdvcHRpb25zXG4vLyAvL1xuLy8gLy9cbi8vIC8vXG4vLyAvLyBjb25zdCB0YWJQZXJtaXM9IFtcbi8vIC8vICAgICBcIkExXCIsXG4vLyAvLyAgICAgXCJBMlwiLFxuLy8gLy8gICAgIFwiQVwiLFxuLy8gLy8gICAgIFwiQlwiLFxuLy8gLy8gICAgIFwiQkVcIixcbi8vIC8vICAgICBcIkMxXCIsXG4vLyAvLyAgICAgXCJDMUVcIixcbi8vIC8vICAgICBcIkNcIixcbi8vIC8vICAgICBcIkNFXCIsXG4vLyAvLyAgICAgXCJEMVwiLFxuLy8gLy8gICAgIFwiRDFFXCIsXG4vLyAvLyAgICAgXCJEXCIsXG4vLyAvLyAgICAgXCJERVwiLFxuLy8gLy8gICAgIFwiUFBMXCIsXG4vLyAvLyAgICAgXCJDUExcIixcbi8vIC8vICAgICBcIkFUUExcIixcbi8vIC8vICAgICBcIlVMTVwiXG4vLyAvLyBdO1xuLy8gLy9cbi8vIC8vIGNvbnN0IHRhYlNvZnRza2lsbHM9IFtcbi8vIC8vICAgICBcIkNvbW11bmljYXRpb25cIixcbi8vIC8vICAgICBcIkNvbGxhYm9yYXRpb25cIixcbi8vIC8vICAgICBcIkVzcHJpdCBkJ8OpcXVpcGVcIixcbi8vIC8vICAgICBcIkFkYXB0YWJpbGl0w6lcIixcbi8vIC8vICAgICBcIlLDqXNvbHV0aW9uIGRlIHByb2Jsw6htZXNcIixcbi8vIC8vICAgICBcIkNyw6lhdGl2aXTDqVwiLFxuLy8gLy8gICAgIFwiR2VzdGlvbiBkdSB0ZW1wc1wiLFxuLy8gLy8gICAgIFwiTGVhZGVyc2hpcFwiLFxuLy8gLy8gICAgIFwiRW1wYXRoaWVcIixcbi8vIC8vICAgICBcIlBlbnPDqWUgY3JpdGlxdWVcIixcbi8vIC8vICAgICBcIlLDqXNpbGllbmNlXCIsXG4vLyAvLyAgICAgXCJHZXN0aW9uIGR1IHN0cmVzc1wiLFxuLy8gLy8gICAgIFwiUHJvYWN0aWZcIlxuLy8gLy8gXTtcbi8vIC8vXG4vLyAvLyBjb25zdCB0YWJIYXJkU2tpbGxzPSBbXG4vLyAvLyAgICAgXCJIVE1ML0NTU1wiLFxuLy8gLy8gICAgIFwiQ1wiLFxuLy8gLy8gICAgIFwiQyNcIixcbi8vIC8vICAgICBcIkMrK1wiLFxuLy8gLy8gICAgIFwiQ29ib2xcIixcbi8vIC8vICAgICBcIkdvXCIsXG4vLyAvLyAgICAgXCJKYXZhXCIsXG4vLyAvLyAgICAgXCJKYXZhU2NyaXB0XCIsXG4vLyAvLyAgICAgXCJLb3RsaW5cIixcbi8vIC8vICAgICBcIk1BVExBQlwiLFxuLy8gLy8gICAgIFwiT2JqZWN0aXZlLUNcIixcbi8vIC8vICAgICBcIlBlcmxcIixcbi8vIC8vICAgICBcIlBIUFwiLFxuLy8gLy8gICAgIFwiUHl0aG9uXCIsXG4vLyAvLyAgICAgXCJSXCIsXG4vLyAvLyAgICAgXCJSdWJ5XCIsXG4vLyAvLyAgICAgXCJSdXN0XCIsXG4vLyAvLyAgICAgXCJTY2FsYVwiLFxuLy8gLy8gICAgIFwiU2hlbGwgc2NyaXB0aW5nXCIsXG4vLyAvLyAgICAgXCJTUUxcIixcbi8vIC8vICAgICBcIlN3aWZ0XCIsXG4vLyAvLyAgICAgXCJUeXBlU2NyaXB0XCIsXG4vLyAvLyAgICAgXCJWQi5ORVRcIlxuLy8gLy8gXTtcbi8vIC8vXG4vLyAvLyBjb25zdCB0YWJSZXNlYXV4U29jaWF1eCA9IFtcbi8vIC8vICAgICBcIkxpbmtlZEluXCIsXG4vLyAvLyAgICAgXCJGYWNlYm9va1wiLFxuLy8gLy8gICAgIFwiVHdpdHRlclwiLFxuLy8gLy8gICAgIFwiSW5zdGFncmFtXCIsXG4vLyAvLyAgICAgXCJZb3VUdWJlXCIsXG4vLyAvLyAgICAgXCJQaW50ZXJlc3RcIixcbi8vIC8vICAgICBcIlNuYXBjaGF0XCIsXG4vLyAvLyAgICAgXCJUaWtUb2tcIixcbi8vIC8vICAgICBcIldoYXRzQXBwXCIsXG4vLyAvLyAgICAgXCJUZWxlZ3JhbVwiLFxuLy8gLy8gICAgIFwiUmVkZGl0XCIsXG4vLyAvLyAgICAgXCJUdW1ibHJcIixcbi8vIC8vICAgICBcIkZsaWNrclwiLFxuLy8gLy8gICAgIFwiVmltZW9cIixcbi8vIC8vICAgICBcIlF1b3JhXCIsXG4vLyAvLyAgICAgXCJNZWRpdW1cIixcbi8vIC8vICAgICBcIkJlaGFuY2VcIixcbi8vIC8vICAgICBcIkRyaWJiYmxlXCIsXG4vLyAvLyAgICAgXCJHaXRIdWJcIlxuLy8gLy8gXTtcbi8vIC8vXG4vLyAvLyBjb25zdCB0YWJMYW5ndWVzID0gW1xuLy8gLy8gICAgIFwiQW5nbGFpc1wiLFxuLy8gLy8gICAgIFwiRnJhbsOnYWlzXCIsXG4vLyAvLyAgICAgXCJFc3BhZ25vbFwiLFxuLy8gLy8gICAgIFwiQWxsZW1hbmRcIixcbi8vIC8vICAgICBcIkNoaW5vaXNcIixcbi8vIC8vICAgICBcIkFyYWJlXCIsXG4vLyAvLyAgICAgXCJSdXNzZVwiLFxuLy8gLy8gICAgIFwiUG9ydHVnYWlzXCIsXG4vLyAvLyAgICAgXCJKYXBvbmFpc1wiLFxuLy8gLy8gICAgIFwiSXRhbGllblwiLFxuLy8gLy8gICAgIFwiSGluZGlcIixcbi8vIC8vICAgICBcIk7DqWVybGFuZGFpc1wiLFxuLy8gLy8gICAgIFwiQ29yw6llblwiLFxuLy8gLy8gICAgIFwiVHVyY1wiLFxuLy8gLy8gICAgIFwiU3XDqWRvaXNcIixcbi8vIC8vICAgICBcIlBvbG9uYWlzXCIsXG4vLyAvLyAgICAgXCJEYW5vaXNcIixcbi8vIC8vICAgICBcIk5vcnbDqWdpZW5cIixcbi8vIC8vICAgICBcIkZpbm5vaXNcIlxuLy8gLy8gXTtcbi8vIC8vXG4vLyAvLyBjb25zdCBidG5fYWRkX2Zvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2Zvcm1hdGlvbicpO1xuLy8gLy8gY29uc3QgcmVzcG9uc2VfZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlX2Zvcm1hdGlvbicpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfZXhwZXJpZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2V4cGVyaWVuY2UnKTtcbi8vIC8vIGNvbnN0IHJlc3BvbnNlX2V4cGVyaWVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfZXhwZXJpZW5jZScpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9hZGRfcGVybWlzJyk7XG4vLyAvLyBjb25zdCByZXNwb25zZV9wZXJtaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcGVybWlzJyk7XG4vLyAvLyBjb25zdCBzZWxlY3RfcGVybWlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Blcm1pcycpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfc29mdHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3NvZnRza2lsbHMnKTtcbi8vIC8vIGNvbnN0IHJlc3BvbnNlX3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2Vfc29mdHNraWxscycpO1xuLy8gLy8gY29uc3Qgc2VsZWN0X3NvZnRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHNraWxscycpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfaGFyZHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hhcmRza2lsbHMnKTtcbi8vIC8vIGNvbnN0IHJlc3BvbnNlX2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaGFyZHNraWxscycpO1xuLy8gLy8gY29uc3Qgc2VsZWN0X2hhcmRza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZHNraWxscycpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfcmVzZWF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX3Jlc2VhdXgnKTtcbi8vIC8vIGNvbnN0IHJlc3BvbnNlX3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfcmVzZWF1eCcpO1xuLy8gLy8gY29uc3Qgc2VsZWN0X3Jlc2VhdXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZWF1eCcpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX2FkZF9sYW5ndWFnZScpO1xuLy8gLy8gY29uc3QgcmVzcG9uc2VfbGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfbGFuZ3VhZ2UnKTtcbi8vIC8vIGNvbnN0IHNlbGVjdF9sYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5ndWFnZScpO1xuLy8gLy9cbi8vIC8vIGNvbnN0IGJ0bl9hZGRfaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fYWRkX2hvYmJpZXMnKTtcbi8vIC8vIGNvbnN0IHJlc3BvbnNlX2hvYmJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzcG9uc2VfaG9iYmllcycpO1xuLy8gLy9cbi8vIC8vIGJ0bl9hZGRfZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gLy8gICAgIGlucHV0MS50eXBlID0gJ3RleHQnO1xuLy8gLy8gICAgIGlucHV0MS5uYW1lPSAnc2Nob29sW10nXG4vLyAvLyAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vIC8vICAgICBpbnB1dDIudHlwZSA9ICd0ZXh0Jztcbi8vIC8vICAgICBpbnB1dDIubmFtZT0gJ2RpcF9sb2NhdGlvbltdJ1xuLy8gLy8gICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4vLyAvLyAgICAgaW5wdXQzLm5hbWU9ICdkaXBsb21lW10nXG4vLyAvLyAgICAgY29uc3QgaW5wdXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vIC8vICAgICBpbnB1dDQudHlwZSA9ICd0ZXh0Jztcbi8vIC8vICAgICBpbnB1dDQubmFtZT0gJ3N0YXR1c1tdJ1xuLy8gLy8gICAgIGNvbnN0IGlucHV0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQ1LnR5cGUgPSAnZGF0ZSc7XG4vLyAvLyAgICAgaW5wdXQ1Lm5hbWU9ICdkaXBfc3RhcnRbXSdcbi8vIC8vICAgICBjb25zdCBpbnB1dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gLy8gICAgIGlucHV0Ni50eXBlID0gJ2RhdGUnO1xuLy8gLy8gICAgIGlucHV0Ni5uYW1lPSAnZGlwX2VuZFtdJ1xuLy8gLy9cbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ2KTtcbi8vIC8vICAgICByZXNwb25zZV9mb3JtYXRpb24uYXBwZW5kKGRpdik7XG4vLyAvLyB9KTtcbi8vIC8vXG4vLyAvLyBidG5fYWRkX2V4cGVyaWVuY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gLy8gICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQxLnR5cGUgPSAndGV4dCc7XG4vLyAvLyAgICAgaW5wdXQxLm5hbWU9ICdleHBlcmllbmNlW10nXG4vLyAvLyAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbi8vIC8vICAgICBpbnB1dDIudHlwZSA9ICd0ZXh0Jztcbi8vIC8vICAgICBpbnB1dDIubmFtZT0gJ2V4cF9sb2NhdGlvbltdJ1xuLy8gLy8gICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQzLnR5cGUgPSAndGV4dCc7XG4vLyAvLyAgICAgaW5wdXQzLm5hbWU9ICdwb3N0ZVtdJ1xuLy8gLy8gICAgIGNvbnN0IGlucHV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQ0LnR5cGUgPSAnZGF0ZSc7XG4vLyAvLyAgICAgaW5wdXQ0Lm5hbWU9ICdleHBfc3RhcnRbXSdcbi8vIC8vICAgICBjb25zdCBpbnB1dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuLy8gLy8gICAgIGlucHV0NS50eXBlID0gJ2RhdGUnO1xuLy8gLy8gICAgIGlucHV0NS5uYW1lPSAnZXhwX2VuZFtdJ1xuLy8gLy9cbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQzKTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ0KTtcbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQ1KTtcbi8vIC8vICAgICByZXNwb25zZV9leHBlcmllbmNlLmFwcGVuZChkaXYpO1xuLy8gLy8gfSk7XG4vLyAvL1xuLy8gLy8gYnRuX2FkZF9wZXJtaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gLy8gICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuLy8gLy8gICAgIHNlbGVjdC5uYW1lID0gJ3Blcm1pc1tdJztcbi8vIC8vXG4vLyAvLyAgICAgdGFiUGVybWlzLmZvckVhY2goKHBlcm1pcykgPT4ge1xuLy8gLy8gICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbi8vIC8vICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcGVybWlzO1xuLy8gLy8gICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbi8vIC8vICAgICB9KTtcbi8vIC8vXG4vLyAvLyAgICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4vLyAvLyAgICAgcmVzcG9uc2VfcGVybWlzLmFwcGVuZChkaXYpO1xuLy8gLy8gfSk7XG4vLyAvL1xuLy8gLy8gYnRuX2FkZF9zb2Z0c2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vIC8vICAgICBzZWxlY3QubmFtZSA9ICdzb2Z0c2tpbGxzW10nO1xuLy8gLy9cbi8vIC8vICAgICB0YWJTb2Z0c2tpbGxzLmZvckVhY2goKHNza2lsbHMpID0+IHtcbi8vIC8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAvLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNza2lsbHM7XG4vLyAvLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gLy8gICAgIH0pO1xuLy8gLy9cbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vIC8vICAgICByZXNwb25zZV9zb2Z0c2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gLy8gfSk7XG4vLyAvL1xuLy8gLy8gYnRuX2FkZF9oYXJkc2tpbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vIC8vICAgICBzZWxlY3QubmFtZSA9ICdoYXJkc2tpbGxzW10nO1xuLy8gLy9cbi8vIC8vICAgICB0YWJIYXJkU2tpbGxzLmZvckVhY2goKGhza2lsbHMpID0+IHtcbi8vIC8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAvLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGhza2lsbHM7XG4vLyAvLyAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuLy8gLy8gICAgIH0pO1xuLy8gLy9cbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbi8vIC8vICAgICByZXNwb25zZV9oYXJkc2tpbGxzLmFwcGVuZChkaXYpO1xuLy8gLy8gfSk7XG4vLyAvL1xuLy8gLy8gYnRuX2FkZF9yZXNlYXV4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vIC8vICAgICBzZWxlY3QubmFtZSA9ICdyZXNlYXV4W10nO1xuLy8gLy9cbi8vIC8vICAgICB0YWJSZXNlYXV4U29jaWF1eC5mb3JFYWNoKChyZXNlYXUpID0+IHtcbi8vIC8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAvLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHJlc2VhdTtcbi8vIC8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAvLyAgICAgfSk7XG4vLyAvL1xuLy8gLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gLy8gICAgIHJlc3BvbnNlX3Jlc2VhdXguYXBwZW5kKGRpdik7XG4vLyAvLyB9KTtcbi8vIC8vXG4vLyAvLyBidG5fYWRkX2xhbmd1YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbi8vIC8vICAgICBzZWxlY3QubmFtZSA9ICdsYW5ndWFnZVtdJztcbi8vIC8vXG4vLyAvLyAgICAgdGFiTGFuZ3Vlcy5mb3JFYWNoKChsYW5ndWUpID0+IHtcbi8vIC8vICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAvLyAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxhbmd1ZTtcbi8vIC8vICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4vLyAvLyAgICAgfSk7XG4vLyAvL1xuLy8gLy8gICAgIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuLy8gLy8gICAgIHJlc3BvbnNlX2xhbmd1YWdlLmFwcGVuZChkaXYpO1xuLy8gLy8gfSk7XG4vLyAvL1xuLy8gLy8gYnRuX2FkZF9ob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIC8vICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4vLyAvLyAgICAgaW5wdXQudHlwZSA9ICd0ZXh0Jztcbi8vIC8vICAgICBpbnB1dC5uYW1lPSAnaG9iYmllc1tdJ1xuLy8gLy9cbi8vIC8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuLy8gLy8gICAgIHJlc3BvbnNlX2hvYmJpZXMuYXBwZW5kKGRpdik7XG4vLyAvLyB9KTtcbi8vXG4vLyAvLyBvayBmaW5cbi8vXG4vLyBhc3luYyBmdW5jdGlvbiBhZGRDdkdsb2JhbCgpIHtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggTVlTQ1JJUFQuYWpheFVybCx7XG4vLyAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXNcbi8vICAgICB9KTtcbi8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gfVxuLy9cbi8vIGNvbnN0IHRoZWZvcm11bGFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlZm9ybXVsYWlyZScpO1xuLy8gbGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuLy8gdGhlZm9ybXVsYWlyZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldnQpIHtcbi8vICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBwYXJhbXMgPSBuZXcgRm9ybURhdGEodGhlZm9ybXVsYWlyZSk7XG4vLyAgICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ3JlY29yZF9jdicpXG4vLyAgICAgYWRkQ3ZHbG9iYWwoKTtcbi8vIH0pO1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMjM4YTg0MTRkMjE2ZWIzNTQ5ZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==