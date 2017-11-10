<template>
  <div id="content__blocks" v-cloak v-if="main.id == $route.params.id">
    <div id="user__details">
      <div class="flex-container">
        <div class="user__details">
          <div class="user__avatar">
            <img :src="main.avatar.small" alt="">
          </div>
          <p>{{main.name}}<span>ID:{{main.id}}</span></p>
          <ul class="user__control">
            <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-lock" aria-hidden="true"></i></a></li>
            <li><a href="#">@</a></li>
            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div class="add-to-cart">
          <button disabled class="btn">Поместить в корзину <i class="fa fa-trash-o" aria-hidden="true"></i></button>
          <p v-if="main.online">Online <i class="fa fa-circle" aria-hidden="true"></i></p>
          <p v-else class="warning">Offline <i class="fa fa-circle" aria-hidden="true"></i></p>
        </div>
      </div>
    </div>

    <div id="info__blocks">
      <div class="flex-container">
        <div class="info__block general_info">
          <div class="header__block">
            <p>Общая информация</p>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <ul class="detail">
            <li>
              Статус <span class="active" v-if="general.status && general.status =='active'">Aктивен</span>
                     <span class="warning" v-else>Не активен</span>
            </li>
            <li>
              Тип <span class="vip">VIP</span>
            </li>
            <li>
              Дата регистрации <span>{{general.created_at}}</span>
            </li>
            <li>
              Паспорт (номер+серия) <span v-if="general.passport">{{general.passport}}</span>
                                    <span v-else>Не задан</span>
            </li>
            <li>
              Имя директора <span>{{main.first_name}}</span>
            </li>
            <li>
              Фамилия директора <span v-if="main.surname">{{ main.surname }}</span>
                                <span v-else>Не задана</span>
            </li>
            <li>
              Отчество директора  <span v-if="main.middle_name">{{ main.middle_name }}</span>
                                  <span v-else>Не задано</span>
            </li>
            <li>
              Примечание <span v-if="preferences.about_me">{{ preferences.about_me }}</span>
                         <span v-else>Не задано</span>
            </li>
          </ul>
        </div>
        <div class="info__block contacts">
          <div class="header__block">
            <p>Контакты</p>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <ul class="detail">
            <li>
              Страна <span v-if="contact.country">{{ contact.country }}</span>
                     <span v-else>Не задана</span>
            </li>
            <li>
              Город <span v-if="contact.city">{{ contact.city }}</span>
                    <span v-else>Не задан</span>
            </li>
            <li>
              Адрес <span v-if="contact.address">{{ contact.address }}</span>
                    <span v-else>Не задан</span>
            </li>
            <li>
              E-mail <span v-if="general.email"><a href="#">{{ general.email }}</a></span>
                     <span v-else>Не задан</span>
            </li>
            <li>
              Телефон 1 <span v-if="general.phone"><a href="#">{{ general.phone }}</a></span>
                        <span v-else>Не задан</span>
            </li>
            <li>
              Телефон 2 <span v-if="general.phone"><a href="#">{{ general.phone }}</a></span>
                        <span v-else>Не задан</span>
            </li>
            <li>
              Скайп <span v-if="general.skype"><a href="#">{{ general.skype }}</a></span>
                    <span v-else>Не задан</span>
            </li>
            <li>
              Банковские реквизиты
              <span>
                        <ul>
                            <li>Банк: ПАТ «Перший Український Міжнародний Банк»  (ПУМБ)</li>
                            <li>Получатель: Иванов Иван Иванович</li>
                            <li>МФО: 334851</li>
                            <li>ИНН: 2150645345</li>
                            <li>Р/счет: 26252976015155</li>
                        </ul>
                    </span>
            </li>
          </ul>
        </div>
        <div class="info__block statistic">
          <div class="header__block">
            <p>Статистика</p>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <ul class="detail positive__statistic">
            <li>Количество анкет
              <span>23215</span>
            </li>
            <li>Онлайн
              <span>1224</span>
            </li>
            <li>Бонусы за месяц
              <span class="active">445688</span>
            </li>
            <li>Кол-во админов
              <span>23</span>
            </li>
            <li>Кол-во филиалов
              <span>8</span>
            </li>
          </ul>
          <ul class="detail negative__statistic">
            <li>Замороженные средства
              <span class="warning-bold">2433</span>
            </li>
            <li>Штрафы за месяц
              <span class="warning">2433</span>
            </li>
            <li>Письма новые (критические)
              <span>256 <a href="#" class="warning">50</a></span>
            </li>
            <li>Подарки новые (критические)
              <span>241 <a href="#" class="warning">45</a></span>
            </li>
            <li>Контакт инфо новые (критические)
              <span>17 <a href="#" class="warning">8</a></span>
            </li>
          </ul>
        </div>

        <div class="info__block promo">
          <div class="header__block">
            <p>Промо</p>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <ul class="detail">
            <li>
              VK директора <span><a href="#">vk.com/id7749923</a></span>
            </li>
            <li>
              Facebook директора <span><a href="#">facebook.com/user</a></span>
            </li>
            <li>
              VK агентства <span><a href="#">vk.com/id7749923</a></span>
            </li>
            <li>
              Facebook агентства <span><a href="#">facebook.com/user</a></span>
            </li>
            <li>
              Сайт <span><a href="#">mariageagency.com</a></span>
            </li>
          </ul>
        </div>
        <div class="info__block documents">
          <div class="header__block">
            <p>Документы</p>
            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
          <div class="part">
            <p class="title">ЧП(фирмы)</p>
            <ul class="additing__info">
              <li>
                <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1127&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li><img src="https://images.unsplash.com/photo-1475061310011-970c2da77d72?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt=""></li>
            </ul>
          </div>
          <div class="part">
            <p class="title">Фото офиса</p>
            <ul class="additing__info">
              <li>
                <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1127&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1475061310011-970c2da77d72?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1504217051514-96afa06398be?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1495201050688-bee4686329be?auto=format&fit=crop&w=1049&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1502643618843-7dfebcb8c4a0?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1506484984587-06b6f03e6415?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>

            </ul>
          </div>

          <div class="part">
            <div class="title__collection">
              <div class="pht__passport_2">
                <p class="title">Паспорт <br>
                  директора(2 стр)</p>
                <div class="photo">
                  <img src="https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                </div>
              </div>
              <div class="pht__passport_3">
                <p class="title">Паспорт <br>
                  директора(3 стр)</p>
                <div class="photo">
                  <img src="https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                </div>
              </div>
              <div class="pht__passport_11">
                <p class="title">Паспорт <br>
                  директора(11 стр)</p>
                <div class="photo">
                  <img src="https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                </div>
              </div>
              <div class="video">
                <p class="title">Видео <br>
                  с директором</p>
                <div class="photo">
                  <img src="https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
                  <div class="bg__video">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="part">
            <p class="title">Копия последней страницы договора с сервисом и подписью</p>
            <ul class="additing__info">
              <li>
                <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1127&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
            </ul>
          </div>
          <div class="part">
            <p class="title">Договор на аренду офиса (копия)</p>
            <ul class="additing__info">
              <li>
                <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1127&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1475061310011-970c2da77d72?auto=format&fit=crop&w=1052&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1504217051514-96afa06398be?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1495201050688-bee4686329be?auto=format&fit=crop&w=1049&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>
  <div id="home__content" v-else>
    <h1>Информация о пользователе с ID: {{$route.params.id}} временно не доступна </h1>
  </div>
</template>


<script>
  export default {
    data:function () {
      return {
        main: {},
        additionalInfo:{},
        appearance:{},
        contact:{},
        general:{},
        notificationSettings:{},
        preferences:{},
        statistic:{}
      }
    },

     methods:{
       formatDate: function (date) {

         var dd = date.getDate();
         if (dd < 10) dd = '0' + dd;

         var mm = date.getMonth() + 1;
         if (mm < 10) mm = '0' + mm;

         var yyyy = date.getFullYear();

         return dd + '.' + mm + '.' + yyyy;
       },


       load: function () {

         this.$http.post('https://galvanize-cors-proxy.herokuapp.com/https://hidden-cliffs-66273.herokuapp.com/tz-frontend/man-load-one').then(function (res) {
           console.log(res)
           this.main = (res.data.result.main);
           this.additionalInfo = (res.data.result.additional_info);
           this.general = (res.data.result.general);
           this.preferences = (res.data.result.preferences);
           this.contact = (res.data.result.contact);

           console.log(this.user)

           var d = new Date(this.general.created_at);
           this.general.created_at = this.formatDate(d)


         }, function (err) {
           throw err
         })
       }
     },
    created() {
      this.load()

    },
  }
</script>
