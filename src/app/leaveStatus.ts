export  class leaveStatus {
    id: number;
    user_id:number;
    leave_days: number;
    date_from: string;
    hod_message: string;
    faculty_message: string;
    hod_approval: string;
    faculty_approval: string;
    student_message:string;

   constructor ()
   {
       this.id=0;
       this.user_id=0;
       this.leave_days=0;
       this.date_from="";
       this.faculty_message="";
       this.hod_message="";
       this.hod_approval="";
       this.faculty_approval="";
       this.student_message=""
   }
}