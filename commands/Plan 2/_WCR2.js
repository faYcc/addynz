/*CMD
  command: /WCR2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 2
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p2", wallet, "string");
Bot.runCommand("🧩P2") 
