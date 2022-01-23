/*CMD
  command: /WCR9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 9
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p9", wallet, "string");
Bot.runCommand("🧩P9") 
