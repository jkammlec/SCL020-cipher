import {cifrar, descifrar} from './cipher.js';
window.addEventListener("load",inicio,true);
function inicio(){
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;               
        document.getElementById("mensaje2").value = cifrar(texto, desplazar);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;                               
        document.getElementById("mensaje2").value = descifrar(texto, desplazar);
    },true);
}



