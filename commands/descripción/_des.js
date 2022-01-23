/*CMD
  command: /des
  help: 
  need_reply: 
  auto_retry_time: 
  folder: descripción
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/desz "+params+""
})

} 
