/*CMD
  command: /DepoXGet8
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Plan 8
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  //De esta manera nadie correrá el comando más que un depósito real
  return
}
var amount = options.amount
let time = new Date().toLocaleString("es-ES", {
  timeZone: "America/Mexico_City"
})
var num = Libs.ResourcesLib.userRes("invs")
num.add(1)
var cur = "TRX"
var ref1 = 0.05
var ref2 = 0.03
var ref3 = 0.02
var ref4 = 0.01
var ref5 = 0.01
var com1 = ref1 * amount
var com2 = ref2 * amount
var com3 = ref3 * amount
var com4 = ref4 * amount
var com5 = ref5 * amount
var c1 = com1 / 1
var c2 = com2 / 1
var c3 = com3 / 1
var c4 = com4 / 1
var c5 = com5 / 1
var history = User.getProperty("ds")
var txn_id = options.txn_id
var g = 0.011 * amount
var k = g / 1
if (!user.username) {
  var us = "(" + user.first_name + ")[" + user.telegramid + "]"
} else {
  var us = "@"+user.username+""
}
if (amount >= 2999 && amount <= 3001) {
  Bot.sendMessage ("🆕*Plan 8 Adquirido*\n🧮_Plan ~1.1% Diario, 22% Mensual, 264% Anual_\n\n💵*Inversión* "+amount+" TRX\n💹*Acreditación Diaria* "+k+" TRX");
Api.sendMessage ({chat_id: "@MainTradeTransactions", text: "💹_Depósito Creado_\n\n🕵️*Usuario* : "+us+"\n\n💶*Inversión* "+amount+" TRX\n🔗*Hash de transacción* :\n"+txn_id+"\n",parse_mode : "Markdown" , disable_web_page_preview: true
});
var de = Libs.ResourcesLib.userRes("de")
de.add(+amount) 
  var depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
  depo.add(+amount)
var currency = "TRX"
  Bot.run( {
    command:'/P1m'+' '+k+' '+currency+' '+num.value()+'',
    run_after: 1*60*60*24,  
    chat_id: chat.id,  
    user_id: user.id  
} )
Bot.setProperty("P8-"+user.telegramid+"-"+num.value()+"", "💳*Inversión* :\n"+amount+" TRX\n🧩*Identificador* :\n"+num.value()+"\n📆*Hora de inversión* " + time + "","string") 
  if (history == undefined) {
    var newh = "💳*Inversión* :\n"+amount+" TRX\n🧩*Identificador* :\n"+num.value()+"\n📆*Hora de inversión* " + time + "\n\n"
    User.setProperty("ds", newh, "string")
  } else {
    var nwh = "💳*Inversión* :\n"+amount+" TRX\n🧩*Identificador* :\n"+num.value()+"\n📆*Hora de inversión* " + time + "\n\n"
    var toal = history + nwh
    User.setProperty("ds", toal, "string")
  }

  let x = Bot.getProperty("rid" + user.telegramid)
  if (x) {
    let f = x * 1
    let bal = Libs.ResourcesLib.anotherUserRes("inv", f)
    bal.add(c1)
    Bot.sendMessageToChatWithId(f, "➕Comisión de referencia : *" + c1 + " " + cur)
var refcom =Libs.ResourcesLib.anotherUserRes("refcom",f) 
refcom.add(c1)
  }

  let rf22 = Bot.getProperty("rid" + x)
  if (rf22) {
    let bal2 = Libs.ResourcesLib.anotherUserRes("inv", rf22)
    bal2.add(c2)
    Bot.sendMessageToChatWithId(
      rf22,
      "➕ *Comisión de referencia : *" + c2 + " " + cur
    )
var refcom1 =Libs.ResourcesLib.anotherUserRes("refcom",rf22) 
refcom1.add(c2)
  }
  let rf33 = Bot.getProperty("rid" + rf22)
  if (rf33) {
    let bal3 = Libs.ResourcesLib.anotherUserRes("inv", rf33)
    bal3.add(c3)
    Bot.sendMessageToChatWithId(
      rf33,
      "➕* Comisión de referencia : *" + c3 + " " + cur
    )
var refcom2 =Libs.ResourcesLib.anotherUserRes("refcom",rf33) 
refcom2.add(c3)
  }
  let rfff = Bot.getProperty("rid" + rf33)
  if (rfff) {
    let bal4 = Libs.ResourcesLib.anotherUserRes("inv", rfff)
    bal4.add(c4)
    Bot.sendMessageToChatWithId(
      rfff,
      "➕* Comisión de referencia : *" + c4 + " " + cur
    )
var refcom3 =Libs.ResourcesLib.anotherUserRes("refcom",rfff) 
refcom3.add(c4)
  }
  let rfff1 = Bot.getProperty("rid" + rfff)
  if (rfff1) {
    let bal5 = Libs.ResourcesLib.anotherUserRes("inv", rfff1)
    bal5.add(c5)
    Bot.sendMessageToChatWithId(
      rfff1,
      "➕* Comisión de referencia : *" + c5 + " " + cur
    )
var refcom4 =Libs.ResourcesLib.anotherUserRes("refcom",rfff1) 
refcom4.add(c5)
  }
}

