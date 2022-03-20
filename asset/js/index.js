let mainImg = document.querySelector('.section-image__main img')
let modal = document.getElementById('modal')
let listImg = document.querySelectorAll('.image__item')
let mainImgModal = document.querySelector('.modal__img-main img')
let listImgModal = document.querySelectorAll('.modal__img-item')
let prevBtn = document.querySelector('.icon.prev')
let nextBtn = document.querySelector('.icon.next')
let closeBtn = document.querySelector('.icon.close')

//ảnh đầu tiên trong list
let currentIndex = 0;
getCurrentImg(currentIndex)

function getCurrentImg(index){  
    currentIndex = index
    mainImg.src = listImg[currentIndex].src

    //xóa class active
    listImg.forEach((item)=>{
        item.classList.remove("isactive")
    })

    listImg[currentIndex].classList.add("isactive")
}

listImg.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        getCurrentImg(index)
    })
})

mainImg.addEventListener('click',()=>{
    showModal()
    prevBtn.addEventListener('click',()=>{
        if(currentIndex == 0) currentIndex = listImg.length - 1
        else currentIndex--

        mainImgModal.src = listImg[currentIndex].src

        //xóa class active
        listImgModal.forEach((item)=>{
            item.classList.remove("isactive")
        })

        listImgModal[currentIndex].classList.add("isactive")
    })

    nextBtn.addEventListener('click',()=>{
        if(currentIndex == listImg.length - 1) currentIndex = 0
        else currentIndex++

        mainImgModal.src = listImg[currentIndex].src

        //xóa class active
        listImgModal.forEach((item)=>{
            item.classList.remove("isactive")
        })

        listImgModal[currentIndex].classList.add("isactive")
    })

    closeBtn.addEventListener('click',()=>{
        modal.style.display = "none"
    })

    listImgModal.forEach((item, index)=>{
        item.addEventListener('click',()=>{
            mainImgModal.src = listImgModal[index].src

            //xóa class active
            listImgModal.forEach((item)=>{
                item.classList.remove("isactive")
            })
    
            listImgModal[index].classList.add("isactive")
        })
    })
})

function showModal(){
    modal.style.display = "flex"
    mainImgModal.src = mainImg.src
    listImgModal[currentIndex].classList.add("isactive")
}

