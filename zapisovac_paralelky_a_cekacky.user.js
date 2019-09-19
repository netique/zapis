// ==UserScript==
// @name         zapisovac paralelky a cekacky
// @namespace    http://jan.netik.cz/
// @version      0.2
// @description  V pripade objeveni se vyberu rozvrhoveho listku zapise ten prvni, dale pripadne zapise na cekacku.
// @author       Jan Netik
// @match        https://is.cuni.cz/studium/predm_st2/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-end
// ==/UserScript==

    'use strict';

$("[autofocus=autofocus]").click() //zbavi se pripadneho popupu

$.when( $("tr.row1 :input").click() ).then( $("input.but_akce[name=zap_rl], input.but_next").click() ) //vybere prvni radio a zapise, pripadne jeste zapise na cekacku