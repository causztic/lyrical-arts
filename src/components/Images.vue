<template>
  <div>
    <div class='images'>
      <img class='image' src='../assets/1.jpg'>
      <div class='image'>
        <p>
        流水 不解寂寞
        <br/>
        落花 空自漂泊
        </p>
        <img src='../assets/2.jpg'>
      </div>
      <img class='image' src='../assets/3.jpg'>
    </div>
    <div class='images'>
      <img class='image' src='../assets/4.jpg'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Images'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.images {
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 25%;
  align-items: flex-end;
}

.images .image {
  width: 30%;
  margin: 1%;
}

.images .image img {
  width: 100%;
}

</style>
