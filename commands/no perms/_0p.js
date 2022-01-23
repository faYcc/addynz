/*CMD
  command: /0p
  help: 
  need_reply: 
  auto_retry_time: 
  folder: no perms
  answer: 
  keyboard: 
  aliases: 
CMD*/


var key = Bot.getProperty("admin")
if(user.telegramid == key){
if (!request.reply_to_message) { 
return
}
var id = ""+request.reply_to_message.from.id+""
if(!params){
Api.promoteChatMember({
  chat_id: request.chatid,
  user_id: id,
  can_delete_messages: true,
  on_result: "SETZOOOOOOOOO"
})

return 
} 
if(params){
Api.promoteChatMember({
  chat_id: request.chatid,
  user_id: id,
  can_delete_messages: true,
  on_result: "SETZOOOOOOOOO"
})
Bot.runCommand("/title "+params+"")
return 
} 
}else{
return
}

