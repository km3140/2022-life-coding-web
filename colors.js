var Links = { //객체 연습, 객체 안의 요소 사이에 콤마로 구분해줘야함
  setColor : function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
        alist[i].style.color=color;
        i=i+1;
    }
  }
}

function nightDayHandler(self){
  var getBody = document.querySelector('body');
  if(self.value === 'night'){
    Links.setColor('white');
    getBody.style.backgroundColor='black';
    getBody.style.color='white';
    self.value = 'day';
  }
  else{
    Links.setColor('black');
    getBody.style.backgroundColor='white';
    getBody.style.color='black';
    self.value = 'night';
  }
}
