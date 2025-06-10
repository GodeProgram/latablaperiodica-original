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
        { "elemento": "H", "nombre": "Hidrógeno", "masa": 1.008, "tipo": "No metal", "denominacion": "N/A", "grupo": "1", "periodo": "1", "numero_atomico": 1, "valencias": [1, -1] },
        { "elemento": "He", "nombre": "Helio", "masa": 4.0026, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "1", "numero_atomico": 2, "valencias": [0] },
        { "elemento": "Li", "nombre": "Litio", "masa": 6.94, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "2", "numero_atomico": 3, "valencias": [1] },
        { "elemento": "Be", "nombre": "Berilio", "masa": 9.0122, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "2", "numero_atomico": 4, "valencias": [2] },
        { "elemento": "B", "nombre": "Boro", "masa": 10.81, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "13", "periodo": "2", "numero_atomico": 5, "valencias": [3] },
        { "elemento": "C", "nombre": "Carbono", "masa": 12.011, "tipo": "No metal", "denominacion": "N/A", "grupo": "14", "periodo": "2", "numero_atomico": 6, "valencias": [4, 2, -4] },
        { "elemento": "N", "nombre": "Nitrógeno", "masa": 14.007, "tipo": "No metal", "denominacion": "N/A", "grupo": "15", "periodo": "2", "numero_atomico": 7, "valencias": [3, 5, -3] },
        { "elemento": "O", "nombre": "Oxígeno", "masa": 15.999, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "2", "numero_atomico": 8, "valencias": [2, -2] },
        { "elemento": "F", "nombre": "Flúor", "masa": 18.998, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "2", "numero_atomico": 9, "valencias": [1, -1] },
        { "elemento": "Ne", "nombre": "Neón", "masa": 20.180, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "2", "numero_atomico": 10, "valencias": [0] },
        { "elemento": "Na", "nombre": "Sodio", "masa": 22.990, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "3", "numero_atomico": 11, "valencias": [1] },
        { "elemento": "Mg", "nombre": "Magnesio", "masa": 24.305, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "3", "numero_atomico": 12, "valencias": [2] },
        { "elemento": "Al", "nombre": "Aluminio", "masa": 26.982, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "3", "numero_atomico": 13, "valencias": [3] },
        { "elemento": "Si", "nombre": "Silicio", "masa": 28.085, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "14", "periodo": "3", "numero_atomico": 14, "valencias": [4, -4] },
        { "elemento": "P", "nombre": "Fósforo", "masa": 30.974, "tipo": "No metal", "denominacion": "N/A", "grupo": "15", "periodo": "3", "numero_atomico": 15, "valencias": [3, 5, -3] },
        { "elemento": "S", "nombre": "Azufre", "masa": 32.06, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "3", "numero_atomico": 16, "valencias": [2, 4, 6, -2] },
        { "elemento": "Cl", "nombre": "Cloro", "masa": 35.45, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "3", "numero_atomico": 17, "valencias": [1, 3, 5, 7, -1] },
        { "elemento": "Ar", "nombre": "Argón", "masa": 39.948, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "3", "numero_atomico": 18, "valencias": [0] },
        { "elemento": "K", "nombre": "Potasio", "masa": 39.0983, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "4", "numero_atomico": 19, "valencias": [1] },
        { "elemento": "Ca", "nombre": "Calcio", "masa": 40.078, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "4", "numero_atomico": 20, "valencias": [2] },
        { "elemento": "Sc", "nombre": "Escandio", "masa": 44.9559, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "3", "periodo": "4", "numero_atomico": 21, "valencias": [3] },
        { "elemento": "Ti", "nombre": "Titanio", "masa": 47.867, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "4", "numero_atomico": 22, "valencias": [2, 3, 4] },
        { "elemento": "V", "nombre": "Vanadio", "masa": 50.9415, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "4", "numero_atomico": 23, "valencias": [2, 3, 4, 5] },
        { "elemento": "Cr", "nombre": "Cromo", "masa": 51.9961, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "4", "numero_atomico": 24, "valencias": [2, 3, 6] },
        { "elemento": "Mn", "nombre": "Manganeso", "masa": 54.938, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "4", "numero_atomico": 25, "valencias": [2, 3, 4, 6, 7] },
        { "elemento": "Fe", "nombre": "Hierro", "masa": 55.845, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "4", "numero_atomico": 26, "valencias": [2, 3] },
        { "elemento": "Co", "nombre": "Cobalto", "masa": 58.9332, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "4", "numero_atomico": 27, "valencias": [2, 3] },
        { "elemento": "Ni", "nombre": "Níquel", "masa": 58.6934, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "4", "numero_atomico": 28, "valencias": [2, 3] },
        { "elemento": "Cu", "nombre": "Cobre", "masa": 63.546, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "4", "numero_atomico": 29, "valencias": [1, 2] },
        { "elemento": "Zn", "nombre": "Zinc", "masa": 65.38, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "4", "numero_atomico": 30, "valencias": [2] },
        { "elemento": "Ga", "nombre": "Galio", "masa": 69.723, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "4", "numero_atomico": 31, "valencias": [3] },
        { "elemento": "Ge", "nombre": "Germanio", "masa": 72.630, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "14", "periodo": "4", "numero_atomico": 32, "valencias": [4] },
        { "elemento": "As", "nombre": "Arsénico", "masa": 74.9216, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "15", "periodo": "4", "numero_atomico": 33, "valencias": [3, 5, -3] },
        { "elemento": "Se", "nombre": "Selenio", "masa": 78.971, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "4", "numero_atomico": 34, "valencias": [2, 4, 6, -2] },
        { "elemento": "Br", "nombre": "Bromo", "masa": 79.904, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "4", "numero_atomico": 35, "valencias": [1, 3, 5, -1] },
        { "elemento": "Kr", "nombre": "Kriptón", "masa": 83.798, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "4", "numero_atomico": 36, "valencias": [0] },
        { "elemento": "Rb", "nombre": "Rubidio", "masa": 85.4678, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "5", "numero_atomico": 37, "valencias": [1] },
        { "elemento": "Sr", "nombre": "Estroncio", "masa": 87.62, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "5", "numero_atomico": 38, "valencias": [2] },
        { "elemento": "Y", "nombre": "Itrio", "masa": 88.9058, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "3", "periodo": "5", "numero_atomico": 39, "valencias": [3] },
        { "elemento": "Zr", "nombre": "Circonio", "masa": 91.224, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "5", "numero_atomico": 40, "valencias": [4] },
        { "elemento": "Nb", "nombre": "Niobio", "masa": 92.9064, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "5", "numero_atomico": 41, "valencias": [3, 5] },
        { "elemento": "Mo", "nombre": "Molibdeno", "masa": 95.94, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "5", "numero_atomico": 42, "valencias": [2, 3, 4, 5, 6] },
        { "elemento": "Tc", "nombre": "Tecnecio", "masa": 98, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "5", "numero_atomico": 43, "valencias": [4, 7] },
        { "elemento": "Ru", "nombre": "Rutenio", "masa": 101.07, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "5", "numero_atomico": 44, "valencias": [2, 3, 4, 6, 8] },
        { "elemento": "Rh", "nombre": "Rodio", "masa": 102.9055, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "5", "numero_atomico": 45, "valencias": [2, 3, 4] },
        { "elemento": "Pd", "nombre": "Paladio", "masa": 106.42, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "5", "numero_atomico": 46, "valencias": [2, 4] },
        { "elemento": "Ag", "nombre": "Plata", "masa": 107.87, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "5", "numero_atomico": 47, "valencias": [1] },
        { "elemento": "Cd", "nombre": "Cadmio", "masa": 112.41, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "5", "numero_atomico": 48, "valencias": [2] },
        { "elemento": "In", "nombre": "Indio", "masa": 114.82, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "5", "numero_atomico": 49, "valencias": [3] },
        { "elemento": "Sn", "nombre": "Estaño", "masa": 118.71, "tipo": "Metal", "denominacion": "N/A", "grupo": "14", "periodo": "5", "numero_atomico": 50, "valencias": [2, 4] },
        { "elemento": "Sb", "nombre": "Antimonio", "masa": 121.76, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "15", "periodo": "5", "numero_atomico": 51, "valencias": [3, 5, -3] },
        { "elemento": "Te", "nombre": "Telurio", "masa": 127.60, "tipo": "Metaloide", "denominacion": "N/A", "grupo": "16", "periodo": "5", "numero_atomico": 52, "valencias": [2, 4, 6, -2] },
        { "elemento": "I", "nombre": "Yodo", "masa": 126.90, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "5", "numero_atomico": 53, "valencias": [1, 3, 5, 7, -1] },
        { "elemento": "Xe", "nombre": "Xenón", "masa": 131.29, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "5", "numero_atomico": 54, "valencias": [0] },
        { "elemento": "Cs", "nombre": "Cesio", "masa": 132.9055, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "6", "numero_atomico": 55, "valencias": [1] },
        { "elemento": "Ba", "nombre": "Bario", "masa": 137.327, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "6", "numero_atomico": 56, "valencias": [2] },
        { "elemento": "La", "nombre": "Lantano", "masa": 138.9055, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 57, "valencias": [3] },
        { "elemento": "Ce", "nombre": "Cerio", "masa": 140.116, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 58, "valencias": [3, 4] },
        { "elemento": "Pr", "nombre": "Praseodimio", "masa": 140.9077, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 59, "valencias": [3] },
        { "elemento": "Nd", "nombre": "Neodimio", "masa": 144.242, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 60, "valencias": [3] },
        { "elemento": "Pm", "nombre": "Prometio", "masa": 145, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 61, "valencias": [3] },
        { "elemento": "Sm", "nombre": "Samario", "masa": 150.36, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 62, "valencias": [2, 3] },
        { "elemento": "Eu", "nombre": "Europio", "masa": 151.964, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 63, "valencias": [2, 3] },
        { "elemento": "Gd", "nombre": "Gadolinio", "masa": 157.25, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 64, "valencias": [3] },
        { "elemento": "Tb", "nombre": "Terbio", "masa": 158.9253, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 65, "valencias": [3, 4] },
        { "elemento": "Dy", "nombre": "Disprosio", "masa": 162.500, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 66, "valencias": [3] },
        { "elemento": "Ho", "nombre": "Holmio", "masa": 164.9303, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 67, "valencias": [3] },
        { "elemento": "Er", "nombre": "Erbio", "masa": 167.259, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 68, "valencias": [3] },
        { "elemento": "Tm", "nombre": "Tulio", "masa": 168.9342, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 69, "valencias": [2, 3] },
        { "elemento": "Yb", "nombre": "Iterbio", "masa": 173.04, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "N/A", "periodo": "6", "numero_atomico": 70, "valencias": [2, 3] },
        { "elemento": "Lu", "nombre": "Lutecio", "masa": 174.967, "tipo": "Lantánido", "denominacion": "N/A", "grupo": "3", "periodo": "6", "numero_atomico": 71, "valencias": [3] },
        { "elemento": "Hf", "nombre": "Hafnio", "masa": 178.49, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "6", "numero_atomico": 72, "valencias": [4] },
        { "elemento": "Ta", "nombre": "Tantalio", "masa": 180.9479, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "6", "numero_atomico": 73, "valencias": [5] },
        { "elemento": "W", "nombre": "Wolframio (Tungsteno)", "masa": 183.84, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "6", "numero_atomico": 74, "valencias": [2, 3, 4, 5, 6] },
        { "elemento": "Re", "nombre": "Renio", "masa": 186.207, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "6", "numero_atomico": 75, "valencias": [2, 4, 6, 7] },
        { "elemento": "Os", "nombre": "Osmio", "masa": 190.23, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "6", "numero_atomico": 76, "valencias": [2, 3, 4, 6, 8] },
        { "elemento": "Ir", "nombre": "Iridio", "masa": 192.217, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "6", "numero_atomico": 77, "valencias": [2, 3, 4, 6] },
        { "elemento": "Pt", "nombre": "Platino", "masa": 195.084, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "6", "numero_atomico": 78, "valencias": [2, 4] },
        { "elemento": "Au", "nombre": "Oro", "masa": 196.9665, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "6", "numero_atomico": 79, "valencias": [1, 3] },
        { "elemento": "Hg", "nombre": "Mercurio", "masa": 200.59, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "6", "numero_atomico": 80, "valencias": [1, 2] },
        { "elemento": "Tl", "nombre": "Talio", "masa": 204.38, "tipo": "Metal", "denominacion": "N/A", "grupo": "13", "periodo": "6", "numero_atomico": 81, "valencias": [1, 3] },
        { "elemento": "Pb", "nombre": "Plomo", "masa": 207.2, "tipo": "Metal", "denominacion": "N/A", "grupo": "14", "periodo": "6", "numero_atomico": 82, "valencias": [2, 4] },
        { "elemento": "Bi", "nombre": "Bismuto", "masa": 208.9804, "tipo": "Metal", "denominacion": "N/A", "grupo": "15", "periodo": "6", "numero_atomico": 83, "valencias": [3, 5] },
        { "elemento": "Po", "nombre": "Polonio", "masa": 209, "tipo": "Metal", "denominacion": "N/A", "grupo": "16", "periodo": "6", "numero_atomico": 84, "valencias": [2, 4] },
        { "elemento": "At", "nombre": "Astato", "masa": 210, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "6", "numero_atomico": 85, "valencias": [1, 3, 5, 7, -1] },
        { "elemento": "Rn", "nombre": "Radón", "masa": 222, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "6", "numero_atomico": 86, "valencias": [0] },
        { "elemento": "Fr", "nombre": "Francio", "masa": 223, "tipo": "Metal alcalino", "denominacion": "N/A", "grupo": "1", "periodo": "7", "numero_atomico": 87, "valencias": [1] },
        { "elemento": "Ra", "nombre": "Radio", "masa": 226, "tipo": "Metal alcalinotérreo", "denominacion": "N/A", "grupo": "2", "periodo": "7", "numero_atomico": 88, "valencias": [2] },
        { "elemento": "Ac", "nombre": "Actinio", "masa": 227, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 89, "valencias": [3] },
        { "elemento": "Th", "nombre": "Torio", "masa": 232.0381, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 90, "valencias": [4] },
        { "elemento": "Pa", "nombre": "Protactinio", "masa": 231.0359, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 91, "valencias": [4, 5] },
        { "elemento": "U", "nombre": "Uranio", "masa": 238.0289, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 92, "valencias": [3, 4, 5, 6] },
        { "elemento": "Np", "nombre": "Neptunio", "masa": 237, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 93, "valencias": [3, 4, 5, 6] },
        { "elemento": "Pu", "nombre": "Plutonio", "masa": 244, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 94, "valencias": [3, 4, 5, 6] },
        { "elemento": "Am", "nombre": "Americio", "masa": 243, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 95, "valencias": [3, 4, 5, 6] },
        { "elemento": "Cm", "nombre": "Curio", "masa": 247, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 96, "valencias": [3] },
        { "elemento": "Bk", "nombre": "Berkelio", "masa": 247, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 97, "valencias": [3, 4] },
        { "elemento": "Cf", "nombre": "Californio", "masa": 251, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 98, "valencias": [3] },
        { "elemento": "Es", "nombre": "Einstenio", "masa": 252, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 99, "valencias": [3] },
        { "elemento": "Fm", "nombre": "Fermio", "masa": 257, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 100, "valencias": [3] },
        { "elemento": "Md", "nombre": "Mendelevio", "masa": 258, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 101, "valencias": [2, 3] },
        { "elemento": "No", "nombre": "Nobelio", "masa": 259, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 102, "valencias": [2, 3] },
        { "elemento": "Lr", "nombre": "Lawrencio", "masa": 266, "tipo": "Actínido", "denominacion": "N/A", "grupo": "N/A", "periodo": "7", "numero_atomico": 103, "valencias": [3] },
        { "elemento": "Rf", "nombre": "Rutherfordio", "numero_atomico": 104, "masa": 267, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "4", "periodo": "7", "valencias": [4] },
  { "elemento": "Db", "nombre": "Dubnio", "numero_atomico": 105, "masa": 268, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "5", "periodo": "7", "valencias": [5] },
  { "elemento": "Sg", "nombre": "Seaborgio", "numero_atomico": 106, "masa": 269, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "6", "periodo": "7", "valencias": [6] },
  { "elemento": "Bh", "nombre": "Bohrio", "numero_atomico": 107, "masa": 270, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "7", "periodo": "7", "valencias": [7] },
  { "elemento": "Hs", "nombre": "Hassio", "numero_atomico": 108, "masa": 269, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "8", "periodo": "7", "valencias": [8] },
  { "elemento": "Mt", "nombre": "Meitnerio", "numero_atomico": 109, "masa": 278, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "9", "periodo": "7", "valencias": [1, 3] },
  { "elemento": "Ds", "nombre": "Darmstadtio", "numero_atomico": 110, "masa": 281, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "10", "periodo": "7", "valencias": [0, 2, 4] },
  { "elemento": "Rg", "nombre": "Roentgenio", "numero_atomico": 111, "masa": 282, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "11", "periodo": "7", "valencias": [1] },
  { "elemento": "Cn", "nombre": "Copernicio", "numero_atomico": 112, "masa": 285, "tipo": "Metal de transición", "denominacion": "N/A", "grupo": "12", "periodo": "7", "valencias": [2] },
  { "elemento": "Nh", "nombre": "Nihonio", "numero_atomico": 113, "masa": 286, "tipo": "No metal", "denominacion": "N/A", "grupo": "13", "periodo": "7", "valencias": [1, 3] },
  { "elemento": "Fl", "nombre": "Flerovio", "numero_atomico": 114, "masa": 289, "tipo": "No metal", "denominacion": "N/A", "grupo": "14", "periodo": "7", "valencias": [2, 4] },
  { "elemento": "Mc", "nombre": "Moscovio", "numero_atomico": 115, "masa": 290, "tipo": "No metal", "denominacion": "N/A", "grupo": "15", "periodo": "7", "valencias": [1, 3, 5] },
  { "elemento": "Lv", "nombre": "Livermorio", "numero_atomico": 116, "masa": 293, "tipo": "No metal", "denominacion": "N/A", "grupo": "16", "periodo": "7", "valencias": [2, 4, 6] },
  { "elemento": "Ts", "nombre": "Teneso", "numero_atomico": 117, "masa": 294, "tipo": "No metal", "denominacion": "N/A", "grupo": "17", "periodo": "7", "valencias": [-1, 1, 3, 5, 7] },
  { "elemento": "Og", "nombre": "Oganesón", "numero_atomico": 118, "masa": 294, "tipo": "Gas noble", "denominacion": "N/A", "grupo": "18", "periodo": "7", "valencias": [0] }

    ];

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
            <p><strong>Valencias:</strong> ${elementoSeleccionado.valencias}</p>
            <button id="cambiarClaseBtn" style="
                background-color: #f78fb3;
                color: white;
                border: none;
                padding: 10px 16px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                margin-top: 10px;
            ">Cambiar lugar del panel</button>
        `;
        infoPanel.style.display = 'block';

        const boton = document.getElementById('cambiarClaseBtn');
        boton.addEventListener('click', () => {
            if (infoPanel.classList.contains('info-panel-medio')) {
                infoPanel.classList.remove('info-panel-medio');
                infoPanel.classList.add('info-panel');
            } else {
                infoPanel.classList.remove('info-panel');
                infoPanel.classList.add('info-panel-medio');
            }
        });

    } else {
        elementoInfo.innerHTML = ''; 
        infoPanel.style.display = 'none'; 
    }
}

    cerrarBtn.addEventListener('click', function() {
        infoPanel.style.display = 'none';
    });
document.addEventListener('click', function(event) {
    if (infoPanel.style.display === 'none') return;

    const hizoClickFuera = !infoPanel.contains(event.target) && event.target !== cerrarBtn;

    const hizoClickEnElemento = event.target.classList.contains('elemento');

    if (hizoClickFuera && !hizoClickEnElemento) {
        infoPanel.style.display = 'none';
    }
});

});
