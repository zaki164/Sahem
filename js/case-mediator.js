document.addEventListener("click", function(e) {
    let q;
    let d = [...document.querySelectorAll("input[type='file']")];
    let w = [...document.querySelectorAll(".selectimage span")];
    let b = e.target.id;
    for (let i = 0; i < d.length; i++) {
        if (b == d[i].id) {
            q = i;
            let c = d[q];
            c.addEventListener("change", function() {
                let imageName = this.files[0];
                w[q].innerText = imageName.name;
            })
            break;
        }
    }
})