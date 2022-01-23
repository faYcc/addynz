/*CMD
  command: México
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Support
  answer: 
  keyboard: 
  aliases: mx, mx, mexico
CMD*/

var now = new Date().toLocaleString("es-ES", {
  timeZone: "America/Mexico_City"
})
Bot.sendMessage(now, {is_reply:true})
