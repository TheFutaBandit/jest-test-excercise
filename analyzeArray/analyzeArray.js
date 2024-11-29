export const analyzeArray = (array) => {
    let sum = array.reduce((prev,curr) => {
        return (prev + curr)
    },0)

    return {
        average: sum/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

const object = analyzeArray([1,8,3,4,2,6]);

console.log(object);


object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};