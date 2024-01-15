<template>
  <div class="bg-gray-400 h-screen overlay absolute opacity-70 top-0 right-0 left-0 bottom-0 hidden duration-300	"></div>
  <div class="default">
    <header>
      
    </header>
    <nav>
      <LayoutsNav/>
    </nav>
    <aside>
      <LayoutsAside/>
    </aside>
    <main>
      <NuxtPage/>
    </main>
    <footer>
      
    </footer>
  </div>
</template>
<script setup>
import {layoutJs, navJs, asideJs} from "../assets/js/main"
if(process.client){
  nextTick(() => {
    layoutJs()
    navJs()
    asideJs()
  })
}
</script>