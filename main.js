const products = [
    { nombre: "formal clothing", descripcion: "ideal clothing for special occasions" },
    { nombre: "casual clothing", description: "ideal for any day of the year" },
    { nombre: "sports clothing", descripcion: "your best option to do sports" },
    { nombre: " girls clothing", descripcion: "all kinds of styles for girls" },
    { nombre: " boys clothing", descripcion: "all kinds of styles for boys " },
    { nombre: "formal shoes", descripcion:" shoes for formal occasions" },
    { nombre: " casual shoes", descripcion: " shoes for casual occasions" },
    { nombre: " sports shoes", descripcion: " shoes for sportsmans " },
    { nombre: " girls shoes", descripcion: " all kinds of styles for girls" },
    { nombre: " boys shoes", descripcion: " all kinds of styles for boys" },
    { nombre: " jewelry", descripcion: "find the best quality and prices here" },
    { nombre: " cosmetics", descripcion: "you can find the best brands with just one click" },
    { nombre: " sking care products", descripcion: "the best prices and brands in one place" },  
];
// fin de buscador de productos//
const apiUrl = 'https://sheet.best/api/sheets/b49040e2-472d-4117-b33c-cb98fbb8d6cb';

// captura formulario 
const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');

// consumir API READ

const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data);
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

const renderTable = (data) => {
    console.log(data);
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = `
<tr class="border-b"></tr>
        <td class="py-2 px-4">${item.name}</td>
        <td class="py-2 px-4">${item.lastName}</td>
        <td class="py-2 px-4">${item.phone}</td>
        <td class="py-2 px-4">${email}</td>
        
            <button class="bg-yellow-500 text-withe px-2 py-1 rounded" onclick="">Editar</button>
            <button class="bg-red-500 text-withe px-2 py-1 rounded" onclick="">Eliminar</button>
        </td>
        </tr>`;
        dataTable.insertAdjacentHTML('beforeend', row);
    });
}

getData();