<template>
    <div>
        <el-form ref="form" :rules="rules" :model="form" label-width="300px">
        <el-form-item label="发货地址：" prop="fAdderss1">
          <el-input class="inp" v-model="form.fAdderss1" ></el-input>
        </el-form-item>
      </el-form>

    </div>
</template>
<script>
export default {
    name:'B',
     data() {
    return {
      form: {
        fAdderss1: '',
      },
      // 校验规则
      rules: {
        fAdderss1: [
        { required: true, //是否必填
          message: '地址不能为空', //规则
          trigger: 'blur'  //何事件触发
        },
        //可以设置双重验证标准
        { min: 3, max: 5,  message: '长度在 3 到 5 个字符', }
      ]
      }
    }
  }
}
</script>
<style scoped>

</style>