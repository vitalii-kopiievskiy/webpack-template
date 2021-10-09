const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Vitalij',
    age: '37',
    ...userStack
}

console.log(user)