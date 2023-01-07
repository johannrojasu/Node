import { v4 as uuidv4 } from "uuid";

class Task {

     id = ''
     desc = ''
     copletedAt = null

     constructor( desc ) {
          this.id = uuidv4();
          this.desc = desc;
          this.copletedAt = null;
     }

}

export default Task;