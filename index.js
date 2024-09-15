let colorOptions = document.querySelectorAll('.color-Options');
let colorSelects = document.querySelector('.color-Select');
let getLogo = document.querySelector('#get-logo');
let fileName,imgSrc;
let media_box= document.querySelector('.media-box');
let display_logo =document.querySelector('.display-logo');
let customise_umbrella =document.querySelector('#customised-umbrella');
const maxImgSize =5 * 1024 * 1024;

function rotateUmbrella()
{
    media_box.classList.add('rotate');
    setTimeout(()=>{
        media_box.classList.remove('rotate');

    },1500)

}

function changeUmbrellaColor(imgSrc){
    setTimeout(()=>{ 
        customise_umbrella.src=imgSrc;
    }, 700);
}


Array.from(colorOptions).forEach(colorOption=>{
    colorOption.addEventListener('pointerdown',(e)=>{
        if(e.target.id=='color-Pink')
        {
            changeUmbrellaColor('pink_umbrella.png');
            colorSelects.style.borderColor='Pink'
            
        }
        else if(e.target.id=='color-Blue')
            {
            changeUmbrellaColor('blue_umbrella.png');
            colorSelects.style.borderColor='Blue'
        }
        else
        {
            changeUmbrellaColor('yellow_umbrella.png');
            colorSelects.style.borderColor='Yellow'
        }

        rotateUmbrella();

    })
})


getLogo.addEventListener('change',(event)=>{
    const file = event.target;
    const reader = new FileReader();
    
    if(file)
    {
    
    if(file.size > maxImgSize)
    {
        alert("File size exceeds a valid image file.");
        getLogo=""; //clear the input;
    }
    else{
        fileName= file.files[0].name;
        reader.onload= function(e)
    {
        
        display_logo.style.backgroungImage=`url(${e.target.result})`;
    }
    }
    reader.readAsDataURL(file);

    }
})