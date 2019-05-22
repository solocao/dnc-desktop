<template>
<div>
        123 {{fname}}
        <webview id="foo" :src="fname" style="display:inline-flex; width:100%; height:480px"></webview>
    </div>
</template>

<script>
export default {
  data () {
    return {
      fname: `file://${__dirname}/../ddd.html`
    }
  }
}
</script>

<style>

</style>
