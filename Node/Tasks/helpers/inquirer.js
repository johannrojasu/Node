import colors from 'colors'
import inquirer from 'inquirer';

const questions = [
     {
          type: 'list',
          name: 'option',
          message: 'What do you want to do?',
          choices: [
               {
                    value: '1',
                    name: `${'1.'.green} Create task`
               },
               {
                    value: '2',
                    name: `${'2.'.green} List tasks`
               },
               {
                    value: '3',
                    name: `${'3.'.green} List completed tasks`
               },
               {
                    value: '4',
                    name: `${'4.'.green} List pending tasks`
               },
               {
                    value: '5',
                    name: `${'5.'.green} Complete task(s)`
               },
               {
                    value: '6',
                    name: `${'6.'.green} Delete task`
               },
               {
                    value: '0',
                    name: `${'0.'.green} Exit`
               }
          ]
     }
]



export const inquirerMenu = async () => {
     console.clear()
     console.log('=========================='.green)
     console.log('  Select an option'.white)
     console.log('=========================='.green)

     const {option} = await inquirer.prompt(questions)

     return option

}

export const pause = async () => {

     const pauseQuestions = [
          {
               type: 'input',
               name: 'enter',
               message: `Press ${'ENTER'.green} to continue`
     
          }
     ]

     console.log('\n')
     await inquirer.prompt(pauseQuestions)
}

