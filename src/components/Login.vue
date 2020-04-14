<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 图片区域 -->
      <div class="avatar_box">
        <img :src="image" />
      </div>
      <!-- 表单区域 -->
      <div>
        <el-form
          ref="form"
          label-width="0px"
          :rules="formRules"
          :model="form"
          class="form-model"
        >
          <el-form-item prop="userName">
            <el-input prefix-icon="el-icon-search" v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-search"
              v-model="form.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="loginForm">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import image from '../assets/logo.png'
  export default {
    name: 'Login',
    data() {
      return {
        image: image,
        form: {
          userName: 'admin',
          password: '123456'
        },
        formRules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              min: 3,
              max: 8,
              message: '长度应该在3个到8个字符之间',
              trigger: 'blur'
            }
          ],
          password: [
            { required: true, message: ' 请输入密码' },
            { min: 6, max: 15, message: '长度应该在6到15个字符之间' }
          ]
        }
      }
    },
    methods: {
      loginForm() {
        this.$refs['form'].validate(async valid => {
          if (valid) {
            // 将登录成功之后的token 保存到客户端的sessionStorage中 localStorage是永久储存 sessionStorage是会话储存
            // 只应在当前网站打开期间生效 所以将token保存在sessionstorage中
            this.$message.success('登录成功')
            window.sessionStorage.setItem('token', 'loginTokenMessage')
            this.$router.push('/home')
          }
        })
      },
      resetForm() {
        // this.$refs['form'].validate(valid => {
        //   if (valid) {
        //   }
        // })
        this.$refs['form'].resetFields()
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-container {
    background-color: #2b4b6b;
    height: 100%;
    position: relative;
    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      text-align: center;
      .avatar_box {
        width: 130px;
        height: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        z-index: -1;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
        }
      }
    }
  }
  .form-model {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>