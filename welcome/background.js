chrome.runtime.onInstalled.addListener(async ()=>{
    let url = chrome.runtime.getURL('welcome/welcome.html');
    let tab = await chrome.tabs.create({url});
    console.log(`Create tab ${tab.id}`);
});

chrome.tabs.query({}, function(tabs) { 
    console.log("query");
    var animals=[];
    tabs.forEach(element => {
    console.log(element.url);
    animals.push(element.url);
    });
    var str=animals.join(', ');
    console.log(str);

    BuiltBlob = new BlobBuilder(""); 
    BuiltBlob.append(str); 
    BlobToSave = BuiltBlob.getBlob(); 
    chrome.tabs.create({'url': createObjectURL(BlobToSave), 'selected': false});
});
var myUrlToCall = "http://www.google.com/";

//IS 3 AM YET?
function runTimer() {
    setTimeout(function () {
        var dtNow = new Date();
        var hoursNow = dtNow.getHours() * 1;
        if (hoursNow >= 3) {
            //Open new window here (but how can I know if it's already open?)
            window.open(myUrlToCall);
        } else {
            runTimer();
        }
    }, 1000);
}
