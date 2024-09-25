<script>
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
    <nav>
            <span><RouterLink to="/">Home</RouterLink></span>
            <span><RouterLink to="/add">Add ToDo</RouterLink></span>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
nav {
    padding: 20px;
}

nav span {
    display: inline;
    margin: 0 0.5em;
    border-bottom: 2px solid black;
}

nav span:hover, a:hover {
    background-color: black;
    color: white;
}
</style>