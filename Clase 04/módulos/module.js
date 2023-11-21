const login = (user, pass) => {
    if(!user && pass) return console.log("No autorizado") 
    console.log(`Welcome ${user}`);
}

const LIKES = Math.random()

//CommonJS exports
/*module.export = {
    login,
    LIKES
}*/

//IES Module
export {login, LIKES}