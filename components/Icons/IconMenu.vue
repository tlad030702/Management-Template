<template>
  <input type="checkbox" id="checkbox">
  <label for="checkbox" class="toggle">
    <div class="bars" id="bar1"></div>
    <div class="bars" id="bar2"></div>
    <div class="bars" id="bar3"></div>
  </label>
</template>
<style scoped>
#checkbox {
  display: none;
}
.toggle {
  position: relative;
  width: 25px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition-duration: .3s;
}
.bars {
  width: 100%;
  height: 3px;
  background-color: rgb(76, 189, 151);
  border-radius: 5px;
  transition-duration: .3s;
}
#checkbox:checked + .toggle .bars {
  margin-left: 13px;
}
#checkbox:checked + .toggle #bar2 {
  display: none;
}
#checkbox:checked + .toggle #bar1 {
  transform: rotate(45deg);
  transition-duration: .3s;
  transform-origin: left center;
}
#checkbox:checked + .toggle #bar3 {
  transform: rotate(-45deg);
  margin: 10px 0px 0px 13px;
  transition-duration: .3s;
  transform-origin: left center;
}
</style>