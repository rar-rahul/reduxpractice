
export const fetchComments = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

export const postComment = async (data) => { 
    return fetch('http://localhost:3000/comments' ,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringfy(data)
    })
}