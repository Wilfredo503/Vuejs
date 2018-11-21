const app = new Vue({
    el: "#app",
    data: {
        cantidad: 10,
        clientes: [],
        aceptados: 0,
        rechazados: 0,
        titulo: true,
        genero: true,
        cuidad: true,
        email: true,
        nombres: true,
        apellidos: true,
        cast: ''

    },
    methods: {
        obtenerClientes: function () {
            axios.get('https://randomuser.me/api/?results=' + this.cantidad).then(response => {
                this.clientes = response.data.results;
                console.log(JSON.stringify(this.clientes));
            })
        },
        aceptarCliente: function (posicion) {
            this.aceptados++;
            this.clientes.splice(posicion, 1);


        },
        rechazarCliente: function (posicion) {
            this.rechazados++;
            this.clientes.splice(posicion, 1);
        },
        filtrarInfo: function () {
            (document.querySelector('#titulo').checked) ? this.titulo = true: this.titulo = false;
            (document.querySelector('#genero').checked) ? this.genero = true: this.genero = false;
            (document.querySelector('#ciudad').checked) ? this.cuidad = true: this.cuidad = false;
            (document.querySelector('#email').checked) ? this.email = true: this.email = false;
            (document.querySelector('#nombres').checked) ? this.nombres = true: this.nombres = false;
            (document.querySelector('#apellidos').checked) ? this.apellidos = true: this.apellidos = false;

        },
        aplicarfiltro: function (texto) {
            if (texto.includes(this.cast) > 0) {
                return true;
            }
            return false;
        }


    }
    /*computed: {
        clientesSearch: function () {
            return this.clientes.filter((cliente) => {
                    return cliente.name.first.includes(this.cast) ||
                        cliente.name.last.includes(this.cast);
                }

            );
        }
    }*/


});