/*CMD
  command: /ban1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ban
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
Api.kickChatMember({
  chat_id: request.chatid,
  user_id: id,
  on_result: "ban🀄"
})

}else{
Api.sendMessage({text : "<code>U are gay, u are member, no admin</code>", parse_mode : "HTML"})
} 
