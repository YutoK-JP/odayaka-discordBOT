const { SlashCommandBuilder } = require('@discordjs/builders');

const CMDNAME = "member"

module.exports = {
  name:CMDNAME,
  data: new SlashCommandBuilder()
    .setName(CMDNAME)
      .setDescription("このサーバーの参加人数を通知します。"),
  permissions: ['SEND_MESSAGES'],
  
  async execute(interection){
    await interection.reply({content:`今のメンバー数は${interection.guild.memberCount}人だよ！`, ephemeral: true});
  }
}

