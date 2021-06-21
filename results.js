temp = location.href.split("?");
let scores = temp[1].split(",");
scores.map((element, index) => {
  scores[index] = parseInt(element);
});

if (scores[0] > 0) {
  //I
  if (scores[1] > 0) {
    //S
    if (scores[2] > 0) {
      //T
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "삘꽂히면 골든벨";
        document.querySelector("#result-img").src = "https://post-phinf.pstatic.net/MjAxODExMDFfMjk4/MDAxNTQxMDU3NDI5Mjk2.ESYa_r29hPaqdDcBWX_KMXUbYt3msQEX42OMynBc2ggg.GJO3IXoIB7fMBhdRW_WuOwXMo0aFyySZJJapSMO93Lkg.JPEG/naver_com_20110326_155800_swls1219.jpg?type=w1200&type=w1200";
        document.querySelector(".result-text").innerHTML = "한번 마음에 든 스타일이나 브랜드가 있으면 그것만 무조건 삼!";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ISTP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "친구지갑 지킴이";
        document.querySelector("#result-img").src = "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/11/1c94709a-e217-416d-af90-0f386da8bcaf.jpg";
        document.querySelector(".result-text").innerHTML = "계획적인 소비의 결정체 최저가 알아보고 매장와서 신어 봄 ";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ISTJ');
      }
    } else {
      //F
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "삘꽂히면 골든벨";
        document.querySelector("#result-img").src = "https://post-phinf.pstatic.net/MjAxODExMDFfMjk4/MDAxNTQxMDU3NDI5Mjk2.ESYa_r29hPaqdDcBWX_KMXUbYt3msQEX42OMynBc2ggg.GJO3IXoIB7fMBhdRW_WuOwXMo0aFyySZJJapSMO93Lkg.JPEG/naver_com_20110326_155800_swls1219.jpg?type=w1200&type=w1200";
        document.querySelector(".result-text").innerHTML = "인터넷 쇼핑 최고! 만사 귀찮아서 돌아다니기 싫음";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ISFP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "프로수발러";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML ="분명 내물건 사러 갔는데 친구꺼만 열심히 골라주는 중";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ISFJ');
      }
    }
  } else {
    //N
    if (scores[2] > 0) {
      //T
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "결국 답정너";
        document.querySelector("#result-img").src = "https://t1.daumcdn.net/cfile/tistory/274D104F549292EA07";
        document.querySelector(".result-text").innerHTML = "점원이 말 안 걸어줬으면 좋겠음. 신속하게 살 물건만 고름"
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'INTP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "친구지갑 지킴이";
        document.querySelector("#result-img").src = "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/11/1c94709a-e217-416d-af90-0f386da8bcaf.jpg";
        document.querySelector(".result-text").innerHTML = "쇼핑=세상에서 가장 신중하게 고르는 작업";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'INTJ');
      }
    } else {
      //F
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "결국 답정너";
        document.querySelector("#result-img").src = "https://t1.daumcdn.net/cfile/tistory/274D104F549292EA07";
        document.querySelector(".result-text").innerHTML = "오프 매장 직원의 말빨에 당하기 싫어서 인터넷 쇼핑몰 장바구니만 터짐";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'INFP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "프로수발러";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "같이 온 친구한테 미안해하고 부담스러워함";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'INFJ');
      }
    }
  }
} else { 
  //E
  if (scores[1] > 0) {
    //S
    if (scores[2] > 0) {
      //T
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "삘꽂히면 골든벨";
        document.querySelector("#result-img").src = "https://post-phinf.pstatic.net/MjAxODExMDFfMjk4/MDAxNTQxMDU3NDI5Mjk2.ESYa_r29hPaqdDcBWX_KMXUbYt3msQEX42OMynBc2ggg.GJO3IXoIB7fMBhdRW_WuOwXMo0aFyySZJJapSMO93Lkg.JPEG/naver_com_20110326_155800_swls1219.jpg?type=w1200&type=w1200";
        document.querySelector(".result-text").innerHTML = "내스타일 아니면 눈길도 안 줌";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ESTP');
        
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "친구지갑 지킴이";
        document.querySelector("#result-img").src = "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/11/1c94709a-e217-416d-af90-0f386da8bcaf.jpg";
        document.querySelector(".result-text").innerHTML = "친구가 충동 구매할 때 말리고 지갑 지켜 줌"
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ESTJ');
      }
    } else {
      //F
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "삘꽂히면 골든벨";
        document.querySelector("#result-img").src = "https://post-phinf.pstatic.net/MjAxODExMDFfMjk4/MDAxNTQxMDU3NDI5Mjk2.ESYa_r29hPaqdDcBWX_KMXUbYt3msQEX42OMynBc2ggg.GJO3IXoIB7fMBhdRW_WuOwXMo0aFyySZJJapSMO93Lkg.JPEG/naver_com_20110326_155800_swls1219.jpg?type=w1200&type=w1200";
        document.querySelector(".result-text").innerHTML = "한번 꽂히면 그날 가게 매출 탑 찍고 나옴"
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ESFP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "프로수발러";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80";
        document.querySelector(".result-text").innerHTML = "그알 푸들급 친화력으로 처음 본 사장님이랑 수다 떰"
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ESFJ');
      }
    }
  } else {
    //N
    if (scores[2] > 0) {
      //T
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "결국 답정너";
        document.querySelector("#result-img").src = "https://t1.daumcdn.net/cfile/tistory/274D104F549292EA07";
        document.querySelector(".result-text").innerHTML ="자기가 좋아하는 브랜드 한정, 아는 지식 대방풀";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ENTP');
        
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "친구지갑 지킴이";
        document.querySelector("#result-img").src = "https://pds.joins.com/news/component/htmlphoto_mmdata/201902/11/1c94709a-e217-416d-af90-0f386da8bcaf.jpg";
        document.querySelector(".result-text").innerHTML = "돈 관리를 철저하게 하지만 인생템 발견하면 망설임 없이 지름";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ENTJ');
      }
    } else {
      //F
      if (scores[3] > 0) {
        //P
        document.querySelector(".result-title").innerHTML = "결국 답정너";
        document.querySelector("#result-img").src = "https://t1.daumcdn.net/cfile/tistory/274D104F549292EA07";
        document.querySelector(".result-text").innerHTML = "속으로 정해둔 원픽 있으면서 답정너로 물어봄";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ENFP');
      } else {
        //J
        document.querySelector(".result-title").innerHTML = "프로수발러";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "자기 옷 쇼핑하러 와서 주변 사람들 떠올림";
        document.querySelector(".share").setAttribute('href','https://buyornot.page.link/welcome?res=' + 'ENFJ');
  
      }
    }
  }
}

const modal = document.querySelector(".modal");

function copy() {
  const create = document.createElement("input");
  create.setAttribute("value", window.document.location.href );
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
  modal.classList.remove("hidden");
  setTimeout( () => {modal.classList.add("hidden")}, 1000);
}