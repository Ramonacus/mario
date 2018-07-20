import Timer from "./Timer.js";
import Camera from "./Camera.js";
import {createLevelLoader} from "./loaders/level.js";
import {setupKeyboard} from "./input.js";
import {setupMouseControl} from "./debug.js";
import {loadEntities} from "./entities.js";
import Entity from "./Entity.js";
import PlayerController from "./traits/PlayerController.js";

function createPlayerEnv(playerEntity) {
	const playerEnv = new Entity();
	const playerController = new PlayerController();
	playerController.setPlayer(playerEntity)
	playerEnv.addTrait(playerController);
	return playerEnv;
}

async function main(canvas) {
	const context = canvas.getContext('2d');
	const entityFactory = await loadEntities();
	const loadLevel = await createLevelLoader(entityFactory);
	const level = await loadLevel('1-1');

	const camera = new Camera();
	const mario = entityFactory.mario();
	const playerEnv = createPlayerEnv(mario);
	level.entities.add(playerEnv);

	const input = setupKeyboard(mario);
	input.listenTo(window);

	setupMouseControl(canvas, mario, camera);

	const timer = new Timer(1 / 60);

	timer.update = function update(deltaTime) {
		level.update(deltaTime);

		camera.pos.x = Math.max(mario.pos.x - 100, 0);

		level.comp.draw(context, camera);
	};

	timer.start();

}

const canvas = document.getElementById('screen');
main(canvas);