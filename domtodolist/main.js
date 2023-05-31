let themeColors=document.querySelectorAll('input[type="radio"]');
//console.log(themeColors)
function storeTheme(theme){
    localStorage.setItem("theme",theme);
}

function applyTheme(){
    const activeTheme=localStorage.getItem("theme");
    themeColors.forEach((themeOption)=>{
        if(activeTheme===themeOption.id){
            themeOption.checked=true;
        }
    })
}

themeColors.forEach((themeOption)=>{
    themeOption.addEventListener("click",()=>{
        storeTheme(themeOption.id)
    })
})

document.onload=applyTheme()

const listItems=document.querySelectorAll