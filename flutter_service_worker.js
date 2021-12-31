'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7367c9ca1c69727a8bb09a7d2d21d48c",
"index.html": "989f4514822dc492d4c6a37de45868f8",
"/": "989f4514822dc492d4c6a37de45868f8",
"main.dart.js": "0336d4c74dd5a6638c976ab7c78dcc45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
".git/config": "39a4eed3ca6bda02d996edfa63678673",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/95/73f5a4f7a3a2e38836782cbaf0ee80d1cacf71": "d2a6ae8cd11e4fd1a550917eadc4a842",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/91cc78f861cda5348d6c17fb162f750265772a": "1d1a122942d04ecda205dea491f50c02",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/13d61fe06e7d198e0c723aedaf1c1865119fdb": "57693ced3f5cf84800a8b2c5bcded1a6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/eba3eff38d953fdba7420a8d08964a9b13cde2": "954ed9d49b63742ade10dcba7e9ec6d4",
".git/objects/5a/07ec97796b55a20509e771a7bc38a04c103d9b": "70d341bd6b519209b7228063fcf16d03",
".git/objects/9c/c3b3d639693e107dbca289611d2e5616a40cc6": "e96d64c4f41bca2ca33d89f7431495c6",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/bb/f85f05008fd55acae3cd98d54adc34705bca92": "f49662aea5769580d26662a801009dd5",
".git/objects/da/1032d6fa106f2317637ba572f0d5e3ab5e2d50": "6934379d47b336147c1116c28e1ffd8e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/6dafead88c4d242d357ee7579f67de38a532ee": "bc53b5f9918eaeaa6041c8765485f01b",
".git/objects/f5/3086bf6b5d41a1f35db5b4e17c047cb43078dd": "efeed342d9b5bb3fe69a401edb6a2b80",
".git/objects/e3/281188baa189f6b7614b6bc9d9bb3dc8254e38": "b86dbe0dd9799553ed1fbc00be71e6ff",
".git/objects/fe/ee5ba77299b1cac16874094dfce300fef66e68": "201b38e5e0a549bfa712da34b8e6a909",
".git/objects/ec/e67e943dcf2c0141bbff1cc959fb63c368484a": "5539b6001108c23c13d799d97648b120",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/74/829ad6dd25617afd51bac9c96326e65d389e67": "e7a8d72b03b898dc2178c3e2b99d4739",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/e77ef464d9da0d3218a1890752759dc8b1a032": "dbaa0b8d1dc5654ded0c29e72f84e395",
".git/objects/7e/7225b093556a79639bf19e7b502b645bb0163a": "5c636342aca2e4734bfbd8a75b5472cb",
".git/objects/4c/88f1db218c545e3a0c617ae8834ca102cf2b5b": "0231a241c7b5fcaeee149526fda1ca93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9d4606518eb0152fde873079e15e362bdd833f": "7e0f53061969f1c27dad0d09b59fe908",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/65/861b91fe7af65372dcdeed4c8d71a8301a3760": "934d64c543d9c19ecb51fa44d35a1d4b",
".git/objects/30/6c9dd35f987284b6fa6fe1e54abc4c9f3c721f": "7c33f81380a2cb1e8bdfa8d6ea90b18f",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/a7/d21ad77b546e7ce2411ba255dc821e2af88778": "30d98e655a70240370757304cfab9704",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/d5/8c32313ecf847e7ca92e23d4c3c964b4b6fa1e": "30acec2892166c3011f9e72e6516cf55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/90efa4843a546b2e27105ad1934dc0cfc21359": "7a3ed69a90983b18fb7875d29e04532f",
".git/objects/a8/681917a24aa5549d342f455a0f16bd835787b0": "e922707e8e82a948044089da9f5cc481",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/b9/5bdf5afdd26a4f1d384f7af8b0686b96ee22e3": "46869fc67b48d5dcb41e1a09d5d4b05d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/98fa396a7e0923b16578bdd128212933b7ed76": "98faa8326dd1233418ded79766c7153a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0eeb1a8aa33928aa3e7399bd5a32babf183034": "217d4a0db66875ce73c83333676f04a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4f/e0b422984777b4a3b9464661fd6c674e78006a": "32fc080c11c832a2db38a48004b4bb3e",
".git/objects/71/e1f137950ae6f44c81977e919f6ed0edc3eabf": "228f6b0823cbb858f2b96bf8b6f3dca1",
".git/objects/47/a3446b966341397f1db0f2557d21540e52738c": "d104cf2d50f9043eee28d67e0ea74608",
".git/objects/8e/d6ab217a383fac6dc12bcb281b5929790896d6": "7c29b6ca45f8a66640f7c6a948457152",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e80b03415e26af6fa13b052d4fc7360e",
".git/logs/refs/heads/main": "f2632bc28b35f2fd24a6b272702f31e6",
".git/logs/refs/remotes/origin/main": "e2fd0287c6a4cdcb0bfff0e96aa5a5f5",
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
".git/refs/heads/main": "c3ca9cac834e607cfc1d95cacae2a356",
".git/refs/remotes/origin/main": "c3ca9cac834e607cfc1d95cacae2a356",
".git/index": "bb4b577d455e8c754c5eca538be86bdd",
".git/COMMIT_EDITMSG": "46b73951093604d734aae668d12f9149",
"assets/AssetManifest.json": "4d317eafac3b145f4934cf73d35db828",
"assets/NOTICES": "2c1198e3cf56fa6d64af953e3e1cb8a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/tec2.jpg": "036456227e266b61c80b397119044783",
"assets/assets/images/h1.jpeg": "a7bbd46185afb5d73980942fcf624693",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
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
