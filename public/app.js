// ambil element dengan id root yang akan digunakan sebagai parent
const root = document.querySelector('#root');
const second = document.querySelector('#second'); // ========== MEMBUAT ELEMENT TEXT BESERTA ARIBUT CLASS dan ID VERSI JS===========
// membuat element untuk isi root (child untuk parent)

const text = document.createElement('h1');
text.textContent = 'Hallo saya dipanggil dari JavaScript'; // menambah atribut class kepada element

text.className = 'heading'; // menambah atribut id kepada element

text.id = 'heading'; // masukan element text (child) ke dalam element root (parent)

root.appendChild(text); // ========== MEMBUAT ELEMENT TEXT BESERTA ARIBUT CLASS dan ID VERSI REACT JS===========
// bikin element terlebih dahulu

const textKedua = React.createElement('h3', {
  // childern digunakan untuk mengisi dari element h3
  children: 'Hallo saya dipanggil dari React JS',
  // classname digunakan untuk menambah atribut class
  className: 'text2',
  // id digunakan untuk menambah atribut id
  id: 'text2'
}); // lalu bagaimana jika ingin menambah 2 node atau 2 element p, bagaimana react merender nya?
// yang  kita butuhkan ada 3 
// pertama kita butuh pembungkus (div, span atau yang lainnya)
// lalu element p yang kita mau render
// jadi visualisasi nya seperti ini
// <div> 
//      <p> Paragraf pertama</p> 
//      <p> Paragraf kedua</p>
// </div >
// kita ekseskusi codenya
// kita bikin element p

const judul = React.createElement('h1', {
  children: 'React JS'
});
const desc = React.createElement('h5', {
  children: 'React JS adalah framework frontend berbasis JavaScript'
}); // lalu bikin div sebagai pembungkus const judul dan desc

const div = React.createElement('div', {
  // children disini type nya array
  children: [judul, desc]
}); // misal ada kasus dimana judul dan deskipsi tidak boleh dibungkus oleh element apapun. Itu kita bisa memakai pragemnt 

const pragment = React.createElement(React.Fragment, {
  // children disini type nya array
  children: [judul, desc]
}); // modifikasi create element

const li = React.createElement('li', {
  children: 'angka pertama'
});
const li2 = React.createElement('li', {
  children: 'angka kedua'
});
const li3 = React.createElement('li', {
  children: 'angka ketiga'
}); // modif dimulai

const ul = React.createElement('ul', {
  className: 'angka',
  id: 'list-angka'
}, li, li2, li3); // ========== MEMBUAT ELEMENT DENGAN JSX agar lebih mudah ===========

const listAngka = /*#__PURE__*/React.createElement("ul", {
  className: "list Angka"
}, /*#__PURE__*/React.createElement("li", {
  id: "uwwu"
}, "Saya Angka Pertama"), /*#__PURE__*/React.createElement("li", null, "Saya Angka Kedua"), /*#__PURE__*/React.createElement("li", null, "Saya Angka Ketiga")); // embed javascript expression kedalam JSX
// embed varibel

const reza = 'Reza';
const nama = /*#__PURE__*/React.createElement("h2", null, "Hallo Saya ", reza); // embed function

function persegi(p, l) {
  let luas = p * l;
  return luas;
}

const luasPersegi = /*#__PURE__*/React.createElement("h3", null, "Luas Persegi adalah ", persegi(4, 5)); // embed classname (props) kedalama JSX

const heading = 'heading-1';
const className = /*#__PURE__*/React.createElement("h5", {
  className: heading
}, "Ini adalah text h5"); // embed gambar ke dalam JSX, diujung tag harus di tutup. Bukan > tapi />

const link = 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const alt = 'gambar';
const gambar = /*#__PURE__*/React.createElement("img", {
  src: link,
  alt: alt
}); // ========== REACT COMPONENT ===========
// react component adalah funtion dengan parameter props (dalam html sering dikenal atribut)  yang memiliki return JSX. Nama function ini harus berawalan huruf besar

function Hallo(props) {
  return /*#__PURE__*/React.createElement("h4", null, "Hallo ", props.nama);
} // jsx
// dan pada jsx function Hallo diatas ditulis sebagai tag html


const hallo = /*#__PURE__*/React.createElement(Hallo, {
  nama: "Reza"
}); // membuat jam menggunakan react component
// agar jam bisa realtime kita butuh interval
// function waktu() {
//     const jam = (
//         <div>
//             <h4>Jam sekarang</h4>
//             {new Date().toLocaleTimeString()}
//         </div>
//     )
//     ReactDOM.render(jam, root)
//     if (jam > new Date().toLocaleTimeString() + 6000) {
//         let a = Math.random()
//         const random = (
//             <h4>{a}</h4>
//         )
//         ReactDOM.render(random, second)
//     }
// }
// setInterval(function () {
//     waktu()
// })
// membuat kotak
// const kotak  = (
//     <h2 style= {{ 
//         color : "#444",
//         padding : "45px",
//         backgroundColor : "#fff",
//      }}>Hallo Mari Belajar Reacjs</h2>
// )
// even handler
// function biasa tanpa argument

function klik() {
  alert("hallo");
}

const tombol = /*#__PURE__*/React.createElement("button", {
  onClick: klik
}, "Click Saya"); // function dengan argument

function arg(params) {
  alert(params);
}

const argTombol = /*#__PURE__*/React.createElement("button", {
  onClick: arg.bind(this, 'hallo saya function dengan argument')
}, "CLick Me"); // React component -> function di js yg diawali dengan huruf besar dan memilki nilai return berupa jsx

function Conunter() {
  // tetapkan nilai awal
  // const state = React.useState(0)
  // console.log(state)
  // tetapkan varible untuk menampung nilai 
  // const hasil = state[0]
  // varible untuk menerima value dari button dan melakukan update ke variable state
  // const updateHasil = state[1]
  // penulisan diatas bisa disingkat seperti ini 
  const [state, setState] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(state - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", {
    style: {
      "margin": 10
    }
  }, state), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(state + 1);
    }
  }, "+"));
} // lalu lakukan rendring ke const root diatas (parent)
// ReactDOM.render(textKedua, root)
// ReactDOM.render(div, root)
// ReactDOM.render(pragment, root)
// ReactDOM.render(ul, root)
// ReactDOM.render(listAngka, root)
// ReactDOM.render(nama, root)
// ReactDOM.render(luasPersegi, root)
// ReactDOM.render(className, root)
// ReactDOM.render(gambar, root)
// ReactDOM.render(hallo, root)
// waktu()
// ReactDOM.render(kotak, root)
// ReactDOM.render(tombol,root)


ReactDOM.render(argTombol, root); // render react component

ReactDOM.render( /*#__PURE__*/React.createElement(Conunter, null), root);