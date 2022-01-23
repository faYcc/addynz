/*CMD
  command: 💰CheckBal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  const z = request.message.message_id
  const pv = [
    [
      { title: "💵 Ver Balance", command: "💵CheckBal" },
      { title: "➕ Agregar Balance", command: "➕CheckBal" }
    ],
    [
      { title: "➖Remover Balance", command: "➖CheckBal" },
      { title: "↩️Volver", command: "/ad" }
    ]
  ]
  Bot.editInlineKeyboard(pv,z)
  return
}
