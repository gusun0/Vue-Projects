<template lang="pug">
  main
    section.full.flex
      div.column.image
        img(src="@/assets/img/login.jpg") 
      div.column.flex.text
        div.content
          h1.text-center Aquí <strong>comienza</strong> tu propia <strong>galería</strong>
          form
            input(type="text" placeholder="E-mail")
            input(type="password" placeholder="********")
            button(type="submit") Entrar
          p.text-center o también puedes 
          p.text-center
            a(href="#") Crear tu cuenta  
        ul.social
          li: a(href="#"): i.lab.la-facebook-square
          li: a(href="#"): i.lab.la-instagram
          li: a(href="#"): i.lab.la-patreon
</template>

<script>
export default{
name: 'Login'
}
</script>

<style lang="stylus" scoped>
  .image 
    flex-basis 60%
    width 60%
    img 
      width 100%
      display block
      height 100%
      object-fit cover
  div.column.text
    align-self center 
    flex-basis 40%
    align-items center
    justify-content center
    div.content
      width 320px
  ul.social  
    position absolute
    bottom 40px
    padding 0
    li
      display inline-block
      margin 0 10px
      a 
        font-size 30px
        font-weight normal
</style>

