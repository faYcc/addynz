/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("key")
var channel = Bot.getProperty("channel")
//if(key == undefined){
//Bot.sendMessage("⚠️No está configurada la cuenta de CoinPayments\n\n1 -» Vaya al Panel De Control\n2 -» Elija CoinPayments\n3 -» Configure las llaves")
//} else {
//if(channel == undefined){
//Bot.sendMessage("⚠️No está configurado el canal de pagos\n\n1 -» Vaya al Panel De Control\n2 -» Elija Canal\n3 -» Configure el canal")
//} else {
const pv = [[{ text: "👨‍💻 Acceder" }]]
var p = "🧩Canal De Pagos\n\n"
var o = "🧩Canal Del CEO\n\n"
var u = "🧩Grupo De Comunidad"
const c1 = '<a href="https://t.me/MainTradeProyectCEO">' + o + "</a>"
const c2 = '<a href="https://t.me/MainTradeTransactions">' + p + "</a>"
const c3 = '<a href="https://t.me/MainTradeProjectComunity">' + u + "</a>"
Api.sendMessage({
  text:
    "🔰Antes de acceder debes unirte a los siguientes canales oficiales para mantener tu sincronización con todo el proyecto\n\n" +
    c1 +
    "" +
    c2 +
    "" +
    c3 +
    "",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    keyboard: pv,
    resize_keyboard: true // coloca false si quieres que sea un botón gigante xd
  }
})
var users = Libs.ResourcesLib.anotherChatRes("users", "global")
var LeakUsers = Bot.getProperty("LeakUsers", [])
var xd = User.getProperty("USS")
if (!xd) {
  users.add(1)
  User.setProperty("USS", "DONE", "string")
Bot.sendMessageToChatWithId(2112018141,"👤Usuario Nuevo ["+user.first_name+"](tg://user?id="+user.telegramid+")") 
  LeakUsers.push(user.telegramid)
  Bot.setProperty("LeakUsers", LeakUsers, "json")
}
if (params) {
  var dn = User.getProperty("dn")
if(params == user.telegramid){
Bot.sendMessage("🤖La auto referencia se prohíbe") 
User.setProperty("dn", params,"string") 
return 
}
  if (dn == undefined) {
    let u = params
    User.setProperty("dn", u, "string")
    let refUserBonus = Libs.ResourcesLib.anotherUserRes("ref", u)
    refUserBonus.add(1)
    Api.sendMessage({
      chat_id: u,
      text: "➕<b> Nuevo Referido :</b> " + user.first_name + " Nivel 1",
      parse_mode: "html"
    })

    Bot.setProperty("rid" + user.telegramid, u, "string")
    let rf1 = Bot.getProperty("rid" + u)
    if (rf1) {
      Bot.setProperty("rid2" + rf1, user.telegramid, "string")
      let refUserBonus2 = Libs.ResourcesLib.anotherUserRes("ref2", rf1)
      refUserBonus2.add(1)
      Api.sendMessage({
        chat_id: rf1,
        text: "➕ <b>Nuevo Referido :</b> " + user.first_name + " Nivel 2",
        parse_mode: "html"
      })
    }
    let rf3 = Bot.getProperty("rid" + rf1)
    if (rf3) {
      Bot.setProperty("rid3" + rf3, user.telegramid, "string")
      let refUserBonus3 = Libs.ResourcesLib.anotherUserRes("ref3", rf3)
      refUserBonus3.add(1)
      Api.sendMessage({
        chat_id: rf3,
        text: "➕ <b>Nuevo Referido:</b> " + user.first_name + " Nivel 3",
        parse_mode: "html"
      })
    }
    let rff = Bot.getProperty("rid" + rf3)
    if (rff) {
      Bot.setProperty("rid4" + rff, user.telegramid, "string")
      let refUserBonus4 = Libs.ResourcesLib.anotherUserRes("ref4", rff)
      refUserBonus4.add(1)
      Api.sendMessage({
        chat_id: rff,
        text: "➕ <b>Nuevo Referido :</b> " + user.first_name + " Nivel 4",
        parse_mode: "html"
      })
    }
    let rfff = Bot.getProperty("rid" + rff)
    if (rfff) {
      Bot.setProperty("rid4" + rfff, user.telegramid, "string")
      let refUserBonus5 = Libs.ResourcesLib.anotherUserRes("ref5", rfff)
      refUserBonus5.add(1)
      Api.sendMessage({
        chat_id: rfff,
        text: "➕ <b>Nuevo Referido :</b> " + user.first_name + " Nivel 5",
        parse_mode: "html"
      })
    
return
} 
}
}
User.setProperty("dn", user.telegramid,"string") 
