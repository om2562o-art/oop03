enum Role {
    Admin,
    Editor,
    Viewer
}
interface User {
    username: string,
    email: string,
    role: Role
}
function checkAccess(user:User){
    if(user.role===Role.Admin)
        console.log(`${user.username} ได้สิทธิผู้ดูแลระบบ ทำงานได้ทุกอย่าง`);
    else if(user.role===Role.Editor)
        console.log(`${user.username} ได้สิทธิผู้ดูแลระบบ แก้ไขข้อมูลได้`);
    else
        console.log(`${user.username} ได้สิทธิผู้ดูแลระบบ ดูข้อมูลได้เท่านั้น`);
}
const user1: User ={username:"Man",email:"m@gmail.com",role:Role.Admin};
checkAccess(user1);