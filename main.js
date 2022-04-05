let tabsLink =Array.from( document.querySelectorAll('.tabsLink a'))
let tabsContent = Array.from(document.querySelectorAll('.tabsContent div'))

tabsLink.forEach((link)=>{
    link.addEventListener('click', (e)=> {
        e.preventDefault()
        let oldTarget = e.target.getAttribute('href')
        let newTarget = oldTarget.replace('#' , '')
        tabsContent.forEach(t => {
            t.style.display = 'none'
        })
        document.getElementById(newTarget).style.display = 'block'  //选中了 display变block

        tabsLink.forEach(link => {   // 选中的颜色
            link.classList.remove('active')
            e.target.classList.add('active')
        })

    })
})
document.getElementById('tabs-1').style.display = 'block'
tabsLink[0].classList.add('active')
