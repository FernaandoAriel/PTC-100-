var i = 0;
var txt = 'Licencia';
var speed = 100;

const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

const PreciolicenciaSencilla = 50;
const PreciolicenciaPremium = 150;
const PreciolicenciaEmpresa = 350;

selectorLicencia.addEventListener('change', function () {
    if (selectorLicencia.value === 'sencilla') {
        descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a la Aplicacion con acceso sencillo.';
        precioLicencia.textContent = `$${PreciolicenciaSencilla}`;
    } else if (selectorLicencia.value === 'premium') {
        descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las opciones de la aplicación.';
        precioLicencia.textContent = `$${PreciolicenciaPremium}`;
    } else if (selectorLicencia.value === 'empresa') {
        descripcionLicencia.textContent = 'Licencia de Empresa: Acceso completo a todas las opciones de la aplicación y soporte prioritario.';
        precioLicencia.textContent = `$${PreciolicenciaEmpresa}`;
    } else {
        descripcionLicencia.textContent = 'Seleccione una Licencia';
        precioLicencia.textContent = `$`;
    }
});

comprarBtn.addEventListener('click', function () {
    if (selectorLicencia.value === 'ninguno') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccionar una licencia de compra.',
        });
    } else {
        Swal.fire({
            icon: 'question',
            title: 'Confirmarcion de la Compra',
            text: '¿Seguro de comprar la licencia?',
            showCancelButton: true,
            confirmButtonText: 'Comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => { 
            if (result.isConfirmed) {
                Swal.fire('¡Licencia comprada exitosamente!', '', 'success');
            }
        });
    }
});

$(document).ready(function() {
    $(window).scroll(function() {
        $('.fadeIn').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('visible');
            }
        });
    });
});

