var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nusa Network Prakasa' });
});

router.get('/dataProjects', function(req, res, next) {
  res.json(
    [
      { 
        id: 1,
        judul: "Transforming Network in Peruri with FortiGate", 
        ringkasan: "Nusa offers a comprehensive solution with FortiGate, safeguarding their network infrastructure.",
        foto: "/img/project1.png",
        konten: "Anda kutahu semua akan sia-sia takan ku trima cinta sesaat mu.... Bagaimana dengan aku terlanjur mencintaimu yang datang beri harapan lalu pergi dan menghilang tak terfikirkan olehmu hatiku hancur karnmu tanpa sedikit alasan pergi tanpa berpamitan takan ku trima cinta sesaatmu.",
        industri: "Pemerintahan",
        timeline: "2019",
        solutions: "ERP",
      },
      {
        id: 2,
        judul: "Building Stronger Networks Access Point Installations at JNT", 
        ringkasan: "Experience enhanced connectivity, improved network performance, and fortified security.",
        foto: "/img/project2.png",
        konten: "Anda kutahu semua akan sia-sia takan ku trima cinta sesaat mu.... Bagaimana dengan aku terlanjur mencintaimu yang datang beri harapan lalu pergi dan menghilang tak terfikirkan olehmu hatiku hancur karnmu tanpa sedikit alasan pergi tanpa berpamitan takan ku trima cinta sesaatmu.",
        industri: "Pemerintahan",
        timeline: "2019",
        solutions: "ERP",
      },
      {
        id: 3,
        judul: "Elevate Diskominfo infrastructure with Nutanix ", 
        ringkasan: "Experience enhanced performance, scalability, and data protection, all while optimizing efficiency.",
        foto: "/img/project1.png",
        konten: "Anda kutahu semua akan sia-sia takan ku trima cinta sesaat mu.... Bagaimana dengan aku terlanjur mencintaimu yang datang beri harapan lalu pergi dan menghilang tak terfikirkan olehmu hatiku hancur karnmu tanpa sedikit alasan pergi tanpa berpamitan takan ku trima cinta sesaatmu.",
        industri: "Pemerintahan",
        timeline: "2019",
        solutions: "ERP",
      },
      {
        id: 4,
        judul: "Enhancing Mining Security Using FortiGate", 
        ringkasan: "We understand the critical nature of mining operations and the value of sensitive data.",
        foto: "/img/project2.png",
        konten: "Anda kutahu semua akan sia-sia takan ku trima cinta sesaat mu.... Bagaimana dengan aku terlanjur mencintaimu yang datang beri harapan lalu pergi dan menghilang tak terfikirkan olehmu hatiku hancur karnmu tanpa sedikit alasan pergi tanpa berpamitan takan ku trima cinta sesaatmu.",
        industri: "Pemerintahan",
        timeline: "2019",
        solutions: "ERP",
      },
    ]
  );
});

router.get('/dataCompanyLogo', function(req, res, next) {
  res.json(
    [
      { 
        id: 1,
        path: '/img/Carousell_Logo/allianz.png',
      },
      { 
        id: 2,
        path: '/img/Carousell_Logo/angakasa_pura.png',
      },
      { 
        id: 3,
        path: '/img/Carousell_Logo/bhimasena.png',
      },
      { 
        id: 4,
        path: '/img/Carousell_Logo/briagro.png',
      },
      { 
        id: 5,
        path: '/img/Carousell_Logo/british_council.png',
      },
      { 
        id: 6,
        path: '/img/Carousell_Logo/Gojek.png',
      },
      { 
        id: 7,
        path: '/img/Carousell_Logo/icon.png',
      },
      { 
        id: 8,
        path: '/img/Carousell_Logo/ihg.png',
      },
      { 
        id: 9,
        path: '/img/Carousell_Logo/indika.png',
      },
      { 
        id: 10,
        path: '/img/Carousell_Logo/ingenico.png',
      },
      { 
        id: 11,
        path: '/img/Carousell_Logo/itm.png',
      },
      { 
        id: 12,
        path: '/img/Carousell_Logo/j&t.png',
      },
      { 
        id: 13,
        path: '/img/Carousell_Logo/kalbe.png',
      },
      { 
        id: 14,
        path: '/img/Carousell_Logo/kao.png',
      },
      { 
        id: 15,
        path: '/img/Carousell_Logo/lemeridien.png',
      },
      { 
        id: 16,
        path: '/img/Carousell_Logo/lemeridien.png',
      },
      { 
        id: 17,
        path: '/img/Carousell_Logo/peruru.png',
      },
      { 
        id: 18,
        path: '/img/Carousell_Logo/pii.png',
      },
      { 
        id: 19,
        path: '/img/Carousell_Logo/Sinarmas.png',
      },
      { 
        id: 20,
        path: '/img/Carousell_Logo/taman_safari.png',
      },
      { 
        id: 21,
        path: '/img/Carousell_Logo/telkom.png',
      },

    ]
  )
});

