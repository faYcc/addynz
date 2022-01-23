/*CMD
  command: /ad
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  const z = request.message.message_id
  const pv = [
    [
      { title: "🪓Ban Sección", command: "🪓CheckBan" },
      { title: "💰 Balance Sección", command: "💰CheckBal" }
    ],
    [
      { title: "🚫Detener Bot", command: "🚫CheckBot" },
      { title: "📣Mensaje Sección", command: "📣CheckMsg" }
    ],[{title :"💵CoinPayments", command : "🤑AT"},{title : "💴Acreditaciones", command : "🔗ACP"}]
  ]
  Bot.editMessage("👤Admin Panel", z)
  Bot.editInlineKeyboard(pv, z)
  return
}
const pv = [
  [
    { title: "🪓Ban Sección", command: "🪓CheckBan" },
    { title: "💰 Balance Sección", command: "💰CheckBal" }
  ],
  [
    { title: "🚫Detener Bot Sección", command: "🚫CheckBot" },
    { title: "📣Mensaje Sección", command: "📣CheckMsg" }
  ],
  [{title :"💵CoinPayments", command : "🤑AT"},{title : "💴Acreditaciones", command : "🔗ACP"}]
]
Bot.sendInlineKeyboard(pv, "👤Admin Panel")

