const list = document.getElementById('list');
const getir = document.getElementById('getir');
const dersSayisi = document.getElementById('dersSayisi');
const div2 = document.getElementById('div2');
var kredi;
var toplam = 0;
var harfNotu;
var harfDeger;

const button = document.createElement('button');
button.classList = 'btn btn-success';
button.setAttribute('style', 'width: 10rem');
button.appendChild(document.createTextNode('AGNO HESAPLA'));

function createItem(val) {
    const li = document.createElement('li');
    li.classList = 'list-group-item list-group-item-default';
    li.appendChild(document.createTextNode('Ders ' + val));

    const dersAd = document.createElement('input');
    dersAd.setAttribute('type', 'text');
    dersAd.setAttribute('placeholder', 'Ders Adı ');
    dersAd.className = 'form-control';
    li.appendChild(dersAd);

    kredi = document.createElement('input');
    kredi.setAttribute('type', 'number');
    kredi.setAttribute('placeholder', 'Kredi ');
    kredi.setAttribute('id', 'kredi' + val);
    kredi.className = 'form-control';
    li.appendChild(kredi);

    harfNotu = document.createElement('select');
    harfNotu.setAttribute('id', 'harfSelect' + val);
    harfNotu.className = 'form-control';

    createOption('AA');
    createOption('BA');
    createOption('BB');
    createOption('BC');
    createOption('CC');
    createOption('DC');
    createOption('DD');
    createOption('FF');

    li.appendChild(harfNotu);
    list.appendChild(li);
}

function createOption(harf) {
    const option = document.createElement('option');
    option.appendChild(document.createTextNode(harf));
    harfNotu.appendChild(option);
}

function harfKontrol(harfInput) {
    if (harfInput === 'AA') {
        return parseFloat(4);
    }
    if (harfInput === 'BA') {
        return parseFloat(3.5);
    }
    if (harfInput === 'BB') {
        return parseFloat(3);
    }
    if (harfInput === 'BC') {
        return parseFloat(2.5);
    }
    if (harfInput === 'CC') {
        return parseFloat(2);
    }
    if (harfInput === 'DC') {
        return parseFloat(1.5);
    }
    if (harfInput === 'DD') {
        return parseFloat(1);
    }
    if (harfInput === 'FF') {
        return parseFloat(0);
    }
    return 'Error!';
}

div2.addEventListener('click', function (e) {
    if (e.target.className == 'btn btn-danger') {
        location.reload();
    }
    e.preventDefault();
});

getir.addEventListener('click', function (e) {
    div2.innerHTML = `<button id="tekrar" class="btn btn-danger">
                        TEKRAR DENE</button>`;
    for (let i = 1; i <= dersSayisi.value; i++) {
        createItem(i);
    }
    list.appendChild(button);
    e.preventDefault();
});

list.addEventListener('click', function (e) {
    var agno;
    var krediToplam = 0;
    if (e.target.className == 'btn btn-success') {

        for (var j = 1; j <= dersSayisi.value; j++) {
            kredi = document.getElementById('kredi' + j);
            //toplam += parseFloat(kredi.value);
            harfDeger = harfKontrol(document.getElementById('harfSelect' + j).value);
            console.log(harfDeger);
            toplam += kredi.value * harfDeger;
            krediToplam += parseFloat(kredi.value);
        }
        console.log('kredi: ' + kredi.value);
        console.log('harfDeger: ' + harfDeger);
        agno = parseFloat(toplam) / parseFloat(krediToplam);
        console.log('TOPLAM = ' + toplam);
        console.log(dersSayisi.value);
        console.log('AGNO = ' + agno);

        list.innerHTML = `<h3> AGNO = ${parseFloat(agno, '100')} </h3>`;
    }
    

});
