      
    //피씨버전 링크와 모바일 버전 링크 다르게 띄우기
    if (matchMedia("screen and (min-width: 939px)").matches) {
        // 939px 이상에서 사용할 JavaScript
        $('#siteLink_cd').attr('href', 'http://trinitycare.co.kr/cd-p/');
        $('#siteLink_ss').attr('href', 'http://trinitycare.co.kr/ss-p/');
        $('#siteLink_sp').attr('href', 'http://trinitycare.co.kr/sp/');
    } else {
        // 939px 미만에서 사용할 JavaScript
        $('#siteLink_cd').attr('href', 'http://trinitycare.co.kr/cd-m/');
        $('#siteLink_ss').attr('href', 'http://trinitycare.co.kr/ss-m/');
        $('#siteLink_sp').attr('href', 'http://trinitycare.co.kr/sp/');
    }

