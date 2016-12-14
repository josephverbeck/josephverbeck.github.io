// Contact Form Scripts


document.getElementById('submit').addEventListener('click', function() {
    alert("I'm a box");
    console.log("0");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone_number = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    $.post("https://node-josephverbeck-api.herokuapp.com/create_user",
        {
            name: name,
            email: email,
            phone: phone_number,
            message: message
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    alert("still a box");
});