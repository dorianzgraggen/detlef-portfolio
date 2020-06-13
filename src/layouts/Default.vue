<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" id="logo">{{ $static.metadata.siteName }}</g-link>
        <g-link to="/" id="logo-short">DZ</g-link>
      </strong>
      <nav class="nav">
        <button class="nav__link" @click="smoothlyScrollTo('#work')">Work</button>
        <button class="nav__link" @click="smoothlyScrollTo('#posts')">Posts</button>
        <button class="nav__link" @click="smoothlyScrollTo('#about')">About</button>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
      <slot/></main>
    </transition>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>


<script>
export default {
   methods: {
    smoothlyScrollTo(identifier) {
      console.log()
      if(window.location.pathname == "/") {
        document.querySelector(identifier).scrollIntoView({ 
          behavior: 'smooth' 
        })
      } else {
        window.location.href = window.location.origin + "/" + identifier;
      }

    }
  },
  
}
</script>

<style>
::-webkit-scrollbar {
    background: #0F1420;
}
::-webkit-scrollbar-thumb {
    background: #2F3541;
}

::selection {
  background: rgb(32, 70, 141); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: rgb(32, 70, 141); /* Gecko Browsers */
}

#logo-short {
  display: none;
}

html {
  /* scroll-behavior: smooth; */
  scrollbar-color: #2F3541 #0F1420;
}

body { 
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  margin:0;
  padding:0;
  line-height: 1.5;
  /* min-height: 100vh; */
  background-color: #03060C;
  color: white;
}

button {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  margin:0;
  padding:0;
  color: white;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}

strong {
  font-weight: 600;
}

p {
  font-weight: 300;
  hyphens: auto;
}

h1, h2, h3, h4, h5 {
  font-weight: 600;
}

a {
  text-decoration: none;
  color: white;
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.39); */
  /* transition-duration: .1s;
  background:
     linear-gradient(
       to right, rgba(122, 224, 161, 0.76) 0%,
       rgba(122, 224, 144, 0.774) 100%
     );
	background-position: 0 100%;
	background-repeat: repeat-x;
	background-size: 100% 3px;
  text-decoration: none;
  transition: background-size .2s;
  padding-bottom: 2px; */
  /* border-radius: 3px */
}

.df-btn {
  background: #738cca31;
  padding: 9px;
  border-radius: 2px;
  border: 2px solid #a1b3e547;
  /* border: 2px solid #89a2e613; */
  display: inline-block;
  transition: background-color .2s;
  /* transition: transform .05s; */
}

.df-btn:hover {
  background: #3e4a6b31;
}

.df-btn:active {
  /* background-color: #040913;
  border-color: #070f1f; */
  transform: translateY(2px);
  outline: none;
}


a:hover {
    background-size: 100% 5px;

  /* border-bottom-color: rgba(255, 255, 255, 0.589); */
  /* background-color: rgba(255, 255, 255, 0.19); */
}

.nav__link, #logo {
  background: none;
  border: none;
  cursor: pointer;
}

a:visited {
  color: none;
}

.layout {
  max-width: 1020px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.narrow {
  max-width: 700px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
   
}

.nav__link {
  margin-left: 20px;
}

.nav__link:hover {
  background: none;
}

/* Scroll bar jump thing */
@media screen and (min-width: 960px) {
    html {
        margin-left: calc(100vw - 100%);
        margin-right: 0;
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.dimmed {
  color: #e8efff86;
}

.text-center {
  text-align: center;
}

iframe {
  border: none;
}

@media only screen and (max-width: 1060px) and (min-width: 600px) {
  header {
    height: 60px !important;
  }
  
}

@media only screen and (max-width: 600px) {
  .layout {
    padding-left: 12px;
    padding-right: 12px;
  }

  .wide {
    width: 100% !important; 
    margin-left: 0 !important;
    max-width: 100% !important;
  }

  .header {
    height: 50px;
  }
  
}

@media only screen and (max-width: 350px) {
  #logo {
    display: none;
  }

  #logo-short {
    display: inline;
  }
}


</style>
