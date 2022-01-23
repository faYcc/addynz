/*CMD
  command: /web
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BNB
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
Bot.sendMessage("😬Espera mientras tomo la foto de "+params+"")
Api.sendPhoto({photo: ""+params+"" , caption: "🕵‍♂ This Is Result Of Your URL",
  parse_mode: "Markdown"})
} else {
Bot.sendMessage("coloca una url válida")
} 
