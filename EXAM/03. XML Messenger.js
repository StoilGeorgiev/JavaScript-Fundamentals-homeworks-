function XMLtoHTML(string) {
    let usersRegex = /^<message\s+(from|to)="([A-Za-z0-9\s\.\n*]+)"\s+(to|from)="([A-Za-z0-9\s\._\n*]+)"/;
    let users = string.match(usersRegex);
    console.log(users);


}
XMLtoHTML(`<message from="Bob" to="Alice" timestamp="1497254092">Hey man, what's up?</message>`);
