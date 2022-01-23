/*CMD
  command: /oninfoo

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let json = options.body.result
let cur= "TRX"
let rate = json[cur].balancef
if(!rate){ return }
let txt = "*💵 CoinPayments Balance:* \n"+rate+" "+cur+""
Bot.sendMessage(txt) 
