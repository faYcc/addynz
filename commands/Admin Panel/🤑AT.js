/*CMD
  command: 🤑AT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
const z = request.message.message_id
const pv = [[{title : "💶Balance", command : "🔗CN"},{title : "🤖Info", command : "💷Incp1"}],[{title :"⬅️Volver", command : "/ad"}]]
Bot.editInlineKeyboard(pv,z)
} 
