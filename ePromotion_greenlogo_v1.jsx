/* ePromotion v1.7.6 — 2026-03-19 · Get App: iOS/Android toggle moved above content */
import { useState, useRef, useEffect } from "react";
var AD1="url(https://placehold.co/320x640/eeeeee/999999?text=Phone)";
var AD2="url(https://placehold.co/320x640/eeeeee/999999?text=Phone)";
var AD3="url(https://placehold.co/320x640/eeeeee/999999?text=Phone)";
var TE_FD_BK2="url(https://i.imgur.com/kAyw2sy.jpeg)";
var TE_BT_PAL="url(https://i.imgur.com/thBOokh.jpeg)";
var TE_FLAT1="url(https://i.imgur.com/qglhF1U.jpeg)";
var TE_FLAT2="url(https://i.imgur.com/8eaB5HY.jpeg)";
var TE_FLAT3="url(https://i.imgur.com/adibOf8.jpeg)";
var TE_FLAT4="url(https://i.imgur.com/kAyw2sy.jpeg)";
var TE_MOD1="url(https://i.imgur.com/sMM7BBC.jpeg)";
var TE_MOD2="url(https://i.imgur.com/qglhF1U.jpeg)";

var FD_PM1="url(https://i.imgur.com/GlaLGZu.jpeg)";
var FD_PM2="url(https://i.imgur.com/eB9KbYs.jpeg)";
var FD_SB1="url(https://i.imgur.com/6c3GOzq.jpeg)";
var FD_SB2="url(https://i.imgur.com/HhqWLDC.jpeg)";
var FD_SB3="url(https://i.imgur.com/2ZCZ0A3.jpeg)";
var FD_SB4="url(https://i.imgur.com/6c3GOzq.jpeg)";
var FD_BK1="url(https://i.imgur.com/uTVdwBH.jpeg)";
var FD_BK2="url(https://i.imgur.com/9MpJ8Ob.jpeg)";
var FD_BK3="url(https://i.imgur.com/eB9KbYs.jpeg)";
var FD_BK4="url(https://i.imgur.com/uTVdwBH.jpeg)";

var BT_LIP1="url(https://i.imgur.com/hIB4D6H.jpeg)";
var BT_LIP2="url(https://i.imgur.com/sMM7BBC.jpeg)";
var BT_BROW1="url(https://i.imgur.com/thBOokh.jpeg)";
var BT_BROW2="url(https://i.imgur.com/hIB4D6H.jpeg)";
var BT_LINER="url(https://i.imgur.com/adibOf8.jpeg)";
var BT_PAL="url(https://i.imgur.com/thBOokh.jpeg)";
var BT_SER1="url(https://i.imgur.com/sMM7BBC.jpeg)";
var BT_SER2="url(https://i.imgur.com/hIB4D6H.jpeg)";
var BT_MASK="url(https://i.imgur.com/adibOf8.jpeg)";

var IMG_PASTAMANIA="url(https://i.imgur.com/0HaOz8Z.jpeg)";
var IMG_YADAH1="url(https://i.imgur.com/qglhF1U.jpeg)";
var IMG_PEANUTOIL="url(https://i.imgur.com/adibOf8.jpeg)";
var IMG_MOONLIGHT="url(https://i.imgur.com/6c3GOzq.jpeg)";
var IMG_LUCKY="url(https://i.imgur.com/uTVdwBH.jpeg)";
var IMG_BIGAPPLE="url(https://i.imgur.com/eB9KbYs.jpeg)";
var IMG_ETUDE="url(https://i.imgur.com/thBOokh.jpeg)";
var IMG_YADAH2="url(https://i.imgur.com/sMM7BBC.jpeg)";
var IMG_COLDSTONE="url(https://i.imgur.com/2ZCZ0A3.jpeg)";
var IMG_RYIN="url(https://i.imgur.com/kAyw2sy.jpeg)";
var IMG_BIODERMA="url(https://i.imgur.com/hIB4D6H.jpeg)";
var IMG_CELLCARD="url(https://i.imgur.com/OTcB6Dh.jpeg)";
var IMG_TUBE="url(https://i.imgur.com/HhqWLDC.jpeg)";
var IMG_HONDA="url(https://i.imgur.com/ld3ngK6.jpeg)";
var IMG_PAPAS="url(https://i.imgur.com/GlaLGZu.jpeg)";
var IMG_NKWATCH="url(https://i.imgur.com/7FvxLil.jpeg)";
var IMG_CHARLESKEITH="url(https://i.imgur.com/8eaB5HY.jpeg)";
var IMG_PARKCAFE="url(https://i.imgur.com/6c3GOzq.jpeg)";
var IMG_G2000="url(https://i.imgur.com/kAyw2sy.jpeg)";
var IMG_SWAROVSKI="url(https://i.imgur.com/thBOokh.jpeg)";
var IMG_JBLFLEX="url(https://i.imgur.com/OTcB6Dh.jpeg)";
var IMG_STIEBEL="url(https://i.imgur.com/adibOf8.jpeg)";
var IMG_HUAWEIPURA="url(https://i.imgur.com/7FvxLil.jpeg)";
var IMG_ALIENWARE="url(https://i.imgur.com/8eaB5HY.jpeg)";
var IMG_HUAWEIVAL="url(https://i.imgur.com/ld3ngK6.jpeg)";
var IMG_JBLLIVE="url(https://i.imgur.com/HhqWLDC.jpeg)";
var IMG_HUAWEIALL="url(https://i.imgur.com/uTVdwBH.jpeg)";
var IMG_ACERAIO="url(https://i.imgur.com/eB9KbYs.jpeg)";
var IMG_NECPROJ="url(https://i.imgur.com/sMM7BBC.jpeg)";
var IMG_TECNO="url(https://i.imgur.com/2ZCZ0A3.jpeg)";
/* Jony Ive Edition v6 — Hierarchy, darkness, breath */

const BASE=[
  // ── HERO DEALS ────────────────────────────────────────────────────────
  {id:400,title:"Street Food Platter 40% Off",store:"Night Market KH",desc:"Grilled skewers, fresh spring rolls, fried rice and local snacks. Authentic Cambodian street food experience.",price:5.99,orig:10,dc:40,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/lqvJeVh.jpeg)",feat:true,_promoted:true,loc:"Night Market, Riverside",hrs:"5PM – 11PM",terms:"Dine-in only. While stocks last.",sl:[{g:"url(https://i.imgur.com/lqvJeVh.jpeg)"}]},
  {id:401,title:"Fresh Bowl Deal 35% Off",store:"Healthy Bites KH",desc:"Nourishing fresh bowl with rice, greens, protein and house sauce. Clean eating made easy and affordable.",price:3.99,orig:6.50,dc:39,cat:"Food",expires:"7d",img:"url(https://i.imgur.com/pGzXM03.jpeg)",feat:true,_promoted:true,loc:"BKK1, PP",hrs:"10AM – 8PM",terms:"Dine-in or takeaway.",sl:[{g:"url(https://i.imgur.com/pGzXM03.jpeg)"}]},
  {id:402,title:"Smartphone 30% Off",store:"Tech Zone KH",desc:"Latest Android smartphone with powerful camera, fast processor and all-day battery. Free case included.",price:189,orig:270,dc:30,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/Bg6ehix.jpeg)",feat:true,_promoted:true,loc:"Aeon Mall PP",hrs:"9AM – 9PM",terms:"While stocks last. 1-year warranty.",sl:[{g:"url(https://i.imgur.com/Bg6ehix.jpeg)"}]},
  {id:403,title:"Smart Gadget Deal 25% Off",store:"Digital Hub KH",desc:"Premium tech gadget with smart features. Perfect for work and lifestyle. Limited Khmer New Year offer.",price:75,orig:100,dc:25,cat:"Technology",expires:"10d",img:"url(https://i.imgur.com/6ZdU859.jpeg)",feat:true,_promoted:true,loc:"TK Mall PP",hrs:"9AM – 8PM",terms:"While stocks last. T&C apply.",sl:[{g:"url(https://i.imgur.com/6ZdU859.jpeg)"}]},
  {id:404,title:"New Collection 50% Off",store:"Fashion KH",desc:"Fresh season drop — oversized fits, clean silhouettes. Tees, pants, jackets. Limited pieces available.",price:15,orig:30,dc:50,cat:"Fashion",expires:"5d",img:"url(https://i.imgur.com/t4ot4FN.jpeg)",feat:true,_promoted:true,loc:"BKK1, Street 240",hrs:"10AM – 9PM",terms:"Selected items. In-store only.",sl:[{g:"url(https://i.imgur.com/t4ot4FN.jpeg)"}]},
  {id:405,title:"Summer Outfit Set 45% Off",store:"Style Studio KH",desc:"Complete outfit set — top and bottom. Breathable fabric, modern cut. Perfect for Phnom Penh weather.",price:18,orig:33,dc:45,cat:"Fashion",expires:"7d",img:"url(https://i.imgur.com/0sugZvy.jpeg)",feat:true,_promoted:true,loc:"Sorya Shopping Center",hrs:"10AM – 9PM",terms:"While stocks last. Mix and match.",sl:[{g:"url(https://i.imgur.com/0sugZvy.jpeg)"}]},
  // ── FOOD ──────────────────────────────────────────────────────────────
  {id:320,title:"Stuffed Bread 50% Off",store:"Pong",desc:"Signature stuffed bread with crab, seafood and chicken fillings. Crispy outside, soft inside.",price:2.50,orig:5,dc:50,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/0HaOz8Z.jpeg)",feat:true,_promoted:true,loc:"Sorya Shopping Center",hrs:"9AM – 9PM",terms:"Dine-in only. While stocks last.",sl:[{g:"url(https://i.imgur.com/0HaOz8Z.jpeg)"}]},
  {id:321,title:"$5 Off Groceries — Code CM5OFF",store:"Chip Mong Supermarket",desc:"$5 off your purchase of $25 or more. Valid on all grocery items storewide.",price:20,orig:25,dc:20,cat:"Food",expires:"7d",img:"url(https://i.imgur.com/qglhF1U.jpeg)",feat:true,loc:"All Chip Mong branches",hrs:"7AM – 10PM",terms:"Min spend $25. One coupon per visit.",sl:[{g:"url(https://i.imgur.com/qglhF1U.jpeg)"}]},
  {id:322,title:"Cheesecake 30% Off",store:"Castella Cheesecake",desc:"Japanese-style castella cheesecake in original and chocolate. Soft, fluffy, melt-in-mouth texture.",price:6.50,orig:10,dc:35,cat:"Food",expires:"7d",img:"url(https://i.imgur.com/adibOf8.jpeg)",feat:true,loc:"Phnom Penh branches",hrs:"9AM – 9PM",terms:"Via Foodpanda. PandaPro gets 35%.",sl:[{g:"url(https://i.imgur.com/adibOf8.jpeg)"}]},
  {id:323,title:"Coffee + Croissant Combo",store:"Twenty First Bakery",desc:"Any iced coffee with a freshly baked croissant free. Homemade quality every morning.",price:3,orig:5.50,dc:45,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/6c3GOzq.jpeg)",feat:true,loc:"Twenty First Bakery PP",hrs:"7AM – 8PM",terms:"One croissant per coffee order.",sl:[{g:"url(https://i.imgur.com/6c3GOzq.jpeg)"}]},
  {id:324,title:"60% Off Burger Combo",store:"Carl's Jr",desc:"60% off chicken or beef burger set with waffle fries and Coca-Cola. PandaPro exclusive.",price:4.80,orig:12,dc:60,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/uTVdwBH.jpeg)",feat:true,_promoted:true,loc:"All Carl's Jr branches",hrs:"10AM – 10PM",terms:"PandaPro via Foodpanda. T&C apply.",sl:[{g:"url(https://i.imgur.com/uTVdwBH.jpeg)"}]},
  {id:325,title:"Donuts Buy 1 Get 1 Free",store:"Big Apple Donuts",desc:"Buy 1 get 1 free on all donuts. Chocolate, pink glaze, matcha, tiramisu and more.",price:2.50,orig:5,dc:50,cat:"Food",expires:"3d",img:"url(https://i.imgur.com/eB9KbYs.jpeg)",feat:true,_promoted:true,loc:"All Big Apple branches PP",hrs:"10AM – 9PM",terms:"PandaPro PRO only. Mar 23–25.",sl:[{g:"url(https://i.imgur.com/eB9KbYs.jpeg)"}]},
  {id:326,title:"Pizza 60% Off",store:"Yellow Cab Pizza Co.",desc:"60% off all sizes — stuffed crust seafood, chicken, and pepperoni. Best pizza in town.",price:6,orig:15,dc:60,cat:"Food",expires:"3d",img:"url(https://i.imgur.com/thBOokh.jpeg)",feat:true,_promoted:true,loc:"All Yellow Cab branches",hrs:"10AM – 10PM",terms:"Foodpanda PandaPro only. Mar 23–27.",sl:[{g:"url(https://i.imgur.com/thBOokh.jpeg)"}]},
  {id:331,title:"Iced Coffee 2 for $3",store:"Brew House",desc:"Buy 2 iced coffees for only $3. Smooth cold brew, iced latte or Vietnamese style. Refreshing daily deal.",price:3,orig:6,dc:50,cat:"Food",expires:"3d",img:"url(https://i.imgur.com/p7gi6jw.jpeg)",loc:"Multiple branches PP",hrs:"7AM – 9PM",terms:"Any 2 drinks. Dine-in or takeaway.",sl:[{g:"url(https://i.imgur.com/p7gi6jw.jpeg)"}]},
  {id:332,title:"Fresh Juice Bundle $4",store:"Green Bowl",desc:"Any 2 fresh fruit juices for $4. Cold-pressed, no sugar added. Mango, watermelon, passionfruit and more.",price:4,orig:8,dc:50,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/YKEAvmU.jpeg)",loc:"Green Bowl PP",hrs:"8AM – 8PM",terms:"Any 2 cold-pressed juices.",sl:[{g:"url(https://i.imgur.com/YKEAvmU.jpeg)"}]},
  {id:333,title:"BBQ Set 40% Off",store:"Grill & Go",desc:"BBQ pork, chicken wings, corn and dipping sauces. Perfect for sharing. Limited daily portions.",price:9.99,orig:16,dc:38,cat:"Food",expires:"7d",img:"url(https://i.imgur.com/hJUqsAo.jpeg)",loc:"Grill & Go, BKK1",hrs:"5PM – 10PM",terms:"Advance order recommended.",sl:[{g:"url(https://i.imgur.com/hJUqsAo.jpeg)"}]},
  {id:334,title:"Peanut Oil 30% Off",store:"Healthy Earth",desc:"100% pure Cambodian peanut oil, trans fat free. Available in 2L, 1L, 500ml. Made locally.",price:5.50,orig:8,dc:31,cat:"Food",expires:"30d",img:"url(https://i.imgur.com/4QMaxV0.jpeg)",loc:"Nationwide delivery",hrs:"8AM – 5PM",terms:"Order via phone. Delivery available.",sl:[{g:"url(https://i.imgur.com/4QMaxV0.jpeg)"}]},
  {id:335,title:"Ice Cream 50% Off",store:"Cold Stone Creamery",desc:"All sizes half price. Mix your own creation with toppings. Mine, Ours and Everybody's sizes.",price:4.08,orig:8.15,dc:50,cat:"Food",expires:"5d",img:"url(https://i.imgur.com/6lKt3jv.jpeg)",feat:true,loc:"AEON Mall Mean Chey",hrs:"10AM – 9PM",terms:"Dine-in only. While stocks last.",sl:[{g:"url(https://i.imgur.com/6lKt3jv.jpeg)"}]},

  // ── BEAUTY & COSMETICS ────────────────────────────────────────────────
  {id:340,title:"Skincare Bundle 46% Off",store:"Glow Studio",desc:"Complete skincare set — cleansing foam, serum, moisturiser and eye patch. K-beauty inspired routine.",price:28,orig:52,dc:46,cat:"Beauty",expires:"14d",img:"url(https://i.imgur.com/hzSaAQL.jpeg)",feat:true,loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"Bundle deal. While stocks last.",sl:[{g:"url(https://i.imgur.com/hzSaAQL.jpeg)"}]},
  {id:341,title:"Lip Tint Collection 30% Off",store:"Beauty Lab KH",desc:"Velvet and glossy lip tints in 8 shades — rose, peach, berry, coral. Long-lasting K-beauty formula.",price:8,orig:12,dc:33,cat:"Beauty",expires:"7d",img:"url(https://i.imgur.com/Wm7ObLy.jpeg)",feat:true,loc:"BKK1, Street 294",hrs:"10AM – 8PM",terms:"Mix and match shades. While stocks last.",sl:[{g:"url(https://i.imgur.com/Wm7ObLy.jpeg)"}]},
  {id:342,title:"Glow Serum 36% Off",store:"Skin Kh",desc:"Brightening serum with rice extract and alpha-arbutin. Anti-aging, hydrating Korean skincare for daily use.",price:14,orig:22,dc:36,cat:"Beauty",expires:"10d",img:"url(https://i.imgur.com/2PxA8kv.jpeg)",feat:true,loc:"TK, Street 109",hrs:"9AM – 8PM",terms:"Selected variants. While stocks last.",sl:[{g:"url(https://i.imgur.com/2PxA8kv.jpeg)"}]},
  {id:343,title:"BB Cream SPF30 33% Off",store:"K-Beauty Store",desc:"Vegan BB cream SPF30 in 3 shades — Fair, Natural, Medium. Lightweight all-day coverage.",price:12,orig:18,dc:33,cat:"Beauty",expires:"14d",img:"url(https://i.imgur.com/SnCTdSB.jpeg)",loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"All shades available. While stocks last.",sl:[{g:"url(https://i.imgur.com/SnCTdSB.jpeg)"}]},
  {id:344,title:"Eye Palette + Liner Set 40% Off",store:"Glam KH",desc:"10-shade eye palette with precision liner. Mix cool and warm tones. Gift-boxed with mini mirror.",price:18,orig:30,dc:40,cat:"Beauty",expires:"5d",img:"url(https://i.imgur.com/GU1AAtR.jpeg)",feat:true,loc:"TK, Street 109",hrs:"9AM – 8PM",terms:"While stocks last. One per person.",sl:[{g:"url(https://i.imgur.com/GU1AAtR.jpeg)"}]},
  {id:345,title:"Moisturizer Cactus Cream 36% Off",store:"Pure Beauty",desc:"Cactus cream moisturizer 50ml. Lightweight, non-greasy. Perfect for tropical climate. Hydrates all day.",price:14,orig:22,dc:36,cat:"Beauty",expires:"14d",img:"url(https://i.imgur.com/lFS68R4.jpeg)",loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"While stocks last.",sl:[{g:"url(https://i.imgur.com/lFS68R4.jpeg)"}]},

  // ── FASHION ───────────────────────────────────────────────────────────
  {id:360,title:"Casual Tee 50% Off",store:"Street Style KH",desc:"Oversized graphic tee in cotton. Bold prints, unisex sizing. Black, white and olive available.",price:9,orig:18,dc:50,cat:"Fashion",expires:"7d",img:"url(https://i.imgur.com/SnCTdSB.jpeg)",feat:true,loc:"BKK1, Street 240",hrs:"10AM – 9PM",terms:"Selected sizes. While stocks last.",sl:[{g:"url(https://i.imgur.com/SnCTdSB.jpeg)"}]},
  {id:361,title:"Denim Jacket 40% Off",store:"Urban Wear KH",desc:"Classic denim jacket, relaxed fit. Versatile everyday piece — wear over anything.",price:24,orig:40,dc:40,cat:"Fashion",expires:"14d",img:"url(https://i.imgur.com/qglhF1U.jpeg)",feat:true,loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"Selected sizes. While stocks last.",sl:[{g:"url(https://i.imgur.com/qglhF1U.jpeg)"}]},
  {id:362,title:"Summer Dress 35% Off",store:"Blossom KH",desc:"Flowy summer dress in floral and solid prints. Lightweight fabric, perfect for Phnom Penh weather.",price:16,orig:25,dc:36,cat:"Fashion",expires:"7d",img:"url(https://i.imgur.com/adibOf8.jpeg)",feat:true,loc:"Toul Tom Poung",hrs:"10AM – 8PM",terms:"All sizes available. While stocks last.",sl:[{g:"url(https://i.imgur.com/adibOf8.jpeg)"}]},
  {id:363,title:"Cargo Pants 45% Off",store:"Street Style KH",desc:"Relaxed fit cargo pants with side pockets. Durable cotton twill. Khaki, black and grey.",price:14,orig:26,dc:46,cat:"Fashion",expires:"14d",img:"url(https://i.imgur.com/6c3GOzq.jpeg)",loc:"BKK1, Street 240",hrs:"10AM – 9PM",terms:"Selected sizes. While stocks last.",sl:[{g:"url(https://i.imgur.com/6c3GOzq.jpeg)"}]},
  {id:364,title:"Polo Shirt Bundle — 2 for $25",store:"Classic Men KH",desc:"2 premium cotton polo shirts. Embroidered logo, smart casual. Available in 6 colors.",price:25,orig:45,dc:44,cat:"Fashion",expires:"14d",img:"url(https://i.imgur.com/uTVdwBH.jpeg)",feat:true,_promoted:true,loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"Pick any 2 colors. While stocks last.",sl:[{g:"url(https://i.imgur.com/uTVdwBH.jpeg)"}]},
  {id:365,title:"Sneakers 50% Off",store:"Sole KH",desc:"Lightweight everyday sneakers in white and black. Breathable mesh upper, cushioned sole.",price:22,orig:45,dc:51,cat:"Fashion",expires:"5d",img:"url(https://i.imgur.com/eB9KbYs.jpeg)",feat:true,_promoted:true,loc:"Sorya Shopping Center",hrs:"10AM – 9PM",terms:"Selected sizes. While stocks last.",sl:[{g:"url(https://i.imgur.com/eB9KbYs.jpeg)"}]},
  // ── TECHNOLOGY ────────────────────────────────────────────────────────
  {id:327,title:"SoundPeats Air5 Lite — $35",store:"SoundPeats Cambodia",desc:"Hi-Res Audio LDAC wireless earbuds. 15-hour battery, fast charge 2×, find my earbuds. Free delivery.",price:35,orig:58,dc:40,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/sMM7BBC.jpeg)",feat:true,_promoted:true,loc:"Nationwide delivery",hrs:"8AM – 6PM",terms:"Free delivery. Khmer New Year 2026.",sl:[{g:"url(https://i.imgur.com/sMM7BBC.jpeg)"}]},
  {id:328,title:"SoundPeats ClearPods — $19",store:"SoundPeats Cambodia",desc:"True wireless earbuds, Bluetooth 5.3, 47-hour total battery, PeatsAudio app. Free delivery.",price:19,orig:29,dc:34,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/2ZCZ0A3.jpeg)",feat:true,loc:"Nationwide delivery",hrs:"8AM – 6PM",terms:"Free delivery. While stocks last.",sl:[{g:"url(https://i.imgur.com/2ZCZ0A3.jpeg)"}]},
  {id:329,title:"SoundPeats Space Pro — $49",store:"SoundPeats Cambodia",desc:"Hybrid ANC headset -47dB, 151-hour battery, LDAC, 360° spatial sound. Free delivery.",price:49,orig:89,dc:45,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/kAyw2sy.jpeg)",feat:true,_promoted:true,loc:"Nationwide delivery",hrs:"8AM – 6PM",terms:"Free delivery. Khmer New Year 2026.",sl:[{g:"url(https://i.imgur.com/kAyw2sy.jpeg)"}]},
  {id:330,title:"Tribit PocketGo Speaker — $17",store:"Tribit Cambodia",desc:"7W IP68 waterproof speaker, 20-hour battery, 360° immersive sound. Fits in your pocket.",price:17,orig:29,dc:41,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/hIB4D6H.jpeg)",feat:true,_promoted:true,loc:"Nationwide delivery",hrs:"8AM – 6PM",terms:"Free delivery. Black, teal, green.",sl:[{g:"url(https://i.imgur.com/hIB4D6H.jpeg)"}]},
  {id:350,title:"Smart Watch 45% Off",store:"Tech Kh",desc:"Stylish smartwatch with health tracking, heart rate monitor, sleep tracker. Works with iOS and Android.",price:35,orig:65,dc:46,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/OTcB6Dh.jpeg)",feat:true,_promoted:true,loc:"TK Mall, PP",hrs:"9AM – 8PM",terms:"While stocks last. Warranty 1 year.",sl:[{g:"url(https://i.imgur.com/OTcB6Dh.jpeg)"}]},
  {id:351,title:"Wireless Earbuds $9.99",store:"SmartBuy KH",desc:"TWS earbuds Bluetooth 5.3, touch control, 30-hour total battery. IPX4 sweatproof. Compact charging case.",price:9.99,orig:25,dc:60,cat:"Technology",expires:"7d",img:"url(https://i.imgur.com/HhqWLDC.jpeg)",feat:true,loc:"Multiple locations",hrs:"9AM – 9PM",terms:"",sl:[{g:"url(https://i.imgur.com/HhqWLDC.jpeg)"}]},
  {id:352,title:"Gaming Laptop Deal",store:"PTC Computer",desc:"High-performance gaming laptop with RTX graphics, fast SSD, and QHD display. Limited CNY offer.",price:899,orig:1199,dc:25,cat:"Technology",expires:"7d",img:"url(https://i.imgur.com/8AVOFv1.jpeg)",_promoted:true,loc:"PTC Computer shops",hrs:"8AM – 6PM",terms:"While stocks last. T&C apply.",sl:[{g:"url(https://i.imgur.com/8AVOFv1.jpeg)"}]},
  {id:353,title:"Phone Deal from $129",store:"NK Tita",desc:"Latest Android phone with 12GB RAM, 128GB storage, AI camera. 4 colors available. Free gifts.",price:129,orig:159,dc:19,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/ld3ngK6.jpeg)",_promoted:true,loc:"NK Tita shops",hrs:"9AM – 8PM",terms:"Gifts included. While stocks last.",sl:[{g:"url(https://i.imgur.com/ld3ngK6.jpeg)"}]},
  {id:354,title:"ANC Headphones 37% Off",store:"Nano Sound",desc:"Over-ear headphones with active noise cancelling, 98-hour battery, Bluetooth 5.3. Lightweight 256g.",price:107,orig:169,dc:37,cat:"Technology",expires:"5d",img:"url(https://i.imgur.com/7FvxLil.jpeg)",_promoted:true,loc:"NTX Mall App",hrs:"9AM – 8PM",terms:"Via NTX Mall app. While stocks last.",sl:[{g:"url(https://i.imgur.com/7FvxLil.jpeg)"}]},
  {id:355,title:"Fashion Smartwatch $285",store:"NK Tita",desc:"Stylish smartwatch with health sensors, GPS, and designer band. Multiple sizes and colors.",price:285,orig:350,dc:19,cat:"Technology",expires:"14d",img:"url(https://i.imgur.com/8eaB5HY.jpeg)",_promoted:true,loc:"NK Tita shops",hrs:"9AM – 8PM",terms:"While stocks last. Free gifts.",sl:[{g:"url(https://i.imgur.com/8eaB5HY.jpeg)"}]},
  {id:356,title:"Bluetooth Speaker 40% Off",store:"Nano Sound",desc:"Portable waterproof Bluetooth speaker. 10-hour battery, IP67 rated. Clip anywhere.",price:28,orig:48,dc:42,cat:"Technology",expires:"3d",img:"url(https://i.imgur.com/9MpJ8Ob.jpeg)",loc:"Aeon Mall PP",hrs:"10AM – 9PM",terms:"Selected colors. While stocks last.",sl:[{g:"url(https://i.imgur.com/9MpJ8Ob.jpeg)"}]},
];

var URG=function(d){return d.expires==="1d"||d.expires==="2d";};

var LOGO_BURGERKING="https://i.imgur.com/HFutnjV.png";
var LOGO_ADIDAS="https://i.imgur.com/oJHje9U.png";
var LOGO_NIKE="https://i.imgur.com/hjBRiJn.png";
var LOGO_UNILEVER="https://i.imgur.com/DASjOYf.png";
var LOGO_APPLE="https://i.imgur.com/Ste9jud.png";
var LOGO_MCDONALDS="https://i.imgur.com/HFutnjV.png";
var LOGO_SKINURI="https://i.imgur.com/oJHje9U.png";
var LOGO_ULOGO="https://i.imgur.com/hjBRiJn.png";
var LOGO_AEONMALL="https://i.imgur.com/DASjOYf.png";
var LOGO_LUCKY="https://i.imgur.com/Ste9jud.png";
function MiniCard({d,onClick,dark}){
  return <div onClick={function(){onClick(d);}} className="scroll-card-sm" style={{width:180,flexShrink:0,cursor:"pointer",background:dark?"#2C2C2E":"#F4F3F0",borderRadius:14,overflow:"hidden",transition:"transform .5s cubic-bezier(.22,1,.36,1),box-shadow .5s cubic-bezier(.22,1,.36,1)"}} onMouseEnter={function(e){e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.1)";}} onMouseLeave={function(e){e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
    <div style={{height:110,background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
    <div style={{padding:"12px 14px 14px"}}>
      <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"1px",textTransform:"uppercase",marginBottom:5}}>{d.store}</p>
      <p style={{fontSize:12,fontWeight:400,color:dark?"#F4F3F0":"#1D1D1F",lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden",marginBottom:6}}>{d.title}</p>
      <span style={{fontSize:14,fontWeight:500,color:dark?"#F4F3F0":"#1D1D1F"}}>${d.price.toFixed(2)}</span>
    </div>
  </div>;
}

/* ScrollRow — horizontal scroll with page indicator dots */
function ScrollRow({children,dark,cardWidth,noDots}){
  var ref=useRef(null);
  var[cur,sCur]=useState(0);
  var[total,sTotal]=useState(1);
  var[hovered,sHovered]=useState(false);
  var cw=cardWidth||276;
  function calc(){
    var el=ref.current;if(!el)return;
    var visible=Math.max(1,Math.floor(el.clientWidth/cw));
    var items=Math.max(1,Math.round(el.scrollWidth/cw));
    var pages=Math.max(1,Math.ceil(items/visible));
    sTotal(pages);
    var pg=Math.round(el.scrollLeft/(visible*cw));
    sCur(Math.min(pg,pages-1));
  }
  useEffect(function(){calc();window.addEventListener("resize",calc);return function(){window.removeEventListener("resize",calc);};},[]);
  function goTo(pg){
    var el=ref.current;if(!el)return;
    var visible=Math.max(1,Math.floor(el.clientWidth/cw));
    el.scrollTo({left:pg*visible*cw,behavior:"smooth"});
  }
  var ink=dark?"#F4F3F0":"#1D1D1F";
  var atStart=cur===0;
  var atEnd=cur>=total-1;
  var arrowStyle={position:"absolute",top:"50%",transform:"translateY(-50%)",width:36,height:36,borderRadius:"50%",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"),boxShadow:"0 2px 12px rgba(0,0,0,"+(dark?"0.35":"0.12")+")",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity .2s ease, transform .2s ease",zIndex:10};
  return <div style={{position:"relative"}} onMouseEnter={function(){sHovered(true);}} onMouseLeave={function(){sHovered(false);}}>
    {total>1?<button disabled={atStart} onClick={function(e){e.stopPropagation();if(!atStart)goTo(cur-1);}} style={Object.assign({},arrowStyle,{left:-14,opacity:hovered?(atStart?0.25:1):0,background:dark?"rgba(30,30,32,0.85)":"rgba(255,255,255,0.92)",cursor:atStart?"default":"pointer",color:ink})} onMouseEnter={function(e){if(!atStart)e.currentTarget.style.transform="translateY(-50%) scale(1.08)";}} onMouseLeave={function(e){e.currentTarget.style.transform="translateY(-50%) scale(1)";}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>:null}
    <div ref={ref} className="scroll-hide" onScroll={calc} style={{display:"flex",gap:16,overflowX:"auto",scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch",paddingBottom:4}}>
      {children}
      <div style={{flexShrink:0,width:24}}></div>
    </div>
    {total>1?<button disabled={atEnd} onClick={function(e){e.stopPropagation();if(!atEnd)goTo(cur+1);}} style={Object.assign({},arrowStyle,{right:-14,opacity:hovered?(atEnd?0.25:1):0,background:dark?"rgba(30,30,32,0.85)":"rgba(255,255,255,0.92)",cursor:atEnd?"default":"pointer",color:ink})} onMouseEnter={function(e){if(!atEnd)e.currentTarget.style.transform="translateY(-50%) scale(1.08)";}} onMouseLeave={function(e){e.currentTarget.style.transform="translateY(-50%) scale(1)";}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>:null}
    {total>1&&!noDots?<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:5,marginTop:10}}>
      {Array.from({length:total},function(_,i){
        var active=i===cur;
        return <div key={i} onClick={function(){goTo(i);}} style={{width:active?20:6,height:6,borderRadius:980,background:active?"#27B147":"rgba(0,0,0,0.14)",opacity:dark?(active?1:0.35):(active?1:0.5),transition:"all .35s cubic-bezier(.22,1,.36,1)",cursor:"pointer",flexShrink:0}}></div>;
      })}
    </div>:null}
  </div>;
}

function Detail({deal,onClose,onNav,saved,onSave,dark,onChat,following,onFollow,onStore,account}){
  var sv=saved&&saved.has(deal.id);
  var[pi,sPi]=useState(0);var[vis,sVis]=useState(false);
  var[detCols,sDetCols]=useState(function(){var w=window.innerWidth;return w<=640?2:3;});
  var sl=deal.sl;
  var isImg=function(d){return typeof d.img==="string"&&d.img.indexOf("url(https://i.imgur.com")===0;};
  var more=BASE.filter(function(x){return x.store===deal.store&&x.id!==deal.id&&isImg(x);});
  if(more.length<5)more=more.concat(BASE.filter(function(x){return x.cat===deal.cat&&x.id!==deal.id&&more.indexOf(x)===-1&&isImg(x);}));
  if(more.length<10)more=more.concat(BASE.filter(function(x){return x.id!==deal.id&&more.indexOf(x)===-1&&isImg(x);}).sort(function(){return 0.5-Math.random();}));
  more=more.slice(0,25);
  var[transit,sTransit]=useState(false);
  var scrollRef=useRef(null);
  var go=function(d){sTransit(true);setTimeout(function(){sPi(0);if(scrollRef.current)scrollRef.current.scrollTop=0;onNav(d);sTransit(false);},250);};
  var bg=dark?"#1C1C1E":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var bd=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";var sub="#8A8884";var mt=dark?"#48484A":"#D4D2CD";

  useEffect(function(){requestAnimationFrame(function(){requestAnimationFrame(function(){sVis(true);});});},[]);
  useEffect(function(){var upd=function(){var w=window.innerWidth;sDetCols(w<=640?2:3);};window.addEventListener("resize",upd);return function(){window.removeEventListener("resize",upd);};},[]);
  useEffect(function(){var h=function(e){if(e.key==="Escape")doClose();if(e.key==="ArrowLeft"&&sl.length>1)sPi(function(p){return p>0?p-1:sl.length-1;});if(e.key==="ArrowRight"&&sl.length>1)sPi(function(p){return p<sl.length-1?p+1:0;});};window.addEventListener("keydown",h);return function(){window.removeEventListener("keydown",h);};},[]);

  var doClose=function(){sVis(false);setTimeout(onClose,350);};
  var prevImg=function(e){e.stopPropagation();sPi(function(p){return p>0?p-1:sl.length-1;});};
  var nextImg=function(e){e.stopPropagation();sPi(function(p){return p<sl.length-1?p+1:0;});};
  var arrowBtn={position:"absolute",top:"50%",transform:"translateY(-50%)",width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.5)",boxShadow:"0 1px 8px rgba(0,0,0,0.12)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(0,0,0,0.5)",transition:"all .3s",zIndex:5};

  return <div onClick={doClose} style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50,background:vis?(dark?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.12)"):"transparent",transition:"background .4s ease"}}>
    <div onClick={function(e){e.stopPropagation();}} className="det-panel" style={{position:"absolute",top:0,right:0,bottom:0,width:"50%",maxWidth:700,minWidth:380,background:bg,boxShadow:vis?"-1px 0 0 "+bd+", -16px 0 48px rgba(0,0,0,"+(dark?"0.3":"0.06")+")":"none",transform:vis?"translateX(0)":"translateX(100%)",transition:"transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s",display:"flex",flexDirection:"column",overflow:"hidden"}}>

      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 28px",flexShrink:0}}>
        <button onClick={doClose} style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",color:sub,fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",padding:0,transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <div style={{display:"flex",alignItems:"center",gap:4}}>
          <button onClick={function(e){e.stopPropagation();if(onSave)onSave(deal.id);}} style={{width:34,height:34,borderRadius:"50%",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",color:sv?"#FF453A":ink}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";}} onMouseLeave={function(e){e.currentTarget.style.background="none";}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={sv?"#FF453A":"none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
          <button onClick={function(e){e.stopPropagation();}} style={{width:34,height:34,borderRadius:"50%",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",color:ink}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";}} onMouseLeave={function(e){e.currentTarget.style.background="none";}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="scroll-hide" style={{flex:1,overflowY:"auto",overflowX:"hidden",opacity:transit?0:1,transition:"opacity .25s ease"}}>

        {/* Image */}
        <div className="det-pad" style={{padding:"8px 28px 0"}}>
          <div style={{position:"relative",width:"100%",aspectRatio:"1/1",borderRadius:16,overflow:"hidden",background:sl[pi].g,backgroundSize:"cover",backgroundPosition:deal._pos||"center",transition:"background .3s ease"}}>
            {sl.length>1?<button onClick={prevImg} style={Object.assign({},arrowBtn,{left:12})} onMouseEnter={function(e){e.currentTarget.style.background="rgba(255,255,255,0.9)";}} onMouseLeave={function(e){e.currentTarget.style.background="rgba(255,255,255,0.7)";}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>:null}
            {sl.length>1?<button onClick={nextImg} style={Object.assign({},arrowBtn,{right:12})} onMouseEnter={function(e){e.currentTarget.style.background="rgba(255,255,255,0.9)";}} onMouseLeave={function(e){e.currentTarget.style.background="rgba(255,255,255,0.7)";}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>:null}
            {sl.length>1?<div style={{position:"absolute",bottom:14,left:"50%",transform:"translateX(-50%)",display:"flex",gap:5}}>
              {sl.map(function(x,i){return <button key={i} onClick={function(e){e.stopPropagation();sPi(i);}} style={{width:i===pi?18:6,height:6,borderRadius:99,border:"none",cursor:"pointer",transition:"all .5s cubic-bezier(.22,1,.36,1)",background:i===pi?"#FFF":"rgba(255,255,255,0.4)"}}></button>;})}
            </div>:null}
            {sl.length>1?<div style={{position:"absolute",top:14,left:14,padding:"4px 10px",borderRadius:980,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(8px)"}}><span style={{fontSize:10,fontWeight:400,color:"rgba(255,255,255,0.9)"}}>{pi+1} / {sl.length}</span></div>:null}
          </div>
        </div>

        {/* Content */}
        <div className="det-pad" style={{padding:"24px 28px 0"}}>

          {/* Store row */}
          <div onClick={function(){if(onStore)onStore(deal.store);}} style={{display:"flex",alignItems:"center",gap:10,marginBottom:20,cursor:"pointer",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
            {function(){var AC=["#5B7FFF","#FF6B6B","#34C759","#FF9500","#AF52DE","#FF2D55","#5AC8FA","#FFD60A","#30B0C7","#FF6482"];var ac=AC[deal.store.charCodeAt(0)%AC.length];return <div style={{width:36,height:36,borderRadius:10,overflow:"hidden",background:ac,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {STORE_BANNERS[deal.store+"_avatar"]?<img src={STORE_BANNERS[deal.store+"_avatar"]} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
              <span style={{fontSize:14,fontWeight:600,color:"#FFF",fontFamily:"'Inter',sans-serif"}}>{deal.store.charAt(0)}</span>}
            </div>;}()}
            <div style={{flex:1,minWidth:0}}>
              <p style={{fontSize:13,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{deal.store}</p>
              <p style={{fontSize:11,fontWeight:400,color:sub}}>{deal.loc}</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>

          {/* Title */}
          <h2 style={{fontSize:24,fontWeight:600,lineHeight:1.3,color:ink,marginBottom:10,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px"}}>{deal.title}</h2>

          {/* Description */}
          <p style={{fontSize:13,lineHeight:1.8,color:sub,fontWeight:400,marginBottom:24}}>{deal.desc}</p>

          {/* Price block */}
          <div style={{padding:"20px 0",marginBottom:20,borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),borderBottom:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)")}}>
            <div className="det-price" style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
              {deal.dc>=15?<span style={{padding:"4px 12px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:15,fontWeight:700,color:"#FF3B30"}}>{"-"+deal.dc+"%"}</span>:null}
              <span style={{fontSize:15,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${deal.orig.toFixed(2)}</span>
              <span style={{fontSize:28,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px"}}>${deal.price.toFixed(2)}</span>
            </div>
            

          </div>

          {/* Message */}
          <div className="det-cta-wrap" style={{marginBottom:24}}>
          <button onClick={function(){if(onChat)onChat(deal);}} className="det-cta" style={{width:"100%",padding:"11px 20px",borderRadius:980,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"all .3s",color:ink,fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            Message store
          </button>
          </div>



          {/* Promote — store owner only */}
          {account&&account.type==="store"&&account.storeName===deal.store?<div style={{padding:"20px 0",marginBottom:24,borderTop:"1px solid "+bd}}>
            <p style={{fontSize:13,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:4}}>Promote this deal</p>
            <p style={{fontSize:11,fontWeight:400,color:sub,marginBottom:14}}>Manage promotions from My Deals dashboard.</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <div style={{padding:"12px 16px",borderRadius:12,background:deal._boost?(dark?"rgba(52,199,89,0.1)":"rgba(52,199,89,0.06)"):"none",border:"1px solid "+bd,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{display:"flex",alignItems:"center",gap:8}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span style={{fontSize:12,fontWeight:400,color:ink}}>Hero Spotlight</span></span>
                {deal._boost?<span style={{fontSize:11,fontWeight:500,color:"#34C759",fontFamily:"'Inter',sans-serif"}}>Active {"\u00B7"} {deal._boost}</span>:<span style={{fontSize:11,fontWeight:400,color:sub}}>from $4.99</span>}
              </div>
              <div style={{padding:"12px 16px",borderRadius:12,background:deal._suggestBoost?(dark?"rgba(52,199,89,0.1)":"rgba(52,199,89,0.06)"):"none",border:"1px solid "+bd,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{display:"flex",alignItems:"center",gap:8}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/></svg><span style={{fontSize:12,fontWeight:400,color:ink}}>Boost</span></span>
                {deal._suggestBoost?<span style={{fontSize:11,fontWeight:500,color:"#34C759",fontFamily:"'Inter',sans-serif"}}>Active {"\u00B7"} {deal._suggestBoost}</span>:<span style={{fontSize:11,fontWeight:400,color:sub}}>from $3.99</span>}
              </div>
            </div>
          </div>:null}
        </div>

        {/* More to explore — two scroll sections */}
        {more.length>0?<div style={{borderTop:"1px solid "+bd,paddingTop:28,paddingBottom:48}}>
          {function(){
            var fromStore=BASE.filter(function(x){return x.store===deal.store&&x.id!==deal.id&&isImg(x);});
            var recommended=BASE.filter(function(x){return x.id!==deal.id&&x.store!==deal.store&&x.cat===deal.cat&&isImg(x);});
            if(recommended.length<4)recommended=recommended.concat(BASE.filter(function(x){return x.id!==deal.id&&x.store!==deal.store&&recommended.indexOf(x)===-1&&isImg(x);}).sort(function(){return 0.5-Math.random();}));
            var sections=[];
            if(fromStore.length>0)sections.push({title:"From "+deal.store,items:fromStore});
            if(recommended.length>0)sections.push({title:"You might also like",items:recommended.slice(0,12)});
            return sections.map(function(sec,si){
              return <div key={si} style={{marginBottom:si<sections.length-1?32:0}}>
                <p style={{fontSize:12,fontWeight:500,letterSpacing:"0.3px",color:sub,padding:"0 28px",marginBottom:14,fontFamily:"'Inter',sans-serif"}}>{sec.title}</p>
                <div style={{padding:"0 28px"}}>
                  <ScrollRow dark={dark} cardWidth={244} noDots={true}>
                    {sec.items.map(function(r){
                      var rSv=saved&&saved.has(r.id);
                      return <div key={r.id} className="sq-card det-card" onClick={function(){go(r);}} style={{cursor:"pointer",borderRadius:16,overflow:"hidden",background:bg2,flexShrink:0,width:228,scrollSnapAlign:"start"}}>
                        <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
                          <div className="sq-img" style={{width:"100%",height:"100%",background:r.img,backgroundSize:"cover",backgroundPosition:r._pos||"center",transition:"transform .6s cubic-bezier(.22,1,.36,1)"}}></div>
                          <button className="card-actions" onClick={function(e){e.stopPropagation();if(onSave)onSave(r.id);}} style={{position:"absolute",top:8,right:8,width:28,height:28,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:rSv?"#FF453A":"#FFF",opacity:rSv?1:0,transition:"opacity .2s"}}>{rSv?"\u2665":"\u2661"}</button>
                        </div>
                        <div style={{padding:"10px 12px 12px"}}>
                          <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.4,minHeight:"2.8em",marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{r.title}</p>
                          <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6}}>{r.store}</p>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            {r.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+r.dc+"%"}</span>:null}
                            <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${r.orig.toFixed(2)}</span>
                            <span style={{fontSize:16,fontWeight:500,color:ink}}>${r.price.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>;
                    })}
                  </ScrollRow>
                </div>
              </div>;
            });
          }()}
        </div>:null}

      </div>

    </div>
  </div>;
}

var REPLIES=["Thanks for reaching out. This deal is still available.","Of course. You can visit us anytime during our hours.","Let me check that for you.","Yes, walk-ins are welcome.","We would be happy to help.","The deal applies to all items on the menu.","Looking forward to seeing you.","Absolutely. Just show the deal at checkout."];

function MiniChat({deal,onClose,dark,msgs,onMsgs}){
  var[input,sInput]=useState("");
  var[typing,sTyping]=useState(false);
  var endRef=useRef(null);
  var bg=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#48484A":"#C8C6C0";
  var bd=dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)";
  var myBub=dark?"#27B147":"#27B147";var theirBub=dark?"#262626":"#EFEFEF";
  var sub=dark?"#8E8C87":"#8E8C87";

  var send=function(){
    if(!input.trim())return;
    var t=input.trim();sInput("");
    onMsgs(msgs.concat({from:"me",text:t,ts:Date.now()}));
    sTyping(true);
    setTimeout(function(){
      sTyping(false);
      var r=REPLIES[Math.floor(Math.random()*REPLIES.length)];
      onMsgs(msgs.concat({from:"me",text:t,ts:Date.now()},{from:"store",text:r,ts:Date.now()}));
    },1000+Math.random()*1000);
  };

  useEffect(function(){if(endRef.current)endRef.current.scrollIntoView({behavior:"smooth"});},[msgs,typing]);
  useEffect(function(){var h=function(e){if(e.key==="Escape")onClose();};window.addEventListener("keydown",h);return function(){window.removeEventListener("keydown",h);};},[onClose]);

  return <div className="chat-float" style={{position:"fixed",bottom:20,right:20,width:360,height:480,maxHeight:"calc(100vh - 80px)",zIndex:55,borderRadius:14,overflow:"hidden",background:bg,boxShadow:"0 6px 36px rgba(0,0,0,"+(dark?"0.5":"0.16")+")",border:"1px solid "+bd,display:"flex",flexDirection:"column",animation:"fadeIn .2s cubic-bezier(.16,1,.3,1) both"}}>

      {/* Header */}
      <div style={{padding:"10px 14px",display:"flex",alignItems:"center",gap:10,borderBottom:"1px solid "+bd,flexShrink:0}}>
        <div style={{width:32,height:32,borderRadius:"50%",background:deal.img,flexShrink:0,position:"relative"}}>
          <div style={{position:"absolute",bottom:0,right:0,width:9,height:9,borderRadius:"50%",background:"#4ADE80",border:"2px solid "+bg}}></div>
        </div>
        <div style={{flex:1,minWidth:0}}>
          <p style={{fontSize:13,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{deal.store}</p>
          <p style={{fontSize:10,fontWeight:400,color:sub,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{deal.title}</p>
        </div>
        <button onClick={onClose} style={{border:"none",background:"none",cursor:"pointer",fontSize:14,color:sub,padding:4,lineHeight:1}}>{"\u2715"}</button>
      </div>

      {/* Messages */}
      <div className="scroll-hide" style={{flex:1,overflowY:"auto",padding:"12px 14px"}}>
        {msgs.map(function(m,i){
          var me=m.from==="me";
          var prev=i>0&&msgs[i-1].from===m.from;
          var isLast=i===msgs.length-1||msgs[i+1].from!==m.from;
          return <div key={i} style={{display:"flex",alignItems:"flex-end",justifyContent:me?"flex-end":"flex-start",marginTop:prev?2:10,gap:6}}>
            {!me&&isLast?<div style={{width:20,height:20,borderRadius:"50%",background:deal.img,flexShrink:0,marginBottom:1}}></div>:!me?<div style={{width:20,flexShrink:0}}></div>:null}
            <div style={{maxWidth:"75%",padding:"8px 12px",borderRadius:18,borderBottomRightRadius:me&&isLast?4:18,borderBottomLeftRadius:!me&&isLast?4:18,background:me?myBub:theirBub,color:me?"#FFF":(dark?"#F4F3F0":"#1D1D1F"),fontSize:13,fontWeight:400,lineHeight:1.4,fontFamily:"'Inter',sans-serif",wordBreak:"break-word"}}>{m.text}</div>
          </div>;
        })}
        {typing?<div style={{display:"flex",alignItems:"flex-end",gap:6,marginTop:10}}>
          <div style={{width:20,height:20,borderRadius:"50%",background:deal.img,flexShrink:0,marginBottom:1}}></div>
          <div style={{padding:"10px 14px",borderRadius:18,borderBottomLeftRadius:4,background:theirBub,display:"flex",gap:4,alignItems:"center"}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out infinite"}}></div>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out 0.15s infinite"}}></div>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out 0.3s infinite"}}></div>
          </div>
        </div>:null}
        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div style={{padding:"8px 12px",borderTop:"1px solid "+bd,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:8,borderRadius:980,border:"1px solid "+bd,padding:"5px 5px 5px 14px"}}>
          <input value={input} onChange={function(e){sInput(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter")send();}} placeholder="Message..." style={{flex:1,border:"none",background:"transparent",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}}/>
          {input.trim()?<button onClick={send} style={{border:"none",background:"none",cursor:"pointer",padding:"5px 12px",fontSize:13,fontWeight:600,color:"#27B147",fontFamily:"'Inter',sans-serif"}}>Send</button>:null}
        </div>
      </div>
    </div>;
}

function SavedPage({saved,deals,onSelect,onUnsave,dark}){
  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#48484A":"#D4D2CD";var bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";
  var list=deals.filter(function(d){return saved.has(d.id);});
  var cats=["Food","Beauty","Fashion","Technology"];
  var grouped={};cats.forEach(function(c){grouped[c]=list.filter(function(d){return d.cat===c;});});
  var activeCats=cats.filter(function(c){return grouped[c].length>0;});

  return <div className="page-content" style={{paddingTop:96,paddingBottom:80,minHeight:"100vh"}}>

    {/* Header */}
    <div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px"}}>
      <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:20,marginBottom:32}}>
        <div>
          <p className="page-title" style={{fontSize:34,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px"}}>Saved</p>
          {list.length>0?<p style={{fontSize:14,fontWeight:400,color:dark?"#8E8C87":"#8E8C87",marginTop:6}}>{list.length} deal{list.length!==1?"s":""} saved</p>:null}
        </div>
      </div>
    </div>

    {/* Empty state */}
    {list.length===0?<div style={{maxWidth:400,margin:"0 auto",padding:"80px 40px",textAlign:"center"}}>
      <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px"}}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </div>
      <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:10}}>No saved deals yet</p>
      <p style={{fontSize:14,fontWeight:400,color:dark?"#8E8C87":"#8E8C87",lineHeight:1.7}}>Tap the heart on any deal to save it here.</p>
    </div>:

    /* Cards by category */
    <div>
      {activeCats.map(function(cat){
        var SEC={"Food":"Eat & Drink","Wellness":"Suggestion for You","Technology":"Technology","Fashion":"Style & Fashion","Beauty":"Glow & Beauty"};
        var items=grouped[cat];
        return <div key={cat} style={{marginBottom:48}}>
          <div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",marginBottom:20}}>
            <p style={{fontSize:12,fontWeight:500,color:dark?"#8E8C87":"#8E8C87",letterSpacing:"1.5px",textTransform:"uppercase"}}>{SEC[cat]}</p>
          </div>
          <div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px"}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:14}}>
              {items.map(function(d,idx){
                return <div key={d.id} className="sq-card" style={{animationDelay:Math.min(idx*40,400)+"ms",borderRadius:16,overflow:"hidden",background:bg2,cursor:"pointer"}} onClick={function(){onSelect(d);}}>
                  <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
                    <div style={{width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
                    <button className="card-actions" onClick={function(e){e.stopPropagation();onUnsave(d.id);}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#FF453A",transition:"opacity .2s",zIndex:2}}>{"\u2665"}</button>
                    
                    <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"32px 14px 12px",background:"linear-gradient(transparent,rgba(0,0,0,0.5))"}}>
                      <p style={{fontSize:13,fontWeight:400,color:"#FFF",lineHeight:1.35,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
                    </div>
                  </div>
                  <div style={{padding:"12px 14px 14px"}}>
                    <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"1px",textTransform:"uppercase",marginBottom:5}}>{d.store}</p>
                    <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between"}}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        {d.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                        <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                        <span style={{fontSize:16,fontWeight:500}}>${d.price.toFixed(2)}</span>
                      </div>
                      <span style={{fontSize:10,fontWeight:400,color:"#8A8884"}}>{d.loc}</span>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>;
      })}
    </div>}
  </div>;
}

function ChatsPage({chatHistory,deals,onUpdateMsgs,dark}){
  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#48484A":"#C8C6C0";
  var bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";var sub=dark?"#8E8C87":"#8E8C87";
  var myBub=dark?"#27B147":"#27B147";var theirBub=dark?"#262626":"#EFEFEF";
  var ids=Object.keys(chatHistory);

  var[active,sActive]=useState(ids.length>0?Number(ids[0]):null);
  var[input,sInput]=useState("");
  var[typing,sTyping]=useState(false);
  var[mobileView,sMobileView]=useState("list");
  var[isMobile,sIsMobile]=useState(window.innerWidth<=640);
  var endRef=useRef(null);

  useEffect(function(){var h=function(){sIsMobile(window.innerWidth<=640);};window.addEventListener("resize",h);return function(){window.removeEventListener("resize",h);};},[]);

  var activeDeal=active?deals.find(function(x){return x.id===active;}):null;
  var activeMs=active?chatHistory[active]||[]:[];

  var timeAgo=function(ts){var d=Date.now()-ts;if(d<60000)return"Now";if(d<3600000)return Math.floor(d/60000)+"m";if(d<86400000)return Math.floor(d/3600000)+"h";return Math.floor(d/86400000)+"d";};

  var openChat=function(id){sActive(id);sInput("");if(isMobile)sMobileView("chat");};
  var goBack=function(){sMobileView("list");};

  var send=function(){
    if(!input.trim()||!active)return;
    var t=input.trim();sInput("");
    var newMs=activeMs.concat({from:"me",text:t,ts:Date.now()});
    onUpdateMsgs(active,newMs);
    sTyping(true);
    setTimeout(function(){
      sTyping(false);
      var r=REPLIES[Math.floor(Math.random()*REPLIES.length)];
      onUpdateMsgs(active,newMs.concat({from:"store",text:r,ts:Date.now()}));
    },1000+Math.random()*1000);
  };

  useEffect(function(){if(endRef.current)endRef.current.scrollIntoView({behavior:"smooth"});},[activeMs,typing]);

  if(ids.length===0)return <div className="page-content" style={{paddingTop:96,paddingBottom:80,minHeight:"100vh"}}>
    <div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px"}}>
      <p style={{fontSize:34,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:32}}>Messages</p>
      <div style={{textAlign:"center",paddingTop:60}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+bd,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px"}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:10}}>No messages yet</p>
        <p style={{fontSize:14,fontWeight:400,color:sub,lineHeight:1.7}}>Start a conversation from any deal.</p>
      </div>
    </div>
  </div>;

  /* Conversation list */
  var listPanel=<div style={{width:isMobile?"100%":380,flexShrink:0,borderRight:isMobile?"none":"1px solid "+bd,display:"flex",flexDirection:"column",background:bg,height:"100%"}}>
    <div style={{padding:isMobile?"16px 20px 12px":"20px 24px 16px",flexShrink:0}}>
      <p style={{fontSize:isMobile?28:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px"}}>Messages</p>
    </div>
    <div className="scroll-hide" style={{flex:1,overflowY:"auto"}}>
      {ids.map(function(id){
        var d=deals.find(function(x){return x.id===Number(id);});
        if(!d)return null;
        var m=chatHistory[id];var last=m[m.length-1];
        var isActive=!isMobile&&active===Number(id);
        return <div key={id} onClick={function(){openChat(Number(id));}} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",padding:isMobile?"14px 20px":"12px 24px",background:isActive?(dark?"#1C1C1E":"#F0F0F0"):"transparent",transition:"background .15s"}}>
          <div style={{width:isMobile?48:52,height:isMobile?48:52,borderRadius:"50%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center",flexShrink:0,position:"relative"}}>
            <div style={{position:"absolute",bottom:1,right:1,width:12,height:12,borderRadius:"50%",background:"#4ADE80",border:"2.5px solid "+(isActive?(dark?"#1C1C1E":"#F0F0F0"):bg)}}></div>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <p style={{fontSize:isMobile?15:14,fontWeight:isActive?500:400,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:2}}>{d.store}</p>
            <p style={{fontSize:12,fontWeight:400,color:sub,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{last.from==="me"?"You: ":""}{last.text} {"\u00B7"} {timeAgo(last.ts)}</p>
          </div>
          {isMobile?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>:null}
        </div>;
      })}
    </div>
  </div>;

  /* Chat panel */
  var chatPanel=<div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100%"}}>
    {activeDeal?<div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      {/* Chat header */}
      <div style={{padding:isMobile?"10px 16px":"12px 24px",display:"flex",alignItems:"center",gap:isMobile?10:12,borderBottom:"1px solid "+bd,flexShrink:0}}>
        {isMobile?<button onClick={goBack} style={{border:"none",background:"none",cursor:"pointer",padding:4,display:"flex",alignItems:"center"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>:null}
        <div style={{width:36,height:36,borderRadius:"50%",background:activeDeal.img,backgroundSize:"cover",backgroundPosition:activeDeal._pos||"center",flexShrink:0,position:"relative"}}>
          <div style={{position:"absolute",bottom:0,right:0,width:10,height:10,borderRadius:"50%",background:"#4ADE80",border:"2px solid "+bg}}></div>
        </div>
        <div>
          <p style={{fontSize:14,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{activeDeal.store}</p>
          <p style={{fontSize:11,fontWeight:400,color:sub}}>Active now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="scroll-hide" style={{flex:1,overflowY:"auto",padding:isMobile?"12px 16px 8px":"16px 24px 8px"}}>
        {/* Deal context */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:24,paddingTop:8}}>
          <div style={{width:48,height:48,borderRadius:"50%",background:activeDeal.img,backgroundSize:"cover",backgroundPosition:activeDeal._pos||"center",marginBottom:10}}></div>
          <p style={{fontSize:14,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{activeDeal.store}</p>
          <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:2}}>{activeDeal.loc}</p>
          <div style={{marginTop:10,padding:"6px 14px",borderRadius:10,border:"1px solid "+bd}}>
            <p style={{fontSize:11,fontWeight:400,color:sub}}>{activeDeal.title} {"\u00B7"} ${activeDeal.price.toFixed(2)}</p>
          </div>
        </div>

        {activeMs.map(function(m,i){
          var me=m.from==="me";
          var prev=i>0&&activeMs[i-1].from===m.from;
          var isLast=i===activeMs.length-1||activeMs[i+1].from!==m.from;
          return <div key={i} style={{display:"flex",alignItems:"flex-end",justifyContent:me?"flex-end":"flex-start",marginTop:prev?2:12,gap:8}}>
            {!me&&isLast?<div style={{width:24,height:24,borderRadius:"50%",background:activeDeal.img,backgroundSize:"cover",backgroundPosition:activeDeal._pos||"center",flexShrink:0,marginBottom:2}}></div>:!me?<div style={{width:24,flexShrink:0}}></div>:null}
            <div style={{maxWidth:isMobile?"75%":"60%",padding:"8px 14px",borderRadius:22,borderBottomRightRadius:me&&isLast?4:22,borderBottomLeftRadius:!me&&isLast?4:22,background:me?myBub:theirBub,color:me?"#FFF":(dark?"#F4F3F0":"#1D1D1F"),fontSize:14,fontWeight:400,lineHeight:1.45,fontFamily:"'Inter',sans-serif",wordBreak:"break-word"}}>{m.text}</div>
          </div>;
        })}

        {typing?<div style={{display:"flex",alignItems:"flex-end",gap:8,marginTop:12}}>
          <div style={{width:24,height:24,borderRadius:"50%",background:activeDeal.img,flexShrink:0,marginBottom:2}}></div>
          <div style={{padding:"10px 14px",borderRadius:22,borderBottomLeftRadius:4,background:theirBub,display:"flex",gap:4,alignItems:"center"}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out infinite"}}></div>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out 0.15s infinite"}}></div>
            <div style={{width:5,height:5,borderRadius:"50%",background:mt,opacity:.4,animation:"pulse 1.2s ease-in-out 0.3s infinite"}}></div>
          </div>
        </div>:null}
        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div style={{padding:isMobile?"10px 12px calc(env(safe-area-inset-bottom, 8px) + 8px)":"12px 24px",flexShrink:0,borderTop:"1px solid "+bd}}>
        <div style={{display:"flex",alignItems:"center",gap:8,borderRadius:980,border:"1px solid "+bd,padding:"6px 6px 6px 16px",background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)"}}>
          <input value={input} onChange={function(e){sInput(e.target.value);}} onKeyDown={function(e){if(e.key==="Enter")send();}} placeholder="Message..." style={{flex:1,border:"none",background:"transparent",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}}/>
          {input.trim()?<button onClick={send} style={{border:"none",background:"none",cursor:"pointer",padding:"6px 14px",fontSize:14,fontWeight:600,color:"#27B147",fontFamily:"'Inter',sans-serif"}}>Send</button>:<span style={{padding:"6px 12px"}}></span>}
        </div>
      </div>
    </div>:

    /* No conversation selected */
    <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{textAlign:"center"}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+bd,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p style={{fontSize:18,fontWeight:500,fontFamily:"'Inter',sans-serif",marginBottom:6}}>Your messages</p>
        <p style={{fontSize:13,fontWeight:400,color:sub}}>Select a conversation to start chatting.</p>
      </div>
    </div>}
  </div>;

  /* Mobile: show list or chat. Desktop: show both */
  if(isMobile){
    return <div className="chat-page" style={{position:"fixed",top:56,left:0,right:0,bottom:0,display:"flex",background:bg}}>
      {mobileView==="list"?listPanel:chatPanel}
    </div>;
  }

  return <div className="chat-page" style={{position:"fixed",top:56,left:0,right:0,bottom:0,display:"flex",background:bg}}>
    {listPanel}
    {chatPanel}
  </div>;
}

function ProfilePage({dark,account,onLogout,onClose,onNav,onViewProfile,themeMode,onSetTheme,lang,onSetLang,openInquiry,saved,chatCount,route}){
  var bg=dark?"#000":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var bd=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";var sub=dark?"#636366":"#8A8884";var mt=dark?"#3A3A3C":"#C8C6C0";var red="#FF453A";
  var isStore=account.type==="store";

  var Row=function(props){
    return <div onClick={props.onClick||null} style={{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:44,padding:"0",cursor:props.onClick?"pointer":"default",transition:"opacity .2s"}} onMouseEnter={function(e){if(props.onClick)e.currentTarget.style.opacity="0.5";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        {props.icon?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={props.color||sub} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,opacity:.7}} dangerouslySetInnerHTML={{__html:props.icon}}/>:null}
        <span style={{fontSize:14,fontWeight:400,color:props.color||ink,fontFamily:"'Inter',sans-serif"}}>{props.label}</span>
      </div>
      {props.right||null}
    </div>;
  };

  return <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:80}} onClick={onClose}>
    <div onClick={function(e){e.stopPropagation();}} className="prof-panel" style={{position:"absolute",top:60,right:24,width:260,maxHeight:"82vh",overflow:"auto",borderRadius:18,background:dark?"rgba(28,28,30,0.95)":"rgba(255,255,255,0.95)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.08)",padding:"20px 24px",animation:"slideDown .4s cubic-bezier(.22,1,.36,1) both"}}>

      {/* Name + email */}
      <div style={{paddingBottom:16,borderBottom:"1px solid "+bd}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
          <div style={{width:40,height:40,borderRadius:"50%",background:dark?"#2C2C2E":"#E8E7E3",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"}}>
            {account.avatar?<img src={account.avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
            <span style={{fontSize:16,fontWeight:500,color:sub}}>{account.name.charAt(0)}</span>}
          </div>
          <div style={{flex:1,minWidth:0}}>
            <p style={{fontSize:15,fontWeight:500,fontFamily:"'Inter',sans-serif",color:ink,letterSpacing:"-0.2px"}}>{account.name}</p>
            <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:1}}>{account.email}</p>
          </div>
        </div>
        {isStore?<p style={{fontSize:11,fontWeight:400,color:mt,marginBottom:8}}>{account.storeName}</p>:null}
        <button onClick={function(){onClose();onViewProfile();}} style={{width:"100%",padding:"8px 0",borderRadius:980,border:"none",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",color:ink,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.1px",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>View profile</button>
      </div>

      {/* Saved + Chats — visible on mobile */}
      <div className="prof-nav-rows" style={{display:"none",paddingTop:6,paddingBottom:6,borderBottom:"1px solid "+bd}}>
        <Row icon='<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>' label="Saved" onClick={function(){onNav("saved");onClose();}} right={saved&&saved.size?<span style={{fontSize:11,fontWeight:500,color:sub}}>{saved.size}</span>:null}/>
        <Row icon='<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' label="Chats" onClick={function(){onNav("chats");onClose();}} right={chatCount?<span style={{fontSize:11,fontWeight:500,color:sub}}>{chatCount}</span>:null}/>
      </div>

      {/* Store tools */}
      {isStore?<div style={{paddingTop:6,paddingBottom:6,borderBottom:"1px solid "+bd}}>
        <Row icon='<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' label="View store" onClick={function(){onNav("store");onClose();}}/>
        <Row icon='<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' label="Dashboard" onClick={function(){onNav("dash");onClose();}}/>
        <Row icon='<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M16 3l-4 4-4-4"/>' label="Partner Banner" color={dark?"#A78BFA":"#7C3AED"} onClick={function(){onClose();if(openInquiry)openInquiry("banner");}}/>
      </div>:null}

      {/* Settings */}
      <div style={{paddingTop:6,paddingBottom:6,borderBottom:"1px solid "+bd}}>
        <Row label="Language" right={
          <div style={{display:"flex",gap:3,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",borderRadius:980,padding:3}}>
            {[{k:"en",l:"EN"},{k:"km",l:"KH"}].map(function(o){return <button key={o.k} onClick={function(e){e.stopPropagation();onSetLang(o.k);}} style={{width:32,height:32,borderRadius:"50%",border:"none",background:lang===o.k?ink:"transparent",color:lang===o.k?"#FFF":sub,fontSize:10,fontWeight:lang===o.k?500:400,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .25s cubic-bezier(.22,1,.36,1)",display:"flex",alignItems:"center",justifyContent:"center"}}>{o.l}</button>;})}
          </div>
        }/>
        <Row label="Theme" right={
          <div style={{display:"flex",gap:3,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",borderRadius:980,padding:3}}>
            {[{k:"light",l:"\u2600"},{k:"dark",l:"\u263E"},{k:"system",l:"\u25D0"}].map(function(o){return <button key={o.k} onClick={function(e){e.stopPropagation();onSetTheme(o.k);}} style={{width:32,height:32,borderRadius:"50%",border:"none",background:themeMode===o.k?ink:"transparent",color:themeMode===o.k?"#FFF":sub,fontSize:14,cursor:"pointer",transition:"all .25s cubic-bezier(.22,1,.36,1)",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}>{o.l}</button>;})}
          </div>
        }/>
      </div>

      {/* Links */}
      <div style={{paddingTop:6,paddingBottom:6}}>
        <Row label="Get App" onClick={function(){onClose();onNav("getapp");}} right={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}/>
        <Row label="For Business" onClick={function(){onClose();onNav("info:business");}} right={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}/>
        <Row label="Help & Support" onClick={function(){onClose();onNav("info:help");}} right={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}/>
        <Row label="Contact Us" onClick={function(){onClose();onNav("info:contact");}} right={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}/>
        <Row label="Log out" onClick={onLogout}/>
      </div>

      {/* Compact legal footer */}
      <div style={{borderTop:"1px solid "+bd,paddingTop:10,display:"flex",flexWrap:"wrap",gap:4,justifyContent:"center",lineHeight:1}}>
        {[{k:"about",l:"About"},{k:"terms",l:"Terms"},{k:"privacy",l:"Privacy"},{k:"cookies",l:"Cookies"},{k:"disclaimer",l:"Disclaimer"}].map(function(item,i,arr){
          return <span key={item.k}><span onClick={function(){onClose();onNav("info:"+item.k);}} style={{fontSize:11,fontWeight:400,color:sub,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>{item.l}</span>{i<arr.length-1?<span style={{fontSize:11,color:mt,margin:"0 5px"}}>{"\u00B7"}</span>:null}</span>;
        })}
      </div>

    </div>
  </div>;
}

/* ─── Profile View + Edit Modal ─── */
function ProfileView({dark,account,onClose,onUpdateAccount,onLogout}){
  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var bd=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)";var sub=dark?"#8E8C87":"#8A8884";var red="#FF453A";
  var isStore=account.type==="store";

  var[editing,sEditing]=useState(false);
  var[eName,sEName]=useState(account.name);
  var[eEmail,sEEmail]=useState(account.email);
  var[avatar,sAvatar]=useState(account.avatar||null);
  var avatarRef=useRef(null);
  var[toast,sToast]=useState(null);
  var[pwOpen,sPwOpen]=useState(false);
  var[curPw,sCurPw]=useState("");
  var[newPw,sNewPw]=useState("");
  var[confPw,sConfPw]=useState("");
  var[delConfirm,sDelConfirm]=useState(false);

  var handleAvatarUpload=function(e){
    var f=e.target.files&&e.target.files[0];if(!f)return;
    var r=new FileReader();r.onload=function(ev){sAvatar(ev.target.result);};r.readAsDataURL(f);
  };
  var save=function(){
    if(onUpdateAccount)onUpdateAccount({name:eName,email:eEmail,avatar:avatar});
    sEditing(false);sToast("Saved");setTimeout(function(){sToast(null);},2200);
  };
  var cancelEdit=function(){sEName(account.name);sEEmail(account.email);sAvatar(account.avatar||null);sEditing(false);};
  var savePw=function(){
    if(!curPw||!newPw){sToast("Fill in all fields");setTimeout(function(){sToast(null);},2200);return;}
    if(newPw!==confPw){sToast("Passwords don't match");setTimeout(function(){sToast(null);},2200);return;}
    if(newPw.length<6){sToast("Min 6 characters");setTimeout(function(){sToast(null);},2200);return;}
    sPwOpen(false);sCurPw("");sNewPw("");sConfPw("");sToast("Password updated");setTimeout(function(){sToast(null);},2200);
  };

  var iS={width:"100%",padding:"10px 14px",border:"none",borderRadius:10,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none",boxSizing:"border-box"};
  var rowS={display:"flex",alignItems:"center",padding:"14px 0",borderBottom:"1px solid "+bd};
  var labS={width:80,flexShrink:0,fontSize:12,fontWeight:400,color:sub};
  var secLab=function(t){return <p style={{fontSize:10,fontWeight:500,color:sub,letterSpacing:"2px",textTransform:"uppercase",marginBottom:10,paddingLeft:4}}>{t}</p>;};
  var actionRow=function(label,detail,onClick,color){
    return <div onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"15px 0",borderBottom:"1px solid "+bd,cursor:onClick?"pointer":"default",transition:"opacity .2s"}} onMouseEnter={function(e){if(onClick)e.currentTarget.style.opacity="0.5";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
      <span style={{fontSize:14,fontWeight:400,color:color||ink,fontFamily:"'Inter',sans-serif"}}>{label}</span>
      {detail?<span style={{fontSize:13,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif"}}>{detail}</span>:
      onClick?<span style={{fontSize:14,color:sub}}>{"\u203A"}</span>:null}
    </div>;
  };

  return <div className="profile-view" style={{position:"fixed",top:64,left:0,right:0,bottom:0,zIndex:45,background:bg,overflowY:"auto"}}>

    {toast?<div style={{position:"fixed",top:28,left:"50%",transform:"translateX(-50%)",padding:"10px 28px",borderRadius:980,background:dark?"#1C1C1E":"#FFF",boxShadow:"0 4px 20px rgba(0,0,0,"+(dark?"0.35":"0.06")+")",zIndex:95,fontSize:13,fontWeight:400,color:toast.includes("don't")||toast.includes("Min")||toast.includes("Fill")?red:"#34C759",fontFamily:"'Inter',sans-serif"}}>{toast}</div>:null}

    <div style={{maxWidth:520,margin:"0 auto",padding:"32px 32px 80px"}}>

      <h2 style={{fontSize:22,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,letterSpacing:"-0.2px",marginBottom:28}}>Account</h2>

      {/* ── Profile card ── */}
      <div style={{background:bg2,borderRadius:16,padding:"20px 24px",marginBottom:28,display:"flex",alignItems:"center",gap:16}}>
        <div style={{width:56,height:56,borderRadius:"50%",background:dark?"#2C2C2E":"#E8E7E3",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"}}>
          {account.avatar?<img src={account.avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
          <span style={{fontSize:22,fontWeight:500,color:sub}}>{account.name.charAt(0)||"?"}</span>}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <p style={{fontSize:17,fontWeight:500,fontFamily:"'Inter',sans-serif",color:ink}}>{account.name}</p>
          <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:2}}>{account.email}</p>
        </div>
        <button onClick={function(){sEditing(true);}} style={{padding:"7px 18px",borderRadius:980,border:"1px solid "+bd,background:"transparent",color:ink,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",flexShrink:0,transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Edit</button>
      </div>

      {/* ── Security ── */}
      {secLab("Security")}
      <div style={{background:bg2,borderRadius:16,padding:"4px 20px",marginBottom:28}}>
        {!pwOpen?actionRow("Change password",null,function(){sPwOpen(true);}):
        <div style={{padding:"14px 0"}}>
          <input type="password" value={curPw} onChange={function(e){sCurPw(e.target.value);}} style={Object.assign({},iS,{marginBottom:10})} placeholder="Current password"/>
          <input type="password" value={newPw} onChange={function(e){sNewPw(e.target.value);}} style={Object.assign({},iS,{marginBottom:10})} placeholder="New password"/>
          <input type="password" value={confPw} onChange={function(e){sConfPw(e.target.value);}} style={Object.assign({},iS,{marginBottom:14})} placeholder="Confirm new password"/>
          <div style={{display:"flex",gap:10}}>
            <button onClick={function(){sPwOpen(false);sCurPw("");sNewPw("");sConfPw("");}} style={{flex:1,padding:"10px 0",borderRadius:980,background:"transparent",border:"1.5px solid "+bd,color:sub,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>Cancel</button>
            <button onClick={savePw} style={{flex:1,padding:"10px 0",borderRadius:980,background:"#27B147",boxShadow:"0 2px 10px rgba(39,177,71,0.18)",border:"none",color:"#FFF",cursor:"pointer",fontSize:12,fontWeight:500,fontFamily:"'Inter',sans-serif"}}>Update</button>
          </div>
        </div>}
      </div>

      {/* ── Account info ── */}
      {secLab("Account")}
      <div style={{background:bg2,borderRadius:16,padding:"4px 20px",marginBottom:28}}>
        {actionRow("Account type",isStore?"Business":"Personal")}
      </div>

      {/* ── Danger zone ── */}
      <div style={{background:bg2,borderRadius:16,padding:"4px 20px",marginBottom:28}}>
        {!delConfirm?actionRow("Delete account",null,function(){sDelConfirm(true);},red):
        <div style={{padding:"16px 0"}}>
          <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.6,marginBottom:16}}>This will permanently delete your account and all associated data. This action cannot be undone.</p>
          <div style={{display:"flex",gap:10}}>
            <button onClick={function(){sDelConfirm(false);}} style={{flex:1,padding:"10px 0",borderRadius:980,background:"transparent",border:"1.5px solid "+bd,color:sub,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>Cancel</button>
            <button onClick={function(){if(onLogout)onLogout();}} style={{flex:1,padding:"10px 0",borderRadius:980,background:red,border:"none",color:"#FFF",cursor:"pointer",fontSize:12,fontWeight:500,fontFamily:"'Inter',sans-serif"}}>Delete</button>
          </div>
        </div>}
      </div>

      <p style={{fontSize:11,fontWeight:400,color:dark?"#2C2C2E":"#D1D1D6",marginTop:20,textAlign:"center"}}>Joined February 2026</p>

    </div>

    {/* ── Edit Profile Modal ── */}
    {editing?<div style={{position:"fixed",inset:0,zIndex:90,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",padding:24}} onClick={cancelEdit}>
      <div onClick={function(e){e.stopPropagation();}} className="edit-modal" style={{width:"100%",maxWidth:420,background:bg2,borderRadius:24,padding:"28px 32px 32px",boxShadow:"0 24px 80px rgba(0,0,0,"+(dark?"0.5":"0.15")+")",animation:"slideDown .3s cubic-bezier(.22,1,.36,1) both"}}>

        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:28}}>
          <span style={{fontSize:16,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink}}>Edit profile</span>
          <button onClick={cancelEdit} style={{border:"none",background:"none",cursor:"pointer",fontSize:18,color:sub,lineHeight:1}}>{"\u00D7"}</button>
        </div>

        {/* Avatar */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:28}}>
          <div onClick={function(){if(avatarRef.current)avatarRef.current.click();}} style={{width:80,height:80,borderRadius:"50%",background:dark?"#2C2C2E":"#E8E7E3",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",overflow:"hidden",position:"relative",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
            {avatar?<img src={avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
            <span style={{fontSize:32,fontWeight:500,color:sub}}>{eName.charAt(0)||"?"}</span>}
            <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"4px 0",background:"rgba(0,0,0,0.45)",display:"flex",justifyContent:"center"}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
          </div>
          <input ref={avatarRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleAvatarUpload}/>
          <button onClick={function(){if(avatarRef.current)avatarRef.current.click();}} style={{marginTop:8,background:"none",border:"none",cursor:"pointer",fontSize:11,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>Change photo</button>
        </div>

        {/* Fields */}
        <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:28}}>
          <div>
            <label style={{fontSize:11,fontWeight:400,color:sub,marginBottom:6,display:"block"}}>Name</label>
            <input value={eName} onChange={function(e){sEName(e.target.value);}} style={iS} placeholder="Your name"/>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:400,color:sub,marginBottom:6,display:"block"}}>Email</label>
            <input value={eEmail} onChange={function(e){sEEmail(e.target.value);}} style={iS} placeholder="your@email.com"/>
          </div>
        </div>

        {/* Actions */}
        <div style={{display:"flex",gap:10}}>
          <button onClick={cancelEdit} style={{flex:1,padding:"12px 0",borderRadius:980,background:"transparent",border:"1px solid "+bd,color:sub,cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>Cancel</button>
          <button onClick={save} style={{flex:1,padding:"12px 0",borderRadius:980,background:"#27B147",boxShadow:"0 2px 12px rgba(39,177,71,0.18)",border:"none",color:"#FFF",cursor:"pointer",fontSize:13,fontWeight:500,fontFamily:"'Inter',sans-serif"}}>Save</button>
        </div>
      </div>
    </div>:null}

  </div>;
}

var GRADIENTS=["linear-gradient(145deg,#E8D5B7,#B89870)","linear-gradient(145deg,#D4C5B0,#A89484)","linear-gradient(145deg,#A8B5C4,#7A8CA0)","linear-gradient(145deg,#C4B8A8,#988878)","linear-gradient(145deg,#B8C4B0,#889880)","linear-gradient(145deg,#C0B8B0,#989088)","linear-gradient(145deg,#A8A0B0,#807888)","linear-gradient(145deg,#B0B8C0,#889098)"];

/* Sponsored deals — native ad placements */
var SPONSORED=[
  {id:"sp1",title:"Brown Tumbler CNY $9.88",store:"Brown Coffee",desc:"Limited edition Chinese New Year tumbler with 3 free drink coupons. Orange matte finish, 500ml capacity.",price:9.88,orig:15,dc:34,cat:"Food",expires:"7d",img:AD1,loc:"All branches",hrs:"6:30AM – 9PM",terms:"While stocks last. One per customer.",sl:[{g:AD1}],_sponsored:true},
  {id:"sp2",title:"Brown Discount Card — Free Pastry",store:"Brown Coffee",desc:"Get a Brown discount card with any drink purchase. Includes free croissant, sandwich, or cake slice.",price:0,orig:5,dc:100,cat:"Food",expires:"14d",img:AD2,loc:"All branches",hrs:"6:30AM – 9PM",terms:"One card per customer. Valid 30 days.",sl:[{g:AD2}],_sponsored:true},
  {id:"sp3",title:"10% Off Orders Over $10",store:"Brown Coffee",desc:"Get 10% discount on any order over $10. Valid Feb 13–15, 2026. All menu items included.",price:0,orig:0,dc:10,cat:"Food",expires:"3d",img:AD3,loc:"All branches",hrs:"6:30AM – 9PM",terms:"Min order $10. Feb 13–15 only.",sl:[{g:AD3}],_sponsored:true}
];
var PARTNERS=[
  {name:"Brown Coffee",tagline:"Cambodia's favorite coffee"},
  {name:"Wing",tagline:"Send, pay, and save"},
  {name:"ABA Bank",tagline:"Banking made simple"},
  {name:"Grab",tagline:"Everyday everything"}
];

/* Onboarding — interest picker after first sign-in */
function Onboarding({dark,name,onComplete}){
  var bg=dark?"#000":"#FAF9F7";var ink=dark?"#F4F3F0":"#1D1D1F";var bd=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";var sub=dark?"#8A8884":"#8A8884";var mt=dark?"#48484A":"#C8C6C0";
  var[picked,sPicked]=useState(new Set());
  var[step,sStep]=useState(0);
  var[entering,sEntering]=useState(true);

  useEffect(function(){setTimeout(function(){sEntering(false);},100);},[]);

  var interests=[
    {id:"food",label:"Food & Drinks",img:"https://i.imgur.com/uTVdwBH.jpeg"},
    {id:"beauty",label:"Beauty",img:"https://i.imgur.com/hzSaAQL.jpeg"},
    {id:"fashion",label:"Fashion",img:"https://i.imgur.com/t4ot4FN.jpeg"},
    {id:"tech",label:"Technology",img:"https://i.imgur.com/sMM7BBC.jpeg"},
    {id:"lifestyle",label:"Lifestyle",img:"https://i.imgur.com/6c3GOzq.jpeg"},
    {id:"travel",label:"Travel",img:"https://i.imgur.com/lqvJeVh.jpeg"}
  ];

  var toggle=function(id){
    sPicked(function(prev){
      var next=new Set(prev);
      if(next.has(id))next.delete(id);else next.add(id);
      return next;
    });
  };

  var finish=function(){
    sStep(1);
    setTimeout(function(){onComplete(Array.from(picked));},1400);
  };

  return <div style={{position:"fixed",inset:0,zIndex:100,background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:entering?0:1,transition:"opacity .8s cubic-bezier(.22,1,.36,1)"}}>

    {step===0?<div className="onboard-wrap" style={{width:"100%",maxWidth:480,padding:"0 32px",textAlign:"center"}}>

      {/* Greeting — centered, minimal */}
      <p style={{fontSize:11,fontWeight:400,color:mt,letterSpacing:"2px",textTransform:"uppercase",marginBottom:20,fontFamily:"'Inter',sans-serif"}}>Welcome{name?", "+name.split(" ")[0]:""}</p>
      <h1 className="onboard-title" style={{fontSize:36,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-1.2px",color:ink,lineHeight:1.15,marginBottom:10}}>What interests you?</h1>
      <p style={{fontSize:14,fontWeight:400,color:sub,lineHeight:1.7,marginBottom:36,fontFamily:"'Inter',sans-serif"}}>Choose a few to personalize your experience.</p>

      {/* Interest cards — image grid */}
      <div className="onboard-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:48}}>
        {interests.map(function(item,idx){
          var active=picked.has(item.id);
          return <button key={item.id} onClick={function(){toggle(item.id);}} style={{padding:0,border:"2px solid "+(active?"#27B147":"transparent"),borderRadius:16,cursor:"pointer",background:"none",overflow:"hidden",position:"relative",aspectRatio:"4/3",transition:"all .35s cubic-bezier(.22,1,.36,1)",transform:active?"scale(0.97)":"scale(1)",animationDelay:idx*80+"ms",animation:"fadeIn .5s cubic-bezier(.22,1,.36,1) both",outline:"none"}} onMouseEnter={function(e){if(!active)e.currentTarget.style.transform="scale(0.98)";}} onMouseLeave={function(e){e.currentTarget.style.transform=active?"scale(0.97)":"scale(1)";}}>
            <img src={item.img} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:active?"brightness(0.55)":"brightness(0.75)",transition:"filter .35s"}} alt={item.label}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 20%,rgba(0,0,0,0.65) 100%)",transition:"opacity .3s"}}></div>
            <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <span style={{fontSize:14,fontWeight:600,color:"#FFF",fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px"}}>{item.label}</span>
              {active?<div style={{width:22,height:22,borderRadius:"50%",background:"#27B147",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>:<div style={{width:22,height:22,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.5)",flexShrink:0}}></div>}
            </div>
          </button>;
        })}
      </div>

      {/* Continue */}
      <button onClick={finish} style={{width:"100%",maxWidth:280,margin:"0 auto",height:48,borderRadius:980,background:picked.size>0?"#27B147":"transparent",color:picked.size>0?"#FFF":sub,border:"1px solid "+(picked.size>0?"#27B147":bd),boxShadow:picked.size>0?"0 3px 14px rgba(39,177,71,0.25)":"none",cursor:"pointer",fontSize:14,fontWeight:picked.size>0?500:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",transition:"all .6s cubic-bezier(.16,1,.3,1)",display:"flex",alignItems:"center",justifyContent:"center"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
        {picked.size>0?"Continue":"Skip"}
      </button>
      <p style={{fontSize:12,fontWeight:400,color:mt,marginTop:16,fontFamily:"'Inter',sans-serif",opacity:picked.size>0?1:0,transition:"opacity .4s ease"}}>{picked.size} selected</p>

    </div>:

    /* Confirmation — pure, quiet */
    <div style={{textAlign:"center",opacity:0,animation:"fadeIn .8s cubic-bezier(.22,1,.36,1) .1s both"}}>
      <div style={{width:48,height:48,borderRadius:"50%",border:"1px solid "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)"),display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px"}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <p style={{fontSize:28,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink}}>You{"\u2019"}re all set</p>
      <p style={{fontSize:13,fontWeight:400,color:sub,marginTop:10,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.1px"}}>Discovering deals for you</p>
    </div>}

  </div>;
}

function AuthPanel({open,onClose,dark,onLogin}){
  var bg=dark?"#000":"#FFFFFF";var ink=dark?"#F4F3F0":"#1D1D1F";var bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";var sub=dark?"#8E8C87":"#6E6E73";var mt=dark?"#8E8C87":"#8A8884";
  var red="#FF453A";var green="#34C759";
  var[name,sName]=useState("");var[email,sEmail]=useState("");var[password,sPassword]=useState("");
  var[isStore,sIsStore]=useState(false);
  var[storeName,sStoreName]=useState("");var[storeLoc,sStoreLoc]=useState("");
  var[showPw,sShowPw]=useState(false);
  var[errors,sErrors]=useState({});
  var[touched,sTouched]=useState({});
  var[loading,sLoading]=useState(false);
  var[shake,sShake]=useState(false);

  /* Enter / exit animation */
  var[mounted,sMounted]=useState(false);
  var[vis,sVis]=useState(false);
  useEffect(function(){
    if(open){sMounted(true);requestAnimationFrame(function(){requestAnimationFrame(function(){sVis(true);});});}
    else{sVis(false);var t=setTimeout(function(){sMounted(false);},400);return function(){clearTimeout(t);};}
  },[open]);
  useEffect(function(){
    if(!mounted)return;
    var h=function(e){if(e.key==="Escape")doClose();};
    window.addEventListener("keydown",h);return function(){window.removeEventListener("keydown",h);};
  },[mounted]);
  var doClose=function(){sVis(false);setTimeout(onClose,350);};

  if(!mounted)return null;

  var fs={width:"100%",padding:"0 0 10px",border:"none",borderBottom:"1px solid "+bd,background:"transparent",fontSize:15,fontWeight:500,fontFamily:"'Inter',sans-serif",color:ink,outline:"none",letterSpacing:"-0.2px",transition:"border-color .5s ease"};
  var focusIn=function(e){e.currentTarget.style.borderBottomColor=ink;};
  var focusOut=function(e){e.currentTarget.style.borderBottomColor=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";};

  /* Validation */
  var validateEmail=function(v){if(!v)return"Email is required";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))return"Enter a valid email";return"";};
  var validatePw=function(v){if(!v)return"Password is required";if(v.length<6)return"At least 6 characters";return"";};
  var validateName=function(v){if(!v.trim())return"Name is required";return"";};
  var validateStore=function(v){if(!v.trim())return"Store name is required";return"";};

  var touch=function(field){sTouched(function(p){var n=Object.assign({},p);n[field]=true;return n;});};
  var getError=function(field){
    if(!touched[field])return"";
    if(field==="email")return validateEmail(email);
    if(field==="password")return validatePw(password);
    if(field==="name")return validateName(name);
    if(field==="storeName")return validateStore(storeName);
    return"";
  };

  /* Password strength */
  var pwStrength=function(){
    if(!password)return{level:0,label:"",color:mt};
    var s=0;
    if(password.length>=6)s++;
    if(password.length>=10)s++;
    if(/[A-Z]/.test(password))s++;
    if(/[0-9]/.test(password))s++;
    if(/[^a-zA-Z0-9]/.test(password))s++;
    if(s<=1)return{level:1,label:"Weak",color:red};
    if(s<=2)return{level:2,label:"Fair",color:"#FF9500"};
    if(s<=3)return{level:3,label:"Good",color:green};
    return{level:4,label:"Strong",color:green};
  };
  var strength=pwStrength();

  var ready=isStore?(name&&email&&password&&storeName&&!validateEmail(email)&&!validatePw(password)):(name&&email&&password&&!validateEmail(email)&&!validatePw(password));

  var go=function(){
    /* Touch all fields to show errors */
    var allFields={name:true,email:true,password:true};
    if(isStore){allFields.storeName=true;}
    sTouched(allFields);

    if(!ready){sShake(true);setTimeout(function(){sShake(false);},500);return;}

    sLoading(true);
    /* Simulate network delay */
    setTimeout(function(){
      sLoading(false);
      if(isStore){onLogin({type:"store",name:name,email:email,storeName:storeName,loc:storeLoc||"Phnom Penh",hrs:"9AM \u2013 9PM"});}
      else{onLogin({type:"user",name:name,email:email});}
    },800);
  };

  /* Field renderer */
  var renderField=function(label,value,onChange,type,field,opts){
    var err=getError(field);
    var isPw=type==="password";
    var hint=opts&&opts.hint;
    var optional=opts&&opts.optional;
    return <div style={{marginBottom:24}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
        <p style={{fontSize:11,fontWeight:400,color:err?red:mt,letterSpacing:"0.3px",transition:"color .3s"}}>{label} {optional?<span style={{color:dark?"#636366":"#AEAEB2"}}>optional</span>:null}</p>
        {isPw&&value?<button onClick={function(){sShowPw(!showPw);}} style={{border:"none",background:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",color:mt,transition:"color .3s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=mt;}}>
          {showPw?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
        </button>:null}
      </div>
      <input value={value} onChange={function(e){onChange(e.target.value);}} type={isPw?(showPw?"text":"password"):type||"text"} style={Object.assign({},fs,{borderBottomColor:err?red:(touched[field]&&!err&&value?green:bd)})} onFocus={focusIn} onBlur={function(e){focusOut(e);touch(field);}} autoComplete={isPw?"current-password":type==="email"?"email":"off"}/>
      {/* Error or hint */}
      <div style={{minHeight:16,marginTop:5}}>
        {err?<p style={{fontSize:11,fontWeight:400,color:red,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:5}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {err}
        </p>:hint&&!value?<p style={{fontSize:11,fontWeight:400,color:dark?"#48484A":"#C8C6C0",fontFamily:"'Inter',sans-serif"}}>{hint}</p>:null}
      </div>
    </div>;
  };

  return <div onClick={doClose} style={{position:"fixed",inset:0,zIndex:55,background:vis?(dark?"rgba(0,0,0,0.7)":"rgba(0,0,0,0.3)"):"transparent",backdropFilter:vis?"blur(12px)":"blur(0px)",WebkitBackdropFilter:vis?"blur(12px)":"blur(0px)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .35s cubic-bezier(.22,1,.36,1),backdrop-filter .35s,  -webkit-backdrop-filter .35s"}}>
    <div onClick={function(e){e.stopPropagation();}} className="auth-panel" style={{width:400,maxWidth:"92vw",maxHeight:"90vh",background:bg,borderRadius:24,boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 40px 120px rgba(0,0,0,0.08)",display:"flex",flexDirection:"column",overflow:"hidden",opacity:vis?1:0,transform:vis?(shake?"translateY(0) scale(1) translateX(8px)":"translateY(0) scale(1)"):"translateY(24px) scale(0.96)",filter:vis?"blur(0px)":"blur(4px)",transition:shake?"none":"opacity .4s cubic-bezier(.22,1,.36,1),transform .4s cubic-bezier(.22,1,.36,1),filter .4s cubic-bezier(.22,1,.36,1)",animation:shake?"shake .4s ease both":"none"}}>

      <div className="auth-inner" style={{flex:1,overflowY:"auto",padding:"40px 36px 20px",position:"relative"}}>

      {/* Close button */}
      <button onClick={doClose} style={{position:"absolute",top:16,right:16,width:28,height:28,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)";}} onMouseLeave={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <p className="auth-title" style={{fontSize:26,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,lineHeight:1.15}}>Sign in</p>
      <p style={{fontSize:13,fontWeight:400,color:sub,marginTop:8,lineHeight:1.6,marginBottom:28}}>Save, chat, and list deals.</p>

      {/* Account type segmented control — iOS style */}
      <div style={{display:"flex",background:dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",borderRadius:12,padding:3,marginBottom:28}}>
        {[{k:false,l:"Personal",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>},{k:true,l:"Business",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3l-4 4-4-4"/></svg>}].map(function(t){
          var active=isStore===t.k;
          return <button key={t.l} onClick={function(){sIsStore(t.k);}} style={{flex:1,padding:"10px 0",border:"none",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:active?500:400,background:active?(dark?"#2C2C2E":"#FFFFFF"):"transparent",color:active?ink:sub,borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all .25s cubic-bezier(.22,1,.36,1)",boxShadow:active?(dark?"0 1px 6px rgba(0,0,0,0.4)":"0 1px 6px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.06)"):"none"}}>
            {t.icon}{t.l}
          </button>;
        })}
      </div>

      {renderField("Name",name,sName,"text","name",{hint:"How others will see you"})}
      {renderField("Email",email,sEmail,"email","email",{hint:"We\u2019ll never share your email"})}
      {renderField("Password",password,sPassword,"password","password",{hint:"Min 6 characters"})}

      {/* Password strength bar */}
      {password?<div style={{marginTop:-14,marginBottom:24}}>
        <div style={{display:"flex",gap:4,marginBottom:6}}>
          {[1,2,3,4].map(function(i){return <div key={i} style={{flex:1,height:2,borderRadius:1,background:i<=strength.level?strength.color:(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),transition:"background .4s ease"}}></div>;})}
        </div>
        <p style={{fontSize:11,fontWeight:400,color:strength.color,fontFamily:"'Inter',sans-serif",transition:"color .4s"}}>{strength.label}</p>
      </div>:null}

      <div style={{maxHeight:isStore?"200px":"0px",opacity:isStore?1:0,overflow:"hidden",transition:"max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease"}}>
        {renderField("Store name",storeName,sStoreName,"text","storeName",{hint:"Your business display name"})}
        {renderField("Location",storeLoc,sStoreLoc,"text","storeLoc",{optional:true,hint:"e.g. BKK1, Phnom Penh"})}
      </div>
      </div>

      {/* Sticky footer */}
      <div style={{padding:"14px 36px 28px",borderTop:"1px solid "+bd}}>
        <button onClick={go} disabled={loading} style={{width:"100%",height:48,borderRadius:980,background:ready?"#27B147":"transparent",color:ready?"#FFF":sub,border:"1px solid "+(ready?"#27B147":bd),boxShadow:ready?"0 3px 14px rgba(39,177,71,0.25)":"none",cursor:loading?"wait":(ready?"pointer":"default"),fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",transition:"all .6s cubic-bezier(.22,1,.36,1)",opacity:loading?0.6:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          {loading?<div style={{display:"flex",gap:4}}><div className="load-dot" style={{background:ready?bg:sub,animationDelay:"0s"}}></div><div className="load-dot" style={{background:ready?bg:sub,animationDelay:"0.15s"}}></div><div className="load-dot" style={{background:ready?bg:sub,animationDelay:"0.3s"}}></div></div>:"Continue"}
        </button>
        <p style={{fontSize:11,fontWeight:400,color:dark?"#48484A":"#C8C6C0",textAlign:"center",marginTop:14,fontFamily:"'Inter',sans-serif",lineHeight:1.6}}>By continuing, you agree to our terms.</p>
      </div>
    </div>
  </div>;
}

function StoreDash({dark,account,deals,onUpdate,onDelete,onQuickPost,onChat,openInquiry}){
  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#48484A":"#D4D2CD";var bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";var sub=dark?"#8E8C87":"#8E8C87";var blue="#27B147";var green="#34C759";var orange="#FF9500";var red="#FF453A";
  var[view,sView]=useState("list");
  var[editId,sEditId]=useState(null);
  var[toast,sToast]=useState("");
  var[filter,sFilter]=useState("all");
  var[searchQ,sSearchQ]=useState("");
  var[sortBy,sSortBy]=useState("views");
  var[sortDir,sSortDir]=useState("desc");
  var[period,sPeriod]=useState("week");
  var[promoteDeal,sPromoteDeal]=useState(null);
  var[promoHero,sPromoHero]=useState(null);
  var[promoSuggest,sPromoSuggest]=useState(null);
  var[cancelTier,sCancelTier]=useState(null);
  var[payStep,sPayStep]=useState(0);var[payMethod,sPayMethod]=useState(null);var[payVerifying,sPayVerifying]=useState(false);var[payDone,sPayDone]=useState(false);
  var payPollRef=useRef(null);
  /* Auto-detect payment: poll backend every 3s while on QR screen.
     In production: fetch('/api/payments/{txnId}/status') → {status:'paid'|'pending'}
     Demo: simulates detection after 5–8s random delay */
  useEffect(function(){
    if(payStep===2&&!payDone&&!payVerifying){
      var delay=5000+Math.floor(Math.random()*3000);
      var started=Date.now();
      payPollRef.current=setInterval(function(){
        /* Production: replace with real API call */
        if(Date.now()-started>=delay){
          clearInterval(payPollRef.current);
          sPayVerifying(true);
          setTimeout(function(){
            sPayVerifying(false);
            sPayDone(true);
          },1500);
        }
      },3000);
      return function(){if(payPollRef.current)clearInterval(payPollRef.current);};
    }
    return function(){if(payPollRef.current)clearInterval(payPollRef.current);};
  },[payStep,payDone,payVerifying]);
  /* Auto-close after success */
  useEffect(function(){
    if(payDone&&promoteDeal){
      var t=setTimeout(function(){
        onUpdate(promoteDeal.id,{_boost:promoHero,_suggestBoost:promoSuggest,feat:!!promoHero});
        showToast("Promotion activated!");
        sPromoteDeal(null);sCancelTier(null);sPayStep(0);sPayMethod(null);sPayDone(false);sPayVerifying(false);
      },2200);
      return function(){clearTimeout(t);};
    }
  },[payDone]);
  var emptyForm={title:"",desc:"",price:"",orig:"",cat:"Food",expires:"7d",terms:""};
  var[form,sForm]=useState(emptyForm);
  var myDeals=deals.filter(function(d){return d._owner===account.email;});
  var activeDeals=myDeals.filter(function(d){return d._active;});
  var pausedDeals=myDeals.filter(function(d){return!d._active;});
  var promotedDeals=myDeals.filter(function(d){return d._boost||d._suggestBoost||d.feat;});
  var upd=function(k,v){sForm(function(p){var n=Object.assign({},p);n[k]=v;return n;});};
  var fs={width:"100%",padding:"10px 0",border:"none",borderBottom:"1px solid "+bd,background:"transparent",fontSize:15,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"};
  var ls={fontSize:11,fontWeight:500,color:sub,letterSpacing:"0.5px",marginBottom:6,display:"block",textTransform:"uppercase"};
  var showToast=function(msg){sToast(msg);setTimeout(function(){sToast("");},2500);};
  var dcPreview=(form.price&&form.orig&&parseFloat(form.orig)>0)?Math.round((1-parseFloat(form.price)/parseFloat(form.orig))*100):0;

  /* Fake analytics per deal — scaled by period */
  var periodMult=period==="week"?1:period==="month"?4.2:18;
  var getAnalytics=function(d){
    var seed=d.id*137;
    return {views:Math.round((200+seed%800)*periodMult),saves:Math.round((10+seed%90)*periodMult),inquiries:Math.round((2+seed%15)*periodMult)};
  };

  /* Totals */
  var totalViews=0;var totalSaves=0;var totalInq=0;
  myDeals.forEach(function(d){var a=getAnalytics(d);totalViews+=a.views;totalSaves+=a.saves;totalInq+=a.inquiries;});

  /* Weekly trend data (fake) */
  var weekDays=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  var weekViews=[42,58,35,72,95,120,88];
  var maxWV=Math.max.apply(null,weekViews);

  var save=function(){
    if(!form.title||!form.price)return;
    var p=parseFloat(form.price)||0;var o=parseFloat(form.orig)||p;
    var dc=o>0?Math.round((1-p/o)*100):0;
    if(editId){
      onUpdate(editId,{title:form.title,desc:form.desc,price:p,orig:o,dc:dc,cat:form.cat,expires:form.expires,terms:form.terms});
      showToast("Deal updated");
    }
    sForm(emptyForm);sEditId(null);sView("list");
  };

  var startEdit=function(d){sEditId(d.id);sForm({title:d.title,desc:d.desc||"",price:String(d.price),orig:String(d.orig),cat:d.cat,expires:d.expires,terms:d.terms||""});sView("form");};

  /* Filtered & sorted deals */
  var filteredDeals=filter==="live"?activeDeals:filter==="paused"?pausedDeals:filter==="promoted"?promotedDeals:myDeals;
  if(searchQ){var sq=searchQ.toLowerCase();filteredDeals=filteredDeals.filter(function(d){return d.title.toLowerCase().indexOf(sq)!==-1||d.cat.toLowerCase().indexOf(sq)!==-1;});}
  filteredDeals=filteredDeals.slice().sort(function(a,b){
    var aA=getAnalytics(a);var bA=getAnalytics(b);
    var av=sortBy==="views"?aA.views:sortBy==="saves"?aA.saves:sortBy==="inquiries"?aA.inquiries:0;
    var bv=sortBy==="views"?bA.views:sortBy==="saves"?bA.saves:sortBy==="inquiries"?bA.inquiries:0;
    return sortDir==="desc"?bv-av:av-bv;
  });

  var toggleSort=function(col){if(sortBy===col){sSortDir(sortDir==="desc"?"asc":"desc");}else{sSortBy(col);sSortDir("desc");}};
  var sortIcon=function(col){if(sortBy!==col)return null;return sortDir==="desc"?"\u2193":"\u2191";};

  var Card=function(props){return <div style={{padding:props.p||24,borderRadius:20,background:bg2,overflow:"hidden"}}>{props.children}</div>;};

  var periodLabel=period==="week"?"This week":period==="month"?"This month":"All time";

  return <div className="page-content" style={{paddingTop:96,paddingBottom:80,minHeight:"100vh"}}>

    {toast?<div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",padding:"10px 28px",borderRadius:980,background:"#27B147",color:"#FFF",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",zIndex:60,animation:"toastIn .4s cubic-bezier(.22,1,.36,1) both",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"}}>{toast}</div>:null}

    {view==="list"?<div className="dash-pad" style={{maxWidth:1200,margin:"0 auto",padding:"0 40px"}}>

      {/* ─── Header ─── */}
      <div style={{marginBottom:36}}>
        <p style={{fontSize:34,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px"}}>Dashboard</p>
        <p style={{fontSize:13,fontWeight:400,color:sub,marginTop:6}}>{account.storeName} &middot; {activeDeals.length} active deal{activeDeals.length!==1?"s":""}</p>
      </div>

      {/* ─── Analytics (only when deals exist) ─── */}
      {myDeals.length>0?<div>
      <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:24}}>
        {[{k:"week",l:"Week"},{k:"month",l:"Month"},{k:"all",l:"All time"}].map(function(p){
          return <button key={p.k} onClick={function(){sPeriod(p.k);}} style={{padding:"7px 16px",borderRadius:980,border:"none",background:period===p.k?(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"):"transparent",color:period===p.k?ink:sub,fontSize:12,fontWeight:period===p.k?500:300,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .2s"}}>{p.l}</button>;
        })}
      </div>

      {/* Overview stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:12,marginBottom:24}}>
        {[
          {n:totalViews.toLocaleString(),l:"Views",c:ink},
          {n:totalSaves.toLocaleString(),l:"Saves",c:ink},
          {n:totalInq,l:"Inquiries",c:green}
        ].map(function(s,si){
          var icons=[
            <svg key="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
            <svg key="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
            <svg key="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          ];
          return <Card key={s.l}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
            {icons[si]}
            <span style={{fontSize:10,fontWeight:400,color:sub}}>{periodLabel}</span>
          </div>
          <p style={{fontSize:28,fontWeight:500,color:s.c,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px"}}>{s.n}</p><p style={{fontSize:11,fontWeight:400,color:sub,marginTop:6}}>{s.l}</p></Card>;
        })}
      </div>

      {/* Weekly views chart */}
      <div style={{marginTop:12}}><Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <p style={{fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif"}}>Views this week</p>
          <p style={{fontSize:12,fontWeight:400,color:sub}}>{weekViews.reduce(function(a,b){return a+b;},0)} total</p>
        </div>
        <div style={{display:"flex",alignItems:"flex-end",gap:8,height:100}}>
          {weekDays.map(function(d,i){
            var h=Math.max(8,(weekViews[i]/maxWV)*100);
            var isToday=i===new Date().getDay()-1||i===6&&new Date().getDay()===0;
            return <div key={d} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
              <p style={{fontSize:10,fontWeight:400,color:isToday?blue:sub}}>{weekViews[i]}</p>
              <div style={{width:"100%",height:h,borderRadius:6,background:isToday?blue:(dark?"#2C2C2E":"#E8E8E8"),transition:"height .5s cubic-bezier(.16,1,.3,1)"}}></div>
              <p style={{fontSize:10,fontWeight:isToday?500:300,color:isToday?blue:sub}}>{d}</p>
            </div>;
          })}
        </div>
      </Card></div>

      {/* Deals table */}
      <div style={{marginTop:24}}>
        <Card p={0}>
          {/* Table header bar */}
          <div style={{padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+bd}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <p style={{fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif"}}>Deals</p>
              <div style={{display:"flex",gap:4}}>
                {[{v:"all",l:"All ("+myDeals.length+")"},{v:"live",l:"Live ("+activeDeals.length+")"},{v:"paused",l:"Paused ("+pausedDeals.length+")"},{v:"promoted",l:"Promoted ("+promotedDeals.length+")"}].map(function(f){
                  return <button key={f.v} onClick={function(){sFilter(f.v);}} style={{padding:"4px 12px",borderRadius:980,border:"none",background:filter===f.v?(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"):"transparent",color:filter===f.v?ink:sub,fontSize:11,fontWeight:filter===f.v?500:300,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .2s"}}>{f.l}</button>;
                })}
              </div>
            </div>
            {/* Search */}
            <div style={{position:"relative",width:200}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input value={searchQ} onChange={function(e){sSearchQ(e.target.value);}} placeholder="Search deals..." style={{width:"100%",padding:"7px 10px 7px 30px",borderRadius:10,border:"1px solid "+bd,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}}/>
            </div>
          </div>

          {/* Column headers — sortable */}
          <div style={{display:"grid",gridTemplateColumns:"2fr 70px 60px 60px 54px 150px",gap:8,padding:"10px 24px",borderBottom:"1px solid "+bd}}>
            {[{k:"name",l:"Deal"},{k:"views",l:"Views"},{k:"saves",l:"Saves"},{k:"inquiries",l:"Msgs"},{k:"status",l:"Status"},{k:"actions",l:""}].map(function(h){
              var sortable=["views","saves","inquiries"].indexOf(h.k)!==-1;
              return <p key={h.k} onClick={sortable?function(){toggleSort(h.k);}:null} style={{fontSize:10,fontWeight:500,color:sortBy===h.k?ink:sub,letterSpacing:"0.5px",textTransform:"uppercase",cursor:sortable?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",gap:3}}>
                {h.l} {sortable?<span style={{fontSize:9,opacity:sortBy===h.k?1:0.3}}>{sortIcon(h.k)||"\u2193"}</span>:null}
              </p>;
            })}
          </div>

          {/* Deal rows */}
          {filteredDeals.length===0?<div style={{padding:"40px 24px",textAlign:"center"}}>
            <p style={{fontSize:14,fontWeight:400,color:sub}}>{searchQ?"No deals matching \""+searchQ+"\"":filter==="all"?"No deals yet":"No "+filter+" deals"}</p>
          </div>:
          filteredDeals.map(function(d){
            var a=getAnalytics(d);
            return <div key={d.id} style={{display:"grid",gridTemplateColumns:"2fr 70px 60px 60px 54px 150px",gap:8,padding:"14px 24px",borderBottom:"1px solid "+bd,alignItems:"center",transition:"background .15s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.015)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>
              {/* Deal info */}
              <div style={{display:"flex",alignItems:"center",gap:12,minWidth:0}}>
                <div style={{width:40,height:40,borderRadius:10,background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center",flexShrink:0}}></div>
                <div style={{minWidth:0}}>
                  <p style={{fontSize:13,fontWeight:400,color:ink,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{d.title}</p>
                  <p style={{fontSize:11,fontWeight:400,color:sub}}>${d.price.toFixed(2)} {d.dc>0?<span style={{color:green}}>{"\u2013"}{d.dc}%</span>:null} {"\u00B7"} {d.cat}</p>
                </div>
              </div>
              <p style={{fontSize:13,fontWeight:400,color:ink}}>{a.views.toLocaleString()}</p>
              <p style={{fontSize:13,fontWeight:400,color:ink}}>{a.saves.toLocaleString()}</p>
              <p style={{fontSize:13,fontWeight:400,color:ink}}>{a.inquiries}</p>
              {/* Status */}
              <div style={{display:"flex",alignItems:"center",gap:5}}>
                <div style={{width:6,height:6,borderRadius:"50%",background:d._active?green:sub}}></div>
                <span style={{fontSize:11,fontWeight:400,color:d._active?green:sub}}>{d._active?"Live":"Off"}</span>
              </div>
              {/* Actions */}
              <div style={{display:"flex",gap:4}}>
                <button onClick={function(){startEdit(d);}} style={{padding:"5px 12px",borderRadius:8,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",color:ink,cursor:"pointer",fontSize:11,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"background .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.07)";}} onMouseLeave={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>Edit</button>
                <button onClick={function(){sPromoteDeal(d);sPromoHero(d._boost||null);sPromoSuggest(d._suggestBoost||null);}} style={{padding:"5px 12px",borderRadius:8,background:d.feat||d._boost||d._suggestBoost?(dark?"rgba(52,199,89,0.15)":"rgba(52,199,89,0.1)"):dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",color:d.feat||d._boost||d._suggestBoost?green:ink,cursor:"pointer",fontSize:11,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>{d.feat||d._boost||d._suggestBoost?"Promoted":"Promote"}</button>
                <button onClick={function(){onUpdate(d.id,{_active:!d._active});showToast(d._active?"Deal paused":"Deal is live");}} style={{padding:"5px 10px",borderRadius:8,background:"transparent",border:"none",color:d._active?orange:green,cursor:"pointer",fontSize:11,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>{d._active?"Pause":"Go Live"}</button>
                <button onClick={function(){if(confirm("Delete this deal?"))onDelete(d.id);}} style={{padding:"5px 6px",borderRadius:8,background:"transparent",border:"none",color:red,cursor:"pointer",opacity:.4,transition:"opacity .2s",display:"flex",alignItems:"center"}} onMouseEnter={function(e){e.currentTarget.style.opacity="1";}} onMouseLeave={function(e){e.currentTarget.style.opacity="0.4";}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </div>;
          })}
        </Card>
      </div>
      </div>:null}

      {/* ─── Empty state ─── */}
      {myDeals.length===0?<div style={{textAlign:"center",paddingTop:60}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+bd,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px"}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        </div>
        <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:10}}>No deals yet</p>
        <p style={{fontSize:14,fontWeight:400,color:sub,lineHeight:1.7,marginBottom:8}}>Tap <span style={{fontWeight:500,color:ink}}>+ Post</span> to create your first deal and reach customers across Phnom Penh.</p>
      </div>:null}

      {/* ─── Top performers (if 2+ deals) ─── */}
      {myDeals.length>=2?<div style={{marginTop:24}}>
        <Card>
          <p style={{fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif",marginBottom:20}}>Top performers</p>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {myDeals.slice().sort(function(a,b){return getAnalytics(b).views-getAnalytics(a).views;}).slice(0,3).map(function(d,i){
              var a=getAnalytics(d);
              var bar=a.views/Math.max.apply(null,myDeals.map(function(x){return getAnalytics(x).views;}))*100;
              return <div key={d.id}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:11,fontWeight:400,color:sub}}>#{i+1}</span>
                    <p style={{fontSize:13,fontWeight:400,color:ink}}>{d.title}</p>
                  </div>
                  <p style={{fontSize:12,fontWeight:400,color:sub}}>{a.views.toLocaleString()} views</p>
                </div>
                <div style={{height:4,borderRadius:2,background:dark?"#2C2C2E":"#E8E8E8"}}>
                  <div style={{height:4,borderRadius:2,background:i===0?blue:i===1?(dark?"#555":"#BBB"):(dark?"#333":"#DDD"),width:bar+"%",transition:"width .6s cubic-bezier(.16,1,.3,1)"}}></div>
                </div>
              </div>;
            })}
          </div>
        </Card>
      </div>:null}

    </div>:view==="form"?<div className="dash-pad" style={{maxWidth:800,margin:"0 auto",padding:"0 40px"}}>

      <button onClick={function(){sView("list");sEditId(null);sForm(emptyForm);}} style={{border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif",marginBottom:32,display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:16}}>{"\u2190"}</span> Back</button>

      <p style={{fontSize:34,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:8}}>Edit deal</p>
      <p style={{fontSize:14,fontWeight:400,color:sub,lineHeight:1.7,marginBottom:44}}>Update the details and save.</p>

      <div style={{marginBottom:28}}><label style={ls}>Title</label><input value={form.title} onChange={function(e){upd("title",e.target.value);}} style={fs} placeholder="e.g. Buy 1 Get 1 Free Milk Tea"/></div>
      <div style={{marginBottom:28}}><label style={ls}>Description</label><textarea value={form.desc} onChange={function(e){upd("desc",e.target.value);}} rows={3} style={Object.assign({},fs,{resize:"none",lineHeight:1.7})} placeholder="What\u2019s included, conditions, anything useful..."/></div>
      <div style={{display:"flex",gap:24,marginBottom:8}}>
        <div style={{flex:1}}><label style={ls}>Deal price ($)</label><input value={form.price} onChange={function(e){upd("price",e.target.value);}} style={fs} placeholder="0.00" type="number"/></div>
        <div style={{flex:1}}><label style={ls}>Original price ($)</label><input value={form.orig} onChange={function(e){upd("orig",e.target.value);}} style={fs} placeholder="0.00" type="number"/></div>
      </div>
      {dcPreview>0?<p style={{fontSize:13,fontWeight:400,color:green,marginBottom:28}}>Customers save {dcPreview}%</p>:<div style={{height:28}}></div>}
      <div style={{marginBottom:28}}><label style={ls}>Category</label>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>{["Food","Beauty","Fashion","Technology"].map(function(c){return <button key={c} onClick={function(){upd("cat",c);}} style={{padding:"10px 20px",borderRadius:980,border:"1px solid "+(form.cat===c?"#27B147":bd),background:form.cat===c?"rgba(39,177,71,0.08)":"transparent",color:form.cat===c?"#27B147":sub,fontSize:13,fontWeight:form.cat===c?500:400,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .3s cubic-bezier(.22,1,.36,1)"}}>{c}</button>;})}</div>
      </div>
      <div style={{marginBottom:28}}><label style={ls}>Duration</label>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>{[{v:"1d",l:"1 day"},{v:"3d",l:"3 days"},{v:"7d",l:"1 week"},{v:"14d",l:"2 weeks"},{v:"30d",l:"1 month"}].map(function(o){return <button key={o.v} onClick={function(){upd("expires",o.v);}} style={{padding:"10px 18px",borderRadius:980,border:"1px solid "+(form.expires===o.v?ink:bd),background:form.expires===o.v?ink:"transparent",color:form.expires===o.v?bg:sub,fontSize:13,fontWeight:400,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .5s cubic-bezier(.16,1,.3,1)"}}>{o.l}</button>;})}</div>
      </div>
      <div style={{marginBottom:36}}><label style={ls}>Terms</label><textarea value={form.terms} onChange={function(e){upd("terms",e.target.value);}} rows={2} style={Object.assign({},fs,{resize:"none",lineHeight:1.7})} placeholder="e.g. One per customer, dine-in only..."/></div>
      <button onClick={save} style={{width:"100%",padding:"18px 0",borderRadius:980,background:(form.title&&form.price)?ink:"transparent",color:(form.title&&form.price)?bg:sub,border:"1px solid "+((form.title&&form.price)?ink:bd),cursor:(form.title&&form.price)?"pointer":"default",fontSize:15,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"all .5s cubic-bezier(.16,1,.3,1)"}}>Save changes</button>
    </div>:null}

    {/* ─── Promote Panel Overlay ─── */}
    {promoteDeal?(function(){
      /* Track original state to detect changes */
      var origHero=promoteDeal._boost||null;
      var origBoost=promoteDeal._suggestBoost||null;
      var hasChanges=promoHero!==origHero||promoSuggest!==origBoost;

      /* Price helpers */
      var priceOf=function(tier,k){
        if(!k)return 0;
        var m=tier==="hero"?{"1d":4.99,"3d":9.99,"7d":19.99}:{"3d":3.99,"7d":7.99,"14d":12.99};
        return m[k]||0;
      };
      var newTotal=priceOf("hero",promoHero)+priceOf("boost",promoSuggest);
      var oldTotal=priceOf("hero",origHero)+priceOf("boost",origBoost);

      /* What kind of action */
      var isAdding=(promoHero||promoSuggest)&&(!origHero&&!origBoost);
      var isRemoving=(!promoHero&&!promoSuggest)&&(origHero||origBoost);
      var isModifying=hasChanges&&!isAdding&&!isRemoving;

      /* Tier card builder */
      var tierOpts={hero:[{k:"1d",l:"1 day",p:"$4.99"},{k:"3d",l:"3 days",p:"$9.99"},{k:"7d",l:"7 days",p:"$19.99"}],boost:[{k:"3d",l:"3 days",p:"$3.99"},{k:"7d",l:"7 days",p:"$7.99"},{k:"14d",l:"14 days",p:"$12.99"}]};
      var tierMeta={hero:{iconType:"star",name:"Hero Spotlight",desc:"Featured banner on homepage — seen first",val:promoHero,set:sPromoHero,orig:origHero,def:"1d"},boost:{iconType:"rocket",name:"Boost",desc:"Suggested to users + pinned in category",val:promoSuggest,set:sPromoSuggest,orig:origBoost,def:"3d"}};

      var renderTier=function(key){
        var t=tierMeta[key];var opts=tierOpts[key];var isOn=!!t.val;var wasOn=!!t.orig;var isCancelling=cancelTier===key;

        return <div key={key} style={{marginBottom:12,padding:"18px 20px",borderRadius:16,border:isOn?"2px solid "+ink:"1.5px solid "+bd,background:isOn?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",transition:"all .3s cubic-bezier(.16,1,.3,1)"}}>
          {/* Header */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:(isOn||isCancelling)?14:0}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              {t.iconType==="star"?<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>}
              <div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>{t.name}</p>
                  {wasOn&&isOn?<span style={{fontSize:10,fontWeight:500,color:"#34C759",padding:"2px 8px",borderRadius:980,background:dark?"rgba(52,199,89,0.12)":"rgba(52,199,89,0.08)"}}>Active</span>:null}
                </div>
                <p style={{fontSize:11,fontWeight:400,color:sub}}>{t.desc}</p>
              </div>
            </div>
            {!isCancelling?<button onClick={function(){
              if(isOn&&wasOn){sCancelTier(key);}
              else if(isOn&&!wasOn){t.set(null);}
              else{t.set(t.def);sCancelTier(null);}
            }} style={{width:44,height:26,borderRadius:13,border:"none",background:isOn?"#34C759":(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",position:"relative",transition:"background .3s ease",flexShrink:0}}>
              <div style={{position:"absolute",top:3,left:isOn?21:3,width:20,height:20,borderRadius:"50%",background:"#FFF",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left .3s cubic-bezier(.22,1,.36,1)"}}></div>
            </button>:null}
          </div>

          {/* Cancel confirmation — inline */}
          {isCancelling?<div style={{padding:"16px 18px",borderRadius:12,background:dark?"rgba(255,69,58,0.08)":"rgba(255,59,48,0.05)",border:"1px solid "+(dark?"rgba(255,69,58,0.15)":"rgba(255,59,48,0.1)")}}>
            <p style={{fontSize:13,fontWeight:400,color:red,fontFamily:"'Inter',sans-serif",marginBottom:4}}>Cancel this promotion?</p>
            <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:14}}>Your remaining time will end immediately. This cannot be undone and the payment is non-refundable.</p>
            <div style={{display:"flex",gap:8}}>
              <button onClick={function(){sCancelTier(null);}} style={{flex:1,padding:"10px 0",borderRadius:10,border:"1px solid "+bd,background:"transparent",color:ink,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>Keep it</button>
              <button onClick={function(){t.set(null);sCancelTier(null);}} style={{flex:1,padding:"10px 0",borderRadius:10,border:"none",background:red,color:"#FFF",cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif"}}>Cancel promotion</button>
            </div>
          </div>:null}

          {/* Duration picker */}
          {isOn&&!isCancelling?<div>
            <div style={{display:"flex",gap:8,paddingTop:4}}>
              {opts.map(function(o){
                var isSelected=t.val===o.k;
                var wasPrev=t.orig===o.k;
                return <button key={o.k} onClick={function(){t.set(o.k);}} style={{flex:1,padding:"10px 6px",borderRadius:10,border:isSelected?"1.5px solid "+ink:"1px solid "+bd,background:isSelected?(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.02)"):"transparent",cursor:"pointer",textAlign:"center",transition:"all .3s",position:"relative"}}>
                  <p style={{fontSize:12,fontWeight:isSelected?500:300,color:ink,fontFamily:"'Inter',sans-serif"}}>{o.l}</p>
                  <p style={{fontSize:11,fontWeight:400,color:isSelected?ink:sub,marginTop:2}}>{o.p}</p>
                  {wasPrev&&!isSelected?<p style={{fontSize:9,fontWeight:400,color:mt,marginTop:3}}>current</p>:null}
                  {isSelected&&wasPrev?<p style={{fontSize:9,fontWeight:400,color:"#34C759",marginTop:3}}>active</p>:null}
                  {isSelected&&!wasPrev?<p style={{fontSize:9,fontWeight:400,color:blue,marginTop:3}}>new</p>:null}
                </button>;
              })}
            </div>
            {wasOn&&t.val!==t.orig?<p style={{fontSize:11,fontWeight:400,color:orange,marginTop:10}}>Changing from {t.orig} to {t.val} — a new charge will apply.</p>:null}
          </div>:null}

          {/* Removed state */}
          {!isOn&&wasOn&&!isCancelling?<p style={{fontSize:11,fontWeight:400,color:red,paddingTop:6}}>This promotion will be cancelled.</p>:null}
        </div>;
      };

      return <div className="promo-backdrop" onClick={function(){sPromoteDeal(null);sCancelTier(null);sPayStep(0);sPayMethod(null);sPayVerifying(false);sPayDone(false);}} style={{position:"fixed",inset:0,zIndex:50,background:"rgba(0,0,0,"+(dark?"0.6":"0.3")+")",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div onClick={function(e){e.stopPropagation();}} className="promo-modal" style={{width:payStep===0?840:460,maxWidth:"94vw",maxHeight:"90vh",overflow:"auto",borderRadius:24,background:bg2,boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 40px 120px rgba(0,0,0,0.1)",padding:"36px 32px",position:"relative",transition:"width .3s cubic-bezier(.16,1,.3,1)"}}>

          {/* Close */}
          <button onClick={function(){sPromoteDeal(null);sCancelTier(null);sPayStep(0);sPayMethod(null);sPayVerifying(false);sPayDone(false);}} style={{position:"absolute",top:18,right:18,width:28,height:28,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",border:"none",cursor:"pointer",color:sub,fontSize:11,display:"flex",alignItems:"center",justifyContent:"center"}}>{"\u2715"}</button>

          {/* Deal preview */}
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:28}}>
            <div style={{width:48,height:48,borderRadius:12,background:promoteDeal.img,backgroundSize:"cover",backgroundPosition:promoteDeal._pos||"center",flexShrink:0}}></div>
            <div style={{minWidth:0}}>
              <p style={{fontSize:16,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{promoteDeal.title}</p>
              <p style={{fontSize:12,fontWeight:400,color:sub}}>{promoteDeal.store} {"\u00B7"} {promoteDeal.cat}</p>
            </div>
          </div>

          <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink,marginBottom:6}}>{payStep===0?"Manage promotions":payStep===1?"Payment":payDone?"Done":"Scan & Pay"}</p>
          <p style={{fontSize:13,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:28}}>{payStep===0?((origHero||origBoost)?"Review or update your active promotions.":"Get more eyes on your deal. Pick one or combine for maximum reach."):payStep===1?"Select how you'd like to pay":payDone?"":"Scan the QR code below — we'll confirm automatically"}</p>

          {/* Tiers */}
          {payStep===0?<div className="promo-cols" style={{display:"flex",gap:28}}>
          {/* LEFT — Options */}
          <div style={{flex:1,minWidth:0}}>
          {renderTier("hero")}
          {renderTier("boost")}

          {/* Premium placements — inquiry-based */}
          <div style={{marginTop:8,marginBottom:0,padding:"18px 20px",borderRadius:16,border:"1.5px solid "+bd,background:"transparent",transition:"all .3s"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              <div style={{flex:1}}>
                <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Sponsored Card</p>
                <p style={{fontSize:11,fontWeight:400,color:sub}}>Your deal appears inside category rows — mixed with organic results</p>
              </div>
              <span style={{fontSize:10,fontWeight:500,color:dark?"#A78BFA":"#7C3AED",padding:"3px 10px",borderRadius:980,background:dark?"rgba(167,139,250,0.1)":"rgba(124,58,237,0.06)",flexShrink:0}}>Premium</span>
            </div>
            <div style={{display:"flex",gap:12,fontSize:11,color:sub,marginBottom:14}}>
              <span>{"\u2713"} Blends into feed naturally</span>
              <span>{"\u2713"} High click-through</span>
              <span>{"\u2713"} 7–30 day slots</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:400,color:mt}}>From $29/week</span>
              <button onClick={function(){if(openInquiry)openInquiry("sponsored");sPromoteDeal(null);}} style={{padding:"8px 18px",borderRadius:980,border:"1px solid "+bd,background:"transparent",color:ink,cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"all .3s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>Contact us</button>
            </div>
          </div>
          </div>

          {/* RIGHT — Summary + Action */}
          <div className="promo-sidebar" style={{width:280,flexShrink:0}}>
            <div style={{position:"sticky",top:0,padding:"20px 22px",borderRadius:18,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)",border:"1px solid "+bd}}>
              <p style={{fontSize:14,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:20}}>Order summary</p>

              {/* Line items */}
              {promoHero?<div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontSize:12,fontWeight:400,color:sub}}>Hero Spotlight ({promoHero})</span>
                <span style={{fontSize:12,fontWeight:500,color:ink}}>${priceOf("hero",promoHero).toFixed(2)}</span>
              </div>:null}
              {promoSuggest?<div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontSize:12,fontWeight:400,color:sub}}>Boost ({promoSuggest})</span>
                <span style={{fontSize:12,fontWeight:500,color:ink}}>${priceOf("boost",promoSuggest).toFixed(2)}</span>
              </div>:null}
              {!promoHero&&!promoSuggest?<p style={{fontSize:12,fontWeight:400,color:mt,marginBottom:8}}>No promotions selected</p>:null}

              {/* Change indicators */}
              {hasChanges?<div style={{marginTop:4,marginBottom:8}}>
                {promoHero&&!origHero?<p style={{fontSize:11,fontWeight:400,color:"#34C759",marginBottom:2}}>{"\u002B"} Added Hero Spotlight</p>:null}
                {promoHero&&origHero&&promoHero!==origHero?<p style={{fontSize:11,fontWeight:400,color:orange,marginBottom:2}}>{"\u21BB"} Changed Hero {origHero} → {promoHero}</p>:null}
                {!promoHero&&origHero?<p style={{fontSize:11,fontWeight:400,color:red,marginBottom:2}}>{"\u2212"} Cancelled Hero Spotlight</p>:null}
                {promoSuggest&&!origBoost?<p style={{fontSize:11,fontWeight:400,color:"#34C759",marginBottom:2}}>{"\u002B"} Added Boost</p>:null}
                {promoSuggest&&origBoost&&promoSuggest!==origBoost?<p style={{fontSize:11,fontWeight:400,color:orange,marginBottom:2}}>{"\u21BB"} Changed Boost {origBoost} → {promoSuggest}</p>:null}
                {!promoSuggest&&origBoost?<p style={{fontSize:11,fontWeight:400,color:red,marginBottom:2}}>{"\u2212"} Cancelled Boost</p>:null}
              </div>:null}

              {/* Total */}
              <div style={{borderTop:"1px solid "+bd,paddingTop:16,marginTop:12,display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
                <p style={{fontSize:13,fontWeight:400,color:ink}}>Total</p>
                <p style={{fontSize:22,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>${newTotal.toFixed(2)}</p>
              </div>

              {/* Action */}
              <button onClick={function(){
                if(!hasChanges){sPromoteDeal(null);sCancelTier(null);sPayStep(0);sPayMethod(null);sPayVerifying(false);sPayDone(false);return;}
                if(isRemoving){onUpdate(promoteDeal.id,{_boost:promoHero,_suggestBoost:promoSuggest,feat:!!promoHero});showToast("Promotions cancelled");sPromoteDeal(null);sCancelTier(null);sPayStep(0);sPayMethod(null);return;}
                sPayStep(1);
              }} style={{width:"100%",padding:"14px 0",borderRadius:980,background:hasChanges?(isRemoving?red:ink):"transparent",color:hasChanges?"#FFF":sub,border:"1px solid "+(hasChanges?ink:bd),cursor:hasChanges?"pointer":"default",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.1px",transition:"all .4s cubic-bezier(.16,1,.3,1)"}}>{
                !hasChanges?"No changes":
                isRemoving?"Cancel promotions":
                "Pay $"+newTotal.toFixed(2)
              }</button>

              {/* No changes state */}
              {!hasChanges&&(origHero||origBoost)?<div style={{padding:"12px 14px",borderRadius:12,background:dark?"rgba(52,199,89,0.06)":"rgba(52,199,89,0.04)",marginTop:14,textAlign:"center"}}>
                <p style={{fontSize:11,fontWeight:400,color:"#34C759"}}>All promotions running</p>
              </div>:null}
            </div>
          </div>
          </div>:null}

          {/* ── Step 1: Payment method ── */}
          {payStep===1?<div style={{animation:"fadeIn .35s cubic-bezier(.22,1,.36,1) both"}}>
            <div style={{borderTop:"1px solid "+bd,paddingTop:24,marginTop:4}}>
              <p style={{fontSize:18,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:4}}>Pay ${ newTotal.toFixed(2)}</p>
              <p style={{fontSize:12,fontWeight:400,color:sub,marginBottom:22}}>Choose your payment method</p>

              {[
                {id:"khqr",name:"KHQR",desc:"Scan with any bank app",icon:function(){return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="4" height="4" rx="0.5"/><line x1="22" y1="14" x2="22" y2="22"/><line x1="14" y1="22" x2="22" y2="22"/></svg>;}},
                {id:"aba",name:"ABA Pay",desc:"ABA Mobile app",icon:function(){return <div style={{width:22,height:22,borderRadius:5,background:"linear-gradient(135deg,#005BAA,#0073D4)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:8,fontWeight:700,color:"#FFF",letterSpacing:"-0.2px"}}>ABA</span></div>;}},
                {id:"wing",name:"Wing Money",desc:"Wing app or agent",icon:function(){return <div style={{width:22,height:22,borderRadius:5,background:"linear-gradient(135deg,#F7941D,#FBBF24)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:7,fontWeight:700,color:"#FFF",letterSpacing:"-0.3px"}}>W</span></div>;}}
              ].map(function(m){
                return <button key={m.id} onClick={function(){sPayMethod(m.id);sPayStep(2);}} style={{width:"100%",padding:"16px 20px",borderRadius:14,border:"1px solid "+bd,background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",gap:14,marginBottom:8,transition:"all .3s cubic-bezier(.16,1,.3,1)"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)";e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>
                  {m.icon()}
                  <div style={{flex:1,textAlign:"left"}}>
                    <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>{m.name}</p>
                    <p style={{fontSize:11,fontWeight:400,color:sub}}>{m.desc}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>;
              })}
            </div>
            <p onClick={function(){sPayStep(0);sPayMethod(null);}} style={{textAlign:"center",fontSize:12,fontWeight:400,color:sub,marginTop:16,cursor:"pointer"}}>{"\u2190"} Back to promotions</p>
          </div>:null}

          {/* ── Step 2: QR Code display ── */}
          {payStep===2&&!payDone?<div style={{animation:"fadeIn .35s cubic-bezier(.22,1,.36,1) both"}}>
            <div style={{borderTop:"1px solid "+bd,paddingTop:24,marginTop:4}}>

              {/* Compact horizontal layout: QR left, details right */}
              <div className="qr-row" style={{display:"flex",gap:28,alignItems:"flex-start"}}>
                {/* QR Code */}
                <div className="qr-box" style={{flexShrink:0}}>
                  <div style={{width:180,height:180,borderRadius:14,background:dark?"rgba(255,255,255,0.95)":"#FFF",border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"),padding:10,boxShadow:"0 2px 12px rgba(0,0,0,"+(dark?"0.3":"0.05")+")"}}>
                    <svg width="100%" height="100%" viewBox="0 0 176 176">
                      <rect x="8" y="8" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                      <rect x="18" y="18" width="24" height="24" rx="2" fill="#1D1D1F"/>
                      <rect x="124" y="8" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                      <rect x="134" y="18" width="24" height="24" rx="2" fill="#1D1D1F"/>
                      <rect x="8" y="124" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                      <rect x="18" y="134" width="24" height="24" rx="2" fill="#1D1D1F"/>
                      {[[64,8],[72,8],[80,8],[96,8],[104,8],[64,16],[88,16],[104,16],[112,16],[64,24],[72,24],[96,24],[112,24],[64,32],[80,32],[88,32],[96,32],[104,32],[112,32],[64,40],[72,40],[80,40],[96,40],[8,64],[16,64],[32,64],[48,64],[64,64],[80,64],[96,64],[112,64],[128,64],[144,64],[160,64],[8,72],[32,72],[48,72],[72,72],[88,72],[104,72],[128,72],[152,72],[8,80],[16,80],[24,80],[48,80],[64,80],[80,80],[96,80],[112,80],[136,80],[152,80],[160,80],[24,88],[40,88],[56,88],[72,88],[96,88],[112,88],[128,88],[144,88],[160,88],[8,96],[32,96],[56,96],[64,96],[80,96],[88,96],[104,96],[120,96],[136,96],[160,96],[8,104],[24,104],[40,104],[48,104],[72,104],[88,104],[96,104],[128,104],[144,104],[160,104],[8,112],[16,112],[32,112],[48,112],[64,112],[80,112],[104,112],[120,112],[136,112],[152,112],[64,128],[72,128],[88,128],[104,128],[120,128],[144,128],[160,128],[64,136],[80,136],[96,136],[112,136],[128,136],[152,136],[64,144],[72,144],[88,144],[96,144],[120,144],[136,144],[160,144],[64,152],[80,152],[96,152],[104,152],[112,152],[128,152],[144,152],[64,160],[72,160],[88,160],[104,160],[120,160],[136,160],[152,160],[160,160]].map(function(p,i){return <rect key={i} x={p[0]} y={p[1]} width="7" height="7" rx="1" fill="#1D1D1F"/>;})}
                      <circle cx="88" cy="88" r="14" fill="#FFF"/>
                      <circle cx="88" cy="88" r="12" fill={payMethod==="aba"?"#005BAA":payMethod==="wing"?"#F7941D":"#D42631"}/>
                      <text x="88" y="92" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700" fontFamily="sans-serif">{payMethod==="aba"?"ABA":payMethod==="wing"?"W":"EP"}</text>
                    </svg>
                  </div>
                </div>

                {/* Details right */}
                <div className="qr-details" style={{flex:1,minWidth:0}}>
                  {/* Method badge + amount */}
                  <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:980,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",marginBottom:12}}>
                    {payMethod==="khqr"?<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/></svg>:null}
                    {payMethod==="aba"?<div style={{width:12,height:12,borderRadius:2,background:"linear-gradient(135deg,#005BAA,#0073D4)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:4,fontWeight:700,color:"#FFF"}}>ABA</span></div>:null}
                    {payMethod==="wing"?<div style={{width:12,height:12,borderRadius:2,background:"linear-gradient(135deg,#F7941D,#FBBF24)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:4,fontWeight:700,color:"#FFF"}}>W</span></div>:null}
                    <span style={{fontSize:10,fontWeight:400,color:ink}}>{payMethod==="khqr"?"KHQR":payMethod==="aba"?"ABA Pay":"Wing Money"}</span>
                  </div>

                  <p style={{fontSize:28,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:4}}>{"$"+newTotal.toFixed(2)}</p>
                  <p style={{fontSize:11,fontWeight:400,color:mt,marginBottom:18}}>ePromotion · deal boost</p>

                  <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:20}}>{payMethod==="khqr"?"Open any banking app and scan the QR code.":payMethod==="aba"?"Open ABA Mobile, tap Scan QR.":"Open Wing Money app, tap Pay."}</p>

                  {/* Status */}
                  {!payVerifying?<div>
                    <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:980,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",border:"1px solid "+bd}}>
                      <div style={{width:7,height:7,borderRadius:"50%",background:green,animation:"pulse 2s ease-in-out infinite"}}></div>
                      <span style={{fontSize:12,fontWeight:400,color:ink}}>Waiting for payment</span>
                    </div>
                    <p onClick={function(){sPayStep(1);sPayMethod(null);sPayVerifying(false);}} style={{fontSize:11,fontWeight:400,color:sub,marginTop:12,cursor:"pointer"}}>{"\u2190"} Change method</p>
                  </div>:null}

                  {payVerifying?<div>
                    <div style={{display:"flex",gap:5,marginBottom:10}}>
                      <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0s"}}></div>
                      <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0.2s"}}></div>
                      <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0.4s"}}></div>
                    </div>
                    <p style={{fontSize:13,fontWeight:400,color:ink}}>Payment detected</p>
                    <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:3}}>Confirming with {payMethod==="khqr"?"Bakong":payMethod==="aba"?"ABA":"Wing"}...</p>
                  </div>:null}
                </div>
              </div>
            </div>
          </div>:null}

          {/* ── Step 3: Success state ── */}
          {payDone?<div style={{textAlign:"center",padding:"20px 0 8px",animation:"fadeIn .35s cubic-bezier(.22,1,.36,1) both"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(52,199,89,0.1)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",animation:"fadeIn .5s cubic-bezier(.22,1,.36,1) both"}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:6}}>Payment confirmed</p>
            <p style={{fontSize:13,fontWeight:400,color:sub,marginBottom:16}}>Your promotion is now live</p>
            <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:980,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)"}}>
              <span style={{fontSize:10,fontWeight:400,color:mt}}>Ref: EP-{Date.now().toString(36).toUpperCase()}</span>
            </div>
          </div>:null}
        </div>
      </div>;
    }()):null}

  </div>;
}

function QuickPost({open,onClose,dark,account,onPublish,onNeedAuth}){
  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#666":"#999";var bd=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)";var sub=dark?"#BBB":"#555";
  var[postType,sPostType]=useState("promo");
  var[title,sTitle]=useState("");var[desc,sDesc]=useState("");
  var[price,sPrice]=useState("");var[orig,sOrig]=useState("");
  var[cat,sCat]=useState("");var[showAllCats,sShowAllCats]=useState(false);
  var[expires,sExpires]=useState("7d");var[dateMode,sDateMode]=useState("duration");var[endDate,sEndDate]=useState("");
  var[media,sMedia]=useState([]);
  var[dragIdx,sDragIdx]=useState(null);
  var[dragOverIdx,sDragOverIdx]=useState(null);
  var[boost,sBoost]=useState(null);
  var[suggestBoost,sSuggestBoost]=useState(null);
  
  var[toast,sToast]=useState("");
  var[qpPayStep,sQpPayStep]=useState(0);var[qpPayMethod,sQpPayMethod]=useState(null);var[qpPayVerifying,sQpPayVerifying]=useState(false);var[qpPayDone,sQpPayDone]=useState(false);
  var qpPendingDeal=useRef(null);var qpPollRef=useRef(null);
  var qpBoostPrice=function(){var t=0;if(boost==="1d")t+=4.99;if(boost==="3d")t+=9.99;if(boost==="7d")t+=19.99;if(suggestBoost==="3d")t+=3.99;if(suggestBoost==="7d")t+=7.99;if(suggestBoost==="14d")t+=12.99;return t;};
  /* Auto-detect payment poll */
  useEffect(function(){
    if(qpPayStep===2&&!qpPayDone&&!qpPayVerifying){
      var delay=5000+Math.floor(Math.random()*3000);var started=Date.now();
      qpPollRef.current=setInterval(function(){
        if(Date.now()-started>=delay){clearInterval(qpPollRef.current);sQpPayVerifying(true);setTimeout(function(){sQpPayVerifying(false);sQpPayDone(true);},1500);}
      },3000);
      return function(){if(qpPollRef.current)clearInterval(qpPollRef.current);};
    }
    return function(){if(qpPollRef.current)clearInterval(qpPollRef.current);};
  },[qpPayStep,qpPayDone,qpPayVerifying]);
  /* Auto-close on success */
  useEffect(function(){
    if(qpPayDone&&qpPendingDeal.current){
      var t=setTimeout(function(){
        onPublish(qpPendingDeal.current);qpPendingDeal.current=null;
        showToast("Deal is live + promoted!");
        sQpPayStep(0);sQpPayMethod(null);sQpPayDone(false);sQpPayVerifying(false);
        setTimeout(function(){sTitle("");sDesc("");sPrice("");sOrig("");sCat("");sExpires("7d");sDateMode("duration");sEndDate("");sMedia([]);sPostType("promo");sBoost(null);sSuggestBoost(null);onClose();},600);
      },2200);
      return function(){clearTimeout(t);};
    }
  },[qpPayDone]);
  var ALL_CATS=["Food","Wellness","Technology","Shopping","Fashion","Beauty","Home","Automotive","Kids","Pets","Sports","Art","Services","Travel"];
  var visibleCats=showAllCats?ALL_CATS:ALL_CATS.slice(0,6);
  useEffect(function(){if(open){sQpPayStep(0);sQpPayMethod(null);sQpPayVerifying(false);sQpPayDone(false);qpPendingDeal.current=null;}},[open]);
  if(!open)return null;
  var dcPrev=(price&&orig&&parseFloat(orig)>0)?Math.round((1-parseFloat(price)/parseFloat(orig))*100):0;

  var addMedia=function(){
    if(media.length>=10)return;
    sMedia(function(p){return p.concat({id:Date.now()+Math.random(),type:Math.random()>0.75?"video":"image"});});
  };
  var removeMedia=function(id){sMedia(function(p){return p.filter(function(m){return m.id!==id;});});};
  var moveMedia=function(fromIdx,toIdx){
    sMedia(function(p){
      var arr=p.slice();var item=arr.splice(fromIdx,1)[0];arr.splice(toIdx,0,item);return arr;
    });
  };
  var onDragStart=function(idx){sDragIdx(idx);};
  var onDragOver=function(e,idx){e.preventDefault();if(idx!==dragOverIdx)sDragOverIdx(idx);};
  var onDrop=function(e,idx){e.preventDefault();if(dragIdx!==null&&dragIdx!==idx)moveMedia(dragIdx,idx);sDragIdx(null);sDragOverIdx(null);};
  var onDragEnd=function(){sDragIdx(null);sDragOverIdx(null);};
  var showToast=function(msg){sToast(msg);setTimeout(function(){sToast("");},2500);};

  var publish=function(){
    if(!account){onNeedAuth();return;}
    if(!title||!price)return;
    var p=parseFloat(price)||0;var o=parseFloat(orig)||p;
    var dc=o>0?Math.round((1-p/o)*100):0;
    var g=GRADIENTS[Math.floor(Math.random()*GRADIENTS.length)];
    var finalExpires=postType==="product"?"none":dateMode==="ongoing"?"none":dateMode==="date"?(endDate||"7d"):expires;
    var dealData={id:Date.now(),title:title,store:account.storeName,desc:desc,price:p,orig:o,dc:dc,cat:cat||"Other",expires:finalExpires,img:g,loc:account.loc,hrs:account.hrs,terms:"",sl:[{g:g}],feat:!!boost,_owner:account.email,_active:true,_type:postType,_boost:boost,_suggestBoost:suggestBoost};
    var hasAnyBoost=boost||suggestBoost;
    if(hasAnyBoost){
      /* Route to payment flow */
      qpPendingDeal.current=dealData;
      sQpPayStep(1);
      return;
    }
    onPublish(dealData);
    showToast(postType==="promo"?"Promotion is live":"Product is live");
    setTimeout(function(){sTitle("");sDesc("");sPrice("");sOrig("");sCat("");sExpires("7d");sDateMode("duration");sEndDate("");sMedia([]);sPostType("promo");sBoost(null);sSuggestBoost(null);onClose();},1200);
  };

  var fs={width:"100%",padding:"0 0 12px",border:"none",borderBottom:"1px solid "+bd,background:"transparent",fontSize:15,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"};
  var ls={fontSize:11,fontWeight:500,color:sub,letterSpacing:"0.5px",marginBottom:8,display:"block"};

  return <div className="det-enter" style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:55,background:bg,overflow:"hidden",display:"flex",flexDirection:"column"}}>

    {toast?<div style={{position:"fixed",top:24,left:"50%",transform:"translateX(-50%)",padding:"10px 28px",borderRadius:980,background:"#27B147",color:"#FFF",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",zIndex:60,animation:"toastIn .4s cubic-bezier(.22,1,.36,1) both",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"}}>{toast}</div>:null}

    {/* Top bar */}
    <div className="dash-pad" style={{padding:"0 40px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,borderBottom:"1px solid "+bd}}>
      <button onClick={onClose} style={{border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif"}}>Cancel</button>
      <span style={{fontSize:14,fontWeight:400}}>Create post</span>
      <button onClick={publish} style={{padding:"8px 24px",borderRadius:980,background:(title&&price)?"#27B147":"transparent",color:(title&&price)?"#FFF":sub,border:"1px solid "+((title&&price)?"#27B147":bd),boxShadow:(title&&price)?"0 2px 12px rgba(39,177,71,0.25)":"none",cursor:(title&&price)?"pointer":"default",fontSize:13,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"all .5s cubic-bezier(.16,1,.3,1)"}}>{(boost||suggestBoost)?"Publish & Pay":(postType==="promo"?"Publish deal":"Publish")}</button>
    </div>

    <div className="scroll-hide" style={{flex:1,overflowY:"auto"}}>
      <div style={{maxWidth:880,margin:"0 auto",padding:"36px 40px 80px"}}>


        {/* POST TYPE TOGGLE */}
        <div style={{marginBottom:32}}>
          <div style={{display:"inline-flex",background:dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",borderRadius:12,padding:3}}>
            {[{k:"promo",l:"Promotion"},{k:"product",l:"Product"}].map(function(t){return <button key={t.k} onClick={function(){sPostType(t.k);}} style={{padding:"9px 20px",border:"none",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:postType===t.k?500:400,background:postType===t.k?(dark?"#2C2C2E":"#FFFFFF"):"transparent",color:postType===t.k?ink:sub,borderRadius:9,boxShadow:postType===t.k?(dark?"0 1px 6px rgba(0,0,0,0.4)":"0 1px 6px rgba(0,0,0,0.12)"):"none",display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all .25s cubic-bezier(.22,1,.36,1)"}}>{t.k==="promo"?<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}{t.l}</button>;})}
          </div>
        </div>

        {/* TITLE */}
        <div style={{marginBottom:28}}>
          <label style={ls}>Title</label>
          <input value={title} onChange={function(e){if(e.target.value.length<=80)sTitle(e.target.value);}} style={{width:"100%",padding:"0 0 14px",border:"none",borderBottom:"1px solid "+bd,background:"transparent",fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}} placeholder={postType==="promo"?"e.g. Buy 1 Get 1 Free Milk Tea":"e.g. Handmade Khmer Silk Scarf"}/>
          <p style={{fontSize:11,fontWeight:400,color:mt,marginTop:6,textAlign:"right"}}>{title.length}/80</p>
        </div>

        {/* MEDIA */}
        <div style={{marginBottom:36}}>
          <label style={ls}>Photos & video <span style={{fontWeight:400,color:mt}}>({media.length}/10)</span></label>
          {media.length===0?
          <div onClick={function(){addMedia();}} style={{width:"100%",padding:"44px 24px",borderRadius:16,border:"1.5px dashed "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",textAlign:"center",transition:"all .3s cubic-bezier(.16,1,.3,1)"}} onMouseEnter={function(e){e.currentTarget.style.borderColor=ink;}} onMouseLeave={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)";}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:10}}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            </div>
            <p style={{fontSize:14,fontWeight:400,color:ink,marginBottom:4}}>Add photos or videos</p>
            <p style={{fontSize:11,fontWeight:400,color:sub}}>First image is the cover</p>
          </div>
          :
          <div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:12}}>
              {media.map(function(m,idx){
                var isDragging=dragIdx===idx;
                var isDragOver=dragOverIdx===idx&&dragIdx!==idx;
                return <div key={m.id} draggable="true" onDragStart={function(){onDragStart(idx);}} onDragOver={function(e){onDragOver(e,idx);}} onDrop={function(e){onDrop(e,idx);}} onDragEnd={onDragEnd} style={{width:100,height:100,borderRadius:12,position:"relative",overflow:"hidden",flexShrink:0,background:m.type==="video"?"linear-gradient(145deg,#3A3A4A,#2A2A3A)":"linear-gradient(145deg,#E0D8D0,#C0B0A0)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"grab",opacity:isDragging?0.4:1,transform:isDragOver?"scale(1.05)":"scale(1)",outline:isDragOver?("2px solid "+(dark?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.15)")):"none",outlineOffset:2,transition:"transform .2s cubic-bezier(.22,1,.36,1),opacity .2s,outline .2s"}}>
                  {m.type==="video"?<svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M8 5v14l11-7z"/></svg>:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>}
                  {m.type==="video"?<div style={{position:"absolute",bottom:6,left:6,padding:"2px 8px",borderRadius:6,background:"rgba(0,0,0,0.5)",fontSize:10,fontWeight:400,color:"#FFF"}}>Video</div>:null}
                  {idx===0?<div style={{position:"absolute",bottom:6,left:m.type==="video"?50:6,padding:"2px 8px",borderRadius:6,background:"rgba(0,0,0,0.5)",fontSize:10,fontWeight:400,color:"#FFF"}}>Cover</div>:null}
                  {/* Drag handle */}
                  <div style={{position:"absolute",top:5,left:5,padding:"2px 4px",borderRadius:4,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",gap:1}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/></svg>
                  </div>
                  <button onClick={function(){removeMedia(m.id);}} style={{position:"absolute",top:5,right:5,width:20,height:20,borderRadius:"50%",background:"rgba(0,0,0,0.5)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",fontSize:9}}>{"\u2715"}</button>
                </div>;
              })}
              {media.length<10?<div onClick={function(){addMedia();}} style={{width:100,height:100,borderRadius:12,border:"1px dashed "+mt,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",gap:4,transition:"border-color .3s"}} onMouseEnter={function(e){e.currentTarget.style.borderColor=ink;}} onMouseLeave={function(e){e.currentTarget.style.borderColor=mt;}}>
                <span style={{fontSize:20,fontWeight:500,color:mt}}>+</span>
                <span style={{fontSize:10,fontWeight:400,color:sub}}>Add</span>
              </div>:null}
            </div>
            {media.length>1?<p style={{fontSize:11,fontWeight:400,color:mt,marginTop:4}}>Drag to reorder. First image is the cover.</p>:null}
          </div>
          }
        </div>


        {/* DESCRIPTION */}
        <div style={{marginBottom:28}}>
          <label style={ls}>Short description <span style={{fontWeight:400,color:mt}}>(optional)</span></label>
          <textarea value={desc} onChange={function(e){if(e.target.value.length<=150)sDesc(e.target.value);}} rows={2} style={Object.assign({},fs,{resize:"none",lineHeight:1.7})} placeholder={postType==="promo"?"Quick summary of the deal...":"Describe your product briefly..."}/>
          <p style={{fontSize:11,fontWeight:400,color:mt,textAlign:"right"}}>{desc.length}/150</p>
        </div>

        {/* PRICE */}
        <div style={{display:"flex",gap:24,marginBottom:8}}>
          <div style={{flex:1}}><label style={ls}>{postType==="promo"?"Deal price ($)":"Price ($)"}</label><input value={price} onChange={function(e){sPrice(e.target.value);}} style={fs} placeholder="0.00" type="number"/></div>
          <div style={{flex:1}}><label style={ls}>Original price ($) {postType==="product"?<span style={{fontWeight:400,color:mt}}>optional</span>:null}</label><input value={orig} onChange={function(e){sOrig(e.target.value);}} style={fs} placeholder="0.00" type="number"/></div>
        </div>
        {dcPrev>0?<p style={{fontSize:13,fontWeight:400,color:"#34C759",marginBottom:28}}>Customers save {dcPrev}% {" \u2014 "}${(parseFloat(orig)-parseFloat(price)).toFixed(2)} off</p>:<div style={{height:28}}></div>}

        {/* CATEGORY — expandable */}
        <div style={{marginBottom:28}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
            <label style={Object.assign({},ls,{marginBottom:0})}>Category</label>
            <button onClick={function(){sShowAllCats(!showAllCats);}} style={{border:"none",background:"none",cursor:"pointer",fontSize:12,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif"}}>{showAllCats?"Show less":"All "+ALL_CATS.length}</button>
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{visibleCats.map(function(c){return <button key={c} onClick={function(){sCat(cat===c?"":c);}} style={{padding:"10px 18px",borderRadius:980,border:"1px solid "+(cat===c?"#27B147":bd),background:cat===c?"rgba(39,177,71,0.08)":"transparent",color:cat===c?"#27B147":sub,fontSize:13,fontWeight:cat===c?500:400,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .3s cubic-bezier(.22,1,.36,1)"}}>{c}</button>;})}</div>
        </div>

        {/* HOW LONG — promo only; products stay listed until removed */}
        {postType==="promo"?<div style={{marginBottom:36}}>
          <label style={ls}>How long</label>
          <div style={{display:"flex",background:dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",borderRadius:12,padding:3,marginBottom:14}}>
            {[{k:"duration",l:"Duration"},{k:"date",l:"Pick a date"},{k:"ongoing",l:"No end date"}].map(function(m){return <button key={m.k} onClick={function(){sDateMode(m.k);}} style={{flex:1,padding:"10px 0",border:"none",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontSize:12,fontWeight:dateMode===m.k?500:400,background:dateMode===m.k?(dark?"#2C2C2E":"#FFFFFF"):"transparent",color:dateMode===m.k?ink:sub,borderRadius:9,boxShadow:dateMode===m.k?(dark?"0 1px 6px rgba(0,0,0,0.4)":"0 1px 6px rgba(0,0,0,0.12)"):"none",transition:"all .25s cubic-bezier(.22,1,.36,1)"}}>{m.l}</button>;})}
          </div>
          {dateMode==="duration"?<div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{[{v:"1d",l:"1 day"},{v:"3d",l:"3 days"},{v:"7d",l:"1 week"},{v:"14d",l:"2 weeks"},{v:"30d",l:"1 month"},{v:"90d",l:"3 months"}].map(function(o){return <button key={o.v} onClick={function(){sExpires(o.v);}} style={{padding:"10px 16px",borderRadius:980,border:"1px solid "+(expires===o.v?"#27B147":bd),background:expires===o.v?"rgba(39,177,71,0.08)":"transparent",color:expires===o.v?"#27B147":sub,fontSize:13,fontWeight:expires===o.v?500:400,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .3s cubic-bezier(.22,1,.36,1)"}}>{o.l}</button>;})}</div>:null}
          {dateMode==="date"?<input type="date" value={endDate} onChange={function(e){sEndDate(e.target.value);}} style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid "+bd,background:"transparent",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}}/>:null}
          {dateMode==="ongoing"?<div style={{padding:"12px 16px",borderRadius:12,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",display:"flex",alignItems:"center",gap:10}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/></svg><span style={{fontSize:13,fontWeight:400,color:sub}}>This post stays active until you remove it</span></div>:null}
        </div>
        :<div style={{marginBottom:36,padding:"12px 16px",borderRadius:12,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",display:"flex",alignItems:"center",gap:10}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg><span style={{fontSize:13,fontWeight:400,color:sub}}>Products stay listed until you remove them</span></div>}

        {/* Promote — self-service ad placements */}
        <div style={{marginBottom:36}}>
          <label style={ls}>Promote <span style={{fontWeight:400,color:mt}}>optional</span></label>
          <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:18}}>Get more eyes on your deal. Pick one or combine for maximum reach.</p>

          {/* Tier 1: Hero */}
          <div style={{marginBottom:14,padding:"18px 20px",borderRadius:16,border:(boost?"2px solid "+ink:"1.5px solid "+bd),background:boost?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",transition:"all .3s cubic-bezier(.16,1,.3,1)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:boost?12:0}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <div>
                  <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Hero Spotlight</p>
                  <p style={{fontSize:11,fontWeight:400,color:sub}}>Featured banner on homepage — seen first</p>
                </div>
              </div>
              <button onClick={function(){sBoost(boost?null:"1d");}} style={{width:44,height:26,borderRadius:13,border:"none",background:boost?"#34C759":(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",position:"relative",transition:"background .3s ease",flexShrink:0}}><div style={{position:"absolute",top:3,left:boost?21:3,width:20,height:20,borderRadius:"50%",background:"#FFF",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left .3s cubic-bezier(.22,1,.36,1)"}}></div></button>
            </div>
            {boost?<div style={{display:"flex",gap:8,paddingTop:4}}>
              {[{k:"1d",l:"1 day",p:"$4.99"},{k:"3d",l:"3 days",p:"$9.99"},{k:"7d",l:"7 days",p:"$19.99"}].map(function(o){return <button key={o.k} onClick={function(){sBoost(o.k);}} style={{flex:1,padding:"10px 6px",borderRadius:10,border:boost===o.k?"1.5px solid "+ink:"1px solid "+bd,background:boost===o.k?(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.02)"):"transparent",cursor:"pointer",textAlign:"center",transition:"all .3s"}}>
                <p style={{fontSize:12,fontWeight:boost===o.k?500:300,color:ink,fontFamily:"'Inter',sans-serif"}}>{o.l}</p>
                <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:2}}>{o.p}</p>
              </button>;})}
            </div>:null}
          </div>

          {/* Tier 2: Boost */}
          <div style={{marginBottom:14,padding:"18px 20px",borderRadius:16,border:(suggestBoost?"2px solid "+ink:"1.5px solid "+bd),background:suggestBoost?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",transition:"all .3s cubic-bezier(.16,1,.3,1)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:suggestBoost?12:0}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                <div>
                  <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Boost</p>
                  <p style={{fontSize:11,fontWeight:400,color:sub}}>Suggested to users + pinned in category</p>
                </div>
              </div>
              <button onClick={function(){sSuggestBoost(suggestBoost?null:"3d");}} style={{width:44,height:26,borderRadius:13,border:"none",background:suggestBoost?"#34C759":(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",position:"relative",transition:"background .3s ease",flexShrink:0}}><div style={{position:"absolute",top:3,left:suggestBoost?21:3,width:20,height:20,borderRadius:"50%",background:"#FFF",boxShadow:"0 1px 3px rgba(0,0,0,0.2)",transition:"left .3s cubic-bezier(.22,1,.36,1)"}}></div></button>
            </div>
            {suggestBoost?<div style={{display:"flex",gap:8,paddingTop:4}}>
              {[{k:"3d",l:"3 days",p:"$3.99"},{k:"7d",l:"7 days",p:"$7.99"},{k:"14d",l:"14 days",p:"$12.99"}].map(function(o){return <button key={o.k} onClick={function(){sSuggestBoost(o.k);}} style={{flex:1,padding:"10px 6px",borderRadius:10,border:suggestBoost===o.k?"1.5px solid "+ink:"1px solid "+bd,background:suggestBoost===o.k?(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.02)"):"transparent",cursor:"pointer",textAlign:"center",transition:"all .3s"}}>
                <p style={{fontSize:12,fontWeight:suggestBoost===o.k?500:300,color:ink,fontFamily:"'Inter',sans-serif"}}>{o.l}</p>
                <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:2}}>{o.p}</p>
              </button>;})}
            </div>:null}
          </div>

          {/* Total summary */}
          {(boost||suggestBoost)?<div style={{padding:"14px 20px",borderRadius:12,background:dark?"rgba(52,199,89,0.08)":"rgba(52,199,89,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <p style={{fontSize:12,fontWeight:400,color:dark?"#4ADE80":"#34C759",fontFamily:"'Inter',sans-serif"}}>Promotion total</p>
            <p style={{fontSize:14,fontWeight:500,color:dark?"#4ADE80":"#34C759",fontFamily:"'Inter',sans-serif"}}>{"$"+(function(){var t=0;if(boost==="1d")t+=4.99;if(boost==="3d")t+=9.99;if(boost==="7d")t+=19.99;if(suggestBoost==="3d")t+=3.99;if(suggestBoost==="7d")t+=7.99;if(suggestBoost==="14d")t+=12.99;return t.toFixed(2);}())}</p>
          </div>:null}
        </div>

        </div>
    </div>

    {/* ── QuickPost Payment Overlay ── */}
    {qpPayStep>0?<div onClick={function(){sQpPayStep(0);sQpPayMethod(null);sQpPayVerifying(false);sQpPayDone(false);qpPendingDeal.current=null;}} style={{position:"fixed",inset:0,zIndex:60,background:"rgba(0,0,0,"+(dark?"0.6":"0.3")+")",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div onClick={function(e){e.stopPropagation();}} className="promo-modal" style={{width:460,maxWidth:"92vw",maxHeight:"90vh",overflow:"auto",borderRadius:24,background:bg2,boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 40px 120px rgba(0,0,0,0.1)",padding:"36px 32px",position:"relative"}}>

        {/* Close */}
        <button onClick={function(){sQpPayStep(0);sQpPayMethod(null);sQpPayVerifying(false);sQpPayDone(false);qpPendingDeal.current=null;}} style={{position:"absolute",top:18,right:18,width:28,height:28,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",border:"none",cursor:"pointer",color:sub,fontSize:11,display:"flex",alignItems:"center",justifyContent:"center"}}>{"\u2715"}</button>

        {/* Header */}
        <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink,marginBottom:6}}>{qpPayDone?"Done":qpPayStep===1?"Pay to promote":"Scan & Pay"}</p>
        <p style={{fontSize:13,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:28}}>{qpPayDone?"":qpPayStep===1?"Your deal will go live after payment":"Scan the QR code below — we'll confirm automatically"}</p>

        {/* Deal preview */}
        {!qpPayDone?<div style={{display:"flex",alignItems:"center",gap:14,marginBottom:24,padding:"14px 18px",borderRadius:14,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)")}}>
          <div style={{minWidth:0}}>
            <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{title}</p>
            <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>
              <span style={{fontSize:12,fontWeight:400,color:sub}}>${parseFloat(price||0).toFixed(2)}</span>
              {(boost||suggestBoost)?<span style={{fontSize:10,fontWeight:400,color:"#34C759"}}>+ ${qpBoostPrice().toFixed(2)} promotion</span>:null}
            </div>
          </div>
        </div>:null}

        {/* ── Step 1: Method selection ── */}
        {qpPayStep===1?<div>
          <p style={{fontSize:18,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:4}}>Pay ${qpBoostPrice().toFixed(2)}</p>
          <p style={{fontSize:12,fontWeight:400,color:sub,marginBottom:22}}>Choose your payment method</p>

          {[
            {id:"khqr",name:"KHQR",desc:"Scan with any bank app",icon:function(){return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="4" height="4" rx="0.5"/><line x1="22" y1="14" x2="22" y2="22"/><line x1="14" y1="22" x2="22" y2="22"/></svg>;}},
            {id:"aba",name:"ABA Pay",desc:"ABA Mobile app",icon:function(){return <div style={{width:22,height:22,borderRadius:5,background:"linear-gradient(135deg,#005BAA,#0073D4)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:8,fontWeight:700,color:"#FFF",letterSpacing:"-0.2px"}}>ABA</span></div>;}},
            {id:"wing",name:"Wing Money",desc:"Wing app or agent",icon:function(){return <div style={{width:22,height:22,borderRadius:5,background:"linear-gradient(135deg,#F7941D,#FBBF24)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:7,fontWeight:700,color:"#FFF",letterSpacing:"-0.3px"}}>W</span></div>;}}
          ].map(function(m){
            return <button key={m.id} onClick={function(){sQpPayMethod(m.id);sQpPayStep(2);}} style={{width:"100%",padding:"16px 20px",borderRadius:14,border:"1px solid "+bd,background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",gap:14,marginBottom:8,transition:"all .3s cubic-bezier(.16,1,.3,1)"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)";e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>
              {m.icon()}
              <div style={{flex:1,textAlign:"left"}}>
                <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>{m.name}</p>
                <p style={{fontSize:11,fontWeight:400,color:sub}}>{m.desc}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>;
          })}
          <p onClick={function(){sQpPayStep(0);sQpPayMethod(null);qpPendingDeal.current=null;}} style={{textAlign:"center",fontSize:12,fontWeight:400,color:sub,marginTop:16,cursor:"pointer"}}>{"\u2190"} Back to editing</p>
        </div>:null}

        {/* ── Step 2: QR code ── */}
        {qpPayStep===2&&!qpPayDone?<div>
          {/* Method badge */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:20}}>
            <div style={{padding:"5px 14px",borderRadius:980,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",gap:6}}>
              {qpPayMethod==="khqr"?<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/></svg>:null}
              {qpPayMethod==="aba"?<div style={{width:14,height:14,borderRadius:3,background:"linear-gradient(135deg,#005BAA,#0073D4)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:5,fontWeight:700,color:"#FFF"}}>ABA</span></div>:null}
              {qpPayMethod==="wing"?<div style={{width:14,height:14,borderRadius:3,background:"linear-gradient(135deg,#F7941D,#FBBF24)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:5,fontWeight:700,color:"#FFF"}}>W</span></div>:null}
              <span style={{fontSize:11,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>{qpPayMethod==="khqr"?"KHQR":qpPayMethod==="aba"?"ABA Pay":"Wing Money"}</span>
            </div>
          </div>

          {/* Amount */}
          <div style={{textAlign:"center",marginBottom:24}}>
            <p style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink}}>{"$"+qpBoostPrice().toFixed(2)}</p>
            <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:4}}>ePromotion {"\u00B7"} deal boost</p>
          </div>

          {/* QR */}
          <div style={{display:"flex",justifyContent:"center",marginBottom:24}}>
            <div style={{width:200,height:200,borderRadius:16,background:dark?"rgba(255,255,255,0.95)":"#FFF",border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)"),padding:12,boxShadow:"0 2px 16px rgba(0,0,0,"+(dark?"0.3":"0.06")+")"}}>
              <svg width="100%" height="100%" viewBox="0 0 176 176">
                <rect x="8" y="8" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                <rect x="18" y="18" width="24" height="24" rx="2" fill="#1D1D1F"/>
                <rect x="124" y="8" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                <rect x="134" y="18" width="24" height="24" rx="2" fill="#1D1D1F"/>
                <rect x="8" y="124" width="44" height="44" rx="4" fill="none" stroke="#1D1D1F" strokeWidth="5"/>
                <rect x="18" y="134" width="24" height="24" rx="2" fill="#1D1D1F"/>
                {[
                  [64,8],[72,8],[80,8],[96,8],[104,8],[64,16],[88,16],[104,16],[112,16],
                  [64,24],[72,24],[96,24],[112,24],[64,32],[80,32],[88,32],[96,32],[104,32],[112,32],
                  [64,40],[72,40],[80,40],[96,40],
                  [8,64],[16,64],[32,64],[48,64],[64,64],[80,64],[96,64],[112,64],[128,64],[144,64],[160,64],
                  [8,72],[32,72],[48,72],[72,72],[88,72],[104,72],[128,72],[152,72],
                  [8,80],[16,80],[24,80],[48,80],[64,80],[80,80],[96,80],[112,80],[136,80],[152,80],[160,80],
                  [24,88],[40,88],[56,88],[72,88],[96,88],[112,88],[128,88],[144,88],[160,88],
                  [8,96],[32,96],[56,96],[64,96],[80,96],[88,96],[104,96],[120,96],[136,96],[160,96],
                  [8,104],[24,104],[40,104],[48,104],[72,104],[88,104],[96,104],[128,104],[144,104],[160,104],
                  [8,112],[16,112],[32,112],[48,112],[64,112],[80,112],[104,112],[120,112],[136,112],[152,112],
                  [64,128],[72,128],[88,128],[104,128],[120,128],[144,128],[160,128],
                  [64,136],[80,136],[96,136],[112,136],[128,136],[152,136],
                  [64,144],[72,144],[88,144],[96,144],[120,144],[136,144],[160,144],
                  [64,152],[80,152],[96,152],[104,152],[112,152],[128,152],[144,152],
                  [64,160],[72,160],[88,160],[104,160],[120,160],[136,160],[152,160],[160,160]
                ].map(function(p,i){return <rect key={i} x={p[0]} y={p[1]} width="7" height="7" rx="1" fill="#1D1D1F"/>;})}
                <circle cx="88" cy="88" r="14" fill="#FFF"/>
                <circle cx="88" cy="88" r="12" fill={qpPayMethod==="aba"?"#005BAA":qpPayMethod==="wing"?"#F7941D":"#D42631"}/>
                <text x="88" y="92" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700" fontFamily="sans-serif">{qpPayMethod==="aba"?"ABA":qpPayMethod==="wing"?"W":"EP"}</text>
              </svg>
            </div>
          </div>

          {/* Scan instructions */}
          <div style={{textAlign:"center",marginBottom:24}}>
            <p style={{fontSize:13,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:8}}>Scan to pay</p>
            <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.6}}>{qpPayMethod==="khqr"?"Open any banking app (ABA, ACLEDA, Wing, Phillip, etc.) and scan the QR code.":qpPayMethod==="aba"?"Open ABA Mobile, tap Scan QR, and scan the code.":"Open Wing Money app, tap Pay, and scan the code."}</p>
          </div>

          {/* Waiting */}
          {!qpPayVerifying?<div style={{textAlign:"center"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 22px",borderRadius:980,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",border:"1px solid "+bd}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:"#34C759",animation:"pulse 2s ease-in-out infinite"}}></div>
              <span style={{fontSize:13,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Waiting for payment</span>
            </div>
            <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:10}}>We'll detect it automatically once you pay</p>
            <p onClick={function(){sQpPayStep(1);sQpPayMethod(null);sQpPayVerifying(false);}} style={{fontSize:12,fontWeight:400,color:sub,marginTop:16,cursor:"pointer"}}>{"\u2190"} Change payment method</p>
          </div>:null}

          {/* Verifying */}
          {qpPayVerifying?<div style={{textAlign:"center",padding:"8px 0 4px"}}>
            <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:14}}>
              <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0s"}}></div>
              <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0.2s"}}></div>
              <div className="load-dot" style={{background:ink,opacity:0.3,animationDelay:"0.4s"}}></div>
            </div>
            <p style={{fontSize:14,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Payment detected</p>
            <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:4}}>Confirming with {qpPayMethod==="khqr"?"Bakong":qpPayMethod==="aba"?"ABA":"Wing"}...</p>
          </div>:null}
        </div>:null}

        {/* ── Success ── */}
        {qpPayDone?<div style={{textAlign:"center",padding:"20px 0 8px"}}>
          <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(52,199,89,0.1)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",animation:"fadeIn .5s cubic-bezier(.22,1,.36,1) both"}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:6}}>Payment confirmed</p>
          <p style={{fontSize:13,fontWeight:400,color:sub,marginBottom:16}}>Your deal is live + promoted</p>
          <div style={{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:980,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)"}}>
            <span style={{fontSize:10,fontWeight:400,color:mt}}>Ref: EP-{Date.now().toString(36).toUpperCase()}</span>
          </div>
        </div>:null}

      </div>
    </div>:null}

  </div>;
}

var STORE_INFO={
  "Burger King":{bio:"Home of the Whopper. Flame-grilled burgers since 1954.",phone:"023 999 888",fb:"BurgerKingCambodia",ig:"burgerkingkh",tg:""},
  "Calm Spa":{bio:"Premium spa & wellness center in Phnom Penh.",phone:"012 345 678",fb:"CalmSpaPP",ig:"calmspa.pp",tg:""},
  "iStore Cambodia":{bio:"Authorized Apple reseller. Genuine products & warranty.",phone:"023 888 777",fb:"iStoreCambodia",ig:"istorecambodia",tg:""},
  "Starbucks":{bio:"Every cup, handcrafted. Premium coffee experience.",phone:"023 222 333",fb:"StarbucksCambodia",ig:"starbuckskh",tg:""},
  "Zenith Studio":{bio:"Yoga, pilates, and mindfulness for all levels.",phone:"096 555 444",fb:"ZenithStudioPP",ig:"zenithstudio",tg:""},
  "Pasta Master":{bio:"Authentic Italian pizza & pasta. Wood-fired oven.",phone:"012 888 999",fb:"PastaMasterKH",ig:"pastamaster.kh",tg:""},
  "The Cut":{bio:"Modern barbershop. Precision cuts, premium experience.",phone:"078 111 222",fb:"TheCutPP",ig:"thecut.pp",tg:""},
  "FitHub":{bio:"Full-service gym with pool, sauna & group classes.",phone:"023 456 789",fb:"FitHubCambodia",ig:"fithub.kh",tg:""},
  "SmartBuy KH":{bio:"Your go-to for affordable tech accessories.",phone:"012 777 666",fb:"SmartBuyKH",ig:"smartbuykh",tg:"smartbuykh"},
  "Fix Lab PP":{bio:"Same-day phone & laptop repair. Original parts.",phone:"078 333 444",fb:"FixLabPP",ig:"fixlab.pp",tg:""},
  "Ten Eleven":{bio:"Cambodian streetwear label. Bold identity, local roots.",phone:"012 101 110",fb:"TenElevenKH",ig:"teneleven.kh",tg:""},
  "Glow Lab":{bio:"K-beauty curator. Authentic Korean skincare & makeup.",phone:"096 888 111",fb:"GlowLabKH",ig:"glowlab.kh",tg:""},
  "PastaMania":{bio:"Asian casual dining. Pasta, sides & craft beer.",phone:"023 555 666",fb:"PastaManiaCambodia",ig:"pastamania.kh",tg:""},
  "Yadah Cambodia":{bio:"Clean K-beauty. Vegan, gentle skincare essentials.",phone:"012 444 555",fb:"YadahCambodia",ig:"yadah.kh",tg:""},
  "Healthy Earth":{bio:"100% Cambodian-made peanut oil. Pure & natural.",phone:"012 333 222",fb:"HealthyEarthKH",ig:"",tg:""},
  "Moonlight Cafe":{bio:"Coffee, tea & good vibes. Buy 1 Get 1 specials.",phone:"096 222 333",fb:"MoonlightCafePP",ig:"moonlightcafe.pp",tg:""},
  "Lucky Supermarket":{bio:"Cambodia's trusted supermarket chain since 2002.",phone:"023 211 000",fb:"LuckySupermarket",ig:"luckysupermarket.kh",tg:""},
  "Big Apple Donuts":{bio:"Fresh donuts daily. Sweet treats for everyone.",phone:"023 999 111",fb:"BigAppleDonuts",ig:"bigappledonuts.kh",tg:""},
  "Etude House":{bio:"Playful K-beauty. Makeup that expresses you.",phone:"012 666 777",fb:"EtudeHouseKH",ig:"etudehouse.kh",tg:""},
  "Cold Stone Creamery":{bio:"Premium ice cream, mixed fresh on a frozen stone.",phone:"023 888 222",fb:"ColdStoneCambodia",ig:"coldstone.kh",tg:""},
  "RYin Cambodia":{bio:"Smart casual menswear. Quality fabrics, timeless style.",phone:"012 555 888",fb:"RYinCambodia",ig:"ryin.kh",tg:""},
  "U Care Pharmacy":{bio:"Trusted pharmacy chain. Health, beauty & wellness.",phone:"023 900 800",fb:"UCarePharmacy",ig:"ucarepharmacy",tg:""},
  "Cellcard":{bio:"Cambodia's leading mobile network. 5G ready.",phone:"012 311 311",fb:"Cellcard",ig:"cellcard",tg:"cellcard"},
  "Tube Coffee":{bio:"Fast, affordable specialty coffee. Cambodian-grown beans.",phone:"096 111 888",fb:"TubeCoffee",ig:"tubecoffee.kh",tg:""},
  "NCX Honda":{bio:"Authorized Honda dealer. Sales, service & genuine parts.",phone:"023 880 880",fb:"NCXHonda",ig:"ncxhonda",tg:""},
  "Papa's Kitchen":{bio:"Pizza, pasta & comfort food. Weekday deals.",phone:"012 999 333",fb:"PapasKitchenPP",ig:"papaskitchen.pp",tg:""},
  "NK Tita":{bio:"Authorized tech retailer. Apple, Samsung, Tecno & more.",phone:"023 998 998",fb:"NKTita",ig:"nktita",tg:"nktita"},
  "Charles & Keith":{bio:"Fashion-forward shoes, bags & accessories.",phone:"023 777 888",fb:"CharlesKeithKH",ig:"charleskeithkh",tg:""},
  "Park Cafe":{bio:"Healthy breakfast & brunch. Early bird specials.",phone:"012 888 444",fb:"ParkCafePP",ig:"parkcafe.pp",tg:""},
  "G2000":{bio:"Smart fashion for the modern professional.",phone:"023 666 555",fb:"G2000Cambodia",ig:"g2000cambodia",tg:""},
  "Swarovski":{bio:"Precision-cut crystals. Jewelry, watches & figurines.",phone:"023 888 999",fb:"SwarovskiKH",ig:"swarovski",tg:""},
  "Nano Sound":{bio:"Official JBL & Harman audio dealer in Cambodia.",phone:"012 222 999",fb:"NanoSound",ig:"nanosound.kh",tg:"nanosound"},
  "Home Living":{bio:"German home appliances. Stiebel Eltron authorized.",phone:"023 555 888",fb:"HomeLivingKH",ig:"homeliving.kh",tg:""},
  "Huawei Cambodia":{bio:"Global tech leader. Phones, watches & smart devices.",phone:"023 900 900",fb:"HuaweiCambodia",ig:"huaweikh",tg:"huaweikh"},
  "PTC Computer":{bio:"Cambodia's #1 computer shop. 1hr delivery, 25 provinces.",phone:"012 220 152",fb:"PTCComputer",ig:"ptccomputer",tg:"ptccomputer"}
};
var STORE_BANNERS={};

function StoreDetail({storeName,onClose,onDeal,dark,saved,onSave,following,onFollow,onChat,account}){
  var bg=dark?"#0A0A0A":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";
  var mt=dark?"#48484A":"#C8C6C0";var bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";
  var sub="#8A8884";var green="#34C759";
  /* Avatar color from store name */
  var AVATAR_COLORS=["#5B7FFF","#FF6B6B","#34C759","#FF9500","#AF52DE","#FF2D55","#5AC8FA","#FFD60A","#30B0C7","#FF6482"];
  var avatarColor=AVATAR_COLORS[storeName.charCodeAt(0)%AVATAR_COLORS.length];
  var fl=following&&following.has(storeName);
  var isOwner=account&&account.type==="store"&&account.storeName===storeName;

  var allDeals=BASE.filter(function(d){return d.store===storeName;});
  var[avatarImg,sAvatarImg]=useState(STORE_BANNERS[storeName+"_avatar"]||null);
  var[bannerImg,sBannerImg]=useState(STORE_BANNERS[storeName]||null);
  var[editing,sEditing]=useState(false);
  var[toast,sToast]=useState(null);
  var[tab,sTab]=useState("all");
  var avatarRef=useRef(null);
  var bannerRef=useRef(null);
  var filtered=allDeals.filter(function(d){
    if(tab==="discounts")return d.dc>0;
    if(tab==="products")return d.dc===0;
    return true;
  });
  var shown=filtered.slice().sort(function(a,b){return b.id-a.id;});

  var info=allDeals[0]||{};
  var si=STORE_INFO[storeName]||{bio:"Local business in Phnom Penh.",phone:"",fb:"",ig:"",tg:""};

  var[eBio,sEBio]=useState(si.bio||"");
  var[eContacts,sEContacts]=useState(function(){
    var c=si.contacts||[];
    if(c.length===0&&si.phone)c=[{type:"phone",value:si.phone,label:"Main"}];
    if(c.length===0)c=[{type:"phone",value:"",label:""}];
    return c;
  });
  var[eFb,sEFb]=useState(si.fb||"");
  var[eIg,sEIg]=useState(si.ig||"");
  var[eTg,sETg]=useState(si.tg||"");
  var[eLoc,sELoc]=useState(info.loc||"Phnom Penh");
  var[eHrs,sEHrs]=useState(info.hrs||"9AM – 9PM");
  var[eStoreName,sEStoreName]=useState(storeName);

  var CONTACT_TYPES=[{k:"phone",l:"Phone"},{k:"email",l:"Email"},{k:"whatsapp",l:"WhatsApp"},{k:"line",l:"LINE"},{k:"website",l:"Website"}];

  var addContact=function(){sEContacts(function(p){return p.concat({type:"phone",value:"",label:""});});};
  var removeContact=function(idx){sEContacts(function(p){return p.filter(function(_,i){return i!==idx;});});};
  var updateContact=function(idx,field,val){sEContacts(function(p){return p.map(function(c,i){if(i!==idx)return c;var n=Object.assign({},c);n[field]=val;return n;});});};

  var saveProfile=function(){
    var contacts=eContacts.filter(function(c){return c.value.trim();});
    var phone=contacts.length>0?contacts[0].value:"";
    STORE_INFO[storeName]={bio:eBio,phone:phone,contacts:contacts,fb:eFb,ig:eIg,tg:eTg};
    sEditing(false);sToast("Profile saved");setTimeout(function(){sToast(null);},2200);
  };
  var cancelEdit=function(){
    var c=si.contacts||[];
    if(c.length===0&&si.phone)c=[{type:"phone",value:si.phone,label:"Main"}];
    if(c.length===0)c=[{type:"phone",value:"",label:""}];
    sEditing(false);sEBio(si.bio||"");sEContacts(c);sEFb(si.fb||"");sEIg(si.ig||"");sETg(si.tg||"");sELoc(info.loc||"Phnom Penh");sEHrs(info.hrs||"9AM – 9PM");sEStoreName(storeName);
  };

  var eIS={width:"100%",padding:"10px 14px",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),borderRadius:12,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none",boxSizing:"border-box",transition:"border-color .2s"};
  var eLabel={fontSize:10,fontWeight:500,color:sub,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6};

  useEffect(function(){var h=function(e){if(e.key==="Escape"){if(editing){cancelEdit();}else{onClose();}}};window.addEventListener("keydown",h);return function(){window.removeEventListener("keydown",h);};},[onClose,editing]);

  /* Icon helper */
  var Ic=function(d){return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;};

  return <div className="det-enter store-page" style={{position:"fixed",top:64,left:0,right:0,bottom:0,zIndex:38,background:bg,overflow:"hidden",display:"flex",flexDirection:"column"}}>

    {/* Toast */}
    {toast?<div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",padding:"10px 28px",borderRadius:980,background:dark?"#2C2C2E":"#FFF",boxShadow:"0 4px 20px rgba(0,0,0,"+(dark?"0.35":"0.1")+")",zIndex:90,fontSize:13,fontWeight:400,color:green,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:8}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      {toast}
    </div>:null}

    <div className="scroll-hide" style={{flex:1,overflowY:"auto"}}>

      {/* Cover */}
      {function(){
        var bSrc=STORE_BANNERS[storeName]||info.img||"";
        var bgStyle=bSrc.startsWith("data:")||bSrc.startsWith("http")?"url("+bSrc+")":bSrc||"linear-gradient(135deg,"+(dark?"#2C2C2E,#1C1C1E":"#E8E4DE,#D4D0C8")+")";
        return <div className="store-pad" style={{maxWidth:1200,margin:"0 auto",padding:"12px 40px 0"}}>
          <div className="store-banner" style={{height:180,borderRadius:16,overflow:"hidden",position:"relative",background:bgStyle,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(transparent 50%,rgba(0,0,0,"+(dark?"0.4":"0.15")+")"}}></div>
          </div>
        </div>;
      }()}

      {/* Main content */}
      <div className="store-pad store-layout" style={{maxWidth:1200,margin:"0 auto",padding:"24px 40px 0",display:"flex",gap:40,alignItems:"flex-start"}}>

        {/* ── Left: Profile card ── */}
        <div className="store-sidebar" style={{width:300,flexShrink:0,paddingTop:24,position:"sticky",top:0,zIndex:2}}>
          <div className="store-sidebar-card" style={{background:bg2,borderRadius:20,padding:"0 0 24px",overflow:"hidden",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),boxShadow:"0 2px 20px rgba(0,0,0,"+(dark?"0.2":"0.04")+")"}}>

            {/* Avatar + name */}
            <div style={{padding:"24px 24px 16px",display:"flex",alignItems:"center",gap:14}}>
              <div className="store-avatar" style={{width:56,height:56,borderRadius:14,overflow:"hidden",background:avatarColor,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                {avatarImg?<img src={avatarImg} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
                <span style={{fontSize:22,fontWeight:600,color:"#FFF",fontFamily:"'Inter',sans-serif"}}>{storeName.charAt(0)}</span>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <h1 style={{fontSize:17,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>{storeName}</h1>
                <p style={{fontSize:11,fontWeight:400,color:sub,marginTop:2}}>{info.loc}</p>
              </div>
            </div>

            {/* Bio */}
            <div style={{padding:"0 24px 16px"}}>
              <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.7}}>{si.bio}</p>
            </div>

            {/* Actions */}
            <div style={{padding:"0 24px 16px"}}>
              {isOwner?<button onClick={function(){sEditing(true);}} style={{width:"100%",padding:"10px 0",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all .3s"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                Edit profile
              </button>:
              <div style={{display:"flex",gap:8}}>
                <button onClick={function(){if(onFollow)onFollow(storeName);}} style={{flex:1,padding:"10px 0",borderRadius:980,background:fl?"transparent":ink,color:fl?ink:(dark?"#000":"#FFF"),border:fl?"1px solid "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"):"none",cursor:"pointer",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all .3s"}}>
                  {fl?<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>:null}
                  {fl?"Following":"Follow"}
                </button>
                <button className="store-msg-btn" onClick={function(){if(onChat)onChat({store:storeName,title:"Store inquiry",id:0});}} style={{width:42,height:42,borderRadius:980,background:"transparent",border:"1px solid "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span className="store-msg-label" style={{display:"none",fontSize:12,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,marginLeft:6}}>Message</span>
                </button>
              </div>}
            </div>

            {/* Divider */}
            <div style={{height:1,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",margin:"0 24px"}}></div>

            {/* Info section */}
            <div className="store-sidebar-info" style={{padding:"16px 24px 0",display:"flex",flexDirection:"column",gap:12}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                {Ic(<><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></>)}
                <span style={{fontSize:12,fontWeight:400,color:ink}}>{info.loc||"Phnom Penh"}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                {Ic(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>)}
                <span style={{fontSize:12,fontWeight:400,color:ink}}>{info.hrs||"9AM \u2013 9PM"}</span>
              </div>
              {(si.contacts||[]).length>0?(si.contacts||[]).map(function(c,ci){
                return <div key={ci} style={{display:"flex",alignItems:"center",gap:10}}>
                  {Ic(c.type==="email"?<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>:c.type==="whatsapp"||c.type==="line"?<><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></>:c.type==="website"?<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>:<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>)}
                  <div>
                    <span style={{fontSize:12,fontWeight:400,color:ink}}>{c.value}</span>
                    {c.label?<span style={{fontSize:10,fontWeight:400,color:sub,marginLeft:6}}>{c.label}</span>:null}
                  </div>
                </div>;
              }):si.phone?<div style={{display:"flex",alignItems:"center",gap:10}}>
                {Ic(<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>)}
                <span style={{fontSize:12,fontWeight:400,color:ink}}>{si.phone}</span>
              </div>:null}
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                {Ic(<><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>)}
                <span style={{fontSize:12,fontWeight:400,color:ink}}>{allDeals.length} active deal{allDeals.length!==1?"s":""}</span>
              </div>
            </div>

            {/* Social links */}
            {(si.fb||si.ig||si.tg)?<div className="store-sidebar-social" style={{padding:"16px 24px 0"}}>
              <div style={{height:1,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",marginBottom:16}}></div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {si.fb?<a href={si.fb.startsWith("http")?si.fb:"https://facebook.com/"+si.fb} target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",gap:5,padding:"6px 12px",borderRadius:980,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                  <svg viewBox="0 0 24 24" style={{width:12,height:12,fill:sub}}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  <span style={{fontSize:11,fontWeight:400,color:sub}}>Facebook</span>
                </a>:null}
                {si.ig?<a href={si.ig.startsWith("http")?si.ig:"https://instagram.com/"+si.ig} target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",gap:5,padding:"6px 12px",borderRadius:980,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                  <svg viewBox="0 0 24 24" style={{width:12,height:12,fill:"none",stroke:sub,strokeWidth:2}}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
                  <span style={{fontSize:11,fontWeight:400,color:sub}}>Instagram</span>
                </a>:null}
                {si.tg?<a href={si.tg.startsWith("http")?si.tg:"https://t.me/"+si.tg} target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",gap:5,padding:"6px 12px",borderRadius:980,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                  <svg viewBox="0 0 24 24" style={{width:12,height:12,fill:sub}}><path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-17.15 7.385a2.25 2.25 0 00.162 4.153l3.7 1.267 1.875 5.916a1.125 1.125 0 001.934.375l2.373-2.676 4.212 3.14a2.25 2.25 0 003.47-1.19l3.36-15.75a2.25 2.25 0 00-2.914-2.835z"/></svg>
                  <span style={{fontSize:11,fontWeight:400,color:sub}}>Telegram</span>
                </a>:null}
              </div>
            </div>:null}

          </div>
        </div>

        {/* ── Right: Deals ── */}
        <div className="store-deals" style={{flex:1,minWidth:0,paddingTop:20,paddingBottom:48}}>
          {/* Tabs */}
          <div className="store-deals-header" style={{display:"flex",alignItems:"center",gap:0,marginBottom:20,borderBottom:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)")}}>
            {[{k:"all",l:"All",c:allDeals.length},{k:"discounts",l:"Discounts",c:allDeals.filter(function(d){return d.dc>0;}).length},{k:"products",l:"Products",c:allDeals.filter(function(d){return d.dc===0;}).length}].map(function(t){
              var active=tab===t.k;
              return <button key={t.k} onClick={function(){sTab(t.k);}} style={{padding:"10px 20px",background:"none",border:"none",borderBottom:active?"2px solid "+ink:"2px solid transparent",cursor:"pointer",fontSize:13,fontWeight:active?500:400,color:active?ink:sub,fontFamily:"'Inter',sans-serif",transition:"all .2s",display:"flex",alignItems:"center",gap:6}}>
                {t.l}
                <span style={{fontSize:11,fontWeight:400,color:active?sub:mt,fontFamily:"'Inter',sans-serif"}}>{t.c}</span>
              </button>;
            })}
          </div>

          {shown.length===0?<div style={{textAlign:"center",padding:"48px 0"}}>
            <p style={{fontSize:14,fontWeight:400,color:sub}}>{tab==="discounts"?"No discounts right now":tab==="products"?"No regular products":"No deals yet"}</p>
          </div>:
          <div className="store-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {shown.map(function(d){
            var sv=saved&&saved.has(d.id);
            return <div key={d.id} className="sq-card" style={{cursor:"pointer",overflow:"hidden",background:bg2,borderRadius:16,transition:"opacity .4s ease"}} onClick={function(){if(onDeal)onDeal(d);}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.85";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
              <div className="store-card-img" style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
                <div className="sq-img" style={{width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
                <button className="card-actions" onClick={function(e){e.stopPropagation();}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",opacity:0,transition:"opacity .2s",zIndex:3}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button><button className="card-actions" onClick={function(e){e.stopPropagation();if(onSave)onSave(d.id);}} style={{position:"absolute",top:10,right:50,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:sv?"#FF453A":"#FFF",opacity:sv?1:0,transition:"opacity .2s",zIndex:3}}>{sv?"\u2665":"\u2661"}</button>
                
                <div className="store-card-grad" style={{position:"absolute",bottom:0,left:0,right:0,padding:"28px 12px 10px",background:"linear-gradient(transparent,rgba(0,0,0,0.45))"}}>
                  <p style={{fontSize:13,fontWeight:400,color:"#FFF",lineHeight:1.3,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
                </div>
              </div>
              <div className="store-card-info" style={{padding:"12px 14px 14px"}}>
                <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",flexWrap:"wrap",gap:4}}>
                  <div className="store-card-price" style={{display:"flex",alignItems:"center",gap:6}}>
                    {d.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                    <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                    <span style={{fontSize:15,fontWeight:400}}>${d.price.toFixed(2)}</span>
                  </div>
                </div>
                {d.expires&&d.expires!=="none"?<p className="store-card-expiry" style={{fontSize:10,fontWeight:400,color:sub,marginTop:6}}>{d.expires==="1d"?"Ends today":d.expires==="2d"?"2 days left":d.expires==="3d"?"3 days left":"Expires in "+d.expires}</p>:null}
              </div>
            </div>;
          })}
        </div>}
        </div>

      </div>
    </div>

    {/* ── Edit Profile Modal ── */}
    {editing?<div onClick={cancelEdit} className="store-edit-modal" style={{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:50,background:dark?"rgba(0,0,0,0.6)":"rgba(0,0,0,0.25)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"32px 24px",overflowY:"auto",animation:"fadeIn .25s cubic-bezier(.22,1,.36,1) both"}}>
      <div onClick={function(e){e.stopPropagation();}} className="store-edit-inner" style={{width:"100%",maxWidth:520,background:bg2,borderRadius:24,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,"+(dark?"0.5":"0.15")+")",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),display:"flex",flexDirection:"column",maxHeight:"calc(100vh - 128px)"}}>

        {/* ─ Header (sticky) ─ */}
        <div style={{padding:"20px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),flexShrink:0}}>
          <h2 style={{fontSize:17,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>Edit profile</h2>
          <button onClick={cancelEdit} style={{width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)";}} onMouseLeave={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* ─ Scrollable body ─ */}
        <div className="scroll-hide" style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>

          {/* Profile photo */}
          <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
            <div onClick={function(){if(avatarRef.current)avatarRef.current.click();}} style={{width:64,height:64,borderRadius:14,overflow:"hidden",background:avatarColor,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"opacity .2s",flexShrink:0}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
              {avatarImg?<img src={avatarImg} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
              <span style={{fontSize:24,fontWeight:600,color:"#FFF",fontFamily:"'Inter',sans-serif"}}>{storeName.charAt(0)}</span>}
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"3px 0",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center"}}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
              </div>
            </div>
            <input ref={avatarRef} type="file" accept="image/*" style={{display:"none"}} onChange={function(e){
              var f=e.target.files&&e.target.files[0];if(!f)return;
              var r=new FileReader();r.onload=function(ev){var d=ev.target.result;STORE_BANNERS[storeName+"_avatar"]=d;sAvatarImg(d);};r.readAsDataURL(f);
            }}/>
            <div>
              <p style={{fontSize:13,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{storeName}</p>
              <button onClick={function(){if(avatarRef.current)avatarRef.current.click();}} style={{marginTop:4,padding:0,background:"none",border:"none",cursor:"pointer",fontSize:11,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>Change photo</button>
            </div>
          </div>

          {/* Cover photo */}
          <div style={{marginBottom:28,padding:"0 0 24px",borderBottom:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)")}}>
            <p style={{fontSize:10,fontWeight:500,color:sub,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:8}}>Cover photo</p>
            <div onClick={function(){if(bannerRef.current)bannerRef.current.click();}} style={{height:80,borderRadius:12,overflow:"hidden",background:bannerImg?"url("+bannerImg+")":(info.img||"linear-gradient(135deg,"+(dark?"#2C2C2E,#1C1C1E":"#E8E4DE,#D4D0C8")+")"),backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",position:"relative",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.85";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
              <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span style={{fontSize:11,fontWeight:400,color:"#FFF",fontFamily:"'Inter',sans-serif"}}>Change cover</span>
              </div>
            </div>
            <input ref={bannerRef} type="file" accept="image/*" style={{display:"none"}} onChange={function(e){
              var f=e.target.files&&e.target.files[0];if(!f)return;
              var r=new FileReader();r.onload=function(ev){var d=ev.target.result;STORE_BANNERS[storeName]=d;sBannerImg(d);};r.readAsDataURL(f);
            }}/>
          </div>

          {/* ── Section: Basic info ── */}
          <p style={{fontSize:11,fontWeight:500,color:sub,letterSpacing:"1px",textTransform:"uppercase",marginBottom:14}}>Basic info</p>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:28}}>
            <div><p style={eLabel}>Store name</p><input value={eStoreName} onChange={function(e){sEStoreName(e.target.value);}} style={eIS} placeholder="Your store name"/></div>
            <div><p style={eLabel}>Bio</p><textarea value={eBio} onChange={function(e){sEBio(e.target.value);}} rows={3} style={Object.assign({},eIS,{resize:"vertical",lineHeight:1.6})} placeholder="Tell customers about your store..."/></div>
            <div className="store-edit-2col" style={{display:"flex",gap:12}}>
              <div style={{flex:1}}><p style={eLabel}>Location</p><input value={eLoc} onChange={function(e){sELoc(e.target.value);}} style={eIS} placeholder="e.g. BKK1, Phnom Penh"/></div>
              <div style={{flex:1}}><p style={eLabel}>Hours</p><input value={eHrs} onChange={function(e){sEHrs(e.target.value);}} style={eIS} placeholder="e.g. 9AM – 9PM"/></div>
            </div>
          </div>

          {/* ── Section: Contact ── */}
          <div style={{borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),paddingTop:24,marginBottom:28}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
              <p style={{fontSize:11,fontWeight:500,color:sub,letterSpacing:"1px",textTransform:"uppercase"}}>Contact</p>
              <button onClick={addContact} style={{display:"flex",alignItems:"center",gap:4,padding:"4px 12px",borderRadius:980,background:"transparent",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),cursor:"pointer",fontSize:11,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif",transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)";}} onMouseLeave={function(e){e.currentTarget.style.color=sub;e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                Add
              </button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {eContacts.map(function(c,ci){
                return <div key={ci} className="store-edit-contact-row" style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                  {/* Type selector */}
                  <select value={c.type} onChange={function(e){updateContact(ci,"type",e.target.value);}} style={{padding:"10px 8px",borderRadius:12,border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)",fontSize:11,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none",width:90,flexShrink:0,cursor:"pointer"}}>
                    {CONTACT_TYPES.map(function(t){return <option key={t.k} value={t.k}>{t.l}</option>;})}
                  </select>
                  {/* Value */}
                  <input value={c.value} onChange={function(e){updateContact(ci,"value",e.target.value);}} style={Object.assign({},eIS,{flex:1})} placeholder={c.type==="phone"?"e.g. 023 999 888":c.type==="email"?"e.g. hello@store.com":c.type==="website"?"e.g. https://store.com":"Enter "+c.type}/>
                  {/* Label */}
                  <input className="store-edit-label" value={c.label||""} onChange={function(e){updateContact(ci,"label",e.target.value);}} style={Object.assign({},eIS,{width:80,flexShrink:0})} placeholder="Label"/>
                  {/* Remove */}
                  {eContacts.length>1?<button onClick={function(){removeContact(ci);}} style={{width:38,height:38,borderRadius:10,background:"transparent",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all .2s",color:sub}} onMouseEnter={function(e){e.currentTarget.style.color="#FF453A";e.currentTarget.style.borderColor="rgba(255,59,48,0.3)";}} onMouseLeave={function(e){e.currentTarget.style.color=sub;e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>:null}
                </div>;
              })}
            </div>
          </div>

          {/* ── Section: Social links ── */}
          <div style={{borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),paddingTop:24}}>
            <p style={{fontSize:11,fontWeight:500,color:sub,letterSpacing:"1px",textTransform:"uppercase",marginBottom:14}}>Social links</p>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:36,height:36,borderRadius:10,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg viewBox="0 0 24 24" style={{width:15,height:15,fill:sub}}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></div>
                <input value={eFb} onChange={function(e){sEFb(e.target.value);}} style={Object.assign({},eIS,{flex:1})} placeholder="Facebook page name or URL"/>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:36,height:36,borderRadius:10,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg viewBox="0 0 24 24" style={{width:15,height:15,fill:"none",stroke:sub,strokeWidth:2}}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg></div>
                <input value={eIg} onChange={function(e){sEIg(e.target.value);}} style={Object.assign({},eIS,{flex:1})} placeholder="Instagram handle or URL"/>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:36,height:36,borderRadius:10,background:dark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg viewBox="0 0 24 24" style={{width:15,height:15,fill:sub}}><path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-17.15 7.385a2.25 2.25 0 00.162 4.153l3.7 1.267 1.875 5.916a1.125 1.125 0 001.934.375l2.373-2.676 4.212 3.14a2.25 2.25 0 003.47-1.19l3.36-15.75a2.25 2.25 0 00-2.914-2.835z"/></svg></div>
                <input value={eTg} onChange={function(e){sETg(e.target.value);}} style={Object.assign({},eIS,{flex:1})} placeholder="Telegram username or URL"/>
              </div>
            </div>
          </div>

        </div>

        {/* ─ Footer (sticky) ─ */}
        <div style={{padding:"16px 28px",borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),display:"flex",gap:10,flexShrink:0,background:bg2}}>
          <button onClick={cancelEdit} style={{flex:1,padding:"12px 0",borderRadius:980,background:"transparent",color:sub,border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>Cancel</button>
          <button onClick={saveProfile} style={{flex:2,padding:"12px 0",borderRadius:980,background:"#27B147",boxShadow:"0 2px 12px rgba(39,177,71,0.18)",color:"#FFF",border:"none",cursor:"pointer",fontSize:13,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.85";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Save changes</button>
        </div>

      </div>
    </div>:null}

  </div>;
}

export default function App(){
  var[sel,sSel]=useState(null);
  var[viewStore,sViewStore]=useState(null);
  var[chatDeal,sChatDeal]=useState(null);
  var[chatHistory,sChatHistory]=useState({});
  var[account,sAccount]=useState(null);
  var[onboarding,sOnboarding]=useState(false);
  var[authOpen,sAuthOpen]=useState(false);
  var[route,sRoute]=useState("home");
  var[routeFade,sRouteFade]=useState(true);
  var[showTop,sShowTop]=useState(false);
  var[appPlat,sAppPlat]=useState("ios");
  var[appSlide,sAppSlide]=useState(false);
  useEffect(function(){var h=function(){sShowTop(window.scrollY>600);};window.addEventListener("scroll",h,{passive:true});return function(){window.removeEventListener("scroll",h);};},[]);
  var changeRoute=function(r){if(r===route&&!viewStore)return;sViewStore(null);sRouteFade(false);setTimeout(function(){sRoute(r);window.scrollTo(0,0);sRouteFade(true);},200);};
  var[postOpen,sPostOpen]=useState(false);
  var[profOpen,sProfOpen]=useState(false);
  var[moreOpen,sMoreOpen]=useState(false);
  var[infoPage,sInfoPage]=useState(null);
  var[infoFade,sInfoFade]=useState(true);
  var switchInfoPage=function(k){if(k===infoPage)return;sInfoFade(false);setTimeout(function(){sInfoPage(k);window.scrollTo(0,0);setTimeout(function(){sInfoFade(true);},20);},160);};
  var[helpQ,sHelpQ]=useState("");
  var[helpArticle,sHelpArticle]=useState(null);
  var HELP_CATS=[
    {id:"getting-started",name:"Getting Started",icon:'<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',articles:[
      {id:"gs1",title:"How to create an account",body:"Open the ePromotion app or visit epromotion.com. Tap \u2018Sign in\u2019 in the top right corner. Enter your name, email, and a password (minimum 6 characters). Choose \u2018Personal\u2019 for a customer account or \u2018Business\u2019 if you want to list deals. After signing up, you can pick your interests and start browsing deals immediately. No payment is required \u2014 customer accounts are always free."},
      {id:"gs2",title:"Setting up your store profile",body:"After signing up as a business account, open your profile menu and tap \u2018View store\u2019. From the store page, tap the edit icon. You can update your store name, upload a logo and cover photo, add contact details (phone, email, Telegram, Facebook), and set your location. A complete profile helps customers trust your business and find you more easily."},
      {id:"gs3",title:"How to post your first deal",body:"Tap the \u2018+ Post\u2019 button in the navigation bar. Choose between a promotion (with a discount) or a product listing (regular price). Add a title, description, and at least one photo. Set the original price and sale price. Choose a category and expiry date. Once submitted, our team reviews it and approves it within a few hours. You\u2019ll get a notification when your deal goes live."},
      {id:"gs4",title:"Browsing and discovering deals",body:"The homepage shows personalized deal recommendations, new arrivals, and trending promotions. Use the search bar to find specific deals or stores. Tap any category filter to browse by type (Food, Beauty, Fashion, Technology). Scroll down to the Discover section for a Pinterest-style browsing experience. Dark mode is available in your profile settings."}
    ]},
    {id:"deals",name:"Deals & Promotions",icon:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',articles:[
      {id:"d1",title:"How to save a deal",body:"When browsing deals, tap the heart icon on any deal card to save it. Your saved deals appear in the \u2018Saved\u2019 tab, organized by category. Saved deals sync across all your devices when you\u2019re logged in. To remove a saved deal, tap the heart icon again. You don\u2019t need an account to browse, but saving requires sign-in."},
      {id:"d2",title:"How discounts work",body:"Stores set their own original and discounted prices. The discount percentage is calculated automatically and shown as a badge on the deal card. Some deals are time-limited \u2014 the expiry date is displayed on the detail page. Deals with discounts of 20% or more show a red badge. All prices are in USD."},
      {id:"d3",title:"Reporting a deal",body:"If you find a deal that seems incorrect, misleading, or inappropriate, open the deal detail page, tap the share icon, and select \u2018Report\u2019. Describe the issue and submit. Our team reviews all reports within 24 hours and takes action if the deal violates our guidelines. You can report expired deals, wrong pricing, or inappropriate content."},
      {id:"d4",title:"Deal categories explained",body:"Deals are organized into categories: Food & Drinks, Beauty, Fashion, Technology, Lifestyle, and Travel. Stores assign a category when posting. You can filter by category using the tabs below the search bar. If you selected interests during onboarding, your homepage prioritizes those categories automatically."},
      {id:"d5",title:"Understanding deal expiry",body:"Each deal has an expiry date set by the store. Time-limited deals show a countdown on the detail page. Expired deals are automatically removed from the homepage but may still appear in search briefly. Stores can extend or repost expired deals at any time."}
    ]},
    {id:"account",name:"Account & Settings",icon:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',articles:[
      {id:"a1",title:"Changing your profile picture",body:"Go to your profile menu and tap \u2018View profile\u2019, then tap \u2018Edit\u2019. Click on your avatar photo to upload a new image. Supported formats are JPG and PNG, up to 5MB. Your new photo will appear across the platform immediately \u2014 on your profile, in chats, and on any deals you\u2019ve posted."},
      {id:"a2",title:"Switching between light and dark mode",body:"Open your profile menu and look for the theme toggle (sun/moon icon). You can switch between Light and Dark mode instantly. The entire app \u2014 including all pages, cards, and navigation \u2014 adapts to your chosen theme."},
      {id:"a3",title:"Deleting your account",body:"Go to your profile, tap \u2018Edit\u2019, and scroll to the bottom. Tap \u2018Delete account\u2019 and confirm. This action is permanent and cannot be undone. All your data, saved deals, chat history, and store information (if applicable) will be permanently removed. If you\u2019re a business, all your published deals will also be deleted."},
      {id:"a4",title:"Updating your email or name",body:"Open your profile menu, tap \u2018View profile\u2019, then \u2018Edit\u2019. Update your name or email in the respective fields and save. Your updated name will appear immediately across the platform. If you change your email, you may need to verify the new address."},
      {id:"a5",title:"Managing notifications",body:"ePromotion sends notifications for saved deal updates, new deals from stores you follow, and chat messages. You can manage these through your device\u2019s notification settings. We don\u2019t send marketing emails without your consent."}
    ]},
    {id:"business",name:"For Businesses",icon:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',articles:[
      {id:"b1",title:"How deal approval works",body:"All deals are reviewed by our team before they go live. After submitting, your deal enters a \u2018Pending\u2019 state. We check for: accurate pricing, clear photos (no blurry or misleading images), appropriate content, and policy compliance. Most deals are approved within 2\u20134 hours during business hours. You\u2019ll receive a notification when approved or if changes are needed."},
      {id:"b2",title:"Understanding your dashboard",body:"The store dashboard shows your deal performance in real time: total views, saves, clicks, and active deal count. Use the list view to see all your deals with individual stats. The data updates every few minutes. Use these insights to understand which promotions work best and plan your upcoming deals."},
      {id:"b3",title:"Boosting your deals",body:"Boost gives your deal premium placement in the \u2018Suggestion for You\u2019 section and higher visibility in category feeds. Boosted deals are shown to more users and tagged as \u2018Suggested\u2019. Pricing starts at $3.99 for 3 days. You can add boost when posting or later from the deal edit screen. Contact our team for custom packages."},
      {id:"b4",title:"Editing or removing a deal",body:"From your store dashboard, find the deal you want to edit and tap on it. You can update the title, description, pricing, photos, category, and expiry date. Save your changes \u2014 significant edits may trigger a re-review. To remove a deal entirely, tap \u2018Delete\u2019 at the bottom of the edit screen. Deleted deals cannot be recovered."},
      {id:"b5",title:"Hero Spotlight placement",body:"Hero Spotlight puts your deal in the featured banner at the top of the homepage \u2014 the first thing every user sees. It includes a large image, title, description, and a direct \u2018View Deal\u2019 button. Pricing is $4.99/day, $9.99/3 days, or $19.99/7 days. You can add Hero Spotlight when posting or from the deal edit screen."}
    ]},
    {id:"safety",name:"Safety & Privacy",icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',articles:[
      {id:"s1",title:"How we protect your data",body:"ePromotion does not sell your personal data to third parties. We use your information only to provide the service: showing relevant deals, enabling chat, and managing your account. Passwords are encrypted and never stored in plain text. You can request a copy or deletion of your data at any time by contacting support@epromotion.com."},
      {id:"s2",title:"Reporting inappropriate content",body:"If you encounter inappropriate content \u2014 offensive images, misleading deals, spam, or harassment in chat \u2014 report it immediately. Open the content in question and use the report option. For chat, long-press a message to report. Our moderation team reviews all reports within 24 hours and takes appropriate action."},
      {id:"s3",title:"Blocking a store or user",body:"If you want to stop seeing deals from a specific store, visit their store page and tap the menu icon. Select \u2018Block\u2019. Blocked stores will no longer appear in your feed. In chat, you can block a user to prevent further messages. You can manage your blocked list from your account settings."},
      {id:"s4",title:"Safe shopping tips",body:"Always verify deals directly with the store before making large purchases. ePromotion is a discovery platform \u2014 transactions happen directly with the business. Check the store\u2019s reviews and verification status. Be cautious of deals that seem too good to be true. If something feels wrong, report it and our team will investigate."}
    ]}
  ];
  var ALL_ARTICLES=HELP_CATS.reduce(function(a,c){return a.concat(c.articles.map(function(ar){return Object.assign({},ar,{cat:c.name,catId:c.id});}));},[]);
  var[faqCat,sFaqCat]=useState("all");
  var[faqOpen,sFaqOpen]=useState(null);
  var FAQ_CATS=[
    {id:"all",name:"All"},
    {id:"general",name:"General"},
    {id:"deals",name:"Deals"},
    {id:"account",name:"Account"},
    {id:"business",name:"Business"}
  ];
  var FAQ_ITEMS=[
    {id:"f1",cat:"general",q:"What is ePromotion?",a:"ePromotion is Cambodia's deals and promotions marketplace. We connect local businesses in Phnom Penh with customers who are looking for the best offers, discounts, and promotions nearby."},
    {id:"f2",cat:"general",q:"Is ePromotion free to use?",a:"Yes, ePromotion is completely free for customers. You can browse, save, and share deals without paying anything. For businesses, listing deals is free during our early access period."},
    {id:"f3",cat:"general",q:"Is ePromotion available outside Phnom Penh?",a:"We're currently focused on Phnom Penh to ensure the best experience for our first users. We plan to expand to other cities in Cambodia as the platform grows."},
    {id:"f4",cat:"deals",q:"How do I find deals near me?",a:"Browse the homepage to see all available deals. You can use the search bar to look for specific products or stores, and filter by category like Food, Wellness, Beauty, and more."},
    {id:"f5",cat:"deals",q:"How do I save a deal?",a:"Tap the heart icon on any deal card to save it. All your saved deals appear in the 'Saved' tab so you can come back to them anytime."},
    {id:"f6",cat:"deals",q:"Can I share a deal with friends?",a:"Yes. Open any deal and tap the share icon in the top right corner. You can share via a direct link, or copy the link to send through any messaging app."},
    {id:"f7",cat:"deals",q:"What happens when a deal expires?",a:"Expired deals are automatically removed from the platform. If you've saved a deal that expires, it will be marked as expired in your saved list but won't be deleted."},
    {id:"f8",cat:"account",q:"How do I create an account?",a:"Tap 'Sign in' on the top right and choose to create a new account. You can sign up with your email address. The process takes less than a minute."},
    {id:"f9",cat:"account",q:"Can I change my profile picture?",a:"Yes. Go to your profile menu, tap 'View profile', then 'Edit'. Click on your avatar to upload a new photo from your device."},
    {id:"f10",cat:"account",q:"How do I delete my account?",a:"Go to View profile, scroll to the bottom, and tap 'Delete account'. You'll be asked to confirm. This action is permanent — all your data, saved deals, and store information will be removed."},
    {id:"f11",cat:"business",q:"How do I list my business on ePromotion?",a:"Sign up for a business account, set up your store profile with your business name, logo, and contact details, then start posting deals. Our team will review and approve your submissions."},
    {id:"f12",cat:"business",q:"How long does deal approval take?",a:"Most deals are reviewed and approved within a few hours during business hours. Our team checks for accuracy, image quality, and compliance with our guidelines."},
    {id:"f13",cat:"business",q:"Can I edit a deal after posting?",a:"Yes, you can edit your deals from your store dashboard. Changes will go through a quick re-review before going live again."},
    {id:"f14",cat:"business",q:"How much does it cost for businesses?",a:"Listing deals is free during our early access period. We'll introduce optional paid features like deal boosting and priority placement in the future. We'll always offer a free tier."}
  ];
  var INFO_PAGES={
    about:{title:"About",icon:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',desc:"ePromotion is Cambodia's deals and promotions marketplace. We connect local businesses with customers looking for the best offers in Phnom Penh."},
    help:{title:"Help & Support",icon:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',desc:"Need help? Contact our team at support@epromotion.com and we'll get back to you within 24 hours."},
    terms:{title:"Terms of Service",icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',desc:"Our terms of service outline the rules and guidelines for using the ePromotion platform. Full terms will be published before launch."},
    privacy:{title:"Privacy Policy",icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',desc:"We take your privacy seriously. This page will detail how we collect, use, and protect your personal data."},
    cookies:{title:"Cookie Policy",icon:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',desc:"Information about how ePromotion uses cookies and similar technologies to improve your experience."},
    disclaimer:{title:"Disclaimer & Refund Policy",icon:'<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',desc:"Deals and promotions on ePromotion are provided by third-party stores. ePromotion acts as a marketplace and is not directly responsible for the fulfillment of offers. Refund requests should be directed to the respective store."},
    faq:{title:"FAQ",icon:'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',desc:"Frequently asked questions about using ePromotion. This section will be populated based on common user inquiries."},
    business:{title:"For Business",icon:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',desc:"Grow your business with ePromotion. Reach thousands of deal-seeking customers in Phnom Penh. List your promotions, boost visibility, and track performance — all in one platform."},
    contact:{title:"Contact Us",icon:'<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>',desc:"Get in touch with the ePromotion team. We're here to help."}
  };
  var[profViewOpen,sProfViewOpen]=useState(false);
  var[dashOpen,sDashOpen]=useState(false);
  var[inquiryType,sInquiryType]=useState(null);var[inqDuration,sInqDuration]=useState(null);var[inqBudget,sInqBudget]=useState(null);var[inqContact,sInqContact]=useState("");var[inqMethod,sInqMethod]=useState("telegram");var[inqNote,sInqNote]=useState("");var[inqSent,sInqSent]=useState(false);
  var openInquiry=function(type){sInquiryType(type);sInqDuration(null);sInqBudget(null);sInqContact(account?account.email||"":"");sInqMethod("telegram");sInqNote("");sInqSent(false);};
  var[userDeals,sUserDeals]=useState([]);
  var[q,sQ]=useState("");
  var[catFilter,sCatFilter]=useState(null);
  var[saved,setSaved]=useState(new Set());
  var[loaded,sLoaded]=useState(false);
  var[scrolled,sScrolled]=useState(false);
  var[dark,sDark]=useState(false);
  var[themeMode,sThemeMode]=useState("system");
  useEffect(function(){
    if(themeMode==="dark"){sDark(true);}
    else if(themeMode==="light"){sDark(false);}
    else{var mq=window.matchMedia("(prefers-color-scheme: dark)");sDark(mq.matches);var h=function(e){sDark(e.matches);};mq.addEventListener("change",h);return function(){mq.removeEventListener("change",h);};}
  },[themeMode]);
  var[notifs,sNotifs]=useState(true);
  var[lang,sLang]=useState("en");
  var[masonryCols,sMasonryCols]=useState(5);
  var tog=function(id){if(!account){sAuthOpen(true);return;}setSaved(function(p){var n=new Set(p);if(n.has(id))n.delete(id);else n.add(id);return n;});};
  var chatCount=Object.keys(chatHistory).length;

  /* Following stores */
  var[following,setFollowing]=useState(new Set());
  var togFollow=function(store){if(!account){sAuthOpen(true);return;}setFollowing(function(p){var n=new Set(p);if(n.has(store))n.delete(store);else n.add(store);return n;});};

  /* Deal of the Day — rotates daily based on date */
  var dayIndex=Math.floor(Date.now()/(1000*60*60*24))%BASE.length;
  var dotd=BASE[dayIndex];

  var startChat=function(d){
    if(!account){sAuthOpen(true);return;}
    if(!chatHistory[d.id]){
      sChatHistory(function(h){var n=Object.assign({},h);n[d.id]=[{from:"store",text:"Hi! How can I help you with this deal?",ts:Date.now()}];return n;});
    }
    sChatDeal(d);
  };
  var updateDeal=function(id,fields){
    sUserDeals(function(p){return p.map(function(d){return d.id===id?Object.assign({},d,fields):d;});});
  };
  var deleteDeal=function(id){
    sUserDeals(function(p){return p.filter(function(d){return d.id!==id;});});
  };
  var handleLogin=function(acct){sAccount(acct);sAuthOpen(false);sOnboarding(true);};
  var handleOnboardingComplete=function(interests){sAccount(function(prev){var updated=Object.assign({},prev,{interests:interests});if(updated.type==="store"&&window._pendingPost){window._pendingPost=false;setTimeout(function(){sPostOpen(true);},100);}return updated;});sOnboarding(false);};
  var handleLogout=function(){sAccount(null);sRoute("home");sPostOpen(false);};
  var updateAccount=function(updates){sAccount(function(prev){return Object.assign({},prev,updates);});};

  /* Detect system dark mode */
  useEffect(function(){
    var mq=window.matchMedia("(prefers-color-scheme:dark)");
    sDark(mq.matches);
    var h=function(e){sDark(e.matches);};
    mq.addEventListener("change",h);
    return function(){mq.removeEventListener("change",h);};
  },[]);

  var ALL=BASE.concat(userDeals);
  var ql=q.toLowerCase().trim();
  var searching=ql.length>0;
  var filtering=catFilter!==null;
  var browsing=searching||filtering;
  var searched=ALL.filter(function(d){
    if(filtering&&d.cat!==catFilter)return false;
    if(!searching)return true;
    return d.title.toLowerCase().includes(ql)||d.store.toLowerCase().includes(ql)||d.cat.toLowerCase().includes(ql)||(d.desc&&d.desc.toLowerCase().includes(ql));
  });
  /* Group by category */
  var SEC_ICONS={
    "Food":function(c){return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>;},
    "Wellness":function(c){return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;},
    "Technology":function(c){return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;},
    "Fashion":function(c){return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2 12 5.5 8 2l-4.38 1.46a2 2 0 00-1.34 2.23l2.1 12.62A2 2 0 006.35 20h11.3a2 2 0 001.97-1.69l2.1-12.62a2 2 0 00-1.34-2.23z"/></svg>;},
    "Beauty":function(c){return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 004.6 9c-1 1.7-.7 4 .8 5.3L12 21l6.6-6.7c1.5-1.3 1.8-3.6.8-5.3A3.6 3.6 0 0015 4.7C14.4 3.6 13.2 3 12 3z"/></svg>;}
  };
  var SEC_META={"Food":{title:"Eat & Drink",sub:"Cafés, restaurants, and cravings"},"Wellness":{title:"Wellness",sub:"Spa, fitness, and self-care"},"Technology":{title:"Technology",sub:"Gadgets, apps, and tech deals"},"Fashion":{title:"Style & Fashion",sub:"Apparel, shoes, and accessories"},"Beauty":{title:"Glow & Beauty",sub:"Skincare, makeup, and beauty deals"}};
  var sectionCats=browsing?["Food","Beauty","Fashion","Technology"]:["Food","Beauty","Fashion","Technology"];
  var sections=sectionCats.map(function(c){
    return{cat:c,title:SEC_META[c].title,sub:SEC_META[c].sub,items:searched.filter(function(d){return d.cat===c;})};
  }).filter(function(s){return s.items.length>0;});
  var interestCatMap={"food":"Food","beauty":"Beauty","fashion":"Fashion","tech":"Technology"};
  var userCats=account&&account.interests?Array.from(account.interests).map(function(k){return interestCatMap[k];}).filter(Boolean):[];
  var suggestItems=(function(){
    var imgDeals=BASE.filter(function(d){return typeof d.img==="string"&&d.img.indexOf("url(https://i.imgur.com")===0;});
    if(userCats.length>0){
      var matched=imgDeals.filter(function(d){return userCats.indexOf(d.cat)!==-1;}).sort(function(a,b){return b.dc-a.dc;});
      var rest=imgDeals.filter(function(d){return userCats.indexOf(d.cat)===-1;}).sort(function(a,b){return b.dc-a.dc;});
      return matched.concat(rest).slice(0,16);
    }
    return imgDeals.sort(function(a,b){return b.dc-a.dc;}).slice(0,12);
  })();
  var featured=BASE.filter(function(d){return d.id===400||d.id===401||d.id===402||d.id===403||d.id===404||d.id===405;});
  var[fi,sFi]=useState(0);var[hf,sHf]=useState(true);var f=featured[fi];
  var isDotd=false;
  var hr=new Date().getHours();
  var greeting=hr<12?"Good morning":hr<18?"Good afternoon":"Good evening";

  useEffect(function(){var iv=setInterval(function(){sHf(false);setTimeout(function(){sFi(function(p){return(p+1)%featured.length;});sHf(true);},180);},4000);return function(){clearInterval(iv);};},[featured.length]);
  useEffect(function(){setTimeout(function(){sLoaded(true);},50);},[]);
  useEffect(function(){document.body.style.background=dark?"#000":"#FAF9F7";document.documentElement.style.background=dark?"#000":"#FAF9F7";},[dark]);
  useEffect(function(){
    var upd=function(){var w=window.innerWidth;sMasonryCols(w<640?2:w<900?3:w<1200?4:5);};
    upd();window.addEventListener("resize",upd);return function(){window.removeEventListener("resize",upd);};
  },[]);
  useEffect(function(){var h=function(){sScrolled(window.scrollY>20);};window.addEventListener("scroll",h,{passive:true});return function(){window.removeEventListener("scroll",h);};},[]);

  /* Rotating search placeholder */
  var searchHints=["burgers","spa deals","AirPods","yoga classes","skincare","fashion","coffee","haircut","pizza","gadgets"];
  var[hintIdx,sHintIdx]=useState(0);
  var[hintFade,sHintFade]=useState(true);
  var[searchFocused,sSearchFocused]=useState(false);
  useEffect(function(){var iv=setInterval(function(){sHintFade(false);setTimeout(function(){sHintIdx(function(p){return(p+1)%searchHints.length;});sHintFade(true);},300);},3000);return function(){clearInterval(iv);};},[]);

  var bg=dark?"#000":"#FAF9F7";var bg2=dark?"#1C1C1E":"#FFF";var ink=dark?"#F4F3F0":"#1D1D1F";var mt=dark?"#48484A":"#D4D2CD";var bd=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";var sub="#8A8884";
  useEffect(function(){document.body.style.background=bg;document.documentElement.style.background=bg;document.documentElement.style.setProperty("--bg",bg);},[bg]);

  useEffect(function(){
    var s=document.createElement("style");
    s.textContent=[
      "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');",
      "*{margin:0;padding:0;box-sizing:border-box}",
      "html,body,#root{font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;background:#FAF9F7;min-height:100vh;scroll-behavior:smooth}",
      ".scroll-hide::-webkit-scrollbar{display:none}",
      ".scroll-hide{-ms-overflow-style:none;scrollbar-width:none}",
      "::selection{background:rgba(128,128,128,0.2)}",
      "@keyframes detIn{from{opacity:0;transform:translateY(20px) scale(0.96);filter:blur(4px)}to{opacity:1;transform:none;filter:blur(0)}}",
      "@keyframes fadeIn{from{opacity:0;transform:translateY(24px) scale(0.98)}to{opacity:1;transform:none}}",
      "@keyframes slideDown{from{opacity:0;transform:translateY(-16px) scale(0.96);filter:blur(2px)}to{opacity:1;transform:none;filter:blur(0)}}",
      "@keyframes slideUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}",
      "@keyframes scaleReveal{from{opacity:0;transform:scale(0.92);filter:blur(6px)}to{opacity:1;transform:none;filter:blur(0)}}",
      "@keyframes pulse{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:.7;transform:scale(1.15)}}",
      "@keyframes freshPulse{0%,100%{transform:scale(1);opacity:var(--fp-lo)}50%{transform:scale(1.6);opacity:var(--fp-hi)}}",
      "@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}",
      "@keyframes heroProgress{from{width:0}to{width:100%}}",
      "@keyframes floatBob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-10px) rotate(3deg)}}",
      "@keyframes floatBob2{0%,100%{transform:translateY(0) rotate(4deg)}50%{transform:translateY(-8px) rotate(-4deg)}}",
      "@keyframes floatBob3{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-12px) rotate(2deg)}}",
      ".getapp-floats{display:flex}",
      "@keyframes kenBurns{0%{transform:scale(1)}100%{transform:scale(1.06)}}",
      "@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}",
      "@keyframes shake{0%,100%{transform:translateX(0)}15%{transform:translateX(-8px)}30%{transform:translateX(6px)}45%{transform:translateX(-4px)}60%{transform:translateX(2px)}75%{transform:translateX(-1px)}}",
      "@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(-12px) scale(0.95)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}",
      ".det-enter{animation:detIn .6s cubic-bezier(.22,1,.36,1) forwards}",
      ".sq-card{animation:fadeIn .6s cubic-bezier(.22,1,.36,1) both}",
      ".sq-card:nth-child(1){animation-delay:.05s}.sq-card:nth-child(2){animation-delay:.1s}.sq-card:nth-child(3){animation-delay:.15s}.sq-card:nth-child(4){animation-delay:.2s}.sq-card:nth-child(5){animation-delay:.25s}.sq-card:nth-child(6){animation-delay:.3s}.sq-card:nth-child(7){animation-delay:.35s}.sq-card:nth-child(8){animation-delay:.4s}",
      ".sq-card{transition:opacity .4s ease}",
      ".sq-card:hover{opacity:0.92}",
      ".sq-card:hover .sq-img{transform:scale(1.04)}",
      ".scroll-card{min-width:calc((100% - 80px) / 5.5)!important;max-width:calc((100% - 80px) / 5.5)!important;width:auto!important}",
      ".card-actions{transition:opacity .3s ease,background .2s ease,transform .2s ease!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important}",
      ".sq-card:hover .card-actions,.ms-card:hover .card-actions,.det-card:hover .card-actions{opacity:1!important}",
      ".card-actions:hover{background:rgba(0,0,0,0.65)!important;transform:scale(1.08)!important}",
      ".sq-card:hover .card-actions{opacity:1!important}",
      ".sq-img{transition:transform .6s cubic-bezier(.22,1,.36,1),filter .4s ease;filter:brightness(1)}",
      ".sq-card:hover .sq-img{filter:brightness(1.08)}",
      ".sq-card:hover .ms-img{filter:brightness(1.08)}",
      ".ms-card{animation:fadeIn .6s cubic-bezier(.22,1,.36,1) both}",
      ".ms-card:nth-child(1){animation-delay:.05s}.ms-card:nth-child(2){animation-delay:.12s}.ms-card:nth-child(3){animation-delay:.19s}.ms-card:nth-child(4){animation-delay:.26s}",
      ".ms-card{transition:opacity .4s ease}",
      ".ms-card:hover{opacity:0.92}",
      ".ms-card:hover .ms-img{transform:scale(1.04)}",
                  ".ms-img{transition:transform .6s cubic-bezier(.22,1,.36,1),filter .4s ease;filter:brightness(1)}",
      ".nav-blur{transition:background .4s cubic-bezier(.22,1,.36,1),border-color .4s,backdrop-filter .4s}",
      ".hero-center:hover{opacity:0.92}",
      ".hero-center:hover .hero-fg{transform:scale(1.03)}",
      ".hero-center{transition:all .8s cubic-bezier(.22,1,.36,1)!important}",
      "input::placeholder{color:#8A8884}",
      ".search-in:focus{border-bottom-color:#8A8884!important}",
      ".sq-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}",
      ".det-panel{border-radius:0}",
      ".load-dot{width:8px;height:8px;border-radius:50%;animation:pulse 1.2s ease-in-out infinite}",

      /* ——— Mobile ≤640px ——— */
      "@media(max-width:640px){",
      "  .card-actions{opacity:1!important}",
      "  .sq-grid{grid-template-columns:repeat(2,1fr)!important;gap:10px!important}",
      "  .hero-spread{flex-direction:column-reverse!important;gap:16px!important;padding:0!important;align-items:stretch!important}",
      "  .hero-left{max-width:100%!important}",
      "  .hero-center{width:100%!important;aspect-ratio:1/1!important;flex:none!important;border-radius:12px!important}",
      "  .hero-title{font-size:22px!important;margin-bottom:10px!important}",
      "  .hero-price{font-size:22px!important}",
      "  .hero-orig{font-size:12px!important}",
      "  .hero-cta{padding:10px 26px!important;font-size:12px!important}",
      "  .get-app-btn{display:none!important}",
      "  .hero-section{padding:20px 0!important;border-radius:0!important;border:none!important;box-shadow:none!important;background:transparent!important}",
      "  .hero-arrows{margin-top:16px!important;justify-content:flex-start!important}",
      "  .hero-price-row{justify-content:flex-start}",
      "  .hero-badges{justify-content:flex-start}",
      "  .hero-cta-row{justify-content:flex-start}",
      "  .store-grid{grid-template-columns:repeat(2,1fr)!important;gap:10px!important;overflow:hidden!important;width:100%!important}",
      "  .store-grid .sq-card{border-radius:12px!important;min-width:0!important}",
      "  .store-card-img{aspect-ratio:4/3!important}",
      "  .store-grid .store-card-grad{padding:16px 8px 6px!important}",
      "  .store-grid .store-card-grad p{font-size:10px!important;-webkit-line-clamp:1!important}",
      "  .store-grid .store-card-info{padding:8px 8px 10px!important}",
      "  .store-grid .store-card-price{gap:4px!important}",
      "  .store-grid .store-card-price span:first-child{font-size:13px!important}",
      "  .store-grid .store-card-price span:last-child{font-size:9px!important}",
      "  .store-grid .store-card-dc{font-size:8px!important}",
      "  .store-grid .store-card-expiry{display:none!important}",
      "  .store-grid .card-actions{display:none!important}",
      "  .store-layout{flex-direction:column!important;gap:0!important;align-items:stretch!important}",
      "  .store-banner{height:120px!important;border-radius:12px!important}",
      "  .store-sidebar{width:100%!important;position:static!important;padding-top:16px!important}",
      "  .store-sidebar-card{border-radius:16px!important;margin:0 0 8px!important;padding-bottom:16px!important}",
      "  .store-sidebar-card .store-avatar{width:48px!important;height:48px!important;border-radius:12px!important}",
      "  .store-sidebar-card .store-avatar span{font-size:18px!important}",
      "  .store-sidebar-info{padding:12px 18px 0!important}",
      "  .store-sidebar-social{padding:12px 18px 0!important}",
      "  .store-deals-header{overflow-x:auto!important;-webkit-overflow-scrolling:touch!important}",
      "  .store-edit-modal{margin:0!important;padding:0!important;align-items:stretch!important}",
      "  .store-edit-inner{max-width:100%!important;border-radius:0!important;max-height:100%!important;height:100%!important}",
      "  .store-edit-contact-row{flex-direction:column!important;gap:8px!important}",
      "  .store-edit-contact-row select{width:100%!important}",
      "  .store-edit-contact-row .store-edit-label{width:100%!important}",
      "  .store-edit-2col{flex-direction:column!important}",
      "  .store-deals{padding-top:0!important;width:100%!important}",
      "  .nav-inner{padding:0 12px!important;height:48px!important}",
      "  .nav-logo{font-size:15px!important;margin-right:8px!important}",
      "  .nav-search{display:none!important}",

      /* Hide nav tabs on mobile — moved into profile menu */
      "  .nav-tabs-group{display:none!important}",
      "  .prof-nav-rows{display:block!important}",
      "  .s-pad{padding-left:14px!important;padding-right:14px!important}",
      "  .det-panel{width:100%!important;max-width:100%!important;min-width:0!important}",
      "  .det-overlay{padding:0!important}",
      "  .det-pad{padding-left:20px!important;padding-right:20px!important}",
      "  .det-price{justify-content:flex-start!important}",
      "  .det-cta{justify-content:flex-start!important}",
      "  .det-cta-wrap{padding-left:0!important;padding-right:0!important}",
      "  .det-save-text{justify-content:flex-start!important}",
      "  .det-masonry{gap:8px!important}",
      "  .det-masonry-pad{padding-left:16px!important;padding-right:16px!important}",
      "  .section-title{font-size:20px!important}",
      "  .section-pad{padding-top:32px!important}",
      "  .chat-float{bottom:0!important;right:0!important;left:0!important;width:auto!important;height:calc(100vh - 48px)!important;max-height:none!important;border-radius:0!important;top:48px!important}",
      "  .chat-page{top:48px!important}",
      "  .store-pad{padding:16px 16px 0!important}",
      "  .store-page{top:48px!important}",
      "  .auth-panel{width:100%!important;max-width:100%!important;height:100%!important;max-height:100%!important;border-radius:0!important}",
      "  .auth-inner{padding:36px 24px 20px!important}",
      "  .auth-title{font-size:26px!important}",
      "  .promo-modal{width:100%!important;max-width:100%!important;border-radius:18px 18px 0 0!important;max-height:85vh!important;padding:28px 20px!important}",
      "  .promo-backdrop{align-items:flex-end!important}",
      "  .promo-cols{flex-direction:column!important;gap:16px!important}",
      "  .promo-sidebar{width:100%!important}",
      "  .qr-row{flex-direction:column!important;align-items:center!important;gap:20px!important}",
      "  .qr-box{display:flex!important;justify-content:center!important}",
      "  .qr-details{text-align:center!important}",
      "  .masonry{gap:10px!important}",
      "  .partner-pad{padding:12px 0 32px!important}",
      "  .partner-logo{height:22px!important}",
      "  .partner-gap{padding:0 36px!important}",
      "  .scroll-card{min-width:calc((100% - 16px) / 1.2)!important;max-width:calc((100% - 16px) / 1.2)!important}",
      "  .scroll-card-sm{min-width:140px!important;max-width:140px!important}",
      "  .dash-pad{padding:0 16px!important}",
      "  .profile-view{top:48px!important}",
      "  .stats-row{flex-direction:column!important;gap:1px!important}",
      "  .page-content{padding-top:72px!important;padding-bottom:60px!important}",
      "  .page-title{font-size:26px!important}",
      "  .browse-title{font-size:22px!important}",
      "  .edit-modal{max-width:100%!important;margin:0 12px!important;padding:24px 20px 28px!important}",
      "  .onboard-grid{grid-template-columns:repeat(2,1fr)!important;gap:8px!important}",
      "  .onboard-wrap{padding:0 20px!important}",
      "  .onboard-title{font-size:28px!important}",

      /* Info pages mobile */
      "  .info-nav-pad{padding:0 16px!important;height:48px!important}",
      "  .info-nav-tabs{display:none!important}",
      "  .info-nav-back-btn{display:flex!important}",

      /* Get App mobile */
      "  .getapp-row{flex-direction:column-reverse!important;gap:40px!important;padding:0 20px!important}",
      "  .getapp-left{align-items:center!important;text-align:center!important}",
      "  .getapp-title{font-size:32px!important}",
      "  .getapp-phone-wrapper{padding:20px 56px!important;margin-left:0!important}",
      "  .getapp-desc{margin-left:auto!important;margin-right:auto!important}",
      "  .getapp-qr{justify-content:center!important}",
      "  .getapp-phone{width:180px!important;height:360px!important;border-radius:26px!important}",
      "  .getapp-phone-inner{border-radius:24px!important}",
      "  .getapp-notch{width:60px!important;height:18px!important}",

      /* Info page footer mobile */
      "  .info-footer-grid{flex-direction:column!important;gap:24px!important}",
      "  .info-footer-pad{padding:24px 20px 28px!important}",
      "  .info-footer-copy{padding:0 20px 16px!important}",

      /* Info page content — reduce side padding */
      "  .ip{padding-left:20px!important;padding-right:20px!important}",

      /* Grids collapse */
      "  .ig2{grid-template-columns:1fr!important}",
      "  .ig3{grid-template-columns:1fr!important}",
      "  .ig4{grid-template-columns:repeat(2,1fr)!important}",
      "  .ig-story{grid-template-columns:1fr!important;gap:32px!important}",

      /* About page — mobile hero */
      "  .about-hero h1{font-size:32px!important;letter-spacing:-1px!important}",
      "  .about-hero p{font-size:16px!important}",
      "  .about-stats{grid-template-columns:repeat(2,1fr)!important;gap:16px!important}",
      "  .about-trusted{flex-wrap:wrap!important;gap:16px 24px!important;justify-content:flex-start!important}",
      "  .about-trusted span{font-size:13px!important}",
      "  .about-story-divider{display:none!important}",

      /* Info page headings — mobile */
      "  .info-page h1{font-size:26px!important;letter-spacing:-0.8px!important}",
      "  .info-page h2{max-width:100%!important}",
      "}",

      /* ——— Desktop ≥641px — getapp phone position ——— */
      "@media(min-width:641px){",
      "  .getapp-phone-wrapper{flex:1!important;margin-left:-200px!important}",
      "}",

      /* ——— Tablet 641–1024px ——— */
      "@media(min-width:641px) and (max-width:1024px){",
      "  .sq-grid{grid-template-columns:repeat(3,1fr)!important}",
      "  .hero-spread{flex-direction:column-reverse!important;gap:24px!important;padding:0!important;align-items:stretch!important}",
      "  .hero-left{max-width:100%!important}",
      "  .hero-center{width:100%!important;aspect-ratio:1/1!important;flex:none!important;border-radius:16px!important}",
      "  .hero-title{font-size:28px!important}",
      "  .hero-desc{-webkit-line-clamp:unset!important;max-width:100%!important}",
      "  .about-hero h1{font-size:40px!important;letter-spacing:-1.5px!important}",
      "  .hero-section{padding:28px 0!important;border-radius:0!important;border:none!important;box-shadow:none!important;background:transparent!important}",
      "  .hero-arrows{justify-content:flex-start!important}",
      "  .det-panel{width:70%!important;min-width:0!important}",
      "  .nav-inner{padding:0 24px!important}",
      "  .s-pad{padding-left:24px!important;padding-right:24px!important}",
      "  .section-title{font-size:22px!important}",
      "  .store-pad{padding-left:24px!important;padding-right:24px!important}",
      "  .store-layout{flex-direction:column!important;gap:0!important;align-items:stretch!important}",
      "  .store-banner{height:150px!important;border-radius:14px!important}",
      "  .store-sidebar{width:100%!important;position:static!important;padding-top:20px!important}",
      "  .store-sidebar-card{margin:0 0 12px!important}",
      "  .store-grid{grid-template-columns:repeat(2,1fr)!important}",
      "  .store-edit-modal{padding:20px!important}",
      "  .store-edit-inner{max-width:520px!important}",
      "  .scroll-card{min-width:calc((100% - 48px) / 3.5)!important;max-width:calc((100% - 48px) / 3.5)!important}",
      "  .masonry{gap:12px!important}",
      "  .ip{padding-left:28px!important;padding-right:28px!important}",
      "  .ig3{grid-template-columns:1fr 1fr!important}",
      "  .about-stats{grid-template-columns:repeat(2,1fr)!important;gap:16px!important}",
      "  .info-nav-pad{padding:0 24px!important}",
      "  .info-footer-pad{padding:28px 24px 32px!important}",
      "  .info-footer-copy{padding:0 24px 20px!important}",
      "  .getapp-row{gap:48px!important;padding:0 28px!important}",
      "}",

      /* ——— Small desktop 1025–1280px ——— */
      "@media(min-width:1025px) and (max-width:1280px){",
      "  .sq-grid{grid-template-columns:repeat(4,1fr)!important}",
      "  .det-panel{width:55%!important}",
      "  .scroll-card{min-width:calc((100% - 64px) / 4.5)!important;max-width:calc((100% - 64px) / 4.5)!important}",
      "  .store-sidebar{width:260px!important}",
      "  .store-grid{grid-template-columns:repeat(2,1fr)!important}",
      "}"
    ].join("\n");
    document.head.appendChild(s);
    return function(){document.head.removeChild(s);};
  },[]);

  return <div style={{minHeight:"100vh",background:bg,color:ink,opacity:loaded?1:0,transition:"opacity .8s, background .5s, color .5s"}}>

    {/* Nav */}
    <nav className="nav-blur" style={{position:"fixed",top:0,left:0,right:0,zIndex:40,background:scrolled?(dark?"rgba(0,0,0,0.85)":"rgba(250,250,250,0.85)"):"transparent",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderBottom:scrolled?"1px solid "+bd:"1px solid transparent"}}>
      <div className="nav-inner" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <span className="nav-logo" onClick={function(){changeRoute("home");sViewStore(null);sProfViewOpen(false);sDashOpen(false);}} style={{cursor:"pointer",marginRight:16,display:"flex",alignItems:"center",flexShrink:0}}><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzUyOXB4IiBoZWlnaHQ9IjY4M3B4IiB2aWV3Qm94PSIwIDAgMzUyOSA2ODMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+R3JvdXAgMkAxeDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTAxOC44Niw4NDUuNDEgQzEwMTcuOTEsODA4LjE0IDEwMTIuNDYsODAwLjM0IDk3My40LDgwMy4wNiBDOTczLjQsODAzLjA2IDk4OS42Myw3ODcuNzUgMTAzOC44NCw3ODAuMzIgQzEwMzMuOCw4MjYuNTQgMTAxOC44Niw4NDUuNDEgMTAxOC44Niw4NDUuNDEgTTEwMDMuMTEsODk4Ljc2IEMxMDExLjUsOTAxLjgzIDEwMjAuNTQsOTAzLjUgMTAyOS45Niw5MDMuNSBDMTA3My4yNyw5MDMuNSAxMTA4LjcsODY4LjA3IDExMDguNyw4MjQuNzYgQzExMDguNyw3ODEuNDYgMTA3My4yNyw3NDYuMDMgMTAyOS45Niw3NDYuMDMgTDkxNi4yMyw3NDYuMDMgTDkxNi4yMyw5MjIuOCBDOTE2LjIzLDk0Ni42OSA5MzUuNzgsOTY2LjI0IDk1OS42Nyw5NjYuMjQgTDEwMzAuODcsOTY2LjI0IEM5NTEuNjEsOTQ1IDkxMy40NCw4NzAuMDUgOTg1LjMsODI4LjU2IEM5NjUuMDgsODQ4Ljc4IDk1OS44Myw4ODIuOTQgMTAwMy4xMSw4OTguNzYgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTMiIHg9IjkxMy40NCIgeT0iNzQ2LjAzIiB3aWR0aD0iMTk1LjI2IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ik1haW4iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwNSwgMTY3KSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzQuODI0MzEzOCwyMzguMDcwMjI4IEM3OC44ODQ4MzQsMjcwLjk3MTA5NSA5OC4wMDYxOTMsMjg4LjQ1NDI5MSAxMzAuMTIxMjE3LDI4OC40NTQyOTEgQzE0Ni4zODE3NTQsMjg4LjQ1NDI5MSAxNjAuNjEyMDMyLDI4My4xNzk4MjUgMTcxLjE4Nzg0MiwyNzMuNDIzOTA2IEMxNzcuMjc4NjIyLDI2Ny43NDM3MTIgMTgwLjEzOTQ0MywyNjMuMjYyMjYgMTgzLjM4Nzg1OSwyNTIuNjk0ODg1IEwyNTQuMTMzMTk2LDI3Mi42MTI0NSBDMjQ0Ljc3NTU0MywyOTMuNzQ3MTk5IDIzOC42ODQ3NjIsMzAzLjA3ODk0NyAyMjcuMjk2ODQ5LDMxNC40NTc3NzggQzIwNC4xMTQ5NjksMzM3LjIxNTQ0MSAxNzEuNTkzODk0LDM0OSAxMzEuMzM5MzczLDM0OSBDOTEuMDg0ODUxNiwzNDkgNjAuMTg3OTg0LDMzNy42MjExNjkgMzcuMDA2MTA0OSwzMTQuNDU3Nzc4IEMxMy4wMTIxMjE3LDI5MC4wNzcyMDQgMS44MTg5ODk0ZS0xMiwyNTUuNTUzNDI0IDEuODE4OTg5NGUtMTIsMjE1LjMzMTAwOCBDMS44MTg5ODk0ZS0xMiwxMzQuODg2MTc2IDUxLjY0MjQzNDYsODEuNjYyMDE2NSAxMjkuMzA5MTEzLDgxLjY2MjAxNjUgQzE5Mi43NDU1MTMsODEuNjYyMDE2NSAyMzcuMDYwNTU0LDExNi4yMDQyMzggMjUxLjI5MDgzMiwxNzYuNzMxNTA1IEMyNTQuNTM5MjQ4LDE4OS43MzMyNDkgMjU2LjE2MzQ1NiwyMDYuNzkyMjc0IDI1Ny40MDAwNjksMjI5Ljk1NTY2NSBDMjU3LjQwMDA2OSwyMzEuNTc4NTc3IDI1Ny40MDAwNjksMjM0LjAxMjk0NyAyNTcuODA2MTIxLDIzOC4wODg2NyBMNzQuODI0MzEzOCwyMzguMDg4NjcgTDc0LjgyNDMxMzgsMjM4LjA3MDIyOCBaIE0xODAuNTI3MDM4LDE4Mi4wMDU5NzEgQzE3NC44NDIzMSwxNTYuMDAyNDg0IDE1Ny4zNDUxNTksMTQyLjE4OTI4MyAxMjkuMjkwNjU2LDE0Mi4xODkyODMgQzEwMS4yMzYxNTIsMTQyLjE4OTI4MyA4Mi45NDUzNTQzLDE1NS4xOTEwMjcgNzYuMDI0MDEzLDE4Mi4wMDU5NzEgTDE4MC41MjcwMzgsMTgyLjAwNTk3MSBaIiBpZD0iU2hhcGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5NC4wMDAxMjIsMzM5LjI0NDA4MiBDMjk2LjQzNjQzNCwzMjEuMzczNiAyOTcuMjQ4NTM4LDMwMy4wNzg5NDcgMjk3LjI0ODUzOCwyNzkuMTA0MTAxIEwyOTcuMjQ4NTM4LDU5LjMxMDA4MjQgQzI5Ny4yNDg1MzgsMzcuMzYzODc2NiAyOTYuNDM2NDM0LDE5LjA4NzY2NjUgMjk0LjAwMDEyMiwtNC41NDM4NDY2NmUtMTMgQzMxMy4xMDMwMjQsMC44MTE0NTYzNTIgMzI3Ljc1NzgxMSwxLjIxNzE4NDUzIDM1My43NjM1OTcsMS4yMTcxODQ1MyBMNDQyLjgxODE4OSwxLjIxNzE4NDUzIEM1MjMuMzI3MjMxLDEuMjE3MTg0NTMgNTY3LjY0MjI3MiwzOS44MTY2ODc4IDU2Ny42NDIyNzIsMTEwLjUwNTYwMSBDNTY3LjY0MjI3MiwxODEuMTk0NTE1IDUyMS4yOTY5NzEsMjI1Ljg5ODM4MyA0NDIuNDEyMTM3LDIyNS44OTgzODMgTDM3OC4xNjM2MzIsMjI1Ljg5ODM4MyBMMzc4LjE2MzYzMiwyNzcuOTA1MzU4IEMzNzguMTYzNjMyLDMwMS44ODAyMDUgMzc5LjM4MTc4OCwzMjEuNzc5MzI4IDM4MS40MTIwNDgsMzM5LjI2MjUyNCBMMjkzLjk4MTY2NSwzMzkuMjYyNTI0IEwyOTQuMDAwMTIyLDMzOS4yNDQwODIgWiBNNDM4LjczOTIxMSwxNTYuODEzOTQgQzQ2Ny4xOTk3NjcsMTU2LjgxMzk0IDQ4My44NjYzNTcsMTQwLjk3MjA5OSA0ODMuODY2MzU3LDExMi45Mzk5NyBDNDgzLjg2NjM1Nyw4NC45MDc4NDE5IDQ2OC4wMTE4NzEsNzAuMjgzMTg1NCA0MzguNzM5MjExLDcwLjI4MzE4NTQgTDM3OC4xNDUxNzUsNzAuMjgzMTg1NCBMMzc4LjE0NTE3NSwxNTYuODEzOTQgTDQzOC43MzkyMTEsMTU2LjgxMzk0IEw0MzguNzM5MjExLDE1Ni44MTM5NCBaIiBpZD0iU2hhcGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTc4My41Njk2NjQsMTY0LjU0MTIxOCBDNzY0Ljg3MjgxNCwxNTguODYxMDIzIDc1NC43MDMwNTcsMTU2LjgxMzk0IDc0Mi4wOTY5ODcsMTU2LjgxMzk0IEM3MjEuMzUxNDIsMTU2LjgxMzk0IDcwNS40OTY5MzQsMTY0LjEzNTQ4OSA2OTMuNzAyOTY4LDE3OC43NjAxNDYgQzY4NS45Njk1MjMsMTg4LjUxNjA2NCA2ODMuMTI3MTU5LDE5Ny4wMzYzNTYgNjgxLjUwMjk1MSwyMTQuOTI1MjggTDY4MS41MDI5NTEsMjc4LjMxMTA4NiBDNjgxLjUwMjk1MSwzMDQuMzE0NTc0IDY4Mi4zMTUwNTUsMzE5Ljc1MDY4NyA2ODQuNzUxMzY3LDMzOS4yNjI1MjQgTDYwMC41ODc4NTcsMzM5LjI2MjUyNCBDNjAzLjAyNDE2OSwzMTguOTM5MjMxIDYwMy44MzYyNzMsMzA0LjMxNDU3NCA2MDMuODM2MjczLDI3Ny45MDUzNTggTDYwMy44MzYyNzMsMTUyLjc3NTEgQzYwMy44MzYyNzMsMTIzLjEyMDA1OSA2MDMuMDI0MTY5LDEwOC45MDExMzEgNjAwLjU4Nzg1Nyw5MS40MTc5MzQ5IEw2ODEuNTAyOTUxLDkxLjQxNzkzNDkgTDY4MS41MDI5NTEsMTIzLjUwNzM0NSBDNzAxLjQxNzk1Nyw5Ny41MDM4NTc1IDcyNS44MTc5OTIsODYuNTMwNzU0NiA3NjIuODI0MDk3LDg2LjUzMDc1NDYgQzc3NS44MzYyMTksODYuNTMwNzU0NiA3ODMuOTc1NzE2LDg3LjM0MjIxMDkgODAzLjA3ODYxOCw5MS4zOTk0OTI3IEw3ODMuNTUxMjA3LDE2NC41MjI3NzUgTDc4My41Njk2NjQsMTY0LjU0MTIxOCBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTgxNi45MjEzMDEsMjE0LjkwNjgzOCBDODE2LjkyMTMwMSwxMzMuNjUwNTUgODY4Ljk2OTc4Nyw4Mi4wNDkzMDI1IDk1MS4xMDMwMzgsODIuMDQ5MzAyNSBDMTAzMy4yMzYyOSw4Mi4wNDkzMDI1IDEwODUuMjg0NzcsMTMzLjY1MDU1IDEwODUuMjg0NzcsMjE0LjA5NTM4MiBDMTA4NS4yODQ3NywyOTQuNTQwMjEzIDEwMzEuNjEyMDgsMzQ4LjU3NTgzIDk1MC42OTY5ODYsMzQ4LjU3NTgzIEM4NjkuNzgxODkxLDM0OC41NzU4MyA4MTYuOTIxMzAxLDI5Ni41Njg4NTQgODE2LjkyMTMwMSwyMTQuOTA2ODM4IEw4MTYuOTIxMzAxLDIxNC45MDY4MzggWiBNODk0LjU4Nzk3OSwyMTQuNTAxMTEgQzg5NC41ODc5NzksMjU5LjU5MjI2NCA5MTUuNzM5NTk4LDI4Ni44MTI5MzYgOTUxLjEwMzAzOCwyODYuODEyOTM2IEM5ODYuNDY2NDc3LDI4Ni44MTI5MzYgMTAwNi44MDU5OSwyNjAuNDAzNzIgMTAwNi44MDU5OSwyMTUuMzEyNTY2IEMxMDA2LjgwNTk5LDE3MC4yMjE0MTIgOTg2LjA3ODg4MiwxNDMuMDAwNzQgOTUxLjUwOTA5LDE0My4wMDA3NCBDOTE2LjkzOTI5NywxNDMuMDAwNzQgODk0LjU4Nzk3OSwxNjkuODE1Njg0IDg5NC41ODc5NzksMjE0LjUwMTExIEw4OTQuNTg3OTc5LDIxNC41MDExMSBaIiBpZD0iU2hhcGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMTguMjMwMzYsMzM5LjI0NDA4MiBDMTEyMC42NjY2NywzMjAuNTYyMTQzIDExMjEuNDc4NzgsMzAzLjQ4NDY3NiAxMTIxLjQ3ODc4LDI3Ny44ODY5MTYgTDExMjEuNDc4NzgsMTUyLjc1NjY1OCBDMTEyMS40Nzg3OCwxMjEuODg0NDMyIDExMjAuNjY2NjcsMTA3LjI1OTc3NiAxMTE4LjIzMDM2LDkxLjM5OTQ5MjcgTDExOTguNzM5NCw5MS4zOTk0OTI3IEwxMTk4LjczOTQsMTA4LjQ1ODUxOCBDMTE5OC43Mzk0LDEwOS41NDA0NiAxMTk4LjYwNDA1LDExMS40MzM4NTggMTE5OC4zMzMzNSwxMTQuMTM4NzEzIEwxMTk4LjMzMzM1LDExOC4xOTU5OTUgQzEyMTkuMDc4OTIsOTUuNDM4MzMyMyAxMjQzLjg2NjU1LDg0Ljg3MDk1NzUgMTI3Ni4wMDAwMyw4NC44NzA5NTc1IEMxMjk3LjE1MTY1LDg0Ljg3MDk1NzUgMTMxNC42MzAzNCw4OS43Mzk2OTU2IDEzMjguMDQ4NTEsOTkuNDk1NjE0IEMxMzM1LjM3NTkxLDEwNC43NzAwOCAxMzM5LjQzNjQzLDEwOS42NTcyNjEgMTM0NC43MTUxLDExOS44MDA0NjUgQzEzNjkuOTI3MjQsOTUuMDE0MTYxOSAxMzk0LjczMzMzLDg0LjQ0Njc4NzEgMTQzMC4wOTY3Nyw4NC40NDY3ODcxIEMxNDg4LjIzNjA0LDg0LjQ0Njc4NzEgMTUxNy45MzMyMSwxMTYuMTMwNDY5IDE1MTcuOTMzMjEsMTc3LjQ4NzYzNSBMMTUxNy45MzMyMSwyNzguMjU1NzYgQzE1MTcuOTMzMjEsMzAzLjQ0Nzc5MSAxNTE4Ljc0NTMxLDMyMC4xMDEwODkgMTUyMS4xODE2MiwzMzkuMjA3MTk3IEwxNDM2LjYxMjA2LDMzOS4yMDcxOTcgQzE0MzkuMDQ4MzcsMzIwLjExOTUzMSAxNDM5Ljg2MDQ4LDMwNS40NzY0MzIgMTQzOS44NjA0OCwyNzcuODUwMDMyIEwxNDM5Ljg2MDQ4LDE5NC4xNTkzNzQgQzE0MzkuODYwNDgsMTYzLjY5Mjg3NyAxNDMwLjkwODg3LDE1MS45MDgzMTcgMTQwNy43NDU0NSwxNTEuOTA4MzE3IEMxMzg2Ljk5OTg4LDE1MS45MDgzMTcgMTM2OC4zMDMwMywxNjguMTU1ODg3IDEzNTguMTMzMjgsMTk1LjM3NjU1OSBMMTM1OC4xMzMyOCwyNzguMjU1NzYgQzEzNTguMTMzMjgsMzAyLjYzNjMzNSAxMzU4Ljk0NTM4LDMxOS42OTUzNiAxMzYxLjM4MTY5LDMzOS4yMDcxOTcgTDEyNzYuODEyMTMsMzM5LjIwNzE5NyBDMTI3OS4yNDg0NCwzMjAuOTMwOTg3IDEyODAuMDYwNTUsMzAzLjg1MzUxOSAxMjgwLjA2MDU1LDI3Ny44NTAwMzIgTDEyODAuMDYwNTUsMTk0LjE1OTM3NCBDMTI4MC4wNjA1NSwxNzcuMTAwMzQ5IDEyNzguNDM2MzQsMTY5LjM3MzA3MSAxMjczLjE1NzY2LDE2Mi40NzU2OTIgQzEyNjguNjkxMDksMTU1Ljk4NDA0MSAxMjYwLjU1MTU5LDE1Mi4zMTQwNDYgMTI1MC43ODc4OSwxNTIuMzE0MDQ2IEMxMjI4LjgyNDE2LDE1Mi4zMTQwNDYgMTIxMC4xMjczMSwxNjguMTU1ODg3IDExOTguNzM5NCwxOTUuNzgyMjg3IEwxMTk4LjczOTQsMjc3Ljg1MDAzMiBDMTE5OC43Mzk0LDMwMy40NDc3OTEgMTE5OS41NTE1MSwzMTkuMjg5NjMyIDEyMDEuOTg3ODIsMzM5LjIwNzE5NyBMMTExOC4yMzAzNiwzMzkuMjA3MTk3IEwxMTE4LjIzMDM2LDMzOS4yNDQwODIgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTUyLjkwOTA1LDIxNC45MDY4MzggQzE1NTIuOTA5MDUsMTMzLjY1MDU1IDE2MDQuOTU3NTQsODIuMDQ5MzAyNSAxNjg3LjA5MDc5LDgyLjA0OTMwMjUgQzE3NjkuMjI0MDQsODIuMDQ5MzAyNSAxODIxLjI3MjUyLDEzMy42NTA1NSAxODIxLjI3MjUyLDIxNC4wOTUzODIgQzE4MjEuMjcyNTIsMjk0LjU0MDIxMyAxNzY3LjU5OTgzLDM0OC41NzU4MyAxNjg2LjY4NDc0LDM0OC41NzU4MyBDMTYwNS43Njk2NCwzNDguNTc1ODMgMTU1Mi45MDkwNSwyOTYuNTY4ODU0IDE1NTIuOTA5MDUsMjE0LjkwNjgzOCBaIE0xNjMwLjU3NTczLDIxNC41MDExMSBDMTYzMC41NzU3MywyNTkuNTkyMjY0IDE2NTEuNzI3MzUsMjg2LjgxMjkzNiAxNjg3LjA5MDc5LDI4Ni44MTI5MzYgQzE3MjIuNDU0MjMsMjg2LjgxMjkzNiAxNzQyLjc5Mzc0LDI2MC40MDM3MiAxNzQyLjc5Mzc0LDIxNS4zMTI1NjYgQzE3NDIuNzkzNzQsMTcwLjIyMTQxMiAxNzIyLjA2NjYzLDE0My4wMDA3NCAxNjg3LjQ5Njg0LDE0My4wMDA3NCBDMTY1Mi45MjcwNSwxNDMuMDAwNzQgMTYzMC41NzU3MywxNjkuODE1Njg0IDE2MzAuNTc1NzMsMjE0LjUwMTExIFoiIGlkPSJTaGFwZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTg4Ni4zNTE1OSw4Mi44NjA3NTg4IEMxODg2LjM1MTU5LDYyLjUzNzQ2NTcgMTg4NS41Mzk0OSw0Ni4yODk4OTY0IDE4ODMuMTAzMTcsMjcuMjAyMjMgTDE5NjYuMDQ4NTMsMjcuMjAyMjMgQzE5NjQuMDE4MjcsNDMuODU1NTI3NCAxOTYyLjgwMDExLDYzLjM2NzM2NDIgMTk2Mi44MDAxMSw4Mi44NjA3NTg4IEwxOTYyLjgwMDExLDkxLjM5OTQ5MjcgTDE5NzcuNDM2NDQsOTEuMzk5NDkyNyBDMTk5NS4zMjExOSw5MS4zOTk0OTI3IDIwMDQuNjc4ODQsOTAuOTkzNzY0NSAyMDE3LjI4NDkxLDg5LjM3MDg1MTggTDIwMTcuMjg0OTEsMTU2LjgxMzk0IEMyMDA1LjA4NDg5LDE1NS4xOTEwMjcgMTk5NC41MDkwOCwxNTQuMzc5NTcxIDE5NzkuODcyNzUsMTU0LjM3OTU3MSBMMTk2Mi44MDAxMSwxNTQuMzc5NTcxIEwxOTYyLjgwMDExLDI1OC4zOTM1MjEgQzE5NjIuODAwMTEsMjY5Ljc3MjM1MyAxOTY0LjgzMDM3LDI3NS40NTI1NDcgMTk3MC4xMjc1LDI3OS4xMjI1NDMgQzE5NzQuNTk0MDgsMjgxLjk2MjY0IDE5ODEuMTA5MzcsMjgzLjU4NTU1MyAxOTg4LjgyNDM1LDI4My41ODU1NTMgQzE5OTkuNDAwMTYsMjgzLjU4NTU1MyAyMDA3LjExNTE1LDI4MS41NTY5MTIgMjAxNy4yODQ5MSwyNzYuMjY0MDAzIEwyMDIzLjM5NDE1LDMzOC4wMjY4OTcgQzIwMDUuMTAzMzUsMzQzLjcwNzA5MiAxOTg5LjIzMDQxLDM0Ni4xNTk5MDMgMTk2Ny4yODUxNCwzNDYuMTU5OTAzIEMxOTM5LjYzNjY5LDM0Ni4xNTk5MDMgMTkyMC41MTUzMywzNDEuNjk2ODkzIDE5MDcuNTIxNjcsMzMxLjk0MDk3NCBDMTg5Mi4wNzMyMywzMjAuMTU2NDE1IDE4ODYuMzcwMDUsMzA2LjM0MzIxNSAxODg2LjM3MDA1LDI3OC43MTY4MTUgTDE4ODYuMzcwMDUsMTU0LjM5ODAxMyBMMTg3MC45MjE2MSwxNTQuMzk4MDEzIEMxODU3LjkwOTQ5LDE1NC4zOTgwMTMgMTg0Ny4zMzM2OCwxNTUuMjA5NDY5IDE4MzUuNTM5NzIsMTU2LjgzMjM4MiBMMTgzNS41Mzk3Miw4OC45ODM1NjU4IEMxODQ3LjMzMzY4LDkwLjYwNjQ3ODUgMTg1Ny41MDM0NCw5MS40MTc5MzQ5IDE4NzEuNzMzNzIsOTEuNDE3OTM0OSBMMTg4Ni4zNzAwNSw5MS40MTc5MzQ5IEwxODg2LjM3MDA1LDgyLjg3OTIwMSBMMTg4Ni4zNTE1OSw4Mi44NjA3NTg4IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEzMy45ODc5NSw5MS4zOTk0OTI3IEMyMTMxLjU1MTY0LDEwOC4wNTI3OSAyMTMwLjczOTU0LDEyNC4zMDAzNTkgMjEzMC43Mzk1NCwxNTIuNzU2NjU4IEwyMTMwLjczOTU0LDI3Ny44ODY5MTYgQzIxMzAuNzM5NTQsMjk5LjgzMzEyMiAyMTMxLjk1NzY5LDMyMS43NjA4ODYgMjEzMy45ODc5NSwzMzkuMjQ0MDgyIEwyMDQ5LjAxMjM0LDMzOS4yNDQwODIgQzIwNTEuNDQ4NjUsMzE5LjMyNjUxNyAyMDUyLjI2MDc1LDMwMy44OTA0MDQgMjA1Mi4yNjA3NSwyNzcuODg2OTE2IEwyMDUyLjI2MDc1LDE1Mi43NTY2NTggQzIwNTIuMjYwNzUsMTI2LjM0NzQ0MiAyMDUxLjQ0ODY1LDEwOS42OTQxNDUgMjA0OS4wMTIzNCw5MS4zOTk0OTI3IEwyMTMzLjk4Nzk1LDkxLjM5OTQ5MjcgWiBNMjEzMi43Njk4LDEuMTk4NzQyMzQgTDIxMzIuNzY5OCw2Mi4xNTAxNzk3IEwyMDUwLjIzMDQ5LDYyLjE1MDE3OTcgTDIwNTAuMjMwNDksMS4xOTg3NDIzNCBMMjEzMi43Njk4LDEuMTk4NzQyMzQgWiIgaWQ9IlNoYXBlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMTY2LjUwOTAzLDIxNC45MDY4MzggQzIxNjYuNTA5MDMsMTMzLjY1MDU1IDIyMTguNTU3NTIsODIuMDQ5MzAyNSAyMzAwLjY5MDc3LDgyLjA0OTMwMjUgQzIzODIuODI0MDIsODIuMDQ5MzAyNSAyNDM0Ljg3MjUsMTMzLjY1MDU1IDI0MzQuODcyNSwyMTQuMDk1MzgyIEMyNDM0Ljg3MjUsMjk0LjU0MDIxMyAyMzgxLjE5OTgxLDM0OC41NzU4MyAyMzAwLjI4NDcxLDM0OC41NzU4MyBDMjIxOS4zNjk2MiwzNDguNTc1ODMgMjE2Ni41MDkwMywyOTYuNTY4ODU0IDIxNjYuNTA5MDMsMjE0LjkwNjgzOCBaIE0yMjQ0LjE3NTcxLDIxNC41MDExMSBDMjI0NC4xNzU3MSwyNTkuNTkyMjY0IDIyNjUuMzI3MzMsMjg2LjgxMjkzNiAyMzAwLjY5MDc3LDI4Ni44MTI5MzYgQzIzMzYuMDU0MjEsMjg2LjgxMjkzNiAyMzU2LjM5MzcyLDI2MC40MDM3MiAyMzU2LjM5MzcyLDIxNS4zMTI1NjYgQzIzNTYuMzkzNzIsMTcwLjIyMTQxMiAyMzM1LjY2NjYxLDE0My4wMDA3NCAyMzAxLjA5NjgyLDE0My4wMDA3NCBDMjI2Ni41MjcwMiwxNDMuMDAwNzQgMjI0NC4xNzU3MSwxNjkuODE1Njg0IDIyNDQuMTc1NzEsMjE0LjUwMTExIFoiIGlkPSJTaGFwZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQ2Ny44MzY1NCwzMzkuMjQ0MDgyIEMyNDcwLjI3Mjg2LDMyMC4xNTY0MTUgMjQ3MS4wODQ5NiwzMDMuMDc4OTQ3IDI0NzEuMDg0OTYsMjc3Ljg4NjkxNiBMMjQ3MS4wODQ5NiwxNTIuNzU2NjU4IEMyNDcxLjA4NDk2LDEyNC43MjQ1MyAyNDcwLjI3Mjg2LDEwNy42NjU1MDQgMjQ2Ny44MzY1NCw5MS4zOTk0OTI3IEwyNTQ4Ljc1MTY0LDkxLjM5OTQ5MjcgTDI1NDguNzUxNjQsMTA4LjQ1ODUxOCBDMjU0OC43NTE2NCwxMTAuODkyODg3IDI1NDguMzQ1NTksMTE2Ljk5NzI1MiAyNTQ4LjM0NTU5LDExOS44MzczNDkgQzI1NzMuOTYzNzgsOTUuNDU2Nzc0NSAyNTk4Ljc2OTg2LDg1LjI5NTEyNzkgMjYzMi4xMDMwNCw4NS4yOTUxMjc5IEMyNjYwLjE1NzU1LDg1LjI5NTEyNzkgMjY4Mi41MjczMiw5My4wMjI0MDU0IDI2OTcuNTY5NywxMDguMDUyNzkgQzI3MTMuODMwMjQsMTI0LjMwMDM1OSAyNzIwLjc1MTU4LDE0NC4yMTc5MjQgMjcyMC43NTE1OCwxNzYuMzA3MzM1IEwyNzIwLjc1MTU4LDI3OC4yOTI2NDQgQzI3MjAuNzUxNTgsMzAxLjg2MTc2MyAyNzIxLjk2OTc0LDMyMi4xNjY2MTQgMjcyNCwzMzkuMjQ0MDgyIEwyNjM5LjQzMDQ0LDMzOS4yNDQwODIgQzI2NDEuODY2NzUsMzE5LjczMjI0NSAyNjQyLjY3ODg1LDMwMi42NzMyMTkgMjY0Mi42Nzg4NSwyNzcuODg2OTE2IEwyNjQyLjY3ODg1LDE5NC42MDE5ODcgQzI2NDIuNjc4ODUsMTc4LjM1NDQxOCAyNjQxLjA1NDY1LDE3MS40Mzg1OTYgMjYzNi4xNjM1NiwxNjQuNTQxMjE4IEMyNjMwLjg4NDg5LDE1Ny4yMTk2NjggMjYyMS41MjcyMywxNTMuMTYyMzg2IDI2MDkuMzI3MjIsMTUzLjE2MjM4NiBDMjU4Ni41NTEzOSwxNTMuMTYyMzg2IDI1NjYuMjMwMzMsMTY3LjM4MTMxNSAyNTQ4LjczMzE4LDE5NS44MTkxNzEgTDI1NDguNzMzMTgsMjc3Ljg4NjkxNiBDMjU0OC43MzMxOCwzMDEuMDUwMzA2IDI1NDkuNTQ1MjksMzE4LjEwOTMzMiAyNTUxLjk4MTYsMzM5LjI0NDA4MiBMMjQ2Ny44MTgwOSwzMzkuMjQ0MDgyIEwyNDY3LjgzNjU0LDMzOS4yNDQwODIgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjkzLCAtNDU2KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA3MC41LDExMzUuNTUgTDcyOC42OSwxMDE1LjI1IEM3MDQuNTMsMTAwNi43NSA2OTAuMDQsOTgyLjAzIDY5NC40Myw5NTYuOCBMNzYwLjM4LDU3Ny4zNCBDNzY0Ljc5LDU1MS45NCA3OTEuMDQsNTM2LjY2IDgxNS4zMSw1NDUuMzUgTDEyOTYuODQsNzE3LjgyIEMxMzIwLjk2LDcyNi40NiAxMzMxLjU4LDc1NC42NSAxMzE5LjE2LDc3Ny4wNiBMMTEzMy43OCwxMTExLjUxIEMxMTIxLjM4LDExMzMuODkgMTA5NC42MywxMTQ0LjA1IDEwNzAuNSwxMTM1LjU2IEwxMDcwLjUsMTEzNS41NSBaIiBpZD0iUGF0aCIgZmlsbD0iIzAwN0RDNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyMzUuMjEsNjE1LjI2IEwxMTMxLjkxLDYxNS4yOSBDMTEzMi4zMyw2MTAuNyAxMTMyLjU3LDYwNi4wNSAxMTMyLjU3LDYwMS4zNSBDMTEzMi41Nyw1MjEuMTEgMTA2OS44NSw0NTYuMDUgOTkyLjQ3LDQ1Ni4wNSBDOTE1LjA5LDQ1Ni4wNSA4NTIuNCw1MjEuMTEgODUyLjQsNjAxLjM1IEM4NTIuNCw2MDYuMDggODUyLjY0LDYxMC43NSA4NTMuMDYsNjE1LjM3IEw3NTQuMDEsNjE1LjQgQzczMS40MSw2MTUuNCA3MTQuMDQsNjM1LjM5IDcxNy4xOSw2NTcuNzcgTDc2Ny44OCwxMDE4LjQ3IEM3NzEuMzIsMTA0Mi45OCA3OTIuMjksMTA2MS4yIDgxNy4wNCwxMDYxLjIgTDExNjIuMTYsMTA2MS4yIEMxMTg2LjQsMTA2MS4yIDEyMDcuMDksMTA0My43IDEyMTEuMTEsMTAxOS44IEwxMjcxLjkxLDY1OC42NCBDMTI3NS43Myw2MzUuOTUgMTI1OC4yMyw2MTUuMjYgMTIzNS4yMiw2MTUuMjcgTDEyMzUuMjEsNjE1LjI2IFogTTg4Ni4yMyw1ODAuMTQgQzg4Ni4yMyw1ODAuMDEgODg2LjI0LDU3OS45MSA4ODYuMjUsNTc5Ljg0IEM4OTEuODgsNTI0LjE0IDk0NS42MSw0ODkuNyA5OTguNjksNDkxLjMgQzEwMjYuOTgsNDkyLjE1IDEwNTQuNzgsNTA0IDEwNzQuMTgsNTI0Ljc2IEMxMDk3LjAyLDU0OS4yMSAxMTAzLjQ2LDU4Mi44IDExMDMuNDYsNjE1LjMgQzExMDMuNDYsNjE1LjMgODg2LDYxNS4zNiA4ODUuNyw2MTUuMzYgQzg4NS45OSw2MTUuMzYgODg1Ljk5LDU4NC4zMiA4ODYuMjMsNTgwLjE0IEw4ODYuMjMsNTgwLjE0IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzI3QjE0NyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PSIwLjA3IiBmaWxsPSIjMDAyRjAwIiBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwMDUuNzYsNzUwLjc3IEw5MzguNDIsNzk0Ljc2IEw5MTcuMSw5MjUuMTEgTDkyMC4wNiw5NDAuODggTDEwMDkuMywxMDYwLjU0IEMxMDA5LjMsMTA2MC41NCAxMTAxLjMsMTA2MS44IDExNjIuMTQsMTA2MS4xOCBDMTE4OC43MiwxMDYwLjkxIDEyMDcuNzQsMTAzNy43OSAxMjEwLjM1LDEwMjQuNzQgTDEyMzQuNDgsODgwLjA3IEwxMDcxLjYxLDc1OCBMMTAzOC40MSw3NDYuMDIgTDEwMDUuNzUsNzUwLjc2IEwxMDA1Ljc2LDc1MC43NyBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAxOC44Niw4NDUuNDEgQzEwMTcuOTEsODA4LjE0IDEwMTIuNDYsODAwLjM0IDk3My40LDgwMy4wNiBDOTczLjQsODAzLjA2IDk4OS42Myw3ODcuNzUgMTAzOC44NCw3ODAuMzIgQzEwMzMuOCw4MjYuNTQgMTAxOC44Niw4NDUuNDEgMTAxOC44Niw4NDUuNDEgTTEwMDMuMTEsODk4Ljc2IEMxMDExLjUsOTAxLjgzIDEwMjAuNTQsOTAzLjUgMTAyOS45Niw5MDMuNSBDMTA3My4yNyw5MDMuNSAxMTA4LjcsODY4LjA3IDExMDguNyw4MjQuNzYgQzExMDguNyw3ODEuNDYgMTA3My4yNyw3NDYuMDMgMTAyOS45Niw3NDYuMDMgTDkxNi4yMyw3NDYuMDMgTDkxNi4yMyw5MjIuOCBDOTE2LjIzLDk0Ni42OSA5MzUuNzgsOTY2LjI0IDk1OS42Nyw5NjYuMjQgTDEwMzAuODcsOTY2LjI0IEM5NTEuNjEsOTQ1IDkxMy40NCw4NzAuMDUgOTg1LjMsODI4LjU2IEM5NjUuMDgsODQ4Ljc4IDk1OS44Myw4ODIuOTQgMTAwMy4xMSw4OTguNzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXBwZWQiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTaGFwZSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiB4PSI5MTMuNDQiIHk9Ijc0Ni4wMyIgd2lkdGg9IjE5NS4yNiIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwcGVkIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJSZWN0YW5nbGUiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG1hc2s9InVybCgjbWFzay00KSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjEwOTIuMiA5NjYuMjQgMTA5Mi4yMiA3NDYuMDMgMTEwOC43IDc0Ni4wMyAxMTA4LjcgOTY2LjI0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwOTAuMzUiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwODguNSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA4Ni42NCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA4NC43OSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA4Mi45MyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA4MS4wOCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA3OS4yMiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA3Ny4zNyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA3NS41MSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA3My42NiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTA3MS44IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDY5Ljk1IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDY4LjA5IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDY2LjI0IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDY0LjM4IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDYyLjUzIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDYwLjY3IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDU4LjgyIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDU2Ljk2IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDU1LjExIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDUzLjI1IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDUxLjQiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDkuNTQiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDcuNjkiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDUuODMiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDMuOTgiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDIuMTIiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwNDAuMjciIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwMzguNDEiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwMzYuNTYiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEwMzQuNyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAzMi44NSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAzMC45OSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAyOS4xNCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAyNy4yOCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAyNS40MyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAyMy41NyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAyMS43MiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAxOS44NiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAxOC4wMSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAxNi4xNSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTAxNC4zIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDEyLjQ0IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDEwLjU5IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDA4LjczIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDA2Ljg4IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDA1LjAzIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDAzLjE3IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMDAxLjMyIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5OTkuNDYiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk5Ny42MSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTk1Ljc1IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5OTMuOSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTkyLjA0IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5OTAuMTkiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk4OC4zMyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTg2LjQ4IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5ODQuNjIiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk4Mi43NyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTgwLjkxIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NzkuMDYiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk3Ny4yIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NzUuMzUiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk3My40OSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTcxLjY0IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NjkuNzgiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk2Ny45MyIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTY2LjA3IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NjQuMjIiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk2Mi4zNiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTYwLjUxIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NTguNjUiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk1Ni44IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NTQuOTQiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk1My4wOSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTUxLjIzIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NDkuMzgiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk0Ny41MiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTQ1LjY3IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5NDMuODEiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9Ijk0MS45NiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTQwLjEiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjkzOC4yNSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTM2LjM5IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5MzQuNTQiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjkzMi42OCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTMwLjgzIiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5MjguOTciIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjkyNy4xMiIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTI1LjI2IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5MjMuNDEiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjkyMS41NSIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTE5LjciIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjkxNy44NCIgeT0iNzQ2LjAzIiB3aWR0aD0iMS44NSIgaGVpZ2h0PSIyMjAuMjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOTE1Ljk5IiB5PSI3NDYuMDMiIHdpZHRoPSIxLjg1IiBoZWlnaHQ9IjIyMC4yMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSI5MTQuMTMiIHk9Ijc0Ni4wMyIgd2lkdGg9IjEuODUiIGhlaWdodD0iMjIwLjIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjkxNC4xNCA3NDYuMDMgOTE0LjEyIDk2Ni4yNCA5MTMuNDQgOTY2LjI0IDkxMy40NCA3NDYuMDMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBmaWxsPSIjRkZGRkZGIiBpZD0iUGF0aCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg3MS44OCw2MzEuMDggQzg4NC41Nyw2MzEuMDggODk0Ljg1LDY0MC42OCA4OTQuODUsNjUyLjU0IEM4OTQuODUsNjY0LjQgODg0LjU3LDY3NCA4NzEuODgsNjc0IEM4NTkuMTksNjc0IDg0OC45MSw2NjQuMzkgODQ4LjkxLDY1Mi41NCBDODQ4LjkxLDY0MC42OSA4NTkuMTksNjMxLjA4IDg3MS44OCw2MzEuMDggWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTExLjIyLDYzMS4wOCBDMTEyMy45MSw2MzEuMDggMTEzNC4xOSw2NDAuNjggMTEzNC4xOSw2NTIuNTQgQzExMzQuMTksNjY0LjQgMTEyMy45MSw2NzQgMTExMS4yMiw2NzQgQzEwOTguNTMsNjc0IDEwODguMjQsNjY0LjM5IDEwODguMjQsNjUyLjU0IEMxMDg4LjI0LDY0MC42OSAxMDk4LjUzLDYzMS4wOCAxMTExLjIyLDYzMS4wOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" style={{height:28,display:"block"}} alt="ePromotion"/></span>
          <span className="nav-tabs-group" style={{display:"inline-flex",alignItems:"center",gap:0}}>
          {(function(){
            var tabs=[];
            if(saved.size>0||account)tabs.push({r:"saved",l:"Saved",badge:saved.size||null});
            if(account)tabs.push({r:"chats",l:"Chats",badge:chatCount||null});
            return tabs.length>0?tabs.map(function(t){
              var active=route===t.r;
              return <button key={t.r} onClick={function(){changeRoute(t.r);sProfViewOpen(false);sDashOpen(false);}} style={{border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:active?400:300,color:active?ink:"#8A8884",fontFamily:"'Inter',sans-serif",padding:"6px 12px",borderRadius:980,transition:"all .3s",display:"flex",alignItems:"center",gap:5}}>
                {t.l}
                {t.badge?<span style={{width:18,height:18,borderRadius:"50%",background:active?ink:(dark?"#2C2C2E":"#E8E8E8"),display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:500,color:active?bg:"#8A8884"}}>{t.badge}</span>:null}
              </button>;
            }):null;
          })()}
          </span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          {route==="home"?<div className="nav-search" style={{position:"relative"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"7px 14px",borderRadius:980,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",transition:"all .3s",border:"1px solid "+(searchFocused?(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.08)"):"transparent"),width:searchFocused?260:catFilter?220:180}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={searchFocused?ink:"#8A8884"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,opacity:0.6,transition:"stroke .3s"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              {catFilter?<button onClick={function(){sCatFilter(null);}} style={{padding:"2px 8px",borderRadius:980,background:dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)",border:"none",cursor:"pointer",fontSize:10,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:3,flexShrink:0,transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                {SEC_META[catFilter]?SEC_META[catFilter].title:catFilter}
                <span style={{fontSize:9,lineHeight:1}}>✕</span>
              </button>:null}
              <div style={{position:"relative",flex:1}}>
                <input value={q} onChange={function(e){sQ(e.target.value);}} style={{width:"100%",padding:0,border:"none",background:"transparent",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none"}} onFocus={function(){sSearchFocused(true);}} onBlur={function(){setTimeout(function(){sSearchFocused(false);},200);}}/>
                {!q?<div style={{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",color:"#8A8884",display:"flex",alignItems:"center",gap:0,overflow:"hidden",whiteSpace:"nowrap"}}>
                  <span style={{opacity:.55,transition:"opacity .3s"}}>Search </span>
                  <span style={{opacity:hintFade?.55:0,transition:"opacity .3s ease",display:"inline-block"}}>{searchHints[hintIdx]}</span>
                  <span style={{opacity:.55,transition:"opacity .3s"}}>{"\u2026"}</span>
                </div>:null}
              </div>
              {q?<button onClick={function(){sQ("");}} style={{border:"none",background:"none",cursor:"pointer",fontSize:11,color:"#8A8884",padding:0,fontWeight:400,transition:"color .2s",flexShrink:0,lineHeight:1}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color="#8A8884";}}>✕</button>:null}
            </div>
            {/* Search dropdown — categories + trending */}
            {searchFocused&&!q?<div style={{position:"absolute",top:"calc(100% + 8px)",left:0,right:0,minWidth:280,background:dark?"rgba(28,28,30,0.97)":"rgba(255,255,255,0.97)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",borderRadius:18,boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.08)",zIndex:50,padding:"14px 0",animation:"slideDown .3s cubic-bezier(.22,1,.36,1) both"}}>
              <p style={{padding:"0 18px 8px",fontSize:10,fontWeight:500,color:sub,letterSpacing:"1px",textTransform:"uppercase"}}>Categories</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:6,padding:"0 18px 14px"}}>
                {[{k:null,l:"All"}].concat(["Food","Wellness","Beauty","Fashion","Technology"].map(function(c){return{k:c,l:SEC_META[c]?SEC_META[c].title:c};})).map(function(c){
                  var active=catFilter===c.k;
                  return <button key={c.l} onMouseDown={function(e){e.preventDefault();sCatFilter(c.k);sSearchFocused(false);}} style={{padding:"6px 14px",borderRadius:980,border:"1px solid "+(active?(dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"):(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)")),background:active?(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)"):"transparent",cursor:"pointer",fontSize:12,fontWeight:active?500:400,color:active?ink:sub,fontFamily:"'Inter',sans-serif",transition:"all .2s",display:"flex",alignItems:"center",gap:5}}>
                    {c.k&&SEC_ICONS[c.k]?SEC_ICONS[c.k](active?ink:sub):null}
                    {c.l}
                  </button>;
                })}
              </div>
              <div style={{height:1,margin:"0 18px",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"}}></div>
              <p style={{padding:"12px 18px 6px",fontSize:10,fontWeight:500,color:sub,letterSpacing:"1px",textTransform:"uppercase"}}>Trending</p>
              {["Skincare deals","Coffee promotions","50% off fashion"].map(function(t){
                return <div key={t} onMouseDown={function(e){e.preventDefault();sQ(t);sSearchFocused(false);}} style={{padding:"8px 18px",cursor:"pointer",fontSize:13,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:8,transition:"background .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.02)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  {t}
                </div>;
              })}
            </div>:null}
          </div>:null}
          {account&&account.type==="store"?<button onClick={function(){sPostOpen(true);}} style={{padding:"7px 18px",borderRadius:980,background:"#27B147",boxShadow:"0 2px 10px rgba(39,177,71,0.18)",color:"#FFF",border:"none",cursor:"pointer",fontSize:13,fontWeight:500,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:5,transition:"all .5s cubic-bezier(.16,1,.3,1)"}}><span style={{fontSize:15,fontWeight:400}}>+</span> Post</button>:null}
          {account?<button onClick={function(){sProfOpen(!profOpen);}} style={{border:"none",background:"none",cursor:"pointer",display:"flex",alignItems:"center",position:"relative"}}>
            <div style={{width:30,height:30,borderRadius:"50%",background:profOpen?ink:(dark?"#2C2C2E":"#E8E8E8"),display:"flex",alignItems:"center",justifyContent:"center",transition:"all .3s",overflow:"hidden"}}>
              {account.avatar?<img src={account.avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:
              <span style={{fontSize:12,fontWeight:500,color:profOpen?bg:ink}}>{account.name.charAt(0)}</span>}
            </div>
          </button>:<div style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={function(){changeRoute("getapp");}} className="get-app-btn" style={{padding:"6px 14px",borderRadius:980,border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"),background:"none",cursor:"pointer",fontSize:12,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:5,transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)";}} onMouseLeave={function(e){e.currentTarget.style.background="none";}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Get App
            </button>
            <button onClick={function(){sAuthOpen(true);}} style={{padding:"6px 18px",borderRadius:980,border:"none",background:"#27B147",boxShadow:"0 2px 10px rgba(39,177,71,0.18)",cursor:"pointer",fontSize:12,fontWeight:500,color:"#FFF",fontFamily:"'Inter',sans-serif",transition:"opacity .2s",minWidth:68,textAlign:"center",outline:"none",WebkitTapHighlightColor:"transparent"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Sign in</button>
            <div style={{position:"relative"}}>
              <button onClick={function(){sMoreOpen(!moreOpen);}} style={{border:"none",background:"none",cursor:"pointer",width:30,height:30,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",color:sub}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}} onMouseLeave={function(e){e.currentTarget.style.background="none";}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
              </button>
              {moreOpen?<div onClick={function(){sMoreOpen(false);}} style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:79}}></div>:null}
              {moreOpen?<div className="more-panel" style={{position:"absolute",top:"100%",right:0,marginTop:8,width:220,borderRadius:14,background:dark?"rgba(28,28,30,0.95)":"rgba(255,255,255,0.95)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 12px 40px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)",padding:"12px 16px",zIndex:80,animation:"slideDown .3s cubic-bezier(.22,1,.36,1) both"}}>
                {[{k:"about",l:"About"},{k:"help",l:"Help & Support"},{k:"business",l:"For Business"},{k:"contact",l:"Contact Us"}].map(function(item){
                  return <div key={item.k} onMouseDown={function(e){e.preventDefault();sMoreOpen(false);sInfoPage(item.k);}} style={{padding:"10px 0",cursor:"pointer",fontSize:13,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.5";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                    {item.l}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </div>;
                })}
              </div>:null}
            </div>
          </div>}
        </div>
      </div>
    </nav>

    <div style={{opacity:routeFade?1:0,transition:"opacity .2s ease",willChange:"opacity",display:viewStore?"none":"block"}}>
    {route==="home"?<div>
    {/* Hero — deals-focused with discount badge & urgency */}
    {!browsing?<div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"72px 40px 0"}}><section className="hero-section" style={{paddingTop:32,paddingBottom:32,borderRadius:20,overflow:"hidden",position:"relative",background:dark?"#1C1C1E":"#FFFFFF",border:"none",boxShadow:"none"}}>
      <div className="s-pad hero-spread" style={{margin:"0 auto",padding:"0 32px",display:"flex",alignItems:"center",gap:40}}>

        {/* Left — text content */}
        <div className="hero-left" style={{flex:1,minWidth:0,opacity:hf?1:0,transition:"opacity .25s ease"}}>
          {/* Category / Today only badge row — no store name here */}
          <div className="hero-badges" style={{display:"flex",alignItems:"center",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            {isDotd?<span style={{padding:"4px 10px",borderRadius:980,background:dark?"rgba(255,59,48,0.12)":"rgba(255,59,48,0.06)",fontSize:10,fontWeight:500,color:"#FF3B30",letterSpacing:"0.5px"}}>Today only</span>:null}
          </div>
          <h1 className="hero-title" style={{fontSize:36,fontWeight:500,lineHeight:1.2,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.5px",marginBottom:12,color:ink}}>{f.title}</h1>
          <p className="hero-desc" style={{fontSize:13,fontWeight:400,color:sub,lineHeight:1.6,marginBottom:20,maxWidth:440,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{f.desc}</p>
          {/* Price row — discount badge inline with prices */}
          <div className="hero-price-row" style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
            {f.dc>=20?<span style={{padding:"4px 12px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:15,fontWeight:700,color:"#FF3B30",letterSpacing:"0.2px"}}>{"-"+f.dc+"%"}</span>:null}
            <span className="hero-orig" style={{fontSize:15,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${f.orig.toFixed(2)}</span>
            <span className="hero-price" style={{fontSize:22,fontWeight:600,fontFamily:"'Inter',sans-serif",color:ink}}>${f.price.toFixed(2)}</span>
          </div>
          {/* Store name + location below price */}
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:20}}>
            <span style={{fontSize:12,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{f.store}</span>
            <span style={{fontSize:12,color:mt}}>·</span>
            <span style={{fontSize:12,fontWeight:400,color:sub}}>{f.loc}</span>
          </div>

        </div>

        {/* Right — image */}
        <div onClick={function(){sSel(f);}} className="hero-center" style={{flex:1.1,minWidth:0,aspectRatio:"16/9",borderRadius:18,overflow:"hidden",cursor:"pointer",position:"relative",opacity:hf?1:0,transition:"opacity .25s ease",boxShadow:"0 8px 32px rgba(0,0,0,"+(dark?"0.3":"0.08")+")"}}>
          <div style={{width:"100%",height:"100%",position:"relative",overflow:"hidden",background:dark?"#1C1C1E":"#F5F5F5"}}>
            <div className="hero-fg" style={{position:"absolute",inset:0,background:f.img,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",transition:"transform .6s cubic-bezier(.22,1,.36,1)"}}></div>
          </div>
        </div>

      </div>
    </section>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:6,marginTop:16,paddingBottom:4}}>
        <button onClick={function(){sHf(false);setTimeout(function(){sFi(function(p){return p>0?p-1:featured.length-1;});sHf(true);},180);}} style={{width:26,height:26,borderRadius:"50%",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:ink,opacity:0.5,transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="1";}} onMouseLeave={function(e){e.currentTarget.style.opacity="0.5";}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
        {featured.map(function(x,idx){
          var active=idx===fi;
          return <div key={idx} style={{width:active?28:6,height:6,borderRadius:99,transition:"all .35s cubic-bezier(.22,1,.36,1)",background:active?(dark?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)"):(dark?"rgba(255,255,255,0.25)":"rgba(0,0,0,0.18)"),cursor:"pointer",position:"relative",overflow:"hidden",flexShrink:0}} onClick={function(){if(active)return;sHf(false);setTimeout(function(){sFi(idx);sHf(true);},180);}}>
            {active?<div key={fi} style={{position:"absolute",top:0,left:0,height:"100%",borderRadius:99,background:"#27B147",animation:"heroProgress 4s linear forwards"}}></div>:null}
          </div>;
        })}
        <button onClick={function(){sHf(false);setTimeout(function(){sFi(function(p){return(p+1)%featured.length;});sHf(true);},180);}} style={{width:26,height:26,borderRadius:"50%",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:ink,opacity:0.5,transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="1";}} onMouseLeave={function(e){e.currentTarget.style.opacity="0.5";}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
      </div>
    </div>:null}

    {/* Trusted by — scrolling partner logos */}
    {!browsing?<section className="partner-pad" style={{padding:"40px 0 80px",overflow:"hidden"}}>
      <div className="s-pad" style={{padding:"0 40px",marginBottom:16,textAlign:"center"}}>
        <p style={{fontSize:12,fontWeight:400,color:dark?"#A0A0A5":"#8A8884",letterSpacing:"2.5px",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Trusted partners</p>
      </div>
      <div style={{overflow:"hidden",maskImage:"linear-gradient(to right, transparent, black 10%, black 90%, transparent)",WebkitMaskImage:"linear-gradient(to right, transparent, black 10%, black 90%, transparent)"}}>
        <div style={{display:"flex",animation:"marquee 60s linear infinite",width:"max-content",alignItems:"center"}}>
          {[0,1,2].map(function(set){
            return <div key={set} style={{display:"flex",alignItems:"center",gap:0}}>
              {[
                {type:"img",src:LOGO_NIKE},
                {type:"img",src:LOGO_ADIDAS},
                {type:"img",src:LOGO_MCDONALDS},
                {type:"img",src:LOGO_BURGERKING},
                {type:"img",src:LOGO_SKINURI},
                {type:"img",src:LOGO_ULOGO},
                {type:"img",src:LOGO_AEONMALL},
                {type:"text",name:"LINE ELEVEN"},
                {type:"img",src:LOGO_LUCKY}
              ].map(function(item,i){
                return <div key={i+"_"+set} className="partner-gap" style={{padding:"0 60px",flexShrink:0,display:"flex",alignItems:"center"}}>
                  {item.type==="img"?<img src={item.src} className="partner-logo" style={{height:30,display:"block",filter:dark?"brightness(1.8)":"none",transition:"filter .4s ease"}} alt=""/>:<span style={{fontSize:18,fontWeight:500,color:dark?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.25)",fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",whiteSpace:"nowrap"}}>{item.name}</span>}
                </div>;
              })}
            </div>;
          })}
        </div>
      </div>
    </section>:null}

    {/* Suggestion for You — Wellness, always first */}
    {!browsing&&suggestItems.length>0?<div className="s-pad section-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",paddingTop:56,borderTop:"1px solid "+bd}}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:18}}>
        <div>
          <h2 className="section-title" style={{fontSize:24,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:4}}>Suggestion for You</h2>
          <p style={{fontSize:13,fontWeight:400,color:"#8A8884"}}>{userCats.length>0?"Based on your interests":"Handpicked deals with the best savings"}</p>
        </div>
      </div>
      <div className="scroll-break" style={{position:"relative"}}><ScrollRow dark={dark} cardWidth={244} noDots={true}>
        {suggestItems.map(function(d,i){
          var sv=saved.has(d.id);
          var fl=following.has(d.store);
          return <div key={d.id} className="sq-card scroll-card" style={{animationDelay:Math.min(i*30,600)+"ms",cursor:"pointer",overflow:"hidden",background:bg2,borderRadius:16,flexShrink:0,width:228,scrollSnapAlign:"start"}} onClick={function(){sSel(d);}}>
            <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
              <div className="sq-img" style={{width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
              <button className="card-actions" onClick={function(e){e.stopPropagation();}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",opacity:0,transition:"opacity .2s"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button><button className="card-actions" onClick={function(e){e.stopPropagation();tog(d.id);}} style={{position:"absolute",top:10,right:50,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:sv?"#FF453A":"#FFF",opacity:sv?1:0,transition:"opacity .2s"}}>{sv?"\u2665":"\u2661"}</button>
              
            </div>
            <div style={{padding:"10px 12px 12px"}}>
              <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.4,minHeight:"2.8em",marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
              <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6}}>{d.store}</p>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                {d.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                <span style={{fontSize:16,fontWeight:500,color:ink}}>${d.price.toFixed(2)}</span>
              </div>
            </div>
          </div>;
        })}
      </ScrollRow></div>
    </div>:null}

    {/* New This Week — freshness, reason to return */}
    {!browsing?<div className="s-pad section-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",paddingTop:48}}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:18}}>
        <div>
          <h2 className="section-title" style={{fontSize:24,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:4}}>New This Week</h2>
          <p style={{fontSize:13,fontWeight:400,color:"#8A8884"}}>Fresh deals just posted</p>
        </div>
        <span style={{fontSize:12,fontWeight:400,color:mt}}></span>
      </div>
      <div className="scroll-break" style={{position:"relative"}}><ScrollRow dark={dark} cardWidth={244} noDots={true}>
        {BASE.filter(function(d){return typeof d.img==="string"&&d.img.indexOf("url(https://i.imgur.com")===0;}).slice(-8).reverse().map(function(d){
          var sv=saved.has(d.id);
          return <div key={"nw-"+d.id} className="sq-card scroll-card" style={{cursor:"pointer",overflow:"hidden",background:bg2,borderRadius:16,flexShrink:0,width:228,scrollSnapAlign:"start"}} onClick={function(){sSel(d);}}>
            <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
              <div className="sq-img" style={{width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
              <button className="card-actions" onClick={function(e){e.stopPropagation();}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",opacity:0,transition:"opacity .2s"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button><button className="card-actions" onClick={function(e){e.stopPropagation();tog(d.id);}} style={{position:"absolute",top:10,right:50,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:sv?"#FF453A":"#FFF",opacity:sv?1:0,transition:"opacity .2s"}}>{sv?"\u2665":"\u2661"}</button>
              
            </div>
            <div style={{padding:"10px 12px 12px"}}>
              <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.4,minHeight:"2.8em",marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
              <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6}}>{d.store}</p>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                {d.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                <span style={{fontSize:16,fontWeight:500,color:ink}}>${d.price.toFixed(2)}</span>
              </div>
            </div>
          </div>;
        })}
      </ScrollRow></div>
    </div>:null}

    {/* From stores you follow — reason to follow */}
    {!browsing&&following.size>0?<div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",paddingTop:40}}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:18}}>
        <div>
          <h2 className="section-title" style={{fontSize:24,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:4}}>Your Stores</h2>
          <p style={{fontSize:13,fontWeight:400,color:"#8A8884"}}>New from stores you follow</p>
        </div>
        <span style={{fontSize:12,fontWeight:400,color:mt}}>{following.size} following</span>
      </div>
      <div className="scroll-break" style={{position:"relative"}}><ScrollRow dark={dark} cardWidth={196} noDots={true}>
        {BASE.filter(function(d){return following.has(d.store);}).map(function(d){
          return <MiniCard key={"fol-"+d.id} d={d} onClick={sSel} dark={dark}/>;
        })}
      </ScrollRow></div>
    </div>:null}

    {/* Partner Banner — premium ad placement */}
    {!browsing?<div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",paddingTop:32,paddingBottom:32}}>
      {function(){var p=PARTNERS[Math.floor(Date.now()/(1000*60*60*6))%PARTNERS.length];
      return <div style={{borderRadius:20,overflow:"hidden",background:dark?"linear-gradient(135deg,#1C1C1E 0%,#2C2C2E 100%)":"linear-gradient(135deg,#F7F5F2 0%,#EDE9E3 100%)",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),display:"flex",alignItems:"center",position:"relative",minHeight:120}}>
        <div style={{flex:1,padding:"28px 36px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <div style={{width:36,height:36,borderRadius:10,background:dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontSize:16,fontWeight:600,fontFamily:"'Inter',sans-serif",color:ink}}>{p.name.charAt(0)}</span>
              </div>
              <div>
                <p style={{fontSize:18,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink}}>{p.name}</p>
                <p style={{fontSize:11,fontWeight:400,color:dark?"#636366":"#8A8884"}}>{p.tagline}</p>
              </div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <button style={{padding:"10px 24px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"),cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Learn more</button>
            <span style={{fontSize:9,fontWeight:400,color:dark?"#48484A":"#C8C6C0",letterSpacing:"0.5px",textTransform:"uppercase"}}>Ad</span>
          </div>
        </div>
      </div>;}()}
    </div>:null}

    {/* CATEGORY SECTIONS — horizontal scroll */}
    <div style={{paddingTop:browsing?100:28,paddingBottom:40}}>
      {browsing?<div className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",marginBottom:32}}>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between"}}>
          <div>
            <p className="browse-title" style={{fontSize:28,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",display:"flex",alignItems:"center",gap:12}}>{!searching&&catFilter&&SEC_ICONS[catFilter]?SEC_ICONS[catFilter](ink):null}{searching?"Results for “"+q+"”":catFilter?(SEC_META[catFilter]?SEC_META[catFilter].title:catFilter):""}</p>
            <p style={{fontSize:13,fontWeight:400,color:"#8A8884",marginTop:6}}>{searched.length} {searched.length===1?"deal":"deals"} found</p>
          </div>
          <button onClick={function(){sQ("");sCatFilter(null);}} style={{border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:400,color:"#8A8884",fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color="#8A8884";}}>Clear</button>
        </div>
      </div>:null}
      {sections.length===0?<div style={{textAlign:"center",padding:"100px 40px"}}>
        <div style={{width:56,height:56,borderRadius:"50%",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px"}}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <p style={{fontSize:22,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px"}}>No results</p>
        <p style={{fontSize:14,fontWeight:400,color:"#8A8884",marginTop:8,lineHeight:1.6}}>{searching?"Try a different search term":"No deals in this category yet"}</p>
        <button onClick={function(){sQ("");sCatFilter(null);}} style={{marginTop:24,padding:"10px 28px",borderRadius:980,border:"1px solid "+bd,background:"transparent",color:ink,cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"all .3s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>Browse all deals</button>
      </div>:
      sections.map(function(sec,si){
        /* Sort: promoted deals first within each section */
        var sorted=sec.items.slice().sort(function(a,b){var aImg=typeof a.img==="string"&&a.img.indexOf("url(https://i.imgur.com")===0?1:0;var bImg=typeof b.img==="string"&&b.img.indexOf("url(https://i.imgur.com")===0?1:0;if(bImg!==aImg)return bImg-aImg;return(b._promoted?1:0)-(a._promoted?1:0);});
        return <div key={sec.cat} className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px",marginBottom:si<sections.length-1?56:0}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:18}}>
            <div>
              <h2 className="section-title" style={{fontSize:24,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:4,display:"flex",alignItems:"center",gap:10}}>{SEC_ICONS[sec.cat]?SEC_ICONS[sec.cat](ink):null}{sec.title}</h2>
              <p style={{fontSize:13,fontWeight:400,color:"#8A8884"}}>{sec.sub}</p>
            </div>
          </div>
          <div className="scroll-break" style={{position:"relative"}}>
            <ScrollRow dark={dark} cardWidth={244} noDots={true}>
            {sorted.map(function(d,i){
              var sv=saved.has(d.id);
              var fl=following.has(d.store);
              var cards=[<div key={d.id} className="sq-card scroll-card" style={{animationDelay:Math.min((si*4+i)*30,600)+"ms",cursor:"pointer",overflow:"hidden",background:bg2,borderRadius:16,flexShrink:0,width:228,scrollSnapAlign:"start"}} onClick={function(){sSel(d);}}>
                <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
                  <div className="sq-img" style={{width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
                  <button className="card-actions" onClick={function(e){e.stopPropagation();}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",opacity:0,transition:"opacity .2s"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button><button className="card-actions" onClick={function(e){e.stopPropagation();tog(d.id);}} style={{position:"absolute",top:10,right:50,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:sv?"#FF453A":"#FFF",opacity:sv?1:0,transition:"opacity .2s"}}>{sv?"\u2665":"\u2661"}</button>
                  
                </div>
                <div style={{padding:"10px 12px 12px"}}>
                  <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.4,minHeight:"2.8em",marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
                  <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6}}>{d.store}</p>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    {d.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                    <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                    <span style={{fontSize:16,fontWeight:500,color:ink}}>${d.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>];
              /* Inject sponsored card after every 4th deal (only if cat matches) */
              var sp=SPONSORED[si%SPONSORED.length];if((i+1)%4===0&&i<sorted.length-1&&(!sp.cat||sp.cat===sec.cat)){cards.push(<div key={"sp-"+si+"-"+i} className="sq-card scroll-card" style={{cursor:"pointer",overflow:"hidden",background:bg2,borderRadius:16,flexShrink:0,width:228,scrollSnapAlign:"start",border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)")}} onClick={function(){sSel(sp);}}>
                <div style={{aspectRatio:"1/1",position:"relative",overflow:"hidden"}}>
                  <div className="sq-img" style={{width:"100%",height:"100%",background:sp.img,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                  <div style={{position:"absolute",top:10,left:10,padding:"3px 8px",borderRadius:980,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)"}}><span style={{fontSize:9,fontWeight:500,color:"#FFF",letterSpacing:"0.5px",textTransform:"uppercase"}}>Ad</span></div>
                  
                </div>
                <div style={{padding:"10px 12px 12px"}}>
                  <p style={{fontSize:13,fontWeight:400,color:ink,lineHeight:1.4,minHeight:"2.8em",marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{sp.title}</p>
                  <p style={{fontSize:10,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6}}>{sp.store}</p>
                  {sp.price>0?<div style={{display:"flex",alignItems:"center",gap:6}}>
                    {sp.dc>=20?<span style={{padding:"3px 9px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:12,fontWeight:700,color:"#FF3B30"}}>{"-"+sp.dc+"%"}</span>:null}
                    <span style={{fontSize:11,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${sp.orig.toFixed(2)}</span>
                    <span style={{fontSize:16,fontWeight:500,color:ink}}>${sp.price.toFixed(2)}</span>
                  </div>:<span style={{fontSize:12,fontWeight:500,color:"#34C759"}}>Free</span>}
                </div>
              </div>);}
              return cards;
            })}
            </ScrollRow>
          </div>
        </div>;
      })}

    </div>

    {/* MASONRY DISCOVER GRID */}
    <section className="s-pad" style={{maxWidth:1800,margin:"0 auto",padding:"0 40px 40px"}}>
      <div style={{borderTop:"1px solid "+bd,paddingTop:40}}>
        <h2 className="section-title" style={{fontSize:24,fontWeight:400,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:6}}>Discover</h2>
        <p style={{fontSize:13,fontWeight:400,color:"#8A8884",marginBottom:24}}>All deals, one grid</p>
      </div>
      {function(){
        /* Manual column distribution — items never shift */
        var imgDeals=searched.filter(function(d){return typeof d.img==="string"&&d.img.indexOf("url(https://i.imgur.com")===0;});
        var colCount=masonryCols;
        var cols=[];for(var c=0;c<colCount;c++)cols.push([]);
        imgDeals.forEach(function(d,i){cols[i%colCount].push({d:d,i:i});});
        return <div className="masonry" style={{display:"flex",gap:16}}>
          {cols.map(function(col,ci){
            return <div key={ci} style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:16}}>
              {col.map(function(item){
                var d=item.d;var i=item.i;
                var sv=saved.has(d.id);
                var hPct=((d.id*37%50)+80);
                return <div key={"ms-"+d.id} className="ms-card" style={{animationDelay:Math.min(i*30,600)+"ms",cursor:"pointer",borderRadius:16,overflow:"hidden",background:bg2}} onClick={function(){sSel(d);}}>
                  <div style={{paddingBottom:hPct+"%",position:"relative",overflow:"hidden"}}>
                    <div className="ms-img" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:d.img,backgroundSize:"cover",backgroundPosition:d._pos||"center"}}></div>
                    <button className="card-actions" onClick={function(e){e.stopPropagation();}} style={{position:"absolute",top:10,right:10,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFF",opacity:0,transition:"opacity .2s",zIndex:2}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg></button><button className="card-actions" onClick={function(e){e.stopPropagation();tog(d.id);}} style={{position:"absolute",top:10,right:50,width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.4)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:sv?"#FF453A":"#FFF",opacity:sv?1:0,transition:"opacity .2s",zIndex:2}}>{sv?"\u2665":"\u2661"}</button>
                    
                  </div>
                  <div style={{padding:"10px 12px 12px"}}>
                    <p style={{fontSize:12,fontWeight:400,color:ink,lineHeight:1.4,marginBottom:4,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{d.title}</p>
                    <p style={{fontSize:9,fontWeight:500,color:"#8A8884",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:5}}>{d.store}</p>
                    <div style={{display:"flex",alignItems:"center",gap:5}}>
                      {d.dc>=20?<span style={{padding:"2px 7px",borderRadius:980,background:"rgba(255,59,48,0.1)",fontSize:11,fontWeight:700,color:"#FF3B30"}}>{"-"+d.dc+"%"}</span>:null}
                      <span style={{fontSize:10,fontWeight:400,color:dark?"#888":"#999",textDecoration:"line-through"}}>${d.orig.toFixed(2)}</span>
                      <span style={{fontSize:14,fontWeight:600,color:ink}}>${d.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>;
              })}
            </div>;
          })}
        </div>;
      }()}
    </section>

    </div>:null}

    {dashOpen&&account&&account.type==="store"?<div style={{position:"fixed",inset:0,zIndex:30,background:dark?"#000":"#FAF9F7",overflowY:"auto",paddingTop:56}}>
      <StoreDash dark={dark} account={account} deals={userDeals} onUpdate={updateDeal} onDelete={deleteDeal} onQuickPost={function(){sPostOpen(true);}} onChat={function(d){startChat(d);}} openInquiry={openInquiry}/>
    </div>:null}

    {route==="saved"?(!account?<div className="page-content" style={{paddingTop:96,paddingBottom:80,minHeight:"100vh"}}>
      <div style={{maxWidth:400,margin:"0 auto",padding:"80px 40px",textAlign:"center"}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px"}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
        <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:10}}>Save your favorite deals</p>
        <p style={{fontSize:14,fontWeight:400,color:"#8A8884",lineHeight:1.7,marginBottom:28}}>Sign in to keep track of deals you love.</p>
        <button onClick={function(){sAuthOpen(true);}} style={{padding:"10px 32px",borderRadius:980,border:"none",background:"#27B147",boxShadow:"0 2px 14px rgba(39,177,71,0.18)",color:"#FFF",cursor:"pointer",fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Sign in</button>
      </div>
    </div>:<SavedPage saved={saved} deals={ALL} onSelect={sSel} onUnsave={tog} dark={dark}/>):null}

    {route==="chats"?(!account?<div className="page-content" style={{paddingTop:96,paddingBottom:80,minHeight:"100vh"}}>
      <div style={{maxWidth:400,margin:"0 auto",padding:"80px 40px",textAlign:"center"}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 28px"}}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={dark?"#48484A":"#C8C6C0"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:10}}>Your messages</p>
        <p style={{fontSize:14,fontWeight:400,color:"#8A8884",lineHeight:1.7,marginBottom:28}}>Sign in to message stores about deals.</p>
        <button onClick={function(){sAuthOpen(true);}} style={{padding:"10px 32px",borderRadius:980,border:"none",background:"#27B147",boxShadow:"0 2px 14px rgba(39,177,71,0.18)",color:"#FFF",cursor:"pointer",fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Sign in</button>
      </div>
    </div>:<ChatsPage chatHistory={chatHistory} deals={ALL} onUpdateMsgs={function(id,m){sChatHistory(function(h){var n=Object.assign({},h);n[id]=m;return n;});}} dark={dark}/>):null}
    </div>

    {/* Get App Page */}
    {route==="getapp"?function(){
      var plat=appPlat;var sliding=appSlide;
      var switchPlat=function(p){if(p===plat)return;sAppSlide(true);setTimeout(function(){sAppPlat(p);setTimeout(function(){sAppSlide(false);},50);},300);};
      return <div style={{minHeight:"100vh",paddingTop:56,display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>

      {/* Subtle background circles */}
      <div style={{position:"absolute",top:"-10%",right:"-5%",width:500,height:500,borderRadius:"50%",background:dark?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.012)",filter:"blur(80px)",pointerEvents:"none"}}></div>
      <div style={{position:"absolute",bottom:"-15%",left:"-8%",width:400,height:400,borderRadius:"50%",background:dark?"rgba(255,255,255,0.01)":"rgba(0,0,0,0.01)",filter:"blur(60px)",pointerEvents:"none"}}></div>

      {/* Segment — platform toggle, above all content */}
      <div style={{display:"flex",justifyContent:"center",marginBottom:32,width:"100%",maxWidth:1000,margin:"0 auto 32px",padding:"0 40px"}}>
        <div style={{display:"inline-flex",borderRadius:14,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)",padding:4,gap:2}}>
          {[
            {k:"ios",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>},
            {k:"android",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>}
          ].map(function(p){
            var active=plat===p.k;
            var label=p.k==="ios"?"iOS":"Android";
            return <button key={p.k} onClick={function(){switchPlat(p.k);}} style={{padding:"8px 20px",borderRadius:10,background:active?(dark?"rgba(255,255,255,0.12)":"#FFF"):"transparent",border:"none",cursor:"pointer",fontSize:13,fontWeight:active?500:400,color:active?ink:sub,fontFamily:"'Inter',sans-serif",transition:"all .25s",display:"flex",alignItems:"center",gap:7,boxShadow:active?"0 1px 4px rgba(0,0,0,0.08)":"none"}}>{p.icon}{label}</button>;
          })}
        </div>
      </div>

      <div className="getapp-row" style={{maxWidth:1000,margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",gap:24,width:"100%"}}>

        {/* Left */}
        <div className="getapp-left" style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:0}}>

          {/* Big bold title */}
          <h1 className="getapp-title" style={{fontSize:72,fontWeight:800,lineHeight:1.0,fontFamily:"'Inter',sans-serif",letterSpacing:"-3px",color:ink,marginBottom:20}}>Get the<br/>app.</h1>
          <p className="getapp-desc" style={{fontSize:16,fontWeight:400,color:sub,lineHeight:1.7,maxWidth:320,marginBottom:0}}>Download ePromotion for {plat==="ios"?"iOS":"Android"} — free, no ads.</p>
        </div>

        {/* Right — phone */}
        <div className="getapp-phone-wrapper" style={{flexShrink:0,position:"relative",padding:"20px 56px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          {/* Floating badges — mobile only */}
          <div className="getapp-floats" style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:4,overflow:"visible"}}>
            <div style={{position:"absolute",top:20,left:-20,animation:"floatBob 3.2s ease-in-out infinite",background:dark?"#1C1C1E":"#FFF",borderRadius:12,padding:"7px 11px",boxShadow:"0 4px 20px rgba(0,0,0,"+(dark?"0.4":"0.12")+")",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"),display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>
              <span style={{fontSize:15}}>🏷️</span>
              <span style={{fontSize:11,fontWeight:600,color:dark?"#F4F3F0":"#1D1D1F",fontFamily:"'Inter',sans-serif"}}>-40% off</span>
            </div>
            <div style={{position:"absolute",top:80,right:-20,animation:"floatBob2 2.8s ease-in-out infinite 0.6s",background:dark?"#1C1C1E":"#FFF",borderRadius:12,padding:"7px 11px",boxShadow:"0 4px 20px rgba(0,0,0,"+(dark?"0.4":"0.12")+")",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"),display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>
              <span style={{fontSize:15}}>🔥</span>
              <span style={{fontSize:11,fontWeight:600,color:dark?"#F4F3F0":"#1D1D1F",fontFamily:"'Inter',sans-serif"}}>Hot deals</span>
            </div>
            <div style={{position:"absolute",bottom:60,left:-20,animation:"floatBob3 3.6s ease-in-out infinite 1.1s",background:dark?"#1C1C1E":"#FFF",borderRadius:12,padding:"7px 11px",boxShadow:"0 4px 20px rgba(0,0,0,"+(dark?"0.4":"0.12")+")",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"),display:"flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>
              <span style={{fontSize:15}}>🛍️</span>
              <span style={{fontSize:11,fontWeight:600,color:dark?"#F4F3F0":"#1D1D1F",fontFamily:"'Inter',sans-serif"}}>New daily</span>
            </div>
          </div>
          <div className="getapp-phone" style={{opacity:sliding?0:1,transform:sliding?"translateX("+(plat==="ios"?"-":"")+"24px) scale(0.97)":"translateX(0) scale(1)",transition:"all .35s cubic-bezier(.22,1,.36,1)",width:240,height:480,borderRadius:34,background:dark?"#1A1A1A":"#FFF",border:"3px solid "+(dark?"#333":"#E0E0E0"),boxShadow:"0 40px 80px rgba(0,0,0,"+(dark?"0.4":"0.07")+")",overflow:"hidden",position:"relative"}}>
            <div className="getapp-notch" style={{position:"absolute",top:8,left:"50%",transform:"translateX(-50%)",width:plat==="ios"?76:0,height:plat==="ios"?22:0,borderRadius:16,background:dark?"#000":"#1D1D1F",zIndex:3,transition:"all .35s"}}></div>
            <div className="getapp-phone-inner" style={{margin:3,borderRadius:31,overflow:"hidden",height:"calc(100% - 6px)"}}><img src={"https://placehold.co/320x640/eeeeee/999999?text=Phone"} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}} alt="ePromotion app"/></div>
          </div>
        </div>
      </div>

    </div>;
    }():null}

    {profOpen&&account?<ProfilePage dark={dark} account={account} onLogout={handleLogout} onClose={function(){sProfOpen(false);}} onNav={function(r){sProfOpen(false);if(r==="post"){sPostOpen(true);}else if(r==="dash"){sDashOpen(true);}else if(r==="store"){sViewStore(account.storeName);}else if(r.startsWith("info:")){sInfoPage(r.split(":")[1]);}else{changeRoute(r);}} } onViewProfile={function(){sProfViewOpen(true);}} themeMode={themeMode} onSetTheme={sThemeMode} lang={lang} onSetLang={sLang} openInquiry={openInquiry} saved={saved} chatCount={chatCount} route={route}/>:null}
    {profViewOpen&&account?<ProfileView dark={dark} account={account} onClose={function(){sProfViewOpen(false);}} onUpdateAccount={updateAccount} onLogout={handleLogout}/>:null}

    {/* Info pages — standalone with own nav + footer */}
    {infoPage&&INFO_PAGES[infoPage]?<div className="info-page" style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50,background:dark?"#000":"#FFF",overflowY:"auto"}}>

      {/* Nav */}
      <nav style={{position:"sticky",top:0,zIndex:10,background:dark?"rgba(0,0,0,0.85)":"rgba(255,255,255,0.92)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderBottom:"1px solid "+bd}}>
        <div className="info-nav-pad" style={{maxWidth:1000,margin:"0 auto",padding:"0 40px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <button className="info-nav-back-btn" onClick={function(){sInfoPage(null);sHelpQ("");sHelpArticle(null);sFaqCat("all");sFaqOpen(null);}} style={{display:"none",width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"none",cursor:"pointer",alignItems:"center",justifyContent:"center"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
            <span style={{fontSize:16,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",cursor:"pointer"}} onClick={function(){sInfoPage(null);sHelpQ("");sHelpArticle(null);sFaqCat("all");sFaqOpen(null);}}>ePromotion</span>
          </div>
          <div className="info-nav-tabs" style={{display:"flex",alignItems:"center",gap:4}}>
            {[{k:"about",l:"About"},{k:"help",l:"Help & Support"},{k:"business",l:"For Business"},{k:"contact",l:"Contact Us"}].map(function(tab){
              var active=infoPage===tab.k;
              return <button key={tab.k} onClick={function(){switchInfoPage(tab.k);sHelpQ("");sHelpArticle(null);sFaqCat("all");sFaqOpen(null);}} style={{padding:"6px 16px",borderRadius:980,background:active?(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"):"transparent",border:"none",cursor:"pointer",fontSize:13,fontWeight:active?500:400,color:active?ink:sub,fontFamily:"'Inter',sans-serif",transition:"all .2s"}} onMouseEnter={function(e){if(!active)e.currentTarget.style.color=ink;}} onMouseLeave={function(e){if(!active)e.currentTarget.style.color=sub;}}>{tab.l}</button>;
            })}
          </div>
        </div>
      </nav>

      <div style={{opacity:infoFade?1:0,transition:"opacity .18s ease"}}>
      {infoPage==="business"?<div>
        {/* ── Hero ── */}
        <div className="about-hero" style={{background:dark?"#000":"#FFF",padding:"160px 40px 96px",textAlign:"center"}}>
          <div style={{maxWidth:900,margin:"0 auto"}}>
            <h1 style={{fontSize:72,fontWeight:700,lineHeight:1.05,fontFamily:"'Inter',sans-serif",letterSpacing:"-3px",color:ink,maxWidth:800,margin:"0 auto 40px"}}>More reach. More customers.</h1>
            <p style={{fontSize:20,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.8,maxWidth:540,margin:"0 auto 48px",fontFamily:"'Inter',sans-serif"}}>Publish your promotions on Cambodia's deals marketplace. Customers find you, save your deals, and walk through your door.</p>
            <button onClick={function(){sInfoPage(null);sAuthOpen(true);}} style={{padding:"14px 40px",borderRadius:980,background:"#27B147",boxShadow:"0 4px 20px rgba(39,177,71,0.18)",color:"#FFF",border:"none",cursor:"pointer",fontSize:15,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Get started free</button>
          </div>
        </div>

        {/* ── Benefits ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"80px 40px 0"}}>
          <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,textAlign:"center",marginBottom:48}}>Why businesses choose ePromotion</h2>
          <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {[
              {icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',t:"Reach more customers",d:"Your deals are shown to thousands of active users browsing daily for promotions in their area."},
              {icon:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',t:"Publish in minutes",d:"Create and publish a deal in under 2 minutes. Add photos, set pricing, and go live."},
              {icon:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',t:"Track performance",d:"See real-time views, clicks, and saves. Know exactly which promotions drive results."},
              {icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',t:"Quality-controlled",d:"Every deal is reviewed before publishing. Your brand sits alongside trusted businesses."}
            ].map(function(b){
              return <div key={b.t} style={{padding:"28px",borderRadius:16,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.015)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:18,opacity:0.5}} dangerouslySetInnerHTML={{__html:b.icon}}/>
                <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:8}}>{b.t}</p>
                <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7,fontFamily:"'Inter',sans-serif"}}>{b.d}</p>
              </div>;
            })}
          </div>
        </div>

        {/* ── How it works ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"80px 40px 0"}}>
          <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,textAlign:"center",marginBottom:40}}>How it works</h2>
          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {[
              {n:"1",t:"Create your store",d:"Sign up free and set up your store profile — name, logo, and contact details."},
              {n:"2",t:"Post your deals",d:"Add photos, set your discount or price, and write a short description. Takes 2 minutes."},
              {n:"3",t:"Customers find you",d:"Your deals go live after a quick review. Users browse, save, and visit your business."}
            ].map(function(s,i){
              return <div key={s.n} style={{display:"flex",gap:20,padding:"24px 0",borderBottom:i<2?"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"):"none"}}>
                <div style={{width:40,height:40,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:16,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif"}}>{s.n}</span>
                </div>
                <div style={{paddingTop:5}}>
                  <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:6}}>{s.t}</p>
                  <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7,fontFamily:"'Inter',sans-serif"}}>{s.d}</p>
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"80px 40px 80px",textAlign:"center"}}>
          <div style={{padding:"48px 40px",borderRadius:20,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:12}}>Ready to grow?</h2>
            <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7,maxWidth:360,margin:"0 auto 28px",fontFamily:"'Inter',sans-serif"}}>Get your business on ePromotion and start reaching more customers today.</p>
            <div style={{display:"flex",justifyContent:"center",gap:10}}>
              <button onClick={function(){sInfoPage(null);sAuthOpen(true);}} style={{padding:"12px 36px",borderRadius:980,background:"#27B147",boxShadow:"0 4px 16px rgba(39,177,71,0.18)",color:"#FFF",border:"none",cursor:"pointer",fontSize:14,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Create your store</button>
              <button onClick={function(){switchInfoPage("help");}} style={{padding:"12px 28px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"),cursor:"pointer",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Talk to us</button>
            </div>
          </div>
        </div>
      </div>
      :infoPage==="help"?<div style={{background:dark?"#000":"#FFF"}}>
        {/* ── Hero + Search ── */}
        {!helpArticle?<div className="about-hero" style={{background:dark?"#000":"#FFF",padding:"160px 40px 96px",textAlign:"center"}}>
          <div style={{maxWidth:900,margin:"0 auto"}}>
            <h1 className="" style={{fontSize:72,fontWeight:700,lineHeight:1.05,fontFamily:"'Inter',sans-serif",letterSpacing:"-3px",color:ink,maxWidth:800,margin:"0 auto 40px"}}>Help Center</h1>
            <p style={{fontSize:20,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.8,maxWidth:540,margin:"0 auto 48px",fontFamily:"'Inter',sans-serif"}}>Quick answers, clear guides — we've got you covered.</p>
            <div style={{maxWidth:480,margin:"0 auto",position:"relative"}}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={sub} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input value={helpQ} onChange={function(e){sHelpQ(e.target.value);sHelpArticle(null);}} placeholder="Search articles..." style={{width:"100%",padding:"14px 18px 14px 46px",borderRadius:14,border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"),background:dark?"rgba(255,255,255,0.04)":"#F6F5F3",fontSize:15,fontWeight:400,fontFamily:"'Inter',sans-serif",color:ink,outline:"none",boxSizing:"border-box",transition:"border-color .2s,background .2s"}} onFocus={function(e){e.currentTarget.style.borderColor=ink;e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"#FFF";}} onBlur={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)";e.currentTarget.style.background=dark?"rgba(255,255,255,0.04)":"#F6F5F3";}}/>
            </div>
            {helpQ.length>1?<div style={{maxWidth:480,margin:"8px auto 0",textAlign:"left",background:dark?"#1C1C1E":"#FFF",borderRadius:14,border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"),overflow:"hidden",boxShadow:"0 8px 32px "+(dark?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.08)")}}>
              {function(){
                var results=ALL_ARTICLES.filter(function(a){return a.title.toLowerCase().indexOf(helpQ.toLowerCase())>=0||a.body.toLowerCase().indexOf(helpQ.toLowerCase())>=0;});
                return results.length?results.slice(0,6).map(function(a,i,arr){
                  return <div key={a.id} onClick={function(){sHelpArticle(a);sHelpQ("");setTimeout(function(){var ip=document.querySelector(".info-page");if(ip)ip.scrollTo({top:0});},50);}} style={{padding:"12px 18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"):"none",transition:"background .15s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>
                    <div>
                      <p style={{fontSize:15,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{a.title}</p>
                      <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:3,fontFamily:"'Inter',sans-serif"}}>{a.cat}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>
                  </div>;
                }):<p style={{padding:"16px 18px",fontSize:14,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif"}}>No results for “{helpQ}”</p>;
              }()}
            </div>:null}
          </div>
        </div>:null}

        {/* ── Article view ── */}
        {helpArticle?<div>
          <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"80px 40px 0"}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:40}}>
              <span onClick={function(){sHelpArticle(null);}} style={{fontSize:13,fontWeight:400,color:sub,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=sub;}}>Help</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              <span style={{fontSize:13,fontWeight:400,color:sub,fontFamily:"'Inter',sans-serif"}}>{helpArticle.cat}</span>
            </div>
            <h2 style={{fontSize:28,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:28}}>{helpArticle.title}</h2>
            <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7,fontFamily:"'Inter',sans-serif"}}>{helpArticle.body}</p>
          </div>

          <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
            <div style={{padding:"24px 0",borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"),display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <p style={{fontSize:16,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>Was this helpful?</p>
              <div style={{display:"flex",gap:8}}>
                {["Yes","No"].map(function(l){return <button key={l} style={{padding:"7px 18px",borderRadius:980,background:"transparent",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"),cursor:"pointer",fontSize:13,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif",transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.background=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}} onMouseLeave={function(e){e.currentTarget.style.background="transparent";}}>{l}</button>;})}
              </div>
            </div>
          </div>

          <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
            <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:20,fontFamily:"'Inter',sans-serif"}}>Related articles</p>
            {function(){
              var related=ALL_ARTICLES.filter(function(a){return a.catId===helpArticle.catId&&a.id!==helpArticle.id;}).slice(0,3);
              return <div>
                {related.map(function(a,i,arr){
                  return <div key={a.id} onClick={function(){sHelpArticle(a);setTimeout(function(){var ip=document.querySelector(".info-page");if(ip)ip.scrollTo({top:0});},50);}} style={{padding:"14px 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"):"none",transition:"opacity .15s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                    <span style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",fontFamily:"'Inter',sans-serif"}}>{a.title}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>
                  </div>;
                })}
              </div>;
            }()}
          </div>

          <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 96px"}}>
            <div style={{paddingTop:40,borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"),textAlign:"center"}}>
              <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",marginBottom:20,fontFamily:"'Inter',sans-serif"}}>Still need help?</p>
              <div style={{display:"flex",justifyContent:"center",gap:10}}>
                <a href="mailto:support@epromotion.com" style={{padding:"10px 28px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"),fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.85";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Email support</a>
                <button onClick={function(){switchInfoPage("contact");}} style={{padding:"10px 24px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"),cursor:"pointer",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"border-color .2s"}} onMouseEnter={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.25)":"rgba(0,0,0,0.25)";}} onMouseLeave={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)";}}>Contact us</button>
              </div>
            </div>
          </div>
        </div>

        :!helpQ?<div>
        {/* ── Category grid ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"64px 40px 0"}}>
          <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {HELP_CATS.map(function(cat){
              return <div key={cat.id} onClick={function(){var el=document.getElementById("help-cat-"+cat.id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}} style={{padding:"24px",borderRadius:16,border:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"),cursor:"pointer",transition:"all .2s"}} onMouseEnter={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)";e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)";e.currentTarget.style.transform="translateY(0)";}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:36,height:36,borderRadius:10,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.35}} dangerouslySetInnerHTML={{__html:cat.icon}}/>
                  </div>
                  <div>
                    <p style={{fontSize:16,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{cat.name}</p>
                    <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:2,fontFamily:"'Inter',sans-serif"}}>{cat.articles.length} articles</p>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* ── Popular ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"72px 40px 0"}}>
          <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:20,fontFamily:"'Inter',sans-serif"}}>Popular</p>
          {[
            {a:"gs1",label:"How to create an account"},
            {a:"gs3",label:"How to post your first deal"},
            {a:"d1",label:"How to save a deal"},
            {a:"b1",label:"How deal approval works"},
            {a:"s1",label:"How we protect your data"}
          ].map(function(t,i,arr){
            var article=ALL_ARTICLES.find(function(a){return a.id===t.a;});
            return <div key={t.a} onClick={function(){if(article){sHelpArticle(article);setTimeout(function(){var ip=document.querySelector(".info-page");if(ip)ip.scrollTo({top:0});},50);}}} style={{padding:"14px 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"):"none",transition:"opacity .15s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
              <span style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",fontFamily:"'Inter',sans-serif"}}>{t.label}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>
            </div>;
          })}
        </div>

        {/* ── All topics ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"72px 40px 96px"}}>
          {HELP_CATS.map(function(cat,ci,catArr){
            return <div key={cat.id} id={"help-cat-"+cat.id} style={{marginBottom:ci<catArr.length-1?56:0,scrollMarginTop:80}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.3}} dangerouslySetInnerHTML={{__html:cat.icon}}/>
                <h3 style={{fontSize:16,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{cat.name}</h3>
              </div>
              {cat.articles.map(function(a,i){
                return <div key={a.id} onClick={function(){sHelpArticle(Object.assign({},a,{cat:cat.name,catId:cat.id}));setTimeout(function(){var ip=document.querySelector(".info-page");if(ip)ip.scrollTo({top:0});},50);}} style={{padding:"13px 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.05)"),transition:"opacity .15s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                  <span style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",fontFamily:"'Inter',sans-serif"}}>{a.title}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>
                </div>;
              })}
            </div>;
          })}
        </div>
        </div>:null}
      </div>

            :infoPage==="about"?<div>
        {/* ── Hero ── */}
        <div className="about-hero ip" style={{background:dark?"#000":"#FFF",padding:"160px 40px 96px"}}>
          <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
            <h1 style={{fontSize:72,fontWeight:700,lineHeight:1.05,fontFamily:"'Inter',sans-serif",letterSpacing:"-3px",color:ink,maxWidth:800,margin:"0 auto 40px"}}>Empowering every local business to be found</h1>
            <p style={{fontSize:20,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.8,maxWidth:540,margin:"0 auto"}}>ePromotion connects businesses in Cambodia with the customers right around the corner. Simple tools, real impact, zero cost for shoppers.</p>
          </div>
        </div>

        {/* ── Trusted by ── */}
        <div className="ip" style={{padding:"56px 40px",textAlign:"center",maxWidth:900,margin:"0 auto"}}>
          <div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}>
            <div className="about-trusted" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:36,flexWrap:"wrap"}}>
              {[LOGO_SKINURI,LOGO_ULOGO,LOGO_AEONMALL,LOGO_LUCKY,LOGO_NIKE,LOGO_ADIDAS,LOGO_MCDONALDS,LOGO_BURGERKING].map(function(src,i){
                return <img key={i} src={src} style={{height:22,display:"block",filter:dark?"brightness(1.5)":"none",opacity:1,transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.7";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}} alt=""/>;
              })}
            </div>
          </div>
        </div>

        {/* ── Mission ── */}
        <div className="ip" style={{padding:"96px 40px",textAlign:"center",maxWidth:900,margin:"0 auto",borderTop:"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)")}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
              <div style={{width:40,height:40,borderRadius:12,background:dark?"rgba(212,38,49,0.08)":"rgba(212,38,49,0.06)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D42631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.7}}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Our mission</p>
            </div>
            <p style={{fontSize:28,fontWeight:500,color:ink,lineHeight:1.4,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px"}}>Make promotions accessible to everyone. Every local business deserves the same visibility that big brands take for granted.</p>
          </div>
        </div>

        {/* ── Vision — inverted ── */}
        <div style={{background:dark?"#111111":"#F5F5F5",padding:"96px 40px",textAlign:"center"}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
              <div style={{width:40,height:40,borderRadius:12,background:dark?"rgba(212,38,49,0.08)":"rgba(212,38,49,0.06)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D42631" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.7}}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Our vision</p>
            </div>
            <p style={{fontSize:28,fontWeight:500,color:ink,lineHeight:1.4,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px"}}>A future where every business in Cambodia, no matter how small, can reach the right customers at the right time.</p>
          </div>
        </div>

        {/* ── How it works ── */}
        <div className="ip" style={{padding:"96px 40px",textAlign:"center",maxWidth:900,margin:"0 auto"}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:24,fontFamily:"'Inter',sans-serif"}}>How it works</p>
            <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:56}}>Simple by design</h2>
            {[
              {n:"01",t:"Create a store",d:"Sign up, add your logo, fill in contact details. Under a minute.",icon:'<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'},
              {n:"02",t:"Post a deal",d:"Upload photos, set pricing, describe the offer. Takes 2 minutes.",icon:'<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>'},
              {n:"03",t:"We review it",d:"Our team checks accuracy, quality, and compliance. Live within hours.",icon:'<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'},
              {n:"04",t:"Customers find you",d:"Users browse, save, share, and walk through your door.",icon:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>'}
            ].map(function(s,i,arr){
              return <div key={s.n} style={{display:"flex",gap:24,paddingBottom:i<arr.length-1?48:0,marginBottom:i<arr.length-1?48:0,borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"):"none"}}>
                <div style={{width:48,height:48,borderRadius:14,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.35}} dangerouslySetInnerHTML={{__html:s.icon}}/>
                </div>
                <div>
                  <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",marginBottom:8}}>{s.t}</p>
                  <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7}}>{s.d}</p>
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* ── For Everyone — inverted ── */}
        <div style={{background:dark?"#111111":"#F5F5F5",padding:"96px 40px",textAlign:"center"}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:24,fontFamily:"'Inter',sans-serif"}}>For everyone</p>
            <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:56}}>One platform, two experiences</h2>
            <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
              {[
                {title:"For customers",color:"#34C759",icon:'<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',items:["Browse deals from local businesses","Save favorites and get notified","Chat directly with stores","Always free, no account required"]},
                {title:"For businesses",color:"#27B147",icon:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',items:["Publish deals in under 2 minutes","Reach thousands of nearby customers","Track views, saves, and engagement","Free during early access"]}
              ].map(function(col){
                return <div key={col.title}>
                  <div style={{width:44,height:44,borderRadius:12,background:(col.color||ink)+"10",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={col.color||ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.7}} dangerouslySetInnerHTML={{__html:col.icon}}/>
                  </div>
                  <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:20}}>{col.title}</p>
                  <div style={{display:"flex",flexDirection:"column",gap:16}}>
                    {col.items.map(function(t){
                      return <div key={t} style={{display:"flex",alignItems:"flex-start",gap:12}}>
                        <div style={{width:6,height:6,borderRadius:"50%",background:col.color||ink,opacity:0.3,flexShrink:0,marginTop:8}}></div>
                        <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7}}>{t}</p>
                      </div>;
                    })}
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div className="ip" style={{padding:"96px 40px",textAlign:"center",maxWidth:900,margin:"0 auto"}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:24,fontFamily:"'Inter',sans-serif"}}>Our values</p>
            <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:56}}>What we believe</h2>
            {[
              {t:"Trust first",d:"Every deal reviewed. Every business verified. We protect both sides of the marketplace.",color:"#34C759",icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'},
              {t:"Free for customers",d:"Browsing and saving deals is always free. We monetize through business tools, not user data.",color:"#27B147",icon:'<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/><path d="M12 18V6"/>'},
              {t:"Speed matters",d:"Publish a deal in 2 minutes. Find one in 2 seconds. We optimize for speed at every step.",color:"#FF9500",icon:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'},
              {t:"Local first",d:"Built in Phnom Penh, for Phnom Penh. We are part of the market we serve.",color:"#D42631",icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>'},
              {t:"Transparent",d:"Clear pricing, honest metrics, no hidden fees. Businesses see exactly what they get.",color:"#A78BFA",icon:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'},
              {t:"Data-driven",d:"Real-time analytics for every deal. Decisions based on views, clicks, and saves.",color:"#FF6B6B",icon:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'}
            ].map(function(v,i,arr){
              return <div key={v.t} style={{display:"flex",gap:24,paddingBottom:i<arr.length-1?40:0,marginBottom:i<arr.length-1?40:0,borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"):"none"}}>
                <div style={{width:40,height:40,borderRadius:12,background:(v.color||ink)+"10",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={v.color||ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.7}} dangerouslySetInnerHTML={{__html:v.icon}}/>
                </div>
                <div style={{flex:1}}>
                  <p style={{fontSize:16,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:6}}>{v.t}</p>
                  <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7}}>{v.d}</p>
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="ip" style={{padding:"120px 40px",textAlign:"center"}}>
          <div style={{maxWidth:600,margin:"0 auto"}}>
            <h2 style={{fontSize:36,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-1px",color:ink,marginBottom:20}}>Ready to start?</h2>
            <p style={{fontSize:17,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.8,marginBottom:36}}>Whether you're a business looking to grow or a customer hunting for deals.</p>
            <div style={{display:"flex",justifyContent:"center",gap:12}}>
              <button onClick={function(){sInfoPage(null);sAuthOpen(true);}} style={{padding:"14px 36px",borderRadius:980,background:"#27B147",boxShadow:"0 4px 20px rgba(39,177,71,0.18)",color:"#FFF",border:"none",cursor:"pointer",fontSize:15,fontWeight:500,fontFamily:"'Inter',sans-serif",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.85";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Get started</button>
              <button onClick={function(){switchInfoPage("business");}} style={{padding:"14px 32px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)"),cursor:"pointer",fontSize:15,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"border-color .2s"}} onMouseEnter={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.3)":"rgba(0,0,0,0.3)";}} onMouseLeave={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.12)";}}>For businesses</button>
            </div>
          </div>
        </div>
      </div>

      :infoPage==="terms"?<div>
        {/* ── Header ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <h1 style={{fontSize:38,fontWeight:600,lineHeight:1.15,fontFamily:"'Inter',sans-serif",letterSpacing:"-1px",color:ink,marginBottom:12}}>Terms of Service</h1>
          <p style={{fontSize:15,fontWeight:400,color:sub,marginBottom:8}}>Last updated: March 2026</p>
          <p style={{fontSize:17,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>By using ePromotion, you agree to these terms. Please read them carefully. If you do not agree, do not use the platform.</p>
        </div>

        {/* ── Sections ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
          {[
            {n:"1",t:"Acceptance of Terms",paras:[
              "By accessing or using ePromotion — including our website, mobile application, and any related services — you agree to be bound by these Terms of Service and our Privacy Policy.",
              "We may update these terms from time to time. When we make significant changes, we will notify you through the platform or by email. Your continued use of ePromotion after changes are posted constitutes acceptance of the updated terms.",
              "If you are using ePromotion on behalf of a business, you represent that you have the authority to bind that business to these terms."
            ]},
            {n:"2",t:"User Responsibilities",paras:[
              "You are responsible for all activity that occurs under your account. You agree to provide accurate and complete information when creating your account and to keep your login credentials secure.",
              "You agree not to use ePromotion for any unlawful purpose, to post misleading or false promotions, to harass other users, or to attempt to gain unauthorized access to the platform or other accounts.",
              "Businesses are responsible for the accuracy of their deal listings, including pricing, discount percentages, availability, and expiry dates. Misleading promotions may be removed without notice."
            ]},
            {n:"3",t:"Account Rules",paras:[
              "You must be at least 18 years old to create a business account. Personal accounts may be created by users aged 13 or older with parental consent where required by law.",
              "Each person or business may maintain one account. Duplicate accounts may be suspended or removed.",
              "You may delete your account at any time through your profile settings. Upon deletion, your data will be permanently removed in accordance with our Privacy Policy. We may retain certain data as required by law."
            ]},
            {n:"4",t:"Platform Limitations",paras:[
              "ePromotion is a marketplace that connects businesses with customers. We do not sell products or services directly and are not responsible for the quality, safety, legality, or fulfillment of any deal listed on the platform.",
              "We do not guarantee that the platform will be available at all times, uninterrupted, or error-free. We may modify, suspend, or discontinue features at any time without prior notice.",
              "All deals are subject to review before publishing. We reserve the right to reject or remove any content that violates our guidelines, is deemed inappropriate, or could harm the platform's integrity."
            ]},
            {n:"5",t:"Termination",paras:[
              "We may suspend or terminate your account if you violate these terms, engage in fraudulent activity, post harmful content, or for any reason at our discretion with reasonable notice.",
              "You may terminate your account at any time by deleting it through your profile settings. Termination does not affect any rights or obligations that arose before termination.",
              "Upon termination, your right to use the platform ceases immediately. Any deals you have posted will be removed. We are not liable for any loss resulting from account termination."
            ]}
          ].map(function(sec){
            return <div key={sec.n} style={{marginBottom:48}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif"}}>{sec.n}</span>
                </div>
                <h2 style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>{sec.t}</h2>
              </div>
              {sec.paras.map(function(p,i){
                return <p key={i} style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.8,marginBottom:i<sec.paras.length-1?16:0}}>{p}</p>;
              })}
            </div>;
          })}
        </div>

        {/* ── Contact ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"0 40px 80px"}}>
          <div style={{padding:"28px 32px",borderRadius:16,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <p style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>If you have questions about these terms, contact us at <a href="mailto:support@epromotion.com" style={{color:ink,textDecoration:"none",fontWeight:500}}>support@epromotion.com</a></p>
          </div>
        </div>
      </div>

      :infoPage==="privacy"?<div>
        {/* ── Header ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <h1 style={{fontSize:38,fontWeight:600,lineHeight:1.15,fontFamily:"'Inter',sans-serif",letterSpacing:"-1px",color:ink,marginBottom:12}}>Privacy Policy</h1>
          <p style={{fontSize:15,fontWeight:400,color:sub,marginBottom:8}}>Last updated: March 2026</p>
          <p style={{fontSize:17,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>Your privacy matters to us. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
        </div>

        {/* ── Sections ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
          {[
            {n:"1",t:"Information We Collect",paras:[
              "When you create an account, we collect your name, email address, and profile photo if you choose to upload one. For business accounts, we also collect your store name, description, and contact details.",
              "When you use the platform, we automatically collect usage data such as which deals you view, save, and search for. This helps us improve recommendations and the overall experience.",
              "We do not collect payment information directly. If we introduce paid features in the future, payments will be processed through secure third-party providers."
            ]},
            {n:"2",t:"How We Use Your Information",paras:[
              "We use your information to operate the platform — to display your profile, show you relevant deals, and enable communication between customers and stores.",
              "We may use your email to send account-related notifications such as deal approvals, password resets, and important platform updates. You can opt out of non-essential emails at any time.",
              "We use aggregated, anonymized usage data to understand platform trends, improve features, and measure performance. This data cannot be used to identify you personally."
            ]},
            {n:"3",t:"Data Sharing",paras:[
              "We do not sell your personal data to third parties. We never have and never will.",
              "We may share limited data with service providers who help us operate the platform (such as hosting and email delivery), but only under strict confidentiality agreements.",
              "We may disclose your information if required by law, such as in response to a court order or legal process, or to protect the rights and safety of ePromotion and its users."
            ]},
            {n:"4",t:"Data Security",paras:[
              "We use industry-standard security measures to protect your data, including encrypted connections (HTTPS), secure data storage, and access controls.",
              "While we take every reasonable precaution, no system is completely secure. We encourage you to use a strong, unique password and keep your login credentials private.",
              "In the event of a data breach that affects your personal information, we will notify affected users as soon as possible and take immediate steps to mitigate the impact."
            ]},
            {n:"5",t:"Your Rights",paras:[
              "You can view, update, or delete your personal information at any time through your account settings.",
              "You can request a copy of the data we hold about you by contacting support@epromotion.com. We will respond within 30 days.",
              "You have the right to delete your account at any time. When you delete your account, all personal data is permanently removed. Some data may be retained as required by law."
            ]}
          ].map(function(sec){
            return <div key={sec.n} style={{marginBottom:48}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif"}}>{sec.n}</span>
                </div>
                <h2 style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>{sec.t}</h2>
              </div>
              {sec.paras.map(function(p,i){
                return <p key={i} style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.8,marginBottom:i<sec.paras.length-1?16:0}}>{p}</p>;
              })}
            </div>;
          })}
        </div>
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"0 40px 80px"}}>
          <div style={{padding:"28px 32px",borderRadius:16,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <p style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>Questions about your privacy? Contact us at <a href="mailto:support@epromotion.com" style={{color:ink,textDecoration:"none",fontWeight:500}}>support@epromotion.com</a></p>
          </div>
        </div>
      </div>

      :infoPage==="cookies"?<div>
        {/* ── Header ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <h1 style={{fontSize:38,fontWeight:600,lineHeight:1.15,fontFamily:"'Inter',sans-serif",letterSpacing:"-1px",color:ink,marginBottom:12}}>Cookie Policy</h1>
          <p style={{fontSize:15,fontWeight:400,color:sub,marginBottom:8}}>Last updated: March 2026</p>
          <p style={{fontSize:17,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>This policy explains how ePromotion uses cookies and similar technologies when you use our platform.</p>
        </div>

        {/* ── Sections ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
          {[
            {n:"1",t:"What Are Cookies",paras:[
              "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.",
              "Similar technologies like local storage and session storage serve the same purpose. When we refer to 'cookies' in this policy, we include all such technologies."
            ]},
            {n:"2",t:"Cookies We Use",paras:[
              "Essential cookies: These are required for the platform to function. They keep you signed in, remember your language and theme preferences, and enable core features like saving deals. You cannot opt out of essential cookies.",
              "Analytics cookies: We may use analytics tools to understand how users interact with the platform — which pages are visited most, how long sessions last, and where users come from. This data is aggregated and anonymized.",
              "We do not use advertising or tracking cookies. ePromotion does not serve ads or track your activity across other websites."
            ]},
            {n:"3",t:"Third-Party Cookies",paras:[
              "If we integrate third-party services (such as analytics providers) in the future, those services may set their own cookies. We will update this policy to reflect any such integrations.",
              "We carefully evaluate any third-party service before integration and only work with providers who meet our privacy standards."
            ]},
            {n:"4",t:"Managing Cookies",paras:[
              "Most browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect the functionality of the platform — for example, you may be signed out or your preferences may not be saved.",
              "For more information on managing cookies in your browser, visit your browser's help documentation."
            ]},
            {n:"5",t:"Updates to This Policy",paras:[
              "We may update this Cookie Policy as we introduce new features or integrate new services. Changes will be posted on this page with an updated date.",
              "If you have questions about our use of cookies, contact us at support@epromotion.com."
            ]}
          ].map(function(sec){
            return <div key={sec.n} style={{marginBottom:48}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif"}}>{sec.n}</span>
                </div>
                <h2 style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>{sec.t}</h2>
              </div>
              {sec.paras.map(function(p,i){
                return <p key={i} style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.8,marginBottom:i<sec.paras.length-1?16:0}}>{p}</p>;
              })}
            </div>;
          })}
        </div>
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"0 40px 80px"}}>
          <div style={{padding:"28px 32px",borderRadius:16,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <p style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>Questions about cookies? Contact us at <a href="mailto:support@epromotion.com" style={{color:ink,textDecoration:"none",fontWeight:500}}>support@epromotion.com</a></p>
          </div>
        </div>
      </div>

      :infoPage==="disclaimer"?<div>
        {/* ── Header ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <h1 style={{fontSize:38,fontWeight:600,lineHeight:1.15,fontFamily:"'Inter',sans-serif",letterSpacing:"-1px",color:ink,marginBottom:12}}>Disclaimer & Refund Policy</h1>
          <p style={{fontSize:15,fontWeight:400,color:sub,marginBottom:8}}>Last updated: March 2026</p>
          <p style={{fontSize:17,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>Please read this disclaimer carefully. It explains the relationship between ePromotion, the businesses listed on our platform, and you as a user.</p>
        </div>

        {/* ── Sections ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"48px 40px 0"}}>
          {[
            {n:"1",t:"Marketplace Disclaimer",paras:[
              "ePromotion is a marketplace platform that connects businesses with customers. We do not sell, manufacture, or provide any products or services listed on the platform.",
              "All deals, promotions, products, and services are offered by independent third-party businesses. ePromotion is not a party to any transaction between a customer and a business.",
              "We do not verify the quality, safety, or legality of the products and services listed. While we review deals before publishing, this review is limited to checking for accuracy and policy compliance — not product quality."
            ]},
            {n:"2",t:"No Warranties",paras:[
              "ePromotion is provided on an 'as is' and 'as available' basis. We make no warranties — express or implied — about the reliability, accuracy, or completeness of the content on the platform.",
              "We do not guarantee that any deal will be available, honored, or fulfilled by the business. Prices, availability, and terms may change without notice by the business.",
              "We are not responsible for any loss, damage, or disappointment arising from your use of the platform or your reliance on any deal listed on it."
            ]},
            {n:"3",t:"Refund Policy",paras:[
              "Since ePromotion does not process transactions or handle payments between customers and businesses, we cannot issue refunds for any product or service purchased through a deal listed on our platform.",
              "If you have a complaint about a product or service, please contact the business directly using the contact details on their store profile.",
              "If a business consistently fails to honor their listed promotions, please report them to our team at support@epromotion.com. We take reports seriously and may remove businesses that engage in misleading practices."
            ]},
            {n:"4",t:"User-Generated Content",paras:[
              "Businesses are solely responsible for the content they publish on ePromotion, including deal descriptions, images, pricing, and store information.",
              "ePromotion does not endorse any business, product, or service listed on the platform. Listing on ePromotion should not be interpreted as a recommendation.",
              "We reserve the right to remove any content that we determine to be inaccurate, misleading, offensive, or in violation of our terms."
            ]},
            {n:"5",t:"Limitation of Liability",paras:[
              "To the maximum extent permitted by law, ePromotion and GBS Technology Co., Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.",
              "This includes, but is not limited to, damages for loss of profits, data, goodwill, or other intangible losses — even if we have been advised of the possibility of such damages.",
              "Our total liability for any claim arising from or related to your use of ePromotion shall not exceed the amount you have paid to ePromotion (if any) in the twelve months preceding the claim."
            ]}
          ].map(function(sec){
            return <div key={sec.n} style={{marginBottom:48}}>
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontSize:13,fontWeight:600,color:ink,fontFamily:"'Inter',sans-serif"}}>{sec.n}</span>
                </div>
                <h2 style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:ink}}>{sec.t}</h2>
              </div>
              {sec.paras.map(function(p,i){
                return <p key={i} style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.8,marginBottom:i<sec.paras.length-1?16:0}}>{p}</p>;
              })}
            </div>;
          })}
        </div>
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"0 40px 80px"}}>
          <div style={{padding:"28px 32px",borderRadius:16,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <p style={{fontSize:15,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7}}>To report a misleading deal or for questions about this policy, contact us at <a href="mailto:support@epromotion.com" style={{color:ink,textDecoration:"none",fontWeight:500}}>support@epromotion.com</a></p>
          </div>
        </div>
      </div>

      :infoPage==="contact"?<div>
        {/* ── Hero ── */}
        <div className="about-hero" style={{background:dark?"#000":"#FFF",padding:"160px 40px 96px",textAlign:"center"}}>
          <div style={{maxWidth:900,margin:"0 auto"}}>
            <h1 style={{fontSize:72,fontWeight:700,lineHeight:1.05,fontFamily:"'Inter',sans-serif",letterSpacing:"-3px",color:ink,maxWidth:800,margin:"0 auto 40px"}}>Get in touch</h1>
            <p style={{fontSize:20,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.8,maxWidth:540,margin:"0 auto",fontFamily:"'Inter',sans-serif"}}>Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.</p>
          </div>
        </div>

        {/* ── Contact methods ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {[
              {icon:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',label:"Email",value:"support@epromotion.com",sub:"We reply within 24 hours",href:"mailto:support@epromotion.com"},
              {icon:'<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>',label:"Phone",value:"+855 12 345 678",sub:"Mon–Fri, 9AM–6PM (ICT)",href:"tel:+85512345678"},
              {icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',label:"Office",value:"Phnom Penh, Cambodia",sub:"GBS Technology Co., Ltd."},
              {icon:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>',label:"Website",value:"epromotion.com",sub:"Browse deals and promotions"}
            ].map(function(c){
              return <div key={c.label} onClick={c.href?function(){window.location.href=c.href;}:null} style={{padding:"28px",borderRadius:18,background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.015)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)"),cursor:c.href?"pointer":"default",transition:"border-color .2s"}} onMouseEnter={function(e){if(c.href)e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)";}} onMouseLeave={function(e){e.currentTarget.style.borderColor=dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)";}}>
                <div style={{width:40,height:40,borderRadius:12,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:c.icon}}/>
                </div>
                <p style={{fontSize:12,fontWeight:500,color:sub,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:6,fontFamily:"'Inter',sans-serif"}}>{c.label}</p>
                <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:4}}>{c.value}</p>
                <p style={{fontSize:14,fontWeight:400,color:dark?"#A0A09B":"#444240",fontFamily:"'Inter',sans-serif"}}>{c.sub}</p>
              </div>;
            })}
          </div>
        </div>

        {/* ── Social media ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:28}}>Follow us</h2>
          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {[
              {name:"Facebook",handle:"ePromotion",url:"https://facebook.com/epromotion",icon:'<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>'},
              {name:"Telegram",handle:"@epromotion",url:"https://t.me/epromotion",icon:'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>'},
              {name:"Instagram",handle:"@epromotion.kh",url:"https://instagram.com/epromotion.kh",icon:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'},
              {name:"TikTok",handle:"@epromotion",url:"https://tiktok.com/@epromotion",icon:'<path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>'}
            ].map(function(s,i,arr){
              return <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:16,padding:"16px 0",borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"):"none",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>
                <div style={{width:40,height:40,borderRadius:12,background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:s.icon}}/>
                </div>
                <div style={{flex:1}}>
                  <p style={{fontSize:18,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif"}}>{s.name}</p>
                  <p style={{fontSize:14,fontWeight:400,color:dark?"#A0A09B":"#444240",marginTop:2,fontFamily:"'Inter',sans-serif"}}>{s.handle}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>;
            })}
          </div>
        </div>

        {/* ── Business inquiries ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 0"}}>
          <div style={{padding:"36px",borderRadius:20,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
            <h2 style={{fontSize:28,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink,marginBottom:10}}>Business inquiries</h2>
            <p style={{fontSize:16,fontWeight:400,color:dark?"#A0A09B":"#444240",lineHeight:1.7,marginBottom:20,fontFamily:"'Inter',sans-serif"}}>Want to list your business on ePromotion, discuss partnerships, or explore advertising options? Our team is ready to help you get started.</p>
            <div style={{display:"flex",gap:10}}>
              <button onClick={function(){switchInfoPage("business");}} style={{padding:"10px 24px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"),cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>For Business</button>
              <a href="mailto:business@epromotion.com" style={{padding:"10px 24px",borderRadius:980,background:"transparent",color:ink,border:"1px solid "+(dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"),cursor:"pointer",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",textDecoration:"none",transition:"opacity .2s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.6";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>business@epromotion.com</a>
            </div>
          </div>
        </div>

        {/* ── Response times ── */}
        <div className="ip" style={{maxWidth:680,margin:"0 auto",padding:"56px 40px 80px"}}>
          <h2 style={{fontSize:32,fontWeight:600,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.8px",color:ink,marginBottom:28}}>Response times</h2>
          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {[
              {label:"General inquiries",time:"Within 24 hours"},
              {label:"Business partnerships",time:"Within 48 hours"},
              {label:"Technical support",time:"Within 24 hours"},
              {label:"Deal reports",time:"Within 12 hours"}
            ].map(function(r,i,arr){
              return <div key={r.label} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 0",borderBottom:i<arr.length-1?"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)"):"none"}}>
                <span style={{fontSize:16,fontWeight:400,color:ink,fontFamily:"'Inter',sans-serif"}}>{r.label}</span>
                <span style={{fontSize:14,fontWeight:400,color:dark?"#A0A09B":"#444240",fontFamily:"'Inter',sans-serif"}}>{r.time}</span>
              </div>;
            })}
          </div>
        </div>
      </div>

      :<div style={{maxWidth:600,margin:"0 auto",padding:"16px 40px 80px"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:28}}>
          <div style={{width:40,height:40,borderRadius:12,background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:INFO_PAGES[infoPage].icon}}/>
          </div>
          <h1 style={{fontSize:26,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:ink}}>{INFO_PAGES[infoPage].title}</h1>
        </div>
        <p style={{fontSize:16,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.8,marginBottom:36,fontFamily:"'Inter',sans-serif"}}>{INFO_PAGES[infoPage].desc}</p>
        <div style={{padding:"20px 24px",borderRadius:14,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.02)",border:"1px solid "+(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")}}>
          <p style={{fontSize:14,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",lineHeight:1.7,fontFamily:"'Inter',sans-serif"}}>Full content for this page is being prepared and will be available before launch. For questions, contact <span style={{color:ink}}>support@epromotion.com</span></p>
        </div>
        <p style={{fontSize:12,fontWeight:400,color:sub,marginTop:24,fontFamily:"'Inter',sans-serif"}}>Last updated: March 2026</p>
      </div>}

      </div>
      {/* Footer */}
      <footer style={{borderTop:"1px solid "+bd,marginTop:40}}>
        <div className="info-footer-pad" style={{maxWidth:1000,margin:"0 auto",padding:"32px 40px 40px",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <p style={{fontSize:14,fontWeight:500,color:ink,fontFamily:"'Inter',sans-serif",marginBottom:8}}>ePromotion</p>
            <p style={{fontSize:12,fontWeight:400,color:sub,lineHeight:1.6,fontFamily:"'Inter',sans-serif"}}>Cambodia's deals marketplace</p>
          </div>
          <div className="info-footer-grid" style={{display:"flex",gap:40}}>
            <div>
              <p style={{fontSize:11,fontWeight:500,color:sub,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:12,fontFamily:"'Inter',sans-serif"}}>Company</p>
              {[{k:"about",l:"About"},{k:"business",l:"For Business"},{k:"help",l:"Support"},{k:"contact",l:"Contact"}].map(function(l){
                return <p key={l.k} onClick={function(){switchInfoPage(l.k);}} style={{fontSize:13,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",cursor:"pointer",marginBottom:8,fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=dark?"#AAA9A5":"#6B6964";}}>{l.l}</p>;
              })}
            </div>
            <div>
              <p style={{fontSize:11,fontWeight:500,color:sub,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:12,fontFamily:"'Inter',sans-serif"}}>Legal</p>
              {[{k:"terms",l:"Terms"},{k:"privacy",l:"Privacy"},{k:"cookies",l:"Cookies"},{k:"disclaimer",l:"Disclaimer"}].map(function(l){
                return <p key={l.k} onClick={function(){switchInfoPage(l.k);}} style={{fontSize:13,fontWeight:400,color:dark?"#AAA9A5":"#6B6964",cursor:"pointer",marginBottom:8,fontFamily:"'Inter',sans-serif",transition:"color .2s"}} onMouseEnter={function(e){e.currentTarget.style.color=ink;}} onMouseLeave={function(e){e.currentTarget.style.color=dark?"#AAA9A5":"#6B6964";}}>{l.l}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="info-footer-copy" style={{maxWidth:1000,margin:"0 auto",padding:"0 40px 24px"}}>
          <p style={{fontSize:11,fontWeight:400,color:mt,fontFamily:"'Inter',sans-serif"}}>{"\u00A9"} 2026 ePromotion. All rights reserved.</p>
        </div>
      </footer>

    </div>:null}

    {sel?<Detail deal={sel} onClose={function(){sSel(null);}} onNav={sSel} saved={saved} onSave={tog} dark={dark} onChat={function(d){sSel(null);startChat(d);}} following={following} onFollow={togFollow} onStore={function(name){sSel(null);sViewStore(name);}} account={account}/>:null}
    {viewStore?<StoreDetail storeName={viewStore} onClose={function(){sViewStore(null);}} onDeal={function(d){sViewStore(null);sSel(d);}} dark={dark} saved={saved} onSave={tog} following={following} onFollow={togFollow} account={account} onChat={function(d){sViewStore(null);startChat(d);}}/>:null}
    {chatDeal&&route!=="chats"?<MiniChat deal={chatDeal} onClose={function(){sChatDeal(null);}} dark={dark} msgs={chatHistory[chatDeal.id]||[]} onMsgs={function(m){sChatHistory(function(h){var n=Object.assign({},h);n[chatDeal.id]=m;return n;});}}/>:null}
    {/* Scroll to top */}
    <button onClick={function(){window.scrollTo({top:0,behavior:"smooth"});}} style={{position:"fixed",bottom:28,right:28,width:44,height:44,borderRadius:"50%",background:dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.06)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid "+(dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"),cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:40,opacity:showTop?1:0,pointerEvents:showTop?"auto":"none",transform:showTop?"translateY(0)":"translateY(12px)",transition:"all .4s cubic-bezier(.22,1,.36,1)"}}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark?"#F4F3F0":"#1D1D1F"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
    <AuthPanel open={authOpen} onClose={function(){sAuthOpen(false);}} dark={dark} onLogin={handleLogin}/>
    {onboarding&&account?<Onboarding dark={dark} name={account.name} onComplete={handleOnboardingComplete}/>:null}
    <QuickPost open={postOpen} onClose={function(){sPostOpen(false);}} dark={dark} account={account} onPublish={function(d){sUserDeals(function(p){return p.concat(d);});sPostOpen(false);}} onNeedAuth={function(){sPostOpen(false);window._pendingPost=true;sAuthOpen(true);}}/>

    {/* Premium Ad Inquiry Form */}
    {inquiryType?(function(){
      var _bg2=dark?"#1C1C1E":"#FFF";var _ink=dark?"#F4F3F0":"#1D1D1F";var _bd=dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)";var _sub=dark?"#8E8C87":"#8E8C87";var _mt=dark?"#48484A":"#C8C6C0";
      var ready=inqDuration&&inqBudget&&inqContact.trim();
      return <div onClick={function(){sInquiryType(null);}} style={{position:"fixed",inset:0,zIndex:95,background:"rgba(0,0,0,"+(dark?"0.6":"0.3")+")",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div onClick={function(e){e.stopPropagation();}} style={{width:520,maxWidth:"94vw",maxHeight:"90vh",borderRadius:24,background:_bg2,boxShadow:dark?"0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px rgba(0,0,0,0.5)":"0 0 0 1px rgba(0,0,0,0.04), 0 40px 120px rgba(0,0,0,0.1)",position:"relative",display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <button onClick={function(){sInquiryType(null);}} style={{position:"absolute",top:18,right:18,zIndex:2,width:28,height:28,borderRadius:"50%",background:dark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.03)",border:"none",cursor:"pointer",color:_sub,fontSize:11,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter',sans-serif"}}>{"\u2715"}</button>
          <div style={{flex:1,overflowY:"auto",padding:"36px 32px 24px"}}>
            {!inqSent?<div>
              {inquiryType==="banner"?<div style={{marginBottom:28}}>
                <p style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:_ink,marginBottom:4}}>Partner Banner</p>
                <p style={{fontSize:13,fontWeight:400,color:_sub,lineHeight:1.6,marginBottom:18,fontFamily:"'Inter',sans-serif"}}>A full-width brand banner displayed on the ePromotion homepage. Every visitor sees it.</p>
                <div style={{borderRadius:14,padding:"16px 18px",background:dark?"linear-gradient(135deg,rgba(167,139,250,0.08),rgba(124,58,237,0.03))":"linear-gradient(135deg,rgba(124,58,237,0.04),rgba(167,139,250,0.02))",border:"1px solid "+(dark?"rgba(167,139,250,0.1)":"rgba(124,58,237,0.06)"),marginBottom:18}}>
                  <p style={{fontSize:9,fontWeight:500,color:_mt,letterSpacing:"0.5px",marginBottom:8,fontFamily:"'Inter',sans-serif"}}>PREVIEW</p>
                  <div style={{borderRadius:10,padding:"12px 14px",background:dark?"rgba(0,0,0,0.25)":"rgba(255,255,255,0.8)",display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:30,height:30,borderRadius:8,background:dark?"rgba(167,139,250,0.2)":"rgba(124,58,237,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <span style={{fontSize:13,fontWeight:600,color:dark?"#A78BFA":"#7C3AED",fontFamily:"'Inter',sans-serif"}}>{account&&account.storeName?account.storeName.charAt(0).toUpperCase():"S"}</span>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <p style={{fontSize:12,fontWeight:500,color:_ink,fontFamily:"'Inter',sans-serif"}}>{account&&account.storeName?account.storeName:"Your Store"}</p>
                      <p style={{fontSize:10,fontWeight:400,color:_sub,fontFamily:"'Inter',sans-serif"}}>Your brand tagline goes here</p>
                    </div>
                    <div style={{padding:"4px 10px",borderRadius:8,border:"1px solid "+_bd}}>
                      <span style={{fontSize:10,fontWeight:400,color:_ink,fontFamily:"'Inter',sans-serif"}}>Learn more</span>
                    </div>
                  </div>
                  <p style={{fontSize:9,fontWeight:400,color:_mt,textAlign:"center",marginTop:8,fontFamily:"'Inter',sans-serif"}}>Small "Ad" label in corner · Appears between category sections</p>
                </div>
                <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {[{i:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',t:"100% visibility",d:"Seen by every visitor"},{i:'<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M16 3l-4 4-4-4"/>',t:"Full-width",d:"Edge-to-edge placement"},{i:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',t:"Brand awareness",d:"Logo, tagline & CTA"},{i:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',t:"Monthly rotation",d:"Fresh placement each cycle"}].map(function(f,fi){
                    return <div key={fi} style={{padding:"10px 12px",borderRadius:10,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dark?"#A78BFA":"#7C3AED"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:6}} dangerouslySetInnerHTML={{__html:f.i}}/>
                      <p style={{fontSize:11,fontWeight:500,color:_ink,marginBottom:1,fontFamily:"'Inter',sans-serif"}}>{f.t}</p>
                      <p style={{fontSize:10,fontWeight:400,color:_sub,fontFamily:"'Inter',sans-serif"}}>{f.d}</p>
                    </div>;
                  })}
                </div>
              </div>:<div style={{marginBottom:28}}>
                <p style={{fontSize:20,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.3px",color:_ink,marginBottom:4}}>Sponsored Card</p>
                <p style={{fontSize:13,fontWeight:400,color:_sub,lineHeight:1.6,marginBottom:18,fontFamily:"'Inter',sans-serif"}}>Your deal appears inside category rows alongside organic listings. Blends naturally into the feed.</p>
                <div style={{borderRadius:14,padding:"16px 18px",background:dark?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.01)",border:"1px solid "+_bd,marginBottom:18}}>
                  <p style={{fontSize:9,fontWeight:500,color:_mt,letterSpacing:"0.5px",marginBottom:8,fontFamily:"'Inter',sans-serif"}}>PREVIEW</p>
                  <div style={{display:"flex",gap:8}}>
                    {[{ad:true},{ad:false},{ad:false}].map(function(c,ci){
                      return <div key={ci} style={{flex:1,borderRadius:10,overflow:"hidden",border:c.ad?"1.5px solid "+(dark?"rgba(167,139,250,0.2)":"rgba(124,58,237,0.12)"):"1px solid "+_bd}}>
                        <div style={{paddingBottom:"100%",background:c.ad?(dark?"linear-gradient(135deg,#2C2C2E,#1C1C1E)":"linear-gradient(135deg,#F5F5F5,#EBEBEB)"):(dark?"#2C2C2E":"#F0F0F0"),position:"relative"}}>
                          {c.ad?<span style={{position:"absolute",top:4,left:4,fontSize:7,fontWeight:600,color:dark?"#A78BFA":"#7C3AED",background:dark?"rgba(167,139,250,0.1)":"rgba(124,58,237,0.06)",padding:"2px 5px",borderRadius:4,fontFamily:"'Inter',sans-serif"}}>Ad</span>:null}
                        </div>
                        <div style={{padding:"6px 6px 8px"}}>
                          <div style={{height:6,borderRadius:3,background:dark?"#3A3A3C":"#DDD",width:"80%",marginBottom:4}}></div>
                          <div style={{height:5,borderRadius:3,background:dark?"#2C2C2E":"#E8E8E8",width:"50%"}}></div>
                        </div>
                      </div>;
                    })}
                  </div>
                  <p style={{fontSize:9,fontWeight:400,color:_mt,textAlign:"center",marginTop:8,fontFamily:"'Inter',sans-serif"}}>Your card blends in with organic deals · "Ad" badge for transparency</p>
                </div>
                <div className="ig2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {[{i:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',t:"In-feed placement",d:"Inside category rows"},{i:'<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>',t:"Native look",d:"Blends with organic cards"},{i:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',t:"High click-through",d:"Users engage naturally"},{i:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',t:"Transparent",d:"Clear Ad badge shown"}].map(function(f,fi){
                    return <div key={fi} style={{padding:"10px 12px",borderRadius:10,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)"}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={_sub} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:6}} dangerouslySetInnerHTML={{__html:f.i}}/>
                      <p style={{fontSize:11,fontWeight:500,color:_ink,marginBottom:1,fontFamily:"'Inter',sans-serif"}}>{f.t}</p>
                      <p style={{fontSize:10,fontWeight:400,color:_sub,fontFamily:"'Inter',sans-serif"}}>{f.d}</p>
                    </div>;
                  })}
                </div>
              </div>}
              <div style={{height:1,background:_bd,marginBottom:24}}></div>
              <p style={{fontSize:11,fontWeight:500,color:_sub,letterSpacing:"0.3px",marginBottom:10,fontFamily:"'Inter',sans-serif"}}>DURATION</p>
              <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"}}>
                {(inquiryType==="sponsored"?[{k:"1w",l:"1 week"},{k:"2w",l:"2 weeks"},{k:"1m",l:"1 month"},{k:"3m",l:"3 months"}]:[{k:"1m",l:"1 month"},{k:"3m",l:"3 months"},{k:"6m",l:"6 months"},{k:"1y",l:"1 year"}]).map(function(o){
                  var active=inqDuration===o.k;
                  return <button key={o.k} onClick={function(){sInqDuration(o.k);}} style={{padding:"10px 18px",borderRadius:12,border:active?"2px solid "+_ink:"1.5px solid "+_bd,background:active?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",color:active?_ink:_sub,cursor:"pointer",fontSize:13,fontWeight:active?500:400,fontFamily:"'Inter',sans-serif",transition:"all .3s"}}>{o.l}</button>;
                })}
              </div>
              <p style={{fontSize:11,fontWeight:500,color:_sub,letterSpacing:"0.3px",marginBottom:10,fontFamily:"'Inter',sans-serif"}}>BUDGET RANGE</p>
              <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"}}>
                {(inquiryType==="sponsored"?[{k:"29-49",l:"$29 \u2013 $49"},{k:"50-99",l:"$50 \u2013 $99"},{k:"100+",l:"$100+"},{k:"flex",l:"Flexible"}]:[{k:"99-199",l:"$99 \u2013 $199"},{k:"200-499",l:"$200 \u2013 $499"},{k:"500+",l:"$500+"},{k:"flex",l:"Flexible"}]).map(function(o){
                  var active=inqBudget===o.k;
                  return <button key={o.k} onClick={function(){sInqBudget(o.k);}} style={{padding:"10px 18px",borderRadius:12,border:active?"2px solid "+_ink:"1.5px solid "+_bd,background:active?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",color:active?_ink:_sub,cursor:"pointer",fontSize:13,fontWeight:active?500:400,fontFamily:"'Inter',sans-serif",transition:"all .3s"}}>{o.l}</button>;
                })}
              </div>
              <p style={{fontSize:11,fontWeight:500,color:_sub,letterSpacing:"0.3px",marginBottom:10,fontFamily:"'Inter',sans-serif"}}>HOW SHOULD WE REACH YOU?</p>
              <div style={{display:"flex",gap:8,marginBottom:14}}>
                {[{k:"telegram",l:"Telegram"},{k:"phone",l:"Phone"},{k:"email",l:"Email"}].map(function(o){
                  var active=inqMethod===o.k;
                  return <button key={o.k} onClick={function(){sInqMethod(o.k);}} style={{padding:"8px 16px",borderRadius:10,border:active?"2px solid "+_ink:"1.5px solid "+_bd,background:active?(dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.015)"):"transparent",color:active?_ink:_sub,cursor:"pointer",fontSize:12,fontWeight:active?500:400,fontFamily:"'Inter',sans-serif",transition:"all .3s"}}>{o.l}</button>;
                })}
              </div>
              <input value={inqContact} onChange={function(e){sInqContact(e.target.value);}} placeholder={inqMethod==="telegram"?"@username":inqMethod==="phone"?"Phone number":"Email address"} style={{width:"100%",padding:"0 0 10px",border:"none",borderBottom:"1px solid "+_bd,background:"transparent",fontSize:15,fontWeight:500,fontFamily:"'Inter',sans-serif",color:_ink,outline:"none",letterSpacing:"-0.2px",marginBottom:24}} onFocus={function(e){e.currentTarget.style.borderBottomColor=_ink;}} onBlur={function(e){e.currentTarget.style.borderBottomColor=_bd;}}/>
              <p style={{fontSize:11,fontWeight:500,color:_sub,letterSpacing:"0.3px",marginBottom:10,fontFamily:"'Inter',sans-serif"}}>ANYTHING ELSE? <span style={{color:_mt}}>optional</span></p>
              <textarea value={inqNote} onChange={function(e){sInqNote(e.target.value);}} placeholder="E.g. specific dates, target audience, brand guidelines..." rows={3} style={{width:"100%",padding:"12px 14px",border:"1px solid "+_bd,borderRadius:12,background:"transparent",fontSize:13,fontWeight:400,fontFamily:"'Inter',sans-serif",color:_ink,outline:"none",resize:"vertical"}} onFocus={function(e){e.currentTarget.style.borderColor=_ink;}} onBlur={function(e){e.currentTarget.style.borderColor=_bd;}}/>
            </div>:<div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:dark?"rgba(52,199,89,0.1)":"rgba(52,199,89,0.06)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p style={{fontSize:22,fontWeight:500,fontFamily:"'Inter',sans-serif",letterSpacing:"-0.2px",color:_ink,marginBottom:8}}>Request sent</p>
              <p style={{fontSize:13,fontWeight:400,color:_sub,lineHeight:1.6,marginBottom:8}}>We received your {inquiryType==="sponsored"?"Sponsored Card":"Partner Banner"} inquiry.</p>
              <p style={{fontSize:13,fontWeight:400,color:_sub,lineHeight:1.6,marginBottom:28}}>We'll reach you via {inqMethod==="telegram"?"Telegram":inqMethod==="phone"?"phone":"email"} within 24 hours.</p>
              <div style={{padding:"16px 20px",borderRadius:14,background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.015)",border:"1px solid "+_bd,textAlign:"left",marginBottom:24}}>
                <p style={{fontSize:11,fontWeight:500,color:_sub,letterSpacing:"0.3px",marginBottom:10}}>YOUR REQUEST</p>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,color:_sub}}>Placement</span><span style={{fontSize:12,fontWeight:500,color:_ink}}>{inquiryType==="sponsored"?"Sponsored Card":"Partner Banner"}</span></div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,color:_sub}}>Duration</span><span style={{fontSize:12,fontWeight:500,color:_ink}}>{inqDuration}</span></div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><span style={{fontSize:12,color:_sub}}>Budget</span><span style={{fontSize:12,fontWeight:500,color:_ink}}>{inqBudget}</span></div>
                <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:12,color:_sub}}>Contact</span><span style={{fontSize:12,fontWeight:500,color:_ink}}>{inqContact}</span></div>
              </div>
              <button onClick={function(){sInquiryType(null);}} style={{padding:"12px 32px",borderRadius:980,background:_ink,color:_bg2,border:"none",cursor:"pointer",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"opacity .3s"}} onMouseEnter={function(e){e.currentTarget.style.opacity="0.8";}} onMouseLeave={function(e){e.currentTarget.style.opacity="1";}}>Done</button>
            </div>}
          </div>
          {!inqSent?<div style={{padding:"16px 32px 28px",borderTop:"1px solid "+_bd,background:_bg2,borderRadius:"0 0 24px 24px",flexShrink:0}}>
            <button onClick={function(){if(!ready)return;sInqSent(true);}} style={{width:"100%",padding:"14px 0",borderRadius:980,background:ready?_ink:"transparent",color:ready?_bg2:_sub,border:"1px solid "+(ready?_ink:_bd),cursor:ready?"pointer":"default",fontSize:14,fontWeight:400,fontFamily:"'Inter',sans-serif",transition:"all .4s cubic-bezier(.16,1,.3,1)"}}>Submit inquiry</button>
            <p style={{fontSize:11,fontWeight:400,color:_mt,textAlign:"center",marginTop:10,lineHeight:1.6}}>Our team typically responds within 24 hours.</p>
          </div>:null}
        </div>
      </div>;
    }()):null}
  </div>;
}
