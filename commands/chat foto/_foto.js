/*CMD
  command: /foto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: chat foto
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var admin = Bot.getProperty("admin1"+user.telegramid)
if(user.telegramid == admin){
Api.setChatPhoto({
chat_id: request.chatid,
photo: params
})

}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}
}
