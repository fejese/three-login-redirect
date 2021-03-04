// ==UserScript==
// @name         Three login redirect
// @namespace    https://github.com/fejese
// @version      0.1
// @description  Redirect to login form with phone number filled out
// @author       fejese@fejese.com
// @match        https://new.three.co.uk/account/login
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var phoneNumber = "<YOUR PHONE NUMBER>";

    var url = document.location.href;
    var match = url.match(phoneNumber);
    if (match !== null) return;

    document.location.href = "https://www.three.co.uk/My3Account2018/My3Login?msisdn=" + phoneNumber
})();
