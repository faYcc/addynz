/*CMD
  command: /PCP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Acreditación
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
const z = request.message.message_id
const pv = [{title : "💵Activar Acreditación", command : "🧩ACD"},{title : "↩️Volver", command : "/ad"}] 
User.setProperty("id", z,"string")
Bot.editInlineKeyboard(pv,z)
}
