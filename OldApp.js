
// <template>


// <div id="app">
//    <product>
//      <h2 slot="title" class="Highlight">{{productData.title}} </h2>
//      <h3 >Product Price : {{productData.price}}</h3>
//      <h3>Product Rating : {{productData.rating}} </h3>
//    </product>
// </div>


//   <!-- <div id="app">
//     <img alt="Vue logo" src="./assets/logo.png">
//     <hello-world msg="Bye Bye World !"  />
//     <hello-world />
//     <hello-world :msg="10" />


//     <hr/>

//   <p class="Highlight"> Styled Para ! </p>

//     <hr/>


//   <ul>
//     <li v-for="(c,i) in courses" :key="i">{{c}}</li>
//   </ul>


//  Original Data : {{myCoursename}}
//     <div v-for="course in courses" v-bind:key="course" >
//       <course :coursename="course"
//        @thenamewaschanged="myCoursename = $event" ></course>
//     </div>    
//   </div> 
// </template>
// <script>
// import HelloWorld from './components/HelloWorld.vue'
// import CourseComponent from './components/course.component.vue';
// import ProductComponent from './components/product.component.vue'
// export default {
//   name: 'app',
//   components: {
//     'helloWorld': HelloWorld,
//     'course':CourseComponent,
//     'product':ProductComponent
//   },
  
//   data(){
//     return {

//       myCoursename:'Node',
//       productData:{title:'Shoes',price:2000,rating:4},

// courses:["React","Node","Polymer" ]

//       // courses:[{name:'React',price:3000},
//       // {name:'Node',price:6000},
//       // {name:'Vue',price:5000},
//       // {name:'Polymer',price:5000},
//       // {name:'Angular',price:5000}      
//       // ]
//     }
//   }
// }
// </script>

// <style scoped>
// .Highlight {
//     background-color:  yellow;
// }
// </style>
	