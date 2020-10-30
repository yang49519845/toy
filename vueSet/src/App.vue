<template>
  <div id="app">
    <button @click="changeProfession">修改一个职业</button>

    <ul>
      <li>
        <button @click="addProfession">添加一个职业</button>
        <input v-model="newWorkName" />
        <input v-model="newWork" />
      </li>
      <li>{{ userName }}</li>
      <li>{{ age }}</li>
      <li>{{ sex }}</li>
      <li>{{ likes }}</li>
      <li>{{ works }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newWork: "",
      newWorkName: "",
      userName: "蔡徐坤",
      age: "18",
      sex: "男",
      likes: [
        {
          action: "篮球",
        },
        {
          action: "跳舞",
        },
        {
          action: "rap",
        },
      ],
      works: {
        teacher: "男团老师",
      },
    };
  },
  methods: {
    changeProfession() {
      this.works.teacher = "女团老师";
    },
    addProfession() {
      // this.works[this.newWorkName] = this.newWork
      this.$set(this.works, this.newWorkName, this.newWork);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
