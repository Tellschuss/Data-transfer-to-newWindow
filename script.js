let popup;
let userInputUri;
let popupTextReceived;

function OpenPopup() {
  // 1 - assign user input to a variable
  userInputUri = document.getElementById("txtLink").value;
  // 2 - open the popup and pass in variable
  popup = window.open(
    userInputUri,
    "Popup",
    "left=500,top=300,width=1000,height=600",
    "resizeble: both"
  );
}

function SendToPopup() {
  if (popup != null && !popup.closed) {
    popupTextReceived = popup.document.getElementById("popup-text-received");
    popupTextReceived.innerHTML = userInputUri;
    popup.focus();
  } else {
    alert("Popup has been closed.");
  }
}
