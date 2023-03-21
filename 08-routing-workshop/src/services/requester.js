


export const request = async (url, method) => {
    const response = await fetch(url, {
        method: method
    });
    const result = await response.json();
    return result;
} 