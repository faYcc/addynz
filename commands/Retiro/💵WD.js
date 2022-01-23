/*CMD
  command: 💵WD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Retiro
  answer: 
  keyboard: 
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("⛔Número inválido", {
    is_reply: true
  })
  return
}
var cc = Libs.ResourcesLib.userRes("din")
if (message < 10) {
  Bot.sendMessage("🚫Mínimo de retiro 10 TRX")
  return
}
if (message > cc.value()) {
  Bot.sendMessage("⛔Máximo de retiro " + cc.value().toFixed(8) + "")
  return
}
const wallet = Bot.getProperty("wallet" + user.telegramid + "")
Libs.CoinPayments.apiCall({
  fields: {
    cmd: "create_withdrawal",
    amount: message,
    currency: "TRX",
    address: wallet,
    auto_confirm: 1
  },
  onSuccess: "💴WD",
  onPaymentCompleted: "onPaymentCompleted"
})

