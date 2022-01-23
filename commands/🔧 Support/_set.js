/*CMD
  command: /set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🔧 Support
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin")
if(user.telegramid == key){
Bot.sendMessageToChatWithId(""+message+"", "*Owner Made You Admin*")
Bot.sendMessage(message+" Promoted")
Bot.setProperty("admin1"+message+"",""+message+"","string")
}else{
Bot.sendMessage("You have to Become Owner")
}
