<template>
  <div id="app">
    <div class="wrapper">
        <header class="header">
          <div class="container">
            <div class="header__content">
              <div class="logo">
                TimeB
                <box-icon class="logo__icon" size="md" name='alarm'></box-icon>
                OK
              </div>
            </div>
          </div>
        </header>
        <main class="main">
          <div class="container">
            <div class="content">

              <div class="panel panel--left my-books">
                <div class="panel__title">Add books</div>
                <div class="panel__block"></div>
              </div>

              <div class="panel panel--center current-books">
                <div class="panel__title">Current books</div>
                <div class="panel__block"></div>
              </div>

              <div class="panel panel--right complete-books">
                <div class="panel__title">Completed books</div>
                <div class="panel__block"></div>
              </div>

            </div>
          </div>
        </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  components: {

  },

  data() {
    return {

      

    }
  },
  
  computed: {
    
  },

  methods: {
    
  }
}

</script>

