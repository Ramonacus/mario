import Entity from "./Entity.js";
import Jump from './traits/Jump.js';
import Go from "./traits/Go.js";
import {loadSpriteSheet} from "./loaders.js";

export function createMario() {
    return loadSpriteSheet('mario')
        .then(sprite => {
            const mario = new Entity();
            mario.size.set(14, 16);

            mario.addTrait(new Jump());
            mario.addTrait(new Go());

            const frames = ['run-1', 'run-2', 'run-3'];

            function routeFrame(mario) {
            	if (mario.go.dir !== 0) {
					const correctionFactor = 10
					const frameIndex = (Math.floor(mario.go.distance / correctionFactor) % frames.length)
            		const frameName = frames[frameIndex];
					return frameName;
				}

            	return 'idle';
			}

            mario.draw = function drawMario(context) {
                sprite.draw(routeFrame(mario), context, 0, 0);
            };

            return mario;
        });

}
