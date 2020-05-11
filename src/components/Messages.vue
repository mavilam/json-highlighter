<template>
  <v-row class="justify-center">
    <v-card
      class="card"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            message
          </div>
          <div
            v-for="(value, key, index) in msg"
            :key="index"
          >
            <v-list-item-title class="headline mb-1">
              {{ key }}:
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ value }}
            </v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-row>
</template>
<script>
export default {
  props: ["msg"]
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

