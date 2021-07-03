export  class leave {
    user_id: number;
    leave_days: number;
    date_from: string;
    student_message: string;
    faculty_message: string;

   constructor ()
   {
       this.user_id=0
       this.leave_days=0;
       this.date_from=""
       this.faculty_message="";
       this.student_message="";
   }
}