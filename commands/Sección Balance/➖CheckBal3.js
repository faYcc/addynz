/*CMD
  command: ➖CheckBal3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/


var p = Bot.getProperty("ad")
var p1 = message
var din = Libs.ResourcesLib.anotherUserRes("din",p)
din.add(-p1)
const pm = [{title : "↩️Volver", command : "/ap"}] 
Bot.sendInlineKeyboard(pm,
  "*He quitado "+p1+" TRX a "+p+"*"
)

