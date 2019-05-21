client.on('message', message => {
let args = message.content.split(" ");
if(args.slice(0) == prefix + 'nicknameall')
if(message.author.id !== 'ايديك') return;
message.guild.members.forEach(m => {
m.setNickname(`! ℛx | ${m.username}`)
});
message.channel.send('Done');
});

client.on('message', message => {
let msg = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'say') {
if(!msg) return;
let embed = new Discord.RichEmbed()
.setTitle(msg)
}
})

const devs = ["429972030092476437"]

const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }

  });
}})

client.on('message', async message => {

  let messageArray = message.content.split(/\s+/g);
	let args = messageArray.slice(1);

	if(message.content.startsWith(`${prefix}clear`)) {
	if(message.author.id !== client.user.id) return;
	let messagecount = parseInt(args[0], 10) ? parseInt(args[0], 10) : COUNT;
	message.channel.fetchMessages({limit: LIMIT})
	.then(messages => {
	let msg_array = messages.array();
	msg_array = msg_array.filter(m => m.author.id === client.user.id);
	msg_array.length = messagecount + 1;
	msg_array.map(m => m.delete().catch(console.error));
	});
	message.channel.send(`${messagecount} : عدد الرسائل التي تم مسحها`, {code: 'js'}).then(m => m.delete(3000));
	};
});



client.on('message', message => {
  if(message.author.bot) return undefined;
let args = message.content.split(" ");
let msg = args.slice(1)
if(args.slice(0) == prefix + 'bc') {
  if(!msg) return message.channel.send(':warning: | Please Type The Message To Send The BC')
client.users.forEach(m => {
m.send(msg)
})
message.channel.send('Done :white_check_mark:');
}
});
