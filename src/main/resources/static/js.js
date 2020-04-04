//przypisywanie wiadomosci do poszczegolnych pól
//wysylanie wiadomosci
//polaczenie od razu po starcie w html'u i wyswietlenie samego json.body()

var client = null;

//do paragrafu p z pliku html, przypisanie wartosci user i value, pokazanie wiadomosci
function showMessage(value,user) {
    var newResponse = document.createElement('p');
    newResponse.appendChild(document.createTextNode(user));
    newResponse.appendChild(document.createTextNode(": "));
    newResponse.appendChild(document.createTextNode(value));
    var response=document.getElementById('response');
    response.appendChild(newResponse);

}

//wyslanie wiadomosci z podanymi wartosciami na endpoint , na dole Json
function sendMessage() {
    var messageToSend = document.getElementById('messageToSend').value;
    var user = document.getElementById('user').value;

    client.send("/app/chat",{}, JSON.stringify({'value': messageToSend,'user':user}));
}
//łączenie sie uzycie polaczenia z bodu html i subskrypcji , uzycie JSON'a do wyswietlenia , ale samego body Json'a.
function connect() {
    client = Stomp.client('ws://localhost:8080/chat');
    client.connect({},function (frame) {
        client.subscribe("/topic/messages",function(message){
            showMessage(JSON.parse(message.body).value,JSON.parse(message.body).user)
        });
    })
}