const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
  
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resouce');
      }
    });
  
    request.open('GET', resource); 
  
    request.send();
  });

};

getTodos('luigi.json').then(data => {
    console.log('promise resolved:',data);
}).catch(err => {
    console.log('promise rejected:', err);
});

  //---- Promise Example---- //

  const getSomething = () => {

    return new Promise((resolve, reject) => {
        // Fetch Something
        resolve('some data');
        // reject('some error');
    });
  };

//   getSomething().then((data) => {
//     console.log(data);
//   }, (err) => {
//     console.log(data);
//   });

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})