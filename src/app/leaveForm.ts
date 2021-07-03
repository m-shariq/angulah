export  class leaveForm {
    id: number;
    username: string;
    email: string;
    status: string;
    student_message:string="";
    faculty_message: string="";
    leave_days: string="";
    date_from: string="";
    hod_message:string="";


   constructor ()
   {
       this.id=0;
       this.email="";
       this.username="";
       this.status="";
   }
}