<template>
  <div id="app" class="container mx-auto">
    <div class="relative text-gray-600 pt-5 pb-5">
      <input type="search" v-model="query" class="bg-gray-300 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
      <button class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" v-on:click="calculate">
        Search
      </button>
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    API
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Auth
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    HTTPS
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cors
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Link
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(item) in info" :key="item.id" class="bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.API }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.Description }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.Auth }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.HTTPS }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.Cors }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.Link }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ item.Category }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ul class="list-disc">
      <li v-for="(item, index) in info" :key="item.id">{{index}} {{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      query: "",
      info: null
    }
  },
  mounted () {
    axios
        .get('http://localhost:3000/items')
        .then(response => (this.info = response.data))
  },
  methods: {
    calculate: function() {

      console.log(this.query)
      axios
          .get('http://localhost:3000/items?q=' + this.query)
          .then(response => (this.info = response.data))
    }
  }
}
</script>

