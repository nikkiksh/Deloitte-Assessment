(function() {
    fetch('../mock/main.json').then((response,err)=>{
            if(response?.data)
            console.log(response.data.dropdown);
            if(err)
            console.log(err);
    })
    .catch((err)=>{
        console.log(err);
    })
})()