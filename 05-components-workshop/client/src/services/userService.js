


const baseURL = 'http://localhost:3005/api/users';

export async function getAll() {
    const response = await fetch(`${baseURL}`);
    const result = await response.json();

    // console.log(users);

    return result.users;
}

export async function getOne(userId) {
    const response = await fetch(`${baseURL}/${userId}`);
    const result = await response.json();

    return result.user;
}

export async function create(userData) {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
}