
var loadBsdiff = (() => {
  var _scriptDir = import.meta.url;
  
  return (
async function(moduleArg = {}) {

var d=moduleArg,aa,ba;d.ready=new Promise((a,b)=>{aa=a;ba=b});var ca=Object.assign({},d),da=[],ea="./this.program",fa=(a,b)=>{throw b;},ha="object"==typeof window,k="function"==typeof importScripts,ia="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",ka,la,ma;
if(ia){const {createRequire:a}=await import("module");var require=a(import.meta.url),fs=require("fs"),na=require("path");k?q=na.dirname(q)+"/":q=require("url").fileURLToPath(new URL("./",import.meta.url));ka=(b,c)=>{b=oa(b)?new URL(b):na.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")};ma=b=>{b=ka(b,!0);b.buffer||(b=new Uint8Array(b));return b};la=(b,c,e,f=!0)=>{b=oa(b)?new URL(b):na.normalize(b);fs.readFile(b,f?void 0:"utf8",(g,h)=>{g?e(g):c(f?h.buffer:h)})};
!d.thisProgram&&1<process.argv.length&&(ea=process.argv[1].replace(/\\/g,"/"));da=process.argv.slice(2);fa=(b,c)=>{process.exitCode=b;throw c;}}else if(ha||k)k?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),_scriptDir&&(q=_scriptDir),q.startsWith("blob:")?q="":q=q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1),ka=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ma=a=>{var b=new XMLHttpRequest;b.open("GET",
a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),la=(a,b,c)=>{var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)};var pa=d.print||console.log.bind(console),u=d.printErr||console.error.bind(console);Object.assign(d,ca);ca=null;"object"!=typeof WebAssembly&&v("no native wasm support detected");var qa,ra=!1,sa,w,x,ta,B,D,ua;
function va(){var a=qa.buffer;d.HEAP8=w=new Int8Array(a);d.HEAP16=ta=new Int16Array(a);d.HEAPU8=x=new Uint8Array(a);d.HEAPU16=new Uint16Array(a);d.HEAP32=B=new Int32Array(a);d.HEAPU32=D=new Uint32Array(a);d.HEAPF32=new Float32Array(a);d.HEAPF64=new Float64Array(a);d.HEAP64=ua=new BigInt64Array(a);d.HEAPU64=new BigUint64Array(a)}var wa=[],xa=[],ya=[],za=[],F=0,Aa=null,Ba=null;function Ca(){F--;if(0==F&&(null!==Aa&&(clearInterval(Aa),Aa=null),Ba)){var a=Ba;Ba=null;a()}}
function v(a){a="Aborted("+a+")";u(a);ra=!0;sa=1;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");ba(a);throw a;}var Da=a=>a.startsWith("data:application/octet-stream;base64,"),oa=a=>a.startsWith("file://"),G;if(d.locateFile){if(G="bsdiff.wasm",!Da(G)){var Ea=G;G=d.locateFile?d.locateFile(Ea,q):q+Ea}}else G=(new URL("bsdiff.wasm",import.meta.url)).href;function Fa(a){if(ma)return ma(a);throw"both async and sync fetching of the wasm failed";}
function Ga(a){if(ha||k){if("function"==typeof fetch&&!oa(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw`failed to load wasm binary file at '${a}'`;return b.arrayBuffer()}).catch(()=>Fa(a));if(la)return new Promise((b,c)=>{la(a,e=>b(new Uint8Array(e)),c)})}return Promise.resolve().then(()=>Fa(a))}function Ha(a,b,c){return Ga(a).then(e=>WebAssembly.instantiate(e,b)).then(c,e=>{u(`failed to asynchronously prepare wasm: ${e}`);v(e)})}
function Ia(a,b){var c=G;return"function"!=typeof WebAssembly.instantiateStreaming||Da(c)||oa(c)||ia||"function"!=typeof fetch?Ha(c,a,b):fetch(c,{credentials:"same-origin"}).then(e=>WebAssembly.instantiateStreaming(e,a).then(b,function(f){u(`wasm streaming compile failed: ${f}`);u("falling back to ArrayBuffer instantiation");return Ha(c,a,b)}))}function Ja(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ka=a=>{for(;0<a.length;)a.shift()(d)},La=(a,b)=>{for(var c=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),c++):c&&(a.splice(e,1),c--)}if(b)for(;c;c--)a.unshift("..");return a},H=a=>{var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=La(a.split("/").filter(e=>!!e),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a},Ma=a=>{var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&=b.substr(0,
b.length-1);return a+b},I=a=>{if("/"===a)return"/";a=H(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)},Na=(...a)=>H(a.join("/")),J=(a,b)=>H(a+"/"+b),Oa=()=>{if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues)return c=>crypto.getRandomValues(c);if(ia)try{var a=require("crypto");if(a.randomFillSync)return c=>a.randomFillSync(c);var b=a.randomBytes;return c=>(c.set(b(c.byteLength)),c)}catch(c){}v("initRandomDevice")},Pa=a=>(Pa=Oa())(a),L=(...a)=>{for(var b=
"",c=!1,e=a.length-1;-1<=e&&!c;e--){c=0<=e?a[e]:K.cwd();if("string"!=typeof c)throw new TypeError("Arguments to path.resolve must be strings");if(!c)return"";b=c+"/"+b;c="/"===c.charAt(0)}b=La(b.split("/").filter(f=>!!f),!c).join("/");return(c?"/":"")+b||"."},Qa=(a,b)=>{function c(h){for(var l=0;l<h.length&&""===h[l];l++);for(var p=h.length-1;0<=p&&""===h[p];p--);return l>p?[]:h.slice(l,p-l+1)}a=L(a).substr(1);b=L(b).substr(1);a=c(a.split("/"));b=c(b.split("/"));for(var e=Math.min(a.length,b.length),
f=e,g=0;g<e;g++)if(a[g]!==b[g]){f=g;break}e=[];for(g=f;g<a.length;g++)e.push("..");e=e.concat(b.slice(f));return e.join("/")},Ra="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,M=(a,b)=>{for(var c=b+NaN,e=b;a[e]&&!(e>=c);)++e;if(16<e-b&&a.buffer&&Ra)return Ra.decode(a.subarray(b,e));for(c="";b<e;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?c+=
String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}return c},Sa=[],Ta=a=>{for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);127>=e?b++:2047>=e?b+=2:55296<=e&&57343>=e?(b+=4,++c):b+=3}return b},Ua=(a,b,c,e)=>{if(!(0<e))return 0;var f=c;e=c+e-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var l=a.charCodeAt(++g);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;
b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(c+3>=e)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f};function Va(a){var b=Array(Ta(a)+1);a=Ua(a,b,0,b.length);b.length=a;return b}var Wa=[];function Xa(a,b){Wa[a]={input:[],output:[],P:b};Ya(a,Za)}
var Za={open(a){var b=Wa[a.node.rdev];if(!b)throw new K.u(43);a.tty=b;a.seekable=!1},close(a){a.tty.P.fsync(a.tty)},fsync(a){a.tty.P.fsync(a.tty)},read(a,b,c,e){if(!a.tty||!a.tty.P.Fa)throw new K.u(60);for(var f=0,g=0;g<e;g++){try{var h=a.tty.P.Fa(a.tty)}catch(l){throw new K.u(29);}if(void 0===h&&0===f)throw new K.u(6);if(null===h||void 0===h)break;f++;b[c+g]=h}f&&(a.node.timestamp=Date.now());return f},write(a,b,c,e){if(!a.tty||!a.tty.P.ta)throw new K.u(60);try{for(var f=0;f<e;f++)a.tty.P.ta(a.tty,
b[c+f])}catch(g){throw new K.u(29);}e&&(a.node.timestamp=Date.now());return f}},$a={Fa(){a:{if(!Sa.length){var a=null;if(ia){var b=Buffer.alloc(256),c=0,e=process.stdin.fd;try{c=fs.readSync(e,b)}catch(f){if(f.toString().includes("EOF"))c=0;else throw f;}0<c?a=b.slice(0,c).toString("utf-8"):a=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(a=window.prompt("Input: "),null!==a&&(a+="\n")):"function"==typeof readline&&(a=readline(),null!==a&&(a+="\n"));if(!a){a=null;break a}Sa=
Va(a)}a=Sa.shift()}return a},ta(a,b){null===b||10===b?(pa(M(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},fsync(a){a.output&&0<a.output.length&&(pa(M(a.output,0)),a.output=[])},Ua(){return{eb:25856,gb:5,cb:191,fb:35387,bb:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Va(){return 0},Wa(){return[24,80]}},ab={ta(a,b){null===b||10===b?(u(M(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},fsync(a){a.output&&0<a.output.length&&(u(M(a.output,0)),a.output=[])}},cb=a=>
{a=65536*Math.ceil(a/65536);var b=bb(65536,a);b?(x.fill(0,b,b+a),a=b):a=0;return a};function db(a,b){var c=a.B?a.B.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.B,a.B=new Uint8Array(b),0<a.D&&a.B.set(c.subarray(0,a.D),0))}
var N={O:null,C(){return N.createNode(null,"/",16895,0)},createNode(a,b,c,e){if(24576===(c&61440)||K.isFIFO(c))throw new K.u(63);N.O||(N.O={dir:{node:{G:N.v.G,F:N.v.F,lookup:N.v.lookup,I:N.v.I,rename:N.v.rename,unlink:N.v.unlink,rmdir:N.v.rmdir,readdir:N.v.readdir,symlink:N.v.symlink},stream:{H:N.A.H}},file:{node:{G:N.v.G,F:N.v.F},stream:{H:N.A.H,read:N.A.read,write:N.A.write,$:N.A.$,T:N.A.T,V:N.A.V}},link:{node:{G:N.v.G,F:N.v.F,readlink:N.v.readlink},stream:{}},za:{node:{G:N.v.G,F:N.v.F},stream:K.Pa}});
c=K.createNode(a,b,c,e);O(c.mode)?(c.v=N.O.dir.node,c.A=N.O.dir.stream,c.B={}):K.isFile(c.mode)?(c.v=N.O.file.node,c.A=N.O.file.stream,c.D=0,c.B=null):40960===(c.mode&61440)?(c.v=N.O.link.node,c.A=N.O.link.stream):8192===(c.mode&61440)&&(c.v=N.O.za.node,c.A=N.O.za.stream);c.timestamp=Date.now();a&&(a.B[b]=c,a.timestamp=c.timestamp);return c},jb(a){return a.B?a.B.subarray?a.B.subarray(0,a.D):new Uint8Array(a.B):new Uint8Array(0)},v:{G(a){var b={};b.dev=8192===(a.mode&61440)?a.id:1;b.ino=a.id;b.mode=
a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;O(a.mode)?b.size=4096:K.isFile(a.mode)?b.size=a.D:40960===(a.mode&61440)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.S=4096;b.blocks=Math.ceil(b.size/b.S);return b},F(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);if(void 0!==b.size&&(b=b.size,a.D!=b))if(0==b)a.B=null,a.D=0;else{var c=a.B;a.B=new Uint8Array(b);c&&a.B.set(c.subarray(0,Math.min(b,
a.D)));a.D=b}},lookup(){throw K.la[44];},I(a,b,c,e){return N.createNode(a,b,c,e)},rename(a,b,c){if(O(a.mode)){try{var e=P(b,c)}catch(g){}if(e)for(var f in e.B)throw new K.u(55);}delete a.parent.B[a.name];a.parent.timestamp=Date.now();a.name=c;b.B[c]=a;b.timestamp=a.parent.timestamp;a.parent=b},unlink(a,b){delete a.B[b];a.timestamp=Date.now()},rmdir(a,b){var c=P(a,b),e;for(e in c.B)throw new K.u(55);delete a.B[b];a.timestamp=Date.now()},readdir(a){var b=[".",".."],c;for(c of Object.keys(a.B))b.push(c);
return b},symlink(a,b,c){a=N.createNode(a,b,41471,0);a.link=c;return a},readlink(a){if(40960!==(a.mode&61440))throw new K.u(28);return a.link}},A:{read(a,b,c,e,f){var g=a.node.B;if(f>=a.node.D)return 0;a=Math.min(a.node.D-f,e);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(e=0;e<a;e++)b[c+e]=g[f+e];return a},write(a,b,c,e,f,g){b.buffer===w.buffer&&(g=!1);if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.B||a.B.subarray)){if(g)return a.B=b.subarray(c,c+e),a.D=e;if(0===a.D&&
0===f)return a.B=b.slice(c,c+e),a.D=e;if(f+e<=a.D)return a.B.set(b.subarray(c,c+e),f),e}db(a,f+e);if(a.B.subarray&&b.subarray)a.B.set(b.subarray(c,c+e),f);else for(g=0;g<e;g++)a.B[f+g]=b[c+g];a.D=Math.max(a.D,f+e);return e},H(a,b,c){1===c?b+=a.position:2===c&&K.isFile(a.node.mode)&&(b+=a.node.D);if(0>b)throw new K.u(28);return b},$(a,b,c){db(a.node,b+c);a.node.D=Math.max(a.node.D,b+c)},T(a,b,c,e,f){if(!K.isFile(a.node.mode))throw new K.u(43);a=a.node.B;if(f&2||a.buffer!==w.buffer){if(0<c||c+b<a.length)a.subarray?
a=a.subarray(c,c+b):a=Array.prototype.slice.call(a,c,c+b);c=!0;b=cb(b);if(!b)throw new K.u(48);w.set(a,b)}else c=!1,b=a.byteOffset;return{sa:b,ha:c}},V(a,b,c,e){N.A.write(a,b,0,e,c,!1);return 0}}},eb=(a,b,c)=>{var e=`al ${a}`;la(a,f=>{b(new Uint8Array(f));e&&Ca(e)},()=>{if(c)c();else throw`Loading data file "${a}" failed.`;});e&&F++},fb=[],gb=(a,b,c,e)=>{"undefined"!=typeof Browser&&Browser.X();var f=!1;fb.forEach(g=>{!f&&g.canHandle(b)&&(g.handle(a,b,c,e),f=!0)});return f},hb=(a,b)=>{var c=0;a&&
(c|=365);b&&(c|=146);return c},ib={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,
EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,
ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};function Q(a){return ib[a.code]}
function jb(a){try{var b=fs.lstatSync(a);R.ea&&(b.mode=b.mode|(b.mode&292)>>2)}catch(c){if(!c.code)throw c;throw new K.u(Q(c));}return b.mode}function S(a){for(var b=[];a.parent!==a;)b.push(a.name),a=a.parent;b.push(a.C.Y.root);b.reverse();return Na(...b)}
var R={ea:!1,xa(){R.ea=!!process.platform.match(/^win/);var a=process.binding("constants");a.fs&&(a=a.fs);R.Ea={1024:a.O_APPEND,64:a.O_CREAT,128:a.O_EXCL,256:a.O_NOCTTY,0:a.O_RDONLY,2:a.O_RDWR,4096:a.O_SYNC,512:a.O_TRUNC,1:a.O_WRONLY,131072:a.O_NOFOLLOW}},C(a){return R.createNode(null,"/",jb(a.Y.root),0)},createNode(a,b,c){if(!O(c)&&!K.isFile(c)&&40960!==(c&61440))throw new K.u(28);a=K.createNode(a,b,c);a.v=R.v;a.A=R.A;return a},v:{G(a){a=S(a);try{var b=fs.lstatSync(a)}catch(c){if(!c.code)throw c;
throw new K.u(Q(c));}R.ea&&!b.S&&(b.S=4096);R.ea&&!b.blocks&&(b.blocks=(b.size+b.S-1)/b.S|0);return{dev:b.dev,ino:b.ino,mode:b.mode,nlink:b.nlink,uid:b.uid,gid:b.gid,rdev:b.rdev,size:b.size,atime:b.atime,mtime:b.mtime,ctime:b.ctime,S:b.S,blocks:b.blocks}},F(a,b){var c=S(a);try{void 0!==b.mode&&(fs.chmodSync(c,b.mode),a.mode=b.mode),void 0!==b.size&&fs.truncateSync(c,b.size)}catch(e){if(!e.code)throw e;throw new K.u(Q(e));}},lookup(a,b){var c=J(S(a),b);c=jb(c);return R.createNode(a,b,c)},I(a,b,c,e){a=
R.createNode(a,b,c,e);b=S(a);try{O(a.mode)?fs.mkdirSync(b,a.mode):fs.writeFileSync(b,"",{mode:a.mode})}catch(f){if(!f.code)throw f;throw new K.u(Q(f));}return a},rename(a,b,c){var e=S(a);b=J(S(b),c);try{fs.renameSync(e,b)}catch(f){if(!f.code)throw f;throw new K.u(Q(f));}a.name=c},unlink(a,b){a=J(S(a),b);try{fs.unlinkSync(a)}catch(c){if(!c.code)throw c;throw new K.u(Q(c));}},rmdir(a,b){a=J(S(a),b);try{fs.rmdirSync(a)}catch(c){if(!c.code)throw c;throw new K.u(Q(c));}},readdir(a){a=S(a);try{return fs.readdirSync(a)}catch(b){if(!b.code)throw b;
throw new K.u(Q(b));}},symlink(a,b,c){a=J(S(a),b);try{fs.symlinkSync(c,a)}catch(e){if(!e.code)throw e;throw new K.u(Q(e));}},readlink(a){var b=S(a);try{return b=fs.readlinkSync(b),b=na.relative(na.resolve(a.C.Y.root),b)}catch(c){if(!c.code)throw c;if("UNKNOWN"===c.code)throw new K.u(28);throw new K.u(Q(c));}}},A:{open(a){var b=S(a.node);try{if(K.isFile(a.node.mode)){var c=fs,e=c.openSync,f=a.flags;f&=-2721793;var g=0,h;for(h in R.Ea)f&h&&(g|=R.Ea[h],f^=h);if(f)throw new K.u(28);a.ba=e.call(c,b,g)}}catch(l){if(!l.code)throw l;
throw new K.u(Q(l));}},close(a){try{K.isFile(a.node.mode)&&a.ba&&fs.closeSync(a.ba)}catch(b){if(!b.code)throw b;throw new K.u(Q(b));}},read(a,b,c,e,f){if(0===e)return 0;try{return fs.readSync(a.ba,new Int8Array(b.buffer,c,e),{position:f})}catch(g){throw new K.u(Q(g));}},write(a,b,c,e,f){try{return fs.writeSync(a.ba,new Int8Array(b.buffer,c,e),{position:f})}catch(g){throw new K.u(Q(g));}},H(a,b,c){if(1===c)b+=a.position;else if(2===c&&K.isFile(a.node.mode))try{b+=fs.fstatSync(a.ba).size}catch(e){throw new K.u(Q(e));
}if(0>b)throw new K.u(28);return b},T(a,b,c){if(!K.isFile(a.node.mode))throw new K.u(43);var e=cb(b);R.A.read(a,w,e,b,c);return{sa:e,ha:!0}},V(a,b,c,e){R.A.write(a,b,0,e,c,!1);return 0}}},T={ga:16895,Z:33279,va:null,C(a){function b(g){g=g.split("/");for(var h=e,l=0;l<g.length-1;l++){var p=g.slice(0,l+1).join("/");let n,r;(n=f)[r=p]||(n[r]=T.createNode(h,g[l],T.ga,0));h=f[p]}return h}function c(g){g=g.split("/");return g[g.length-1]}k||v();T.va||(T.va=new FileReaderSync);var e=T.createNode(null,"/",
T.ga,0),f={};Array.prototype.forEach.call(a.Y.files||[],function(g){T.createNode(b(g.name),c(g.name),T.Z,0,g,g.lastModifiedDate)});(a.Y.blobs||[]).forEach(function(g){T.createNode(b(g.name),c(g.name),T.Z,0,g.data)});(a.Y.packages||[]).forEach(function(g){g.metadata.files.forEach(function(h){var l=h.filename.substr(1);T.createNode(b(l),c(l),T.Z,0,g.blob.slice(h.start,h.end))})});return e},createNode(a,b,c,e,f,g){e=K.createNode(a,b,c);e.mode=c;e.v=T.v;e.A=T.A;e.timestamp=(g||new Date).getTime();T.Z!==
T.ga||v();c===T.Z?(e.size=f.size,e.B=f):(e.size=4096,e.B={});a&&(a.B[b]=e);return e},v:{G(a){return{dev:1,ino:a.id,mode:a.mode,nlink:1,uid:0,gid:0,rdev:0,size:a.size,atime:new Date(a.timestamp),mtime:new Date(a.timestamp),ctime:new Date(a.timestamp),S:4096,blocks:Math.ceil(a.size/4096)}},F(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp)},lookup(){throw new K.u(44);},I(){throw new K.u(63);},rename(){throw new K.u(63);},unlink(){throw new K.u(63);},rmdir(){throw new K.u(63);
},readdir(a){var b=[".",".."],c;for(c of Object.keys(a.B))b.push(c);return b},symlink(){throw new K.u(63);}},A:{read(a,b,c,e,f){if(f>=a.node.size)return 0;a=a.node.B.slice(f,f+e);e=T.va.readAsArrayBuffer(a);b.set(new Uint8Array(e),c);return a.size},write(){throw new K.u(29);},H(a,b,c){1===c?b+=a.position:2===c&&K.isFile(a.node.mode)&&(b+=a.node.size);if(0>b)throw new K.u(28);return b}}};function Ya(a,b){K.Da[a]={A:b}}function O(a){return 16384===(a&61440)}
function P(a,b){var c=O(a.mode)?(c=U(a,"x"))?c:a.v.lookup?0:2:54;if(c)throw new K.u(c);for(c=K.N[kb(a.id,b)];c;c=c.W){var e=c.name;if(c.parent.id===a.id&&e===b)return c}return K.lookup(a,b)}
function V(a,b={}){a=L(a);if(!a)return{path:"",node:null};b=Object.assign({ka:!0,wa:0},b);if(8<b.wa)throw new K.u(32);a=a.split("/").filter(h=>!!h);for(var c=K.root,e="/",f=0;f<a.length;f++){var g=f===a.length-1;if(g&&b.parent)break;c=P(c,a[f]);e=H(e+"/"+a[f]);c.J&&(!g||g&&b.ka)&&(c=c.J.root);if(!g||b.M)for(g=0;40960===(c.mode&61440);)if(c=K.readlink(e),e=L(Ma(e),c),c=V(e,{wa:b.wa+1}).node,40<g++)throw new K.u(32);}return{path:e,node:c}}
function W(a){for(var b;;){if(K.Ha(a))return a=a.C.Ia,b?"/"!==a[a.length-1]?`${a}/${b}`:a+b:a;b=b?`${a.name}/${b}`:a.name;a=a.parent}}function kb(a,b){for(var c=0,e=0;e<b.length;e++)c=(c<<5)-c+b.charCodeAt(e)|0;return(a+c>>>0)%K.N.length}function lb(a){var b=kb(a.parent.id,a.name);a.W=K.N[b];K.N[b]=a}function mb(a){var b=kb(a.parent.id,a.name);if(K.N[b]===a)K.N[b]=a.W;else for(b=K.N[b];b;){if(b.W===a){b.W=a.W;break}b=b.W}}function nb(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b}
function U(a,b){if(K.na)return 0;if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0}function ob(a,b){try{return P(a,b),20}catch(c){}return U(a,"wx")}function pb(a,b,c){try{var e=P(a,b)}catch(f){return f.L}if(a=U(a,"wx"))return a;if(c){if(!O(e.mode))return 54;if(K.Ha(e)||W(e)===K.cwd())return 10}else if(O(e.mode))return 31;return 0}function qb(){for(var a=0;a<=K.La;a++)if(!K.streams[a])return a;throw new K.u(33);}
function X(a){a=K.Ta(a);if(!a)throw new K.u(8);return a}function rb(a){var b=-1;K.da||(K.da=function(){this.R={}},K.da.prototype={},Object.defineProperties(K.da.prototype,{object:{get(){return this.node},set(c){this.node=c}},flags:{get(){return this.R.flags},set(c){this.R.flags=c}},position:{get(){return this.R.position},set(c){this.R.position=c}}}));a=Object.assign(new K.da,a);-1==b&&(b=qb());a.fd=b;return K.streams[b]=a}
function sb(a){var b=[];for(a=[a];a.length;){var c=a.pop();b.push(c);a.push(...c.aa)}return b}function tb(a,b,c){"undefined"==typeof c&&(c=b,b=438);return K.I(a,b|8192,c)}
function ub(){K.mkdir("/dev");Ya(K.U(1,3),{read:()=>0,write:(e,f,g,h)=>h});tb("/dev/null",K.U(1,3));Xa(K.U(5,0),$a);Xa(K.U(6,0),ab);tb("/dev/tty",K.U(5,0));tb("/dev/tty1",K.U(6,0));var a=new Uint8Array(1024),b=0,c=()=>{0===b&&(b=Pa(a).byteLength);return a[--b]};K.K("/dev","random",c);K.K("/dev","urandom",c);K.mkdir("/dev/shm");K.mkdir("/dev/shm/tmp")}
function vb(){K.mkdir("/proc");var a=K.mkdir("/proc/self");K.mkdir("/proc/self/fd");K.C({C(){var b=K.createNode(a,"fd",16895,73);b.v={lookup(c,e){var f=X(+e);c={parent:null,C:{Ia:"fake"},v:{readlink:()=>f.path}};return c.parent=c}};return b}},{},"/proc/self/fd")}function wb(a,b,c,e){a=J("string"==typeof a?a:W(a),b);return K.create(a,hb(c,e))}
function xb(a){if(!(a.Xa||a.Ya||a.link||a.B)){if("undefined"!=typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(ka)try{a.B=Va(ka(a.url)),a.D=a.B.length}catch(b){throw new K.u(29);}else throw Error("Cannot load without read() or XMLHttpRequest.");}}
var K={root:null,aa:[],Da:{},streams:[],Za:1,N:null,Ca:"/",oa:!1,na:!0,u:class{constructor(a){this.name="ErrnoError";this.L=a}},la:{},Ra:null,fa:0,createNode(a,b,c,e){a=new K.Ka(a,b,c,e);lb(a);return a},Ha(a){return a===a.parent},isFile(a){return 32768===(a&61440)},isFIFO(a){return 4096===(a&61440)},isSocket(a){return 49152===(a&49152)},La:4096,Ta:a=>K.streams[a],Pa:{open(a){a.A=K.Sa(a.node.rdev).A;a.A.open?.(a)},H(){throw new K.u(70);}},ra:a=>a>>8,kb:a=>a&255,U:(a,b)=>a<<8|b,Sa:a=>K.Da[a],Ja(a,b){function c(h){K.fa--;
return b(h)}function e(h){if(h){if(!e.Qa)return e.Qa=!0,c(h)}else++g>=f.length&&c(null)}"function"==typeof a&&(b=a,a=!1);K.fa++;1<K.fa&&u(`warning: ${K.fa} FS.syncfs operations in flight at once, probably just doing extra work`);var f=sb(K.root.C),g=0;f.forEach(h=>{if(!h.type.Ja)return e(null);h.type.Ja(h,a,e)})},C(a,b,c){var e="/"===c;if(e&&K.root)throw new K.u(10);if(!e&&c){var f=V(c,{ka:!1});c=f.path;f=f.node;if(f.J)throw new K.u(10);if(!O(f.mode))throw new K.u(54);}b={type:a,Y:b,Ia:c,aa:[]};a=
a.C(b);a.C=b;b.root=a;e?K.root=a:f&&(f.J=b,f.C&&f.C.aa.push(b));return a},ob(a){a=V(a,{ka:!1});if(!a.node.J)throw new K.u(28);a=a.node;var b=a.J,c=sb(b);Object.keys(K.N).forEach(e=>{for(e=K.N[e];e;){var f=e.W;c.includes(e.C)&&mb(e);e=f}});a.J=null;a.C.aa.splice(a.C.aa.indexOf(b),1)},lookup(a,b){return a.v.lookup(a,b)},I(a,b,c){var e=V(a,{parent:!0}).node;a=I(a);if(!a||"."===a||".."===a)throw new K.u(28);var f=ob(e,a);if(f)throw new K.u(f);if(!e.v.I)throw new K.u(63);return e.v.I(e,a,b,c)},create(a,
b){return K.I(a,(void 0!==b?b:438)&4095|32768,0)},mkdir(a,b){return K.I(a,(void 0!==b?b:511)&1023|16384,0)},lb(a,b){a=a.split("/");for(var c="",e=0;e<a.length;++e)if(a[e]){c+="/"+a[e];try{K.mkdir(c,b)}catch(f){if(20!=f.L)throw f;}}},symlink(a,b){if(!L(a))throw new K.u(44);var c=V(b,{parent:!0}).node;if(!c)throw new K.u(44);b=I(b);var e=ob(c,b);if(e)throw new K.u(e);if(!c.v.symlink)throw new K.u(63);return c.v.symlink(c,b,a)},rename(a,b){var c=Ma(a),e=Ma(b),f=I(a),g=I(b);var h=V(a,{parent:!0});var l=
h.node;h=V(b,{parent:!0});h=h.node;if(!l||!h)throw new K.u(44);if(l.C!==h.C)throw new K.u(75);var p=P(l,f);a=Qa(a,e);if("."!==a.charAt(0))throw new K.u(28);a=Qa(b,c);if("."!==a.charAt(0))throw new K.u(55);try{var n=P(h,g)}catch(r){}if(p!==n){b=O(p.mode);if(f=pb(l,f,b))throw new K.u(f);if(f=n?pb(h,g,b):ob(h,g))throw new K.u(f);if(!l.v.rename)throw new K.u(63);if(p.J||n&&n.J)throw new K.u(10);if(h!==l&&(f=U(l,"w")))throw new K.u(f);mb(p);try{l.v.rename(p,h,g)}catch(r){throw r;}finally{lb(p)}}},rmdir(a){var b=
V(a,{parent:!0}).node;a=I(a);var c=P(b,a),e=pb(b,a,!0);if(e)throw new K.u(e);if(!b.v.rmdir)throw new K.u(63);if(c.J)throw new K.u(10);b.v.rmdir(b,a);mb(c)},readdir(a){a=V(a,{M:!0}).node;if(!a.v.readdir)throw new K.u(54);return a.v.readdir(a)},unlink(a){var b=V(a,{parent:!0}).node;if(!b)throw new K.u(44);a=I(a);var c=P(b,a),e=pb(b,a,!1);if(e)throw new K.u(e);if(!b.v.unlink)throw new K.u(63);if(c.J)throw new K.u(10);b.v.unlink(b,a);mb(c)},readlink(a){a=V(a).node;if(!a)throw new K.u(44);if(!a.v.readlink)throw new K.u(28);
return L(W(a.parent),a.v.readlink(a))},stat(a,b){a=V(a,{M:!b}).node;if(!a)throw new K.u(44);if(!a.v.G)throw new K.u(63);return a.v.G(a)},lstat(a){return K.stat(a,!0)},chmod(a,b,c){a="string"==typeof a?V(a,{M:!c}).node:a;if(!a.v.F)throw new K.u(63);a.v.F(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()})},lchmod(a,b){K.chmod(a,b,!0)},fchmod(a,b){a=X(a);K.chmod(a.node,b)},chown(a,b,c,e){a="string"==typeof a?V(a,{M:!e}).node:a;if(!a.v.F)throw new K.u(63);a.v.F(a,{timestamp:Date.now()})},lchown(a,b,c){K.chown(a,
b,c,!0)},fchown(a,b,c){a=X(a);K.chown(a.node,b,c)},truncate(a,b){if(0>b)throw new K.u(28);a="string"==typeof a?V(a,{M:!0}).node:a;if(!a.v.F)throw new K.u(63);if(O(a.mode))throw new K.u(31);if(!K.isFile(a.mode))throw new K.u(28);var c=U(a,"w");if(c)throw new K.u(c);a.v.F(a,{size:b,timestamp:Date.now()})},ib(a,b){a=X(a);if(0===(a.flags&2097155))throw new K.u(28);K.truncate(a.node,b)},pb(a,b,c){a=V(a,{M:!0}).node;a.v.F(a,{timestamp:Math.max(b,c)})},open(a,b,c){if(""===a)throw new K.u(44);if("string"==
typeof b){var e={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[b];if("undefined"==typeof e)throw Error(`Unknown file open mode: ${b}`);b=e}c=b&64?("undefined"==typeof c?438:c)&4095|32768:0;if("object"==typeof a)var f=a;else{a=H(a);try{f=V(a,{M:!(b&131072)}).node}catch(g){}}e=!1;if(b&64)if(f){if(b&128)throw new K.u(20);}else f=K.I(a,c,0),e=!0;if(!f)throw new K.u(44);8192===(f.mode&61440)&&(b&=-513);if(b&65536&&!O(f.mode))throw new K.u(54);if(!e&&(c=f?40960===(f.mode&61440)?32:O(f.mode)&&("r"!==nb(b)||
b&512)?31:U(f,nb(b)):44))throw new K.u(c);b&512&&!e&&K.truncate(f,0);b&=-131713;f=rb({node:f,path:W(f),flags:b,seekable:!0,position:0,A:f.A,$a:[],error:!1});f.A.open&&f.A.open(f);!d.logReadFiles||b&1||(K.ua||(K.ua={}),a in K.ua||(K.ua[a]=1));return f},close(a){if(null===a.fd)throw new K.u(8);a.ma&&(a.ma=null);try{a.A.close&&a.A.close(a)}catch(b){throw b;}finally{K.streams[a.fd]=null}a.fd=null},H(a,b,c){if(null===a.fd)throw new K.u(8);if(!a.seekable||!a.A.H)throw new K.u(70);if(0!=c&&1!=c&&2!=c)throw new K.u(28);
a.position=a.A.H(a,b,c);a.$a=[];return a.position},read(a,b,c,e,f){if(0>e||0>f)throw new K.u(28);if(null===a.fd)throw new K.u(8);if(1===(a.flags&2097155))throw new K.u(8);if(O(a.node.mode))throw new K.u(31);if(!a.A.read)throw new K.u(28);var g="undefined"!=typeof f;if(!g)f=a.position;else if(!a.seekable)throw new K.u(70);b=a.A.read(a,b,c,e,f);g||(a.position+=b);return b},write(a,b,c,e,f,g){if(0>e||0>f)throw new K.u(28);if(null===a.fd)throw new K.u(8);if(0===(a.flags&2097155))throw new K.u(8);if(O(a.node.mode))throw new K.u(31);
if(!a.A.write)throw new K.u(28);a.seekable&&a.flags&1024&&K.H(a,0,2);var h="undefined"!=typeof f;if(!h)f=a.position;else if(!a.seekable)throw new K.u(70);b=a.A.write(a,b,c,e,f,g);h||(a.position+=b);return b},$(a,b,c){if(null===a.fd)throw new K.u(8);if(0>b||0>=c)throw new K.u(28);if(0===(a.flags&2097155))throw new K.u(8);if(!K.isFile(a.node.mode)&&!O(a.node.mode))throw new K.u(43);if(!a.A.$)throw new K.u(138);a.A.$(a,b,c)},T(a,b,c,e,f){if(0!==(e&2)&&0===(f&2)&&2!==(a.flags&2097155))throw new K.u(2);
if(1===(a.flags&2097155))throw new K.u(2);if(!a.A.T)throw new K.u(43);return a.A.T(a,b,c,e,f)},V(a,b,c,e,f){return a.A.V?a.A.V(a,b,c,e,f):0},mb:()=>0,pa(a,b,c){if(!a.A.pa)throw new K.u(59);return a.A.pa(a,b,c)},readFile(a,b={}){b.flags=b.flags||0;b.encoding=b.encoding||"binary";if("utf8"!==b.encoding&&"binary"!==b.encoding)throw Error(`Invalid encoding type "${b.encoding}"`);var c,e=K.open(a,b.flags);a=K.stat(a).size;var f=new Uint8Array(a);K.read(e,f,0,a,0);"utf8"===b.encoding?c=M(f,0):"binary"===
b.encoding&&(c=f);K.close(e);return c},writeFile(a,b,c={}){c.flags=c.flags||577;a=K.open(a,c.flags,c.mode);if("string"==typeof b){var e=new Uint8Array(Ta(b)+1);b=Ua(b,e,0,e.length);K.write(a,e,0,b,void 0,c.Oa)}else if(ArrayBuffer.isView(b))K.write(a,b,0,b.byteLength,void 0,c.Oa);else throw Error("Unsupported data type");K.close(a)},cwd:()=>K.Ca,chdir(a){a=V(a,{M:!0});if(null===a.node)throw new K.u(44);if(!O(a.node.mode))throw new K.u(54);var b=U(a.node,"x");if(b)throw new K.u(b);K.Ca=a.path},xa(){[44].forEach(a=>
{K.la[a]=new K.u(a);K.la[a].stack="<generic error, no stack>"});K.N=Array(4096);K.C(N,{},"/");K.mkdir("/tmp");K.mkdir("/home");K.mkdir("/home/web_user");ub();vb();K.Ra={MEMFS:N,NODEFS:R,WORKERFS:T}},X(a,b,c){K.X.oa=!0;d.stdin=a||d.stdin;d.stdout=b||d.stdout;d.stderr=c||d.stderr;d.stdin?K.K("/dev","stdin",d.stdin):K.symlink("/dev/tty","/dev/stdin");d.stdout?K.K("/dev","stdout",null,d.stdout):K.symlink("/dev/tty","/dev/stdout");d.stderr?K.K("/dev","stderr",null,d.stderr):K.symlink("/dev/tty1","/dev/stderr");
K.open("/dev/stdin",0);K.open("/dev/stdout",1);K.open("/dev/stderr",1)},nb(){K.X.oa=!1;for(var a=0;a<K.streams.length;a++){var b=K.streams[a];b&&K.close(b)}},hb(a,b){try{var c=V(a,{M:!b});a=c.path}catch(g){}var e=!1,f=null;try{c=V(a,{parent:!0}),I(a),c=V(a,{M:!b}),e=!0,f=c.node}catch(g){}return e?f:null},Aa(a,b){a="string"==typeof a?a:W(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var e=H(a+"/"+c);try{K.mkdir(e)}catch(f){}a=e}}return e},ia(a,b,c,e,f,g){var h=b;a&&(a="string"==typeof a?
a:W(a),h=b?H(a+"/"+b):a);a=hb(e,f);h=K.create(h,a);if(c){if("string"==typeof c){b=Array(c.length);e=0;for(f=c.length;e<f;++e)b[e]=c.charCodeAt(e);c=b}K.chmod(h,a|146);b=K.open(h,577);K.write(b,c,0,c.length,0,g);K.close(b);K.chmod(h,a)}},K(a,b,c,e){a=J("string"==typeof a?a:W(a),b);b=hb(!!c,!!e);K.K.ra||(K.K.ra=64);var f=K.U(K.K.ra++,0);Ya(f,{open(g){g.seekable=!1},close(){e?.buffer?.length&&e(10)},read(g,h,l,p){for(var n=0,r=0;r<p;r++){try{var m=c()}catch(t){throw new K.u(29);}if(void 0===m&&0===n)throw new K.u(6);
if(null===m||void 0===m)break;n++;h[l+r]=m}n&&(g.node.timestamp=Date.now());return n},write(g,h,l,p){for(var n=0;n<p;n++)try{e(h[l+n])}catch(r){throw new K.u(29);}p&&(g.node.timestamp=Date.now());return n}});return tb(a,b,f)},ja(a,b,c,e,f){function g(){this.qa=!1;this.R=[]}function h(m,t,y,z,A){m=m.node.B;if(A>=m.length)return 0;z=Math.min(m.length-A,z);if(m.slice)for(var C=0;C<z;C++)t[y+C]=m[A+C];else for(C=0;C<z;C++)t[y+C]=m.get(A+C);return z}g.prototype.get=function(m){if(!(m>this.length-1||0>
m)){var t=m%this.chunkSize;return this.Ga(m/this.chunkSize|0)[t]}};g.prototype.ab=function(m){this.Ga=m};g.prototype.ya=function(){var m=new XMLHttpRequest;m.open("HEAD",c,!1);m.send(null);if(!(200<=m.status&&300>m.status||304===m.status))throw Error("Couldn't load "+c+". Status: "+m.status);var t=Number(m.getResponseHeader("Content-length")),y,z=(y=m.getResponseHeader("Accept-Ranges"))&&"bytes"===y;m=(y=m.getResponseHeader("Content-Encoding"))&&"gzip"===y;var A=1048576;z||(A=t);var C=this;C.ab(Y=>
{var ja=Y*A,Z=(Y+1)*A-1;Z=Math.min(Z,t-1);if("undefined"==typeof C.R[Y]){var Jb=C.R;if(ja>Z)throw Error("invalid range ("+ja+", "+Z+") or no bytes requested!");if(Z>t-1)throw Error("only "+t+" bytes available! programmer error!");var E=new XMLHttpRequest;E.open("GET",c,!1);t!==A&&E.setRequestHeader("Range","bytes="+ja+"-"+Z);E.responseType="arraybuffer";E.overrideMimeType&&E.overrideMimeType("text/plain; charset=x-user-defined");E.send(null);if(!(200<=E.status&&300>E.status||304===E.status))throw Error("Couldn't load "+
c+". Status: "+E.status);ja=void 0!==E.response?new Uint8Array(E.response||[]):Va(E.responseText||"");Jb[Y]=ja}if("undefined"==typeof C.R[Y])throw Error("doXHR failed!");return C.R[Y]});if(m||!t)A=t=1,A=t=this.Ga(0).length,pa("LazyFiles on gzip forces download of the whole file when length is accessed");this.Na=t;this.Ma=A;this.qa=!0};if("undefined"!=typeof XMLHttpRequest){if(!k)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
var l=new g;Object.defineProperties(l,{length:{get:function(){this.qa||this.ya();return this.Na}},chunkSize:{get:function(){this.qa||this.ya();return this.Ma}}});var p=void 0}else p=c,l=void 0;var n=wb(a,b,e,f);l?n.B=l:p&&(n.B=null,n.url=p);Object.defineProperties(n,{D:{get:function(){return this.B.length}}});var r={};Object.keys(n.A).forEach(m=>{var t=n.A[m];r[m]=(...y)=>{xb(n);return t(...y)}});r.read=(m,t,y,z,A)=>{xb(n);return h(m,t,y,z,A)};r.T=(m,t,y)=>{xb(n);var z=cb(t);if(!z)throw new K.u(48);
h(m,w,z,t,y);return{sa:z,ha:!0}};n.A=r;return n}},yb=void 0;function zb(){var a=B[+yb>>2];yb+=4;return a}var Ab=a=>{sa=sa=a;ra=!0;fa(a,new Ja(a))};function Bb(a,b,c,e){a||=this;this.parent=a;this.C=a.C;this.J=null;this.id=K.Za++;this.name=b;this.mode=c;this.v={};this.A={};this.rdev=e}
Object.defineProperties(Bb.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Ya:{get:function(){return O(this.mode)}},Xa:{get:function(){return 8192===(this.mode&61440)}}});K.Ka=Bb;
K.Ba=(a,b,c,e,f,g,h,l,p,n)=>{function r(y){function z(A){n?.();l||K.ia(a,b,A,e,f,p);g?.();Ca(t)}gb(y,m,z,()=>{h?.();Ca(t)})||z(y)}var m=b?L(H(a+"/"+b)):a,t=`cp ${m}`;F++;"string"==typeof c?eb(c,r,h):r(c)};K.xa();d.FS_createPath=K.Aa;d.FS_createDataFile=K.ia;d.FS_createPreloadedFile=K.Ba;d.FS_unlink=K.unlink;d.FS_createLazyFile=K.ja;d.FS_createDevice=K.K;ia&&R.xa();
var Cb={l:function(a,b,c){yb=c;try{var e=X(a);switch(b){case 21509:return e.tty?0:-59;case 21505:if(!e.tty)return-59;if(e.tty.P.Ua){a=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var f=zb();B[f>>2]=25856;B[f+4>>2]=5;B[f+8>>2]=191;B[f+12>>2]=35387;for(var g=0;32>g;g++)w[f+g+17]=a[g]||0}return 0;case 21510:case 21511:case 21512:return e.tty?0:-59;case 21506:case 21507:case 21508:if(!e.tty)return-59;if(e.tty.P.Va)for(f=zb(),a=[],g=0;32>g;g++)a.push(w[f+g+17]);return 0;
case 21519:if(!e.tty)return-59;f=zb();return B[f>>2]=0;case 21520:return e.tty?-28:-59;case 21531:return f=zb(),K.pa(e,b,f);case 21523:if(!e.tty)return-59;e.tty.P.Wa&&(g=[24,80],f=zb(),ta[f>>1]=g[0],ta[f+2>>1]=g[1]);return 0;case 21524:return e.tty?0:-59;case 21515:return e.tty?0:-59;default:return-28}}catch(h){if("undefined"==typeof K||"ErrnoError"!==h.name)throw h;return-h.L}},c:function(a,b,c,e){yb=e;try{b=b?M(x,b):"";var f=b;if("/"===f.charAt(0))b=f;else{var g=-100===a?K.cwd():X(a).path;if(0==
f.length)throw new K.u(44);b=H(g+"/"+f)}var h=e?zb():0;return K.open(b,c,h).fd}catch(l){if("undefined"==typeof K||"ErrnoError"!==l.name)throw l;return-l.L}},d:(a,b)=>{Ua(ea,x,a,b)},e:function(a,b,c,e,f,g,h){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f);try{if(isNaN(f))return 61;var l=X(e),p=K.T(l,a,f,b,c),n=p.sa;B[g>>2]=p.ha;D[h>>2]=n;return 0}catch(r){if("undefined"==typeof K||"ErrnoError"!==r.name)throw r;return-r.L}},f:function(a,b,c,e,f,g){g=-9007199254740992>g||9007199254740992<g?NaN:
Number(g);try{if(isNaN(g))return 61;var h=X(f);if(c&2){c=g;if(!K.isFile(h.node.mode))throw new K.u(43);if(!(e&2)){var l=x.slice(a,a+b);K.V(h,l,c,b,e)}}}catch(p){if("undefined"==typeof K||"ErrnoError"!==p.name)throw p;return-p.L}},j:()=>{v("")},k:a=>{var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);var f=Math;e=Math.max(a,e);a:{f=(f.min.call(f,2147483648,e+(65536-e%65536)%65536)-qa.buffer.byteLength+65535)/65536;try{qa.grow(f);va();var g=
1;break a}catch(h){}g=void 0}if(g)return!0}return!1},b:Ab,a:function(a){try{var b=X(a);K.close(b);return 0}catch(c){if("undefined"==typeof K||"ErrnoError"!==c.name)throw c;return c.L}},i:function(a,b,c,e){try{a:{var f=X(a);a=b;for(var g,h=b=0;h<c;h++){var l=D[a>>2],p=D[a+4>>2];a+=8;var n=K.read(f,w,l,p,g);if(0>n){var r=-1;break a}b+=n;if(n<p)break;"undefined"!==typeof g&&(g+=n)}r=b}D[e>>2]=r;return 0}catch(m){if("undefined"==typeof K||"ErrnoError"!==m.name)throw m;return m.L}},g:function(a,b,c,e){b=
-9007199254740992>b||9007199254740992<b?NaN:Number(b);try{if(isNaN(b))return 61;var f=X(a);K.H(f,b,c);ua[e>>3]=BigInt(f.position);f.ma&&0===b&&0===c&&(f.ma=null);return 0}catch(g){if("undefined"==typeof K||"ErrnoError"!==g.name)throw g;return g.L}},h:function(a,b,c,e){try{a:{var f=X(a);a=b;for(var g,h=b=0;h<c;h++){var l=D[a>>2],p=D[a+4>>2];a+=8;var n=K.write(f,w,l,p,g);if(0>n){var r=-1;break a}b+=n;"undefined"!==typeof g&&(g+=n)}r=b}D[e>>2]=r;return 0}catch(m){if("undefined"==typeof K||"ErrnoError"!==
m.name)throw m;return m.L}}},Db=function(){var a={a:Cb};F++;Ia(a,function(b){Db=b.instance.exports;qa=Db.m;va();xa.unshift(Db.n);Ca("wasm-instantiate")}).catch(ba);return{}}(),Eb=d._main=(a,b)=>(Eb=d._main=Db.o)(a,b),bb=(a,b)=>(bb=Db.q)(a,b),Fb=a=>(Fb=Db.s)(a);d.addRunDependency=function(){F++};d.removeRunDependency=Ca;d.FS_createPath=K.Aa;d.FS_createLazyFile=K.ja;d.FS_createDevice=K.K;d.callMain=Gb;d.ENV={};d.FS_createPreloadedFile=K.Ba;d.FS=K;d.FS_createDataFile=K.ia;d.FS_unlink=K.unlink;
d.NODEFS=R;d.WORKERFS=T;var Hb;Ba=function Ib(){Hb||Kb();Hb||(Ba=Ib)};function Gb(a=[]){var b=Eb;a.unshift(ea);var c=a.length,e=Fb(4*(c+1)),f=e;a.forEach(h=>{var l=D,p=f>>2,n=Ta(h)+1,r=Fb(n);Ua(h,x,r,n);l[p]=r;f+=4});D[f>>2]=0;try{var g=b(c,e);Ab(g,!0);return g}catch(h){return h instanceof Ja||"unwind"==h?a=sa:(fa(1,h),a=void 0),a}}
function Kb(){var a=da;if(!(0<F)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;){var b=d.preRun.shift();wa.unshift(b)}Ka(wa);0<F||Hb||(Hb=!0,d.calledRun=!0,ra||(d.noFSInit||K.X.oa||K.X(),K.na=!1,Ka(xa),Ka(ya),aa(d),Lb&&Gb(a),Ka(za)))}}var Lb=!1;d.noInitialRun&&(Lb=!1);Kb();Object.assign(K,{init:K.X,mkdir:K.mkdir,mount:K.C,chdir:K.chdir,writeFile:K.writeFile,readFile:K.readFile,createLazyFile:K.ja,setIgnorePermissions:function(a){K.na=a}});


  return moduleArg.ready
}
);
})();
export default loadBsdiff;