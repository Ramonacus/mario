import {loadImage} from "./loaders.js";
import Spritesheet from "./SpriteSheet.js";

export function loadMarioSprite() {
    return loadImage('/img/characters.gif')
        .then(image => {
            const sprites = new Spritesheet(image, 16, 16);
            sprites.define('idle', 276, 44, 16, 16);
            return sprites;
        });
}