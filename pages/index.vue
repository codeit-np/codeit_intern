<template>
   <section class=" flex justify-centent-between items-center">
          <div class="flex flex-col gap-5 padding px-28">
            <div class="relative flex-col gap-5">
              <h1 class="capitalize font-bold text-4xl ">
               Nepal's First Platform Offering
               Every Course for Rs. 999!
              </h1>
              <div class="absolute top-[70px] right-[275px]">
                <img src="https://codeit.com.np/asset/img/line.png" alt="line-image">
              </div>
            </div>
           
            <div class="p-6 bg-gray-100 rounded-lg shadow-md m-4">
              <h2 class="text-xl font-bold mb-4">After completing the course, we offer:</h2>
                <ul class="list-decimal list-inside space-y-2 font-bold">
                   <li>Free Certificates</li>
                   <li>Internships</li>
                   <li>Live Class</li>
                   <li>Everyday Recorded Video</li>
                   <li>Lifetime Support!</li>
                </ul>
            </div>
            
               <div class="flex items-center gap-5">
                  <button class="px-4 py-2 bg-[#db4a28] text-white rounded-md hover:bg-red-600 w-48">
                  Explore Courses 
                </button>

                <button class="px-4 py-2 bg-[#f5f1f0] text-pink rounded-md hover:bg-white-600 w-48 border border-red-500">
                  Book an appointment
                </button>
               </div>
            
          </div>
    
        <div class="relative flex flex-col">
        
            <img src="https://codeit.com.np/asset/img/HeroImage.webp">
     
             <div class="python"><img src="~/assets/Python.jpg"></div>
             <div class="react"><img src="assets/React JS.jpg"></div>
             <div class="laravel"><img src="assets/Laravel.jpg"></div>
             <div class="digitalmarketing"><img src="assets/Digital Marketing.jpg"></div>
             <div class="flutter"><img src="assets/Flutter.jpg"></div>
             <div class="django"><img src="assets/Django.jpg"></div>
   
        </div>

        
        </section>
</template>

<script setup></script>

<style scoped>
.python{
  position: absolute;
  animation: python 6s ease-in-out infinite alternate;
  right:650px

}
@keyframes python{
  from{
    top:1px
  }
  to{
    top:6px
  }
}
.laravel{
  position: absolute;
  animation: laravel 5s ease-in-out infinite alternate;
  right:150px
}
@keyframes laravel{
  from{
    top:5px
  }
  to{
    top:-5px
  }
}
.react{
  position: absolute;
  animation: react 5s ease-in-out infinite alternate;
  right: 400px
}
  @keyframes react {
    from{
      top:-6px
    }
    to{
      top: 6px;
    }
  } 
  .django{
  position: absolute;
  animation: django 4s ease-in-out infinite alternate;
  right: 50px
}
 @keyframes django{
  from{bottom: 4px
  }
  to{
    bottom:-4px
  }

 }

 .flutter{
  position: absolute;
  animation: flutter 6s ease-in-out infinite alternate;
  right: 650px
}
 @keyframes flutter{
  from{bottom: -1px
  }
  to{
    bottom: 10px
  }

 }

 .digitalmarketing{
  position: absolute;
  animation: digi 6s ease-in-out infinite alternate;
  right: 300px
}
 @keyframes digi{
  from{bottom: 4px
  }
  to{
    bottom: -6px
  }

 }


</style>
