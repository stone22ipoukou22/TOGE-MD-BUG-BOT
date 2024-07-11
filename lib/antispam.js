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

// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1500);// 1.5 sec is delay before processing next command;
};
module.exports = {
    xeon_antispam: {
        isFiltered,
        addFilter
    }};
