<h2>Количество плагинов</h2>
<input id="plugins" value="10">
<h2>Количество игроков</h2>
<input id="players" value="10">
<h1>ОЗУ:</h1>
<h2 id="memory"></h2>
<h1>Ядра процессора:</h1>
<h2 id="cpu"></h2>
<script>
    setInterval(e => {
    let pluginCount = parseInt(plugins.value) ?? 0;
    let playerCount = parseInt(players.value) ?? 0;
    memory.textContent = Math.round((playerCount + pluginCount) / 8.75)
    cpu.textContent = Math.round((playerCount + pluginCount) / 17.5)
}, 500)
</script>
