<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Absout</router-link>
    </div> -->
    <router-view name='topBar'/>
	<router-view/>
	<router-view name='bottomBar'/>
  </div>
</template>
