<template>
    <div>
            <a-button type="primary" @click="pong()">全局pong测试</a-button>

    </div>
</template>

<script>
import dncServices from '../services/dncServices'
export default {
  methods: {
    pong () {
      dncServices.pong()
    }
  }
}
</script>

<style>

</style>
