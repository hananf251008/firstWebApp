    $(document).ready(function () {
    function addRow(user) {
        $("#usersList").append("<tr><td>" + user.name +
            "</td><td>"+user.email+"</td>" +"<td>"+user.password+"</td>"+
            "<td>" +
            "<button onclick='findUserById(" + user.id + ")'>" + "Profile" + "</button>" +
            "</td>"+
            "</tr>");
    }
    $.ajax({
    type: "GET",
    url: "/users/getAll",
    success: function (users) {
    const usersList = $("#usersList");
    users.forEach(function (users) {
    usersList.append("<tr>" +
    +"<td>"+ users.name + "</td>"
    "<td>"+ users.email+"</td>"+
    "<td>"+users.password+"</td>"
    "<td>" +
    "<button onclick='findUserByid(" + users.email + ")'>" + "Profile" + "</button>" +
    "</td>"
    +"</tr>");
});
},
    error: function (error) {
    console.error("Error fetching product data: ", error);
}
});

    $("#userForm").submit(function (event) {
    event.preventDefault();
    let user = {
    name: $("#name").val(),
     password: $("#password").val(),
    email: $("#email").val(),

};

    $.ajax({
    type: "POST",
    url: "/users/addUser",
    contentType: "application/json",
    data: JSON.stringify(user),
    success: function () {
    alert("user saved successfully!");
    addRow(users)

},
    error: function (error) {
    console.log("Error saving person: ", error);
}
});
});
});


    function findUserById(id) {
    $.ajax({
        type: "Get",
        url: "/user/findUserId/"+id,
        success: function (user) {
            alert("find user successfully id="+user.name);
            window.location.href = "/firstp.html?email="+email;//+ encodeURIComponent(user.id);

        }
        error: function (error) {
            console.log("Error saving person: ", error);
        }
    });

}
    async function encryptNumber(number,key ) {
        const encoder = new TextEncoder();
        const data = encoder.encode(number.toString());

        // Import the key
        const importedKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(key),
            { name: 'AES-CBC' },
            false,
            ['encrypt', 'decrypt']
        );

        // Encrypt the data
        const encryptedData = await crypto.subtle.encrypt(
            { name: 'AES-CBC', iv: crypto.getRandomValues(new Uint8Array(16)) },
            importedKey,
            data
        );

        // Convert the encrypted buffer to a hexadecimal string
        const encryptedArray = Array.from(new Uint8Array(encryptedData));
        const encryptedHex = encryptedArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        return encryptedHex;
    }

    async function decryptNumber(encryptedHex, key) {
        // Import the key
        const importedKey = await crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(key),
            { name: 'AES-CBC' },
            false,
            ['encrypt', 'decrypt']
        );

        // Convert the hexadecimal string to a buffer
        const encryptedArray = encryptedHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16));
        const encryptedBuffer = new Uint8Array(encryptedArray).buffer;

        // Decrypt the data
        const decryptedData = await crypto.subtle.decrypt(
            { name: 'AES-CBC', iv: new Uint8Array(16) },
            importedKey,
            encryptedBuffer
        );

        // Decode the decrypted data
        const decryptedText = new TextDecoder().decode(decryptedData);

        return decryptedText;
    }
