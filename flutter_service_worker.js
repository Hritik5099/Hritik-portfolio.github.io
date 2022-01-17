'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"index.html": "388d16f9322b88d60a81ad74a5fb9c23",
"/": "388d16f9322b88d60a81ad74a5fb9c23",
"main.dart.js": "2f9cf800f9c7ff6edf7afa6004cbb746",
"img/loading.png": "a877c39e5874d2848706b5d0016ecf99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/open-book.png": "d9d529b4578eab5ea2a0e7e33685cecb",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e27524dff66d03378a4858ba81dd8e9e",
".git/config": "39a4eed3ca6bda02d996edfa63678673",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/95/73f5a4f7a3a2e38836782cbaf0ee80d1cacf71": "d2a6ae8cd11e4fd1a550917eadc4a842",
".git/objects/59/226c5c255fdc33db432fd95b95271a82329d64": "80b28c6c203ed66bb925c556f44aca35",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/91cc78f861cda5348d6c17fb162f750265772a": "1d1a122942d04ecda205dea491f50c02",
".git/objects/03/006d18b7fc2e0417810e27d27e0a000a479267": "371c3c99470f298a51556288c77c5df3",
".git/objects/9b/58be245a6953d82bf63c41088e1474b5be6c2f": "8e18700f815ff8a60d515ffaffd37436",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/13d61fe06e7d198e0c723aedaf1c1865119fdb": "57693ced3f5cf84800a8b2c5bcded1a6",
".git/objects/6a/4d82d79947f449021d4ae31b2626beacb937dd": "896d101f098c37cd86356e6be5b36ad9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/49bbff0e42a818a7b4545e13cf83bde3921be4": "3937f26d165b5741c337ec328b35215f",
".git/objects/3d/4969eefcbc0477b7821bfebd879f7695c2ca16": "ea634d1ce5fcd8d5d2e778e673aa6d2d",
".git/objects/93/ad85d1bd471a4065aeaec57281496ddd3d1370": "de38448f37afdcd17309dda301365efd",
".git/objects/34/eba3eff38d953fdba7420a8d08964a9b13cde2": "954ed9d49b63742ade10dcba7e9ec6d4",
".git/objects/5a/07ec97796b55a20509e771a7bc38a04c103d9b": "70d341bd6b519209b7228063fcf16d03",
".git/objects/9d/1de404f833fd6e4a04f768a69a61403aee6c6c": "97416e69cb1158352da0eb33cfd522f3",
".git/objects/9c/c3b3d639693e107dbca289611d2e5616a40cc6": "e96d64c4f41bca2ca33d89f7431495c6",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/f85f05008fd55acae3cd98d54adc34705bca92": "f49662aea5769580d26662a801009dd5",
".git/objects/df/66cce2ceaa55adf841079b047f666ae82e840b": "9ab8ef108f929967b6fa924e276e6b0b",
".git/objects/da/c984a98b890f0ff8d184c8c031f5b55f88dffd": "9a46f522abd9b5b6bf1108019916abfa",
".git/objects/da/1032d6fa106f2317637ba572f0d5e3ab5e2d50": "6934379d47b336147c1116c28e1ffd8e",
".git/objects/bd/495a23db14120f0fa7cf798bf4f11774e09893": "7ec72a720bb8c53f088d3c90ae3fc91c",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/bc/826578d5e15524628a54db96bf2de89caf0cf8": "f6e85e387f8a1240d84f9b3f2eae36e1",
".git/objects/bc/5103c449a56ee4d59ac989b21a25052ebf4791": "5c0ca44c7562fb701553e7092e9c18cc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/7ee04dca56fab650757023d6984258d12c7253": "873cb15cbccf6c5475e726d297718e73",
".git/objects/f3/6dafead88c4d242d357ee7579f67de38a532ee": "bc53b5f9918eaeaa6041c8765485f01b",
".git/objects/ee/384276a588c707c84ab04107faef6abe4f2ad5": "165eb9a3e1a73ad8178918e309592e92",
".git/objects/f5/3086bf6b5d41a1f35db5b4e17c047cb43078dd": "efeed342d9b5bb3fe69a401edb6a2b80",
".git/objects/e3/281188baa189f6b7614b6bc9d9bb3dc8254e38": "b86dbe0dd9799553ed1fbc00be71e6ff",
".git/objects/cf/2a3c1e9b3e6554e605d72be745288ee3ed2e58": "bf5e87688ea46b7786efe078f1feb6fd",
".git/objects/fe/ee5ba77299b1cac16874094dfce300fef66e68": "201b38e5e0a549bfa712da34b8e6a909",
".git/objects/ed/a053f9ac107785076ca270d54df0c010ed8be2": "7ab054f1546a0787d2fadfc1c3f3ba00",
".git/objects/ec/e67e943dcf2c0141bbff1cc959fb63c368484a": "5539b6001108c23c13d799d97648b120",
".git/objects/4e/85c57cff5b3f59a2f26e4e249319e1d067163c": "2c1982469ca455f492dbfd3598d37103",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/073fdb73dafe9d83e8582447ffce510b4528fc": "389707d213db0aa6d59feb04b4ccd768",
".git/objects/7c/88bcdc14dc317345b8141c3436cf2c02426cfd": "b2c62ecaa650f860d9480d49a0e5bf54",
".git/objects/16/f3376a82518f359438eb6f33d3544fe48dafb7": "488dbbcf63240238bcbfb79e75bde78c",
".git/objects/73/88845a55b9b338ae86e1232d92bd6ef87abfa3": "b31d9c4d38ab0b301f358a9c9e15b207",
".git/objects/80/1fbd6624384035f1121a09416879db1981767f": "18453a0b0b53687fa2eabc47876ab17a",
".git/objects/74/829ad6dd25617afd51bac9c96326e65d389e67": "e7a8d72b03b898dc2178c3e2b99d4739",
".git/objects/28/62b36d39ba5ab2bb24cae9fc8501e9876a61de": "f48b682ed1a99f4de9ac3bd9cab494de",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/e77ef464d9da0d3218a1890752759dc8b1a032": "dbaa0b8d1dc5654ded0c29e72f84e395",
".git/objects/7e/7225b093556a79639bf19e7b502b645bb0163a": "5c636342aca2e4734bfbd8a75b5472cb",
".git/objects/4c/88f1db218c545e3a0c617ae8834ca102cf2b5b": "0231a241c7b5fcaeee149526fda1ca93",
".git/objects/21/0102cde06e2639bd0a1be18ec335083fb2785e": "aff8ea8aa8fd16d38e0d2650b1d6d65c",
".git/objects/86/1ea302a976bcbe0a0362143d4f44cc7dbce03a": "01faff77c116a6c2153fd0442feb1333",
".git/objects/72/d84012e3ae71668466a86e3c91ea25a4e64882": "2a8f7873dae1cdafaa0499f914ca207b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9d4606518eb0152fde873079e15e362bdd833f": "7e0f53061969f1c27dad0d09b59fe908",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/9a/dee3d4e6117b8096d181c004a59112414ceaf4": "cb4bf35f4595043f13ce370f9c0c8fd8",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/62/ad0039171078af1bc8e97bd983dade254d10f6": "ceff7365889affe67d2a8405fa03729e",
".git/objects/96/37ab238f98bffe84cd010e3f069f710f3c907c": "a4e8520d2069a262b0cacb74fe603fa4",
".git/objects/53/a3326c943e500481e404a7f0df6a2bc264a9b2": "aecdb5a8c98dc68e9355ee69ebd31937",
".git/objects/53/7b6647e9ed7e860e30edc27d476f0b80fd0027": "d3802add9aa2ef99c204b4c75c77fd8c",
".git/objects/30/6c9dd35f987284b6fa6fe1e54abc4c9f3c721f": "7c33f81380a2cb1e8bdfa8d6ea90b18f",
".git/objects/37/a0611243f7d6587d052e4985da540f94170b53": "8e88ac33de650f65f3147932552b7f41",
".git/objects/6c/84bbf949f3f3e939dcc4faf9dbb8a1c57871c6": "c655d48378ec7906593ac6275928d632",
".git/objects/0f/702e8a2eb021d60ddabf246558197e094a8b65": "3d78468dfc2865c28cb94d60d3de78e2",
".git/objects/0a/b30c664198250cfe8e14d366b5faf18924ac69": "be7ef5381453c0a19883ea09e67038e4",
".git/objects/0a/94fd0063d7617f287ea880939451ce0d930361": "12ba16f4ed56c82940ea1915fb0116aa",
".git/objects/64/ff8a488acfe061933e56e6c41d54069a73a764": "f9c6316712483e66aac65fd46c3fd29e",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/bf/77763d3d49b879a3d7ab6f0ca1fa89f8d268e0": "6f873cbb54362057330e7016b3b0ebd1",
".git/objects/a7/d21ad77b546e7ce2411ba255dc821e2af88778": "30d98e655a70240370757304cfab9704",
".git/objects/dd/b6466dc3ea993cf9759bf8fd08c28ac42e6d85": "e2a01cec8549776d657aeda6fd5752d7",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/d5/8c32313ecf847e7ca92e23d4c3c964b4b6fa1e": "30acec2892166c3011f9e72e6516cf55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/90efa4843a546b2e27105ad1934dc0cfc21359": "7a3ed69a90983b18fb7875d29e04532f",
".git/objects/a8/681917a24aa5549d342f455a0f16bd835787b0": "e922707e8e82a948044089da9f5cc481",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/a6/b4ce6b53ea3039f85963370e0d632e1706f509": "51e2eaee7cc7e405aa336e81e1007967",
".git/objects/a6/6d3803603d05f3a647ca2b2713067eedd24623": "a086c59104d4d08c52b113f9e81790f7",
".git/objects/b9/5bdf5afdd26a4f1d384f7af8b0686b96ee22e3": "46869fc67b48d5dcb41e1a09d5d4b05d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/98fa396a7e0923b16578bdd128212933b7ed76": "98faa8326dd1233418ded79766c7153a",
".git/objects/c4/06fa26d7a4bb73dc9bcfa9ef68204f949b050b": "45945d15079d673dc858d1acbf1ba96a",
".git/objects/f7/c0af48d499242caf541de69bbeffaea076110c": "f20e97e9179e50d2b1b3fde7fa9b2bc9",
".git/objects/f6/6c4492274588c2634d63de5d604749b303a1d3": "d85fd2d710fd3a1cd571e4830ceb93cf",
".git/objects/f6/19197364779be19ccdc6bd985351f819d12e79": "687790ade9ad81efab118041dec5cf6e",
".git/objects/f1/bc901ff17488596abf65a5a9bfde100b417775": "6746997b59d0326c87cc63dedcb630d1",
".git/objects/f1/a8139b45521aacbb914b7187908cf1b7341794": "fe21465b616f12de2c3c165d384b1028",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0eeb1a8aa33928aa3e7399bd5a32babf183034": "217d4a0db66875ce73c83333676f04a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/99626b41df2aa451336da57a45053cca018ef4": "6914c38d04df2be3550c021e03f79dae",
".git/objects/84/1610660e77591856523281d8be6ada65c496da": "e146bf4f35addf2c2cb916f32101e7fc",
".git/objects/4f/e0b422984777b4a3b9464661fd6c674e78006a": "32fc080c11c832a2db38a48004b4bb3e",
".git/objects/15/857f0cbfdbc75f9b339415bd0a5d4997e86101": "3c6fe5b4b5ef018fc82cf0a298e437ad",
".git/objects/71/e1f137950ae6f44c81977e919f6ed0edc3eabf": "228f6b0823cbb858f2b96bf8b6f3dca1",
".git/objects/76/09d4dd92a7e3c60f1bb54ca2f709bb07c0566d": "69d805417f4d0148e45f76acb8274b88",
".git/objects/1c/419cd1c4de023438aacfb66abd2982c3720bc1": "4b0112a4d7b29455980dc63040f700d1",
".git/objects/49/feedfbeb32b4cda3a76d821ddab5c5e9de099b": "5a04f301cf287801026a56fbe83a47a3",
".git/objects/47/a3446b966341397f1db0f2557d21540e52738c": "d104cf2d50f9043eee28d67e0ea74608",
".git/objects/78/03c2ae87de83e62d1708641674077d879c1012": "a2eabe96e6e3fe8b8d320113a406a147",
".git/objects/8b/a61a4bddee66be288c3b1b51dfa9cf53fa0dc6": "f98ea93c0d8aa828ba4b04e06ee18fb0",
".git/objects/7f/edb324e5a9961ef5840e58b7b74ae705fbdf13": "d4ca8a8cf1b04b53d3d4d4aa2261a3b4",
".git/objects/8e/d6ab217a383fac6dc12bcb281b5929790896d6": "7c29b6ca45f8a66640f7c6a948457152",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9b9e8e45f40cfc2d9569102b05cd60e",
".git/logs/refs/heads/main": "6ed8a01054e47c26ecbff1c5f3955bdd",
".git/logs/refs/remotes/origin/main": "0dffce6388faec814b1c69e017cb2a81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f3bf4f1c63d1068d83de87184348d5ca",
".git/refs/remotes/origin/main": "f3bf4f1c63d1068d83de87184348d5ca",
".git/index": "262c353759d828af91d4cca711d3c96b",
".git/COMMIT_EDITMSG": "01fbdc44ef819db6273bc30965a23814",
"assets/AssetManifest.json": "356f21d9ece628daa1e2f796d51a2ffd",
"assets/NOTICES": "2c1198e3cf56fa6d64af953e3e1cb8a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/tec2.jpg": "036456227e266b61c80b397119044783",
"assets/assets/images/h1.jpeg": "a7bbd46185afb5d73980942fcf624693",
"assets/assets/images/web_collab.png": "f366bfe714aa11515b3824cd8d97ac37",
"assets/assets/images/books.jpg": "e28e2ae88c381f0cc6e77bc5b1f54895",
"assets/assets/images/quize.png": "e1a3e2dfc1cf25b380307b82c161abfd",
"assets/assets/images/f&f.png": "c349a1faf85db71a230e0b45d188581b",
"assets/assets/images/android_studio.png": "cc5558f92d8ffcc28b1f21b02d7819f7",
"assets/assets/images/developer_profile.png": "1ee0be3935b34611ef29675c301aba72",
"assets/assets/images/beta.png": "0b9aca29d8a334684682c644c486dd71",
"assets/assets/images/flutter_app.png": "c1e0a07d6da828665c9fdb092772b124",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/loading.png": "4aa5e94d948e3eb0730dea060201fe78",
"assets/assets/images/p.jpg": "2df9eb98ab2a33c5b49ce63ea1dff305",
"assets/assets/images/tec.jpg": "5d780de53ec01b7a9aab2e5148dd0857",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/gmail.png": "f00b334e60b029b6c9aec7d099484649",
"assets/assets/icons/twitter.png": "fdf976b38ea62efdd540126784ef8e3d",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
