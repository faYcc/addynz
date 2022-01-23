/*CMD
  command: /add
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Support
  answer: 
  keyboard: 
  aliases: 
CMD*/

let adm=Bot.getProperty("admin","No admin")

if(chat.chatid==1885642106){
if(params){
Bot.setProperty("admin", params,"string")
Bot.sendMessage("*✅ Admin Added Succeed*\n*Current Admin:* `"+params+"`")
}else{
Bot.sendMessage("Admin:* `"+adm+"`")}}else{
Bot.runCommand("/start")}
