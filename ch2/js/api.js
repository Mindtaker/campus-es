async function awaitMethod(url) {
    try {
        const response = await fetch(url)
        return await response.json();
    } catch (error) {
        console.log("Error: " + error);
    }
}

function promiseMethod(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(fetch(url)
                    .then(response => response.json())
                );
            } catch (error) {
                reject("Error: " + error);
            }
        }, 500);
    });
}

function* generatorMethod(url) {
    yield fetch(url)
        .then(resp => resp.json())
        .then(data => {
            return data;
        });
}

async function getUsers(callback) {
    const url = `https://jsonplaceholder.typicode.com/users/`;
    if (callback == generatorMethod) {
        await callback(url)
            .next()
            .value
            .then(response => {
                console.log(desestructurateUser(response));
                return response;
            });
    } else {
        await callback(url)
            .then(response => {
                console.log(desestructurateUser(response));
                return response;
            });
    }
}

async function getAlbums(id, callback) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/albums`;
    if (callback == generatorMethod) {
        await callback(url)
            .next()
            .value
            .then(response => {
                console.log(response);
                return response;
            });
    } else {
        await callback(url)
            .then(response => {
                console.log(response);
                return response;
            });
    }
}

let desestructurateUser = (array) => array.map(({
    id,
    name,
    username,
    email,
    address: {
        street,
        suite,
        city,
        geo: {
            lng
        }
    },
    phone,
    ...rest
}) => ({
    id: id,
    name: name,
    username: username,
    email: email,
    address: {
        street: street,
        suite: suite,
        city: city,
        geo: {
            lng: lng
        }
    },
    ...rest
}));