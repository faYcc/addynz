/*CMD
  command: /banearz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban con parámetros
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
Bot.setProperty("id", params,"string") 
Api.kickChatMember({
  chat_id: request.chatid,
  user_id: params,
  on_result: "ban⛓️🀄"
})

}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}
}
