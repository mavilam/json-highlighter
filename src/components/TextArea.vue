<template>
  <v-row>
    <form>
      <div>
        <h1>json-highlighter</h1>
        <v-textarea
          v-model="text"
          outlined
          name="input-7-4"
          label="JSONs messages"
          class="col align-self-center form-control"
        />
      </div>
      <div>
        <v-btn
          color="primary"
          @click.prevent="createNew"
        >
          Parse JSONs
        </v-btn>
        <v-btn
          v-if="areFieldsLoaded"
          color="primary"
          @click.prevent="hideFields"
        >
          Show/Hide Fields
        </v-btn>
      </div>
    </form>
  </v-row>
</template>

<script>
export default {
  props: ["selected"],
  data() {
    return {
      text: "",
      created: false,
      areFieldsDisplayed: true,
      areFieldsLoaded: false
    }
  },
  watch: {
    text: function() {
      const messages = this.getArrayOfMsgs(this.text.replace(/\n/g, ""))
      const fieldNames = Object.keys(JSON.parse(messages[0]))
      this.$emit("sendFields", fieldNames)
      this.areFieldsLoaded = true
    },
    selected: function() {
      if (this.created) this.createNew()
    }
  },
  methods: {
    createNew() {
      const messages = this.getArrayOfMsgs(this.text.replace(/\n/g, ""))

      var msgJsons = []
      messages.forEach(msg => {
        var jsonInserted = JSON.parse(msg)
        var objComposed = {}
        this.selected.forEach(
          paramName => (objComposed[paramName] = jsonInserted[paramName])
        )
        msgJsons.push(objComposed)
      })
      this.$emit("sendJsons", msgJsons)
      this.created = true
    },
    hideFields() {
      this.areFieldsDisplayed = !this.areFieldsDisplayed
      this.$emit("hideFields", this.areFieldsDisplayed)
    },
    getArrayOfMsgs(text) {
      const reg = /((^|(?!{))(\d|\w+))-(?![^{])/g
      const jsons = text.split(reg).filter(t => t.startsWith('{'))
      return jsons
    },
  }
}
</script>

<style>
form {
  width: 100%;
}
textarea.form-control {
  height: 15em;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
}
h1 {
  color: #0d5fb0;
}
</style>
