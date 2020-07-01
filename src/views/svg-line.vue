<!--  -->
<template>
  <div class="container">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <line
        x1="0"
        y1="0"
        x2="200"
        y2="0"
        style="stroke:rgb(0,0,0);stroke-width:5"
      />
      <polyline
        stroke-dasharray="15 8"
        points="10,10 10,100 100,100"
        fill="none"
        stroke-width="2"
        stroke="red"
      />
      <line
        x1="0"
        y1="200"
        x2="400"
        y2="200"
        stroke-width="2"
        stroke-dasharray="15 8"
        stroke="red"
      />
      <path
        d="
  M190 360
  L200 380
  L210 360
  Z
"
        fill="blue"
      />
      <path
        d="
  M40 100
  L40 250
  A20,20 0 0,0 60,270
  L180 270
  A20,20 0 0,1 200,290
  L200 360"
        fill="none"
        stroke-width="2"
        stroke-dasharray="15 8"
        stroke="blue"
      />
      <path
        d="
  M100 100
  L100 250
  A20,20 0 0,1 100,290
  L180 270
  A20,20 0 0,1 200,290
  L200 360"
        fill="none"
        stroke-width="2"
        stroke-dasharray="15 8"
        stroke="blue"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  height: 700px;
  position: relative;
  border: solid 1px red;
}
</style>
