import hooks from "./hooks"

export default {
    getPlayerIdByName(playerName) {
        let entNames = hooks.noa.bloxd.entityNames;
        return Object.keys(entNames).find(key => entNames[key]?.entityName == playerName);
    },

    get frameTime() {
        return hooks.noaShell.nowObject.now() - hooks.noaShell.lastFrameStarted;
    }
}