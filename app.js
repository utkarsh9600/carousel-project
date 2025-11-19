
let arr = [
    'https://images.unsplash.com/photo-1758032553546-fd53c48a5e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1757743066485-e7acb3d7af7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1757778281735-f26d15bff432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1757269746970-dc477517268f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D'
]

let image = document.querySelector('img');

let idx = 0;

setInterval(() => {
    image.setAttribute('src',arr[idx]);
    idx = (idx + 1) % arr.length;
} , 3000);