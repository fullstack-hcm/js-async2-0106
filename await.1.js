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

async function runWithAsync(){
    let mssWho = await who();
    let mssWhere = await where();
    let mssWhat = await what();
    console.log({ mssWho, mssWhere, mssWhat })
    var end = new Date().getTime();
    console.log(end - start);
};
runWithAsync();