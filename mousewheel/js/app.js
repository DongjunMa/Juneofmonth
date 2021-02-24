$(document).ready(function(){
   MyScroll();
});

function MyScroll()
{
   var h=0;
   $("#wrap").on("mousewheel",function(e,delta){

      if(delta>0)
      {
         console.log("마우스 휠을 위로!.");
         $(this).css({"background":"red"});
      }

      else if(delta<0)
      {
         console.log("마우스 휠을 아래로!");
         $(this).css({"background":"blue"});
      }
   });

}






// function MyScroll()---------마우스 휠 이벤트 사용시 색을 변하게 만들었다.
// 다른 속성도 활용할 수 있따.

// {
//    var h=0;
//    $("#wrap").on("mousewheel",function(e,delta){

//       if(delta>0)
//       {
//          console.log("마우스 휠을 위로!.");
//          $(this).css({"background":"red"});
//       }

//       else if(delta<0)
//       {
//          console.log("마우스 휠을 아래로!");
//          $(this).css({"background":"blue"});
//       }
//    });

// }

//------------------------------------------------------


// function MyScroll()----------델타 사용식 휠 정보입력
// {
//    var h=0;
//    $(window).on("mousewheel",function(e,delta){

//       if(delta>0)
//       {
//          console.log("마우스 휠을 올렸습니다.")
//       }
//       else if(delta<0)
//       {
//          console.log("마우스 휠을 내렸습니다.")
//       }
//    });

// }

// function MyScroll()
// {
//    var h=0;
//    $(window).on("mousewheel",function(e,delta){

//       h=$(document).scrollTop();
//       console.log(h);
//    });

// }