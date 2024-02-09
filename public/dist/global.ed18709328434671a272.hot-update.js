self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/recruteur.js":
/*!***********************************!*\
  !*** ./src/asset/js/recruteur.js ***!
  \***********************************/
/***/ (() => {

function afficherDateEtHeure() {
  var maintenant = new Date();

  // Obtenir la date
  var jour = maintenant.getDate();
  var mois = maintenant.getMonth() + 1; // Les mois commencent à 0
  var annee = maintenant.getFullYear();

  // Obtenir l'heure
  var heure = maintenant.getHours();
  var minute = maintenant.getMinutes();
  var seconde = maintenant.getSeconds();

  // Ajouter un zéro devant les chiffres < 10 pour une meilleure lisibilité
  jour = jour < 10 ? "0" + jour : jour;
  mois = mois < 10 ? "0" + mois : mois;
  heure = heure < 10 ? "0" + heure : heure;
  minute = minute < 10 ? "0" + minute : minute;
  seconde = seconde < 10 ? "0" + seconde : seconde;

  // Construire les chaînes de texte pour la date et l'heure
  var dateActuelle = jour + "/" + mois + "/" + annee;
  var heureActuelle = heure + ":" + minute + ":" + seconde;
  var elementDate = document.getElementById("date");
  if (elementDate !== null) {
    elementDate.innerHTML = "Date: " + dateActuelle;
  }
  var elementHeure = document.getElementById("heure");
  if (elementHeure !== null) {
    elementHeure.innerHTML = "Heure: " + heureActuelle;
  }
}

// Mettre à jour la date et l'heure chaque seconde
setInterval(afficherDateEtHeure, 1000);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("904754534718b3dc1eec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmVkMTg3MDkzMjg0MzQ2NzFhMjcyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTQSxtQkFBbUJBLENBQUEsRUFBRztFQUMzQixJQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7O0VBRTNCO0VBQ0EsSUFBSUMsSUFBSSxHQUFHRixVQUFVLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0VBQy9CLElBQUlDLElBQUksR0FBR0osVUFBVSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLElBQUlDLEtBQUssR0FBR04sVUFBVSxDQUFDTyxXQUFXLENBQUMsQ0FBQzs7RUFFcEM7RUFDQSxJQUFJQyxLQUFLLEdBQUdSLFVBQVUsQ0FBQ1MsUUFBUSxDQUFDLENBQUM7RUFDakMsSUFBSUMsTUFBTSxHQUFHVixVQUFVLENBQUNXLFVBQVUsQ0FBQyxDQUFDO0VBQ3BDLElBQUlDLE9BQU8sR0FBR1osVUFBVSxDQUFDYSxVQUFVLENBQUMsQ0FBQzs7RUFFckM7RUFDQVgsSUFBSSxHQUFJQSxJQUFJLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsSUFBSSxHQUFHQSxJQUFJO0VBQ3RDRSxJQUFJLEdBQUlBLElBQUksR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxJQUFJLEdBQUdBLElBQUk7RUFDdENJLEtBQUssR0FBSUEsS0FBSyxHQUFHLEVBQUUsR0FBSSxHQUFHLEdBQUdBLEtBQUssR0FBR0EsS0FBSztFQUMxQ0UsTUFBTSxHQUFJQSxNQUFNLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsTUFBTSxHQUFHQSxNQUFNO0VBQzlDRSxPQUFPLEdBQUlBLE9BQU8sR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxPQUFPLEdBQUdBLE9BQU87O0VBR2xEO0VBQ0EsSUFBSUUsWUFBWSxHQUFHWixJQUFJLEdBQUcsR0FBRyxHQUFHRSxJQUFJLEdBQUcsR0FBRyxHQUFHRSxLQUFLO0VBQ2xELElBQUlTLGFBQWEsR0FBR1AsS0FBSyxHQUFHLEdBQUcsR0FBR0UsTUFBTSxHQUFHLEdBQUcsR0FBR0UsT0FBTztFQUd4RCxJQUFJSSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUNqRCxJQUFJRixXQUFXLEtBQUssSUFBSSxFQUFFO0lBQ3RCQSxXQUFXLENBQUNHLFNBQVMsR0FBRyxRQUFRLEdBQUdMLFlBQVk7RUFDbkQ7RUFFQSxJQUFJTSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNuRCxJQUFJRSxZQUFZLEtBQUssSUFBSSxFQUFFO0lBRXZCQSxZQUFZLENBQUNELFNBQVMsR0FBRyxTQUFTLEdBQUdKLGFBQWE7RUFDdEQ7QUFFSjs7QUFFQTtBQUNBTSxXQUFXLENBQUN0QixtQkFBbUIsRUFBRSxJQUFJLENBQUM7Ozs7Ozs7O1VDeEN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9yZWNydXRldXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZmZpY2hlckRhdGVFdEhldXJlKCkge1xuICAgIHZhciBtYWludGVuYW50ID0gbmV3IERhdGUoKTtcblxuICAgIC8vIE9idGVuaXIgbGEgZGF0ZVxuICAgIHZhciBqb3VyID0gbWFpbnRlbmFudC5nZXREYXRlKCk7XG4gICAgdmFyIG1vaXMgPSBtYWludGVuYW50LmdldE1vbnRoKCkgKyAxOyAvLyBMZXMgbW9pcyBjb21tZW5jZW50IMOgIDBcbiAgICB2YXIgYW5uZWUgPSBtYWludGVuYW50LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBPYnRlbmlyIGwnaGV1cmVcbiAgICB2YXIgaGV1cmUgPSBtYWludGVuYW50LmdldEhvdXJzKCk7XG4gICAgdmFyIG1pbnV0ZSA9IG1haW50ZW5hbnQuZ2V0TWludXRlcygpO1xuICAgIHZhciBzZWNvbmRlID0gbWFpbnRlbmFudC5nZXRTZWNvbmRzKCk7XG5cbiAgICAvLyBBam91dGVyIHVuIHrDqXJvIGRldmFudCBsZXMgY2hpZmZyZXMgPCAxMCBwb3VyIHVuZSBtZWlsbGV1cmUgbGlzaWJpbGl0w6lcbiAgICBqb3VyID0gKGpvdXIgPCAxMCkgPyBcIjBcIiArIGpvdXIgOiBqb3VyO1xuICAgIG1vaXMgPSAobW9pcyA8IDEwKSA/IFwiMFwiICsgbW9pcyA6IG1vaXM7XG4gICAgaGV1cmUgPSAoaGV1cmUgPCAxMCkgPyBcIjBcIiArIGhldXJlIDogaGV1cmU7XG4gICAgbWludXRlID0gKG1pbnV0ZSA8IDEwKSA/IFwiMFwiICsgbWludXRlIDogbWludXRlO1xuICAgIHNlY29uZGUgPSAoc2Vjb25kZSA8IDEwKSA/IFwiMFwiICsgc2Vjb25kZSA6IHNlY29uZGU7XG5cblxuICAgIC8vIENvbnN0cnVpcmUgbGVzIGNoYcOubmVzIGRlIHRleHRlIHBvdXIgbGEgZGF0ZSBldCBsJ2hldXJlXG4gICAgdmFyIGRhdGVBY3R1ZWxsZSA9IGpvdXIgKyBcIi9cIiArIG1vaXMgKyBcIi9cIiArIGFubmVlO1xuICAgIHZhciBoZXVyZUFjdHVlbGxlID0gaGV1cmUgKyBcIjpcIiArIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kZTtcblxuXG4gICAgdmFyIGVsZW1lbnREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuICAgIGlmIChlbGVtZW50RGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50RGF0ZS5pbm5lckhUTUwgPSBcIkRhdGU6IFwiICsgZGF0ZUFjdHVlbGxlO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50SGV1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhldXJlXCIpO1xuICAgIGlmIChlbGVtZW50SGV1cmUgIT09IG51bGwpIHtcblxuICAgICAgICBlbGVtZW50SGV1cmUuaW5uZXJIVE1MID0gXCJIZXVyZTogXCIgKyBoZXVyZUFjdHVlbGxlO1xuICAgIH1cblxufVxuXG4vLyBNZXR0cmUgw6Agam91ciBsYSBkYXRlIGV0IGwnaGV1cmUgY2hhcXVlIHNlY29uZGVcbnNldEludGVydmFsKGFmZmljaGVyRGF0ZUV0SGV1cmUsIDEwMDApO1xuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTA0NzU0NTM0NzE4YjNkYzFlZWNcIikiXSwibmFtZXMiOlsiYWZmaWNoZXJEYXRlRXRIZXVyZSIsIm1haW50ZW5hbnQiLCJEYXRlIiwiam91ciIsImdldERhdGUiLCJtb2lzIiwiZ2V0TW9udGgiLCJhbm5lZSIsImdldEZ1bGxZZWFyIiwiaGV1cmUiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmRlIiwiZ2V0U2Vjb25kcyIsImRhdGVBY3R1ZWxsZSIsImhldXJlQWN0dWVsbGUiLCJlbGVtZW50RGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJlbGVtZW50SGV1cmUiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=