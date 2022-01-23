/*CMD
  command: 💶WD
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Retiro
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.body.result
var txid = result.send_txid
var wallet = result.send_address
var amount = result.amountf
var s = options.body.result.status_text
var cur = "TRX"
if (s == "Complete") {
  Bot.sendMessageToChatWithId(
    1885642106,
    "🚀Pago a " +
      user.first_name +
      " Exitoso\n" +
      wallet +
      "\n" +
      amount +
      "\n🚧"
  )
  Bot.sendMessage(
    "✔️Su pago ha sido exitoso\n\n💵Cantidad ~" +
      amount +
      "\n\n🔗Hash de transacción\n[Toca Aquí](https://tx.botdev.me/" +
      cur +
      "/" +
      txid +
      ")"
  )
  Api.sendMessage({
    chat_id: "@IshMiner",
    text:
      "🧬<b>Retiro Exitoso\n\n~" +
      user.first_name +
      "~</b>\n\n🪙 " +
      amount +
      " DGB\n💳 " +
      wallet.slice(0, 15) +
      "************\n\n" +
      txn_id.slice(0.15) +
      "*************",
    parse_mode: "HTML"
  })
  return
}
if (s == "Pending") {
  Bot.run({
    command: "🪙SKT",
    run_after: 60
  })
}

