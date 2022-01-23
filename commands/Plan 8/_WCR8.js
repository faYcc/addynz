/*CMD
  command: /WCR8
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 8
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p8", wallet, "string");
Bot.runCommand("🧩P8") 
