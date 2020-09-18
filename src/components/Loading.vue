<template>
  <div class="loading">
    <div class="logo">
      <svg
        version="1.1"
        id="path_logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 93 93"
        enable-background="new 0 0 93 93"
        xml:space="preserve"
      >
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="46.4"
          cy="46.5"
          r="4.4"
          stroke-dasharray="30 100"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="46.4"
          cy="25.6"
          r="9"
          stroke-dasharray="90 10"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="67.2"
          cy="46.5"
          r="9"
          stroke-dasharray="90 10"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="25.5"
          cy="46.5"
          r="9"
          stroke-dasharray="90 10"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="46.4"
          cy="67.4"
          r="9"
          stroke-dasharray="90 10"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="46.4"
          cy="46.5"
          r="37.3"
          stroke-dasharray="15 15"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
        <circle
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          cx="46.4"
          cy="46.5"
          r="44.3"
          opacity="0"
          style="opacity: 1;"
        />
        <path
          fill="none"
          :stroke="strokeColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M82.5,83.4h4.8c2.1,0,3.7,1.7,3.7,3.7c0,2.1-1.7,3.7-3.7,3.7l-40.9,0"
          stroke-dasharray="500 500"
          stroke-dashoffset="-1000"
          opacity="0"
          style="opacity: 1; stroke-dashoffset: 0px;"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      strokeColor: "#fff",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.loading:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0008;
}

.logo {
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo svg {
  max-width: 100%;
}

@keyframes draw {
  0% {
    opacity: 0;
    stroke-dashoffset: -100;
  }

  50% {
    opacity: 1;
    stroke-dashoffset: 0;
  }

  100% {
    opacity: 0;
    stroke-dashoffset: -100;
  }
}

#path_logo path,
circle {
  animation: draw 2.4s infinite;
}
</style>
