<template>
  <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,0" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>


export default {
  name: 'App',
  methods: {
  },
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100;200;300;400;500;600;700&display=swap');

.quit {
  position: absolute;
  top: 2vh;
  left: 2vh;
  user-select: none;
}

.fundo {
  position: absolute;
  z-index: -1;
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-align: center;
  color: white;
  margin: auto;
  padding: 15vh;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

span {
  margin-left: 2vh;
  font-size: calc(var(--tamanhofonte)*2);
  position: relative;
  z-index: 1;
  padding: 7vh 2vh;
  background-color: #105075a8;
  background-blend-mode: multiply;
  border-radius: 20px;
  max-height: 50vh;
  max-width: 30vh;

  img {
    height: 40%;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
}

.menu {
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex: wrap;
  max-width: fit-content;
}

.link {
  color: white;
  text-decoration: none;
}

.setasright {
  font-size: 5rem !important;
  z-index: 3;
  position: absolute;
  top: 50%;
  right: 0vh;
  color: aquamarine;
  cursor: pointer;
  user-select: none;

  &:hover {
    font-size: 8rem !important;
    color: white;
    background-color: #01a2ff75;
    top: 48vh;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
    border-radius: 100px;
    margin-right: 1vw;
    margin-left: 1vw;
  }
}

.setasleft {
  font-size: 5rem !important;
  z-index: 3;
  position: absolute;
  top: 49%;
  left: 0vh;
  color: aquamarine;
  cursor: pointer;
  user-select: none;

  &:hover {
    font-size: 8rem !important;
    color: white;
    background-color: #01a2ff75;
    top: 48vh;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
    border-radius: 100px;
    margin-right: 1vw;
    margin-left: 1vw;
  }
}

@media only screen and (min-width: 1200px) {
  .setasright {
    display: none !important;
    pointer-events: none !important;
  }

  .setasleft {  
    display: none !important;
    pointer-events: none !important;
  }
}

</style>