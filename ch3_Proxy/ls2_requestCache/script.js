const DATA_A = './mock/data1.json';
const DATA_B = './mock/data2.json';

class FetchData {
    constructor(url) {
        this.url = url;
    }

    exec() {
        return new Promise((resolve, reject) => {
            fetch(this.url).then((res) => {
                resolve(res.json());
            })
        })
    }
}

class ProxyFetchData extends FetchData {
    constructor(url,cacheId) {
        super(url);
        this.cacheId = cacheId;
        this.cache = {};
    }

    async exec() {
        console.log(this.cache);
        if (this.cache[this.cacheId]) {
            return JSON.parse(this.cache[this.cacheId]);
        } else {
            const data = await super.exec();
            this.cache[this.cacheId] = JSON.stringify(data);
            return data;
        }
    }
}

window.onload = function(){
    const map = new Map([
        ["A", DATA_A],
        ["B", DATA_B]
    ]);

    const btns = document.querySelectorAll('button');
    btns.forEach(btn=>{
        btn.onclick = function(e){
            fetchDataHandle(e.target.dataset.id)
        }
    })

    let fetch1 = new ProxyFetchData(map.get('A'),'mockA');
    let fetch2 = new ProxyFetchData(map.get('B'),'mockB');

    async function fetchDataHandle(arg) {
        const fetchs = {
            A:fetch1,
            B:fetch2,
        };
        const result = await fetchs[arg].exec();
        console.log(result)
        render(JSON.stringify(result));
    }

    function render(text) {
        const infoWrapper = document.querySelector('#info');
        infoWrapper.innerHTML = text;
    }
}

