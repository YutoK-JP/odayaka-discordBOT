module.exports = {
    name:"voiceStateUpdate",
    nick:"limit clear",
    async execute(oldstate, newstate, client){
        if(!(oldstate.channel)) return;
        if(oldstate.guild.id != APPLICATION_GUILD) return;

        const ch = oldstate.channel

        if(ch.members.size == 0){
          try{
            ch.setUserLimit(0)
          }
          catch(e){
            console.log(e)
          }
        }
      }
}