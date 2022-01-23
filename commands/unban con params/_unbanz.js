/*CMD
  command: /unbanz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unban con params
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
Bot.setProperty("id", params,"string")
if(params){
Api.unbanChatMember({
  chat_id: request.chatid,
  user_id: params, 
  only_if_banned: true,
  on_result: "unbaned"
})


}else{
Bot.sendMessage("`No admin = Gay`🥺", { is_reply: true })
}
}
