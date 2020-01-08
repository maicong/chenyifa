<template lang="pug"></template>
<script>
export default {
  name: 'Faer',
  fetch ({ error }) {
    error({
      statusCode: 404,
      message: '辞旧迎新，新版多了很多歌曲哦，点上面的“陈一发儿”试试吧！'
    })
  }
}
</script>
