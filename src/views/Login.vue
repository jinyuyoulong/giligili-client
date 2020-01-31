<template>
  <div>
      登录
    <div style="margin: 20px;"></div>
    <el-form :label-position="left" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.password"></el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
            formLabelAlign: {
                name: '',
                password: ''
            }
        }
    }
}
</script>

<style>

</style>