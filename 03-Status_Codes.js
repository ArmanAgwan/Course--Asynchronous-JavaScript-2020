const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.ststus === 200){
        console.log(request, request.responseText);
    } else if(request.readyState === 4){
        console.log('could not fetch the data');
    }
});

request.open('Get', 'https://jsonplaceholder.typicode.com/todos/');
request.send();