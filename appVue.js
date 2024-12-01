let alimentos = new Vue({
    el: '#alimentos',
    data: {
        vegetalSeleccionado: '',
        frutaSeleccionada: '',
        proteinaSeleccionada: '',
        carbohidratoSeleccionado: '',
        grasaSeleccionada: '',
        lacteoSeleccionado: '',
        cerealSeleccionado: '',
        bebidaSeleccionada: '',
        imagenVegetal: '',
        imagenFruta: '',
        imagenProteina: '',
        imagenCarbohidrato: '',
        imagenGrasa: '',
        imagenLacteo: '',
        imagenCereal: '',
        imagenBebida: '',

        vegetales: {
            Brocoli: { imagen: 'https://5aldia.cl/wp-content/uploads/2018/03/appetite-broccoli-brocoli-broccolli-calories-161486.jpg' },
            Zanahoria: { imagen: 'https://5aldia.cl/wp-content/uploads/2018/03/zanahoria.jpg' },
            Lechuga: { imagen: 'https://5aldia.cl/wp-content/uploads/2018/03/lechuga.jpg' },
            Calabaza: { imagen: 'https://supermode.com.mx/cdn/shop/products/0365.jpg?v=1698807536' },
            Nopal: { imagen: 'https://convy.mx/cdn/shop/products/GH_VDRS_Nopales_MTY.jpg?v=1648653589' },
            Espinaca: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68EPcl5dyCPQBi_prJSKirN1YEjCug35CUQ&s' },
            Chayote: { imagen: 'https://superlavioleta.com/cdn/shop/files/chayote1_2be5a666-97d4-440c-b255-02ec56d576c9.png?v=1727707679' },
            Ejotes: { imagen: 'https://countryfoods.mx/wp-content/uploads/2023/06/EJOTE.jpg' },
            Jitomate: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7MxtxKyMKVGLjRUPA-Q1u-SmjE6x1TG0mQ&s' },
            Coliflor: { imagen: 'https://www.gastronomiavasca.net/uploads/image/file/3357/w700_coliflor.jpg' },
        },

        frutas: {
            Manzana: { imagen: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=612x612&w=0&k=20&c=BFD8ixD7eyXMm3aSVIdz1hUsLG-lX8Ig2HBr6IVJuzU=' },
            Platano: { imagen: 'https://media.istockphoto.com/id/173242750/es/foto/racimo-de-pl%C3%A1tanos.jpg?s=612x612&w=0&k=20&c=-RqILbvnZIp5YZRm3BGc-i5n_e2VsJCUu9GU9OqVAbk=' },
            Fresa: { imagen: 'https://media.istockphoto.com/id/1412854156/es/foto/fresas-aisladas-fresa-entera-y-media-sobre-fondo-blanco-rodaja-de-fresa-con-trazado-de-recorte.jpg?s=612x612&w=0&k=20&c=pjxh7kbYhG6gv_liOdHmP8APxPoaXrLBg2A7GgGAMWE=' },
            Naranja: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9ZFAb4f5WcxmVY5yohIdle_doFXh4eJriA&s' },
            Uva: { imagen: 'https://media.istockphoto.com/id/610539412/es/foto/uvas-verdes-frescas-con-hojas-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=3IQUFIfUBOA1C_8BOqewwPj492A9Jh9K378Bv2_F3kI=' },
            Pera: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4MA5yHeZFvy0N1R_g4SqWOjpDlLHz1Sqgg&s' },
            Mango: { imagen: 'https://media.istockphoto.com/id/1318935291/es/foto/fruta-de-mango.jpg?s=612x612&w=0&k=20&c=pSsuDloovUY2M4VK81CuQwGzk_jPniuicixW5RL8nOg=' },
            Kiwi: { imagen: 'https://media.istockphoto.com/id/834807852/es/foto/fruta-de-kiwi-entero-y-medio-kiwi-frutas-en-blanco.jpg?s=612x612&w=0&k=20&c=gOuxdy3L1fiuOxAMxiU9ffs_0tSDP_lv0CC5TGYBGJY=' },
            Sandia: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPCAGoLSTB04PVl2dbQaKGDBT6r7K1kUzmg&s' },
            Piña: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0VeuXScbSD6F3T3Om1AdBCQFtdJgyRZhkg&s' },
        },

        proteinas: {
            Pollo: { imagen: 'https://www.bormarket.com/wordpress/wp-content/uploads/2022/04/000477-Pechuga-pollo-asado-Des-110-130-5X2KG-002.jpg' },
            Res: { imagen: 'https://png.pngtree.com/png-vector/20240313/ourlarge/pngtree-grilled-beef-smoked-roasts-cooked-meat-png-image_11937278.png' },
            Pescado: { imagen: 'https://media.istockphoto.com/id/888647548/es/foto/salm%C3%B3n-salm%C3%B3n-asado-steakisolated-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=rmT-Ps3ad8iA2GXJ0ER4y3PdOYNauI16elsWqU72o1c=' },
            Huevo: { imagen: 'https://avinews.com/wp-content/uploads/2023/10/MEXICO-HUEVO-840x720.jpg' },
            Lentejas: { imagen: 'https://zippi.mx/cdn/shop/products/SO05_2.jpg?v=1682378671&width=500' },
            Tofu: { imagen: 'https://foodco.pe/wp-content/uploads/2024/08/Tofu.jpg' },
            Frijoles: { imagen: 'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/frijoles.png' },
            Queso_Cottage: { imagen: 'https://ofertassupermercados.es/wp-content/uploads/2020/04/queso-cottage-mercadona.jpg' },
            Yogurt_Griego: { imagen: 'https://acdn.mitiendanube.com/stores/001/129/542/products/kay-41-6eeee79956cd2f298616854711104865-1024-1024.jpg' },
            Pechuga_de_Pavo: { imagen: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202304/25/00118316500034____13__600x600.jpg' },
        },

        carbohidratos: {
            Arroz_Blanco: { imagen: 'https://www.hogarmania.com/archivos/202204/como-hacer-arroz-blanco-xl-1280x720x80xX.jpg' },
            Arroz_Integral: { imagen: 'https://i.blogs.es/6f973b/arroz-integral/840_560.jpg' },
            Pasta: { imagen: 'https://www.danzadefogones.com/wp-content/uploads/2014/04/Pasta-alfredo-vegana.jpg' },
            Papa: { imagen: 'https://www.dietfarma.com/wp-content/uploads/2016/03/patatas_cocidas-8cf.jpg' },
            Camote: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8cplYocOgnho9vIXoCW4N8WRv81TqR1ada_nkJPPunRvoCeJoU3ypjgUVsTNaH8FCHU&usqp=CAU' },
            Pan_Integral: { imagen: 'https://www.onlinepersonaltrainer.es/wp-content/uploads/2014/08/pan-integral.jpg' },
            Quinoa: { imagen: 'https://static3.depositphotos.com/1001661/141/i/450/depositphotos_1413132-stock-photo-cooked-quinoa.jpg' },
            Maiz: { imagen: 'https://st2.depositphotos.com/1692343/6944/i/450/depositphotos_69443809-stock-photo-organic-yellow-steamed-corn.jpg' },
            Avena: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRxZTHBVspFz5wTWlhcTbafNo6L3XysGDHVMFqEWqzHf2oAY_gQ_HIeTGjBAxp_i3K8s&usqp=CAU' },
            Platano: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGb1EwosDJFKz6fleOypUJVF28G-bZs_C0g&s' },
        },

        grasas: {
            Aceite_Oliva: { imagen: 'https://origival.com/wp-content/uploads/2021/01/Beneficios-del-aceite-de-oliva.jpg' },
            Mantequilla: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXZhbx0ZaqlmPffsTn4tpfxPYcLzrxOkeFA&s' },
            Aguacate: { imagen: 'https://www.recetasnestle.com.mx/sites/default/files/styles/crop_article_banner_desktop_nes/public/2021-12/aguacate.jpg' },
            Almendra: { imagen: 'https://media.istockphoto.com/id/928348442/es/foto/almendra-tres-nueces-almendras-aisladas-en-blanco-profundidad-de-campo.jpg?s=612x612&w=0&k=20&c=-Bj0fKLCLhcg8W67Cf5YLDhIsvDlv20j7QHGJL_2Ef4=' },
            Nuez: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7tHTIzL842bpBxV15KgS4wK7PidM9_M4LQ&s' },
            Cacahuate: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS73Ir-RxkufOtpagkcGWsNNQc2p0tmR0_Q&s' },
            Aceite_Coco: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlaY1EiHjBo2Sl7IsCYULlph860W9uXGF7w&s' },
            Chia: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkxsZbQl1szwUme4394b-dAlxcCVUKYD2tA&s' },
            Girasol: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvIw6PPQPlZFQfOAnNYhs_S-0ogl1N6cicA&s' },
            Queso_Chedar: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLLgOUihzsogDYEw2J7eCx7bJCs-WDpQsig&s' },
        },

        lacteos: {
            Leche: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS829ym0ZT1CgwML-mm2hPlvmMfcWOt_47KTw&s' },
            Leche_Semidesnatada: { imagen: 'https://media.istockphoto.com/id/183778031/es/foto/cart%C3%B3n-de-leche-clipping-path-borde-de-corte.jpg?s=612x612&w=0&k=20&c=Et6Hbm3IeQo8c9yIq_xsvje22dqiSyXD1VvrQQLLJHY=' },
            Leche_Desnatada: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbCMCPdAZdA5esSPomZ-EIWv9LWw5p2aftg&s' },
            Yogurt_Natural: { imagen: 'https://media.istockphoto.com/id/519963596/es/foto/yogur.jpg?s=612x612&w=0&k=20&c=lFFe-yise2gmJalvyFznmZts3AUngc9QhsftmfpDadM=' },
            Yogurt_Natural_Desnatado: { imagen: 'https://media.istockphoto.com/id/1135483716/es/foto/crema-agria-o-yogur-en-taz%C3%B3n-de-madera.jpg?s=612x612&w=0&k=20&c=udA2ZuzlZSRi6u_lN2d9RBryn5Bu-CwxHlWpU-Or6KQ=' },
            Yogurt_Griego: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XgIbwqVxHEdjvPQfHm2GI4wUhvvd-zBcww&s' },
            Leche_Almendra: { imagen: 'https://img.freepik.com/fotos-premium/fotografia-fondo-blanco-leche-almendra_1288657-70794.jpg' },
            Leche_Soya: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkb7DsH6bblpxfJpx2DG8ls0lfh_TE4SiXAA&s' },
            Leche_Avena: { imagen: 'https://img.freepik.com/fotos-premium/leche-avena-aislada-vista-superior-fondo-blanco_829699-510.jpg' },
            Queso: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZHlS4BBZFDRUw6eVdeLF7uDp8wjjPynJsA&s' },
        },

        cereales: {
            Corn_Flakes: { imagen: 'https://www.shutterstock.com/image-photo/crispy-gold-corn-flakes-white-600nw-2145943503.jpg' },
            Avena: { imagen: 'https://img.freepik.com/fotos-premium/avena-fondo-blanco-alta-calidad-ultra-hd_889056-8149.jpg' },
            Granola: { imagen: 'https://static.vecteezy.com/system/resources/previews/008/887/115/non_2x/a-pile-of-granola-on-a-white-background-photo.jpg' },
            Cereal_Integral: { imagen: 'https://img.freepik.com/fotos-premium/copos-cereales-integrales-que-mezclan-bayas-pasas-desayuno-isolaed-sobre-fondo-blanco_38700-1798.jpg?semt=ais_hybrid' },
            Arroz_Inflado: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQrMgtfWaiItAV9CZmG47dacsLmg1e9IVDA&s' },
            Cereal_Trigo: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBxcqqU9Sf9gOoAKBxYMIMhw3tb3PbOxBIQ&s' },
            Cereal_Avena_Miel: { imagen: 'https://img.freepik.com/fotos-premium/gachas-avena-platano-nueces-miel-recipiente-sobre-fondo-blanco-vista-superior_166342-1525.jpg' },
            Cereal_Maiz: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivUDh2rkhN3zcvN-nYu5vM2xh77qG6k2EdA&s' },
            Arroz_Inflado_Chocolate: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVgtYQvCPzgHN8HVENyVAoILv4WeMa7wk6w&s' },
            Trigo_Miel: { imagen: 'https://img.freepik.com/foto-gratis/vista-superior-miel-junto-al-trigo_23-2148346666.jpg' },
        },

        leguminosas: {
            Frijoles: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd22d7-2-r4Ha1jv3jppjxuJgDho22psMJ-w&s' },
            Lentejas: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjuKE-j7pXyIADTEx2GQMflmg9vfqYz45Rg&s' },
            Garbanzos: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDLnZIeywztPRjC8MA-CeE_U9J7leogJpnQ&s' },
            Soja: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNqTm7Z-Sz8zW3eswCi6KSUT9djv_2K5ahw&s' },
            Alubias: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06Qqn7xg5xr0xxyRREXkfSSBGTVygz7PEuA&s' },
            Guisantes: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjZQsGI28PhTkBy-Jrpffs3SeAIU4XsDXWw&s' },
            Cacahuates: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPejKWT_mU_qui0wdDq_yHGqPWoWmgnldbKA&s' },
            Habas: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzY5iPF2wye4h8g-mYWZ02kghPseqWJ11cA&s' },
            Lentejas_Rojas: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZV9xkpxtComXb7NRb4bVSZNSw0CRUjE9BHw&s' },
            Frijoles_Negros: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GRLXPO_waVJDwIHawh1ve2w_gNDOmL07mw&s' },
        },
        bebidas: {
            Agua: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibe13LAYtuZSWROgPIi9cT7QJARU2rbrHsw&s' },
            Infusion_Hierbas: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lP9_BFa19gwNaMuNIubrT_y2GuSeCX9nYw&s' },
            Agua_Limon: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJbp8B2381rMYFqxHFJU_F3lI_mquhR3AlA&s' },
            Te_Verde: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgbgKQTdYWI8_RIFIjTB3LcqKXKCSUy_DCA&s' },
            Te_Hibisco: { imagen: 'https://img.freepik.com/fotos-premium/sabroso-te-hibisco-aislado-sobre-fondo-blanco_787273-25678.jpg' },
            Agua_Coco: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG3skBLB4KujinttswuiqZwMAriRaiLw9CQ&s' },
            Jugo_Pepino: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeB3x-dHIGctj1p_bvo222rhD1vMn2TA-Lw&s' },
            Limonada: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7CGMPWhc4xX4beOn_6katyk7-xb8yduPyA&s' },
            Jugo_Tomate: { imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjmyVUmBri3bqjdseNCYVIJuOi-GuAdOEZw&s' },
            Jugo_Naranja: { imagen: 'https://img.freepik.com/fotos-premium/vaso-jugo-naranja-aislado-sobre-fondo-blanco_143106-514.jpg' },
        },
        calorias: {
            Brocoli: 20,
            Zanahoria: 32,
            Lechuga: 12,
            Calabaza: 23,
            Nopal: 14,
            Espinaca: 20,
            Chayote: 22,
            Ejotes: 29,
            Jitomate: 14,
            Coliflor: 23,
            Manzana: 208,
            Platano: 360,
            Fresa: 144,
            Naranja: 160,
            Uva: 280,
            Pera: 232,
            Mango: 240,
            Kiwi: 220,
            Sandia: 120,
            Piña: 180,
            Pollo: 82,
            Res: 120,
            Pescado: 100,
            Huevo: 72,
            Lentejas: 57,
            Tofu: 75,
            Frijoles: 67,
            Queso_Cottage: 45,
            Yogurt_Griego: 48,
            Pechuga_de_Pavo: 60,
            Arroz_Blanco: 175,
            Arroz_Integral: 160,
            Pasta: 210,
            Papa: 110,
            Camote: 120,
            Pan_Integral: 210,
            Quinoa: 150,
            Maiz: 130,
            Avena: 75,
            Platano: 120,
            Aceite_Oliva: 198,
            Mantequilla: 156,
            Aguacate: 160,
            Almendra: 128,
            Nuez: 140,
            Cacahuate: 125,
            Aceite_Coco: 198,
            Chia: 107,
            Girasol: 125,
            Queso_Chedar: 160,
            Leche: 135,
            Leche_Semidesnatada: 122,
            Leche_Desnatada: 81,
            Yogurt_Natural: 150,
            Yogurt_Natural_Desnatado: 120,
            Yogurt_Griego: 195,
            Leche_Almendra: 30,
            Leche_Soya: 105,
            Leche_Avena: 105,
            Queso: 225,
            Corn_Flakes: 144,
            Avena: 114,
            Granola: 155,
            Cereal_Integral: 520,
            Arroz_Inflado: 105,
            Cereal_Trigo: 120,
            Cereal_Avena_Miel: 135,
            Cereal_Maiz: 110,
            Arroz_Inflado_Chocolate: 115,
            Trigo_Miel: 135,
            Frijoles: 105,
            Lentejas: 70,
            Garbanzos: 105,
            Soja: 140,
            Alubias: 105,
            Guisantes: 70,
            Cacahuates: 125,
            Habas: 279,
            Lentejas_Rojas: 115,
            Frijoles_Negros: 105,
            Agua: 0,
            Infusion_Hierbas: 10,
            Agua_Limon: 25,
            Te_Verde: 15,
            Te_Hibisco: 20,
            Agua_Coco: 50,
            Jugo_Pepino: 45,
            Limonada: 65,
            Jugo_Tomate: 75,
            Jugo_Naranja: 300,
        },
        puntuaciones: {
            Brocoli: 9,
            Zanahoria: 6,
            Lechuga: 10,
            Calabaza: 8,
            Nopal: 10,
            Espinaca: 9,
            Chayote: 7,
            Ejotes: 10,
            Jitomate: 8,
            Coliflor: 8,
            Manzana: 8,
            Platano: 5,
            Fresa: 10,
            Naranja: 9,
            Uva: 6,
            Pera: 7,
            Mango: 6,
            Kiwi: 7,
            Sandia: 10,
            Piña: 8,
            Pollo: 7,
            Res: 4,
            Pescado: 3,
            Huevo: 8,
            Lentejas: 9,
            Tofu: 8,
            Frijoles: 8,
            Queso_Cottage: 10,
            Yogurt_Griego: 10,
            Pechuga_de_Pavo: 9,
            Arroz_Blanco: 5,
            Arroz_Integral: 6,
            Pasta: 4,
            Papa: 9,
            Camote: 8,
            Pan_Integral: 4,
            Quinoa: 6,
            Maiz: 7,
            Avena: 10,
            Platano: 8,
            Aceite_Oliva: 4,
            Mantequilla: 7,
            Aguacate: 6,
            Almendra: 8,
            Nuez: 8,
            Cacahuate: 9,
            Aceite_Coco: 4,
            Chia: 10,
            Girasol: 9,
            Queso_Chedar: 6,
            Leche: 10,
            Leche_Semidesnatada: 10,
            Leche_Desnatada: 7,
            Yogurt_Natural: 9,
            Yogurt_Natural_Desnatado: 9,
            Yogurt_Griego: 7,
            Leche_Almendra: 7,
            Leche_Soya: 6,
            Leche_Avena: 6,
            Queso: 4,
            Corn_Flakes: 6,
            Avena: 9,
            Granola: 10,
            Cereal_Integral: 5,
            Arroz_Inflado: 10,
            Cereal_Trigo: 7,
            Cereal_Avena_Miel: 9,
            Cereal_Maiz: 9,
            Arroz_Inflado_Chocolate: 3,
            Trigo_Miel: 7,
            Frijoles: 9,
            Lentejas: 10,
            Garbanzos: 9,
            Soja: 8,
            Alubias: 9,
            Guisantes: 10,
            Cacahuates: 9,
            Habas: 7,
            Lentejas_Rojas: 9,
            Frijoles_Negros: 9,
            Agua: 10,
            Infusion_Hierbas: 10,
            Agua_Limon: 10,
            Te_Verde: 7,
            Te_Hibisco: 9,
            Agua_Coco: 7,
            Jugo_Pepino: 7,
            Limonada: 6,
            Jugo_Tomate: 6,
            Jugo_Naranja: 4,
        }
    },
    methods: {
        mostrarImagen(tipo) {
            switch (tipo) {
                case 'vegetal':
                    this.imagenVegetal = this.vegetales[this.vegetalSeleccionado]?.imagen || '';
                    break;
                case 'fruta':
                    this.imagenFruta = this.frutas[this.frutaSeleccionada]?.imagen || '';
                    break;
                case 'proteina':
                    this.imagenProteina = this.proteinas[this.proteinaSeleccionada]?.imagen || '';
                    break;
                case 'carbohidrato':
                    this.imagenCarbohidrato = this.carbohidratos[this.carbohidratoSeleccionado]?.imagen || '';
                    break;
                case 'grasa':
                    this.imagenGrasa = this.grasas[this.grasaSeleccionada]?.imagen || '';
                    break;
                case 'lacteo':
                    this.imagenLacteo = this.lacteos[this.lacteoSeleccionado]?.imagen || '';
                    break;
                case 'cereal':
                    this.imagenCereal = this.cereales[this.cerealSeleccionado]?.imagen || '';
                    break;
                case 'bebida':
                    this.imagenBebida = this.bebidas[this.bebidaSeleccionada]?.imagen || '';
                    break;
            }
        },
        redireccionar() {
            const alimentosSeleccionados = [
                this.vegetalSeleccionado,
                this.frutaSeleccionada,
                this.proteinaSeleccionada,
                this.carbohidratoSeleccionado,
                this.grasaSeleccionada,
                this.lacteoSeleccionado,
                this.cerealSeleccionado,
                this.bebidaSeleccionada,
            ];

            if (alimentosSeleccionados.includes('')) {
                alert('Por favor, selecciona todos los tipos de alimentos.');
                return;
            }

            const imagen = this.vegetales[this.vegetalSeleccionado]?.imagen;
            const imagen1 = this.frutas[this.frutaSeleccionada]?.imagen;
            const imagen2 = this.proteinas[this.proteinaSeleccionada]?.imagen;
            const imagen3 = this.carbohidratos[this.carbohidratoSeleccionado]?.imagen;
            const imagen4 = this.grasas[this.grasaSeleccionada]?.imagen;
            const imagen5 = this.lacteos[this.lacteoSeleccionado]?.imagen;
            const imagen6 = this.cereales[this.cerealSeleccionado]?.imagen;
            const imagen7 = this.bebidas[this.bebidaSeleccionada]?.imagen;

            const puntuacionTotal = alimentosSeleccionados.reduce((total, alimento) => {
                return total + (this.puntuaciones[alimento] || 0);
            }, 0);

            const caloriasTotal = alimentosSeleccionados.reduce((total, alimento) => {
                return total + (this.calorias[alimento] || 0);
            }, 0);

            localStorage.setItem('imagen', imagen);
            localStorage.setItem('imagen1', imagen1);
            localStorage.setItem('imagen2', imagen2);
            localStorage.setItem('imagen3', imagen3);
            localStorage.setItem('imagen4', imagen4);
            localStorage.setItem('imagen5', imagen5);
            localStorage.setItem('imagen6', imagen6);
            localStorage.setItem('imagen7', imagen7);
            localStorage.setItem('nombre', alimentosSeleccionados.join(', '));
            localStorage.setItem('puntuaciones', puntuacionTotal);
            localStorage.setItem('indice', caloriasTotal);

            window.location.href = 'puntuacion.html';
        },
    },
});