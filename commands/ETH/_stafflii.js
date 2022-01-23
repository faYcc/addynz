/*CMD
  command: /stafflii
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ETH
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  return
}
var result = options
var rank = Bot.getProperty(""+user.telegramid+"","Free")
var ownerinfo = result.result.filter(RGcoded => RGcoded.status == "creator")
var coinfo = result.result
var adminfil = coinfo.filter(RGcoded => RGcoded.can_promote_members == false)
/*        Co Owner
          Finding           */
var filtration = coinfo.filter(RGcoded => RGcoded.can_manage_chat == true)
var filtration1 = filtration.filter(RGcoded => RGcoded.can_change_info == true)
var filtration2 = filtration1.filter(
  RGcoded => RGcoded.can_delete_messages == true
)
var filtration3 = filtration2.filter(
  RGcoded => RGcoded.can_invite_users == true
)
var filtration4 = filtration3.filter(
  RGcoded => RGcoded.can_restrict_members == true
)
var filtration5 = filtration4.filter(
  RGcoded => RGcoded.can_pin_messages == true
)
var filtration6 = filtration5.filter(
  RGcoded => RGcoded.can_promote_members == true
)
var filtration7 = filtration6.filter(
  RGcoded => RGcoded.can_manage_voice_chats == true
)
var coOwnerData = filtration7.filter(RGcoded => RGcoded.user.is_bot == false)
/*        Co Owner
           Found           */
var coOwnerinfonm = "*⚜️ Co-founders*\n"
for (var index in coOwnerData) {
  var usr = coOwnerData[index]
  var custom_title = usr.custom_title
  var title
  if (!custom_title) {
    title = "\n"
  } else {
    title = " » " + usr.custom_title + "\n"
  }
  coOwnerinfonm +=
    "├ [" + usr.user.username + "]" + title
}
//admins
var msg = "*👮🏼 Admin*\n"
for (var index in adminfil) {
  var u = adminfil[index]
  var custom_title = u.custom_title
  if (!custom_title) {
    title = "\n"
  } else {
    title = " » " + u.custom_title + "\n"
  }
  msg += "├ [" + u.user.first_name + "]" + title
}
//admins found
try {
  Bot.sendMessage(
    "*GROUP STAFF*\n\n👑Founder\n └ [" +
      ownerinfo[0].user.first_name+
      "](tg://user?id=1885642106) » " +
      "\n\n" +
      coOwnerinfonm +
      "\n\n" +
      msg+"\n")
} catch (err) {
  Bot.sendMessage("❌Error\n\n" + err)
  return
}
