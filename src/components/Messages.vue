<template>
  <v-row class="justify-center">
    <v-card
      class="card"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4 card-title">
            message
          </div>
          <div
            v-for="(value, key, index) in msg"
            :key="index"
          >
            <v-list-item-title class="headline mb-1 message-title">
              {{ key }}:
            </v-list-item-title>
            <v-list-item-subtitle>
              <p class="message-subtitle">
                {{ value }}
              </p>
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
  color: #3D5F82;
  background-color: white;
}
.card {
  width: 100%;
}
.message-title {
    color: #0C437A;
}
.message-subtitle {
    color: #3D5F82;
}
.card-title {
  color: rgba(80, 128, 175, 0.74);
}
</style>

