/*CMD
  command: /start0
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 🗣️ Menu

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [[{text: "➕ agrégame a un grupo➕", url: "http://t.me/SophieHelpBot?startgroup=start"}],[{ text: "🔧 Owner Bot", url: "https://t.me/faay2020"}],[{ text: "👩🏻‍💻 soporte", callback_data: "/Support" },{ text: "💬 Información", callback_data: "/Infojsjs" }],
[{ text: "Ayuda y Comandos❔", callback_data: "/Help_&_Commands" }]]
var text = "*Hola "+user.first_name+"*!\nMi nombre es [Sophie](https://t.me/sophiehelpbot) y soy un bot para ayudarle a * administrar * sus grupos * fácilmente * y * con seguridad *.\n\n *👉🏻 Agregarme en un supergrupo * y promoverme como * Admin * para permitirme entrar en acción!\n\n *❓ ¿CUÁLES SON LOS COMANDOS? ❓*\nPress /help para ver *todos los comandos* y cómo funcionan!"

Api.sendMessage({
  text: text,
  parse_mode: "Markdown", disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})



