<style lang="less">
.add-container {
  .form-label-sub{color:#ee0a24;}
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .bgfff{background:#fff;}
  .no-bottom-border{border-bottom:0;}
  .van-cell--required::before {
    left: 15px;
  }
  .van-cell .van-cell__title.van-field__label {
    text-align: left !important;
    padding-left: 10px;
  }
  .picker-box{width:100%;position:absolute;bottom:0;}
  .submit-btn {
    width: 90%;
    margin: 20px 5%;
    .van-button {
      width: 100%;
      border-radius: 4px;
      background-color: #83c1ff;
      color: #fff;
    }
    .van-button::before {
      width: 100%;
    }
  }
}

.input-box {
  margin-left:10px;
  border-bottom:1px solid #ebedf0;
  background: #fff;
  text-align: left;
  padding-left: 10px;
  .title-sub {
    color: #323233;
    padding: 10px 0;
    font-size: 14px;
  }
}
</style>
<template>
  <div class="add-container">
    <van-nav-bar
      title="添加"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="bgfff">
      <van-field
        v-model="form.title"
        type="text"
        required
        clearable
        label="标题"
        placeholder="请输入标题"
      />

      <van-field
        v-model="form.date"
        type="text"
        label="日期"
        placeholder="请选择日期"
        readonly
        right-icon="arrow"
        required
        @click="showDate"
      />

      <van-field
        v-model="form.message"
        rows="5"
        autosize
        label="描述"
        clearable
        type="textarea"
        placeholder="请输入描述"
      />
 
      <div class="input-box">
        <div class="title-sub"><span class="form-label-sub">*</span>上传封面</div>
        <van-uploader v-model="form.cover" multiple :max-count="1" />
      </div>

      <div class="input-box no-bottom-border">
        <div class="title-sub">上传文件</div>
        <van-uploader v-model="fileList" multiple :max-count="9" />
      </div>
    </div>
    
      <div class="submit-btn" @click="submitForm">
        <van-button type="default">发布</van-button>
      </div>
    <div :class="isShow ? 'show' : 'hide'">
      <van-overlay :show="isShow" @click="show = false">
        <van-datetime-picker
        class="picker-box"
        
          :formatter="formatter"
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          @confirm="confirmDate"
          @cancel="cancleDate"
        />
      </van-overlay>
    </div>
  </div>
</template>
<script>
import {
  NavBar,
  Field,
  DatetimePicker,
  Toast,
  Uploader,
  Button,
  Overlay
} from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [DatetimePicker.name]: DatetimePicker,
    [Toast.name]: Toast,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [Overlay.name]: Overlay
  },
  data() {
    return {
      minDate: new Date(),
      isShow: false,
      fileList: [],
      form: { title: "", date: "", message: "",cover:"" },
      currentDate: new Date(),
      beforeRead: []
    };
  },
  methods: {
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      }
      return value;
    },
    onClickLeft() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    showDate() {
      this.isShow = true;
    },
    confirmDate() {
      console.log(this.currentDate);
      console.log(this.timeFormat(this.currentDate));
      this.form.date = this.timeFormat(this.currentDate);
      this.isShow = false;
    },
    cancleDate() {
      this.isShow = false;
    },
    timeFormat(time) {
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "/" + month + "/" + day;
    },

    // 提交表单
    submitForm() {
      if (!this.form.title) {
        Toast("请输入标题");
        return;
      } else if (!this.form.date) {
        Toast("请输入标题");
        return;
      }
      else if (!this.form.cover) {
        Toast("请上传封面");
        return;
      }
    }
  }
};
</script>
