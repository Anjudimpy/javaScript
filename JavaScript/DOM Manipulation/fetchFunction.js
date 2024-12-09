function getDetails(id){
    // const request =  fetch(`https://dummyjson.com/users/${id}`);
    // console.l(request);
    //  const responogse = request.then((response) => {
    //      return response.json();
    //  });

    //  response.then((user) => console.log(user));

    fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((user) => console.log(user));
}

getDetails(2);