import { 
     inquirerMenu,
     pause,
     readInput,
} from './helpers/inquirer.js';
import Tasks from './models/tasks.js';

const main = async () => {
     let opt = ''
     const tasks = new Tasks()

     do {
          opt = await inquirerMenu()
          switch (opt) {
               case '1':
                    //create option
                    const desc = await readInput('Description: ')
                    tasks.createTask(desc)

               break;

               case '2':
                    console.log(tasks._list)
               break;
          }

          await pause()

     } while (opt !== '0')
}

main()
