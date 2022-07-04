// Synchronous
// const
//     getUserSync = (id) => {
//         // let name = '';
//         // if (id === 1) {
//         //     name = 'John';
//         // } else {
//         //     name = 'Jane';
//         // }
//         const name = id === 1 ? 'John' : 'Jane';
//         return { id, name };
//     },
//     userOne = getUserSync(1),
//     userTwo = getUserSync(2),
//     hello = 'Hello world!';
// console.log(userOne);
// console.log(userTwo);
// console.log(hello);

// Asynchronous
const
    getUser = (id, callback) => {
        const time = id === 1 ? 3000 : 2000;
        setTimeout(() => {
            const name = id === 1 ? 'John' : 'Jane';
            callback({ id, name });
        }, time);
    },
    userOne = getUser(1, (result) => {
        console.log(result);
    }),
    userTwo = getUser(2, (result) => {
        console.log(result);
    }),
    hello = 'Hello world!';
console.log('Done!');