chrome.browserAction.onClicked.addListener(function(tab){
  var newURL = "voca.html";
  chrome.tabs.create({ url: newURL });
});
