function copyToClipboard() {
  var copyText = document.getElementById("#text");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied: " + copyText.value);
}
