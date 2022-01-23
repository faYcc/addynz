/*CMD
  command: 🧩ACD3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Acreditación
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params) {
var arr = params.split(" ")
var al = arr[0]
var am = arr[1]
 

var ao = arr[2]

var ap = arr[3]


 

var button = [{title : '✔️Reanudar' ,command : '/P1m'+' '+am+' '+ao+' '+ap+''}]
Bot.sendMessage("enviado") 
Bot.sendInlineKeyboardToChatWithId(al,button,"🚀Parecer ser que tu inversión de "+am+" "+ao+" se detuvo, reanudala")
}
