<template>
  <div class="line" :class="{'line--red': progress_red,'line--21':line_21,'line--27':line_27,'line--37':line_37,'line--78':line_78,'line--42':line_42,'line--48':line_48,'line--55':line_55}"></div>
</template>

<script>
export default {
  name: "ProgressSecond",
  data() {
    return {

    }
  },

  props: {
    progress_red: {
      type: Boolean,
      default: false
    },
    line_37:{
      type:Boolean,
      default:false
    },
    line_78:{
      type:Boolean,
      default:false
    },
    line_42:{
      type:Boolean,
      default:false
    },
    line_48:{
      type:Boolean,
      default:false
    },
    line_21:{
      type:Boolean,
      default:false
    },
    line_27:{
      type:Boolean,
      default:false
    },
    line_55:{
      type:Boolean,
      default:false
    }

  }
}
</script>

<style lang="scss" scoped>
.line {
  background-color: #FB9B2B;
  height: 6px;
  width: 10%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 6px 6px;
    border-color: transparent transparent #101f54 transparent;
  }
}

.line--red {
  background-color: #FF5A5A;
}
.line--37{
  width: 37%;
}
.line--78{
  width: 78%;
}
.line--42{
  width: 42%;
}
.line--55{
  width: 55%;
}
.line--48{
  width: 48%;
}
.line--21{
  width: 21%;
}
.line--27{
  width: 27%;
}
</style>