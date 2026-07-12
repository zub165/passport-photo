'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f2f4df28454361a49702df13df1ffc3",
"version.json": "16dd33d8df6db35efb2b6b85c808e1e5",
"index.html": "b35ed080229606a9be87f58e12dbe830",
"/": "b35ed080229606a9be87f58e12dbe830",
"support.html": "60e797a47062a568479a444ed0dfc4fa",
"favicon-16.png": "418cd397becdb274a0fef6529ea386ea",
"main.dart.js": "483fc7482bac0a4d0844278fbf901de2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"README.md": "caf60283585b75489b0690ab149e192f",
"favicon.png": "9dc24f1841178afc3432ac628b451fa2",
"icons/Icon-192.png": "2935baa85d4ea4462ac821c23a1508a2",
"icons/Icon-maskable-192.png": "5254b40eb7babccfca194085b2109196",
"icons/Icon-maskable-512.png": "e399d4d8129e9460b966b0d73de63029",
"icons/Icon-512.png": "2fd1b3f3874fea2bd69af4f93a59e005",
"manifest.json": "a6e04cc8ccf152c90526f594e3ff6a75",
"site.css": "da6bdd4a36b4914a54b42e87f85d2b7a",
".git/config": "f59d1dd45bace22df08261d4162eb9fd",
".git/objects/95/78e13a01a6f8f8ccddc380ec7aeebe1734e50a": "28ce859279a73e1901ca74dadff5e56c",
".git/objects/50/9d2ee3a464fd0b50c96a1c257d5d25d635ef6a": "bfb2b7953bb04ab6dc30665c3df17f60",
".git/objects/50/340b4879b0d6388c3ffebe0cefc10fa4acad2c": "3233892eca83df52550aaad16abe7b7f",
".git/objects/6f/04d36a6022e9a06489c99ba52dec571d76ef19": "e222d1de2f7e956ad5fe0c017e73f7cb",
".git/objects/6f/0499cb307040302f8e5c462e9a6fcbd6f46f60": "d891dc78522b59187bade3f16b25b5b3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/bce074b84185cf084771060d5574e4e5bf670c": "51b86338294245115f414c0f7df2ca86",
".git/objects/51/35cb3d9e0484694d659ff66c18a6edaead2e5f": "9300f5c2b8fb9f677f0abc7f3e343843",
".git/objects/3d/952c9eccab3bc10a0a83465774cb0600333dd9": "43872cbcfb33734430f9927e80a7505b",
".git/objects/67/5894ac18f7871b8a21e2489fec6393a62df23b": "d6cbd706663117f5a1a8ebe768ea5892",
".git/objects/60/17a0d988a2e77f4ba511785500f725d4ff318c": "e8b2725545f8bcce93a2d4c78800d091",
".git/objects/33/b4dc39abc264c0268017d7a4504903f7c528b3": "196dbc54d5751b1d5f35e67d3aeee52a",
".git/objects/9d/c75da98abe2bc46e945be198088170a9782a78": "6941c18ca57c258a20eba9cf00abe55e",
".git/objects/a3/09b1ff81616484d10f80025a7f61d97b727a2c": "5fca5b638563658158d8cb8f77a4abc9",
".git/objects/ad/60dc56edd1c97e03ceaa083ba69178f868c1d4": "5b37c64713dcf2a459e05e02aa0bb1dc",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/1cfb19fe0be94ce4ed4a8a8d5103a6b831c9d3": "29e663845bc49ae15bab6460d47021f2",
".git/objects/b3/874ced6599511234fa54d8c0be1e6d7d2c3399": "70facee6cc76313354469e09e9fedb51",
".git/objects/a5/d53d81bacdb3a04459dc8d5636d9365a6e701a": "e826899b09b08be528043fd5a961470c",
".git/objects/a5/bfb170ad23e33045e21b0ad3b0c029ec5ef25e": "55d1c419666f0cae718c737412494380",
".git/objects/bd/546af3dae6c4328c4d7223bce757f23305ca67": "c1378d297a83248e59ab7b07e6fb3fd9",
".git/objects/bc/00d79bd84fba538c779d7bd93c74457d5db26e": "3ce3439a4848f79b4ad2b9087319581d",
".git/objects/e5/dc64dfd9ccfdcd2e50e13057fc53cee7595e5b": "28901357f64f1a10d64adeb245937fe2",
".git/objects/f4/632a5eda65c2fac6757fe1829948ec583bdc8b": "54aab6fc8637bfb110ed57ca4415ea50",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/7994692fa2fb7aabd2fb25fc35d86a9dc37a6d": "58682730c684ca551590ba19ef7a2545",
".git/objects/fd/163b346cddb02af8feccfc30902625bf527529": "9181510b7027f0cf5b2b13aa78ef2339",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d04de8e2dbd9ba8135bea86ca896ad81f041da": "b6809318bb877f50c01a7c3b0210caf2",
".git/objects/f2/8c755b438e0dc977a6e5bb06330ffd2aa476b9": "60d238e9fe195d05a667387a9276a402",
".git/objects/f2/652157d80349abc83e4ea4efcad7ffb13f91ac": "b18cc11f9c3110d8050822f1561f29e2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/554061051e825a27cd9fbe61c57078f5d20c54": "3643d023e9c68d71559fbb2ad0f080fd",
".git/objects/fe/25039f0eff9a07c3d11b79aa02ac92f8f3b056": "2f03f9c4877335c81f0ef69ebad9b91a",
".git/objects/c8/22a304e2dbc618170ebdafae4ec3b7104c5fae": "78967085dcede1bbfba19719faf80fd6",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/fb/92fcd4335892544917163855bbf1f8c1f00e11": "7a31344973bdef548355183b218c5692",
".git/objects/ed/2f86e9369df02f15467c4eba44ae922405824e": "2c31fc1f3bb4d8a30326d8808f944c5a",
".git/objects/c1/6b70c580d0effd33106c8fce9925ba466d2c13": "1ece677a98349518cd247057639469e8",
".git/objects/c6/0fd47cf284d66938d3874b0ad0b4192c189d37": "dfcd55a86c64e5243335cd4e30e70fca",
".git/objects/20/152b11adacce4ddb99c8273d4bc5160598cd1f": "b4a869ea1e9966b8dd58957d58f91909",
".git/objects/18/a1d8c33b2b8d71eb705b04fac4b55951a5d424": "e6db3709199d945eaa61a3f7bb95ded8",
".git/objects/4b/396d24d0d6391403a7a96a546b7f9e1b08a07c": "85d2d47ca867c732b909729cd6151677",
".git/objects/11/5f5ef81b34242823f134ad0dde6c3ce9b62fb1": "0dce0165319cfb8256fc2284fb082057",
".git/objects/29/37fd9c9d415673a383f781b6a803b6eb205d1d": "ed1c9c0ccc97cf4e5e8f034af28a2ddf",
".git/objects/89/414732606cbe2a4787ee8435725a2547c7c7b3": "f253f1416599ddc75e241c0822bd0a3a",
".git/objects/89/ef9bbb4e22dc7252b1866449c60d7084fb68fc": "2977644630ce4c3aadbb175c130cffb7",
".git/objects/1f/51631825c34116c005c1b09e61b6a91a1fde65": "e8317fcfe15b362faafcc179eeb7ebeb",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/dd3d1e255a7d8953cf939d3f6070416fe8d958": "46a2e95ef25dd47d19f1fa324be19df6",
".git/objects/10/0832c6fc007c8575a61c247268d3366528953f": "f94369e60f61add67406b1b458be5b89",
".git/objects/4c/7ab8d962db0235309c324c42e3cc24b401dda9": "892a5ca5ecb2e55b38753162cadba31a",
".git/objects/75/c1065c4120f45a74eaa8ad4b748aac9b2b051f": "83c766b02c48f82eee78c21be913035f",
".git/objects/72/f3e830ca2fe9ea7d8f6ad7bde013ff7dd3e4e2": "3c01ad47042a59ebea24bca201d3e2f2",
".git/objects/2a/b59dfb870b6b61be89bb60e8022b43a1b33da8": "3e846043a0222f321e8172c4f20d81a6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/11383e268d361a29ad3d0b290016f9ead52cf4": "eb711205277ab631daba8bbba7eb2365",
".git/objects/6e/2ca0be3bd4626bb25eb5c70efdf8bce4423079": "6953a270226a6fb38b6f0b922793ccc0",
".git/objects/5c/d2eeaa7859f1f41b05af088c7c43e8667dded1": "4a376838cb070c638e9b5744752923de",
".git/objects/5d/d7402192f2c61aeec2187f8c9814ffcee30da5": "121e231231359f06a4bf1086f4e66482",
".git/objects/91/11c2ee1785e1372309f72fe5e180c42601e86c": "ebffbd424fcb9b7780de4f99fee53378",
".git/objects/91/896bc733f8f09337e13ea29f51049d5f2b982b": "ca01421aeeed812f00c8154162744fe5",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/b2bbd38f289a4034267f1b0b5d7c1e675d1426": "014ba56546b982eac7b7101bb6b0f15b",
".git/objects/30/5d7edbe908988ae798051d90bc7c4d34ad4c1f": "dd69997d5526ed5b4bddb987f95df531",
".git/objects/5e/68364af95205ff0523727f2e0398245bba5c10": "a6f5b1761b76add3e006f2da185d1efd",
".git/objects/5b/5b2524dabce4bd61484389e4dcdc08b3ea8184": "083dd93efdf11f231a5d3de362d99fcf",
".git/objects/37/4b0bb08321c8cfe3b7ce1929a065dbf3f2acf9": "8e5e6e6d76a5381fb49b7caf09b1628d",
".git/objects/06/18fab88dd4fc0f9181d91fcc2e24f6c85aa6c8": "58a9e37eea8bc24e473a5c4159b5fecc",
".git/objects/39/18b1680a7d763fa529e8275cc2d1add2dd569c": "5a3413ff1b0050dd0755b7c9e25fc46a",
".git/objects/52/bf9c1915811204cd9e53f1f21dbdf09343fed8": "80d5665fc5950909b56b62dadbec9525",
".git/objects/63/085f4f2721ef7e3cefee3ccba5da2f1f44dda3": "83aef78c126726da23e4c099ec72e598",
".git/objects/63/460935e826fc4a8cf54574dfa2b2baf2787cd5": "f4b8a5f2369e2a33635c9d40c0911df1",
".git/objects/64/63d3311c65c35780577809ffe28f3874353b4e": "f7d38cbd363ce32005cf1c2f282cd5ac",
".git/objects/90/ac0d46b4067805c3d5b388855974100bea23cc": "16467eb7563b63bf390e3818a737a310",
".git/objects/90/5d65d49bb720b0c77bb5b05110347600857748": "efe09cf7b3e43c15ab26ff49420e17b2",
".git/objects/bf/1bcbd4758abf27802ea47ed9c93c38cf05e98f": "731b02c8a4893acab65e977e7d2702e1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/775252507d1c48f58fecfbe12ee1fc4150af17": "650eaa8fe2304564e12e64fc70977fda",
".git/objects/a7/807eed98535c86620e98c1c09d962152d4a136": "dcd9b97f4e0602baaac2077a6496d4cf",
".git/objects/a7/7bcfd8840facb07054705c31389a34dc181cfb": "f34f20b59ead0b4bcecac78125c8ecd6",
".git/objects/b8/d2de16a27b35134e6c3d69458e96613e7dbee2": "fba17aaf9153e8b99de81ba3e0bc531e",
".git/objects/b1/15b9b3b4853bb482ada2cd99afa2d2db82f81a": "cc30e312d7d0f08627f89ef08357a882",
".git/objects/dd/375a23a86f9a813301776915070b38b1a741e1": "a02bfb52b7d23cae01dd85a0295aaa37",
".git/objects/dd/4621ffd3083ee166d749bc7e5714d0ff8fb6a2": "ec891a2bf50716e74d20be535b490ad0",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/783c333561933015b8cdbb1c8e1dbb90abdb9a": "111796d324128b9a6a431b144ccc1c45",
".git/objects/d2/71c8c44665d0b1545ef491fe97f724f463804c": "94ab767543691bb82a41c24b572f9f2b",
".git/objects/aa/a4a85e9d159cb31c5bbf73b0d8ec3dd8ba088a": "c89c5f3c0ab4110109fd79982f82d097",
".git/objects/b7/a05282735d3f4e4ca6d6d6e766696b131cd9d7": "5806e6d78d5689ff7a505b8a695dec0f",
".git/objects/b7/2a4d130894e63c18d1cd94aade1f26437ed01f": "37be8c7c78655ca5eb2d4f2feb6af29d",
".git/objects/de/b1d5f291099be844c9ce1c7775778ff3f4a2a8": "e465d85f4e451a09a68346250e960d2d",
".git/objects/de/55766e3b18fb7c4c4bde7d90edf5b40c15374f": "06f84f2106db04788aaa776f8d241430",
".git/objects/de/3eef072b1fd9abc2aed002bdf2ab5edd54db1f": "6157e4ee4454caf01eecb652c4ca4a41",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/0596795eddc13853f26e322ce38b106fffbfe8": "aa7da1b5ee91f9e5cb8c560a06972a7c",
".git/objects/c3/0d3d318305deac01a868d02db05447924f3318": "018afb6b2626ae06552c91a0fa6e0042",
".git/objects/cc/cab73432340549d26cd3be2c07ddc737fff571": "f1b5691f68dc33f584a4175bb751d9d9",
".git/objects/e6/ea1a0af00e6550c7b36bb7d8ef75350a2a59b0": "c55d3542fbe18bc346310d1fd5591ab8",
".git/objects/f7/bc63f9057175ff87490a7d522e39e16c3030b9": "29f80cf83b3dd8728e1cf0a1baf71c3d",
".git/objects/e8/6589532575f5a7285c2d1b9094094993f70cfa": "779e2d0c106a1713df94c736bceca3da",
".git/objects/fa/0da46edfec617c4cf0bca34882c0392cc18972": "13243e07ea8d1aaca8073aa4b8742f00",
".git/objects/ff/5d87f39dde41ccda2924323445c95daeefa881": "627f0ae7d2ed0c39a632bd16dd21c234",
".git/objects/c5/c54a7e6e2baa0c69c0dfe48c9024e4d6d30fbf": "0c1bb54a6f5d7a38f11b701fdffd347f",
".git/objects/f6/6cdf73ac8e405df2b81581072b41503582ac63": "efe429ac95554b2984475eec2dfea8f0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/1106beb02ec81609b2cf6b5dada15f94f48446": "b118bfc499e0973b6450d47185c660a7",
".git/objects/cb/4c5695ed8f575ed64e1b3dacc0de206f7f5d6e": "8a5853fbceb2069430ea054d05cc8094",
".git/objects/f8/8f24deb2c536e30da80c8162a50c0daf91be8e": "cbe59ac211581d3e7d8e62ab37e366c1",
".git/objects/ce/ea32be56fcd07e9595414d07d294f23d4a9de4": "c2b1eed37cfb5c4ebebfaf7228a77d85",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/bff9fe9ff7e73d187e64e46bd049ea8d868600": "2eaa80f2da383ce8c98f8073322d44fa",
".git/objects/46/98a36b6235d5cedb36648bc537b3858f8b7c3a": "5bc19afb1cd57b518d31a7551a47cbff",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/bd8c609a04677cf33a5e5bb100ccf7a6b64124": "392ecff8911e683324ff84b15ab0a627",
".git/objects/79/2d898e906478b4aeef4f89f601f8de71a4b8ad": "b3e68acda909f95b3a765d9cda5e6b21",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/24/9b1b1f4f39aabccb6a7838dab4e58437fb51c6": "8f31df720d92a15ad728f748ddd68d37",
".git/objects/4f/cfccc9e0af34dbcab1504f854b189c4f70af22": "8cb6eadb82d6aca174ec9390af124440",
".git/objects/15/e88dedfc2c989ab97267bb036d0c3fe7077734": "1ea2d527ebd4b7d841303170a82d6056",
".git/objects/8c/d7d711bdf1e5886cb35b090ceaa9d59651ef22": "125c5867651481afa7d789faafef3cb5",
".git/objects/8c/8e9b9a669a4772bea38d9bce27175472e91d87": "af6dd5ae5b37e43d61747655b1e8c57f",
".git/objects/1c/9495de4ed6322dc5fd8570b9877af487eee734": "5653ab69f2e98749737b05dd84816933",
".git/objects/1c/24283a1563bf12be3e4dd0751218ccf30bcb35": "cecb6a4f7f416276bd49285de5e23360",
".git/objects/2e/2e9ad2bebff2a2273f20fde4041f0c8fafe222": "436cfca622122b12a9570ee9d1c4e087",
".git/objects/14/ae388f2d8cc54b1c5f334ce9406dceb24d8d1a": "4a3ef492c067144dd704c1349fbfdf84",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a136a72363f646c182a616050d4f2e75",
".git/logs/refs/heads/main": "cdf9f8a0ec362c1c76fb4170d588fa69",
".git/logs/refs/remotes/origin/main": "d4514a95af3733a0f94b1c78f6f64562",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9f5a0b511b8ed8379c0a04337f7c4bef",
".git/refs/remotes/origin/main": "9f5a0b511b8ed8379c0a04337f7c4bef",
".git/index": "fb9cf66c49a578f205a379fba4578050",
".git/COMMIT_EDITMSG": "9cc58c0889f5f688fc65d9bd808e96f1",
"assets/AssetManifest.json": "ebb28e33897c790977bc98144c515dfb",
"assets/NOTICES": "1bb568594946499526c9b3e9c2757b8c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0248bee216e09a30f68bb12f707eeb03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b5ca0847528bf0f5146dd014c18b84b5",
"assets/fonts/MaterialIcons-Regular.otf": "9535bdb0cac41d6af119f5209a345b04",
"delete.html": "22fab6d3ba2b4d565407d2ae2e9345ce",
"privacy.html": "e30dd4f1d6a4ef2872995e093ae43e4d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
