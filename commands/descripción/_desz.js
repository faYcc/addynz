/*CMD
  command: /desz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: descripción
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
if(params){
Api.setChatDescription({
chat_id: request.chatid,
description: params
})
}
Bot.sendMessage("Descripción cambiada a "+ params +"")
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
} 
