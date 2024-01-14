// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-01-06
// @description  try to take over the world!
// @author       You
// @match        https://aws-exam.net/saa/saa_q.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aws-exam.net
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// ==/UserScript==

(function() {
    'use strict';
    const newNode = document.createElement("div");
    newNode.innerHTML=""+Cookies.get("correct_problem")+"/"+Cookies.get("num_problem");

    let buttons=$("a.toAPage");

    buttons.click(function(){
        var id = $(this).attr("id");
        if(id=="true"){
            console.log("correct!");
            Cookies.set("num_problem", parseInt(Cookies.get("num_problem")||0)+1);
            Cookies.set("correct_problem", parseInt(Cookies.get("correct_problem")||0)+1);
            console.log(Cookies.get("correct_problem"),"/",Cookies.get("num_problem"));
            newNode.innerHTML=""+Cookies.get("correct_problem")+"/"+Cookies.get("num_problem");
        }
        if(id=="false"){
            console.log("wrong");
            Cookies.set("num_problem", parseInt(Cookies.get("num_problem")||0)+1);
            console.log(Cookies.get("correct_problem"),"/",Cookies.get("num_problem"));
            newNode.innerHTML=""+Cookies.get("correct_problem")+"/"+Cookies.get("num_problem");
        }
    });
    let roundbox = document.querySelector("#qPage > div:nth-child(1)");
    let problem_sentence = document.querySelector("#qPage > div:nth-child(1) > div.sentence");
    const reset_button = document.createElement("button");
    reset_button.addEventListener('click', ()=>{
        console.log("reset");
        Cookies.set("num_problem", 0);
        Cookies.set("correct_problem", 0);
    });

    reset_button.innerHTML="リセット";
    newNode.append(reset_button);
    roundbox.insertBefore(newNode, problem_sentence);
})();
