


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