/*CMD
  command: 🧩GA
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userz = options.result.status
if ((userz == "member") | (userz == "administrator") | (userz == "creator")) {
Bot.runCommand("🌐Menu") 
} else {
if(userz == "left"){
Bot.runCommand("/start")
}
} 
