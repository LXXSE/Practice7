let Email = ['aboba@m.r', 'vbxbv@m.r']
let WhiteEmail = []
let BlackEmail = ['aboba@m.r']
function check (Email, BlackEmail) {
    let a = []
    for (let i = 0; i < Email.length; i++) {
        a[Email[i]] = true;
    }
    for (let i = 0; i < BlackEmail.length; i++) {
        if (a[BlackEmail[i]]) {
            delete a[BlackEmail[i]];
        } else {
            a[BlackEmail[i]] = true;
        }
    }
    for (let k in a) {
        WhiteEmail.push(k);
    }
    return WhiteEmail;
}
WhiteEmail = (check(BlackEmail, Email));
console.log(WhiteEmail)
export default {check};