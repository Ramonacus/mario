export function createBackgroundLayer(level, sprites) {
    const buffer = document.createElement('canvas');
    const bufferCtx = buffer.getContext('2d');
    buffer.width = 256;
    buffer.height = 240;


    level.tiles.forEach((tile, x, y) => {
        sprites.drawTile(tile.name, bufferCtx, x, y);
    });

    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    }
}

export function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity => {
            entity.draw(context);
        });
    }
}

