export  class login {
    id: number;
    username: string;
    email: string;
    password: string;
    status: string;
    leave_quota:number;
    leave_left:number;

   constructor ()
   {
       this.id=0;
       this.email="";
       this.username="";
       this.password="";
       this.status="";
       this.leave_quota=0;
       this.leave_left=0;
   }
}