function sendMessage(){
  var name = document.getElementById("name").value;
  var country = document.getElementById("country").value;
  var status = document.getElementById("status").value;
  var question = document.getElementById("question").value;

  var phone = "2349060166133";
  var text = "Name: "+name+
             "%0ACountry: "+country+
             "%0ARelationship Status: "+status+
             "%0AQuestion: "+question;

  var url = "https://wa.me/"+phone+"?text="+text;
  window.open(url);
}
