<template>
  <div class="page">
    <div class="title-box" :style="'background-image: url('+titleBg+')'">
      <div class="title-cont">
        <h3>2020</h3>
        <h3>公众号诊断报告</h3>
        <span>PUBLIC NUMBER DIAGNOSTIC REPORT</span>
        <p>山海文化有限公司</p>
      </div>
    </div>

    <div class="msg-box">
      <div class="msg-item">
        <label for="ipt1">微信公众号账号：</label>
        <div class="ipt-box"><input type="text" id="ipt1"/></div>
      </div>
      <div class="msg-item">
        <label for="ipt2">运营地区：</label>
        <div class="ipt-box"><input type="text" id="ipt2"/></div>
      </div>
      <div class="msg-item">
        <label for="ipt3">预估粉丝：</label>
        <div class="ipt-box"><input type="text" id="ipt3"/></div>
      </div>
      <div class="msg-item">
        <label for="ipt4">诊断时间：</label>
        <div class="ipt-box date"><input type="text" id="ipt4"/>年<input type="text"/>月<input type="text">日</div>
      </div>
      <div class="msg-item">
        <label for="ipt5">报告采样时间：</label>
        <div class="ipt-box date"><input type="text" id="ipt5"/>年<input type="text"/>月<input type="text">日</div>
      </div>
      <div class="msg-item">
        <label for="ipt6">综合得分：</label>
        <div class="ipt-box"><input type="text" id="ipt6"/></div>
      </div>
    </div>

    <div class="data-title">
      <h3>数据概况</h3>
      <p>DATA GENERALIZATION</p>
    </div>
    <Title title="得分详情"></Title>
    <Title title="预估数据"></Title>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator'
  import safeBg from '../assets/safe.png'
  import Title from '../components/Title'

  @Component({
    components: {
      Title
    }
  })
  export default class Mypage extends Vue {
    titleBg: string = safeBg
  }
</script>

<style scoped lang="scss">
  .page {
    .title-box {
      height: 230px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;

      .title-cont {
        display: flex;
        flex-flow: column;
        align-items: center;
        color: #ffffff;

        h3 {
          font-size: 24px;
          font-weight: normal;
        }

        span {
          font-size: 9px;
          opacity: 0.4;
          letter-spacing: 2px;
        }

        p {
          margin-top: 15px;
          font-size: 12px;
          letter-spacing: 3px;
        }
      }
    }

    .msg-box {
      box-sizing: border-box;
      padding: 29px 20px;
      border-bottom: 1px solid #27a077;

      .msg-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        label {
          text-align: right;
          width: 7rem;
          flex-shrink: 0;
          font-size: 14px;
          color: #666666;
          margin-right: 10px;
        }

        .ipt-box {
          flex-grow: 1;
          border-bottom: 1px dashed;

          input {
            display: block;
            border: none;
            height: 100%;
            width: 100%;
            font-size: 14px;
            background: none;
            outline: none;
          }
        }

        .date {
          display: flex;
          align-items: center;
          border: none;

          input {
            border-bottom: 1px dashed;
            text-align: center;
          }
        }
      }
    }

    .data-title {
      margin: 20px auto 30px;
      text-align: center;

      h3 {
        font-size: 20px;
        font-weight: normal;
        color: #27a077;
      }

      p {
        color: #b3b3b3;
        font-size: 9px;
        margin-top: 5px;
      }
    }
  }
</style>
