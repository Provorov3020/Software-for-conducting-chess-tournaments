 // Пример пользователей с логинами и паролями по ролям 
    const users = {
        player: {email: "player@example.com", password: "player123"},
        organizer: {email: "organizer@example.com", password: "organizer123"},
        admin: {email: "admin@example.com", password: "admin123"}
    };
    
	// Функция валидации полей регистрации
    function validateRegistration() {
    let valid = true;

    // Получаем элементы полей и контейнеры для ошибок
    const lastName = document.getElementById('regLastName').value.trim();
    const lastNameError = document.getElementById('regLastNameError').value.trim();;

    const firstName = document.getElementById('regFirstName').value.trim();
    const firstNameError = document.getElementById('regFirstNameError').value.trim();;

    const middleName = document.getElementById('regMiddleName').value.trim();
    const middleNameError = document.getElementById('regMiddleNameError').value.trim();;

    const birthDate = document.getElementById('regBirthDate').value.trim();
    const birthDateError = document.getElementById('regBirthDateError').value.trim();;

    const birthPlace = document.getElementById('regBirthPlace').value.trim();
    const birthPlaceError = document.getElementById('regBirthPlaceError').value.trim();;

    const phone = document.getElementById('regPhone').value.trim();
    const phoneError = document.getElementById('regPhoneError').value.trim();;

    const email = document.getElementById('regEmail').value.trim();
    const emailError = document.getElementById('regEmailError').value.trim();
	
	const Login = document.getElementById('regLogin').value.trim();
	const LoginError = document.getElementById('regLoginError').value.trim();
	
    const password = document.getElementById('regPassword').value.trim(); 
	const passwordError = document.getElementById('regPasswordError').value.trim();
	
	// Очистка предыдущих ошибок
    document.getElementById('regLastNameError').innerText = '';
    document.getElementById('regFirstNameError').innerText = '';
    document.getElementById('regMiddleNameError').innerText = '';
    document.getElementById('regBirthDateError').innerText = '';
    document.getElementById('regBirthPlaceError').innerText = '';   
	document.getElementById('regPhoneError').innerText = '';
	document.getElementById('regEmailError').innerText = '';	
    document.getElementById('regPasswordError').innerText = '';

    // Проверка заполнения Фамилии
    if (!lastName) {
        document.getElementById('regLastNameError').innerText = 'Пожалуйста, введите фамилию.';
            valid = false;
    }

    // Проверка заполнения Имени
    if (!firstName) {
        document.getElementById('regFirstNameError').innerText = 'Пожалуйста, введите имя.';
        valid = false;
    }

    // Проверка заполнения Отчества
    if (!middleName) {
        document.getElementById('regMiddleNameError').innerText = 'Пожалуйста, введите отчество.';
        valid = false;
    }

    // Проверка даты рождения 
    if (!birthDate) {
        document.getElementById('regBirthDateError').innerText = 'Пожалуйста, выберите дату рождения.';
        valid = false;
    

    // Проверка места рождения
    if (!birthPlace) {
        document.getElementById('regBirthPlaceError').innerText = 'Пожалуйста, введите место рождения.';
        valid = false;
    }

    // Проверка телефона по паттерну
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    if (!phone) {
        document.getElementById('regBirthPlaceError').innerText = 'Пожалуйста, введите место рождения.';
        valid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Неверный формат телефона";
        valid = false;
    }

    // Проверка email
    if (!email) {
       document.getElementById('regEmailError').innerText = 'Пожалуйста, введите электронную почту.';
        valid = false;
    } else {
        // Используем встроенную проверку browser email type + дополнительная регулярка для базового контроля
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Неверный формат электронной почты";
            valid = false;
    
    if (!consent.checked) {
       alert('Пожалуйста, согласитесь на обработку персональных данных');
       return; // Не выполнять переход, если нет согласия
    }
    if (valid) {
		alert('Регистрация успешна!');
        // Логика успешной регистрации и переход, например
        window.location.href = 'Authorization-on-chess_tournament.html';
    }
  return false;	
}
function validateLogin() {  
   let valid = true;
   
     
   const loginLogin = document.getElementById('loginLogin').value.trim();
   const loginPassword = document.getElementById('loginPassword').value.trim();
     
   
    // Сброс ошибок
    document.getElementById('loginLoginError').innerText = '';
    document.getElementById('loginPasswordError').innerText = '';

            if (loginLogin === '') {
                document.getElementById('loginLoginrror').innerText = 'Пожалуйста, введите имя пользователя.';
                valid = false;
            }
            if (loginPassword === '') {
                document.getElementById('loginPasswordError').innerText = 'Пожалуйста, введите пароль.';
                valid = false;
            }
							
				  
           if (valid) {
             alert('Вы успешно вошли на сайт!');
             window.location.href = 'Chess-tournament.html'; 
		  } 
  return false;
}
	
	
