function displayboard() {
   const board = document.querySelector('.board');
   let box;

   for (let i = 0; i < 8; i++) {

      for (let n = 0; n < 8; n++) {
         box = document.createElement('div');
         board.appendChild(box);
         if (i % 2 == n % 2) {
            box.className = 'box black';
         } else {
            box.className = 'box white';
         }
      };
   };
};
displayboard();