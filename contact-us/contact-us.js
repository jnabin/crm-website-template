var currentLng = "en";
$(document).ready(function () {
  let userLang = navigator.language || navigator.userLanguage;
  if (userLang.includes("fr")) {
    currentLng = "fr";
    processImageSrc();
  } else if (userLang.includes("en")) {
    currentLng = "en";
  }
});
function load() {
  let translate = new Translate();
  let attributeName = "data-tag";
  translate.init(attributeName, currentLng);
  translate.process();
}

function processImageSrc() {
  document.getElementById("message-textbox").placeholder =
    "Écrire votre message ici";
  document.getElementById("subscription-input-box").placeholder =
    "Entrer votre courriel";
}

//Set your APP_ID
var APP_ID = "lwjs0ya2";

window.intercomSettings = {
  app_id: APP_ID,
  custom_launcher_selector:'#chatWithUsIntercom'
};
(function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic("reattach_activator");
    ic("update", w.intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args);
    };
    w.Intercom = i;
    var l = function () {
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.intercom.io/widget/" + APP_ID;
      var x = d.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    };
    if (document.readyState === "complete") {
      l();
    } else if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  }
})();
