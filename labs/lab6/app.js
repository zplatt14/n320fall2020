//book component
Vue.component("book-view",{
    props: [ "book" ],
    template: "\
    <li>\
     {{book.Title}}\
     {{book.Cover}}\
     {{book.Author}}\
    </li>\
    "
});

//data for books to be displayed
var vue = new Vue({
    el: "#mainDiv",
    data: {
        books: [
            {id: 0, Title: "Harry Potter", Cover: "🔮", Author: "J.K. Rowling", seen: true },
            {id: 1, Title: "Percy Jackson", Cover: "🗡️", Author: "Rick Riordan", seen: false  }
        ]
    },
    //change what book is displayed
    methods: {
        changeBook: function(){
            this.books[0].seen = !this.books[0].seen;
            this.books[1].seen = !this.books[1].seen;
        }
    }
});
