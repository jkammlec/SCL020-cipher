window.addEventListener("load",inicio,true);

function inicio(){
     document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;               
        document.getElementById("mensaje2").value = cifrar2(texto, desplazar);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazar = document.getElementById("desplazar").value;                               
        document.getElementById("mensaje2").value = descifrar(texto, desplazar);
    },true);
}


function cifrar(texto, desplazar) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const letras2 = 'Aabcdefghijklmnñopqrstuvwxyz';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazar = (desplazar % 27 + 27) % 27; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
           if (letras.indexOf(texto[i])!=-1)//primera condicional mayusculas
            { 
               let posicion=((letras.indexOf(texto[i])+desplazar) % 27);
                resultado+=letras[posicion];
            }else if (letras2.indexOf(texto[i])!=-1) { //segunda condicional minusculas
                let posicion=((letras2.indexOf(texto[i])+desplazar) % 27);
                resultado+=letras2[posicion];
            }
            else // si no se cumple ninguna de las condicionales anteriores
              resultado+=texto[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}
function descifrar(texto, desplazar) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const letras2 = 'Aabcdefghijklmnñopqrstuvwxyz';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazar = (desplazar % 27 - 27) % 27; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
           if (letras.indexOf(texto[i])!=-1)//primera condicional mayusculas
            { 
               let posicion=((letras.indexOf(texto[i])-desplazar) % 27);
                resultado+=letras[posicion];
            }else if (letras2.indexOf(texto[i])!=-1) { //segunda condicional minusculas
                let posicion=((letras2.indexOf(texto[i])-desplazar) % 27);
                resultado+=letras2[posicion];
            }
            else // si no se cumple ninguna de las condicionales anteriores
              resultado+=texto[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}