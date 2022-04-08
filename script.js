let popup;
function OpenPopup() {
  popup = window.open(
    "Popup.htm",
    "Popup",
    "width=300,height=100",
    "resizeble: both"
  );
}
function SendToPopup() {
  if (popup != null && !popup.closed) {
    let lblLink = popup.document.getElementById("lblLink");
    lblLink.innerHTML =
      document.getElementById("txtLink").value;
    popup.focus();
  } else {
    alert("Popup has been closed.");
  }
}