function checkLocation(location) {
    return new Promise((resolve, reject) => {
        if(Object.is(location, 'HaNoi'))
            return resolve('HaNo Nice');
        return reject('Another Places');
    })
}

// checkLocation('HaNoi')
//     .then(message => console.log(message))
//     .catch(err => console.err(err));

function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`WHO`)
            resolve('WHO');
        }, 5000);
    })
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`WHAT`)
            resolve('WHAT');
        }, 2000);
    })
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`WHERE`)
            resolve('WHERE');
        }, 3000);
    })
}
var start = new Date().getTime();
async function runWithPromiseAll() {
    let mssWho = who();
    let mssWhere = where();
    let mssWhat = what();
    let [ whoResult, whereResult, whatResult ] = await Promise.all([mssWho, mssWhere, mssWhat]);
    console.log({ whoResult, whereResult, whatResult }) // 0.5s
    var end = new Date().getTime();
    console.log(end - start);
}
runWithPromiseAll();