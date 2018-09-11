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
                <div class="panel__block">
                  <div class="my-books__controls">
                    <box-icon class="my-books__plus plus" size="md" name='plus-circle'></box-icon>
                  </div>
                  <div class="my-books__books">
                    <ul class="my-books__list">
                      <li class="my-books__item book-card">
                        <div class="book-card__content">
                          <div class="book-card__author">
                            <box-icon class="book-card__author-pic" size="cssSize" name='user-detail'></box-icon>
                            George Martin
                          </div>
                          <div class="book-card__name">
                            <box-icon class="book-card__name-pic" size="cssSize" name='book-bookmark'></box-icon>
                            Game of Thrones
                          </div>
                          <div class="book-card__bottom">
                            <div class="book-card__pages">
                              390 pages
                            </div>
                          </div>
                        </div>
                        <div class="book-card__controls">
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--pencil" name='pencil'></box-icon>
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--trash" name='trash'></box-icon>
                        </div>
                      </li>
                      <li class="my-books__item book-card">
                        <div class="book-card__content">
                          <div class="book-card__author">
                            <box-icon class="book-card__author-pic" size="cssSize" name='user-detail'></box-icon>
                            George Martin
                          </div>
                          <div class="book-card__name">
                            <box-icon class="book-card__name-pic" size="cssSize" name='book-bookmark'></box-icon>
                            Game of Thrones
                          </div>
                          <div class="book-card__bottom">
                            <div class="book-card__pages">
                              390 pages
                            </div>
                          </div>
                        </div>
                        <div class="book-card__controls">
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--pencil" name='pencil'></box-icon>
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--trash" name='trash'></box-icon>
                        </div>
                      </li>
                      <li class="my-books__item book-card">
                        <div class="book-card__content">
                          <div class="book-card__author">
                            <box-icon class="book-card__author-pic" size="cssSize" name='user-detail'></box-icon>
                            George Martin
                          </div>
                          <div class="book-card__name">
                            <box-icon class="book-card__name-pic" size="cssSize" name='book-bookmark'></box-icon>
                            Game of Thrones
                          </div>
                          <div class="book-card__bottom">
                            <div class="book-card__pages">
                              390 pages
                            </div>
                          </div>
                        </div>
                        <div class="book-card__controls">
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--pencil" name='pencil'></box-icon>
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--trash" name='trash'></box-icon>
                        </div>
                      </li>
                      <li class="my-books__item book-card">
                        <div class="book-card__content">
                          <div class="book-card__author">
                            <box-icon class="book-card__author-pic" size="cssSize" name='user-detail'></box-icon>
                            George Martin
                          </div>
                          <div class="book-card__name">
                            <box-icon class="book-card__name-pic" size="cssSize" name='book-bookmark'></box-icon>
                            Game of Thrones
                          </div>
                          <div class="book-card__bottom">
                            <div class="book-card__pages">
                              390 pages
                            </div>
                          </div>
                        </div>
                        <div class="book-card__controls">
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--pencil" name='pencil'></box-icon>
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--trash" name='trash'></box-icon>
                        </div>
                      </li>
                      <li class="my-books__item book-card">
                        <div class="book-card__content">
                          <div class="book-card__author">
                            <box-icon class="book-card__author-pic" size="cssSize" name='user-detail'></box-icon>
                            George Martin
                          </div>
                          <div class="book-card__name">
                            <box-icon class="book-card__name-pic" size="cssSize" name='book-bookmark'></box-icon>
                            Game of Thrones
                          </div>
                          <div class="book-card__bottom">
                            <div class="book-card__pages">
                              390 pages
                            </div>
                          </div>
                        </div>
                        <div class="book-card__controls">
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--pencil" name='pencil'></box-icon>
                          <box-icon size="cssSize" class="book-card__control-icon book-card__control-icon--trash" name='trash'></box-icon>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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

