// ==UserScript==
// @name         zapisovac predmetu
// @namespace    http://jan.netik.cz/
// @version      0.2
// @description  Zapise predmety definovane v promenne "predmety". Nutnost byt prihlasen v SIS. Spolupracuje se doplnkem "zapisovac paralelky a cekacky".
// @author       Jan Netík
// @match        https://is.cuni.cz/*
// @run-at       document-start
// ==/UserScript==

"use strict";

var id = document.cookie.match(new RegExp("(^| )" + "PHPSESSID" + "=([^;]+)"))[2];

function zapis(kod_predmetu) {
    window.open("https://is.cuni.cz/studium/predm_st2/index.php?id=" + id + "&tid=&do=xzapsat&zf=plan&zapsat=Zapsat&zap=" + kod_predmetu, "_blank");
}

// ===============================================================================
// zde do hranate zavorky vypsat kody predmetu v uvozovkach, oddelene carkou
var predmety = ["APS300404", "APS300331", "APS300403"];

// pak je nutnost pred zapisem byt prihlasen v SIS...
// a v ten pravy cas kdekoliv zmacknout MEZERNIK pro zapis vsech predmetu, nebo klávesy +, ě, š, č (čísla 1-4) pro zapis n-teho predmetu
// ===============================================================================

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "32") {
        predmety.forEach(zapis); // zapis vsechno stisnutim MEZERNIKU
    }

    if (e.keyCode == "49") {
        zapis(predmety[0]); // 1
    }

    if (e.keyCode == "50") {
        zapis(predmety[1]); // 2
    }

    if (e.keyCode == "51") {
        zapis(predmety[2]); // 3
    }

    if (e.keyCode == "52") {
        zapis(predmety[3]); // 4
    }
}
