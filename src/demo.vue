<template>
<!--
   <div>
      <g-date-picker @value="getDate" :value="value"></g-date-picker>
   </div>
-->
   <div>
      <g-table :data-source="dataSource" bordered :selected-items.sync="selected" number-visible :order-by.sync="orderBy"
               :loading="loading" :height="400" :expend-field="true"  checkable>
         <g-table-column text="姓名" field="name" :width="100"></g-table-column>
         <g-table-column text="分数" field="score"></g-table-column>
      </g-table>
<!--
      <div class="parent" ref="parent">
         <div class="child" ref="child">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
            <p>25</p>
            <p>26</p>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
            <p>31</p>
            <p>32</p>
            <p>33</p>
            <p>34</p>
            <p>35</p>
            <p>36</p>
            <p>37</p>
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
            <p>43</p>
            <p>44</p>
            <p>45</p>
            <p>46</p>
            <p>47</p>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
            <p>53</p>
            <p>54</p>
            <p>55</p>
            <p>56</p>
            <p>57</p>
            <p>58</p>
            <p>59</p>
            <p>60</p>
            <p>61</p>
            <p>62</p>
            <p>63</p>
            <p>64</p>
            <p>65</p>
            <p>66</p>
            <p>67</p>
            <p>68</p>
            <p>69</p>
            <p>70</p>
            <p>71</p>
            <p>72</p>
            <p>73</p>
            <p>74</p>
            <p>75</p>
            <p>76</p>
            <p>77</p>
            <p>78</p>
            <p>79</p>
            <p>80</p>
            <p>81</p>
            <p>82</p>
            <p>83</p>
            <p>84</p>
            <p>85</p>
            <p>86</p>
            <p>87</p>
            <p>88</p>
            <p>89</p>
            <p>90</p>
            <p>91</p>
            <p>92</p>
            <p>93</p>
            <p>94</p>
            <p>95</p>
            <p>96</p>
            <p>97</p>
            <p>98</p>
            <p>99</p>
            <p>100</p>
         </div>
      </div>
      <g-button :loading="true" >加载中</g-button>
-->
   </div>

</template>
<script>
   import Vue from 'vue'
   import GDatePicker from './date-picker/date-picker'
   import GButton from './button/button'
   import GCol from './grid/col'
   import GRow from './grid/row'
   import GTable from './table'
   import GTableColumn from './table-column'
   Vue.use(plugin)
   import plugin from './plugin'

   export default {
      components: { GDatePicker,GButton,GCol,GRow,GTable,GTableColumn },
      data() {
         return {
            error:'',
            fileList: [],
            currentPage: 1,
            columns: [
               {text: '姓名', field: 'name', width: 100},
               {text: '分数', field: 'score'}
            ],
            value:undefined,
            orderBy: { //true 开启排序
               name: true,
               score: 'desc'
            },
            loading: false,
            dataSource: [
               {id: 1, name: '张三', score: 100, description: '可展开'},
               {id: 2, name: '里斯', score: 90},
               {id: 3, name: '王武', score: 66},
               {id: 4, name: '李维斯', score: 88},
               {id: 5, name: '张三', score: 100},
               {id: 6, name: '里斯', score: 90},
               {id: 7, name: '王武', score: 66},
               {id: 8, name: '李维斯', score: 88},
               {id: 9, name: '张三', score: 100},
               {id: 10, name: '里斯', score: 90},
               {id: 11, name: '王武', score: 66},
               {id: 12, name: '李维斯', score: 88},
            ],
            selected: []
         }
      },
      mounted() {
         let parent = this.$refs.parent
         let child = this.$refs.child
      },
      created() {
      },
      methods: {
         getDate(value){
            this.value = value
         },
      }
   }

</script>

<style>
   .zzz{
      border:1px solid red;
   }
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   image{
      max-width: 100%;
   }
   .parent{
      height:400px;
      overflow: hidden;
      width:400px;
      border:1px solid red;
      box-sizing: border-box;
   }
   .child{
      border:1px solid green;
      box-sizing: border-box;
   }
</style>