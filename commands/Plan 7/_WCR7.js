/*CMD
  command: /WCR7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 7
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p7", wallet, "string");
Bot.runCommand("🧩P7") 
