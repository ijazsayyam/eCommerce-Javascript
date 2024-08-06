$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            url: 'https://dummyjson.com/auth/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: function(response) {
                $('#message').html('<div class="alert alert-success">Login successful!</div>');
            },
            error: function(xhr) {
                $('#message').html('<div class="alert alert-danger">Login failed: ' + xhr.responseJSON.message + '</div>');
            }
        });
    });
});
