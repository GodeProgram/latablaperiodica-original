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
     { "elemento": "H", "nombre": "Hidrógeno", "masa": 1.008, "tipo": "No metal", "denominacion": "N/A", "grupo": "1", "periodo": "1", "numero_atomico": 1 },
        { "elemento": "He", "nombre": "Helio", "masa": 4.0026, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "1", "numero_atomico": 2 },
        { "elemento": "Li", "nombre": "Litio", "masa": 6.94, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "2", "numero_atomico": 3 },
        { "elemento": "Be", "nombre": "Berilio", "masa": 9.0122, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "2", "numero_atomico": 4 },
        { "elemento": "B", "nombre": "Boro", "masa": 10.81, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "13", "periodo": "2", "numero_atomico": 5 },
        { "elemento": "C", "nombre": "Carbono", "masa": 12.011, "tipo": "No metal", "denominacion": "N/A", "grupo": "14", "periodo": "2", "numero_atomico": 6 },
        { "elemento": "N", "nombre": "Nitrógeno", "masa": 14.007, "tipo": "No metal", "denominacion": "N/A", "grupo": "15", "periodo": "2", "numero_atomico": 7 },
        { "elemento": "O", "nombre": "Oxígeno", "masa": 15.999, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "2", "numero_atomico": 8 },
        { "elemento": "F", "nombre": "Flúor", "masa": 18.998, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "2", "numero_atomico": 9 },
        { "elemento": "Ne", "nombre": "Neón", "masa": 20.180, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "2", "numero_atomico": 10 },
        { "elemento": "Na", "nombre": "Sodio", "masa": 22.990, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "3", "numero_atomico": 11 },
        { "elemento": "Mg", "nombre": "Magnesio", "masa": 24.305, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "3", "numero_atomico": 12 },
        { "elemento": "Al", "nombre": "Aluminio", "masa": 26.982, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "3", "numero_atomico": 13 },
        { "elemento": "Si", "nombre": "Silicio", "masa": 28.085, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "14", "periodo": "3", "numero_atomico": 14 },
        { "elemento": "P", "nombre": "Fósforo", "masa": 30.974, "tipo": "No metal", "denominacion": "N/A", "grupo": "15", "periodo": "3", "numero_atomico": 15 },
        { "elemento": "S", "nombre": "Azufre", "masa": 32.06, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "3", "numero_atomico": 16 },
        { "elemento": "Cl", "nombre": "Cloro", "masa": 35.45, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "3", "numero_atomico": 17 },
        { "elemento": "Ar", "nombre": "Argón", "masa": 39.948, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "3", "numero_atomico": 18 },
        { "elemento": "K", "nombre": "Potasio", "masa": 39.0983, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "4", "numero_atomico": 19 },
        { "elemento": "Ca", "nombre": "Calcio", "masa": 40.078, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "4", "numero_atomico": 20 },
        { "elemento": "Sc", "nombre": "Escandio", "masa": 44.9559, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "3", "periodo": "4", "numero_atomico": 21 },
        { "elemento": "Ti", "nombre": "Titanio", "masa": 47.867, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "4", "numero_atomico": 22 },
        { "elemento": "V", "nombre": "Vanadio", "masa": 50.9415, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "4", "numero_atomico": 23 },
        { "elemento": "Cr", "nombre": "Cromo", "masa": 51.9961, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "4", "numero_atomico": 24 },
        { "elemento": "Mn", "nombre": "Manganeso", "masa": 54.938, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "4", "numero_atomico": 25 },
        { "elemento": "Fe", "nombre": "Hierro", "masa": 55.845, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "4", "numero_atomico": 26 },
        { "elemento": "Co", "nombre": "Cobalto", "masa": 58.9332, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "4", "numero_atomico": 27 },
        { "elemento": "Ni", "nombre": "Níquel", "masa": 58.6934, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "4", "numero_atomico": 28 },
        { "elemento": "Cu", "nombre": "Cobre", "masa": 63.546, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "4", "numero_atomico": 29 },
        { "elemento": "Zn", "nombre": "Zinc", "masa": 65.38, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "4", "numero_atomico": 30 },
        { "elemento": "Ga", "nombre": "Galio", "masa": 69.723, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "4", "numero_atomico": 31 },
        { "elemento": "Ge", "nombre": "Germanio", "masa": 72.630, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "14", "periodo": "4", "numero_atomico": 32 },
        { "elemento": "As", "nombre": "Arsénico", "masa": 74.9216, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "15", "periodo": "4", "numero_atomico": 33 },
        { "elemento": "Se", "nombre": "Selenio", "masa": 78.971, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "4", "numero_atomico": 34 },
        { "elemento": "Br", "nombre": "Bromo", "masa": 79.904, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "4", "numero_atomico": 35 },
        { "elemento": "Kr", "nombre": "Kriptón", "masa": 83.798, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "4", "numero_atomico": 36 },
        { "elemento": "Rb", "nombre": "Rubidio", "masa": 85.4678, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "5", "numero_atomico": 37 },
        { "elemento": "Sr", "nombre": "Estroncio", "masa": 87.62, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "5", "numero_atomico": 38 },
        { "elemento": "Y", "nombre": "Itrio", "masa": 88.9058, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "3", "periodo": "5", "numero_atomico": 39 },
        { "elemento": "Zr", "nombre": "Circonio", "masa": 91.224, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "5", "numero_atomico": 40 },
        { "elemento": "Nb", "nombre": "Niobio", "masa": 92.9064, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "5", "numero_atomico": 41 },
        { "elemento": "Mo", "nombre": "Molibdeno", "masa": 95.94, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "5", "numero_atomico": 42 },
        { "elemento": "Tc", "nombre": "Tecnecio", "masa": 98, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "5", "numero_atomico": 43 },
        { "elemento": "Ru", "nombre": "Rutenio", "masa": 101.07, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "5", "numero_atomico": 44 },
        { "elemento": "Rh", "nombre": "Rodio", "masa": 102.9055, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "5", "numero_atomico": 45 },
        { "elemento": "Pd", "nombre": "Paladio", "masa": 106.42, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "5", "numero_atomico": 46 },
        { "elemento": "Ag", "nombre": "Plata", "masa": 107.87, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "5", "numero_atomico": 47 },
        { "elemento": "Cd", "nombre": "Cadmio", "masa": 112.41, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "5", "numero_atomico": 48 },
        { "elemento": "In", "nombre": "Indio", "masa": 114.82, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "5", "numero_atomico": 49 },
        { "elemento": "Sn", "nombre": "Estaño", "masa": 118.71, "tipo": "Metal", "denominacion": "N/A", "grupo": "14", "periodo": "5", "numero_atomico": 50 },
        { "elemento": "Sb", "nombre": "Antimonio", "masa": 121.76, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "15", "periodo": "5", "numero_atomico": 51 },
        { "elemento": "Te", "nombre": "Telurio", "masa": 127.60, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "16", "periodo": "5", "numero_atomico": 52 },
        { "elemento": "I", "nombre": "Yodo", "masa": 126.90, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "5", "numero_atomico": 53 },
        { "elemento": "Xe", "nombre": "Xenón", "masa": 131.29, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "5", "numero_atomico": 54 },
        { "elemento": "Cs", "nombre": "Cesio", "masa": 132.9055, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "6", "numero_atomico": 55 },
        { "elemento": "Ba", "nombre": "Bario", "masa": 137.327, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "6", "numero_atomico": 56 },
        { "elemento": "La", "nombre": "Lantano", "masa": 138.9055, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 57 },
        { "elemento": "Ce", "nombre": "Cerio", "masa": 140.116, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 58 },
        { "elemento": "Pr", "nombre": "Praseodimio", "masa": 140.9077, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 59 },
        { "elemento": "Nd", "nombre": "Neodimio", "masa": 144.242, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 60 },
        { "elemento": "Pm", "nombre": "Prometio", "masa": 145, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 61 },
        { "elemento": "Sm", "nombre": "Samario", "masa": 150.36, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 62 },
        { "elemento": "Eu", "nombre": "Europio", "masa": 151.964, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 63 },
        { "elemento": "Gd", "nombre": "Gadolinio", "masa": 157.25, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 64 },
        { "elemento": "Tb", "nombre": "Terbio", "masa": 158.9253, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 65 },
        { "elemento": "Dy", "nombre": "Disprosio", "masa": 162.500, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 66 },
        { "elemento": "Ho", "nombre": "Holmio", "masa": 164.9303, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 67 },
        { "elemento": "Er", "nombre": "Erbio", "masa": 167.259, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 68 },
        { "elemento": "Tm", "nombre": "Tulio", "masa": 168.9342, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 69 },
        { "elemento": "Yb", "nombre": "Iterbio", "masa": 173.04, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 70 },
        { "elemento": "Lu", "nombre": "Lutecio", "masa": 174.967, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "3", "periodo": "6", "numero_atomico": 71 },
        { "elemento": "Hf", "nombre": "Hafnio", "masa": 178.49, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "6", "numero_atomico": 72 },
        { "elemento": "Ta", "nombre": "Tantalio", "masa": 180.9479, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "6", "numero_atomico": 73 },
        { "elemento": "W", "nombre": "Wolframio (Tungsteno)", "masa": 183.84, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "6", "numero_atomico": 74 },
        { "elemento": "Re", "nombre": "Renio", "masa": 186.207, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "6", "numero_atomico": 75 },
        { "elemento": "Os", "nombre": "Osmio", "masa": 190.23, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "6", "numero_atomico": 76 },
        { "elemento": "Ir", "nombre": "Iridio", "masa": 192.217, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "6", "numero_atomico": 77 },
        { "elemento": "Pt", "nombre": "Platino", "masa": 195.084, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "6", "numero_atomico": 78 },
        { "elemento": "Au", "nombre": "Oro", "masa": 196.9665, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "6", "numero_atomico": 79 },
        { "elemento": "Hg", "nombre": "Mercurio", "masa": 200.59, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "6", "numero_atomico": 80 },
        { "elemento": "Tl", "nombre": "Talio", "masa": 204.38, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "6", "numero_atomico": 81 },
        { "elemento": "Pb", "nombre": "Plomo", "masa": 207.2, "tipo": "Metal", "denominacion": "N/A", "grupo": "14", "periodo": "6", "numero_atomico": 82 },
        { "elemento": "Bi", "nombre": "Bismuto", "masa": 208.9804, "tipo": "Metal", "denominacion": "N/A", "grupo": "15", "periodo": "6", "numero_atomico": 83 },
        { "elemento": "Po", "nombre": "Polonio", "masa": 209, "tipo": "Metal", "denominacion": "N/A", "grupo": "16", "periodo": "6", "numero_atomico": 84 },
        { "elemento": "At", "nombre": "Astato", "masa": 210, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "6", "numero_atomico": 85 },
        { "elemento": "Rn", "nombre": "Radón", "masa": 222, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "6", "numero_atomico": 86 },
        { "elemento": "Fr", "nombre": "Francio", "masa": 223, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "7", "numero_atomico": 87 },
        { "elemento": "Ra", "nombre": "Radio", "masa": 226, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "7", "numero_atomico": 88 },
        { "elemento": "Ac", "nombre": "Actinio", "masa": 227, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 89 },
        { "elemento": "Th", "nombre": "Torio", "masa": 232.0381, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 90 },
        { "elemento": "Pa", "nombre": "Protactinio", "masa": 231.0359, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 91 },
        { "elemento": "U", "nombre": "Uranio", "masa": 238.0289, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 92 },
        { "elemento": "Np", "nombre": "Neptunio", "masa": 237, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 93 },
        { "elemento": "Pu", "nombre": "Plutonio", "masa": 244, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 94 },
        { "elemento": "Am", "nombre": "Americio", "masa": 243, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 95 },
        { "elemento": "Cm", "nombre": "Curio", "masa": 247, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 96 },
        { "elemento": "Bk", "nombre": "Berkelio", "masa": 247, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 97 },
        { "elemento": "Cf", "nombre": "Californio", "masa": 251, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 98 },
        { "elemento": "Es", "nombre": "Einstenio", "masa": 252, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 99 },
        { "elemento": "Fm", "nombre": "Fermio", "masa": 257, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 100 },
        { "elemento": "Md", "nombre": "Mendelevio", "masa": 258, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 101 },
        { "elemento": "No", "nombre": "Nobelio", "masa": 259, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 102 },
        { "elemento": "Lr", "nombre": "Lawrencio", "masa": 266, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 103 },
        { elemento: "Rf", nombre: "Rutherfordio", numero_atomico: 104, masa: 267, tipo: "Metal de transición", denominacion: "N/A", grupo: "4", periodo: "7" },
        { elemento: "Db", nombre: "Dubnio", numero_atomico: 105, masa: 268, tipo: "Metal de transición", denominacion: "N/A", grupo: "5", periodo: "7" },
        { elemento: "Sg", nombre: "Seaborgio", numero_atomico: 106, masa: 269, tipo: "Metal de transición", denominacion: "N/A", grupo: "6", periodo: "7" },
        { elemento: "Bh", nombre: "Bohrio", numero_atomico: 107, masa: 270, tipo: "Metal de transición", denominacion: "N/A", grupo: "7", periodo: "7" },
        { elemento: "Hs", nombre: "Hassio", numero_atomico: 108, masa: 269, tipo: "Metal de transición", denominacion: "N/A", grupo: "8", periodo: "7" },
        { elemento: "Mt", nombre: "Meitnerio", numero_atomico: 109, masa: 278, tipo: "Metal de transición", denominacion: "N/A", grupo: "9", periodo: "7" },
        { elemento: "Ds", nombre: "Darmstadtio", numero_atomico: 110, masa: 281, tipo: "Metal de transición", denominacion: "N/A", grupo: "10", periodo: "7" },
        { elemento: "Rg", nombre: "Roentgenio", numero_atomico: 111, masa: 282, tipo: "Metal de transición", denominacion: "N/A", grupo: "11", periodo: "7" },
        { elemento: "Cn", nombre: "Copernicio", numero_atomico: 112, masa: 285, tipo: "Metal de transición", denominacion: "N/A", grupo: "12", periodo: "7" },
        { elemento: "Nh", nombre: "Nihonio", numero_atomico: 113, masa: 286, tipo: "No metal", denominacion: "N/A", grupo: "13", periodo: "7" },
        { elemento: "Fl", nombre: "Flerovio", numero_atomico: 114, masa: 289, tipo: "No metal", denominacion: "N/A", grupo: "14", periodo: "7" },
        { elemento: "Mc", nombre: "Moscovio", numero_atomico: 115, masa: 290, tipo: "No metal", denominacion: "N/A", grupo: "15", periodo: "7" },
        { elemento: "Lv", nombre: "Livermorio", numero_atomico: 116, masa: 293, tipo: "No metal", denominacion: "N/A", grupo: "16", periodo: "7" },
        { elemento: "Ts", nombre: "Teneso", numero_atomico: 117, masa: 294, tipo: "No metal", denominacion: "N/A", grupo: "17", periodo: "7" },
        { elemento: "Og", nombre: "Oganesón", numero_atomico: 118, masa: 294, tipo: "Gas noble", denominacion: "N/A", grupo: "18", periodo: "7" }

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
                <p><strong>Número en la tabla:</strong> ${elementoSeleccionado.numero_atomico}</p>

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
