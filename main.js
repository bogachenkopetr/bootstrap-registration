$( document ).ready(function() {
    const $registrationForm = $("#registration");
    const $nameField = $("#name");
    const $surnameField = $("#surname");
    const $emailField = $("#email");
    const $dobField = $("#datepicker");
    const $passwordField = $("#password");
    const $confPasswordField = $("#confPassword");
    const $errorMess = $("#errorMess");
    const $successModal = $("#successModal");
    const $closeModal = $("#closeModal");

    $dobField.datepicker({
        locale: 'ru-ru',
        uiLibrary: 'bootstrap4',
        format: 'dd-mm-yyyy'
    });

    $registrationForm.submit(function(e) {
        e.preventDefault();
        $registrationForm.addClass("was-validated");

        const name = $nameField.val().trim();
        const surname = $surnameField.val().trim();
        const email = $emailField.val().trim();
        const dob = $dobField.val().trim();
        const password = $passwordField.val().trim();
        const confPassword = $confPasswordField.val().trim();
        let isValid = true;

        if(name == "") {
            $nameField.siblings('.invalid-feedback').text("Введите имя");
            isValid = false;
        } else if(surname == "") {
            $surnameField.siblings('.invalid-feedback').text("Введите фамилию");
            isValid = false;
        } else if(email == "") {
            $emailField.siblings('.invalid-feedback').text("Введите email");
            isValid = false;
        } else if(dob == "") {
            $dobField.siblings('.invalid-feedback').text("Введите дату рождения");
            isValid = false;    
        } else if(password.length < 6) {
            $passwordField.siblings('.invalid-feedback').text("Введите пароль");
            isValid = false;
        } else if(confPassword.length < 6) {
            $confPasswordField.siblings('.invalid-feedback').text("Повторите пароль");
            isValid = false;
        } else if(password !== confPassword) {
            $errorMess.text("Пароли не совпадают");
            isValid = false;
        }

        if (isValid === true){
            $successModal.modal();
        }
    });

    $closeModal.click(function(){
        $nameField.val("");
        $surnameField.val("");
        $emailField.val("");
        $dobField.val("");
        $passwordField.val("");
        $confPasswordField.val("");
        $registrationForm.removeClass("was-validated");
    });
});    