router.get('/dataBrandNusa', function(req, res, next) {
  res.json(
    [
      { 
        id: 1,
        path: '/img/brands/Barracuda.png',
      },
      { 
        id: 2,
        path: '/img/brands/Cambium.png',
      },
      { 
        id: 3,
        path: '/img/brands/Cato Networks.png',
      },
      { 
        id: 4,
        path: '/img/brands/Cisco_Logo.svg',
      },
      { 
        id: 5,
        path: '/img/brands/Crowdstrike.png',
      },
      { 
        id: 6,
        path: '/img/brands/D-Link.png',
      },
      { 
        id: 7,
        path: '/img/brands/Dell.png',
      },
      { 
        id: 8,
        path: '/img/brands/EnGenius.png',
      },
      { 
        id: 9,
        path: '/img/brands/Fortinet.png',
      },
      { 
        id: 10,
        path: '/img/brands/HP.png',
      },
      { 
        id: 11,
        path: '/img/brands/HPE.png',
      },
      { 
        id: 12,
        path: '/img/brands/Huawei.png',
      },
      { 
        id: 13,
        path: '/img/brands/Infotrend.png',
      },
      { 
        id: 14,
        path: '/img/brands/Juniper.png',
      },
      { 
        id: 15,
        path: '/img/brands/Lenovo.png',
      },
      { 
        id: 16,
        path: '/img/brands/logoFinalCompleteColored.png',
      },
      { 
        id: 17,
        path: '/img/brands/Nutanix.png',
      },
      { 
        id: 18,
        path: '/img/brands/Paloalto.png',
      },
      { 
        id: 19,
        path: '/img/brands/Peplink.png',
      },
      { 
        id: 20,
        path: '/img/brands/Rubrik.png',
      },
      { 
        id: 21,
        path: '/img/brands/Ruckus.png',
      },
      { 
        id: 22,
        path: '/img/brands/Secureenvoy.png',
      },
      { 
        id: 23,
        path: '/img/brands/SintinelsOne.png',
      },
      { 
        id: 24,
        path: '/img/brands/Sophos.png',
      },
      { 
        id: 25,
        path: '/img/brands/Veeam.png',
      },
    ]
  )
});

router.get('/dataTestimonial', function(req, res, next) {
  res.json(
    [
      { 
        id: 1,
        comment: "Overall, everything has been good from the salesperson and other teams, including other services such as SOC, Managed Services, and Application Platform.",
        writer: "Widiya Kumoro",
        job: "Head of ICT & Digitalization",
        company: "Mining Industry Indonesia",
        logo: "/img/testimoni-icon/bhimasena.png",
      },
      { 
        id: 2,
        comment: "Nusa a company that offers professional IT consultancy services and has a good innovation",
        writer: "Mahesta Anandito",
        job: "IT Staff",
        company: "PT. Indo Tembangraya Megah, Tbk",
        logo: "/img/testimoni-icon/itm.png",
      },
      { 
        id: 3,
        comment: "No more glitches or hiccups. Nusa as IT vendor is working seamlessly.",
        writer: "Teuku Nazwar R",
        job: "IT Manager",
        company: "PT. Darma Henwa, Tbk",
        logo: "/img/testimoni-icon/darmahenwa.png",
      },
      { 
        id: 4,
        comment: "Thank you, Nusa team, for providing good services.",
        writer: "Atim",
        job: "IT Staff",
        company: "PT. Kereta Api Indonesia (Persero)",
        logo: "/img/testimoni-icon/kai.png",
      },
      { 
        id: 5,
        comment: "Thank you, Nusa team, for always providing the best services and working together solidly between teams. Kudos to you all!",
        writer: "Muhammad Alaydrus",
        job: "IT Head Operations",
        company: "PT. Tunas Ridean, Tbk",
        logo: "/img/testimoni-icon/tunas.png",
      },
      { 
        id: 6,
        comment: "Thank you, Nusa, for your dedication in helping to handle network projects at our company and getting good project results.",
        writer: "Maihandra",
        job: "Head of ICT & Digitalization",
        company: "Bhimasena Power Indonesia",
        logo: "/img/testimoni-icon/bhimasena.png",
      },
    ]
  )
});

