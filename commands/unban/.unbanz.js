/*CMD
  command: .unbanz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unban
  answer: 
  keyboard: 
  aliases: $ub
CMD*/

var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
if (!request.reply_to_message) { 
Bot.sendMessage("el .unban sólo puede ser usado respondiendo el mensaje de alguien así como lo estoy haciendo yo\nSi deseas desbanear a alguien mediante su id coloca /unban y el id",{is_reply: true})
} else {

var id = ""+request.reply_to_message.from.id+""
Api.unbanChatMember({
  chat_id: request.chatid,
  user_id: id, 
  only_if_banned: true,
  on_result: "unban"
})
} 

}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
} 
