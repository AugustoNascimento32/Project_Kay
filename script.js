window.onload = functioin () {
    document.querrySelectr(".menuMobile").addEventListener("click", function(){
        if(document.querrySelectr(".menu nav ul").style.display =='flex') {
            document.querrySelectr(".menu nav ul").style.display = 'none';
        } else {
            document.querrySelectr(".menu nav ul").style.display = 'flex';
        }
        });
};