import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa itu Website?",
    answer: "Website adalah halaman digital yang bisa diakses lewat internet. Bisa digunakan untuk promosi usaha, profil bisnis, blog pribadi, toko online, dan lainnya.",
  },
  {
    question: "Kenapa saya perlu punya website untuk bisnis saya?",
    answer: "Karena banyak pelanggan mencari informasi lewat Google. Dengan website, bisnis kamu terlihat profesional dan mudah ditemukan, bahkan oleh wisatawan/konsumen dari luar daerah.",
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Untuk landing page sederhana rata-rata selesai dalam 10-15 hari kerja. Website yang lebih kompleks mungkin membutuhkan waktu lebih lama.",
  },
  {
    question: "Apakah saya bisa mengelola website sendiri?",
    answer:
      "Ya! Kami menggunakan CMS yang mudah digunakan. Anda bisa memperbarui konten sendiri, dan kami siap pandu di awal. kami bisa sediakan tutorial atau panduan singkat, dan jika ingin, juga tersedia layanan maintenance bulanan agar website tetap aman & optimal.",
  },
  {
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer: "Untuk paket tertentu, sudah termasuk domain (.com/.id) dan hosting gratis selama 1 tahun.",
  },
  {
    question: "Apakah bisa bayar bertahap?",
    answer: "Bisa. Kami menerima sistem pembayaran 2 tahap: DP di awal dan pelunasan setelah selesai.",
  },
  {
    question: "Apakah bisa custom sesuai kebutuhan?",
    answer: "Tentu! Kami menyesuaikan fitur dan tampilan website berdasarkan kebutuhan dan permintaan Anda.",
  },
  {
    question: "Bagaimana jika saya belum tahu harus mulai dari mana?",
    answer: "Tenang, kami siap bantu dari awal. Mulai dari brainstorming ide, struktur halaman, hingga upload konten — NetBel.id siap mendampingi.",
  },
  {
    question: "Saya tidak punya domain dan hosting, apakah bisa dibantu?",
    answer: "Bisa banget! Kami menyediakan paket lengkap dengan domain, hosting, dan pembuatan website — tinggal terima jadi.",
  },
  {
    question: "Apakah saya bisa request desain sesuai keinginan?",
    answer: "Tentu! Anda bisa memberi referensi desain, dan kami akan bantu membuat tampilan yang profesional dan sesuai identitas brand Anda.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">Pertanyaan Umum</h2>
        <p className="text-center text-muted-foreground text-lg mb-8">Jawaban cepat untuk pertanyaan yang sering diajukan pada kami.</p>

        {/* Kotak Pembungkus */}
        <div className="rounded-2xl border border-border bg-background shadow-sm p-6 sm:p-8 space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="flex items-start gap-2 text-left">
                  <span className="text-lg text-start">{question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className=" text-muted-foreground">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