router.get('/chainsaw', function(req, res, next) {
  res.json(
    [
      { 
        id: 1,
        title: "C66 UHF RFID Reader (Android 11)",
        description: "Chainway handheld devices based on Android system make your data collection as easy as possible",
        foto: "/img/assetchainsaw/image1.png"
      },
      { 
        id: 2,
        title: "MR20 Wearable RFID Reader",
        description: "Available in various form factors, data capture capabilities and price points, they can be deployed quickly and easily.",
        foto: "/img/assetchainsaw/image2.png"
      },
      { 
        id: 3,
        title: "R6 UHF RFID Sled Reader",
        description: "Deliver flexible UHF data collection function, enhance efficiency, and streamline management.",
        foto: "/img/assetchainsaw/image3.png"
      },
      { 
        id: 4,
        title: "P80 Industrial Tablet (Android 9)",
        description: "Chainway industrial tablets with multiple functions cater to multiple industries",
        foto: "/img/assetchainsaw/image4.png"
      },
      { 
        id: 5,
        title: "V600S Vehicle Computer",
        description: "Chainway vehicle computers bring you security, reliability and flexibility in a safe road traffic",
        foto: "/img/assetchainsaw/image5.png"
      },
      { 
        id: 6,
        title: "R3 Desktop RFID Reader",
        description: "Chainway Fixed UHF RFID Readers feature high stability and powerful RFID performance to maximize efficiency.",
        foto: "/img/assetchainsaw/image6.png"
      },
      { 
        id: 7,
        title: "CP30 RFID Printer",
        description: "Chainway printers are compact, user-friendly, reliable and durable. The printers efficiently print barcodes, RFID tags, bills, wristbands.",
        foto: "/img/assetchainsaw/image7.png"
      },
    ]
  ) 
});

router.get('/chainsawdetail', function(req, res, next) {
  res.json(
    [
      {
        name_spec: "Operating System",
        explain_spec: "Android 11; GMS, 90-day security updates, Android Enterprise Recommended, Zero-Touch, FOTA, Soti MobiControl, SafeUEM supported. Committed support for a future upgrade to Android 12, 13, and Android 14 pending feasibility",
      },
      {
        name_spec: "CPU",
        explain_spec: "Qualcomm Snapdragon™ 662 Octa-core, 2.0 GHz",
      },
      {
        name_spec: "RAM+ROM",
        explain_spec: "3GB + 32GB / 4GB + 64GB",
      },
      {
        name_spec: "Dimension",
        explain_spec: "160.0 x 76.0 x 15.5 / 17.0mm",
      },
      {
        name_spec: "Battery",
        explain_spec: "4200mAh / 5200mAh Removable Main Battery; Support QC3.0 and RTC, Charging time: Only 2.5 Hours; 5200mAh Optional Pistol Battery",
      },
      {
        name_spec: "Functions",
        explain_spec: "Barcode Scanning / UHF RFID / Fingerprint Recognition/ Volume Measurement / NFC / Camera (some are optional)",
      },
      {
        name_spec: "Optional Accessories",
        explain_spec: "Screen Protector / Main Battery / Pistol Battery / Charging Cradle / Type C & Pogo Pin I / O Connector / 4-slots Charging Cradle Set / Rugged Rubber Boot with Hand Strap / Belt Clip",
      },
      {
        name_spec: "Fingerprint",
        explain_spec: "Accurate Fingerprint Reading, enables secure data encryption and fake finger detection 5200mAh Removable Main Battery Support Barcode Scanning and NFC",
      },
      {
        name_spec: "Volume Measurement",
        explain_spec: "Measurement Speed: up to 2s / piece, Measurement Error<5% Measured Distance: 40cm-4m 5200mAh Removable Main Battery Support Barcode Scanning and NFC",
      },
    ]
  )
});


module.exports = router;