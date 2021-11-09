const cantidad_entradas = document.getElementsByName('op_cantidad')[0];

const categoria = document.getElementById('op_categoria');

const resumen_ = document.getElementById('btn_resumen');

const borrar = document.getElementById('btn_borrar');

const total_a_pagar = document.getElementById('total_a_pagar');

resumen_.addEventListener('click', function(event) {

    console.log(cantidad_entradas.value);
    console.log(categoria.value);
    //total_a_pagar.innerHTML = cantidad_entradas.value;

    if (categoria.value == "Estudiante") {
        entrada = (200 * 0.20 * cantidad_entradas.value);
        total_a_pagar.innerHTML = entrada;
        console.log(entrada);
    } else if (categoria.value == "Trainee") {
        entrada = (200 * 0.50 * cantidad_entradas.value);
        total_a_pagar.innerHTML = entrada;
    } else if (categoria.value == "Junior") {
        entrada = (200 * 0.85 * cantidad_entradas.value);
        total_a_pagar.innerHTML = entrada;
    }
});