<template>
  <div id="client__block">
    <div id="breadcrumbs__nav">
      <div class="flex-container">
        <ul class="breadcrumbs">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/clients" >Список клиентов</router-link></li>
        </ul>
      </div>
    </div>
    <div id="info__blocks">
      <div class="flex-container">
        <div class="info__block clients">
          <div class="header__block">
            <p><i class="fa fa-users" aria-hidden="true"></i> Клиенты</p>
            <a href="#" class="btn btn-green">Создать<i class="fa fa-plus" aria-hidden="true"></i></a>
          </div>
          <div class="filter">
            <input type="text" placeholder="ID" v-model="searchID">
            <input type="text" placeholder="Имя" v-model="searchName">
            <!--<input type="text" placeholder="Online" v-model="searchOn">-->
            <input type="text" placeholder="Email">
            <select v-model="searchPay">
              <option value="">Не задано</option>
              <option value="1">Платник</option>
              <option value="0">Не платник</option>
            </select>
            <select v-model="searchOn">
              <option value="">Не задано</option>
              <option value="1">Онлайн</option>
              <option value="0">Оффлайн</option>
            </select>
            <select v-model="searchNew">
              <option value="">Не задано</option>
              <option value="0">Зарегистрирован</option>
              <option value="1">Не зарегистрирован</option>
            </select>
            <div class="checkbox"><input type="checkbox" id="local" v-model="LocalTime"><label for="local">Локальное время</label></div>
          </div>
          <div class="table__clients">
            <table border="1">
              <thead>
              <tr>
                <td>ID<i class="sprite sprite-sort" @click="sortArrayNumber('id')"></i></td>
                <td>Аватар</td>
                <td>Имя<i class="sprite sprite-sort" @click="sortArrayString('name')"></i></td>
                <td>Привел<i class="sprite sprite-sort" @click="sortArrayNumber('count_payyer')"></i></td>
                <td>Примечание</td>
                <td>Кол-во<i class="sprite sprite-sort" @click="sortArrayNumber('count_payyer')"></i></td>
                <td>Сумма<i class="sprite sprite-sort" @click="sortArrayNumber('sum_credits')"></i></td>
                <td>Баланс<i class="sprite sprite-sort" @click="sortArrayNumber('credit_balance')"></i></td>
                <td>Онлайн<i class="sprite sprite-sort" @click="sortArrayNumber('online')"></i></td>
                <td>Новый<i class="sprite sprite-sort" @click="sortArrayNumber('new')"></i></td>
                <td>Посл. активность<i class="sprite sprite-sort" @click="sortArrayString('last_active')"></i></td>
                <td>Дата регистрации<i class="sprite sprite-sort" @click="sortArrayString('created_at')"></i></td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="client in paginatedUsers">
                <td><router-link :to="'/user/' + client.id" >{{client.id}}</router-link><i class="fa fa-indent" aria-hidden="true"></i></td>
                <td class="avatar"><img :src="client.avatar.small" alt=""></td>
                <td><router-link :to="'/user/' + client.id" >{{client.name}}</router-link></td>
                <td>{{client.count_payyer}}</td>
                <td>{{client.user_status_note}}</td>
                <td>{{client.count_payyer}}</td>
                <td>{{client.sum_credits}}</td>
                <td>{{client.credit_balance}}</td>
                <td class="online" v-if="client.online ==1"><div class="sprite sprite-checked"></div></td>
                <td class="online" v-else><div class="sprite sprite-unchecked"></div></td>
                <td v-if="client.new">Да</td>
                <td v-else>Нет</td>
                <td>{{client.last_ac}}</td>
                <td v-if="client.created_at">{{client.created_ac}}</td>
                <td v-else>Не зарегистрирован</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="pagination">
       <div class="flex-container">
          <div class="pagination">
            <router-link   v-if="prev"  :to="{ path: 'clients', query: { p: currentPage  }}">Previous</router-link>
            <ul class="pagination__page">
              <li v-for="(pageNumber, index) in totalPages">
                <router-link  @click="setPage(index)" :to="{ path: 'clients', query: { p: pageNumber}}">{{ pageNumber }}</router-link>
              </li>
            </ul>
            <router-link  v-if="next" :to="{ path: 'clients', query: { p: currentPage + 2 }}">Next</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    watch: {
      '$route' (to) {
        this.currentPage = to.query.p - 1;
        if((to.query.p - 1)* this.itemsPerPage>this.filters.length - this.itemsPerPage || this.filters.length<this.itemsPerPage ){
          this.next = false
        }else {
          this.next = true
        }

        if(to.query.p<=1){
          this.prev = false
        }else {
          this.prev = true
        }


      }
    },
    data: function () {
      return {
        clients:[],
        count:20,
        countPage:[],
        countClientPage:10,
        thisPageClient:[],
        elem:0,
        prev:false,
        next: true,
        searchID:'',
        searchName:'',
        searchPay:'',
        searchOn:'',
        searchNew:'',
        LocalTime:'',
        clientsId:[],
        isTrue: true,
        searchKey: '',
        nextP: this.$route.query.p,
        currentPage: this.$route.query.p - 1,
        itemsPerPage: 20,
        resultCount: 0,
        filtersA:[]

      }
    },
    methods: {

      setPage: function(pageNumber) {
        this.currentPage = pageNumber;
      },
      //Ф-ция сортировки по строковым полям
      sortArrayString: function (param) {
        let $this = this;
        this.clients.sort(function (a, b) {
          return ($this.isTrue) ? ((a[param] < b[param]) ? -1 : (a[param] > b[param]) ? 1 : 0) : ((a[param] > b[param]) ? -1 : (a[param] < b[param]) ? 1 : 0);
        });
        $this.isTrue = !$this.isTrue;
      },
      //Ф-ция сортировки по числовым полям
      sortArrayNumber: function (param) {
        let $this = this;
        this.clients.sort(function (a, b) {
          return ($this.isTrue) ? a[param] - b[param] : b[param] - a[param];
        });
        $this.isTrue = !$this.isTrue;
      },

      formatDateUTC: function (date) {

        var dd = date.getUTCDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getUTCMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yyyy = date.getUTCFullYear();

        var hh = date.getUTCHours();
        if (hh < 10) hh = '0' + hh;

        var MM = date.getUTCMinutes();
        if (MM < 10) MM = '0' + MM;

        var ss = date.getUTCMinutes();
        if (ss < 10) ss = '0' + ss;

        return dd + '.' + mm + '.' + yyyy +', '+ hh+':'+ MM +':' +ss;
      },

      formatDate: function (date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yyyy = date.getFullYear();

        var hh = date.getHours();
        if (hh < 10) hh = '0' + hh;

        var MM = date.getMinutes();
        if (MM < 10) MM = '0' + MM;

        var ss = date.getSeconds();
        if (ss < 10) ss = '0' + ss;

        return dd + '.' + mm + '.' + yyyy +', '+ hh+':'+ MM +':' +ss;
      },

      load: function () {

        this.$http.post('https://galvanize-cors-proxy.herokuapp.com/https://hidden-cliffs-66273.herokuapp.com/tz-frontend/man-load').then(function (res) {
          this.clients = res.data.result;
        }, function (error) {
          throw error
        })
      },

    },
    created() {
      this.load()

    },
    computed:{
      totalPages: function() {
        return Math.round(this.filters.length / this.itemsPerPage)
      },
      /*
      /Фильтры
       */
      filters:function () {
        var $this = this;
        return this.filters = this.clients.filter(function(client){
          if($this.LocalTime){
            String(client.created_ac = $this.formatDate(new Date(client.created_at))).match($this.LocalTime);
            String(client.last_ac = $this.formatDate(new Date(client.last_active))).match($this.LocalTime)
          }else {
            String(client.created_ac = $this.formatDateUTC(new Date(client.created_at))).match($this.LocalTime);
            String(client.last_ac = $this.formatDateUTC(new Date(client.last_active))).match($this.LocalTime)
          }
          return  client.name.match($this.searchName) &&
            String(client.id).match($this.searchID) &&
            String(client.online).match($this.searchOn) &&
            String(client.new).match($this.searchNew) &&
            String(client.is_payyer).match($this.searchPay)&&
            client.created_ac && client.last_ac
        })
      },

      paginatedUsers: function(){

         if (this.currentPage <= this.totalPages) {
          this.currentPage;
        }

        var index = this.currentPage * this.itemsPerPage;
        return this.filters.slice(index, index + this.itemsPerPage)
      },



    }
  }
</script>
