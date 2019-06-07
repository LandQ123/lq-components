<template>
    <div id="app">
        <div>
            <router-link to="\"></router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
}
</style>
