import { moduleName, authorName } from "./modules/BodyModule"
import { HeadModule } from "./modules/HeadModule"


const infoModule = {
  head: 'Head Module',
  body: 'Body Module',
  footer: 'Footer Module',
  func: () => console.log('zdarova'),
  addition: {
    name: 'Artiom',
    famely: {
      children: 2
    }
  }
}


HeadModule(infoModule)

console.log(`Module name: ${moduleName(infoModule)} ------  Author: ${authorName({infoModule})}`)













