<template>
  {{ word }}
</template>

<script>
export default {
  data() {
    return {
      word: "frontend developer",
      wordList: ["frontend developer", "backend developer", "designer"],
      index: 0,
    };
  },
  mounted() {
    // setInterval(() => {
    //   console.log(this.word.length)
    //   const calculatedWaitTime = this.word.length * 300;
    //   // delete old word
    //   if (this.index == 0) {
    //     for (let i = 0; i < this.wordList[this.index].length; i++) {
    //       setTimeout(() => {
    //         this.word = this.word.slice(0, -1);
    //       }, 300 * (i + 1));
    //     }
    //   } else {
    //     for (let i = 0; i < this.wordList[this.index - 1].length; i++) {
    //       setTimeout(() => {
    //         this.word = this.word.slice(0, -1);
    //       }, 300 * (i + 1));
    //     }
    //   }

      
    //   setTimeout(() => {
    //     return;
    //   }, calculatedWaitTime);

    //   // insert new word
    //   for (let i = 0; i < this.wordList[this.index].length; i++) {
    //     this.word = this.word + this.wordList[this.index][i];
    //   }

    //   // reset the counter or increase it
    //   if (this.index < this.wordList.length - 1) {
    //     this.index++;
    //   } else {
    //     this.index = 0;
    //   }
    // }, 2000);
  },
};
</script>
