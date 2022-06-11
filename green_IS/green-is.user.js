// ==UserScript==
// @name     Remove "green IS" spam
// @version  1
// @grant    none
// @include  https://is.muni.cz/auth/*

let junk = document.querySelectorAll('.prispevek.poradenstvi')
if (junk.length > 0) {
    junk[0].remove()
    console.log("INFO: Greasemonkey - Green IS junk detected and removed")
}

// ==/UserScript==
