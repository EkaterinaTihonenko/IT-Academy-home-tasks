/*Нужно выбрать валидный емайл
mail@mail.312412
mail213_123@mail.com
_@mail.ru
324mail@mail.ru
t@test.ru
*/

function validate() {
   const mail = document.getElementById("text").value;
   const regx = /^[^!@#$%^&*()_+]\w[^!@#$%^&*()_+]+@mail.com$|^[^!@#$%^&*()_+]\w[^!@#$%^&*()_+]+@mail.ru$/gm;

   if (regx.test(mail)) {
      alert('Email является валидным!');
      return true;
   } else {
      alert('Email является не валидным!');
      return false;
   };
};