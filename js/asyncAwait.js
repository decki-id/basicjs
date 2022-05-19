function tryPromise() {
    return new Promise((resolve, reject) => {
        const time = 3000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('Promise resolved.');
            }, time);
        } else {
            reject('Too long!');
        }
    });
}

async function tryAsync() {
    try { // Async Await Error Handling
        const trying = await tryPromise();
        console.log(trying);
    } catch (error) {
        console.log(error);
    }
}

tryAsync();
// const trying = tryPromise();
// trying.then(() => console.log(trying)).catch(() => console.log(trying)); // Promise Error Handling