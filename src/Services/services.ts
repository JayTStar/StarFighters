import * as utils from "../Utils/utils.js"

export async function battle(firstUser:string, secondUser:string){
    const firstUserStarCount = await utils.getStars(firstUser);
    const secondUserStarCoun = await utils.getStars(secondUser);

    
}