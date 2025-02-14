/** @module Login-Script */
/** 
* membuat variabel loginFormElement untuk tampilan form
* @constant {HTMLElement}
*/

const loginFormElement = document.querySelector('#loginForm');

/** 
* membuat variabel inputEmailElement untuk tampilan input email
* @constant {HTMLElement}
*/ 
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
* membuat variabel expectedEmail untuk menyimpan informasi email sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/** 
* membuat variabel expectedPassword untuk menyimpan informasi password sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* comment: menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/** 
* membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan
* @constant {string}
*/
  const email = inputEmailElement.value;

/** 
* membuat variabel password untuk menyimpan nilai passsword yang didapatkan saat button ditekan
* @constant {string}
*/
  const password = inputPasswordElement.value;

/* comment: memastikan bahwa nilai email dan password sesuai dengan  nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    /* comment: jika sesuai maka program akan berpindah ke halaman home */
    goToHome();
  } else {
    /* comment: namun jika tidak sesuai akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});
