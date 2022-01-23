/*CMD
  command: /promotez
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
if (!request.reply_to_message) { 
return
}
var id = ""+request.reply_to_message.from.id+""
Api.promoteChatMember({
  chat_id: request.chatid,
  user_id: id,
  can_delete_messages: true, 
  can_restrict_members: true, 
  can_invite_users: true,
  on_result: "bn🀄"
})

}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}

