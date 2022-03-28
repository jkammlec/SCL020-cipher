window.addEventListener("load",inicio,true);

function inicio(){
    //document.getElementById("mensaje").addEventListener("keyup", function(){
        //this.value = this.value.toUpperCase();
    //}, true);
    
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
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const alterna = 'Aabcdefghijklmnñopqrstuvwxyz';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazar = (desplazar % 27 + 27) % 27; 
    return texto.replace(/[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/ig, c => letras[(letras.indexOf(c) + desplazar) % 27]);
}

function descifrar(texto, desplazar) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const letras2 = 'Aabcdefghijklmnñopqrstuvwxyz';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazar = (desplazar % 27 - 27) % 27; 
    return texto.replace(/[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/ig, c => letras[(letras.indexOf(c) - desplazar) % 27]);
}

function cifrar2(texto, desplazar) {
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
