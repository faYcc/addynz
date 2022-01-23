/*CMD
  command: /WCR10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 10 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p10", wallet, "string");
Bot.runCommand("🧩P10") 
