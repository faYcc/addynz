/*CMD
  command: /P1m

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  folder: Plan

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
  let exp = 200
  let expp = exp * 1
  var urm = expp - count.value()
  var m = am * urm
  let ct = Libs.ResourcesLib.userRes("din")
  let free = new Date().toLocaleString("en-US", {
    timeZone: "America/Mexico_City"
  })
  var cc = Libs.DateTimeFormat.format(free, "H-MM-ss")
  var now = new Date()
  var c = Libs.DateTimeFormat.format(now, "dddd")
 // if ((c == "Saturday") | (c == "Sunday")) {

    //Bot.sendMessage(
      //"Fin de semana no se acreditará nada, //debido a que sólo se acreditará en días de //trabajo"
    //)
    //Bot.run({
      //command: "/P1m" + " " + am + " " + cur + " " + inv + "",
      //run_after: 60 * 60 * 24,
     // chat_id: chat.id,
     // user_id: user.id
  //  })
   // return
//  } else {
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
        " TRX\n\n🧩ID de inversión " +
        inv +
        "\n📅_Hora de acreditación (H-M-S)_:\n" +
        cc +
        ""
      Bot.sendMessage(hjk)

      ct.add(+am)
      Bot.run({
        command: "/P1m" + " " + am + " " + cur + " " + inv + "",
        run_after: 60 * 60 * 24,
        chat_id: chat.id,
        user_id: user.id
      })
    }
  }
//}

