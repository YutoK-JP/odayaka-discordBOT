module.exports = {
    name:"idcheck",
    async execute(message, args, client, env){
        if(message.bot) return;
        if(message.guildId != env.OPERATION_GUILD) return;
        const kinGuild = await client.guilds.fetch(env.APPLICATION_GUILD);

        const data = await kinGuild.members.fetch(args[0]);
        console.log(data);
        message.reply(data.user.tag);
    }
    
}
