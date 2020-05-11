<template>
  <v-flex xs2>
    <v-btn
      text
      small
      color="primary"
      :style="{'background-color': backColor}"
      @click="sendFieldName"
    >
      {{ fieldName }}
    </v-btn>
  </v-flex>
</template>
<script>
export default {
  props: ["fieldName"],
  data() {
    return {
      backColor: ""
    }
  },
  methods: {
    sendFieldName() {
      if (this.backColor === "") {
        this.backColor = "lightblue"
        this.$emit("selectField", this.fieldName)
      } else {
        this.backColor = ""
        this.$emit("removeField", this.fieldName)
      }
    }
  }
}
</script>
<style>
.panel-body {
  font-size: 12px;
}
.param {
  cursor: pointer;
}
.param:hover {
  background-color: lightblue;
}
button {
  margin: 1px;
}
</style>

