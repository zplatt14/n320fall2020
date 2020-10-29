// //get data using AXIOS
// axios.get("data.json")
// .then(function (newData){
//     console.log(newData);
// })

// //get data using fetch
// fetch("data.json")
//     .then(newData => newData.json())
//     .then(newData => console.log(newData));

//inserting JSON into view

new Vue({
    el: "#vueListing",
    data(){
        return {
            make: null
        }
    },
    mounted(){
        fetch("data.json") 
            .then(response => response.json())
            .then(jsonData => {
                this.make = jsonData.Make;
                console.log(jsonData.Make)
            })
    }
    
})