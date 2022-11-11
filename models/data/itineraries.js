let itineraries = [
    {
        id: "ta1",
        cityId: "636d9804d8061af97199743f",
        name: "Visit Abbey Road Studios",
        photo: ["https://thewotme.com/wp-content/uploads/2014/01/abbey-2293953_1280.jpg" , "https://www.vacheron-constantin.com/dam/ric-import/vac/abb3/2d3a/2171641.jpeg.transform.vacbanner.jpg" , "https://www.clarin.com/img/2021/08/11/bGXueHvve_720x0__1.jpg"],
        description: "This studio has stood at the forefront of the recording industry for many years, which is particularly noteworthy as the recording studio used by the famous Beatles during the 1960s and 1970s.",
        price: 200,
        duration: 3,
        userId:  "636d51715d29e99d62636bd9"
    },
    {
        id: "ta2",
        cityId: "636d9804d8061af97199743f",
        name: "Stonehenge, Windsor Castle, and Bath from London",
        photo: ["https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/02/12/stonehenge.jpeg" , "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Windsor_Castle_at_Sunset_-_Nov_2006.jpg/1200px-Windsor_Castle_at_Sunset_-_Nov_2006.jpg" , "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/702/original/ec455f4d473f223e5b56b98263da87d0/england-bath-roman-baths-102518-az.jpg"],
        description: "Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for travelers with limited time in London, this tour allows you to check off a range of southern England's historical attractions in just one day by eliminating the hassle of traveling between each one independently. Travel by comfortable coach and witness your guide bring each UNESCO World Heritage Site to life with commentary. Plus, all admission tickets are included in the tour price. Please note: Windsor Castle is closed on Tuesdays and Wednesdays",
        price: 100,
        duration: 11,
        userId:  "636d51715d29e99d62636bd9"
    },
    {
        id: "ta3",
        cityId: "636d9804d8061af971997440",
        name: "New York City Statue of Liberty Super Express Cruise",
        photo: ["https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg" , "https://www.statueoflibertytickets.com/images/lede-nav/pan.jpg" , "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2400/v1639681767/production/product_image/image__1639681767.jpg"],
        description: "This 1-hour sightseeing cruise from Slip 6 in Battery Park is the absolute fastest way to get an up close view of Lady Liberty from the water. Available on the hour, every hour choose the time that suits you best. Get your camera ready to snap once in a lifetime pictures!",
        price: 24,
        duration: 1,
        userId:  "636d51715d29e99d62636bd9"
    },
    {
        id: "ta4",
        cityId: "636d9804d8061af971997440",
        name: "All-Access 9/11: Ground Zero Tour, Memorial and Museum",
        photo: ["https://www.911memorial.org/sites/default/files/paragraph/hero-banner/2022-09/COM%20PLAZA%20GEN.jpg" , "https://www.911memorial.org/sites/default/files/paragraph/image/2019-08/COM%20AERIAL%20SPRING.JPG" , "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_20/442991/ss-140514-9-11-museum-005.jpg"],
        description: "As one of the most significant moments in recent American history, the tragic events of September 11, 2001 changed New York City forever. Uncover this storied history of these somber events with this remembrance tour, complete with a visit to the National September 11 Memorial & Museum.",
        price: 110,
        duration: 5,
        userId:  "636d51715d29e99d62636bda"
    },
    {
        id: "ta5",
        cityId: "636d9804d8061af971997441",
        name: "Eiffel Tower Skip the Line and Small Group Tour with Summit Access by Elevator",
        photo: ["https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" , "https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg" , "https://media.traveler.es/photos/61376b0232d932c80fcb8d00/master/w_1600%2Cc_limit/144336.jpg"],
        description: "Queues for the Eiffel Tower can take over an hour at busy times but this skip-the-line tour lets you breeze past the crowds and enjoy priority access. Head straight up to the second floor and listen as your guide points out the Louvre, the Arc de Triomphe, and Notre Dame Cathedral. Finally, continue to the top floor on your own, where you can spend as long as you like admiring the views.",
        price: 80,
        duration: 1,
        userId:  "636d51715d29e99d62636bda"
    },
    {
        id: "ta6",
        cityId: "636d9804d8061af971997441",
        name: "Louvre Museum Skip-the-Line Guided Tour with Venus de Milo & Mona Lisa",
        photo: ["https://api-www.louvre.fr/sites/default/files/2021-01/cour-napoleon-et-pyramide_1.jpg" , "https://api-www.louvre.fr/sites/default/files/2021-01/aphrodite-dite-venus-de-milo.jpg" , "https://media.admagazine.com/photos/6294db9ef279f41a2db2b550/16:9/w_2560%2Cc_limit/GettyImages-1174275340.jpg"],
        description: "See the highlights at the Louvre with a guide, and gain a depth of understanding for famous works such as the 'Mona Lisa' and 'Venus de Milo.' This tour includes a skip-the-line admission ticket, which should save hours of waiting in line. Plus, you have the option of a morning or afternoon departure time to suit your schedule, or upgrade to a private tour.",
        price: 90,
        duration: 1,
        userId:  "636d51715d29e99d62636bda"
    },
    {
        id: "ta7",
        cityId: "636d9804d8061af971997442",
        name: "Half Day Winery Tour",
        photo: ["https://maalwines.com/wp-content/uploads/2022/02/vinedos-LASCOMPUERTAS.jpg" , "http://elportaldemendoza.com/wp-content/uploads/2014/03/bodega-Caro-Escorihuela.jpg" , "https://www.tangol.com/blog/Fotos/Notas/choosing-mendoza-wine-tours_2_202011301004160.PNG"],
        description: "Delve deeper into Mendoza's world-famous wine culture on a half-day tasting tour that's ideal is you're pressed for time. You'll visit several wineries to sample locally-grown varietals and discover what makes a great wine, without having to worry about driving between stops—instead, you can soak up views of rolling vineyards.",
        price: 42,
        duration: 6,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "ta8",
        cityId: "636d9804d8061af971997442",
        name: "Andes Day Horseback Riding Tour and BBQ",
        photo: ["https://maalwines.com/wp-content/uploads/2022/02/vinedos-LASCOMPUERTAS.jpg" , "http://elportaldemendoza.com/wp-content/uploads/2014/03/bodega-Caro-Escorihuela.jpg" , "https://i0.wp.com/diarioimagen.com.ar/wp-content/uploads/2019/04/Fiesta-Del-Costillar-Al-Asador-2.jpg?fit=960%2C720&ssl=1"],
        description: "Ride a horse through the fields and vineyards of the Uco Valley during this fully-day adventure from Mendoza. With your local guide, meet a group of gauchos, or traditional Argentine cowboys, in the town of El Manzano. Astride your friendly horse, trot through the valleys and across the mountainsides of the Andes. Arrive in Portezuelo de la Piedra Blanca to finish your ride with a traditional asado meal, prepared by the gauchos.",
        price: 190,
        duration: 8,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "ta9",
        cityId: "636d9804d8061af971997446",
        name: "Private All Inclusive: Giza Pyramids, Sphinx, Memphis, Saqqara, Lunch & Camels",
        photo: ["https://content.r9cdn.net/rimg/dimg/7e/a1/15f21580-city-9087-166e9cbaf88.jpg?crop=true&width=1020&height=498" , "https://cdn.britannica.com/85/99185-050-E1110E5C/Great-Sphinx-Giza-Egypt.jpg" , "https://www.worldhistory.org/img/c/p/1200x627/10167.jpg"],
        description: "Escape Giza’s persistent hawkers and enjoy three classic Egyptian experiences in just half a day on this convenient door-to-door tour. Learn about ancient Egypt from your private guide as you admire the three pyramids, the Sphinx, and the Valley Temple, pose for iconic photos, and cruise across the desert sands on camel-back. Enjoy your Egyptian lunch in a traditional restaurant.",
        price: 120,
        duration: 10,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "ta10",
        cityId: "636d9804d8061af971997446",
        name: "4x4 Desert Safari, Sandsurf, and Camel Ride in Cairo",
        photo: ["https://www.temehu.com/pictures1/p1/land-rover.jpg" , "https://www.ncl.com/sites/default/files/SGA_03NewTourAug13C_lg.jpg" , "https://media-cdn.tripadvisor.com/media/photo-s/0d/ed/f2/49/4x4-desert-safari-dubai.jpg"],
        description: "Discover the splendor of the Egyptian Desert, see the enticing Wadi El Rayan waterfalls, and marvel at the towering Mudawara Mountains. Then, enjoy action-packed dune bashing, sandboarding, and a beautiful camel ride on a full-day excursion from Cairo.",
        price: 155,
        duration: 10,
        userId:  "636d51715d29e99d62636bd7"
    },
    {
        id: "ta11",
        cityId: "636d9804d8061af971997444",
        name: "Private Full Day Sightseeing Tour to Mount Fuji and Hakone",
        photo: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Chuurei-tou_Fujiyoshida_17025277650_c59733d6ba_o.jpg/1200px-Chuurei-tou_Fujiyoshida_17025277650_c59733d6ba_o.jpg" , "https://media.traveler.es/photos/613774b3ccdecaa3de67194d/4:3/w_1600,h_1200,c_limit/112944.jpg" , "https://laverdadnoticias.com/__export/1563060283348/sites/laverdad/img/2019/07/13/fuji_hakone_izux_el_parque_emblemxtico_de_japxnx_1.jpg_554688468.jpg"],
        description: "Check out one of Japan's most beautiful, iconic destinations—Mt. Fuji—on this convenient day tour from Tokyo. Visit several places in the Fuji area from where you can get beautiful views of the mountain (weather permitting), including Hakone, Lake Kawaguchi, the 5th Station on Mt. Fuji, and more. As this is a private tour, you can customize the itinerary to suit your own interests.",
        price: 500,
        duration: 10,
        userId:  "636d51715d29e99d62636bd7"
    },
    {
        id: "ta12",
        cityId: "636d9804d8061af971997444",
        name: "Go-kart tour Shinjuku drive metroporitan area",
        photo: ["https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2018/05/Mario-Kart-Tokyo-by-VG.jpg" , "https://www.japanrailpassnow.com/wp-content/uploads/2017/09/Mario-Carts-Tokyo.jpg" , "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg"],
        description: "Visitors to Tokyo seeking a fun and quirky experience should look no further than this go-kart tour of Shinjuku. To make sure you stand out from the crowds even further you can don a cartoon character costume for your ride. This is an ideal way to have fun with friends while seeing the sights and making memories you’ll never forget.",
        price: 135,
        duration: 2,
        userId:  "636d51715d29e99d62636bd7"
    },
    
]

require ('dotenv').config()
require('../../config/database')
const Itinerary = require('../Itinerary')

itineraries.forEach(elemento =>{
    Itinerary.create({
    cityId:elemento.cityId,
    name: elemento.name,
    photo:elemento.photo,
    description:elemento.description,
    price: elemento.price,
    duration: elemento.duration,
    userId: elemento.userId,
})
})