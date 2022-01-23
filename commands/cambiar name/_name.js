/*CMD
  command: /name
  help: 
  need_reply: 
  auto_retry_time: 
  folder: cambiar name
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/namez "+params+""
})
} 
