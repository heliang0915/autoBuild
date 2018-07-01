var http = require('http')
var spawn = require('child_process').spawn
var createHandler = require('github-webhook-handler');
var port=7777;
var handler = createHandler({ path: '/', secret: '123456' }) // 在代码仓库的 Webhooks 选项处配置
var server=http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404;
        res.end('no such location'+err)
    })
}).listen(port)

server.on('listening', function () {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log(`自动部署服务器启动,${bind}`);


});

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

// 监听 push 事件
handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
    rumCommand('sh', ['./autoBuild.sh'], function( txt ) { // 执行 autoBuild.sh 脚本文件
        console.log(txt)
    })
})

function rumCommand( cmd, args, callback ) {
    var child = spawn( cmd, args )
    var response = ''
    child.stdout.on('data', function( buffer ){ response += buffer.toString(); })
    child.stdout.on('end', function(){ callback( response ) })
}