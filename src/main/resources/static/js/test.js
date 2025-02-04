function save_data(){

    ("#save-form").submit(function (event) {
    event.preventDefault();
    let user = {
            address: $("#address").val(),
            age: $("#age").val(),
            email: $("#email").val(),
            name: $("#name").val(),
            password: $("#password").val(),

  };
    alert(JSON.stringify(user))
    $.ajax({
            type: "PUT",
            url: "/update/1",
            contentType: "application/json",
            data: JSON.stringify(user),
            success: function () {
        alert("user saved successfully!");
    }
      error: function (error) {
       alert("Wrong Email Or Password ", error);
    }
})


