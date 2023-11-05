<template>
  {{ word }}
</template>

<script>
export default {
  data() {
    return {
      word: "frontend developer",
      wordList: ["frontend developer", "backend developer", "designer"],
      index: 1,
      timerId: null,
    };
  },
  mounted() {
    this.startTypewriter();
  },
  beforeUnmount() {
    clearTimeout(this.timerId);
  },
  methods: {
    startTypewriter() {
      this.timerId = setTimeout(() => {
        this.deleteWord();
      }, 2000);
    },
    deleteWord() {
      const wordLength = this.word.length;
      if (wordLength > 0) {
        this.word = this.word.slice(0, wordLength - 1);
        this.timerId = setTimeout(() => {
          this.deleteWord();
        }, 200);
      } else {
        this.insertWord();
      }
    },
    insertWord() {
      const targetWord = this.wordList[this.index];
      const targetLength = targetWord.length;
      if (this.word.length < targetLength) {
        this.word = targetWord.slice(0, this.word.length + 1);
        this.timerId = setTimeout(() => {
          this.insertWord();
        }, 200);
      } else {
        this.index = (this.index + 1) % this.wordList.length;
        this.timerId = setTimeout(() => {
          this.startTypewriter();
        }, 2000);
      }
    },
  },
};
</script>
