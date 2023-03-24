<template>
  <div>
    <div class="product__head">
      <div class="py-7">
        <svg
          width="1170pt"
          height="68pt"
          viewBox="0 0 1170 68"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="#fbfbfc"
              opacity="1.00"
              d=" M 1101.56 0.00 L 1170.00 0.00 L 1170.00 68.00 L 0.00 68.00 L 0.00 67.05 C 92.19 53.41 184.99 44.41 277.83 36.55 C 465.20 21.18 653.03 12.09 840.92 6.07 C 927.78 3.29 1014.68 1.58 1101.56 0.00 Z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryHead',
}
</script>

<style lang="scss" scoped>
.product__head {
  position: relative;
  background-color: #333 !important;
  overflow: hidden;
  svg {
    position: absolute;
    width: 100%;
    bottom: -30px;
    @media screen and(max-width:520px) {
      bottom: -36px;
    }
  }
}
</style>
