






function myFunction() {
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
    
    alert("Copied the text: " + copyText.value);
  }