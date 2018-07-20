export default function createDashboardLayer() {
	const spriteBuffer = document.createElement('canvas');
	spriteBuffer.width = width;
	spriteBuffer.height = height;
	const spriteBufferContext = spriteBuffer.getContext('2d');

	return function drawDashboardLayer(context, camera) {

	}
}