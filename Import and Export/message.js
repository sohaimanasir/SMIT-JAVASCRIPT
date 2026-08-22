//  ============== named export ==============
export const message = "Javascript module"

const city = "karachi";
function showCity(){
    return `City: ${city}`;
}

export {city , showCity};