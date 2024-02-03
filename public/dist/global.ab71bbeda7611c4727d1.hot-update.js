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

  // Mettre à jour les divs avec les nouvelles valeurs

  document.getElementById("date").innerHTML = "Date: " + dateActuelle;
  document.getElementById("heure").innerHTML = "Heure: " + heureActuelle;
}

// Mettre à jour la date et l'heure chaque seconde
setInterval(afficherDateEtHeure, 1000);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("940649ac6be650b794e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmFiNzFiYmVkYTc2MTFjNDcyN2QxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTQSxtQkFBbUJBLENBQUEsRUFBRztFQUMzQixJQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7O0VBRTNCO0VBQ0EsSUFBSUMsSUFBSSxHQUFHRixVQUFVLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0VBQy9CLElBQUlDLElBQUksR0FBR0osVUFBVSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLElBQUlDLEtBQUssR0FBR04sVUFBVSxDQUFDTyxXQUFXLENBQUMsQ0FBQzs7RUFFcEM7RUFDQSxJQUFJQyxLQUFLLEdBQUdSLFVBQVUsQ0FBQ1MsUUFBUSxDQUFDLENBQUM7RUFDakMsSUFBSUMsTUFBTSxHQUFHVixVQUFVLENBQUNXLFVBQVUsQ0FBQyxDQUFDO0VBQ3BDLElBQUlDLE9BQU8sR0FBR1osVUFBVSxDQUFDYSxVQUFVLENBQUMsQ0FBQzs7RUFFckM7RUFDQVgsSUFBSSxHQUFJQSxJQUFJLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsSUFBSSxHQUFHQSxJQUFJO0VBQ3RDRSxJQUFJLEdBQUlBLElBQUksR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxJQUFJLEdBQUdBLElBQUk7RUFDdENJLEtBQUssR0FBSUEsS0FBSyxHQUFHLEVBQUUsR0FBSSxHQUFHLEdBQUdBLEtBQUssR0FBR0EsS0FBSztFQUMxQ0UsTUFBTSxHQUFJQSxNQUFNLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsTUFBTSxHQUFHQSxNQUFNO0VBQzlDRSxPQUFPLEdBQUlBLE9BQU8sR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxPQUFPLEdBQUdBLE9BQU87O0VBR2xEO0VBQ0EsSUFBSUUsWUFBWSxHQUFHWixJQUFJLEdBQUcsR0FBRyxHQUFHRSxJQUFJLEdBQUcsR0FBRyxHQUFHRSxLQUFLO0VBQ2xELElBQUlTLGFBQWEsR0FBR1AsS0FBSyxHQUFHLEdBQUcsR0FBR0UsTUFBTSxHQUFHLEdBQUcsR0FBR0UsT0FBTzs7RUFFeEQ7O0VBSUFJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxHQUFHSixZQUFZO0VBQ25FRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLFNBQVMsR0FBR0gsYUFBYTtBQUMxRTs7QUFFQTtBQUNBSSxXQUFXLENBQUNwQixtQkFBbUIsRUFBRSxJQUFJLENBQUM7Ozs7Ozs7O1VDbEN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9yZWNydXRldXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZmZpY2hlckRhdGVFdEhldXJlKCkge1xuICAgIHZhciBtYWludGVuYW50ID0gbmV3IERhdGUoKTtcblxuICAgIC8vIE9idGVuaXIgbGEgZGF0ZVxuICAgIHZhciBqb3VyID0gbWFpbnRlbmFudC5nZXREYXRlKCk7XG4gICAgdmFyIG1vaXMgPSBtYWludGVuYW50LmdldE1vbnRoKCkgKyAxOyAvLyBMZXMgbW9pcyBjb21tZW5jZW50IMOgIDBcbiAgICB2YXIgYW5uZWUgPSBtYWludGVuYW50LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBPYnRlbmlyIGwnaGV1cmVcbiAgICB2YXIgaGV1cmUgPSBtYWludGVuYW50LmdldEhvdXJzKCk7XG4gICAgdmFyIG1pbnV0ZSA9IG1haW50ZW5hbnQuZ2V0TWludXRlcygpO1xuICAgIHZhciBzZWNvbmRlID0gbWFpbnRlbmFudC5nZXRTZWNvbmRzKCk7XG5cbiAgICAvLyBBam91dGVyIHVuIHrDqXJvIGRldmFudCBsZXMgY2hpZmZyZXMgPCAxMCBwb3VyIHVuZSBtZWlsbGV1cmUgbGlzaWJpbGl0w6lcbiAgICBqb3VyID0gKGpvdXIgPCAxMCkgPyBcIjBcIiArIGpvdXIgOiBqb3VyO1xuICAgIG1vaXMgPSAobW9pcyA8IDEwKSA/IFwiMFwiICsgbW9pcyA6IG1vaXM7XG4gICAgaGV1cmUgPSAoaGV1cmUgPCAxMCkgPyBcIjBcIiArIGhldXJlIDogaGV1cmU7XG4gICAgbWludXRlID0gKG1pbnV0ZSA8IDEwKSA/IFwiMFwiICsgbWludXRlIDogbWludXRlO1xuICAgIHNlY29uZGUgPSAoc2Vjb25kZSA8IDEwKSA/IFwiMFwiICsgc2Vjb25kZSA6IHNlY29uZGU7XG5cblxuICAgIC8vIENvbnN0cnVpcmUgbGVzIGNoYcOubmVzIGRlIHRleHRlIHBvdXIgbGEgZGF0ZSBldCBsJ2hldXJlXG4gICAgdmFyIGRhdGVBY3R1ZWxsZSA9IGpvdXIgKyBcIi9cIiArIG1vaXMgKyBcIi9cIiArIGFubmVlO1xuICAgIHZhciBoZXVyZUFjdHVlbGxlID0gaGV1cmUgKyBcIjpcIiArIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kZTtcblxuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlcyBkaXZzIGF2ZWMgbGVzIG5vdXZlbGxlcyB2YWxldXJzXG5cblxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLmlubmVySFRNTCA9IFwiRGF0ZTogXCIgKyBkYXRlQWN0dWVsbGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXVyZVwiKS5pbm5lckhUTUwgPSBcIkhldXJlOiBcIiArIGhldXJlQWN0dWVsbGU7XG59XG5cbi8vIE1ldHRyZSDDoCBqb3VyIGxhIGRhdGUgZXQgbCdoZXVyZSBjaGFxdWUgc2Vjb25kZVxuc2V0SW50ZXJ2YWwoYWZmaWNoZXJEYXRlRXRIZXVyZSwgMTAwMCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NDA2NDlhYzZiZTY1MGI3OTRlMVwiKSJdLCJuYW1lcyI6WyJhZmZpY2hlckRhdGVFdEhldXJlIiwibWFpbnRlbmFudCIsIkRhdGUiLCJqb3VyIiwiZ2V0RGF0ZSIsIm1vaXMiLCJnZXRNb250aCIsImFubmVlIiwiZ2V0RnVsbFllYXIiLCJoZXVyZSIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZGUiLCJnZXRTZWNvbmRzIiwiZGF0ZUFjdHVlbGxlIiwiaGV1cmVBY3R1ZWxsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=