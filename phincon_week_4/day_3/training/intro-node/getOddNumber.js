
function getOddNumber(num) {
    const promise = new Promise((resolved, rejected) => {
        if (num % 2 !== 0) {
            resolved("Angka yang anda masukkan adalah bilangan ganjil");
        } else {
            rejected("Angka yang anda masukkan adalah bilangan genap");
        }
    });
    return promise;
}

async function execute(num) {
    try {
        const result = await getOddNumber(num);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

execute(21);
