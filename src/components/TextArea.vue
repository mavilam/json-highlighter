<template>
  <div class="row justify-content-md-center text-block">
    <form>
      <div class="form-group">
        <h2>JSONs kafka messages</h2>
        <textarea
          v-model="text"
          class="col align-self-center form-control"
        />
      </div>
      <div class="justify-content-md-center form-group">
        <button
          class="btn btn-primary"
          @click.prevent="createNew"
        >
          Parse JSONs
        </button>
        <button
          v-if="areFieldsLoaded"
          class="btn btn-primary"
          @click.prevent="hideFields"
        >
          Show/Hide Fields
        </button>
      </div>
    </form>
  </div>
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
</style>
