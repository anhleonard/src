<template>
  <div id="app">
    <h1>
      Hello World
    </h1>
    <ul>
      <li>
        <router-link to='/blog'>HelloWorld</router-link>
      </li>
      <li>
        <router-link to='/blog/header'>HeaderView</router-link>
      </li>
      <li>
        <router-link :to="{name: 'ContainerView'}">ContainerView</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
