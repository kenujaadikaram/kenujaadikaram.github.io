function printA(a){
    console.log(a);
}
function printB(a){
    alert(a);
}
function Cwidth(a,b){
document.getElementById(a).style.width=b+'px';
}
function Cheight(a,b){
document.getElementById(a).style.height=b+'px';
}
function Csize(a,b,c){
    document.getElementById(a).style.width=b+'px';
    document.getElementById(a).style.height=c+'px';
}
function Ccolor(a,b){
    document.getElementById(a).style.backgroundColor=b;
}
function Cposition(a,c,d){
    document.getElementById(a).style.top=c+'px';
    document.getElementById(a).style.left=d+'px';
}
function Cposition(a,b){
    document.getElementById(a).style.position=b;
}
function Ctop(a,b){
    document.getElementById(a).style.top=b+'px';
}
function Cleft(a,b){
    document.getElementById(a).style.left=b+'px';
}

const chats = document.getElementById('chats');
let cs=1;
function newc(){
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `Message ${cs}`;
    messageDiv.style.height = '24px';
    messageDiv.style.width = '180px';
    messageDiv.style.margin = "10px";
    messageDiv.style.padding = "10px";
    messageDiv.style.background = "white";
    messageDiv.style.borderRadius = "10px";
    messageDiv.style.position = 'relative';
    messageDiv.style.top = (cs * -54+80) + 'px';
    messageDiv.style.left = (cs * 250-200) + 'px';
    chats.appendChild(messageDiv);
    Cwidth('chats',cs*250+40);
    cs++;
    sendWhatsApp('+0044 7546 767804', 'Hello from JavaScript!');
    openWhatsAppChat('+0044 7546 767804');
}
function sendWhatsApp(number, message) {
    // Remove any non-digit characters from the number (except +)
    const cleanNumber = number.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Usage:
sendWhatsApp('+0776551860', 'Hello from JavaScript!');
function openWhatsAppChat(number) {
    const cleanNumber = number.replace(/[^\d+]/g, '');
    const url = `https://wa.me/${cleanNumber}`;
    window.open(url, '_blank');
}