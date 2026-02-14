const quotes = [
    "You got this!",
    "One step at a time.",
    "Believe in yourself.",
    "Keep pushing forward.",
    "Success is built on small tasks."
];

document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Add click to toggle completion
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    taskInput.value = '';
});

document.getElementById('motivate').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
});
