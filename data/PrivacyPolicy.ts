type PrivacyPolicy = {
    id: number;
    title: string;
    description: string;
};

export const PrivacyPolicyData: PrivacyPolicy[] = [
  {
    id: 1,
    title: "Genel Bilgiler",
    description: "Bu Gizlilik Politikası, emlak platformumuzu kullandığınızda paylaştığınız kişisel verilerin hangi amaçlarla işlendiğini ve nasıl korunduğunu açıklamaktadır.",
  },
  {
    id: 2,
    title: "Toplanan Veriler",
    description: "Platformu kullanırken ad, soyad, e‑posta adresi, telefon numarası, IP adresi ve ilan bilgileri gibi veriler toplanabilir.",
  },
  {
    id: 3,
    title: "Verilerin Kullanımı",
    description: "Toplanan veriler; hizmetlerin sunulması, ilanların yayınlanması, kullanıcı deneyiminin iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.",
  },
  {
    id: 4,
    title: "Çerezler (Cookies)",
    description: "Web sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.",
  },
  {
    id: 5,
    title: "Verilerin Paylaşımı",
    description: "Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz.",
  },
  {
    id: 6,
    title: "Veri Güvenliği",
    description: "Verilerinizin güvenliği için teknik ve idari önlemler alınmaktadır. Yetkisiz erişime karşı korunur.",
  },
  {
    id: 7,
    title: "Haklarınız",
    description: "Kullanıcılar, kişisel verilerine erişme, düzeltme veya silinmesini talep etme hakkına sahiptir.",
  },
  {
    id: 8,
    title: "İletişim",
    description: "Gizlilik politikası ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.",
  },
];