/*CMD
  command: /unban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unban con params
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/unbanz "+params+""
})

