/*CMD
  command: Regex
  help: 
  need_reply: true
  auto_retry_time: 
  folder: all perms

  <<ANSWER
Send Ur message
{mention} for tag
{id} user telegram id
{first_name} first_name
{name} name
{username} user
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
let first_name = user.first_name
let last_name = user.last_name
let username = user.username
let hk4 = "HTML" 
let hk3 = "HTML"
let bn = message
if (!last_name) {
  var valid_name = first_name
} else {
  var valid_name = first_name + " " + last_name
}
if (!username) {
  var u_name = valid_name
} else {
  var u_name = username
}
if (hk4 != "HTML") {
  var ttt = " [" + u_name + "](" + "tg://user?id=" + id + ")"
} else {
  var ttt = '<a href="tg://user?id=' + id + '">' + valid_name + "</a>"
}
var Lang = {
  first_name: first_name,
  id: id,
  name: valid_name,
  username: u_name,
  mention: ttt
}
var post_text = bn.replace(/{([a-z_]+)}/gi, function(fullmatch, key) {
  return Lang[key] ? Lang[key] : fullmatch
})
Api.sendMessage({
  text: post_text,
  parse_mode: hk3,
  disable_web_page_preview: true
})

