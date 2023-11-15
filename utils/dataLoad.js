export const getLocationData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const result = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return await result;
};