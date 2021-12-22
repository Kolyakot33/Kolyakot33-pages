let playerCount
let pluginCount
setInterval(e => {
    if (parseInt(players.value) == playerCount && parseInt(plugins.value) == pluginCount) {
        return
    }
    pluginCount = parseInt(plugins.value) ?? 0;
    playerCount = parseInt(players.value) ?? 0;
    if (isNaN(pluginCount) || isNaN(playerCount)) {
        return
    }
    memory.textContent = Math.ceil((playerCount + pluginCount / 2.2) / 6.875) +2
    cpu.textContent = Math.ceil((playerCount + pluginCount / 2.2) / 13.75)+1
}, 500)
