<template>
  <div>
    <div class='container'>
      <div class='image'>
        <img src='../assets/1.jpg'>
        1. Different Paths
      </div>
      <div class='image'>
      <audio controls>
        <source src="http://soundbible.com/mp3/Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
        <img src='../assets/text.png'>
        <img src='../assets/2.jpg'>
        2. Chance Meeting
      </div>
      <div class='image'>
        <img src='../assets/3.jpg'>
        3. Alone
      </div>
    </div>
    <div class='container'>
      <div class='image'>
        <img src='../assets/4.jpg'>
        4. Untitled
      </div>
    </div>
    <hr/>
    <p>
      Taken at 七星潭 and 石梯坪 in Taiwan, when I was very sick. I was very sick alone.
    </p>
    <div class='explanation'>
      <b>Explanation</b>
      <ol>
        <li>People have different ambitions, desires and directions. People live amongst cold, sharp cliffs and overcast skies.</li>
        <li>The beach flat and vast, the skies less dark, but the sand is still coarse - the same people have found each other.</li>
        <li>Like the waves up the beach, like the flowing water passing us by, people come and go.</li>
        <li>In the end, we have only ourselves to face our own challenges.</li>
      </ol>
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
hr {
  border: solid 1px #eee;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 25%;
}
.explanation {
  display: flex;
  align-items: center;
  justify-ceontent: center;
  flex-direction: column;
}

ol {
  text-align: left;
  padding-right: 1em;
}
.container {
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 25%;
  align-items: flex-end;
}

.container .image {
  width: 30%;
  margin: 1%;
}

.container .image img {
  width: 100%;
}

@media only screen and (max-width: 425px) {
  .container {
    flex-basis: 100%;
  }
  .container .image {
    width: 100%;
  }
  .container .image img {
    width: 100%;
  }
}

</style>
