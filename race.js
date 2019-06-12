function fakePromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('FUNC FAKE PROMISE 1')
        }, 2000);
    })
}

function fakePromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('FUNC FAKE PROMISE 2')
        }, 1000);
    })
}

const runWithRace = async () => {
    const asyncPromise1 = fakePromise1();
    const asyncPromise2 = fakePromise2();
    const resultBestTime = await Promise.race([ asyncPromise1, asyncPromise2 ]);
    console.log({ resultBestTime })
}

runWithRace();