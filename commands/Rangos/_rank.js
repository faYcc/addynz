/*CMD
  command: /rank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Rangos
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
if(user.telegramid == 1885642106){
let array=params.split(' ')
let telegramid=array[0]
let rango=array[1]
Bot.setProperty(""+telegramid+"", rango,"string")
Bot.sendMessage("Ahora el rango de\n"+telegramid+"\nEs "+rango+"")
}
} 
