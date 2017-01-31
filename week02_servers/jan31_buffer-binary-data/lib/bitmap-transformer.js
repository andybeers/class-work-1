const BitmapHeader = require('./bitmap-header');

module.exports = class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;
        // any other setup needed....
    }

    transform(transformation) {
        const header = this.header;
        const buffer = this.buffer;

        let offset = header.pixelOffset;
        // 1. looping through the pixels
        while(offset < header.fileSize) {
            // 2. reading the colors of the pixel
            const color = {
                b: buffer.readUInt8(offset),
                g: buffer.readUInt8(offset + 1),
                r: buffer.readUInt8(offset + 2)
            }

            // 3. transform the colors
            const newColor = transformation(color);

            // 4. writing the color pack to the buffer
            buffer.writeUInt8(newColor.b, offset);
            buffer.writeUInt8(newColor.g, offset + 1);
            buffer.writeUInt8(newColor.r, offset + 2);
            
            offset += 3;
        }

    }
}