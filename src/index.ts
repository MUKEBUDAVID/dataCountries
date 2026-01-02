import http from "http";
import app from "./app";
import Serverless from "serverless-http";


const normalizePort = (val: string) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

export const handler = Serverless(app);


// Pour le développement local
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production') {
  const server = http.createServer(app);

  const errorHandler = (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') throw error;
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
      default:
        throw error;
    }
  };

  server.on('error', errorHandler);
  server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Local server listening on ' + bind);
  });

  server.listen(port);
}



// "CertificateArn": "arn:aws:acm:us-east-1:511578608610:certificate/33c146fc-8938-4d42-a9bf-d1aeee588a83"

// /hostedzone/Z03495392BYAN7Z5XHQHX

[
  {
    "Name": "_0fc8807cdfa5ebd4dca9e86d4c803d59.datacountries.mukebu.com.",
    "Type": "CNAME",
    "Value": "_d7cb26569a5e570a53aec4a209ba2bea.xlfgrmvvlj.acm-validations.aws."
  }
]


// Z03495392BYAN7Z5XHQHX






