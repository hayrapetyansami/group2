

localStorage.setItem("isFavorite", true); // ուղարկում ենք localStorage-ի մեջ
localStorage.getItem("isFavorite"); // ստանում ենք localStorage-ի մեջից
// localStorage.removeItem("price"); // ջնջում ենք localStorage-ի մեջից կոնկրետ item-ը
// localStorage.clear(); // localStorage-ի մեջից ամեն ինչ ջնջում ա
localStorage.key(4); // localStorage-ի մեջից ստանում ենք item-ը ըստ index-ի
localStorage.length; // ստանում ենք localStorage-ի length-ը

// console.log(Object.keys(localStorage));
// console.log(Object.values(localStorage));

sessionStorage.setItem("exit", false);