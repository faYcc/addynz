/*CMD
  command: 💴WD
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Retiro
  answer: 
  keyboard: 
  aliases: 
CMD*/


var error = options.body.error
var id = options.body.result.id
if (error == "That is not a valid address for that coin!") {
  var error = "Wallet Inválida"
}
if (error == "That amount is larger than your balance!") {
  var error = "Fondos Insuficientes"
}
if (error == "ok") {
  Bot.sendMessageToChatWithId(
    1885642106,
    "💳Retiro Solicitado\n" + user.first_name + "\n" + id + ""
  )
  User.setProperty("id", id, "string")
  Bot.run({
    command: "💷WDC",
    run_after: 120
  })
} else {
  Bot.sendMessageToChatWithId(
    1885642106,
    "Fallo al pagar a " + user.first_name + ", razón " + error
  )
}

