const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    
    /* step 1 - get whole file and send */
    // fs.readFile('index.html', 'utf8', (err, contents) => {
    //     res.end(contents);
    // });

    const stream = fs.createReadStream('index.html', { encoding: 'utf8' });
    /* step 4 "piping" */
    stream.pipe(res);

    /* step 2 read and accumlate from file read stream */
    // let contents = '';
    // stream.on('data', data => {
    //     contents += data;
    // });
    
    // stream.on('end', () => {
    //     res.end(contents);
    // });

    /* step 3 write directly to write stream (aka response) */
    // stream.on('data', data => {
    //     res.write(data);
    // });
    
    // stream.on('end', () => {
    //     res.end();
    // });

}).listen(3000);