/*CMD
  command: 👥Referir
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Referido
  answer: 
  keyboard: 
  aliases: 
CMD*/

let refcom = Libs.ResourcesLib.userRes("refcom")
var ref = Libs.ResourcesLib.userRes("ref")
var ref2 = Libs.ResourcesLib.userRes("ref2")
var ref3 = Libs.ResourcesLib.userRes("ref3")
var ref4 = Libs.ResourcesLib.userRes("ref4")
var ref5 = Libs.ResourcesLib.userRes("ref5")
let adx = "https://t.me/" + bot.name + "?start=" + user.telegramid
Api.sendMessage({
  text:
    "<i>👥Red de referencias\n\n1️⃣Nivel " +
    ref.value() +
    " Referidos \n2️⃣Nivel " +
    ref2.value() +
    " Referidos\n3️⃣Nivel " +
    ref3.value() +
    " Referidos\n4️⃣Nivel " +
    ref4.value() +
    " Referidos\n5️⃣Nivel " +
    ref5.value() +
    " Referidos</i>\n\n🌐<b>Comisiones de Referidos " +
    refcom.value().toFixed(8) +
    " TRX\n\nLink de referencia </b>" +
    adx +
    "",
  parse_mode: "HTML"
})

