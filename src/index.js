import './styles/index.scss'
import $ from "jquery";
// import 'bootstrap';

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Vitalij',
    age: '37',
    ...userStack
}

$('.block').html('jQuery is working');

console.log(user)