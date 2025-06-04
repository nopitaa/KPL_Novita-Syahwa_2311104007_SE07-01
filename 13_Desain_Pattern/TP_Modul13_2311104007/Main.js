// Baris ini mengimpor dua class, yaitu Subject (pengirim notifikasi) dan ConcreteObserver (penerima notifikasi), 
// agar bisa digunakan di file utama.
import { Subject } from './Subject.js';
import { ConcreteObserver } from './Observer.js';
//Membuat instance subject yang akan menjadi pusat notifikasi untuk para observer.
const subject = new Subject();
//Membuat dua observer (pengamat) bernama “Observer A” dan “Observer B”. 
// Nama ini akan digunakan saat mencetak update.
const observer1 = new ConcreteObserver("Observer A");
const observer2 = new ConcreteObserver("Observer B");
//Mendaftarkan kedua observer ke dalam subject agar mereka menerima notifikasi saat ada perubahan.
subject.subscribe(observer1);
subject.subscribe(observer2);
//Menampilkan pesan bahwa subject akan mengirim update, kemudian notify() akan memanggil method update() pada semua observer
//  yang terdaftar, dengan data "Perubahan #1".
console.log("Subject mengirim data: Perubahan #1");
subject.notify("Perubahan #1");
//Menghapus Observer B dari daftar observer, jadi setelah ini dia tidak akan menerima notifikasi lagi.
subject.unsubscribe(observer2);
//Sekali lagi subject mengirim update, tapi kali ini hanya Observer A yang menerima karena Observer B sudah dihapus sebelumnya.
console.log("Subject mengirim data: Perubahan #2");
subject.notify("Perubahan #2"); 