/*CMD
  command: /namez
  help: 
  need_reply: 
  auto_retry_time: 
  folder: cambiar name
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
if(params){
Api.setChatTitle({
chat_id: request.chatid,
title: params
})
}
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
} 
