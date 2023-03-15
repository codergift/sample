const btn =document.querySelector('.btn');
// Add click event
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hi</h1>';
});

// Add mouseover event
btn.addEventListener('mouseover', (e) =>{
    console.log('Mouse is over the element!');
});
  
// Add mouseout event
btn.addEventListener('mouseout', (e)=> {
    console.log('Mouse left the element!');
});

// Get the form element and its input field
const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#user');

// Add submit event to the form
myForm.addEventListener('submit', onSubmit) 
function onSubmit(e){
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input value and trim it
  const inputValue = input.value.trim();

  // Validate the input value
  if (nameInput.value === ''|| emailInput.value==='') {
    msg.classList.add('error');
    msg.innerHTML='Please enter all fields';

    setTimeout(()=>msg.remove(),3000);
  }else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode('${nameInput.value}: ${emailInput.value}'));
    
    userList.appendChild(li)
  }
  // Clear input fields
  nameInput.value='';
  emailInput.value='';

  // Log the input value to the console
  console.log(`Input value is: ${inputValue}`);
});
