// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$( document ).ready(function() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    //recognition.interimResults = true;
    var a = 0;
    recognition.onresult = function(event) {
      console.log(event);
      //JSON.stringify(event)
      // var speach_obj = jQuery.parseJSON(event);
      // event.results[0][0].transcript
       $('#sourceText').append( "<p>"+JSON.stringify(event.results[a][0].transcript) +"</p>");
       // every time a phrase is said event.results[1][0].transcript increase first [] by one
       a++;

       var newScript = document.createElement('script');
       newScript.type = 'text/javascript';
       var sourceText = escape(document.getElementById("sourceText").innerHTML);
      // WARNING: be aware that YOUR-API-KEY inside html is viewable by all your users.
      // Restrict your key to designated domains or use a proxy to hide your key
      // to avoid misuage by other party.
      //
      var source = 'https://www.googleapis.com/language/translate/v2?key=API-KEY&source=en&target=te&callback=translateText&q=' + sourceText;
      newScript.src = source;

      // When we add this script to the head, the request is sent off.
      document.getElementsByTagName('head')[0].appendChild(newScript);
    }
    recognition.start();
  });