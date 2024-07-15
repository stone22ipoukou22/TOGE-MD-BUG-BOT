//------------------------------------------------------------------------------------------------------------------------------
//                                     TOGE-MD WHATSAPP BOT
//
//                                           V.1.2.0
//
//                               ▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀ 　 ▒█▀▄▀█ ▒█▀▀▄ 
//                               ░▒█░░ ▒█░░▒█ ▒█░▄▄ ▒█▀▀▀ 　 ▒█▒█▒█ ▒█░▒█ 
//                               ░▒█░░ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄ 　 ▒█░░▒█ ▒█▄▄▀
//
//------------------------------------------------------------------------------------------------------------------------------

/**

* @project_name : TOGE-MD
* @Developer : TOGE INUMAKI
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : toge12345

**/

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
