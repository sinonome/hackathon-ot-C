var isOrder=false;

function OnButtonClick() {
    if(isOrder==true){
        des.style.display = ascVisible;
        asc.style.display = 'none';
        isOrder=false;
    }else{
        des.style.display = 'none';
        asc.style.display = desVisible;
        isOrder=true;
    }
    return false;
}

scroll_end(isOrder);