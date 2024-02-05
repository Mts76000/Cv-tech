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
/******/ 	__webpack_require__.h = () => ("8f1dbd139305a5ac9ea1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjMzNzhjMDQ4YTNmN2M5NTcyZGMzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTQSxtQkFBbUJBLENBQUEsRUFBRztFQUMzQixJQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7O0VBRTNCO0VBQ0EsSUFBSUMsSUFBSSxHQUFHRixVQUFVLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0VBQy9CLElBQUlDLElBQUksR0FBR0osVUFBVSxDQUFDSyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLElBQUlDLEtBQUssR0FBR04sVUFBVSxDQUFDTyxXQUFXLENBQUMsQ0FBQzs7RUFFcEM7RUFDQSxJQUFJQyxLQUFLLEdBQUdSLFVBQVUsQ0FBQ1MsUUFBUSxDQUFDLENBQUM7RUFDakMsSUFBSUMsTUFBTSxHQUFHVixVQUFVLENBQUNXLFVBQVUsQ0FBQyxDQUFDO0VBQ3BDLElBQUlDLE9BQU8sR0FBR1osVUFBVSxDQUFDYSxVQUFVLENBQUMsQ0FBQzs7RUFFckM7RUFDQVgsSUFBSSxHQUFJQSxJQUFJLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsSUFBSSxHQUFHQSxJQUFJO0VBQ3RDRSxJQUFJLEdBQUlBLElBQUksR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxJQUFJLEdBQUdBLElBQUk7RUFDdENJLEtBQUssR0FBSUEsS0FBSyxHQUFHLEVBQUUsR0FBSSxHQUFHLEdBQUdBLEtBQUssR0FBR0EsS0FBSztFQUMxQ0UsTUFBTSxHQUFJQSxNQUFNLEdBQUcsRUFBRSxHQUFJLEdBQUcsR0FBR0EsTUFBTSxHQUFHQSxNQUFNO0VBQzlDRSxPQUFPLEdBQUlBLE9BQU8sR0FBRyxFQUFFLEdBQUksR0FBRyxHQUFHQSxPQUFPLEdBQUdBLE9BQU87O0VBR2xEO0VBQ0EsSUFBSUUsWUFBWSxHQUFHWixJQUFJLEdBQUcsR0FBRyxHQUFHRSxJQUFJLEdBQUcsR0FBRyxHQUFHRSxLQUFLO0VBQ2xELElBQUlTLGFBQWEsR0FBR1AsS0FBSyxHQUFHLEdBQUcsR0FBR0UsTUFBTSxHQUFHLEdBQUcsR0FBR0UsT0FBTzs7RUFFeEQ7RUFDQUksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNDLFNBQVMsR0FBRyxRQUFRLEdBQUdKLFlBQVk7RUFDbkVFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLEdBQUcsU0FBUyxHQUFHSCxhQUFhO0FBQzFFOztBQUVBO0FBQ0FJLFdBQVcsQ0FBQ3BCLG1CQUFtQixFQUFFLElBQUksQ0FBQzs7Ozs7Ozs7VUMvQnRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL3JlY3J1dGV1ci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFmZmljaGVyRGF0ZUV0SGV1cmUoKSB7XG4gICAgdmFyIG1haW50ZW5hbnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLy8gT2J0ZW5pciBsYSBkYXRlXG4gICAgdmFyIGpvdXIgPSBtYWludGVuYW50LmdldERhdGUoKTtcbiAgICB2YXIgbW9pcyA9IG1haW50ZW5hbnQuZ2V0TW9udGgoKSArIDE7IC8vIExlcyBtb2lzIGNvbW1lbmNlbnQgw6AgMFxuICAgIHZhciBhbm5lZSA9IG1haW50ZW5hbnQuZ2V0RnVsbFllYXIoKTtcblxuICAgIC8vIE9idGVuaXIgbCdoZXVyZVxuICAgIHZhciBoZXVyZSA9IG1haW50ZW5hbnQuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWludXRlID0gbWFpbnRlbmFudC5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHNlY29uZGUgPSBtYWludGVuYW50LmdldFNlY29uZHMoKTtcblxuICAgIC8vIEFqb3V0ZXIgdW4gesOpcm8gZGV2YW50IGxlcyBjaGlmZnJlcyA8IDEwIHBvdXIgdW5lIG1laWxsZXVyZSBsaXNpYmlsaXTDqVxuICAgIGpvdXIgPSAoam91ciA8IDEwKSA/IFwiMFwiICsgam91ciA6IGpvdXI7XG4gICAgbW9pcyA9IChtb2lzIDwgMTApID8gXCIwXCIgKyBtb2lzIDogbW9pcztcbiAgICBoZXVyZSA9IChoZXVyZSA8IDEwKSA/IFwiMFwiICsgaGV1cmUgOiBoZXVyZTtcbiAgICBtaW51dGUgPSAobWludXRlIDwgMTApID8gXCIwXCIgKyBtaW51dGUgOiBtaW51dGU7XG4gICAgc2Vjb25kZSA9IChzZWNvbmRlIDwgMTApID8gXCIwXCIgKyBzZWNvbmRlIDogc2Vjb25kZTtcblxuXG4gICAgLy8gQ29uc3RydWlyZSBsZXMgY2hhw65uZXMgZGUgdGV4dGUgcG91ciBsYSBkYXRlIGV0IGwnaGV1cmVcbiAgICB2YXIgZGF0ZUFjdHVlbGxlID0gam91ciArIFwiL1wiICsgbW9pcyArIFwiL1wiICsgYW5uZWU7XG4gICAgdmFyIGhldXJlQWN0dWVsbGUgPSBoZXVyZSArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmRlO1xuXG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGVzIGRpdnMgYXZlYyBsZXMgbm91dmVsbGVzIHZhbGV1cnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikuaW5uZXJIVE1MID0gXCJEYXRlOiBcIiArIGRhdGVBY3R1ZWxsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhldXJlXCIpLmlubmVySFRNTCA9IFwiSGV1cmU6IFwiICsgaGV1cmVBY3R1ZWxsZTtcbn1cblxuLy8gTWV0dHJlIMOgIGpvdXIgbGEgZGF0ZSBldCBsJ2hldXJlIGNoYXF1ZSBzZWNvbmRlXG5zZXRJbnRlcnZhbChhZmZpY2hlckRhdGVFdEhldXJlLCAxMDAwKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhmMWRiZDEzOTMwNWE1YWM5ZWExXCIpIl0sIm5hbWVzIjpbImFmZmljaGVyRGF0ZUV0SGV1cmUiLCJtYWludGVuYW50IiwiRGF0ZSIsImpvdXIiLCJnZXREYXRlIiwibW9pcyIsImdldE1vbnRoIiwiYW5uZWUiLCJnZXRGdWxsWWVhciIsImhldXJlIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kZSIsImdldFNlY29uZHMiLCJkYXRlQWN0dWVsbGUiLCJoZXVyZUFjdHVlbGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==