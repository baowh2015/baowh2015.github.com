/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 13:37:58
 * @version $Id$
 */
var map=new BMap.Map("myMap");
map.enableScrollWheelZoom();
//添加控件
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州");
//初始定位
var myGeo = new BMap.Geocoder(); 
myGeo.getPoint("浙江杭州西湖", function(point) {
    if (point) {
      map.centerAndZoom(point, 5);
    }
}, "中国");

$(".ui-guide-top:eq(0)").css("background","#C0C0C0").siblings().css("background","white");

//第一题
$(".ui-guide-top:eq(0)").click(function(){
  $(".ui-guide-top:eq("+ $(this).index() +")").css("background","#C0C0C0").siblings().css("background","white");
  var point = new BMap.Point(120.157593, 30.253746);
  map.centerAndZoom(point, 15);   
  
  var local = new BMap.LocalSearch("杭州市", {
    renderOptions: {
      map: map,
      panel:"results"
    }
  });
  local.searchNearby("宾馆","西湖风景区");
});


// //第二题
$(".ui-guide-top:eq(1)").click(function(){
  $(".ui-guide-top:eq("+ $(this).index() +")").css("background","#C0C0C0").siblings().css("background","white");
  var point = new BMap.Point(120.157593, 30.253746);
  map.centerAndZoom(point, 15);  

  var local = new BMap.LocalSearch("杭州市", {
    renderOptions: {
      map: map,
      panel:"results"
    }
  });
  local.searchNearby("宾馆","西湖风景区");
  var transit = new BMap.TransitRoute(map, {
   pageCapacity: 8,
   renderOptions: {
     map: map,
     panel: 'results',
     autoViewport: true
   }
  });
  local.setMarkersSetCallback(function(t){
   for(var i=0;i<t.length;i++){
     t[i].marker.addEventListener('click', function(e){
      var markerpoint = this.getPosition();
       transit.search("杭州师范大学仓前新校区",new BMap.Point(markerpoint.lng,markerpoint.lat));
     })
   }
  })
});



//第三题
$(".ui-guide-top:eq(2)").click(function(){
  $(".ui-guide-top:eq("+ $(this).index() +")").css("background","#C0C0C0").siblings().css("background","white");
  var point = new BMap.Point(120.018171, 30.296437);
  map.centerAndZoom(point, 18);

  function click(info,point){
    point.addEventListener("click",function(e){
    var point = new BMap.Point(e.target.getPosition().lng, e.target.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(info,opts);
    map.openInfoWindow(infoWindow,point);
    });
  }
   var texts = [
     "<div style='font-weight:800;'>杭州师范大学恕园27</div><div style='font-size: 12px;'>3.8/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园16</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;>杭州师范大学恕园15</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园9</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园29</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园21</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园17</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园14</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园13</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园23</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园24</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园19</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学图书馆</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园2</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学恕园7</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学菜鸟驿站</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学丰子恺研究中心</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学博文苑8</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学博文苑5</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学博文苑3</div><div style='font-size: 12px;'>3.9/5分</div>",
     "<div style='font-weight:800;'>杭州师范大学体育场</div><div style='font-size: 12px;'>3.9/5分</div>" 
   ];
  var markerarray=[
    [120.020336, 30.297949],
    [120.020543, 30.297404],
    [120.020669, 30.297146],
    [120.020615, 30.296733],
    [120.019303, 30.297887],
    [120.019519, 30.297388],
    [120.019761, 30.297068],
    [120.019375, 30.29664],
    [120.019169, 30.29639],
    [120.018396, 30.297443],
    [120.017489, 30.296866],
    [120.017749, 30.296663],
    [120.022232, 30.298807],
    [120.020426, 30.295689],
    [120.019375, 30.295424],
    [120.016824, 30.296258],
    [120.015279, 30.297692],
    [120.015225, 30.29639],
    [120.016545, 30.295689],
    [120.016231, 30.294769],
    [120.014318, 30.295073]
  ];

   var urls = [
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "图书馆.jpg",
     "恕园.jpg",
     "恕园.jpg",
     "菜鸟.jpg",
     "丰子恺.jpg",
     "博文苑.jpg",
     "博文苑.jpg",
     "博文苑.jpg",
     "运动场.jpg",
   ];


  var opts = {
    width: 200, 
    height: 200 
  }

  var images = [];
  for(var i = 0;i < markerarray.length;i++){
    var info=document.createElement("div");
    info.style.width='220px';
    info.style.height='200px';
   var point= new BMap.Marker(new BMap.Point(markerarray[i][0],markerarray[i][1]));
    map.addOverlay(point);
   var address = texts[i];
   var img=document.createElement("img");
   img.style.width='210px';
   img.style.height='150px';
   img.src=urls[i];
    info.append(img);
    info.innerHTML += texts[i];
    click(info,point);
  }
});

