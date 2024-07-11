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

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
