<template>
  <div class="title">
    <div class="left"><p></p><span></span></div>
    <div class="right">
      <h3> {{title}} </h3>
      <div class="line-box"><i></i><i></i><i></i></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component, Prop, Vue
  } from 'vue-property-decorator'

  @Component
  export default class Title extends Vue {
    @Prop() private title!: string;
  }
</script>

<style scoped lang="scss">
  .title {
    display: flex;
    align-items: center;

    .left {
      flex-shrink: 0;
      width: 37px;
      height: 30px;
      display: flex;
      position: relative;
      align-items: center;
      z-index: 1;

      p {
        position: absolute;
        z-index: 2;
        left: -4px;
        width: 20px;
        height: 20px;
        background: #53c19c;
        transform: rotate(45deg);
      }

      span {
        z-index: 3;
        position: absolute;
        left: 12px;
        display: block;
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        background: #27a077;
      }
    }

    .right {
      height: 20px;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        height: 100%;
        line-height: 20px;
        font-size: 17px;
        color: #666666;
        font-weight: normal;
        flex-shrink: 0;
        margin-right: 5px;
      }

      .line-box {
        height: 100%;
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-end;

        i {
          display: block;
          height: 1px;
          width: 100%;
          background: #33bafd;

          &:first-child {
            width: 75%;
            background: #fd3334;
          }

          &:last-child {
            background: #fccd32;
            width: 85%;
          }
        }
      }
    }
  }
</style>
