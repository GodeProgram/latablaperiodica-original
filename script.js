document.addEventListener('DOMContentLoaded', function() {
    const elementosTabla = document.querySelectorAll('.elemento');
    const metalesBtn = document.getElementById('metales-btn');
    const noMetalesBtn = document.getElementById('no-metales-btn');
    const semimetalesBtn = document.getElementById('semimetales-btn');
    const gasesNoblesBtn = document.getElementById('gases-nobles-btn');
    const todosBtn = document.getElementById('todos-btn');
    const infoPanel = document.getElementById('info-panel');
    const elementoInfo = document.getElementById('elemento-info');
    const cerrarBtn = document.getElementById('cerrar-btn');


    const tablaPeriodica = [
        { elemento: "H", nombre: "Hidrógeno", masa: 1.008, tipo: "No metal", denominacion: "N/A", grupo: "1", periodo: "1" },
        { elemento: "He", nombre: "Helio", masa: 4.0026, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "1" },
        { elemento: "Li", nombre: "Litio", masa: 6.94, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "2" },
        { elemento: "Be", nombre: "Berilio", masa: 9.0122, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "2" },
        { elemento: "B", nombre: "Boro", masa: 10.81, tipo: "Metaloide", denominacion: "N/A", grupo: "13", periodo: "2" },
        { elemento: "C", nombre: "Carbono", masa: 12.011, tipo: "No metal", denominacion: "N/A", grupo: "14", periodo: "2" },
        { elemento: "N", nombre: "Nitrógeno", masa: 14.007, tipo: "No metal", denominacion: "N/A", grupo: "15", periodo: "2" },
        { elemento: "O", nombre: "Oxígeno", masa: 15.999, tipo: "No metal", denominacion: "N/A", grupo: "16", periodo: "2" },
        { elemento: "F", nombre: "Flúor", masa: 18.998, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "2" },
        { elemento: "Ne", nombre: "Neón", masa: 20.180, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "2" },
        { elemento: "Na", nombre: "Sodio", masa: 22.990, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "3" },
        { elemento: "Mg", nombre: "Magnesio", masa: 24.305, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "3" },
        { elemento: "Al", nombre: "Aluminio", masa: 26.982, tipo: "Metal", denominacion: "N/A", grupo: "13", periodo: "3" },
        { elemento: "Si", nombre: "Silicio", masa: 28.085, tipo: "Metaloide", denominacion: "N/A", grupo: "14", periodo: "3" },
        { elemento: "P", nombre: "Fósforo", masa: 30.974, tipo: "No metal", denominacion: "N/A", grupo: "15", periodo: "3" },
        { elemento: "S", nombre: "Azufre", masa: 32.06, tipo: "No metal", denominacion: "N/A", grupo: "16", periodo: "3" },
        { elemento: "Cl", nombre: "Cloro", masa: 35.45, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "3" },
        { elemento: "Ar", nombre: "Argón", masa: 39.948, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "3" },
        { elemento: "K", nombre: "Potasio", masa: 39.0983, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "4" },
        { elemento: "Ca", nombre: "Calcio", masa: 40.078, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "4" },
        { elemento: "Sc", nombre: "Escandio", masa: 44.9559, tipo: "Metal de transición", denominacion: "N/A", grupo: "3", periodo: "4" },
        { elemento: "Ti", nombre: "Titanio", masa: 47.867, tipo: "Metal de transición", denominacion: "N/A", grupo: "4", periodo: "4" },
        { elemento: "V", nombre: "Vanadio", masa: 50.9415, tipo: "Metal de transición", denominacion: "N/A", grupo: "5", periodo: "4" },
        { elemento: "Cr", nombre: "Cromo", masa: 51.9961, tipo: "Metal de transición", denominacion: "N/A", grupo: "6", periodo: "4" },
        { elemento: "Mn", nombre: "Manganeso", masa: 54.938, tipo: "Metal de transición", denominacion: "N/A", grupo: "7", periodo: "4" },
        { elemento: "Fe", nombre: "Hierro", masa: 55.845, tipo: "Metal de transición", denominacion: "N/A", grupo: "8", periodo: "4" },
        { elemento: "Co", nombre: "Cobalto", masa: 58.9332, tipo: "Metal de transición", denominacion: "N/A", grupo: "9", periodo: "4" },
        { elemento: "Ni", nombre: "Níquel", masa: 58.6934, tipo: "Metal de transición", denominacion: "N/A", grupo: "10", periodo: "4" },
        { elemento: "Cu", nombre: "Cobre", masa: 63.546, tipo: "Metal de transición", denominacion: "N/A", grupo: "11", periodo: "4" },
        { elemento: "Zn", nombre: "Zinc", masa: 65.38, tipo: "Metal de transición", denominacion: "N/A", grupo: "12", periodo: "4" },
        { elemento: "Ga", nombre: "Galio", masa: 69.723, tipo: "Metal", denominacion: "N/A", grupo: "13", periodo: "4" },
        { elemento: "Ge", nombre: "Germanio", masa: 72.630, tipo: "Metaloide", denominacion: "N/A", grupo: "14", periodo: "4" },
        { elemento: "As", nombre: "Arsénico", masa: 74.9216, tipo: "Metaloide", denominacion: "N/A", grupo: "15", periodo: "4" },
        { elemento: "Se", nombre: "Selenio", masa: 78.971, tipo: "No metal", denominacion: "N/A", grupo: "16", periodo: "4" },
        { elemento: "Br", nombre: "Bromo", masa: 79.904, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "4" },
        { elemento: "Kr", nombre: "Kriptón", masa: 83.798, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "4" },
        { elemento: "Rb", nombre: "Rubidio", masa: 85.4678, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "5" },
        { elemento: "Sr", nombre: "Estroncio", masa: 87.62, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "5" },
        { elemento: "Y", nombre: "Itrio", masa: 88.9058, tipo: "Metal de transición", denominacion: "N/A", grupo: "3", periodo: "5" },
        { elemento: "Zr", nombre: "Circonio", masa: 91.224, tipo: "Metal de transición", denominacion: "N/A", grupo: "4", periodo: "5" },
        { elemento: "Nb", nombre: "Niobio", masa: 92.9064, tipo: "Metal de transición", denominacion: "N/A", grupo: "5", periodo: "5" },
        { elemento: "Mo", nombre: "Molibdeno", masa: 95.94, tipo: "Metal de transición", denominacion: "N/A", grupo: "6", periodo: "5" },
        { elemento: "Tc", nombre: "Tecnecio", masa: 98, tipo: "Metal de transición", denominacion: "N/A", grupo: "7", periodo: "5" },
        { elemento: "Ru", nombre: "Rutenio", masa: 101.07, tipo: "Metal de transición", denominacion: "N/A", grupo: "8", periodo: "5" },
        { elemento: "Rh", nombre: "Rodio", masa: 102.9055, tipo: "Metal de transición", denominacion: "N/A", grupo: "9", periodo: "5" },
        { elemento: "Pd", nombre: "Paladio", masa: 106.42, tipo: "Metal de transición", denominacion: "N/A", grupo: "10", periodo: "5" },
        { elemento: "Ag", nombre: "Plata", masa: 107.87, tipo: "Metal de transición", denominacion: "N/A", grupo: "11", periodo: "5" },
        { elemento: "Cd", nombre: "Cadmio", masa: 112.41, tipo: "Metal de transición", denominacion: "N/A", grupo: "12", periodo: "5" },
        { elemento: "In", nombre: "Indio", masa: 114.82, tipo: "Metal", denominacion: "N/A", grupo: "13", periodo: "5" },
        { elemento: "Sn", nombre: "Estaño", masa: 118.71, tipo: "Metal", denominacion: "N/A", grupo: "14", periodo: "5" },
        { elemento: "Sb", nombre: "Antimonio", masa: 121.76, tipo: "Metaloide", denominacion: "N/A", grupo: "15", periodo: "5" },
        { elemento: "Te", nombre: "Telurio", masa: 127.60, tipo: "Metaloide", denominacion: "N/A", grupo: "16", periodo: "5" },
        { elemento: "I", nombre: "Yodo", masa: 126.90, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "5" },
        { elemento: "Xe", nombre: "Xenón", masa: 131.29, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "5" },
        { elemento: "Cs", nombre: "Cesio", masa: 132.9055, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "6" },
        { elemento: "Ba", nombre: "Bario", masa: 137.327, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "6" },
        { elemento: "La", nombre: "Lantano", masa: 138.9055, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Ce", nombre: "Cerio", masa: 140.116, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Pr", nombre: "Praseodimio", masa: 140.9077, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Nd", nombre: "Neodimio", masa: 144.242, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Pm", nombre: "Prometio", masa: 145, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Sm", nombre: "Samario", masa: 150.36, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Eu", nombre: "Europio", masa: 151.964, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Gd", nombre: "Gadolinio", masa: 157.25, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Tb", nombre: "Terbio", masa: 158.9253, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Dy", nombre: "Disprosio", masa: 162.500, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Ho", nombre: "Holmio", masa: 164.9303, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Er", nombre: "Erbio", masa: 167.259, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Tm", nombre: "Tulio", masa: 168.9342, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Yb", nombre: "Iterbio", masa: 173.054, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Lu", nombre: "Lutecio", masa: 174.9668, tipo: "Lantánido", denominacion: "N/A", grupo: "N/A", periodo: "6" },
        { elemento: "Hf", nombre: "Hafnio", masa: 178.49, tipo: "Metal de transición", denominacion: "N/A", grupo: "4", periodo: "6" },
        { elemento: "Ta", nombre: "Tantalio", masa: 180.9479, tipo: "Metal de transición", denominacion: "N/A", grupo: "5", periodo: "6" },
        { elemento: "W", nombre: "Wolframio", masa: 183.84, tipo: "Metal de transición", denominacion: "N/A", grupo: "6", periodo: "6" },
        { elemento: "Re", nombre: "Renio", masa: 186.207, tipo: "Metal de transición", denominacion: "N/A", grupo: "7", periodo: "6" },
        { elemento: "Os", nombre: "Osmio", masa: 190.23, tipo: "Metal de transición", denominacion: "N/A", grupo: "8", periodo: "6" },
        { elemento: "Ir", nombre: "Iridio", masa: 192.217, tipo: "Metal de transición", denominacion: "N/A", grupo: "9", periodo: "6" },
        { elemento: "Pt", nombre: "Platino", masa: 195.084, tipo: "Metal de transición", denominacion: "N/A", grupo: "10", periodo: "6" },
        { elemento: "Au", nombre: "Oro", masa: 196.9665, tipo: "Metal de transición", denominacion: "N/A", grupo: "11", periodo: "6" },
        { elemento: "Hg", nombre: "Mercurio", masa: 200.592, tipo: "Metal de transición", denominacion: "N/A", grupo: "12", periodo: "6" },
        { elemento: "Tl", nombre: "Talio", masa: 204.38, tipo: "Metal", denominacion: "N/A", grupo: "13", periodo: "6" },
        { elemento: "Pb", nombre: "Plomo", masa: 207.2, tipo: "Metal", denominacion: "N/A", grupo: "14", periodo: "6" },
        { elemento: "Bi", nombre: "Bismuto", masa: 208.9804, tipo: "Metal", denominacion: "N/A", grupo: "15", periodo: "6" },
        { elemento: "Po", nombre: "Polonio", masa: 209, tipo: "Metal", denominacion: "N/A", grupo: "16", periodo: "6" },
        { elemento: "At", nombre: "Astato", masa: 210, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "6" },
        { elemento: "Rn", nombre: "Radón", masa: 222, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "6" },
        { elemento: "Fr", nombre: "Francio", masa: 223, tipo: "Metal alcalino", denominacion: "N/A", grupo: "1", periodo: "7" },
        { elemento: "Ra", nombre: "Radio", masa: 226, tipo: "Metal alcalinotérreo", denominacion: "N/A", grupo: "2", periodo: "7" },
        { elemento: "Ac", nombre: "Actinio", masa: 227, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Th", nombre: "Torio", masa: 232.0377, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Pa", nombre: "Protactinio", masa: 231.0359, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "U", nombre: "Uranio", masa: 238.0289, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Np", nombre: "Neptunio", masa: 237, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Pu", nombre: "Plutonio", masa: 244, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Am", nombre: "Americio", masa: 243, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Cm", nombre: "Curio", masa: 247, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Bk", nombre: "Berkelio", masa: 247, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Cf", nombre: "Californio", masa: 251, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Es", nombre: "Einstenio", masa: 252, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Fm", nombre: "Fermio", masa: 257, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Md", nombre: "Mendelevio", masa: 258, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "No", nombre: "Nobelio", masa: 259, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Lr", nombre: "Lawrencio", masa: 266, tipo: "Actínido", denominacion: "N/A", grupo: "N/A", periodo: "7" },
        { elemento: "Rf", nombre: "Rutherfordio", masa: 267, tipo: "Metal de transición", denominacion: "N/A", grupo: "4", periodo: "7" },
        { elemento: "Db", nombre: "Dubnio", masa: 268, tipo: "Metal de transición", denominacion: "N/A", grupo: "5", periodo: "7" },
        { elemento: "Sg", nombre: "Seaborgio", masa: 269, tipo: "Metal de transición", denominacion: "N/A", grupo: "6", periodo: "7" },
        { elemento: "Bh", nombre: "Bohrio", masa: 270, tipo: "Metal de transición", denominacion: "N/A", grupo: "7", periodo: "7" },
        { elemento: "Hs", nombre: "Hassio", masa: 269, tipo: "Metal de transición", denominacion: "N/A", grupo: "8", periodo: "7" },
        { elemento: "Mt", nombre: "Meitnerio", masa: 278, tipo: "Metal de transición", denominacion: "N/A", grupo: "9", periodo: "7" },
        { elemento: "Ds", nombre: "Darmstadtio", masa: 281, tipo: "Metal de transición", denominacion: "N/A", grupo: "10", periodo: "7" },
        { elemento: "Rg", nombre: "Roentgenio", masa: 282, tipo: "Metal de transición", denominacion: "N/A", grupo: "11", periodo: "7" },
        { elemento: "Cn", nombre: "Copernicio", masa: 285, tipo: "Metal de transición", denominacion: "N/A", grupo: "12", periodo: "7" },
        { elemento: "Nh", nombre: "Nihonio", masa: 286, tipo: "No metal", denominacion: "N/A", grupo: "13", periodo: "7" },
        { elemento: "Fl", nombre: "Flerovio", masa: 289, tipo: "No metal", denominacion: "N/A", grupo: "14", periodo: "7" },
        { elemento: "Mc", nombre: "Moscovio", masa: 290, tipo: "No metal", denominacion: "N/A", grupo: "15", periodo: "7" },
        { elemento: "Lv", nombre: "Livermorio", masa: 293, tipo: "No metal", denominacion: "N/A", grupo: "16", periodo: "7" },
        { elemento: "Ts", nombre: "Teneso", masa: 294, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "7" },
        { elemento: "Og", nombre: "Oganesón", masa: 294, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "7" },
    ];

    // Mostrar todos los elementos al cargar la página
    elementosTabla.forEach(elemento => {
        elemento.style.display = 'block';
    });

    metalesBtn.addEventListener('click', function() {
        filtrarElementos('metales');
    });

    noMetalesBtn.addEventListener('click', function() {
        filtrarElementos('no-metales');
    });

    semimetalesBtn.addEventListener('click', function() {
        filtrarElementos('semimetales');
    });

    gasesNoblesBtn.addEventListener('click', function() {
        filtrarElementos('gases-nobles');
    });

    todosBtn.addEventListener('click', function() {
        mostrarTodosLosElementos();
    });

    function filtrarElementos(tipo) {
        elementosTabla.forEach(elemento => {
            if (!elemento.classList.contains(tipo)) {
                elemento.style.display = 'none';
            } else {
                elemento.style.display = 'block';
            }
        });
    }

    function mostrarTodosLosElementos() {
        elementosTabla.forEach(elemento => {
            elemento.style.display = 'block';
        });
    }

    // Mostrar información del elemento al hacer clic
    elementosTabla.forEach(elemento => {
        elemento.addEventListener('click', function() {
            mostrarInformacion(this.dataset.elemento);
        });
    });

    function mostrarInformacion(elemento) {
        const elementoSeleccionado = tablaPeriodica.find(item => item.elemento === elemento);
        if (elementoSeleccionado) {
            elementoInfo.innerHTML = `
                <p><strong>Elemento:</strong> ${elementoSeleccionado.elemento}</p>
                <p><strong>Nombre:</strong> ${elementoSeleccionado.nombre}</p>
                <p><strong>Masa Atómica:</strong> ${elementoSeleccionado.masa}</p>
                <p><strong>Tipo:</strong> ${elementoSeleccionado.tipo}</p>
                <p><strong>Grupo:</strong> ${elementoSeleccionado.grupo}</p>
                <p><strong>Periodo:</strong> ${elementoSeleccionado.periodo}</p>
            `;
            infoPanel.style.display = 'block';
        } else {
            elementoInfo.innerHTML = ''; // Limpiamos el contenido
            infoPanel.style.display = 'none'; // Ocultamos la ventana de información si no se encuentra información
        }
    }

    cerrarBtn.addEventListener('click', function() {
        infoPanel.style.display = 'none';
    });
});
