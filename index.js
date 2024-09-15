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
            changeUmbrellaColor('./assets/pink_umbrella.png');
            colorSelects.style.borderColor='Pink'
            
        }
        else if(e.target.id=='color-Blue')
            {
            changeUmbrellaColor('./assets/blue_umbrella.png');
            colorSelects.style.borderColor='Blue'
        }
        else
        {
            changeUmbrellaColor('./assets/yellow_umbrella.png');
            colorSelects.style.borderColor='Yellow'
        }

        rotateUmbrella();

    })
})


getLogo.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
        if (file.size > maxImgSize) {
            alert("File size exceeds 5MB. Please upload a smaller file.");
            getLogo.value = ""; 
        } else {
            reader.onload = function(e) {
                const logoImg = document.createElement('img');
                logoImg.src = e.target.result;
                logoImg.style.position = 'relative';
                logoImg.style.transform = 'translate(-50%, -50%)';
                logoImg.style.width = '50px'; 
                logoImg.style.height = '30px';
                logoImg.style.top = '-40px'; 
                logoImg.style.left='25px'
                
                display_logo.innerHTML = '';
                
                display_logo.appendChild(logoImg);
            };
            reader.readAsDataURL(file);
        }
    }
});
