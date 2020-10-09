//new component
Vue.component("new-component",{
    template: "<li> This is an example </li>"
});

//put message in example div
var example = new Vue({
    el: "#example",
    data: { 
        example: "example",
        messages: [ 'Message 1', 'Message 2', 'Message 3' ]
        }
});

