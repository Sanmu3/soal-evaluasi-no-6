function mentorProgrammer(nama,status,asal) {
    console.log('Nama Mentor ' + nama);
    status()
    asal()
}

function status() {
    console.log('Status nya Santri');
}

function asal() {
    console.log('Berasal dari kota Prabumulilh');
}

mentorProgrammer('Wandi Pratama' , status, asal)