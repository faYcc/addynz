/*CMD
  command: /cancel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🔧 Support
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [[{text:"🔙 Back", callback_data:"/start_2"}]]

var text = "Operation canceled."
var message_id = request.message.message_id

Api.editMessageText({
  text: text,
  message_id: message_id,
  parse_mode: "Markdown", disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})
