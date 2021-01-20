---
title: "github.io + Jekyll 블로그를 설정해보았습니다"
date: 2021-01-20 23:30:00 +0900
categories: infra blogging
tags: jekyll github.io blogging
---

## 개요

개인 기술블로그를 시작하기 위해 github.io 를 이용한 페이지를 작성하였다.



## 기술블로그 조건

원노트에 계속 기술적인 기록을 적어나가긴 했다. 공유되지 않은 콘텐츠는 죽은 콘텐츠라는 말이 있다.. 내 원노트속에 잠자고 있는 내용들은 공유되지 않는, 정말 나만 보는 자료이다. 귀찮더라도 내 메모를 정리하여 정제된 글을 블로그로 올릴 필요가 있다고 생각했다. 하지만, 내 생각을 올리는 데 불편함은 없어야 하겠다.. 블로깅을 위해 품이 많이 들지 않아야 나도 습관이 잘 들지 않을까?

내가 편리한게 우선이다. 그래서 아래와 같은 조건들을 달았다. 블로그를 만들 프레임웍을 알아볼 때 조건은 아래와 같았고, 화살표와같이 해결했다.

* 마크다운을 활용한 편집이 쉬울 것 -> **필수사항.** 웹에서 편집하기보단 typora를 쓰고싶었고, 됨.
* 이미지 crop하면 쉽게 업로드 될 것 -> 굉장히 중요. 되게 함. 후술.
* 아이콘으로 쉽게 share를 할 수 있을것 -> 테마 찾음
* 웹사이트 안에서 콘텐츠 검색이 잘 될것 -> 적절한 Jekyll 테마를 찾을것
* 콘텐츠를 검색/태그/폴더로 분류 할 수 있을 것 -> 테마 찾음
* 댓글을 달 수 있을것 -> TODO
* 구글 통한 유입이 잘 될 것 -> notion 탈락. TODO.
* 통계도 될 것 -> TODO with GA



## 플랫폼 탐색

티스토리/이글루스/velog/medium 등등이 있는데 위 조건에 하나씩 부합하지 않았다.
검색해보니 github.io랑 Jekyll 이랑 연동해서 많이 하더라.. Gatsby + Strapi 도 고려해보고, 티스토리 markdown도 써보고. 그러다 [기술블로그 만들때 플랫폼 검색에 시간을 너무 많이 쏟지마라!](https://wormwlrm.github.io/2020/02/23/Writing-for-developers.html) 라는 글을 마주쳤는데, 나한테 꾸짖는 소리로 들려서 사람들이 많이 쓰는 github.io + Jekyll 블로깅을 따라하기로 했다.



## 진행

테마를 설치하기 전에, [링크](https://jetalog.net/86)를 따라 순정 Jekyll 을 돌려보았다.

여러가지 테마를 [여기서](http://jekyllthemes.org/) 탐색 해 보았다.

쓸만한 테마들을 발견했는데, 주 관심사는 아니지만 나중을 위해 리스트 적어본다.

* [Chirpy](http://jekyllthemes.org/themes/jekyll-theme-chirpy/) - 블로그 포스트를 분류할때 좋아보인다. 난 이걸로 선택.

  ![](http://jekyllthemes.org/thumbnails/chirpy.png)

* [hcj](https://github.com/codeasashu/hcz-jekyll-blog) - 이것도 분류 좋아보이나, 폴더기능 딱 하나 없어서 아쉽다.

  ![](https://raw.githubusercontent.com/ashutosh2k12/jekyllthemes/master/thumbnails/hcz-material.png)

* [Docsy](https://github.com/vsoch/docsy-jekyll) - 문서화 할때 좋겠다.

  ![](https://raw.githubusercontent.com/vsoch/docsy-jekyll/master/assets/img/docsy-jekyll.png)

* [RTD](http://jekyllthemes.org/themes/jekyll-rtd-theme/) - 이것도 문서화 할때 좋겠다. 많이 보던 양식. [Python flask](https://flask-doc.readthedocs.io/en/latest/) 가 이 스타일이었는데.

  ![img](http://jekyllthemes.org/thumbnails/jekyll-rtd-theme.png)



나는 검색, 태깅, 폴더 기능이 탁월한 [chirpy](http://jekyllthemes.org/themes/jekyll-theme-chirpy/) 테마를 활용하여 블로그를 github에 설치하였다. 이거 다 되는 공짜 테마는 이것밖에 없었다!

공식문서의 가이드를 따라해서 사이트를 만들었다.



## 부족한점 고치기

### 스크린샷  한 이미지를 삽입할 수 없었다

Typora를 통해 클립보드 이미지를 삽입하면, 기본적으로 해당 위치에서 asset 폴더를 생성하고, 이미지는 그 안에 임의의 파일이름을 갖고 저장된다.

_posts/asset을 static page로 서빙하면 이미지를 웹어서 바로 볼 수 있을것이다.

근데 Jekyll도 첨 보고 ruby(Jekyll은 ruby로 돌아간다) 소스도 첨 보는거고, 검색해서 자료도 잘 나오지 않았다.

그리고 typora에서 경로문제도 있었다. assets/... 로컬 이미지를 typora에 삽입하면 

조금 궁여지책을 썼다.

* Typora에서

  * 이미지 기본 저장위치를 ../assets/post_images 로 변경하였다.

* Jekyll js library에서

  * js 파일을 asset에 하나 만들고, 소스를 작성했다. 공식사이트로도 검색으로도, post가 실제로 로드가 끝나는 타이밍에 대한 이벤트에 대한 정보를 잡을수가 없었다. 그래서 ad-hoc으로, 1초 뒤에 변경되도록 timeout을 ~~무식하게~~ 걸었다. 빨리 블로그 구성하고 일 하는게 목적이니.. 기술부채로 쌓아두자.

    ``` javascript
    setTimeout(function(){
      var elems = document.querySelectorAll('img');
      console.log(elems);
      for(var idxElem = 0; idxElem < elems.length; idxElem++){
        var elem = elems[idxElem];
        var src_path = elem.getAttribute('src');
        if(src_path.startsWith("../")){
            src_path = src_path.substring(2);
            elem.setAttribute('src',src_path);
        }
        console.log(src_path);
      };
    }, 1000); //1초 뒤 경로 갱신
    ```

    

결과. 아래의 이미지는 내가 Windows+S 해서 스샷 뜬것을 Typora를 통해 삽입 한 것이다.

![1611164717952](../assets/post_images/1611164717952.png)

잘 뜨쥬?



### 색깔이 맘에 안들었다

다행히 _config.js 에서 dark mode 옵션을 준다. 굳.

## 귀찮아

* push가 귀찮아 -> bat 스크립트 만듦.
* 로컬에서 한번 돌리고 올려야하는데 귀찮아 -> bat 스크립트 만듦.



## 결과

이렇게 해서 블로그 구성과 파이프라인을 갖췄다.

꾸준히 작성 해 보자.

더 나은 내가 되자.