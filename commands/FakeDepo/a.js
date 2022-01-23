/*CMD
  command: a

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  folder: FakeDepo

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var dn = User.getProperty("dm") 
if((dn==undefined) | (dn==0)) {
var b = 50
var txn_id = "jsjsjs"
Bot.run({
  command: "/DepoXGet",
  run_after: 1*5,
  options: { amount: b, txn_id: txn_id }
})
User.setProperty("xd", b,"string") 
return
} else {
Bot.sendMessage("Este plan solo se puede comprar 1 vez")
} 
