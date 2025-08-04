// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { TypographyH1 } from "@/components/ui/typography";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

// Data blog (sekarang tambahkan juga properti `image`)
const blogs = [
  {
    slug: "kenapa-website-bisnis",
    title: "Kenapa Bisnis Lokal Butuh Website Profesional?",
    date: "19 Juli 2025",
    image: "/image/blog/blog1.png",
    content: `
      <p>Di era digital, website bukan hanya etalase online.</p>
      <p>Ia adalah fondasi kepercayaan pelanggan dan kekuatan pemasaran. Bisnis lokal yang tidak memiliki website profesional akan tertinggal dari kompetitor yang lebih siap menghadapi era digital.</p>

      <p><strong>1. Website = Toko yang Buka 24 Jam</strong></p>
      <p>Website Anda bisa diakses kapan saja dan dari mana saja. Pelanggan dapat melihat produk, membaca deskripsi layanan, hingga menghubungi Anda meski di luar jam kerja.</p>

      <p><strong>2. Meningkatkan Kepercayaan Konsumen</strong></p>
      <p>Website yang rapi dan profesional menciptakan kesan serius dan membuat pelanggan lebih yakin terhadap bisnis Anda.</p>
      <blockquote>“Kalau websitenya aja niat dan rapi, pasti produknya juga serius dikerjakan.”</blockquote>

      <p><strong>3. Memperluas Jangkauan Pasar</strong></p>
      <p>Dengan website, bisnis Anda bisa ditemukan melalui mesin pencari seperti Google. Ini memungkinkan pelanggan dari luar kota bahkan luar negeri mengenal produk Anda.</p>

      <p><strong>4. Lebih Mudah Dipromosikan</strong></p>
      <p>Website memudahkan promosi melalui Google Ads, media sosial, atau SEO. Anda juga bisa memantau performa promosi dengan tools seperti Google Analytics.</p>

      <p><strong>5. Investasi Jangka Panjang</strong></p>
      <p>Website bukan sekadar alat promosi sementara, melainkan aset digital jangka panjang yang bisa berkembang seiring pertumbuhan bisnis Anda.</p>

      <p><strong>Kesimpulan:</strong></p>
      <p>Website profesional bukan hanya untuk perusahaan besar. Justru bagi bisnis lokal, website bisa menjadi pembeda utama. Di dunia digital, yang terlihat lebih siap adalah yang lebih dipercaya.</p>

       <p>Ingin punya website bisnis lokal yang profesional, cepat, dan terjangkau?</p>
      <p>👉 <a href="https://netbel.my.id" target="_blank" rel="noopener noreferrer">Konsultasikan kebutuhan websitemu di NetBel.id</a></p>
    `,
  },
  {
    slug: "ciri-website-bagus",
    title: "5 Ciri Website yang Membuat Pelanggan Betah",
    date: "10 Juli 2025",
    image: "/image/blog/blog2.png",
    content: `
      <p>Website adalah wajah digital dari sebuah bisnis. Tapi tidak semua website mampu membuat pengunjung betah berlama-lama. Jika Anda ingin pelanggan merasa nyaman, tertarik, bahkan kembali lagi, pastikan website Anda memiliki lima ciri penting ini:</p>

  <ol>
    <li><strong>Desain Responsif di Semua Perangkat</strong><br />
      Website harus terlihat rapi dan mudah digunakan baik di laptop, tablet, maupun smartphone. Pengalaman pengguna (UX) yang konsisten membuat pengunjung betah menjelajah.
    </li>

    <li><strong>Waktu Loading Cepat</strong><br />
      Pengunjung tidak suka menunggu. Website yang lambat membuat mereka pergi sebelum sempat melihat isi. Optimasi gambar dan minimalkan script berlebih agar halaman terbuka cepat.
    </li>

    <li><strong>Navigasi Mudah Dipahami</strong><br />
      Menu yang jelas, struktur halaman yang teratur, dan tombol CTA (call to action) yang mudah ditemukan akan membantu pengunjung menemukan apa yang mereka cari tanpa kebingungan.
    </li>

    <li><strong>Konten Relevan & Menarik</strong><br />
      Tampilkan informasi yang sesuai dengan kebutuhan target audiens. Teks, gambar, dan video harus saling mendukung untuk menjelaskan produk atau layanan dengan menarik.
    </li>

    <li><strong>Kontak Mudah Diakses</strong><br />
      Pastikan pengunjung tahu bagaimana cara menghubungi Anda. Letakkan informasi kontak di tempat strategis seperti header, footer, atau halaman khusus yang mudah ditemukan.
    </li>
  </ol>

  <p>Website bukan hanya tempat jualan, tapi juga ruang interaksi dengan pelanggan. Dengan memperhatikan lima ciri ini, Anda bisa menciptakan pengalaman pengguna yang menyenangkan dan mendorong loyalitas pelanggan.</p>

  <p>Ingin punya website bisnis yang bikin pelanggan betah? 👉 <a href="https://netbel.my.id" target="_blank" rel="noopener noreferrer">Bangun websitemu bersama NetBel.id</a></p>
    `,
  },
  {
    slug: "penjualan-dari-website",
    title: "Cara Meningkatkan Penjualan Lewat Website",
    date: "3 Juli 2025",
    image: "/image/blog/blog3.png",
    content: `
      <p>Website bukan hanya alat branding, tapi juga mesin penjualan yang sangat potensial. Jika digunakan dengan tepat, website bisa membantu Anda menarik lebih banyak pelanggan dan meningkatkan omzet bisnis. Berikut beberapa cara efektif untuk memaksimalkannya:</p>

      <p><strong>1. Optimalkan Call-to-Action (CTA)</strong></p>
      <p>CTA adalah tombol atau teks ajakan seperti “Beli Sekarang”, “Hubungi Kami”, atau “Coba Gratis”. Letakkan CTA di tempat strategis seperti di akhir deskripsi produk, banner utama, dan halaman checkout agar pengunjung tahu langkah apa yang harus dilakukan selanjutnya.</p>

      <p><strong>2. Gunakan Copywriting yang Meyakinkan</strong></p>
      <p>Kata-kata punya kekuatan besar untuk membujuk. Gunakan kalimat yang menjawab kebutuhan pengunjung, fokus pada manfaat produk, dan dorong tindakan tanpa terkesan memaksa.</p>

      <p><strong>3. Pastikan Halaman Produk Mudah Ditemukan</strong></p>
      <p>Jangan sembunyikan produk di balik navigasi yang rumit. Buat struktur kategori yang jelas, gunakan pencarian internal, dan tampilkan produk unggulan di homepage untuk memudahkan pengunjung menjelajah.</p>

      <p><strong>4. Optimasi SEO (Search Engine Optimization)</strong></p>
      <p>Pastikan website Anda mudah ditemukan di Google. Gunakan kata kunci yang relevan, meta title & description yang menarik, serta struktur heading (H1, H2, dst.) yang rapi agar mesin pencari memahami konten Anda dengan lebih baik.</p>

      <p><strong>5. Tampilkan Testimoni & Bukti Sosial</strong></p>
      <p>Calon pembeli lebih percaya pada pengalaman pelanggan lain. Tampilkan testimoni, ulasan, atau rating produk untuk meningkatkan kepercayaan dan konversi.</p>

      <p>Meningkatkan penjualan lewat website bukan soal tampilan saja, tapi juga tentang strategi yang terintegrasi antara desain, konten, dan pemasaran.</p>

      <p>Ingin website Anda jadi mesin penjualan otomatis? 👉 <a href="https://netbel.my,id" target="_blank" rel="noopener noreferrer">Bangun bersama tim NetBel.id</a></p>
    `,
  },
  {
    slug: "seo-untuk-umkm",
    title: "Panduan SEO untuk UMKM Pemula",
    date: "25 Juni 2025",
    image: "/image/blog/blog4.png",
    content: `
      <p>SEO (Search Engine Optimization) adalah cara agar website Anda lebih mudah ditemukan di Google. Untuk UMKM, SEO sangat penting karena bisa menarik pelanggan tanpa harus mengeluarkan biaya besar untuk iklan. Berikut panduan dasar yang bisa langsung Anda terapkan:</p>

      <p><strong>1. Gunakan Kata Kunci Lokal</strong></p>
      <p>Fokuslah pada kata kunci yang mengandung lokasi bisnis Anda, misalnya “catering murah di Jogja” atau “toko bunga Belitung”. Ini membantu bisnis Anda tampil saat orang mencari layanan di daerah tersebut.</p>

      <p><strong>2. Daftarkan Bisnis ke Google Bisnisku</strong></p>
      <p>Dengan mendaftarkan bisnis Anda di <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer">Google Bisnisku</a>, nama dan alamat bisnis akan muncul di Google Maps dan hasil pencarian lokal. Ini meningkatkan visibilitas dan kepercayaan.</p>

      <p><strong>3. Buat Konten Blog Secara Rutin</strong></p>
      <p>Tulis artikel yang relevan dengan bisnis Anda, seperti tips, panduan, atau info produk. Konten yang rutin dan bermanfaat akan membuat website Anda lebih disukai Google dan pengunjung.</p>

      <p><strong>4. Optimalkan Halaman Website</strong></p>
      <p>Gunakan <em>meta title</em>, <em>description</em>, dan struktur heading (H1, H2, dst.) yang jelas. Jangan lupa untuk memasukkan kata kunci secara alami, bukan dipaksakan.</p>

      <p><strong>5. Percepat Waktu Loading Website</strong></p>
      <p>Kecepatan situs juga memengaruhi SEO. Optimasi gambar, gunakan hosting yang andal, dan hindari plugin berlebih jika menggunakan CMS seperti WordPress.</p>

      <p>Dengan langkah-langkah ini, UMKM bisa mulai bersaing di dunia digital tanpa harus jadi ahli teknis.</p>

      <p>Butuh bantuan SEO sekaligus pembuatan websitenya? 👉 <a href="https://netbel.my.id" target="_blank" rel="noopener noreferrer">Konsultasikan sekarang di NetBel.id</a></p>
    `,
  },
  {
    slug: "perbedaan-website-dan-sosmed",
    title: "Website vs Sosial Media: Mana yang Lebih Penting?",
    date: "15 Juni 2025",
    image: "/image/blog/blog5.png",
    content: `
     <p>Di era digital, banyak pelaku usaha bertanya: apakah cukup dengan sosial media saja, atau perlu juga punya website? Jawabannya: keduanya penting—namun dengan fungsi yang berbeda.</p>

    <p><strong>Sosial Media: Untuk Interaksi & Awareness</strong></p>
    <p>Platform seperti Instagram, Facebook, dan TikTok sangat bagus untuk membangun engagement, menjangkau audiens baru, dan menciptakan interaksi dua arah secara cepat. Sosial media cocok untuk konten ringan, promosi harian, atau membangun kedekatan dengan audiens.</p>

    <p><strong>Website: Untuk Kredibilitas & Transaksi</strong></p>
    <p>Website adalah pusat kendali digital bisnis Anda. Di sinilah calon pelanggan mencari informasi lengkap, melihat produk/layanan secara profesional, dan melakukan transaksi. Anda juga punya kontrol penuh atas tampilan, data, dan strategi jangka panjang seperti SEO.</p>

    <p><strong>Kenapa Website Lebih Stabil?</strong></p>
    <p>Algoritma sosial media bisa berubah sewaktu-waktu, dan akun bisa dibatasi bahkan ditutup. Sementara website adalah milik Anda sepenuhnya. Ini adalah aset digital yang tidak tergantung pada pihak ketiga.</p>

    <p><strong>Gunakan Keduanya Secara Strategis</strong></p>
    <ul>
      <li>Gunakan sosial media untuk menjangkau dan membangun komunitas</li>
      <li>Arahkan traffic dari sosial media ke website untuk edukasi dan konversi</li>
      <li>Gunakan website untuk membangun kredibilitas dan pencarian organik (SEO)</li>
    </ul>

    <p>Jadi, bukan soal pilih salah satu, tapi bagaimana <em>menggabungkan kekuatan keduanya</em> untuk membangun bisnis yang kokoh secara online.</p>

    <p>Belum punya website yang profesional untuk mendukung bisnismu? 👉 <a href="https://netbel.my.id" target="_blank" rel="noopener noreferrer">Bangun sekarang bersama NetBel.id</a></p>

    `,
  },
  {
    slug: "manfaat-blog-di-website-bisnis",
    title: "Kenapa Website Bisnis Perlu Punya Blog?",
    date: "2 Agustus 2025",
    image: "/image/blog/blog6.png",
    content: `<p>Banyak pemilik bisnis menganggap blog hanya cocok untuk penulis atau influencer. Padahal, blog di website bisnis bisa menjadi alat pemasaran yang sangat efektif—bahkan gratis!</p>

    <p><strong>1. Meningkatkan SEO (Search Engine Optimization)</strong></p>
    <p>Blog memberi peluang untuk memasukkan kata kunci yang sering dicari calon pelanggan. Semakin banyak artikel relevan yang Anda tulis, semakin besar kemungkinan website Anda muncul di hasil pencarian Google.</p>

    <p><strong>2. Membangun Kepercayaan Pelanggan</strong></p>
    <p>Tulisan yang edukatif, seperti tips, panduan, atau studi kasus, menunjukkan bahwa bisnis Anda paham di bidangnya. Ini akan membangun kredibilitas di mata pembaca dan calon pelanggan.</p>

    <p><strong>3. Menjawab Pertanyaan Pelanggan</strong></p>
    <p>Alih-alih menjawab pertanyaan berulang lewat chat, Anda bisa mengarahkan pelanggan ke artikel blog yang sudah tersedia. Ini menghemat waktu dan membantu pelanggan lebih cepat mendapatkan informasi.</p>

    <p><strong>4. Meningkatkan Lama Kunjungan di Website</strong></p>
    <p>Semakin banyak konten bermanfaat yang bisa dibaca, semakin lama pengunjung berada di situs Anda. Ini bagus untuk performa SEO sekaligus memperbesar peluang konversi.</p>

    <p><strong>5. Menjadi Bahan Konten Sosial Media</strong></p>
    <p>Satu artikel blog bisa diubah menjadi beberapa konten pendek untuk Instagram, Facebook, atau TikTok. Jadi, blog juga bisa memperkaya strategi konten Anda di kanal lain.</p>

    <p>Blog bukan sekadar tulisan, tapi aset digital jangka panjang. Selama artikelnya relevan, ia bisa terus mendatangkan trafik dan pelanggan baru tanpa perlu biaya iklan rutin.</p>

    <p>Ingin punya website bisnis yang sudah siap dengan blog profesional? 👉 <a href="https://netbel.my.id" target="_blank" rel="noopener noreferrer">Konsultasikan sekarang di NetBel.id</a></p>`,
  },
];

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mt-8 mx-auto px-4 py-20">
        <div className="mb-6 text-center">
          <TypographyH1 className="mb-2">{blog.title}</TypographyH1>
          <p className="text-muted-foreground">{blog.date}</p>
        </div>

        <div className="mb-10">
          <Image src={blog.image} alt={blog.title} width={900} height={500} className="rounded-xl object-cover w-full h-auto shadow" unoptimized />
        </div>

        <div className="prose prose-neutral dark:prose-invert m-2 max-w-none space-y-4" dangerouslySetInnerHTML={{ __html: blog.content }} />

        <div className="mt-10">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            ← Kembali ke Blog
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
