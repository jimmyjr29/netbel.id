import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Marquee from "@/components/ui/marquee";

const testimonials = [
  {
    id: 1,
    name: "Mulyono",
    designation: "Kontraktor Interior",
    company: "Kadung Interior",
    testimonial: "Alhamdulillah, sejak pakai website dari NetBel, klien dari luar Jogja jadi lebih gampang akses portofolio kami. Desainnya keren dan sesuai branding usaha kami.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 2,
    name: "Wahyuni",
    designation: "Pemilik Kos-Kosan",
    company: "Salsabillah Kost",
    testimonial: "Sekarang calon penyewa bisa lihat langsung info dan foto kos kami lewat web. Terima kasih tim NetBel, respon cepat dan sabar bantu saya yang awam teknologi.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 3,
    name: "Aditama Yoga",
    designation: "Freelancer",
    company: "Jasa Fotografer Wisuda",
    testimonial: "Website portofolio yang dibuat NetBel bikin klien lebih percaya. Saya bisa tampilkan hasil jepretan dengan rapi dan profesional. Mantap pokoknya!",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    id: 4,
    name: "Adji",
    designation: "Pemilik Usaha",
    company: "CV Adjineon",
    testimonial: "NetBel bantu kami punya tampilan profesional untuk usaha jasa instalasi listrik. Webnya ringan, rapi, dan langsung terhubung ke WhatsApp kami.",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 5,
    name: "Fitri Amalia",
    designation: "Owner",
    company: "Dapur Fitri Jogja",
    testimonial: "Semenjak ada website, pesanan katering kami meningkat. Banyak pelanggan dari luar kota yang kontak langsung lewat form dan WA dari web.",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 6,
    name: "Reza Putra",
    designation: "Digital Printing",
    company: "RZ Print Sleman",
    testimonial: "NetBel sangat membantu dari desain sampai web launching. Sekarang pelanggan tinggal upload file lewat web kami. Praktis banget.",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 7,
    name: "Nur Laila",
    designation: "Guru TK",
    company: "TK Aisyiyah Bustanul Athfal",
    testimonial: "Kami butuh website untuk info PPDB. NetBel buatkan dengan tampilan yang ramah dan mudah diakses wali murid. Terima kasih!",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: 8,
    name: "Bayu Mahendra",
    designation: "Owner",
    company: "Jogja Adventure Trip",
    testimonial: "Tim NetBel bantu kami rebranding total! Web tour jadi lebih modern, dan pemesanan paket bisa langsung dari website. Sangat terbantu.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 9,
    name: "Siti Komariah",
    designation: "Pemilik Butik",
    company: "Kamarjah Butik Muslim",
    testimonial: "Web yang dibuat sangat cantik dan sesuai dengan warna brand kami. Sekarang customer bisa lihat koleksi dan langsung order online.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 10,
    name: "Agus Satria",
    designation: "Developer Properti",
    company: "Graha Nusantara",
    testimonial: "NetBel bantu kami tampilkan listing rumah dan kavling. Sekarang lebih mudah mengarahkan calon pembeli untuk lihat detailnya.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    id: 11,
    name: "Tari Wijayanti",
    designation: "Pengajar Les Privat",
    company: "SmartEdu Jogja",
    testimonial: "Web dari NetBel sangat membantu untuk info kelas dan testimoni siswa. Banyak orang tua jadi lebih yakin mendaftarkan anaknya.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 13,
    name: "Rina Lestari",
    designation: "Owner",
    company: "Toko Herbal Sehat Alami",
    testimonial: "Web dari NetBel memudahkan pelanggan kami belanja produk herbal. Layoutnya clean, dan admin panelnya gampang dipakai.",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    id: 14,
    name: "Yusuf Ramadhan",
    designation: "Pemilik Rental Mobil",
    company: "Jogja Drive",
    testimonial: "Sekarang semua info rental bisa dilihat di web. Booking juga bisa langsung lewat form. Terima kasih NetBel, hasilnya sangat memuaskan!",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
  },

  {
    id: 16,
    name: "Andika Nur",
    designation: "Pelatih Olahraga",
    company: "JOS Futsal Academy",
    testimonial: "Anak-anak bisa daftar akademi lewat web, bahkan ada jadwal latihan dan info event. Website bikin semua jadi lebih profesional.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">Testimonials</h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:40s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:40s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div key={testimonial.id} className="min-w-96 max-w-sm bg-accent rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

export default Testimonials;
