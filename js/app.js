let size = 2;
let d = {
		'x': 0,
		'y': 0,
		'z': 0,
		'a': new Array(size)
};
d['a'].forEach(el => {
	el = {
		'x': 0,
		'y': 0,
		'z': 0,
		'a': new Array(size)
	};
	el['a'].forEach(le => {
		le = {
			'x': 0,
			'y': 0,
			'z': 0,
			'a': new Array(size)
		};
	});
});
d['a'].forEach(el => {
    console.log(typeof(el));
    el['a'].forEach(le => {
        console.log(le);
        le['a'].forEach(e => {
            console.log(e);
        })
    })
})

function load(){
	let blob1 = document.getElementById("blob_presentation");
	let blob2 = document.getElementById("blob_link_history");
	blob1.style.top = "-100px";
	blob1.style.left = "-158px";
	blob1.style.transform = "rotateZ(360deg)";

	blob2.style.top = "-140px";
	blob2.style.left = "-95px";
	blob2.style.transform = "rotateZ(360deg)";
}

