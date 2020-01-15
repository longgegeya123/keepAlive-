<template>
    <div>
         <el-form ref="form" :rules="rules" :model="form" label-width="300px">    
        <el-form-item label="发货人电话" prop="phone">
          <el-input class="inp" v-model="form.phone" auto-complete="true"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  data() {
    // 此处自定义校验手机号码js逻辑
    var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    var validatePhone = (rule, value, callback) => {
        console.log(callback)
      if (!value) {
        return callback(new Error('号码不能为空!!'))
      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error('格式有误'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      form: {    
        phone: '',
      },
      // 校验规则
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' },{ min: 3, max: 5,  message: '长度在 3 到 5 个字符', }]
        
      },
    }
  }
}
</script>
<style scoped>

</style>