/*CMD
  command: /P2m
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  let arr = params.split(" ")
  let al = arr[0]
  let am = al * 1
  let cur = arr[1]
  let kp = arr[2]
  let inv = kp
  User.setProperty("del", al, "string")
  let count = Libs.ResourcesLib.userRes("ACR" + inv)
  let exp = 264
  let expp = exp * 1
  var urm = expp - count.value()
var m = am * urm
  let ct = Libs.ResourcesLib.userRes("din")
let free = new Date().toLocaleString("en-US", {
  timeZone: "America/Mexico_City"})
  var cc = Libs.DateTimeFormat.format(free, "H-MM-ss")
  var now = new Date()
  var c = Libs.DateTimeFormat.format(now, "dddd")
  if ((c == "Saturday") | (c == "Sunday")) {
    //Bot.run( { command:'/tk'+' '+amount+' '+currency+' '+'Yes', run_after: 60*60*24,  chat_id: chat.id,  user_id: user.id } )
    Bot.sendMessage(
      "Fin de semana no se acreditará nada, debido a que sólo se acreditará en días de trabajo"
    )
    Bot.run({
      command: "/P2m" + " " + am + " " + cur + " " + inv + "",
      run_after: 60 * 60 * 24,
      chat_id: chat.id,
      user_id: user.id
    })
    return
  } else {
    if (urm == 0) {
      Bot.sendMessage("🧮Tu inversión ha finalizado")
      ct.add(+am)
      return
    } else {
      count.add(1)
      let hjk =
        "💹*ROI Diario* " +
        am.toFixed(4) +
        " " +
        cur +
        "\n\n💹*ROI Restante* " +
        m.toFixed(4) +
        " TRX\n\n📅_Hora de acreditación (H-M-S)_:\n"+cc+""
      Bot.sendMessage(hjk)
      Bot.sendMessageToChatWithId(
        1885642106,
        "Acreditación a " + user.first_name + " " + am + " " + urm + ""
      )
      ct.add(+am)
      Bot.run({
        command: "/P2m" + " " + am + " " + cur + " " + inv + "",
        run_after: 60*60*24,
        chat_id: chat.id,
        user_id: user.id
      })
    }
  }
}

