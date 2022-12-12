window.onload=function(){
    const button = document.getElementsByClassName('dw__app')[0];
    const popup = document.getElementsByClassName('popup')[0];
    const items = document.getElementsByClassName('option')[0];
    const dropdown = document.getElementsByClassName('menu')[0];
    const close = document.getElementsByClassName('close')[0];
    console.log(popup);

    button.addEventListener('click', () =>{
        popup.classList.add('active');
    });

    dropdown.addEventListener('click', () =>{
        items.classList.toggle('active');
    });

    close.addEventListener('click', () =>{
        popup.classList.remove('active');
    });
    console.log(items);
}
