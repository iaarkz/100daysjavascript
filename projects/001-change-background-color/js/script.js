const body = document.querySelector("body");
const button = document.querySelector(".btn")
const resultado = document.getElementById("resultado")


function gerarCorAleatoria()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    
}

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

button.addEventListener("click", () => { body.style.backgroundColor = gerarCorAleatoria()})
button.addEventListener("click", () => { resultado.value = rgbToHex(body.style.backgroundColor)})