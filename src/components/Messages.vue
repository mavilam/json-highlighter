

<template>
  <div class="row">
    <div v-for="(msg, index) in msgs" :key="index" class="card">
      <div class="card-body info">
        <a v-for="(value, key, index) in msg" :key="index">{{ key }}: {{ value }} <br></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msgs"]
}
</script>
<style>
.info {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  border: grey;
  color: darkslategray;
  background-color: white;
}

.card {
  width: 100%;
}
</style>

