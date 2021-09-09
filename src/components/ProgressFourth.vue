<template>
  <div class="progress-fourth-line" style="width: 50%" data-text="14 070"></div>
</template>

<script>
export default {
  name: 'ProgressFourth',
}
</script>

<style lang="scss" scoped>
.progress-fourth-line {
  background-color: #217aff;
  height: 0.208vw;
  position: relative;
  display: flex;
  justify-content: flex-end;

  &:after {
    content: '';
    position: absolute;
    right: -0.3vw;
    top: 50%;
    width: 0.521vw;
    height: 0.521vw;
    transform: translateY(-50%);
    background: url('../assets/img/triangle.svg') no-repeat center/contain;
  }

  &:before {
    content: attr(data-text);
    font-size: 0.521vw;
    position: relative;
    top: -0.8vw;
  }
}
</style>
