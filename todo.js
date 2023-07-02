let theInput=document.querySelector('.add-task input')
let theAddBtn=document.querySelector('.add-task .plus')
let taskContent=document.querySelector('.task-content')
let taskCount=document.querySelector('.tasks-count span')
let taskCompleted=document.querySelector('.tasks-completed span')


window.onload=function (){
  theInput.focus()
}

theAddBtn.onclick =function(){

  
  if(theInput.value === '') {

    Swal.fire({
      title:`there is no task to add? 


      plz enter your task first
      `,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  
  else {
let noTaskMsg=document.querySelector('.no-task-message')

if (noTaskMsg) {
  noTaskMsg.remove();
}

  

    let mainSpan=document.createElement('span')

    let deleteElement=document.createElement('span')

    let text =document.createTextNode(theInput.value)

    let deleteText =document.createTextNode('Delete')

    mainSpan.appendChild(text)

    mainSpan.className='task-box'

    deleteElement.appendChild(deleteText)
    deleteElement.className='delete'

    mainSpan.appendChild(deleteElement)

    taskContent.appendChild(mainSpan)

    theInput.value=''

  theInput.focus()


 


  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your task has been added',
    showConfirmButton: false,
    timer: 1500
  })

  }
calculateTask()

}



document.addEventListener('click',function(e){
  if(e.target.className == 'delete'){
   e.target.parentNode.remove()

   if(taskContent.childElementCount ==0){
    createNoTask
   }

  }

  if(e.target.classList.contains('task-box')){
    e.target.classList.toggle('finished')
  }

calculateTask()

})

function createNoTask(){
  let msgSpan= document.createElement('span')

  let msgText = document.createTextNode('No task to show')

  msgSpan.appendChild(msgText)

  msgSpan.className='no-task-message'

  taskContent.appendChild(msgSpan)
}

function calculateTask(){
  taskCount.innerHTML = document.querySelectorAll('.task-content .task-box' ).length

  taskCompleted.innerHTML = document.querySelectorAll('.task-content .finished' ).length
}