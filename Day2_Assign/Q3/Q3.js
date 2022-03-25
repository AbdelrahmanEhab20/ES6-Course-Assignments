
// Use fetch() to add new post,
// using this POST API: https://jsonplaceholder.typicode.com/posts
// Knowing that:
// a. You should use POST method.
// b. This API takes an object of the new post as the following: 
//{ title: 'foo', body: 'bar', userId: 1 }
// c. If the post is added successfully the API should return 
/*this object:
{
id: 101,
title: 'foo',
body: 'bar',
userId: 1
}*/

// Scipt
// POST request using fetch()
//(a.)
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    //add New { title: 'foo', body: 'bar', userId: 1 }
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())

    //Display at the Console To be Sure That The Request IS Done (c.)
    .then(json => console.log(json));


    //OUTPUT
// { title: 'foo', body: 'bar', userId: 1, id: 101 }
// body: "bar"
// id: 101
// title: "foo"
// userId: 1
// [[Prototype]]: Object