// ==UserScript==
// @name         Ebay for "according to description"
// @description  Tries to view the item description valid at the date of purchase
// @author       Werve
// @match        https://order.ebay.it/ord/*
// @icon         https://icons.duckduckgo.com/ip2/ebay.it.ico
// @grant        none
// @create       2022-01-13
// @lastmodified 2022-01-13
// @version      0.1
// @namespace    https://greasyfork.org/users/669237
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      CC BY 4.0
// @copyright    2022 Werve
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    $.noConflict(true);
    $(".top-region").append("<div id='try_old_desc'> <button id='old_desc'> View item description valid at the date of purchase </button></div></br>");
    $("#old_desc").click(URL_desc);
})();

function URL_desc(){
    let URL = location.href;
    let productId = URL.match(/.*itemid=(\d+)/)[1];
    let transactionId = URL.match(/.*transId=(\d+)/)[1];
    location.href = "https://ebay.it/ipp/"+ productId +"?transactionId="+ transactionId;
}
