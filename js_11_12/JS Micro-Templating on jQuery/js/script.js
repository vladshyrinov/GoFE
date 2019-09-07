$(function(){
  
  var html = $('#root').html();
  
  var data = {
    mainLinks : [
    {name:"Главная"},
    {name:"Товары"},
    {name:"О_нас"},
    {name:"Контакты"}
    ],
    sidebarLinks : [
    {name:"Ноутбуки"},
    {name:"Планшеты"},
    {name:"Телефоны"},
    {name:"Телевизоры"},
    {name:"Бытовая техника"},
    {name:"Автотовары"}
    ],
    text : `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Neque animi deleniti error 
    repellendus, iure totam! Numquam atque commodi 
    excepturi laborum explicabo, rerum dolorum veritatis
    odio, velit consectetur, magnam autem necessitatibus.`,
    imagesAdress: {
        logo : 'img/logo.jpg',
        bicycle : 'img/bicycle.jpg'
    }
  };

var content = tmpl(html, data);

$('body').append(content);

});
