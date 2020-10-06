
const a = [1, 1, 1,  3, 7, 8]



console.log(
    a.reduce((acc, item) => acc.includes(item) ? (acc) : [...acc, item], [])
)
