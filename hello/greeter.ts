function greeter(person:string): string {
    return 'Hello, ' + person;
}

let user:string = 'Jane User';

document.body.textContent = greeter(user);