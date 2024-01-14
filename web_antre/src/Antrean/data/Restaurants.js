const restaurants = [
    {
      id: 1,
      img: "https://imgsrv2.voi.id/p14rzr-vobXD8QkF9EbdNVf1xQhM_cLa2HYIEnmWqNM/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE3ODQvMjAyMjAzMzAyMzQ1LW1haW4uY3JvcHBlZF8xNjQ4NjU4NzU2LmpwZw.jpg",
      nama: "Cafe Caffein",
      esWaktu: 3,
      keramaian: "sepi",
      kategori:"terdekat",
      rating: 4,
      alamat: "Jalan Durian No.34",
      jarak: "350m",
      desc: "Cafe Caffeine adalah kafe trendi yang populer di Medan dengan suasana modern dan berkelas, menawarkan berbagai pilihan kopi terbaik dan sering mengadakan acara seni yang menarik.",
      jadwal: ["Hari Biasa: 08.00-22.00","Sabtu: 10.00-00.00","Minggu: 10.00-23.00"],
      kontak: {
        phone: "(061) 823 233 3232",
        socialMedia: ["@cafecafeine", "@cafecaffeine_official", "@cafecaffeinecafe"]
      },
    },
    {
      id: 2,
      img: "https://wisatamilenial.com/wp-content/uploads/2023/02/Review-House-of-Brew-Medan-Image-From-@thelcocoffee.jpg",
      nama: "House Of Brew",
      esWaktu: 15,
      keramaian: "sedang",
      kategori:"populer",
      rating: 5,
      alamat: "Jl. Tangguk Bongkar I No.52a, Tegal Sari Mandala II, Kec. Medan Denai, Kota Medan, Sumatera Utara 20224",
      jarak: "1km",
      desc: "House Of Brew - Happy to Celebrate Every Moment with U <3",
      jadwal: ["Hari Biasa: 10.00-23.30","Sabtu: 10.00-00.00","Minggu: 10.00-00.00"],
      kontak: {
        phone: "0821-6855-8838",
        socialMedia: ["@houseofbrew.id", "@houseofbrew_id", "@houseofbrew_ofc"]
      },
    },
    {
      id: 3,
      img: "https://10619-2.s.cdn12.com/rests/original/104_515904329.jpg",
      nama: "Liu's Garden",
      esWaktu: 25,
      keramaian: "ramai",
      kategori:"populer",
      rating:3,
      alamat: "Thamrin Plaza, Thamrin Plaza Lantai 5, Jl. M. H. Thamrin No. 75R, Sei Rengas II, Medan, Kota Medan, Sumatera Utara 20214",
      jarak: "500m",
      desc: "Dimsum, Suki & Chinese Cuisine Specialist",
      jadwal: ["Hari Biasa: 11.00-21.45","Sabtu: 11.00-21.45","Minggu: 11.00-21.45"],
      kontak: {
        phone: "(061) 7354916",
        socialMedia: ["@nelayanrestaurant", "@nelayanrestaurantofc", "@nelayanrestaurant.id"]
      },
    },
    {
      id: 4,
      img: "https://akcdn.detik.net.id/community/media/visual/2019/10/29/006387bd-90d2-4c92-896d-4c26bc84b384_43.jpeg?w=250&q=",
      nama: "Sushi Tei",
      esWaktu: 10,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:5,
      alamat: "Jl. Teuku Daud No.6/12, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152",
      jarak: "1.5km",
      desc: "A Good Deal of Sushi",
      jadwal: ["Hari Biasa: 10.00-22.00","Sabtu: 10.00-22.00","Minggu: 10.00-22.00"],
      kontak: {
        phone: "(061) 62001101",
        socialMedia: ["@sushitei_medan", "@sushitei.ofc", "@sushitei.id"]
      },
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rrjeby_rPyaM3BBSDTxNqcvOuyGZ4sQ1BBG0bkrbwaOF7ibqTsFo7S9I9z2MekYJW2o&usqp=CAU",
      nama: "City Ice Cream",
      esWaktu: 12,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:1,
      alamat: "Jl. Palang Merah No.114, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20212",
      jarak: "1.2km",
      desc: "Sweetening your City life since 2006",
      jadwal: ["Hari Biasa: 09.00-22.30","Sabtu: 09.00-22.30","Minggu: 09.00-22.30"],
      kontak: {
        phone: "081368182654",
        socialMedia: ["@officialcityicecream", "@cityicecreamid", "@cityicecream_id"]
      },
    },
    {
      id: 6,
      img: "https://10619-2.s.cdn12.com/rests/original/332_512205521.jpg",
      nama: "Purezza Cafe",
      esWaktu: 8,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:5,
      alamat: "Jl. Taruma No.15b, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20151",
      jarak: "600m",
      desc: "Iconic Florist Cafe in Medan",
      jadwal: ["Hari Biasa: 10.00-22.00","Sabtu: 10.00-22.00","Minggu: 10.00-22.00"],
      kontak: {
        phone: "08126077606",
        socialMedia: ["@purezza_cafe", "@ofcpurezzacafe", "@purezzacafe_id"]
      },
    },
    {
      id: 7,
      img: "https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/f68fe87c-c000-48d1-a601-9c2e55d28068/chicken-up-cafe.jpg",
      nama: "Bistronomix",
      esWaktu: 20,
      keramaian: "ramai",
      kategori:"populer",
      rating:2,
      alamat: "Jl. Perintis Kemerdekaan, Kesawan, Kec. Medan Bar., Kota Medan, Sumatera Utara 20236",
      jarak: "2km",
      desc: "Casual eatery serving global fare such as finger foods, pizza & burgers, plus smoothies & mocktails.",
      jadwal: ["Hari Biasa: 11.00-01.00","Sabtu: 11.00-03.00","Minggu: 11.00-03.00"],
      kontak: {
        phone: "(061) 4561662",
        socialMedia: ["@bistronomix", "@bistronomixmdn", "@bistronomix_mdn"]
      },
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrrH1XiJd9C0nqDA_wTrtE63Hxl1IcpbgR6rtdnZfgsH2byMIAociMnMYKofI7vzbQnU&usqp=CAU",
      nama: "The Thirty-Six",
      esWaktu: 23,
      keramaian: "ramai",
      kategori:"populer",
      rating:5,
      alamat: "Jl. Multatuli No.36, Hamdan, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20151",
      jarak: "1.7km",
      desc: "Speciality Coffee",
      jadwal: ["Hari Biasa: 09.00-23.00","Sabtu: 09.00-23.00","Minggu: 09.00-23.00"],
      kontak: {
        phone: "(061) 4530970",
        socialMedia: ["@thethirtysix", "@thethirtysixmdn", "@thethirtysixkno"]
      },
    },
    {
      id: 9,
      img: "https://s3.dealjava.com/content/thumb_small/1dd0de3f515bdfd04d5bb1c0e305c281.jpg",
      nama: "Harbour 9",
      esWaktu: 6,
      keramaian: "sepi",
      kategori:"sponsor",
      rating:3,
      alamat: "Gedung Forum Nine CIMB Niaga Lanta Dasar, Jl. Imam Bonjol No.9, Petisah Tengah, Medan Petisah, Medan City, North Sumatra 20112",
      jarak: "3.7km",
      desc: "Pub plates & cocktails served in relaxed, lofty surrounds with stylish decor & outdoor seating.",
      jadwal: ["Hari Biasa: 02.00-23.00","Sabtu: 10.00-23.00","Minggu: 10.00-23.00"],
      kontak: {
        phone: "(061) 4520481",
        socialMedia: ["@harbour9", "@harbour9", "@harbour9.id"]
      },
    },
    {
      id: 10,
      img: "https://adrjbamdqo.cloudimg.io/v7/_wireloca_/532020_08_06182152_sosmed_cafe_abdullah_lubis_5739485798437593487598734.jpg",
      nama: "Cafe Abdullah",
      esWaktu: 9,
      keramaian: "sepi",
      kategori:"sponsor",
      rating:3,
      alamat: "Jl. Abdullah Lubis No.8-20, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
      jarak: "2.4km",
      desc: "Instagramable Cafe In Medan",
      jadwal: ["Hari Biasa: 11.00-22.00","Sabtu: 11.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "(061) 42006685",
        socialMedia: ["@sosmedcafe", "@sosmedcafe.id", "@sosmedcafe_mdn"]
      },
    },
    {
      id: 11,
      img: "https://adrjbamdqo.cloudimg.io/v7/_wireloca_/532020_08_06182152_sosmed_cafe_abdullah_lubis_5739485798437593487598734.jpg",
      nama: "Starbucks",
      esWaktu: 5,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:2,
      alamat: "Thamrin Plaza, Lt.2, Jl. M.H Thamrin No.75R, Sei Rengas I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "300m",
      desc: "Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availabilit",
      jadwal: ["Hari Biasa: 11.00-22.00","Sabtu: 11.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "(061) 7362508",
        socialMedia: ["@starbucksindonesia", "@starbucksindoensia", "@starbucks.id"]
      },
    },
    {
      id: 12,
      img: "https://raindreamnlovehome.files.wordpress.com/2020/12/sam_0662-01-1.jpeg?w=1024",
      nama: "The Brew Space",
      esWaktu: 13,
      keramaian: "sedang",
      kategori:"terdekat",
      rating:4,
      alamat: "Jl. Aipda KS Tubun No.33, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20233",
      jarak: "250m",
      desc: "The Havenly Space To Enjoy Coffee",
      jadwal: ["Hari Biasa: 08.00-21.00","Sabtu: 08.00-21.00","Minggu: 08.00-21.00"],
      kontak: {
        phone: "(061) 51231891",
        socialMedia: ["@Thebrewingspace", "@thebrewingspacekno", "@thebrewingspace"]
      },
    },
    {
      id: 13,
      img: "https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/isdarmady/23vsBTq74K3dBedmu9Wcxxhu4JAqwJUgN9PVVRP6WYWgkiY6aLNK8PnXs7uyJA4LePAqm.jpg",
      nama: "Cafe T1311",
      esWaktu: 23,
      keramaian: "ramai",
      kategori:"terdekat",
      rating:1,
      alamat: "Jl. Gandhi No.129F, Sei Rengas II, Kec. Medan Area, Kota Medan, Sumatera Utara 20211",
      jarak: "700m",
      desc: "Passion in Crafting Excellence We aim to be the best Croissanterie in town and beyond",
      jadwal: ["Hari Biasa: 09.00-21.30","Sabtu: 09.00-21.30","Minggu: 09.00-21.30"],
      kontak: {
        phone: "0813-6695-3956",
        socialMedia: ["@t1311.co", "@thirteeneleven", "@t1311.mdn"]
      },
    },
    {
      id: 14,
      img: "https://arsitagx-master-article.s3.ap-southeast-1.amazonaws.com/article-photo/1155/cafe-dan-restoran-2.jpeg",
      nama: "LUNA coffee",
      esWaktu: 3,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:4,
      alamat: "Jl. Wahidin No.11, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "150m",
      desc: "Coffee & Toast",
      jadwal: ["Hari Biasa: 08.00-22.00","Sabtu: 08.00-22.00","Minggu: 08.00-22.00"],
      kontak: {
        phone: "0813-6695-3956",
        socialMedia: ["@t1311.co", "@thirteeneleven", "@t1311.mdn"]
      },
    },
    {
      id: 15,
      img: "https://assets.grooveapps.com/images/fbd6e5bc-8c35-4bae-bcc5-0c06a2086136/1634202510_DSCF9898.JPG?update=2",
      nama: "Prana Cafe",
      esWaktu: 6,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:3,
      alamat: "Jl. Wahidin No.5A, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "200m",
      desc: "No Coffee No Prana, Coffee makes life better",
      jadwal: ["Hari Biasa: 09.00-20.00","Sabtu: 09.00-20.00","Minggu: 09.00-20.00"],
      kontak: {
        phone: "0812-6971-3311",
        socialMedia: ["@pranacafe.wahidin", "@pranacafemdn", "@pranacafekno"]
      },
    },
    {
      id: 16,
      img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/18/2ddb5697-2346-4bb7-b1d4-73d07d0e3878.jpg",
      nama: "Kopi Konnichiwa",
      esWaktu: 8,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:5,
      alamat: "Jl. Aipda KS Tubun No.1, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "350m",
      desc: "Ready To Served You Japanese Coffee Shop Concept Coffee & Matcha Specialist",
      jadwal: ["Hari Biasa: 09.00-20.00","Sabtu: 09.00-20.00","Minggu: 09.00-20.00"],
      kontak: {
        phone: "0812-6971-3311",
        socialMedia: ["@pranacafe.wahidin", "@pranacafemdn", "@pranacafekno"]
      },
    },
    {
      id: 17,
      img: "https://majalah.ottenstatic.com/uploads/2019/09/55FB4D87-58EB-44C8-9E61-8F3BE35CB6EC.jpg",
      nama: "D'Raja Coffee",
      esWaktu: 7,
      keramaian: "sepi",
      kategori:"terdekat",
      rating:1,
      alamat: "Jl. Aipda KS Tubun No.117/103, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "400m",
      desc: "Brewing & Serving Daily",
      jadwal: ["Hari Biasa: 08.00-22.00","Sabtu: 08.00-22.00","Minggu: 08.00-22.00"],
      kontak: {
        phone: "0852-1211-7117",
        socialMedia: ["@hubdrajasumatera", "@hubdraja", "@hubdrajamdn"]
      },
    },
    {
      id: 18,
      img: "https://asset.kompas.com/crops/euAY7Se4xZeJZO5RYzViWIncExw=/0x0:0x0/780x390/data/photo/2023/09/27/65140c88112d0.jpg",
      nama: "Mie Gacoan",
      esWaktu: 30,
      keramaian: "ramai",
      kategori:"populer",
      rating:5,
      alamat: "Jl. Williem Iskandar, Kenangan Baru, Kec. Percut Sei Tuan, Kota Medan, Sumatera Utara",
      jarak: "1km",
      desc: "Jagonya Mie Pedas No.1 Di Indoensia",
      jadwal: ["Hari Biasa: 09.00-23.00","Sabtu: 09.00-23.00","Minggu: 09.00-23.00"],
      kontak: {
        phone: "0897-9192-129",
        socialMedia: ["@mie.gacoan", "@miegacoanid", "@miegacoan"]
      },
    },
    {
      id: 19,
      img: "https://awsimages.detik.net.id/community/media/visual/2023/01/13/gerai-mixue-di-medan-2_169.jpeg?w=650&q=80",
      nama: "Mixue",
      esWaktu: 28,
      keramaian: "ramai",
      kategori:"populer",
      rating:3,
      alamat: "Jl. Aipda KS Tubun No.81, Pandau Hulu I, Kec. Medan Kota, Kota Medan, Sumatera Utara 20211",
      jarak: "900m",
      desc: "Es krim sajian lembut dan minuman teh asal Zhengzhou, Henan, Tiongkok",
      jadwal: ["Hari Biasa: 10.00-22.00","Sabtu: 10.00-22.00","Minggu: 10.00-22.00"],
      kontak: {
        phone: "0858-7832-2378",
        socialMedia: ["@mixue.medan", "@mixuemedan", "@mixuekno"]
      },
    },
    {
      id: 20,
      img: "https://upload.crazfood.com/photos/345/1704170920240",
      nama: "The Edge",
      esWaktu: 21,
      keramaian: "ramai",
      kategori:"populer",
      rating:4,
      alamat: "Jl. S. Parman No.217, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111",
      jarak: "2.2km",
      desc: "The best Rooftop Restaurant In Medan",
      jadwal: ["Hari Biasa: 04.00-23.00","Sabtu: 04.00-23.00","Minggu: 04.00-23.00"],
      kontak: {
        phone: "0811-6531-599",
        socialMedia: ["@cambridgehotelmedan", "@cambridgehotelmedan", "@cambridgehotelmdn"]
      },
    },
    {
      id: 21,
      img: "https://thecoffeecrowd.co.id/wp-content/uploads/2020/04/MTS-025-scaled.jpg",
      nama: "Coffee Crowd",
      esWaktu: 23,
      keramaian: "ramai",
      kategori:"populer",
      rating:5,
      alamat: "Thamrin Plaza, Jl. M.H Thamrin No.75R, Sei Rengas I, Kec. Medan Kota, Kota Medan, Sumatera Utara 2021",
      jarak: "250m",
      desc: "comfortable place to hangout or or have dinner with your family with an affordable price and tasty food of traditional Medan Indonesia.",
      jadwal: ["Hari Biasa: 10.00-22.00","Sabtu: 10.00-22.00","Minggu: 10.00-22.00"],
      kontak: {
        phone: "(061) 7330592",
        socialMedia: ["@thecoffeecrowdofficial", "@thecoffeecrowdofc", "@thecoffeecrowdid"]
      },
    },
    {
      id: 22,
      img: "https://1.bp.blogspot.com/-8wOqf9mT4Jg/XSNIs40RAoI/AAAAAAAACeM/EmeCiZe8Jbc0bpobDHJLeBvKGtWwh8RbACLcBGAs/s1600/wajir%2B-%2B01.jpg",
      nama: "Wajir Seafood",
      esWaktu: 35,
      keramaian: "ramai",
      kategori:"populer",
      rating:3,
      alamat: "Jl. Kol. Sugiono No.31, A U R, Kec. Medan Maimun, Kota Medan, Sumatera Utara 20212",
      jarak: "1.9km",
      desc: "Traditional seafood specialties in a lively restaurant offering unpretentious outdoor dining.",
      jadwal: ["Hari Biasa: 04.00-22.00","Sabtu: 04.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "(061) 7330592",
        socialMedia: ["@wajir.seafood", "@wajir.seafood", "@wajirseafood.id"]
      },
    },
    {
      id: 23,
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtPviuqLHMJRA92Sh6lmgxHOoAdo_wTrmpzMLVmQookGJHmDGJXQ0y-3c5IvQ3btMUvLzBDtKXiXl3d-7bCmQ0RRRASxgSbqHuu0_KQSuWbhM7OaJOF_yXQBKbnpkxQDMZg9UvzIpU0vDSGYDum0FhU4YHIL-f00woViE7a4kc-X-dEieTJXUOMIt10Q/s4000/20220419_210022.jpg",
      nama: "NO BRAND CAFE",
      esWaktu: 22,
      keramaian: "ramai",
      kategori:"populer",
      rating:4,
      alamat: "J K L, Jl. Pandu No.1, A U R, Medan Maimun, Medan City, North Sumatra 20212",
      jarak: "1.4km",
      desc: "Fusion Cafe & Patisserie",
      jadwal: ["Hari Biasa: 11.00-22.00","Sabtu: 11.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "+62819-3062-0282",
        socialMedia: ["@nobrandcafe", "@nobrandcafeid", "@nobrandcafe_mdn"]
      },
    },
    {
      id: 24,
      img: "https://www.centrepoint.co.id/sites/default/files/styles/hero_image_small/public/2021-10/PARADISE%20DYNASTY.jpg?itok=fRcKwu38",
      nama: "Paradise Dynasty",
      esWaktu: 13,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:5,
      alamat: "Centre Point Mall, Jl. Timor No.7A, Gg. Buntu, Kec. Medan Tim., Kota Medan, Sumatera Utara 20153",
      jarak: "1.1km",
      desc: "Legend of Xiao Long Bao",
      jadwal: ["Hari Biasa: 10.00-22.00","Sabtu: 10.00-22.00","Minggu: 10.00-22.00"],
      kontak: {
        phone: "08116136662",
        socialMedia: ["@paradisedynastymdn", "@paradisedynastyid", "@paradisedynasty_mdn"]
      },
    },
    {
      id: 25,
      img: "https://lemburkuring.com/wp-content/uploads/2022/04/Picture-4.png",
      nama: "Lembur Kuring",
      esWaktu: 11,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:2,
      alamat: "Jl. T. Amir Hamzah No.85, Helvetia Tim., Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20124",
      jarak: "4.1km",
      desc: "Expansive restaurant offering classic Javanese, Sundanese & seafood dishes, plus a garden & a pond.",
      jadwal: ["Hari Biasa: 11.00-22.00","Sabtu: 11.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "(061) 8465515",
        socialMedia: ["@lemburkuringmedan", "@lemburkuringmdn", "@ofclemburkuring"]
      },
    },
    {
      id: 26,
      img: "https://1.bp.blogspot.com/-HDUeWmTPkSw/XL7PmJW62OI/AAAAAAAAFo4/_hrSRgI6NTcuws9fE9tyfnLXygCEcfYGwCLcBGAs/s1600/IMG_2653.jpg",
      nama: "Resto Kembang",
      esWaktu: 12,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:4,
      alamat: "Jl. Medan - Pematang Siantar No.329, Amplas, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20148",
      jarak: "10.3km",
      desc: "Enjoy your moments with us",
      jadwal: ["Hari Biasa: 11.00-21.00","Sabtu: 11.00-21.00","Minggu: 11.00-21.00"],
      kontak: {
        phone: "(061) 42778800",
        socialMedia: ["@restorankembang", "@restorankembangmdn", "@restorankembangofc"]
      },
    },
    {
      id: 27,
      img: "https://i0.wp.com/makanmana.net/wp-content/uploads/2017/04/budaya-pondok.jpg?fit=1200%2C800&ssl=1",
      nama: "Budaya Resto",
      esWaktu: 14,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:4,
      alamat: "Jl. Medan - Pematang Siantar, Ujung Serdang, Kec. Tj. Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362",
      jarak: "11km",
      desc: "Sophisticated, relaxed venue with outdoor seating serving cocktails & updated local classics",
      jadwal: ["Hari Biasa: 08.00-21.00","Sabtu: 08.00-21.00","Minggu: 11.00-21.00"],
      kontak: {
        phone: "(061) 7944333",
        socialMedia: ["@budayaresto", "@budayarestoid", "@budayarestomdn"]
      },
    },
    {
      id: 28,
      img: "https://blogger.googleusercontent.com/img/a/AVvXsEgMZOBx05wxlmj74QhT-HZvVPX_poCQgWy3fBG3GopzUn_FkRcWE7luu6ROll5_65nNB0SBbDwmburT6-61Gx2T9PJjb1oHknNadhuSNCcO8sLtQSPzlW8MPzSAMzBpJWjK05BxFOkGsq67KtmyyYdinBEQNjw2kYgF4I1g7nOwGo-MnneWBmXYRmAI=s16000",
      nama: "Koki Sunda",
      esWaktu: 16,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:2,
      alamat: "Jl. Hasanuddin No.1, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20152",
      jarak: "2.8km",
      desc: "Laid-back eatery with a terrace serving classic meat dishes, curries, fish & desserts, plus drinks.",
      jadwal: ["Hari Biasa: 11.00-21.00","Sabtu: 11.00-21.00","Minggu: 11.00-21.00"],
      kontak: {
        phone: "(061) 4534302",
        socialMedia: ["@kokisunda", "@kokisunda", "@kokisunda.mdn"]
      },
    },
    {
      id: 29,
      img: "https://halallife.id/media/2021/12/Pondok-Indah-1.jpg",
      nama: "Pondok Indah",
      esWaktu: 13,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:4,
      alamat: "Jl. Hasanuddin No.1, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
      jarak: "2.7km",
      desc: "HIDANGAN KHAS NUSANTARA",
      jadwal: ["Hari Biasa: 11.00-22.00","Sabtu: 11.00-22.00","Minggu: 11.00-22.00"],
      kontak: {
        phone: "(061) 42011999",
        socialMedia: ["@pondokindahresto", "@restopondokindah", "@pondokindah.mdn"]
      },
    },
    {
      id: 30,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/220px-Tom%27s_Restaurant%2C_NYC.jpg",
      nama: "Traders Resto",
      esWaktu: 10,
      keramaian: "sedang",
      kategori:"sponsor",
      rating:3,
      alamat: "Jl. Kapten Patimura No.423, Darat, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
      jarak: "2.5km",
      desc: "We Serve Only The Best Steak in Town",
      jadwal: ["Hari Biasa: 11.00-24.00","Sabtu: 11.00-24.00","Minggu: 11.00-24.00"],
      kontak: {
        phone: "(061) 4531881",
        socialMedia: ["@thetradersmedan", "@thetradersmdn", "@thetraders_mdn"]
      },
    },
  ];
  
  export default restaurants;
  